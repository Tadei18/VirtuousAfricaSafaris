// General FAQ pool — used on the contact page and various trust sections.
// Tour-specific FAQs live on each tour in `data/tours.ts`.

import type { Faq } from "@/types";

export const generalFaqs: Faq[] = [
  {
    question: "How do I book?",
    answer:
      "Start with an inquiry — either through the planning form or WhatsApp. We send back a tailored itinerary within 24 hours. To confirm, we ask for a 25% deposit. The balance is due 45 days before departure.",
  },
  {
    question: "Do you guarantee wildlife sightings?",
    answer:
      "No one can — wild animals don't honour schedules. What we can guarantee is the right guide, the right park, at the right time of year, with enough days in the bush for the wildlife to find you. Our sighting rate for the Big Five over five-plus days is 94%.",
  },
  {
    question: "Are your safaris private or shared?",
    answer:
      "All packages other than the Budget Camping Adventure are private by default — your guide, your vehicle, your itinerary. The Budget Camping Adventure runs as a small shared group (max 7).",
  },
  {
    question: "Do I need vaccinations?",
    answer:
      "Yellow fever is required for entry. Routine vaccines (typhoid, hepatitis A) recommended. Malaria prophylaxis advised for most of the country. Consult a travel-medicine clinic 6–8 weeks before departure.",
  },
  {
    question: "What about visas?",
    answer:
      "Kenya uses an electronic Travel Authorisation (eTA) system — $30 per person, applied for online a few days before arrival. We'll walk you through it.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Specifics vary by package (each tour page lists its terms). In general: more than 60 days out, full refund less an admin fee; inside 30 days, no refund but flexible rescheduling within 12 months.",
  },
];
