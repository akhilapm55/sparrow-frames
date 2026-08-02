"use client";

import { useMemo, useState } from "react";
import { FRAME_WIDTHS, FRAME_RATES, frameRate } from "@/data/packages";
import { openWhatsApp } from "@/data/studio";

const CUSTOM = "Custom size";

const PHOTO_SOURCES = [
  "I will send the photo on WhatsApp",
  "I have a print to bring in",
  "You shot it — it is in my gallery",
  "Needs restoration first",
];

/* Rates are display strings ("₹1,218"); pull the number back out to total up. */
function rateValue(rate) {
  const n = Number(String(rate).replace(/[^\d.]/g, ""));
  return Number.isFinite(n) ? n : null;
}

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-5.2A8.5 8.5 0 1 1 21 11.5z" />
  </svg>
);

/* Widths this size is actually made in. */
function widthsFor(size) {
  if (size === CUSTOM) return FRAME_WIDTHS;
  return FRAME_WIDTHS.filter((w) => frameRate(size, w));
}

export default function FrameOrderForm() {
  const [size, setSize] = useState(FRAME_RATES[3].size); // 12 × 8, the common one
  const [width, setWidth] = useState("0.75 inch");
  const [qty, setQty] = useState(1);
  // idle → sending → sent, or failed when the order could not be recorded.
  const [state, setState] = useState("idle");
  // Held so the WhatsApp fallback (and the follow-up button) can still send
  // the order after the form has been replaced by the confirmation.
  const [message, setMessage] = useState(null);

  const available = useMemo(() => widthsFor(size), [size]);
  const rate = size === CUSTOM ? null : frameRate(size, width);
  const unit = rate ? rateValue(rate) : null;
  const total = unit ? unit * Math.max(1, Number(qty) || 1) : null;

  // Picking a size that isn't made in the selected width moves the selection to
  // one that is, so the form can never describe a frame we don't make.
  const onSizeChange = (next) => {
    setSize(next);
    const widths = widthsFor(next);
    if (!widths.includes(width)) setWidth(widths[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const count = Math.max(1, Number(data.get("qty")) || 1);
    const sizeLine =
      size === CUSTOM
        ? `Custom size — ${data.get("custom") || "dimensions to confirm"}`
        : `${size} inches`;

    const lines = [
      "Hello Sparrow Frames, I would like to order a frame.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Size: ${sizeLine}`,
      `Moulding: ${width}`,
      `Quantity: ${count}`,
      rate
        ? `Rate: ${rate} each${count > 1 ? ` · ${inr(unit * count)} total` : ""}`
        : "Rate: to be quoted on measurement",
      `Photograph: ${data.get("source")}`,
      data.get("delivery") && "Delivery & hanging: yes, within city",
      data.get("notes") && `\nNotes: ${data.get("notes")}`,
    ];
    setMessage(lines);
    setState("sending");

    try {
      const res = await fetch("/api/frame-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      setState(res.ok ? "sent" : "failed");
    } catch {
      setState("failed");
    }
    // Deliberately no automatic window.open here: after an await the browser
    // no longer treats this as a user gesture and would block the popup. The
    // WhatsApp button below is a fresh click instead.
  };

  if (state === "sent" || state === "failed") {
    const failed = state === "failed";
    return (
      <div className="order-form order-form--done">
        <h3>{failed ? "Send it to us on WhatsApp" : "Order received."}</h3>
        <p>
          {failed
            ? "We could not record the order just now. Nothing is lost — send it straight to the workshop on WhatsApp and we will pick it up there."
            : "It is with the workshop and we will confirm the price and timeline on your number. Want to add anything, or send the photograph now?"}
        </p>
        <div className="btn-row">
          <button className="btn" type="button" onClick={() => openWhatsApp(message)}>
            <WhatsAppIcon />
            {failed ? "Send on WhatsApp" : "Continue on WhatsApp"}
          </button>
          {!failed && (
            <button
              className="btn btn--ghost"
              type="button"
              onClick={() => setState("idle")}
            >
              Order another frame
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label className="field">
          <span>Your name *</span>
          <input type="text" name="name" required />
        </label>
        <label className="field">
          <span>Phone *</span>
          <input type="tel" name="phone" required />
        </label>
      </div>

      <div className="field-row">
        <label className="field">
          <span>Frame size</span>
          <select
            name="size"
            value={size}
            onChange={(e) => onSizeChange(e.target.value)}
          >
            {FRAME_RATES.map((row) => (
              <option key={row.size}>{row.size}</option>
            ))}
            <option>{CUSTOM}</option>
          </select>
        </label>

        <label className="field">
          <span>Moulding width</span>
          <select
            name="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          >
            {FRAME_WIDTHS.map((w) => (
              <option key={w} value={w} disabled={!available.includes(w)}>
                {w}
                {available.includes(w) ? "" : " — not made in this size"}
              </option>
            ))}
          </select>
        </label>
      </div>

      {size === CUSTOM && (
        <label className="field">
          <span>Your measurements</span>
          <input
            type="text"
            name="custom"
            placeholder="e.g. 20 × 14 inches, or the wall space you want it to fill"
          />
        </label>
      )}

      <div className="field-row">
        <label className="field">
          <span>Quantity</span>
          <input
            type="number"
            name="qty"
            min="1"
            max="50"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </label>
        <label className="field">
          <span>The photograph</span>
          <select name="source">
            {PHOTO_SOURCES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="field">
        <span>Anything else</span>
        <textarea
          name="notes"
          placeholder="Matting, glazing, a deadline, the wall it is going on…"
        ></textarea>
      </label>

      <label className="order-form__check">
        <input type="checkbox" name="delivery" />
        <span>Add delivery &amp; wall mounting within the city</span>
      </label>

      <div className="order-form__total">
        {rate ? (
          <>
            <b>{total !== null ? inr(total) : rate}</b>
            <span>
              {rate} per frame
              {Number(qty) > 1 ? ` × ${qty}` : ""} · confirmed on WhatsApp
            </span>
          </>
        ) : (
          <>
            <b>Quoted on measurement</b>
            <span>Send the dimensions and we will price it the same day</span>
          </>
        )}
      </div>

      {/* Honeypot — hidden from people, catches bots that fill every input. */}
      <input
        className="order-form__hp"
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        className="btn order-form__submit"
        type="submit"
        disabled={state === "sending"}
      >
        {state === "sending" ? "Sending…" : "Book now"}
      </button>

      <p className="form-note">
        We confirm the price and timeline on your number, and you can carry on
        to WhatsApp afterwards to send the photograph.
      </p>
    </form>
  );
}
