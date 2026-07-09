// Per-route metadata helpers. Centralised so titles + descriptions stay
// consistent and a single edit propagates to <title>, OG and Twitter cards.
// Consumed by the shared <SEO> component in BaseLayout.

import { siteName, siteUrl } from "@/lib/constants";
import type { Tour, Destination } from "@/types";

export interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  /** Absolute or root-relative image path. */
  image?: string;
  ogType?: "website" | "article";
}

const abs = (path: string) => (path.startsWith("http") ? path : `${siteUrl}${path}`);

export const homeSeo: PageSeo = {
  title: `${siteName} — Private Kenya Safaris, Tailored to You`,
  description:
    "Private, guide-led safaris across Kenya. Tailored itineraries through the Maasai Mara, Amboseli, Samburu and beyond — designed around the wildlife you came for.",
  canonical: siteUrl,
};

export const safarisListSeo: PageSeo = {
  title: "Safaris & Tours",
  description:
    "Six signature safari packages across Kenya — Maasai Mara, Amboseli, Samburu, Tsavo and beyond. Each one tailor-made around your dates, pace, and what you came to see.",
  canonical: `${siteUrl}/safaris`,
};

export const destinationsListSeo: PageSeo = {
  title: "Destinations — Kenya Safari Parks & Reserves",
  description:
    "Nine Kenyan safari destinations, from the Maasai Mara to Diani Beach. Best months, signature wildlife, and the trips that include them.",
  canonical: `${siteUrl}/destinations`,
};

export const aboutSeo: PageSeo = {
  title: "About — Guides, Conservation & How We Travel",
  description:
    "Kenyan-owned and locally guided. Meet the team behind Virtuous Africa Safaris and how we route trips through community conservancies.",
  canonical: `${siteUrl}/about`,
};

export const contactSeo: PageSeo = {
  title: "Plan Your Safari",
  description:
    "Tell us when you want to travel, who's coming, and what you came to see. We'll send back a tailored itinerary within 24 hours.",
  canonical: `${siteUrl}/contact`,
};

export const reviewsSeo: PageSeo = {
  title: "Reviews — What Travellers Say",
  description:
    "Real words from travellers who've been out with us — river crossings, first leopards, and the guides who made it happen.",
  canonical: `${siteUrl}/reviews`,
};

export const blogSeo: PageSeo = {
  title: "Journal — Field Notes",
  description:
    "Dispatches from the bush — best time to visit, what to pack, and what the migration actually looks like in October.",
  canonical: `${siteUrl}/blog`,
};

export function tourSeo(tour: Tour): PageSeo {
  return {
    title: `${tour.title} · ${tour.durationDays}-Day Kenya Safari`,
    description: tour.shortDescription,
    canonical: `${siteUrl}/safaris/${tour.slug}`,
    image: abs(tour.heroImage),
    ogType: "article",
  };
}

export function destinationSeo(d: Destination): PageSeo {
  return {
    title: `${d.name} Safari Guide — Best Time, Wildlife & Tours`,
    description: d.shortDescription,
    canonical: `${siteUrl}/destinations/${d.slug}`,
    image: abs(d.heroImage),
    ogType: "article",
  };
}
