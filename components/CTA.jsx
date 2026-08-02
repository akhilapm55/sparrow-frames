import Link from "next/link";

/**
 * The dark call-to-action band that closes most pages.
 * Defaults to the common "Let's put your story in a frame" variant; pass props
 * to render the pricing / home variants.
 */
export default function CTA({
  eyebrow = "Available for bookings",
  title = "Let's put your story in a frame.",
  text = "Tell us the date and what you have in mind. We'll send availability and a fixed quote within one working day.",
  buttons = [
    { label: "Request a quote", href: "/contact", primary: true },
    { label: "See all pricing", href: "/pricing", primary: false },
  ],
}) {
  return (
    <section className="cta">
      <div className="shell">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="btn-row">
          {buttons.map((b) => {
            const className = `btn ${b.primary ? "" : "btn--on-dark"}`.trim();
            // tel: links must stay plain anchors.
            if (b.href.startsWith("tel:") || b.href.startsWith("mailto:")) {
              return (
                <a key={b.label} className={className} href={b.href}>
                  {b.label}
                </a>
              );
            }
            return (
              <Link key={b.label} className={className} href={b.href}>
                {b.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
