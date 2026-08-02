"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/photography", label: "Photography" },
  { href: "/videography", label: "Videography" },
  { href: "/frames", label: "Frames" },
  // { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
];

// Pages that open with a dark, full-bleed hero: the header starts transparent
// over the artwork and turns solid once you scroll past it. Keep this in step
// with the pages rendering <KineticHero /> (plus the home page).
const DARK_HERO_PAGES = [
  "/",
  "/photography",
  "/videography",
  "/pricing",
  "/contact",
];

export default function Header() {
  const pathname = usePathname();
  const hasDarkHero = DARK_HERO_PAGES.includes(pathname);
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  // Lock body scroll while the mobile nav is open (mirrors body.nav-open).
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  // Over a dark hero the header starts transparent and turns solid once you
  // scroll past it. Every other page is solid from the start.
  useEffect(() => {
    if (!hasDarkHero) return;
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasDarkHero]);

  // Escape closes the mobile nav.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const headerClass = [
    "site-header",
    hasDarkHero ? "" : "site-header--inner",
    hasDarkHero && solid ? "is-solid" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="shell site-header__inner">
        <Link className="brand" href="/">
          <img className="brand__mark" src="/assets/img/logo.png" alt="Sparrow Frames" />
        </Link>

        <nav className="nav" id="primary-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link className="btn btn--on-dark" href="/contact">
            Book a shoot
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
