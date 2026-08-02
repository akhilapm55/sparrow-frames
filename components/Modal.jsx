"use client";

import { useCallback, useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accessible dialog: Escape and a backdrop click close it, Tab is kept inside
 * the panel, the page behind cannot scroll, and focus returns to whatever
 * opened it.
 */
export default function Modal({ label, onClose, children }) {
  const panel = useRef(null);
  const opener = useRef(null);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const items = panel.current?.querySelectorAll(FOCUSABLE);
      if (!items?.length) return;

      const first = items[0];
      const last = items[items.length - 1];
      // Wrap at both ends, so Tab can never reach the page behind.
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    opener.current = document.activeElement;
    document.body.classList.add("modal-open");
    document.addEventListener("keydown", onKeyDown);

    // Land inside the dialog rather than leaving focus on the page behind.
    const first = panel.current?.querySelector(FOCUSABLE);
    (first || panel.current)?.focus();

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKeyDown);
      opener.current?.focus?.();
    };
  }, [onKeyDown]);

  return (
    // mousedown rather than click: a drag that starts inside the panel and
    // releases on the backdrop should not count as a dismiss.
    <div
      className="modal"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={label}
        ref={panel}
        tabIndex={-1}
      >
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
