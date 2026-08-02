import Link from "next/link";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Portfolio",
  description:
    "Selected photography, videography and framing work from the studio.",
};

const FILTERS = [
  { key: "all", label: "Everything" },
  { key: "wedding", label: "Weddings" },
  { key: "portrait", label: "Portraits" },
  { key: "event", label: "Events" },
  { key: "product", label: "Product" },
  { key: "film", label: "Films" },
  { key: "frames", label: "Framing" },
];

const ITEMS = [
  { img: "/assets/img/work-01.svg", alt: "Aarav & Meera", title: "Aarav & Meera", tag: "Wedding", category: "wedding", wide: true },
  { img: "/assets/img/work-02.svg", alt: "Studio Portrait", title: "Studio Portrait", tag: "Portrait", category: "portrait" },
  { img: "/assets/img/work-03.svg", alt: "Annual Gala", title: "Annual Gala", tag: "Event", category: "event" },
  { img: "/assets/img/work-04.svg", alt: "Ceramics Lookbook", title: "Ceramics Lookbook", tag: "Product", category: "product" },
  { img: "/assets/img/work-05.svg", alt: "Short Film", title: "Short Film", tag: "Videography", category: "film", wide: true },
  { img: "/assets/img/work-06.svg", alt: "Beach Ceremony", title: "Beach Ceremony", tag: "Wedding", category: "wedding" },
  { img: "/assets/img/work-07.svg", alt: "Actor Headshots", title: "Actor Headshots", tag: "Portrait", category: "portrait" },
  { img: "/assets/img/work-08.svg", alt: "Gallery Wall", title: "Gallery Wall", tag: "Framing", category: "frames" },
  { img: "/assets/img/work-09.svg", alt: "Brand Story", title: "Brand Story", tag: "Videography", category: "film" },
  { img: "/assets/img/work-10.svg", alt: "Product Launch", title: "Product Launch", tag: "Event", category: "event", wide: true },
  { img: "/assets/img/work-11.svg", alt: "Jewellery Set", title: "Jewellery Set", tag: "Product", category: "product" },
  { img: "/assets/img/work-12.svg", alt: "Oak Collection", title: "Oak Collection", tag: "Framing", category: "frames" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow">Portfolio</span>
          <h1>Selected work</h1>
          <p>A cross-section of what leaves the studio — weddings, portraits, commercial shoots, films and finished frames. Click any image to view it larger.</p>
          <div className="crumbs"><Link href="/">Home</Link> &nbsp;/&nbsp; Portfolio</div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Gallery items={ITEMS} filters={FILTERS} />

          <p className="table-note" style={{ textAlign: "center", marginTop: "40px" }}>
            Showing a selection. Ask us for the full gallery in your category — we keep separate portfolios for each.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
