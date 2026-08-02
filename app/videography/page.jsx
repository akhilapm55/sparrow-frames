import Link from "next/link";
import CTA from "@/components/CTA";
import KineticHero from "@/components/KineticHero";
import ParallaxBand from "@/components/ParallaxBand";
import PackageCard from "@/components/PackageCard";
import { Check } from "@/components/icons";
import { findPackage } from "@/data/packages";

export const metadata = {
  title: "Videography",
  description:
    "Cinematic wedding films, brand videos and social reels shot in 4K.",
};

const HERO_LINES = [
  { text: "We film", accent: false },
  { text: "the story", accent: true },
  { text: "behind the day.", accent: false },
];

const HERO_MARQUEE =
  "Wedding films · Teasers · Brand stories · Interviews · Social reels · 4K · ";

export default function VideographyPage() {
  return (
    <>
      <KineticHero
        lines={HERO_LINES}
        marquee={HERO_MARQUEE}
        cta={{ href: "/portfolio", label: "Watch the reel" }}
      />

      <section className="section">
        <div className="shell">
          <div className="split split--flip">
            <div className="split__media reveal">
              <img src="/assets/img/videography.webp" alt="Video production" loading="lazy" />
            </div>
            <div className="reveal">
              <span className="eyebrow">How we film</span>
              <h2>A film, not a recording.</h2>
              <p className="lede">Anyone can point a camera at a stage. We plan coverage, capture clean audio and cut to a story arc — so the film still holds up on the fifth watch.</p>
              <ul className="tick-list">
                <li><Check size={18} strokeWidth={2.2} /><span>4K capture with a second body on every shoot for cutaways.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Wireless lav mics and a dedicated recorder — vows and speeches stay audible.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Licensed music, so nothing gets muted or taken down on social.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Vertical cut-downs for Instagram and YouTube included in every package.</span></li>
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
            <span className="eyebrow">What we make</span>
            <h2>Films we produce.</h2>
          </div>
          <div className="grid grid--3">
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.5-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5c0 5-7 9.5-7 9.5z" /></svg>
              </div>
              <h4>Wedding Films</h4>
              <p>An 8–12 minute feature plus a 60-second teaser, cut from full-day coverage.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 4v16M17 4v16M3 12h18" /></svg>
              </div>
              <h4>Brand &amp; Product</h4>
              <p>Scripted 2–3 minute films for websites, launches and investor decks.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
              </div>
              <h4>Interviews &amp; Podcasts</h4>
              <p>Multi-camera setups with broadcast audio and clean, readable subtitles.</p>
            </div>
          </div>
        </div>
      </section>

      <ParallaxBand
        image="/assets/img/cta.webp"
        alt="Cinematographer filming against a sunset sky"
      >
        {/* <span className="eyebrow">Showreel</span> */}
        <h2>The reel is still in the edit.</h2>
        <p>We are cutting a showreel from this season&apos;s weddings, and it goes up here the moment it is graded. Until then, tell us what you are planning and we will send films from shoots like yours.</p>
        <div className="btn-row">
          <Link className="btn" href="/contact">Ask for sample films</Link>
          <Link className="btn btn--on-dark" href="/pricing#packages">Package rates</Link>
        </div>
      </ParallaxBand>

      <section className="section section--cream">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Video pricing</span>
            <h2>Production packages.</h2>
            <p>A cinematographer is part of every package, alongside the photographer. Reels are cut at 40–50 seconds each, colour graded and delivered with licensed music.</p>
          </div>
          <div className="grid grid--3">
            <PackageCard pkg={findPackage("save-the-date")} />
            <PackageCard
              pkg={findPackage("wedding-ceremony")}
              featured
              tag="Best value"
              cta="Check our date"
            />
            <PackageCard pkg={findPackage("temple-shoot")} />
          </div>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: "46px" }}>
            <Link className="btn btn--ghost" href="/pricing#combos">All packages &amp; combos</Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
