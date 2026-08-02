"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import FrameOrderForm from "@/components/FrameOrderForm";
import { FRAME_RATES, FRAME_SHOWCASE, frameRate } from "@/data/packages";

// Show the photographed pieces in the same order as the rate chart, so the
// guide reads small-to-large rather than in whatever order photos were added.
function orderedShowcase() {
  const order = FRAME_RATES.map((row) => row.size);
  return [...FRAME_SHOWCASE].sort(
    (a, b) => order.indexOf(a.size) - order.indexOf(b.size)
  );
}

export default function FrameSizes() {
  // The piece being ordered, or null when the dialog is closed.
  const [picked, setPicked] = useState(null);

  return (
    <>
      <div className="frame-sizes">
        {orderedShowcase().map((item, i) => {
          const rate = frameRate(item.size, item.width);
          const describe = `${item.size} inch frame in a ${item.width} moulding`;

          return (
            <figure className="frame-size reveal" key={`${item.size}-${item.width}-${i}`}>
              {/* The photo is a second, redundant way to reach the same dialog
                  as the button below, so it is left out of the tab order to
                  avoid two stops per card. */}
              <button
                className="frame-size__stage"
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                onClick={() => setPicked(item)}
              >
                <img
                  className="frame-size__photo"
                  src={encodeURI(item.img)}
                  alt={describe}
                  loading="lazy"
                />
              </button>

              <figcaption className="frame-size__label">
                <b>
                  {item.paper ? `${item.paper} · ` : ""}
                  {item.size} inches
                </b>
                <span>
                  {item.width} moulding{rate ? ` · ${rate}` : ""}
                </span>
              </figcaption>

              <button
                className="btn btn--ghost frame-size__cta"
                type="button"
                onClick={() => setPicked(item)}
              >
                Order this size
                <span className="sr-only"> — {describe}</span>
              </button>
            </figure>
          );
        })}
      </div>

      {picked && (
        <Modal
          label={`Order the ${picked.size} inch frame`}
          onClose={() => setPicked(null)}
        >
          <div className="modal__head">
            <img
              className="modal__thumb"
              src={encodeURI(picked.img)}
              alt=""
              aria-hidden="true"
            />
            <div>
              <span className="eyebrow">Order this frame</span>
              <h3>
                {picked.paper ? `${picked.paper} · ` : ""}
                {picked.size} inches
              </h3>
              <p>
                {picked.width} moulding
                {frameRate(picked.size, picked.width)
                  ? ` · ${frameRate(picked.size, picked.width)} per frame`
                  : ""}
              </p>
            </div>
          </div>

          <FrameOrderForm
            initialSize={picked.size}
            initialWidth={picked.width}
          />
        </Modal>
      )}
    </>
  );
}
