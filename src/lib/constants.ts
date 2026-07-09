// ===========================================================================
// Centralised site-wide constants.
//
// ⚠️  ALL CONTACT DETAILS, SOCIAL LINKS AND ADDRESSES BELOW ARE PLACEHOLDERS.
//     They are NOT real Virtuous Africa Safaris contact points.
//     TODO: client to confirm — replace every value marked `client to confirm`
//     before launch, and wire the phone/email/WhatsApp to live channels.
// ===========================================================================

export const siteName = "Virtuous Africa Safaris";
export const siteShortName = "Virtuous Africa";
export const siteTagline = "Wild Kenya, honestly guided.";
export const siteDescription =
  "Private, guide-led safaris across Kenya — tailored journeys through the Maasai Mara, Amboseli, Samburu and beyond, built around the wildlife you came for.";

// Public URL. Set SITE_URL in the environment for production builds.
export const siteUrl =
  import.meta.env.SITE_URL ?? "https://virtuousafricasafaris.com";

// Contact details — PLACEHOLDERS. // TODO: client to confirm
export const contact = {
  phoneDisplay: "+254 700 000 000", // TODO: client to confirm
  phoneTel: "+254700000000", // TODO: client to confirm
  phoneDisplay2: "+254 711 111 111", // TODO: client to confirm
  phoneTel2: "+254711111111", // TODO: client to confirm
  whatsappNumber: "254700000000", // TODO: client to confirm
  email: "hello@virtuousafricasafaris.com", // TODO: client to confirm
  address:
    "TODO: client to confirm — street, building, floor, Nairobi, Kenya",
  hours: "Mon–Sat, 8am–6pm EAT",
  timezone: "Nairobi (GMT+3)",
};

// Social links — PLACEHOLDERS. // TODO: client to confirm
export const social = {
  instagram: "https://instagram.com/", // TODO: client to confirm
  facebook: "https://facebook.com/", // TODO: client to confirm
  youtube: "https://youtube.com/", // TODO: client to confirm
  tiktok: "https://tiktok.com/", // TODO: client to confirm
};

export const whatsappPresetText = encodeURIComponent(
  "Hi Virtuous Africa, I'd like to plan a Kenya safari."
);

export const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${whatsappPresetText}`;

export const navLinks = [
  { href: "/safaris", label: "Safaris" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

// Trust badges — structural placeholders in a KATO / regulatory style.
// TODO: client to confirm actual memberships & licences before display.
export const trustBadges = [
  "Member of KATO", // TODO: client to confirm
  "Tourism Regulatory Authority Licensed", // TODO: client to confirm
  "Ecotourism Kenya — Silver Rated", // TODO: client to confirm
] as const;

export const heroTrust = [
  "4.9 ★ traveller rating", // TODO: client to confirm
  "KATO Member", // TODO: client to confirm
  "100% locally guided",
] as const;
