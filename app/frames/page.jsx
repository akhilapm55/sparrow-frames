import Link from "next/link";
import CTA from "@/components/CTA";
import FrameSizes from "@/components/FrameSizes";
import FrameOrderForm from "@/components/FrameOrderForm";
import { Check } from "@/components/icons";
import { FRAME_WIDTHS, FRAME_RATES, FRAME_FROM } from "@/data/packages";

export const metadata = {
  title: "Custom Frames",
  description:
    "Handmade frames in three moulding widths, cut to any size, with the full rate chart by size.",
};

export default function FramesPage() {
  return (
    <>
      {/* <section className="page-hero">
        <div className="shell">
          <span className="eyebrow">03 — Framing</span>
          <h1>Custom Frames</h1>
          <p>Cut, joined and finished in our own workshop. Three moulding widths, any size from 6 × 4 up to 36 × 24 — delivered ready to hang, from ₹198.</p>
          <div className="crumbs"><Link href="/">Home</Link> &nbsp;/&nbsp; Frames</div>
        </div>
      </section> */}

      <section className="section section--cream section--first" id="sizes">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <h1>How big is each frame?</h1>
            <p>Real pieces from the workshop, labelled with the paper size, the moulding width and the rate for that size. Every size we make is in the rate chart above — these are the ones you can see in the hand.</p>
          </div>

          <FrameSizes />

          <p className="table-note" style={{ textAlign: "center" }}>Not sure which to pick? Send us the photograph and a picture of the wall — we will tell you the largest size it will print well at.</p>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: "34px" }}>
            <Link className="btn" href="#order">Book now</Link>
            <Link className="btn btn--ghost" href="/contact">Ask about a size</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="split">
            <div className="split__media reveal">
              <img src="/assets/img/frames-detail.webp" alt="Frame samples" loading="lazy" />
            </div>
            <div className="reveal">
              <span className="eyebrow">The workshop</span>
              <h2>Nothing here is outsourced.</h2>
              <p className="lede">Mouldings are cut on our own mitre saw, joined under pressure and finished by hand. Because we print and frame in the same room, the paper and the wood are matched to each other rather than guessed at.</p>
              <ul className="tick-list">
                <li><Check size={18} strokeWidth={2.2} /><span>Archival pigment printing on 310&nbsp;gsm cotton rag paper.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Acid-free matting that will not yellow the print over time.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Anti-glare glass as standard; museum glass and acrylic on request.</span></li>
                <li><Check size={18} strokeWidth={2.2} /><span>Hanging kit fitted and levelled before it leaves the workshop.</span></li>
              </ul>
              <div className="btn-row" style={{ marginTop: "34px" }}>
                <Link className="btn" href="#order">Book now</Link>
                <Link className="btn btn--ghost" href="/pricing#frames">Full size chart</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Moulding widths</span>
            <h2>Three widths to choose from.</h2>
            <p>The width of the moulding sets both the look and the rate. Pick the profile first, then the size from the chart below.</p>
          </div>
          <div className="grid grid--3">
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1.5" /><rect x="6" y="6" width="12" height="12" rx="1" /></svg>
              </div>
              <h4>0.5 inch — Slim</h4>
              <p>A quiet, narrow profile for desk and shelf sizes up to 12 × 8. From {FRAME_FROM["0.5 inch"]}.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1.5" /><rect x="7" y="7" width="10" height="10" rx="1" /></svg>
              </div>
              <h4>0.75 inch — Standard</h4>
              <p>The everyday choice, made in every size from 6 × 4 to 12 × 18. From {FRAME_FROM["0.75 inch"]}.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1.5" /><rect x="8" y="8" width="8" height="8" rx="1" /></svg>
              </div>
              <h4>1 inch — Wide</h4>
              <p>A heavier frame that carries the big wall pieces, up to 36 × 24. From {FRAME_FROM["1 inch"]}.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head reveal">
            <span className="eyebrow">Size chart</span>
            <h2>Frame rates by size.</h2>
            <p>Rate per finished frame, by moulding width and size in inches. A dash means we do not make that size in that width.</p>
          </div>
          <div className="table-wrap reveal">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Size (inches)</th>
                  {FRAME_WIDTHS.map((width) => (
                    <th key={width}>{width} width</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FRAME_RATES.map((row) => (
                  <tr key={row.size}>
                    <td>{row.size}</td>
                    {row.rates.map((rate, i) => (
                      <td key={FRAME_WIDTHS[i]} className="amount">{rate || "—"}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td>Custom size</td>
                  <td className="amount" colSpan={FRAME_WIDTHS.length}>Quoted on measurement — send us the dimensions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">Glazing options, matting and delivery within the city are confirmed on your quote. Tell us the photograph and the wall it is going on and we will recommend a size and width.</p>
        </div>
      </section>

   

      <section className="section section--cream" id="order">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Book now</span>
            <h2>Order a frame on WhatsApp.</h2>
            <p>Pick the size and moulding and we will write the message for you. It opens in WhatsApp with everything filled in — check it over and press send.</p>
          </div>

          <div className="reveal">
            <FrameOrderForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Ordering</span>
            <h2>Four steps to a framed print.</h2>
          </div>
          <div className="grid grid--4">
            <div className="feature reveal"><div className="feature__icon">1</div><h4>Send the file</h4><p>Email the photo or bring the print in. We check resolution and tell you the largest usable size.</p></div>
            <div className="feature reveal"><div className="feature__icon">2</div><h4>Pick size &amp; material</h4><p>Choose from the size chart, or bring measurements for a custom piece and we quote on the spot.</p></div>
            <div className="feature reveal"><div className="feature__icon">3</div><h4>Approve the proof</h4><p>We send a digital mock-up showing the crop, matting and moulding before anything is cut.</p></div>
            <div className="feature reveal"><div className="feature__icon">4</div><h4>Delivered &amp; hung</h4><p>Ready in 5 working days. Delivery and wall mounting within the city can be added to your quote.</p></div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
