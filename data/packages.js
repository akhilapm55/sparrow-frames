// Every price shown on the site comes from this file — the studio brochure and
// the frame rate sheet. Edit the rates here and each page updates with them.

/* Single-event coverage packages. `price` is the total cost of the package. */
export const EVENT_PACKAGES = [
  {
    id: "save-the-date",
    name: "Save The Date",
    meta: "Pre-wedding shoot",
    price: "₹9,720",
    crew: "1 photographer + 1 cinematographer",
    features: [
      "10 edited photos",
      "3 reels (40–50 sec each)",
    ],
  },
  {
    id: "temple-shoot",
    name: "Temple Shoot",
    meta: "Traditional temple session",
    price: "₹12,240",
    crew: "1 photographer + 1 cinematographer",
    features: [
      "5 edited photos",
      "1 reel (40–50 sec)",
      "Highlight video",
    ],
  },
  {
    id: "haldi",
    name: "Haldi",
    meta: "Haldi function",
    price: "₹17,520",
    crew: "1 photographer + 1 cinematographer",
    features: [
      "5 edited photos",
      "3 reels (40–50 sec each)",
    ],
  },
  {
    id: "wedding-ceremony",
    name: "Wedding Ceremony",
    meta: "Full ceremony coverage",
    price: "₹41,220",
    crew: "1 photographer + 1 cinematographer",
    features: [
      "10 edited photos",
      "Highlight video",
      "3 reels (40–50 sec each)",
      "50-leaf album with design",
      "Table calendar + A3 frame",
      "Pendrive & box",
    ],
  },
];

/* Entry-level rates advertised as a starting point rather than a fixed
   package — hours, crew and deliverables are quoted per enquiry. */
export const STARTING_RATES = [
  {
    id: "wedding-from",
    name: "Wedding coverage",
    meta: "Scaled to the day you need covered",
    price: "₹9,999",
    prefix: "from",
    unit: "per enquiry",
    // Nothing is fixed at a starting rate, so this lists what the quote is
    // built around rather than promising deliverables.
    quotedOn: [
      "Coverage hours across the day",
      "Crew size — photographers and cinematographers",
      "Edited photo and reel count",
      "Album, frames and print add-ons",
    ],
    note: "Hours, crew and deliverables quoted per enquiry. The full Wedding Ceremony package with album and prints is ₹41,220.",
  },
  {
    id: "pre-birthday-shoot",
    name: "Pre-Birthday Shoot",
    meta: "Birthday and milestone sessions",
    price: "₹3,999",
    prefix: "from",
    unit: "per session",
    quotedOn: [
      "Session length",
      "Theme and setup",
      "Edited photo count",
      "Frames and prints add-ons",
    ],
    note: "Tell us the theme and the age and we will confirm the session length and photo count.",
  },
];

/* Multi-event combos. Each combo costs exactly the sum of the events inside
   it — the album bag is the extra that comes with every combo. */
export const COMBO_PACKAGES = [
  {
    id: "combo-save-the-date-wedding",
    name: "Save The Date + Wedding",
    meta: "Save The Date · Wedding Ceremony",
    price: "₹50,940",
    crew: "2 photographers + 2 cinematographers",
    events: ["save-the-date", "wedding-ceremony"],
    features: [
      "20 edited photos",
      "6 reels (40–50 sec each)",
      "1 highlight video",
      "50-leaf album with design",
      "Table calendar + A3 frame",
      "Pendrive, box & album bag",
    ],
  },
  {
    id: "combo-traditional",
    name: "Traditional Combo",
    meta: "Temple Shoot · Wedding Ceremony",
    price: "₹53,460",
    crew: "2 photographers + 2 cinematographers",
    events: ["temple-shoot", "wedding-ceremony"],
    features: [
      "15 edited photos",
      "4 reels (40–50 sec each)",
      "2 highlight videos",
      "50-leaf album with design",
      "Table calendar + A3 frame",
      "Pendrive, box & album bag",
    ],
  },
  {
    id: "combo-classic",
    name: "Classic Combo",
    meta: "Save The Date · Haldi · Wedding Ceremony",
    price: "₹68,460",
    crew: "3 photographers + 3 cinematographers",
    events: ["save-the-date", "haldi", "wedding-ceremony"],
    features: [
      "25 edited photos",
      "9 reels (40–50 sec each)",
      "1 highlight video",
      "50-leaf album with design",
      "Table calendar + A3 frame",
      "Pendrive, box & album bag",
    ],
  },
  {
    id: "combo-premium-complete",
    name: "Premium Complete",
    meta: "All four events covered",
    price: "₹80,700",
    crew: "4 photographers + 4 cinematographers",
    events: ["save-the-date", "haldi", "temple-shoot", "wedding-ceremony"],
    features: [
      "30 edited photos",
      "10 reels (40–50 sec each)",
      "2 highlight videos",
      "50-leaf album with design",
      "Table calendar + A3 frame",
      "Pendrive, box & album bag",
    ],
  },
];

/* Frame rate sheet. Rates are per finished frame; a dash means that size is
   not made in that moulding width. */
export const FRAME_WIDTHS = ["0.5 inch", "0.75 inch", "1 inch"];

export const FRAME_RATES = [
  { size: "6 × 4", rates: ["₹198", "₹213", null] },
  { size: "5 × 7", rates: ["₹201", "₹216", null] },
  { size: "8 × 6", rates: ["₹231", "₹258", null] },
  { size: "12 × 8", rates: ["₹375", "₹393", "₹417"] },
  { size: "12 × 10", rates: [null, "₹468", "₹486"] },
  { size: "12 × 15", rates: [null, null, "₹660"] },
  { size: "12 × 18", rates: [null, "₹687", "₹711"] },
  { size: "24 × 18", rates: [null, null, "₹1,218"] },
  { size: "36 × 24", rates: [null, null, "₹2,316"] },
];

/* Photos of real framed pieces, shown in the size guide on the frames page.
   One entry per photo, so a size can appear more than once when we have it in
   several moulding widths or colours. Only sizes listed here appear in the
   guide; the full range is in the rate chart above it. `img` keeps the file
   name as saved — the component URL-encodes it before use. */
/* Photographed pieces, shown on /frames and on the home page. Served as WebP
   at 1200px — the PNG/JPEG originals are kept in the same folder, unreferenced,
   in case a piece ever needs re-exporting. */
export const FRAME_SHOWCASE = [
  { size: "6 × 4", paper: "A6", width: "0.5 inch", img: "/assets/img/frames/A6(6x4)0.5_inch.webp" },
  { size: "8 × 6", paper: "A5", width: "0.5 inch", img: "/assets/img/frames/A5(8x6)0.5_inch.webp" },
  { size: "8 × 6", paper: "A5", width: "0.75 inch", img: "/assets/img/frames/A5(8x6)0.75_inch.webp" },
  { size: "12 × 8", paper: "A4", width: "0.75 inch", img: "/assets/img/frames/A4(12x8)0.75_inch.webp" },
  { size: "12 × 8", paper: "A4", width: "1 inch", img: "/assets/img/frames/A4(12x8)1_inch.webp" },
  { size: "12 × 15", paper: null, width: "1 inch", img: "/assets/img/frames/12x15(1_inch).webp" },
  { size: "12 × 18", paper: "A3", width: "0.5 inch", img: "/assets/img/frames/A3(12x18)0.5_inch.webp" },
  { size: "12 × 18", paper: "A3", width: "1 inch", img: "/assets/img/frames/A3(12x18)1_inch.webp" },
];

/* Rate for one size in one moulding width, or null if we don't make it. */
export function frameRate(size, width) {
  const row = FRAME_RATES.find((r) => r.size === size);
  const i = FRAME_WIDTHS.indexOf(width);
  return row && i > -1 ? row.rates[i] : null;
}

/* Lowest rate in each moulding width — used for the "from" lines. */
export const FRAME_FROM = {
  "0.5 inch": "₹198",
  "0.75 inch": "₹213",
  "1 inch": "₹417",
};

export function findPackage(id) {
  return (
    EVENT_PACKAGES.find((p) => p.id === id) ||
    COMBO_PACKAGES.find((p) => p.id === id) ||
    STARTING_RATES.find((p) => p.id === id)
  );
}
