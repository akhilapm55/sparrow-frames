"use client";

import { useEffect, useState } from "react";

/**
 * Portfolio gallery with optional category filters and an image lightbox.
 *
 * @param {Array} items    - { img, alt, title, tag, category?, wide? }
 * @param {Array} filters  - optional [{ key, label }]; omit for a plain gallery
 * @param {boolean} montage - column-flow collage of smaller tiles at each
 *                            photo's own proportions, instead of the even
 *                            4:5 grid. `wide` is ignored in this mode.
 */
export default function Gallery({ items, filters = null, montage = false }) {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState(null); // { src, alt } | null

  // Escape closes the lightbox.
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      {filters && (
        <div className="filters reveal">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter${active === f.key ? " is-active" : ""}`}
              type="button"
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className={`gallery${montage ? " gallery--montage" : ""}`}>
        {items.map((item, i) => {
          const hidden =
            filters && active !== "all" && item.category !== active;
          const className = [
            "gallery__item",
            item.wide && !montage ? "gallery__item--wide" : "",
            "reveal",
            hidden ? "is-hidden" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <a
              key={i}
              className={className}
              href={item.img}
              onClick={(e) => {
                e.preventDefault();
                setLightbox({ src: item.img, alt: item.alt || "" });
              }}
            >
              <img src={item.img} alt={item.alt} loading="lazy" />
              <div className="gallery__cap">
                <b>{item.title}</b>
                <span>{item.tag}</span>
              </div>
            </a>
          );
        })}
      </div>

      <div
        className={`lightbox${lightbox ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
        onClick={(e) => {
          if (
            e.target === e.currentTarget ||
            e.target.classList.contains("lightbox__close")
          ) {
            setLightbox(null);
          }
        }}
      >
        <button className="lightbox__close" type="button" aria-label="Close">
          &times;
        </button>
        {lightbox && <img src={lightbox.src} alt={lightbox.alt} />}
      </div>
    </>
  );
}
