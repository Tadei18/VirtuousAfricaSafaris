# Virtuous Africa Safaris

A production-quality marketing website for **Virtuous Africa Safaris**, a
Kenya-based safari operator. Built with **Astro**, **Tailwind CSS v4**, and
**React islands** for the interactive bits — cinematic, editorial, and designed
to make the wildlife photography carry the site.

> ⚠️ **Placeholder content.** All contact details, phone numbers, social links,
> addresses, trust badges and impact figures are clearly-marked placeholders
> (`// TODO: client to confirm`). Do not treat them as real. The client logo is
> in place (header/footer/mobile nav); the contact details are still placeholders.

---

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | [Astro](https://astro.build) 5 (static output + Netlify adapter) |
| Interactivity | React 19 islands via `@astrojs/react` |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) with `@theme` design tokens |
| Animation | Framer Motion (islands) + CSS (Ken-Burns, scroll-reveal, scroll-snap) |
| Forms | react-hook-form + zod |
| Icons | lucide-react |
| Toasts | tiny custom event-based toaster (`src/lib/toast.ts`) |
| SEO | per-route metadata, OG/Twitter, JSON-LD, `@astrojs/sitemap`, robots |

### Why an adapter on a "static" site

Output is `static` — **every page is prerendered to HTML**. The only exceptions
are the three `/api/*` endpoints, which set `export const prerender = false` so
their `POST` handlers can run. On-demand routes require an adapter, so
`@astrojs/netlify` is included: the prerendered pages deploy as static files and
the `/api/*` routes run as a Netlify Function. Everything else ships as static
HTML + minimal island JS.

---

## Getting started

```bash
npm install
npm run dev        # local dev server (http://localhost:4321)
npm run build      # production build → dist/
npm run preview    # preview the production build
npm run check      # astro check (type-checking)
```

### Environment variables

Copy `.env.example` → `.env` and set values.

| Var | Used by | Notes |
| --- | --- | --- |
| `SITE_URL` | build | Canonical links, sitemap, JSON-LD. **Set in production.** |
| `RESEND_API_KEY`, `OWNER_NOTIFICATION_EMAIL`, `RESEND_AUDIENCE_ID` | phase 2 | Email + newsletter wiring |
| `WHATSAPP_*` | phase 2 | WhatsApp Cloud API notifications |
| `DATABASE_URL` | phase 2 | Persist inquiries / chat sessions |

The v1 API stubs **do not read any of these** — they only validate and log.

---

## Project structure

```
src/
├─ components/
│  ├─ home/            # Home page sections (.astro, static)
│  ├─ tours/           # TourCard, RouteMap (static SVG)
│  ├─ destinations/    # DestinationCard, BestTimeChart (static)
│  ├─ layout/          # Header, Footer (.astro)
│  ├─ ui/              # SEO, PageHeader, FaqAccordion, StarRating, Icon
│  └─ react/           # Interactive islands (.tsx)
│     ├─ SafarisListing.tsx   # client-side filters + results
│     ├─ Gallery.tsx          # lightbox
│     ├─ InquirySidebar.tsx   # sticky desktop + mobile inquiry bar
│     ├─ MultiStepInquiry.tsx # contact multi-step form (rhf + zod)
│     ├─ MobileNav, ChatLauncher, NewsletterForm, Toaster
├─ content/blog/       # Markdown posts (content collection)
├─ content.config.ts   # blog collection schema (Astro content layer)
├─ data/               # Typed seed data: tours, destinations, testimonials, guides, faqs, seo
├─ layouts/BaseLayout.astro
├─ lib/                # constants, utils, schema (zod), jsonld, toast
├─ pages/
│  ├─ index.astro
│  ├─ safaris/{index,[slug]}.astro
│  ├─ destinations/{index,[slug]}.astro
│  ├─ blog/{index,[slug]}.astro
│  ├─ about / reviews / contact / 404 .astro
│  ├─ robots.txt.ts
│  └─ api/{inquiry,newsletter,chat/start}.ts   # POST stubs (zod-validated)
├─ styles/global.css   # Tailwind import + @theme design tokens
└─ types/index.ts      # domain types (Tour, Destination, etc.)
public/images/         # photographic assets (destinations, tours, visual-essay)
```

---

## Design system

Warm, editorial safari brand — light-first (ivory paper) with deep-brown bands
for cinematic contrast.

- **Palette:** ivory page background (`#FAF5EC`), warm-white cards (`#FFFDF9`),
  rich brand **brown** (`#3F200F`, deep `#2A1509`), and a **brass-gold** accent
  in two tokens — bright `#CFA24A` for fills/accents on dark, and AA-safe
  `#96690F` for gold text on light. Warm near-black body text (`#2E1B10`).
  Dark bands (header, footer, hero overlays, CTA, quick-match, testimonials,
  lightbox) use the deep brown with cream text. AA-contrast checked.
- **Type:** **Playfair Display** (engraved-serif display, echoes the logo) +
  **Manrope** (clean body), from Google Fonts. Fluid `clamp()` display scale.
- **Logo:** the client wordmark (`src/assets/virtuous-africa-logo.png`, a
  trimmed transparent brown silhouette derived from `public/brand/…`) rendered
  via `astro:assets` in a shared `Logo.astro`. On dark surfaces it's knocked out
  to warm cream via the `.va-logo-light` CSS filter.
- **Motion:** Ken-Burns hero, IntersectionObserver scroll-reveal, horizontal
  scroll-snap strips, hover lifts. All gated behind `prefers-reduced-motion`.

Tokens live in `src/styles/global.css` under `@theme` (colours, fonts, radii,
shadows, easing) so the whole site stays consistent — edit there to re-skin.
Component styles reference the brand hexes directly; the legacy `--color-ember*`
token names are kept as brand-mapped aliases for back-compat.

---

## Content model

Typed in `src/types/index.ts` and seeded in `src/data/`:
`Tour`, `Destination`, `Testimonial`, `Guide`, `Faq`. The six signature tours
and nine destinations (Maasai Mara, Amboseli, Tsavo, Samburu, Lake Nakuru, Lake
Naivasha, Ol Pejeta, Aberdare, Diani Beach) are seeded. Blog posts are a
Markdown content collection.

Some tour **gallery** images reference remote Unsplash/Pexels URLs (as in the
brief's source data); hero/card images are local `public/images/*.webp`.

---

## Wiring the API stubs for production (phase 2)

Each endpoint contains a detailed comment block. Summary:

- **`/api/inquiry`** — persist to DB → email via Resend → WhatsApp Cloud API
  template message → optional confirmation email → rate-limit by IP.
- **`/api/newsletter`** — add to Resend Audiences (or Buttondown/ConvertKit) →
  double opt-in email → rate-limit.
- **`/api/chat/start`** — create a chat session row → notify team (WhatsApp /
  Slack) → back with a realtime channel + `/api/chat/message`.

---

## Deployment

Deployed to **Netlify** via `@astrojs/netlify`. `netlify.toml` sets the build
command (`npm run build`), the publish directory (`dist`), and Node 22 (also
pinned in `.nvmrc`). Prerendered pages are served as static files from `dist/`
and the `/api/*` routes run as a Netlify Function — no manual server to run.
Connect the repo in Netlify and it builds on push.

To target a **different Node host** instead (Render, Railway, Fly, a VPS), swap
`@astrojs/netlify` for `@astrojs/node` in `astro.config.mjs`. To go **fully
static with no server**, drop the three `/api/*` routes (or move them to an
external form service) and remove the adapter.

Set `SITE_URL` to the production domain before building so canonical URLs,
sitemap and JSON-LD resolve correctly.

---

## Accessibility & SEO

Skip link, focus-visible styles, keyboard-operable native `<details>`
accordions, labelled form fields, alt text on imagery, semantic landmarks.
Per-route `<title>`/description/canonical, Open Graph + Twitter cards, JSON-LD
(`TravelAgency` site-wide; `TouristTrip` + `FAQPage` on tours;
`TouristDestination` on destinations), generated sitemap and robots.

---

## Before launch — checklist

- [x] Client logo applied (header, footer, mobile nav, favicon, OG)
- [ ] Confirm all contact/social/address values (`TODO: client to confirm`)
- [ ] Confirm trust badges / memberships and impact figures
- [ ] Export a raster `og-default.png` (1200×630) to replace the SVG placeholder
- [ ] Wire the `/api/*` stubs (see phase-2 notes) and set env vars
- [ ] Set `SITE_URL` to the production domain
