import { FRAME_WIDTHS, FRAME_RATES, frameRate } from "@/data/packages";

/**
 * Receives a frame order from /frames and creates a row in the Sparrow Sales
 * Pipeline. Runs server-side only — the Notion token can write to that
 * database, so it must never reach the browser.
 */

const NOTION_API = "https://api.notion.com/v1/pages";
const NOTION_VERSION = "2022-06-28";

const CUSTOM = "Custom size";
const SIZES = FRAME_RATES.map((r) => r.size);

// Website orders land here rather than in Booked Orders, and deliberately
// leave Total Order Value empty — nothing unconfirmed should reach the
// payment dashboard's revenue totals.
const PIPELINE_STATUS = "Collecting Details";
const PAYMENT_STATUS = "Not Paid";
const LEAD_SOURCE = "Website";
const PRODUCT_TYPE = "frame";

const clean = (v, max) => String(v ?? "").trim().slice(0, max);

/* Rates are display strings ("₹1,218"); the number is what Notion stores. */
function rateValue(rate) {
  const n = Number(String(rate).replace(/[^\d.]/g, ""));
  return Number.isFinite(n) ? n : null;
}

const text = (content) => ({ rich_text: [{ text: { content } }] });

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  // Honeypot: a real person never sees this field, so anything in it is a bot.
  // Answer 200 so the bot has nothing to learn from the response.
  if (clean(body.company, 100)) return Response.json({ ok: true });

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 30);
  const size = clean(body.size, 40);
  const width = clean(body.width, 20);
  const qty = Math.min(50, Math.max(1, Math.round(Number(body.qty) || 1)));

  if (!name || !phone) {
    return Response.json({ error: "name_and_phone_required" }, { status: 400 });
  }
  if (size !== CUSTOM && !SIZES.includes(size)) {
    return Response.json({ error: "unknown_size" }, { status: 400 });
  }
  if (!FRAME_WIDTHS.includes(width)) {
    return Response.json({ error: "unknown_width" }, { status: 400 });
  }

  // Price is recomputed here from the rate sheet — never taken from the client,
  // which could post any figure it liked.
  const rate = size === CUSTOM ? null : frameRate(size, width);
  if (size !== CUSTOM && !rate) {
    return Response.json({ error: "size_width_unavailable" }, { status: 400 });
  }

  // Config is checked after validation so a malformed request is answered on
  // its own terms. Unconfigured tells the client to fall back to WhatsApp
  // rather than swallowing the order.
  const token = process.env.NOTION_TOKEN;
  const database_id = process.env.NOTION_DATABASE_ID;
  if (!token || !database_id) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const sizeLabel =
    size === CUSTOM
      ? `Custom — ${clean(body.custom, 200) || "dimensions to confirm"}`
      : `${size} inches`;

  const notes = [
    `Photograph: ${clean(body.source, 120)}`,
    body.delivery ? "Delivery & hanging requested (within city)" : null,
    clean(body.notes, 1500) || null,
  ]
    .filter(Boolean)
    .join("\n");

  const properties = {
    Name: { title: [{ text: { content: `${name} — ${sizeLabel} frame` } }] },
    "Customer Name": text(name),
    Phone: { phone_number: phone },
    "Product Type": { select: { name: PRODUCT_TYPE } },
    Size: text(`${sizeLabel} · ${width} moulding`),
    Quantity: { number: qty },
    "Lead Source": { select: { name: LEAD_SOURCE } },
    "Pipeline Status": { select: { name: PIPELINE_STATUS } },
    "Payment Status": { select: { name: PAYMENT_STATUS } },
    "Order date": { date: { start: new Date().toISOString().slice(0, 10) } },
    Notes: text(notes),
  };

  if (rate) properties["Unit Price"] = { number: rateValue(rate) };

  const res = await fetch(NOTION_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ parent: { database_id }, properties }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Notion create failed", res.status, detail);
    return Response.json({ error: "notion_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
