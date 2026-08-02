"use client";

import { useEffect, useState } from "react";

/**
 * The full-width showreel poster on the videography page. Clicking it opens the
 * image in the shared lightbox styling. Swap the poster/onClick for a real
 * YouTube or Vimeo <iframe> embed when the reel is online (see README).
 */
export default function Showreel({ poster, title, duration }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        className="gallery__item reveal"
        href={poster}
        style={{ display: "block", aspectRatio: "16 / 9" }}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <img src={poster} alt={title} loading="lazy" style={{ aspectRatio: "16 / 9" }} />
        <div className="gallery__cap">
          <b>{title}</b>
          <span>{duration}</span>
        </div>
      </a>

      <div
        className={`lightbox${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
        onClick={(e) => {
          if (
            e.target === e.currentTarget ||
            e.target.classList.contains("lightbox__close")
          ) {
            setOpen(false);
          }
        }}
      >
        <button className="lightbox__close" type="button" aria-label="Close">
          &times;
        </button>
        {open && <img src={poster} alt={title} />}
      </div>
    </>
  );
}
