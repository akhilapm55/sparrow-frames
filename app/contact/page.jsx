import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import KineticHero from "@/components/KineticHero";
import { STUDIO } from "@/data/studio";

export const metadata = {
  title: "Contact",
  description: "Request a quote for photography, videography or custom framing.",
};

const HERO_LINES = [
  { text: "Let's talk", accent: false },
  { text: "about the day", accent: true },
  { text: "you want kept.", accent: false },
];

const HERO_MARQUEE =
  "Weddings · Portraits · Framing · Restoration · Walk-ins welcome · ";

export default function ContactPage() {
  return (
    <>
      <KineticHero
        compact
        lines={HERO_LINES}
        lede="Tell us the date, the place and what you need covered. You will have availability and a fixed, itemised quote within one working day."
        marquee={HERO_MARQUEE}
        cta={{ href: "#enquiry", label: "Start an enquiry" }}
      />

      <section className="section" id="enquiry">
        <div className="shell">
          <div className="contact-grid">
            <div className="reveal">
              <h2 style={{ fontSize: "34px" }}>Request a quote</h2>
              <p style={{ marginBottom: "32px" }}>Fields marked with * are required.</p>
              <ContactForm />
            </div>

            <div className="reveal">
              <h2 style={{ fontSize: "34px" }}>Studio details</h2>
              <p style={{ marginBottom: "32px" }}>Walk-ins are welcome for framing and restoration. Shoots are by appointment.</p>

              <ul className="info-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>
                  <div>
                    <b>Studio</b>
                    {STUDIO.name}<br />
                    {STUDIO.address.lines[0]}<br />
                    {STUDIO.address.lines[1]}
                  </div>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z" /></svg>
                  <div>
                    <b>Phone &amp; WhatsApp</b>
                    <a href={STUDIO.phone.href}>{STUDIO.phone.label}</a>
                  </div>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                  <div><b>Email</b><a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a></div>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
                  <div><b>Opening hours</b>{STUDIO.hours.weekdays}<br />{STUDIO.hours.weekend}</div>
                </li>
              </ul>

              <div className="map-embed">
                <iframe
                  src={STUDIO.mapEmbed}
                  title={`Map to ${STUDIO.name}, ${STUDIO.address.short}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell" style={{ maxWidth: "900px" }}>
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Before you write</span>
            <h2>Quick answers.</h2>
          </div>
          <div className="faq reveal">
            <details open>
              <summary>How far in advance should I book?</summary>
              <p>Weddings are usually booked 3 to 8 months ahead, especially between November and February. Portraits, product shoots and framing can normally be scheduled within the same week.</p>
            </details>
            <details>
              <summary>Do you hold a date without payment?</summary>
              <p>We hold a date for 72 hours while you decide. After that it goes back into the calendar unless the 30% advance is paid.</p>
            </details>
            <details>
              <summary>Can we meet before booking?</summary>
              <p>Yes, and we recommend it for weddings. Come to the studio, look at full galleries and printed albums, and meet the person who will actually shoot your day.</p>
            </details>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
