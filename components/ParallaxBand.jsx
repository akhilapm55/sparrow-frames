"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Full-bleed image band whose photo drifts against the scroll. The image is
 * rendered taller than the band (140%, pulled up 20%) so the travel never
 * exposes an edge — the overhang is the budget the transform spends.
 */
export default function ParallaxBand({ image, alt, children }) {
  const root = useRef(null);

  useEffect(() => {
    // Reduced motion gets the same band, just pinned still.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context((self) => {
      gsap.fromTo(
        self.selector(".parallax__img"),
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="parallax" ref={root}>
      <img className="parallax__img" src={image} alt={alt} loading="lazy" />
      <div className="parallax__scrim" aria-hidden="true" />

      <div className="shell parallax__content">
        <div className="parallax__inner reveal">{children}</div>
      </div>
    </section>
  );
}
