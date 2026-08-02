"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Replicates the vanilla-JS scroll-reveal from the static site: every element
 * with the `.reveal` class fades/slides in once it enters the viewport, with a
 * small stagger so grids cascade. Re-runs on each route change.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealables = Array.from(document.querySelectorAll(".reveal"));
    if (!revealables.length) return;

    if (!("IntersectionObserver" in window)) {
      revealables.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          setTimeout(() => el.classList.add("is-in"), i * 70);
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    revealables.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
