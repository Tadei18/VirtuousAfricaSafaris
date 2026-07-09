// JSON-LD structured-data helpers for SEO. Each returns a plain object to be
// embedded via <script type="application/ld+json">.

import { siteName, siteUrl, siteDescription, contact, social } from "./constants";
import type { Tour, Destination } from "@/types";

export function travelAgencyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}/og-default.svg`,
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      // TODO: client to confirm — placeholder address.
      streetAddress: "TODO: client to confirm",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    telephone: contact.phoneTel,
    email: contact.email,
    sameAs: [social.instagram, social.facebook, social.youtube, social.tiktok],
    areaServed: ["Kenya", "Tanzania", "East Africa"],
  };
}

export function touristTripJsonLd(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.shortDescription,
    image: tour.heroImage,
    touristType: tour.style,
    itinerary: tour.itinerary.map((day) => ({
      "@type": "Place",
      name: `Day ${day.day}: ${day.title}`,
      description: day.description?.[0] ?? "",
    })),
    offers: {
      "@type": "Offer",
      price: tour.priceFromUsd,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/safaris/${tour.slug}`,
    },
    provider: {
      "@type": "TravelAgency",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function touristDestinationJsonLd(d: Destination) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name,
    description: d.shortDescription,
    image: d.heroImage,
    address: { "@type": "PostalAddress", addressCountry: "KE" },
    includesAttraction: d.species.map((s) => ({
      "@type": "TouristAttraction",
      name: s.name,
    })),
  };
}
