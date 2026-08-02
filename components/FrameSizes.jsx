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
  return (
    <div className="frame-sizes">
      {orderedShowcase().map((item, i) => {
        const rate = frameRate(item.size, item.width);

        return (
          <figure className="frame-size reveal" key={`${item.size}-${item.width}-${i}`}>
            <div className="frame-size__stage">
              <img
                className="frame-size__photo"
                src={encodeURI(item.img)}
                alt={`${item.size} inch frame in a ${item.width} moulding`}
                loading="lazy"
              />
            </div>
            <figcaption className="frame-size__label">
              <b>
                {item.paper ? `${item.paper} · ` : ""}
                {item.size} inches
              </b>
              <span>
                {item.width} moulding{rate ? ` · ${rate}` : ""}
              </span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
