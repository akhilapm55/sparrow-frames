import Link from "next/link";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import PackageCard from "@/components/PackageCard";
import { Check } from "@/components/icons";
import { findPackage, FRAME_FROM, FRAME_SHOWCASE } from "@/data/packages";
import { STUDIO } from "@/data/studio";

// Icons are inline rather than files — these three cards carry no photography,
// so there is nothing to load and nothing to keep in sync with /assets.
const SERVICES = [
  {
    title: "Photography",
    href: "/photography",
    text: "Weddings, save the date, temple, haldi and birthday sessions — shot on full-frame, hand-edited, delivered in a private online gallery.",
    points: ["Photographer on every event", "Private online gallery", "Previews in 72 hours"],
    priceLabel: "from",
    price: "₹3,999",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2l1.4-2h7.8l1.4 2h2.2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" />
        <circle cx="12" cy="13" r="3.6" />
      </svg>
    ),
  },
  {
    title: "Videography",
    href: "/videography",
    text: "Highlight films and 40–50 second reels, cut from the same events — colour graded, licensed music, 4K masters.",
    points: ["Cinematographer on every event", "Licensed music, never muted", "Vertical cut-downs included"],
    priceLabel: "included in",
    price: "every package",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 5v14M17 5v14M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Custom Frames",
    href: "/frames",
    text: "Three moulding widths cut to any size in our own workshop, from 6 × 4 desk prints up to 36 × 24 wall pieces — ready to hang.",
    points: ["Cut and joined in-house", "0.5, 0.75 and 1 inch mouldings", "Custom sizes on measurement"],
    priceLabel: "from",
    price: FRAME_FROM["0.5 inch"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="1.5" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>
    ),
  },
];

// The framed pieces photographed for the size guide on /frames, reused here so
// the home page shows real work instead of placeholders. Laid out as a montage,
// which takes any number of pieces — add one to the showcase and it lands here.
const FRAME_PREVIEW = FRAME_SHOWCASE.map((item) => ({
  img: item.img,
  alt: `${item.size} inch frame in a ${item.width} moulding`,
  title: `${item.paper ? `${item.paper} · ` : ""}${item.size} inches`,
  tag: `${item.width} moulding`,
}));

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__media">
          <img src="/assets/img/hero.webp" alt="Studio photography work" />
        </div>

        <div className="shell hero__inner">
          <span className="eyebrow">Photography · Videography · Framing</span>
          <h1>
            We keep your best moments
            <span className="script">beautifully framed.</span>
          </h1>
          <p className="hero__lede">
            A full-service studio for weddings, portraits, events and brands — from the
            first frame we shoot to the finished piece hanging on your wall.
          </p>

          <div className="btn-row hero__actions">
            <Link className="btn" href="/pricing">View pricing</Link>
            <Link className="btn btn--on-dark" href="/portfolio">See our work</Link>
          </div>

          <div className="hero__stats">
            {/* <div className="hero__stat"><b>850+</b><span>Shoots delivered</span></div>
            <div className="hero__stat"><b>12</b><span>Years behind the lens</span></div>
            <div className="hero__stat"><b>4.9</b><span>Average client rating</span></div>
            <div className="hero__stat"><b>72h</b><span>Preview turnaround</span></div> */}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">What we do</span>
            <h2>Three crafts, one studio.</h2>
            <p>Book a single event, bundle several into a combo, or bring us a photograph to print and frame.</p>
          </div>

          <div className="grid grid--3">
            {SERVICES.map((svc, i) => (
              <article className="service-card reveal" key={svc.href}>
                <span className="service-card__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="service-card__body">
                  <div className="service-card__icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.text}</p>
                  <ul className="service-card__points">
                    {svc.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="service-card__foot">
                    <span className="service-card__price">
                      {svc.priceLabel} <b>{svc.price}</b>
                    </span>
                    <Link className="text-link" href={svc.href}>Details <span>→</span></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section section--cream">
        <div className="shell">
          <div className="section-head reveal">
            <span className="eyebrow">Why clients stay</span>
            <h2>No hidden extras, ever.</h2>
          </div>

          <div className="grid grid--4">
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h4>Fixed package pricing</h4>
              <p>Every rate is published on this site. What you see is what you pay — travel inside the city included.</p>
            </div>

            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
              </div>
              <h4>Fast turnaround</h4>
              <p>Previews within 72 hours, full galleries in 10 days, wedding films in three weeks. Rush delivery available.</p>
            </div>

            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.1 6.1 20.2l1.2-6.6L2.5 9l6.6-.9z" /></svg>
              </div>
              <h4>Own workshop</h4>
              <p>Framing is cut, joined and finished in-house, so print and frame are colour-matched and never outsourced.</p>
            </div>

            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <h4>Backed-up originals</h4>
              <p>Your RAW files are kept on redundant drives for 12 months, so a lost phone never means lost memories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="shell">
          <div className="split">
            <div className="split__media reveal">
              <img src="/assets/img/about.webp" alt="Inside the studio" loading="lazy" />
            </div>

            <div className="reveal">
              <span className="eyebrow">The studio</span>
              <h2>A small team that shoots, edits and frames.</h2>
              <p className="lede">
                We started in a one-room workshop with a single camera and a mitre saw. Today
                the same hands still shoot the frames and cut the mouldings — which is exactly
                why the finish is consistent.
              </p>
              <ul className="tick-list">
                <li><Check size={18} strokeWidth={2.2} /><span>A photographer and a cinematographer on every event we cover.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Archival pigment printing on 310 gsm cotton rag paper.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Backup gear on site — no shoot has ever been cancelled.</span></li>
              </ul>
              <div className="btn-row" style={{ marginTop: "34px" }}>
                <Link className="btn btn--ghost" href="/contact">Talk to us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="section section--cream">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Selected work</span>
            <h2>Recent frames.</h2>
            <p>Pieces finished in our workshop, photographed at the size and moulding they were made in.</p>
          </div>

          <Gallery items={FRAME_PREVIEW} montage />

          <div className="btn-row" style={{ justifyContent: "center", marginTop: "46px" }}>
            <Link className="btn btn--ghost" href="/frames#sizes">See every size &amp; rate</Link>
          </div>
        </div>
      </section>

      {/* Popular packages */}
      <section className="section">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Popular packages</span>
            <h2>Straightforward pricing.</h2>
            <p>The most-booked package, the combo that covers everything, and framing for the photographs you want on the wall. Every rate is on the pricing page.</p>
          </div>

          <div className="grid grid--3">
            <PackageCard
              pkg={findPackage("wedding-ceremony")}
              featured
              tag="Most booked"
              cta="Check our date"
            />

            <PackageCard
              pkg={findPackage("combo-premium-complete")}
              cta="See what's included"
            />

            <article className="price-card reveal">
              <h3>Frame &amp; Print</h3>
              <p className="price-card__meta">Any photo, any size</p>
              <div className="price-card__amount">{FRAME_FROM["0.5 inch"]}<small>onwards</small></div>
              <p className="price-card__note">Made in our own workshop</p>
              <ul className="price-card__features">
                <li><Check /><span>Three moulding widths: 0.5, 0.75 and 1 inch</span></li>
                <li><Check /><span>Sizes from 6 × 4 up to 36 × 24</span></li>
                <li><Check /><span>Custom sizes quoted on measurement</span></li>
              </ul>
              <Link className="btn btn--ghost" href="/frames">See size chart</Link>
            </article>
          </div>

          <div className="btn-row" style={{ justifyContent: "center", marginTop: "46px" }}>
            <Link className="btn btn--ghost" href="/pricing">All packages &amp; rates</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--cream">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Client stories</span>
            <h2>Hear real experiences.</h2>
          </div>

          <div className="grid grid--3">
            <blockquote className="quote reveal">
              <div className="quote__stars">★★★★★</div>
              <p>“They shot our wedding and framed the best twelve photographs for our hallway. One vendor, one invoice, zero chasing.”</p>
              <div className="quote__by">
                <img src="/assets/img/avatar-1.svg" alt="" />
                <div><b>Priya &amp; Rohan</b><span>Premium Complete</span></div>
              </div>
            </blockquote>

            <blockquote className="quote reveal">
              <div className="quote__stars">★★★★★</div>
              <p>“Our product catalogue was shot and delivered in four days. The reels they cut from the same session doubled our story views.”</p>
              <div className="quote__by">
                <img src="/assets/img/avatar-2.svg" alt="" />
                <div><b>Nikhil Menon</b><span>Product &amp; Reels</span></div>
              </div>
            </blockquote>

            <blockquote className="quote reveal">
              <div className="quote__stars">★★★★★</div>
              <p>“I brought in my grandfather's damaged photograph. They restored, printed and framed it — it looks better than the original did.”</p>
              <div className="quote__by">
                <img src="/assets/img/avatar-3.svg" alt="" />
                <div><b>Sana Qureshi</b><span>Restoration &amp; Framing</span></div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      <CTA
        buttons={[
          { label: "Request a quote", href: "/contact", primary: true },
          { label: "Call the studio", href: STUDIO.phone.href, primary: false },
        ]}
      />
    </>
  );
}
