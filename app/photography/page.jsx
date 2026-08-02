import Link from "next/link";
import Gallery from "@/components/Gallery";
import KineticHero from "@/components/KineticHero";
import CTA from "@/components/CTA";
import PackageCard from "@/components/PackageCard";
import { Check } from "@/components/icons";
import { findPackage, COMBO_PACKAGES } from "@/data/packages";

export const metadata = {
  title: "Photography",
  description:
    "Wedding, portrait, event and product photography with fixed package pricing.",
};

const GALLERY = [
  { img: "/assets/img/work-01.svg", alt: "Wedding photograph", title: "Aarav & Meera", tag: "Wedding" },
  { img: "/assets/img/work-02.svg", alt: "Portrait photograph", title: "Studio Portrait", tag: "Portrait" },
  { img: "/assets/img/work-03.svg", alt: "Event photograph", title: "Annual Gala", tag: "Event" },
  { img: "/assets/img/work-06.svg", alt: "Wedding photograph", title: "Beach Ceremony", tag: "Wedding" },
  { img: "/assets/img/work-07.svg", alt: "Portrait photograph", title: "Actor Headshots", tag: "Portrait" },
  { img: "/assets/img/work-04.svg", alt: "Product photograph", title: "Ceramics Lookbook", tag: "Product" },
];

export default function PhotographyPage() {
  return (
    <>
      <KineticHero />

      <section className="section">
        <div className="shell">
          <div className="split">
            <div className="split__media reveal">
              <img src="/assets/img/photoshoot.webp" alt="Photography work" loading="lazy" />
            </div>
            <div className="reveal">
              <span className="eyebrow">How we shoot</span>
              <h2>Unposed where it matters, directed where it helps.</h2>
              <p className="lede">We stay out of the way during the moments that make themselves, and step in with clear direction when a photograph needs building — group shots, portraits, detail work.</p>
              <ul className="tick-list">
                <li><Check size={18} strokeWidth={2.2} /><span>Full-frame bodies with backup cameras on every booking.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Every delivered photograph individually colour graded, not batch-filtered.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Private online gallery with full-resolution downloads for 12 months.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Prints and framing available directly from the same gallery.</span></li>
              </ul>
              <div className="btn-row" style={{ marginTop: "34px" }}>
                <Link className="btn" href="/contact">Check availability</Link>
                <Link className="btn btn--ghost" href="/pricing#packages">Package rates</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">What we shoot</span>
            <h2>Sessions we take on.</h2>
          </div>
          <div className="grid grid--3">
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.5-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5c0 5-7 9.5-7 9.5z" /></svg>
              </div>
              <h4>Weddings &amp; Engagements</h4>
              <p>Full-day coverage with two photographers, from the morning preparations to the last dance.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="3" /><circle cx="12" cy="13.5" r="4" /><path d="M8 7l1.6-3h4.8L16 7" /></svg>
              </div>
              <h4>Portraits</h4>
              <p>Studio or on location — headshots, personal branding, couples and family sittings.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 20a6.4 6.4 0 0 0-2-4.6" /></svg>
              </div>
              <h4>Events &amp; Corporate</h4>
              <p>Conferences, launches, birthdays and award nights, with a same-day highlight set.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5v8l-9 5-9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></svg>
              </div>
              <h4>Product &amp; Catalogue</h4>
              <p>Clean white-background shots and lifestyle sets, priced per item so you can scale up.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2 5.5L19.5 10 14 12l-2 5.5L10 12 4.5 10 10 8.5z" /></svg>
              </div>
              <h4>Maternity &amp; Newborn</h4>
              <p>Gentle, unhurried sessions in our heated studio with props and outfits provided.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1.5" /><rect x="7" y="7" width="10" height="10" rx="1" /></svg>
              </div>
              <h4>Fashion Portfolios</h4>
              <p>Multi-look model and actor portfolios with retouching and print-ready exports.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">The process</span>
            <h2>From enquiry to framed print.</h2>
          </div>
          <div className="grid grid--4">
            <div className="feature reveal"><div className="feature__icon">1</div><h4>Talk it through</h4><p>A 15-minute call to understand the day, the people and the shots you cannot miss.</p></div>
            <div className="feature reveal"><div className="feature__icon">2</div><h4>Lock the date</h4><p>A 30% advance holds the date. You get a written shot list and timeline back.</p></div>
            <div className="feature reveal"><div className="feature__icon">3</div><h4>Shoot day</h4><p>We arrive early, scout the light and shoot. Backup gear and spare cards always on hand.</p></div>
            <div className="feature reveal"><div className="feature__icon">4</div><h4>Deliver &amp; frame</h4><p>Previews in 72 hours, full gallery in 10 days, and framing from the same gallery if you want it.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--cream" style={{display:'none'}}>
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Recent photography</span>
            <h2>A few frames.</h2>
          </div>
          <Gallery items={GALLERY} />
          <div className="btn-row" style={{ justifyContent: "center", marginTop: "46px" }}>
            <Link className="btn btn--ghost" href="/portfolio">Full portfolio</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Photography pricing</span>
            <h2>Pick a package.</h2>
            <p>Total package rates including the crew, editing and delivery of everything listed. Each one also comes with a cinematographer, so the reels and photos come from the same session.</p>
          </div>
          <div className="grid grid--3">
            <PackageCard pkg={findPackage("save-the-date")} />
            <PackageCard
              pkg={findPackage("wedding-ceremony")}
              featured
              tag="Most booked"
              cta="Check our date"
            />
            <PackageCard pkg={findPackage("haldi")} />
          </div>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: "46px" }}>
            <Link className="btn btn--ghost" href="/pricing#packages">All packages &amp; rates</Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Combo packages</span>
            <h2>Shooting more than one event?</h2>
            <p>Each event in a combo gets its own photographer and cinematographer, and the album bag comes free with the print set. A combo costs exactly what its events cost on their own — there is no markup for booking together.</p>
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
          <div className="btn-row" style={{ justifyContent: "center", marginTop: "46px" }}>
            <Link className="btn btn--ghost" href="/pricing#combos">Compare combos side by side</Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
