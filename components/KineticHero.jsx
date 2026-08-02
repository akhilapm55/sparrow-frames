"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const DEFAULT_TITLE_LINES = [
  { text: "We capture", accent: false },
  { text: "the moments", accent: true },
  { text: "worth framing.", accent: false },
];

const DEFAULT_MARQUEE =
  "Weddings · Save the date · Haldi · Temple · Portraits · Framed prints · ";

const DEFAULT_CTA = { href: "/portfolio", label: "See the work" };

// Split a line into per-character spans, keeping words unbroken so the line
// still wraps like text. Done by hand rather than with the SplitText plugin —
// it is a dozen lines and one less dependency to keep working.
function splitChars(el) {
  const chars = [];
  const words = el.textContent.split(" ");
  el.textContent = "";

  words.forEach((word, w) => {
    const wordEl = document.createElement("span");
    wordEl.className = "khero__word";

    [...word].forEach((ch) => {
      const charEl = document.createElement("span");
      charEl.className = "khero__char";
      charEl.textContent = ch;
      wordEl.appendChild(charEl);
      chars.push(charEl);
    });

    el.appendChild(wordEl);
    if (w < words.length - 1) el.appendChild(document.createTextNode(" "));
  });

  return chars;
}

export default function KineticHero({
  eyebrow,
  lede,
  lines = DEFAULT_TITLE_LINES,
  marquee = DEFAULT_MARQUEE,
  cta = DEFAULT_CTA,
  // Drops the full-viewport height, for pages where the content below the
  // hero is the point of the page rather than an invitation to scroll.
  compact = false,
}) {
  const root = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;

    const ctx = gsap.context((self) => {
      const lines = self.selector(".khero__line");
      const chars = lines.flatMap((line) => splitChars(line));

      // Reduced motion: show the finished state, skip every animation.
      if (reduced) {
        gsap.set([".khero__eyebrow", ".khero__lede", ".khero__cta"], { opacity: 1, y: 0 });
        return;
      }

      gsap.set(chars, { yPercent: 120 });
      gsap.set([".khero__eyebrow", ".khero__lede", ".khero__cta"], { y: 24, opacity: 0 });

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .to(".khero__eyebrow", { y: 0, opacity: 1, duration: 1 }, 0.2)
        .to(chars, { yPercent: 0, duration: 1.2, stagger: 0.018 }, 0.3)
        .to([".khero__lede", ".khero__cta"], { y: 0, opacity: 1, duration: 1 }, "-=0.7");

      gsap.to(".khero__marqueeTrack", {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });

      // Pointer-driven bits are desktop only — a phone has no hover, and the
      // custom cursor would just sit there.
      if (!fine) return;

      const el = root.current;
      const ring = self.selector(".khero__ring")[0];
      const dot = self.selector(".khero__dot")[0];
      const glow = self.selector(".khero__glow")[0];

      const ringX = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3" });
      const ringY = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3" });
      const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
      const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
      const glowX = gsap.quickTo(glow, "x", { duration: 1.4, ease: "power3" });
      const glowY = gsap.quickTo(glow, "y", { duration: 1.4, ease: "power3" });

      const onMove = (e) => {
        ringX(e.clientX);
        ringY(e.clientY);
        dotX(e.clientX);
        dotY(e.clientY);
        glowX((e.clientX / window.innerWidth - 0.5) * 120);
        glowY((e.clientY / window.innerHeight - 0.5) * 120);
      };

      // The cursor only exists over the hero, so the rest of the site keeps
      // its normal pointer.
      const show = () => gsap.to([ring, dot], { autoAlpha: 1, duration: 0.2 });
      const hide = () => gsap.to([ring, dot], { autoAlpha: 0, duration: 0.2 });

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerenter", show);
      el.addEventListener("pointerleave", hide);

      const magnets = self.selector("[data-magnetic]");
      const magnetCleanups = magnets.map((magnet) => {
        const xTo = gsap.quickTo(magnet, "x", { duration: 0.7, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(magnet, "y", { duration: 0.7, ease: "elastic.out(1, 0.4)" });

        const move = (e) => {
          const r = magnet.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.45);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.45);
        };
        const reset = () => {
          xTo(0);
          yTo(0);
        };
        const grow = () => ring.classList.add("is-active");
        const shrink = () => ring.classList.remove("is-active");

        magnet.addEventListener("pointermove", move);
        magnet.addEventListener("pointerleave", reset);
        magnet.addEventListener("pointerenter", grow);
        magnet.addEventListener("pointerleave", shrink);

        return () => {
          magnet.removeEventListener("pointermove", move);
          magnet.removeEventListener("pointerleave", reset);
          magnet.removeEventListener("pointerenter", grow);
          magnet.removeEventListener("pointerleave", shrink);
        };
      });

      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerenter", show);
        el.removeEventListener("pointerleave", hide);
        magnetCleanups.forEach((fn) => fn());
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`khero${compact ? " khero--compact" : ""}`} ref={root}>
      <div className="khero__ring" aria-hidden="true" />
      <div className="khero__dot" aria-hidden="true" />

      <div className="khero__glow" aria-hidden="true" />
      <div className="khero__grain" aria-hidden="true" />

      <div className="shell khero__content">
        {eyebrow && <p className="khero__eyebrow">{eyebrow}</p>}

        <h1 className="khero__title">
          {lines.map((line) => (
            <span className="khero__mask" key={line.text}>
              <span
                className={`khero__line${line.accent ? " khero__line--accent" : ""}`}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>

        {lede && <p className="khero__lede">{lede}</p>}

        <Link className="khero__cta" href={cta.href} data-magnetic>
          <span className="khero__ctaFill" aria-hidden="true" />
          <span className="khero__ctaLabel">{cta.label}</span>
          <span className="khero__ctaArrow" aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="khero__marquee" aria-hidden="true">
        <div className="khero__marqueeTrack">
          <span>{marquee}</span>
          <span>{marquee}</span>
        </div>
      </div>
    </section>
  );
}
