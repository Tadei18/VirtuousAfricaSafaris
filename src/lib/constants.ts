// ===========================================================================
// Centralised site-wide constants.
//
// Phone numbers, email and WhatsApp are the client's REAL contact details.
// Social links and the office address are still placeholders (TODO: client to
// confirm).
// ===========================================================================

export const siteName = "Virtuous Africa Safaris";
export const siteShortName = "Virtuous Africa";
export const siteTagline = "Wild Kenya, honestly guided.";
export const siteDescription =
  "Private, guide-led safaris across Kenya — tailored journeys through the Maasai Mara, Amboseli, Samburu and beyond, built around the wildlife you came for.";

// Public URL. Set SITE_URL in the environment for production builds.
export const siteUrl =
  import.meta.env.SITE_URL ?? "https://virtuousafricasafaris.com";

// All contactable numbers, in priority order (first = primary).
export const phones = [
  { display: "+254 702 677 359", tel: "+254702677359" },
  { display: "+254 715 775 795", tel: "+254715775795" },
  { display: "+254 724 799 999", tel: "+254724799999" },
  { display: "+254 700 414 141", tel: "+254700414141" },
] as const;

// Contact details. Phones/email/WhatsApp are real; address is a placeholder.
export const contact = {
  // Primary number (WhatsApp-enabled) — aliases into the phones list above.
  phoneDisplay: phones[0].display,
  phoneTel: phones[0].tel,
  phoneDisplay2: phones[1].display,
  phoneTel2: phones[1].tel,
  // WhatsApp uses the primary number, no leading "+".
  whatsappNumber: "254702677359",
  // TODO: confirm whether email should be @virtuousafricasafaris.com
  // (the site domain and this email domain differ — flag for the client to confirm).
  email: "deals@virtuousexplorers.com",
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
  "Hi Virtuous Africa Safaris, I'd like to plan a safari."
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
