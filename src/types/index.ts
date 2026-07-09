// Shared domain types for the Virtuous Africa Safaris site. Used by data
// files, components, and JSON-LD schema helpers.

export type SafariStyle = "Budget" | "Mid-range" | "Luxury" | "Family";

export type DestinationSlug =
  | "maasai-mara"
  | "amboseli"
  | "tsavo"
  | "samburu"
  | "lake-nakuru"
  | "lake-naivasha"
  | "ol-pejeta"
  | "aberdare"
  | "diani-beach";

export type Month =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string[];
  lodge?: string;
  meals: ("B" | "L" | "D")[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface RouteStop {
  /** Destination slug — used to look up coords on the route SVG. */
  slug: DestinationSlug | "nairobi" | "diani-beach";
  label: string;
  /** x / y coords inside the 0–100 viewport for the SVG map. */
  x: number;
  y: number;
}

export interface Tour {
  slug: string;
  title: string;
  durationDays: number;
  style: SafariStyle;
  priceFromUsd: number;
  groupSizeMax: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  overview: string[];
  highlights: { icon: string; text: string }[];
  destinations: DestinationSlug[];
  routeLabel: string[];
  routeStops: RouteStop[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  faqs: Faq[];
  heroImage: string;
  gallery: { src: string; alt: string }[];
  /** Months where this trip is best — drives quick-match + filters. */
  bestMonths: Month[];
  departureNote?: string;
}

export interface SpeciesNote {
  name: string;
  note: string;
  icon: string;
}

export interface Destination {
  slug: DestinationSlug;
  name: string;
  oneLineDraw: string;
  heroImage: string;
  shortDescription: string;
  whyGo: string[];
  /** Size in km². */
  sizeKm2: number;
  bestMonths: Month[];
  /** Per-month wildlife viewing quality, 1–5. */
  monthlyScore: Record<Month, number>;
  signatureWildlife: string[];
  species: SpeciesNote[];
}

export interface Testimonial {
  name: string;
  country: string;
  tourSlug: string;
  tourTitle: string;
  rating: number;
  quote: string;
}

export interface Guide {
  name: string;
  yearsInField: number;
  languages: string[];
  specialty: string;
  bio: string;
}
