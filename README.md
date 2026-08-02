# Sparrow Frames — Next.js

The Sparrow Frames marketing site, rebuilt as a **Next.js (App Router)**
React app. Same design, content and behaviour as the original static site; the
CSS design system is ported verbatim and the interactive bits (mobile nav,
scroll-reveal, sticky header, portfolio filtering, image lightbox, contact-form
fallback) are React components.

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build && npm run start   # production build
```

## Project structure

```
app/
  layout.jsx          Root layout — fonts, <Header>, <Footer>, scroll-reveal
  globals.css         Ported design system (CSS variables at the top)
  page.jsx            Home
  photography/page.jsx
  videography/page.jsx
  frames/page.jsx
  pricing/page.jsx    Full rate card + FAQ
  portfolio/page.jsx  Filterable gallery
  contact/page.jsx    Enquiry form + studio details
components/
  Header.jsx          Client — mobile nav, active link, sticky-solid on scroll
  Footer.jsx
  CTA.jsx             The closing call-to-action band (configurable)
  Gallery.jsx         Client — category filter + lightbox
  Showreel.jsx        Client — videography showreel poster + lightbox
  ContactForm.jsx     Client — mailto fallback until an endpoint is set
  ScrollReveal.jsx    Client — IntersectionObserver reveal-on-scroll
  icons.jsx           Shared SVG icons (brand mark, check)
public/assets/img/    Placeholder SVGs — replace with real photos
```

## What to replace before going live

Search across the repo:

| Find | Replace with |
|---|---|
| `href="#"` in the footer socials | Your Instagram / YouTube links (WhatsApp is wired) |

## Where the forms go

**Contact enquiry** — composes a message and hands it to WhatsApp via
`openWhatsApp()` in `data/studio.js`. No server involved; the visitor presses
send in WhatsApp.

**Frame order (`/frames`)** — posts to `app/api/frame-order/route.js`, which
creates a row in the 🎁 Sparrow Sales Pipeline database in Notion. Rows arrive
as `Lead Source: Website`, `Pipeline Status: Collecting Details`,
`Payment Status: Not Paid`, with `Total Order Value` left empty so unconfirmed
web orders stay out of the payment dashboard's revenue figures. The visitor
stays on the page and can carry on to WhatsApp from the confirmation.

The photograph itself is not uploaded on the site — the confirmation sends the
customer to WhatsApp to send it there, where large phone photos and multiple
images work without size limits or storage costs.

### Deploying to Vercel

Set `NOTION_TOKEN` and `NOTION_DATABASE_ID` — see `.env.example` — under
**Project → Settings → Environment Variables**, ticking Production, Preview and
Development. Redeploy after adding them: env vars are read at runtime, but an
existing deployment does not pick up new ones on its own.

Do **not** prefix either with `NEXT_PUBLIC_`. That would inline the token into
the JavaScript bundle sent to every visitor.

Nothing else needs configuring — `app/api/frame-order/route.js` runs as a
serverless function automatically. Keep `output: "export"` out of
`next.config.js`; a static export has no server, so every order would silently
fall back to WhatsApp.

For local development, put the same two values in `.env.local` (gitignored).
Without them the form falls back to WhatsApp, so it keeps working unconfigured.

The unit price is recomputed on the server from `data/packages.js` rather than
trusted from the browser, and a hidden honeypot field drops bot submissions.

Address, phone, email, opening hours and the Google Maps embed live in
`data/studio.js` — edit them there and the footer, contact page, enquiry form
and every "Call the studio" button update with them.

## Pricing

Every rate on the site comes from `data/packages.js` — the four event packages,
the four combos and the frame rate chart. Edit that file and all pages follow.
Items still marked "On request" on the pricing page (restoration, collage
frames, canvas stretch, delivery) have no rate yet.

## Brand

Palette and logo live in `app/globals.css`:

| Token | Value | Used for |
|---|---|---|
| `--c-primary` | `#324C3B` deep muted green | Buttons, ticks, accents on light backgrounds |
| `--c-cream` | `#ede9c3` creamy yellow-beige | Alternating section bands, footer |
| `--grad-gold` | golden gradient | Featured tags, accents on dark green |
| `--c-ink-strong` | `#1F2E24` | Headings, dark sections, hero overlay |

The header and footer show a typographic wordmark. To use the exported logo
lockup instead, save it as `public/assets/img/logo.svg` and add
`<img className="brand__mark" src="/assets/img/logo.svg" alt="" />` inside the
`.brand` link in `components/Header.jsx` and `components/Footer.jsx`.

## Fonts

Loaded with `next/font/google` in `app/layout.jsx` (Overpass, Bricolage
Grotesque, Allison) and wired to the `--font-*` CSS variables the stylesheet
uses. No external `<link>` needed.

## Making the contact form send

`components/ContactForm.jsx` posts to `FORM_ENDPOINT` (currently the placeholder
`REPLACE_WITH_YOUR_FORM_ENDPOINT`). Paste a real endpoint from
[Formspree](https://formspree.io), [Web3Forms](https://web3forms.com) or
[Basin](https://usebasin.com) and the mailto fallback switches off automatically.

## Images

Every image is a generated SVG placeholder in `public/assets/img/`. Drop your
own JPEG/WebP files in with the same names, or update the `src` paths. Suggested
sizes: hero `1920×1080`, gallery portraits `1000×1250`, wide gallery `1600×1000`,
service cards `900×675`, avatars `200×200`.
