// Every contact detail shown on the site comes from this file — the footer, the
// contact page, the enquiry form fallback and the "Call the studio" buttons all
// read from it, so a number or address is never typed twice.

export const STUDIO = {
  name: "Sparrow Frames",

  address: {
    lines: ["Besto Center, Near Old Busstand", "Kanhangad 671315"],
    // Single-line form, for the footer where there is no room to wrap.
    short: "Besto Center, Near Old Busstand, Kanhangad 671315",
  },

  // `href` is the dialable form (no spaces); `label` is what the visitor reads.
  phone: {
    href: "tel:+919778471231",
    label: "+91 97784 71231",
    whatsapp: "https://wa.me/919778471231",
  },

  email: "sparrowstudio.ind@gmail.com",

  hours: {
    weekdays: "Monday to Saturday, 10:00 – 19:00",
    weekend: "Sunday by appointment",
    short: "Mon–Sat · 10:00 – 19:00",
  },

  // Google Maps "Embed a map" share URL for the studio pin.
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.9048927459376!2d75.08502597459459!3d12.32218802878427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba47d1675a1da57%3A0xbcdc73e56751de54!2sSparrow%20Frames!5e0!3m2!1sen!2sin!4v1785580384717!5m2!1sen!2sin",
};

/**
 * Opens WhatsApp with `lines` already written into the chat box. The visitor
 * still presses send there — wa.me cannot dispatch a message on its own.
 * Falsy lines are dropped, so callers can inline conditionals.
 *
 * Must be called from a click or submit handler: the popup only survives if
 * the browser sees it as a user gesture, and we fall back to the same tab.
 */
export function openWhatsApp(lines) {
  const text = lines.filter(Boolean).join("\n");
  const url = `${STUDIO.phone.whatsapp}?text=${encodeURIComponent(text)}`;
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}
