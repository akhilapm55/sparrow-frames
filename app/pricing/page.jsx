import Link from "next/link";
import CTA from "@/components/CTA";
import KineticHero from "@/components/KineticHero";
import PackageCard from "@/components/PackageCard";
import { Check } from "@/components/icons";
import { STUDIO } from "@/data/studio";
import {
  STARTING_RATES,
  EVENT_PACKAGES,
  COMBO_PACKAGES,
  FRAME_WIDTHS,
  FRAME_RATES,
} from "@/data/packages";

export const metadata = {
  title: "Pricing",
  description:
    "Package rates for save the date, temple, haldi and wedding coverage, combo packages and the full frame size chart.",
};

const HERO_LINES = [
  { text: "Every price", accent: false },
  { text: "we charge", accent: true },
  { text: "is on this page.", accent: false },
];

const HERO_MARQUEE =
  "Save the date · Haldi · Temple · Wedding · Combos · Frames · Restoration · ";

export default function PricingPage() {
  return (
    <>
      <KineticHero
        lines={HERO_LINES}
        lede="Package figures are the total cost for that package, including the crew, editing and delivery of every item listed. Rates marked “from” are starting points we quote around your day."
        marquee={HERO_MARQUEE}
        cta={{ href: "#packages", label: "See the packages" }}
      />

      {/* Entry-level rates — plain white, so the hero's rounded bottom corners
          sit on the same colour they cut through. */}
      <section className="section" id="starting">
        <div className="shell">
          <div className="section-head reveal">
            <span className="eyebrow">Starting rates</span>
            <h2>Where our pricing begins.</h2>
            <p>Not every shoot needs a full package. These are starting points — tell us the day and we will quote the crew and deliverables around it.</p>
          </div>

          <div className="grid grid--2">
            {STARTING_RATES.map((rate) => (
              <article className="price-card price-card--rate reveal" key={rate.id}>
                <h3>{rate.name}</h3>
                <p className="price-card__meta">{rate.meta}</p>
                <div className="price-card__rate">
                  <small>{rate.prefix}</small>
                  <span>{rate.price}</span>
                  <em>{rate.unit}</em>
                </div>
                <p className="price-card__quotedLabel">Quoted around</p>
                <ul className="price-card__features">
                  {rate.quotedOn.map((item) => (
                    <li key={item}><Check /><span>{item}</span></li>
                  ))}
                </ul>
                <p className="price-card__note">{rate.note}</p>
                <Link className="btn btn--ghost" href={`/contact?package=${rate.id}`}>Get a quote</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Single-event packages */}
      <section className="section section--cream" id="packages">
        <div className="shell">
          <div className="section-head reveal">
            <span className="eyebrow">01 — Event packages</span>
            <h2>Book a single event.</h2>
            <p>Every package comes with both a photographer and a cinematographer, so you get photos and video from the same session.</p>
          </div>

          <div className="grid grid--4">
            {EVENT_PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                featured={pkg.id === "wedding-ceremony"}
                tag={pkg.id === "wedding-ceremony" ? "Most booked" : undefined}
                cta={pkg.id === "wedding-ceremony" ? "Check our date" : "Book this"}
              />
            ))}
          </div>

          <h3 style={{ margin: "70px 0 24px" }} className="reveal">What each package includes</h3>
          <div className="table-wrap reveal">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Crew</th>
                  <th>Edited photos</th>
                  <th>Reels</th>
                  <th>Highlight video</th>
                  <th>Album &amp; prints</th>
                  <th>Total cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Save The Date</td>
                  <td>1 photographer + 1 cinematographer</td>
                  <td>10</td>
                  <td>3 (40–50 sec each)</td>
                  <td>—</td>
                  <td>—</td>
                  <td className="amount">₹9,720</td>
                </tr>
                <tr>
                  <td>Temple Shoot</td>
                  <td>1 photographer + 1 cinematographer</td>
                  <td>5</td>
                  <td>1 (40–50 sec)</td>
                  <td>Yes</td>
                  <td>—</td>
                  <td className="amount">₹12,240</td>
                </tr>
                <tr>
                  <td>Haldi</td>
                  <td>1 photographer + 1 cinematographer</td>
                  <td>5</td>
                  <td>3 (40–50 sec each)</td>
                  <td>—</td>
                  <td>—</td>
                  <td className="amount">₹17,520</td>
                </tr>
                <tr>
                  <td>Wedding Ceremony</td>
                  <td>1 photographer + 1 cinematographer</td>
                  <td>10</td>
                  <td>3 (40–50 sec each)</td>
                  <td>Yes</td>
                  <td>50-leaf album, table calendar, A3 frame, pendrive &amp; box</td>
                  <td className="amount">₹41,220</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">Outstation shoots: travel and stay billed at actuals, quoted upfront before booking.</p>
        </div>
      </section>

      {/* Combo packages */}
      <section className="section" id="combos">
        <div className="shell">
          <div className="section-head reveal">
            <span className="eyebrow">02 — Combo packages</span>
            <h2>Bundle your events.</h2>
            <p>Combos carry a separate crew for each event and add the album bag to the print set. Nothing is marked up for booking more than one event — a combo costs exactly what its events cost individually.</p>
          </div>

          <div className="grid grid--2">
            {COMBO_PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                featured={pkg.id === "combo-premium-complete"}
                tag={pkg.id === "combo-premium-complete" ? "Everything covered" : undefined}
                cta={pkg.id === "combo-premium-complete" ? "Check our date" : "Book this"}
              />
            ))}
          </div>

          <h3 style={{ margin: "70px 0 24px" }} className="reveal">Combos side by side</h3>
          <div className="table-wrap reveal">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Combo</th>
                  <th>Events covered</th>
                  <th>Crew</th>
                  <th>Edited photos</th>
                  <th>Reels</th>
                  <th>Highlight videos</th>
                  <th>Total cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Save The Date + Wedding</td>
                  <td>Save the date, wedding ceremony</td>
                  <td>2 + 2</td>
                  <td>20</td>
                  <td>6</td>
                  <td>1</td>
                  <td className="amount">₹50,940</td>
                </tr>
                <tr>
                  <td>Traditional Combo</td>
                  <td>Temple shoot, wedding ceremony</td>
                  <td>2 + 2</td>
                  <td>15</td>
                  <td>4</td>
                  <td>2</td>
                  <td className="amount">₹53,460</td>
                </tr>
                <tr>
                  <td>Classic Combo</td>
                  <td>Save the date, haldi, wedding ceremony</td>
                  <td>3 + 3</td>
                  <td>25</td>
                  <td>9</td>
                  <td>1</td>
                  <td className="amount">₹68,460</td>
                </tr>
                <tr>
                  <td>Premium Complete</td>
                  <td>Save the date, haldi, temple shoot, wedding ceremony</td>
                  <td>4 + 4</td>
                  <td>30</td>
                  <td>10</td>
                  <td>2</td>
                  <td className="amount">₹80,700</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">Crew shown as photographers + cinematographers. Every combo includes the full album and print set: 50-leaf designed album, table calendar, A3 frame, pendrive, box and album bag.</p>
        </div>
      </section>

      {/* Frame pricing */}
      <section className="section section--cream" id="frames">
        <div className="shell">
          <div className="section-head reveal">
            <span className="eyebrow">03 — Framing</span>
            <h2>Frame &amp; print price list.</h2>
            <p>Rates are per finished frame, listed by moulding width and size in inches. A dash means that size is not made in that width.</p>
          </div>

          <div className="table-wrap reveal">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Size (inches)</th>
                  {FRAME_WIDTHS.map((width) => (
                    <th key={width}>{width} width</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FRAME_RATES.map((row) => (
                  <tr key={row.size}>
                    <td>{row.size}</td>
                    {row.rates.map((rate, i) => (
                      <td key={FRAME_WIDTHS[i]} className="amount">{rate || "—"}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td>Custom size</td>
                  <td className="amount" colSpan={FRAME_WIDTHS.length}>Quoted on measurement — bring or send the dimensions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">A wider moulding costs more at the same size. The largest sizes are made in the 1 inch width only, and the smallest sizes are not made in 1 inch — ask us and we will suggest the width that suits the photograph.</p>

          <h3 style={{ margin: "70px 0 24px" }} className="reveal">Framing extras &amp; restoration</h3>
          <div className="table-wrap reveal">
            <table className="price-table">
              <thead><tr><th>Service</th><th>Details</th><th>Turnaround</th><th>Price</th></tr></thead>
              <tbody>
                <tr><td>Collage Frame</td><td>Multi-photo layout, 4 to 12 openings</td><td>7 days</td><td className="amount">On request</td></tr>
                <tr><td>Photo Restoration</td><td id="restoration">Tear repair, fade correction, colourisation</td><td>5 days</td><td className="amount">On request</td></tr>
                <tr><td>Canvas Stretch</td><td>Gallery-wrapped on a wooden stretcher bar</td><td>5 days</td><td className="amount">On request</td></tr>
                <tr><td>Certificate / Jersey Framing</td><td>Shadow box with spacers, depth up to 2″</td><td>7 days</td><td className="amount">On request</td></tr>
                <tr><td>Re-framing existing art</td><td>Old frame removed, new moulding fitted</td><td>5 days</td><td className="amount">On request</td></tr>
                <tr><td>Home Delivery &amp; Hanging</td><td>Within city limits, wall mounting included</td><td>—</td><td className="amount">On request</td></tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">These are quoted per piece once we see the photograph and the size you want — send us a message and you will have a figure the same day.</p>
        </div>
      </section>

      {/* Why the combos are priced this way */}
      <section className="section section--ink">
        <div className="shell">
          <div className="section-head section-head--center reveal" style={{ color: "rgba(255,255,255,.72)" }}>
            <span className="eyebrow">How combos work</span>
            <h2>Add events without a markup.</h2>
            <p>Every combo is simply the events inside it, priced as listed. The crew scales with the number of events, and the album set comes with any combo that includes the wedding ceremony.</p>
          </div>

          <div className="grid grid--3">
            <div className="feature reveal" style={{ textAlign: "center" }}>
              <h4 style={{ color: "#fff", fontSize: "34px" }}>No markup</h4>
              <p>A combo costs exactly the sum of its events — ₹9,720 + ₹41,220 is the ₹50,940 combo, to the rupee.</p>
            </div>
            <div className="feature reveal" style={{ textAlign: "center" }}>
              <h4 style={{ color: "#fff", fontSize: "34px" }}>Album bag free</h4>
              <p>Book two or more events together and the album bag is added to the print set at no extra cost.</p>
            </div>
            <div className="feature reveal" style={{ textAlign: "center" }}>
              <h4 style={{ color: "#fff", fontSize: "34px" }}>Full crew</h4>
              <p>Each event gets its own photographer and cinematographer — four of each on the Premium Complete package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="shell" style={{ maxWidth: "900px" }}>
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Good to know</span>
            <h2>Booking questions.</h2>
          </div>

          <div className="faq reveal">
            <details open>
              <summary>How do I reserve a date?</summary>
              <p>A 30% advance confirms the date; the balance is due on delivery. Dates are held for 72 hours while you decide, and the advance is adjustable to another date once, free of charge, if you reschedule at least 30 days out.</p>
            </details>
            <details>
              <summary>Is the price on this page the final amount?</summary>
              <p>The figure shown against each package is its total cost for everything listed in that package. Any applicable taxes appear on the invoice, and you will always see the full amount on your written quote before you pay anything.</p>
            </details>
            <details>
              <summary>Can I add an event to a package later?</summary>
              <p>Yes. Events are priced individually and combos are just the sum of them, so adding a haldi or a temple shoot after booking costs the same as it would have upfront — subject to our crew being free on that date.</p>
            </details>
            <details>
              <summary>What does &ldquo;edited photos&rdquo; mean?</summary>
              <p>Those are the finished, individually graded photographs delivered from the shoot. We shoot far more than that on the day, and you can add extra edited photos or additional reels to any package on request.</p>
            </details>
            <details>
              <summary>How long do you keep my files?</summary>
              <p>Edited galleries stay online for 12 months. RAW originals are held on two separate drives for the same period, after which they are deleted unless you ask us to archive them.</p>
            </details>
            <details>
              <summary>Can I frame photos I did not shoot with you?</summary>
              <p>Yes. Bring a print or send a digital file — we will check the resolution and tell you the largest size it will hold up at before printing anything.</p>
            </details>
            <details>
              <summary>Do you travel outside the city?</summary>
              <p>We do, across the country. Travel, stay and a per-day crew charge are quoted upfront and added to the package price — never billed as a surprise afterwards.</p>
            </details>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Still deciding?"
        title="Get a quote for your exact shoot."
        text="Send us the date, place and what you need covered. You'll have a fixed, itemised quote within one working day."
        buttons={[
          { label: "Request a quote", href: "/contact", primary: true },
          { label: "Call the studio", href: STUDIO.phone.href, primary: false },
        ]}
      />
    </>
  );
}
