import Link from "next/link";
import { STUDIO } from "@/data/studio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/">
              <img className="brand__mark" src="/assets/img/logo.png" alt="Sparrow Frames" />
            </Link>
            <p style={{ maxWidth: "34ch" }}>
              Wedding photography, films and handmade framing under one roof.
            </p>
            <div className="socials">
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="2" y="5" width="20" height="14" rx="4" />
                  <path d="M10 9.5l5 2.5-5 2.5z" />
                </svg>
              </a>
              <a href={STUDIO.phone.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-5.2A8.5 8.5 0 1 1 21 11.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5>Services</h5>
            <ul className="footer-links">
              <li><Link href="/photography">Photography</Link></li>
              <li><Link href="/videography">Videography</Link></li>
              <li><Link href="/frames">Custom Frames</Link></li>
              <li><Link href="/frames#sizes">Frame Sizes</Link></li>
              <li><Link href="/pricing#restoration">Photo Restoration</Link></li>
            </ul>
          </div>

          <div>
            <h5>Studio</h5>
            <ul className="footer-links">
              {/* <li><Link href="/portfolio">Portfolio</Link></li> */}
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/pricing#faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h5>Visit us</h5>
            <ul className="footer-links">
              <li>{STUDIO.address.short}</li>
              <li><a href={STUDIO.phone.href}>{STUDIO.phone.label}</a></li>
              <li><a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a></li>
              <li>{STUDIO.hours.short}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} Sparrow Frames. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
