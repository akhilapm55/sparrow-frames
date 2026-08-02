import Link from "next/link";
import { Check } from "@/components/icons";

// Renders one package from data/packages.js so a rate is never typed twice.
export default function PackageCard({
  pkg,
  featured = false,
  tag,
  cta = "Book this",
  href,
}) {
  return (
    <article className={`price-card reveal${featured ? " price-card--featured" : ""}`}>
      {tag ? <span className="price-card__tag">{tag}</span> : null}
      <h3>{pkg.name}</h3>
      <p className="price-card__meta">{pkg.meta}</p>
      <div className="price-card__amount">{pkg.price}</div>
      <p className="price-card__note">{pkg.crew}</p>
      <ul className="price-card__features">
        {pkg.features.map((feature) => (
          <li key={feature}><Check /><span>{feature}</span></li>
        ))}
      </ul>
      <Link
        className={featured ? "btn" : "btn btn--ghost"}
        href={href || `/contact?package=${pkg.id}`}
      >
        {cta}
      </Link>
    </article>
  );
}
