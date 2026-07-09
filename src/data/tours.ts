import type { Tour } from "@/types";

// Coordinates for the route-map SVG, normalised to a 0–100 viewport.
// Used by `tours/RouteMap.tsx`. Adjusted for visual clarity, not cartographic
// precision.
const COORDS = {
  nairobi: { x: 50, y: 60 },
  "maasai-mara": { x: 25, y: 65 },
  amboseli: { x: 55, y: 80 },
  tsavo: { x: 70, y: 75 },
  samburu: { x: 60, y: 30 },
  "lake-nakuru": { x: 40, y: 50 },
  "ol-pejeta": { x: 55, y: 42 },
  aberdare: { x: 52, y: 48 },
  "diani-beach": { x: 88, y: 90 },
} as const;

export const tours: Tour[] = [
  // 1. Classic Mara & Amboseli — 7 days, mid-range
  {
    slug: "classic-mara-amboseli",
    title: "Classic Mara & Amboseli",
    durationDays: 7,
    style: "Mid-range",
    priceFromUsd: 1890,
    groupSizeMax: 6,
    rating: 4.9,
    reviewCount: 127,
    shortDescription:
      "The two parks that built Kenya's reputation — Maasai Mara's predator country and Amboseli's elephant herds under Kilimanjaro. Seven days, well-paced.",
    overview: [
      "This is the trip people picture when they say \"Kenya safari.\" Three full days in the Maasai Mara — long enough to find lion prides, leopard along the riverine forest, and cheetah on the open plains without rushing — followed by two full days in Amboseli, where the elephant photography speaks for itself.",
      "We route you through the Mara reserve and the adjoining conservancies, where vehicle numbers are limited and off-road tracking is permitted. You'll have a private guide and 4x4 game-viewer for the duration. The pace is built for what you came to see, not for a brochure.",
    ],
    highlights: [
      { icon: "Sunrise", text: "Three days in the Mara — predators worked properly, not rushed." },
      { icon: "Camera", text: "Amboseli elephant families at the Kilimanjaro tree line." },
      { icon: "Tent", text: "Tented camp on the Mara conservancy — no fences, lion calling at night." },
      { icon: "Users", text: "Maasai community visit on the conservancy boundary." },
      { icon: "Mountain", text: "Kilimanjaro sunrise from your Amboseli camp, if the mountain is clear." },
    ],
    destinations: ["maasai-mara", "amboseli"],
    routeLabel: ["Nairobi", "Maasai Mara", "Amboseli", "Nairobi"],
    routeStops: [
      { slug: "nairobi", label: "Nairobi", ...COORDS.nairobi },
      { slug: "maasai-mara", label: "Maasai Mara", ...COORDS["maasai-mara"] },
      { slug: "amboseli", label: "Amboseli", ...COORDS.amboseli },
      { slug: "nairobi", label: "Nairobi", ...COORDS.nairobi },
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Maasai Mara",
        location: "Maasai Mara",
        description: [
          "Morning pickup from your Nairobi hotel or JKIA. You'll be on the road by 8am with your guide and a 4x4 game-viewer that stays with you the whole trip. The drive to the Mara is roughly five hours — descending into the Rift Valley, through Narok, and out onto the western escarpment.",
          "Lunch en route at a viewpoint over the Rift. You'll arrive at camp in the early afternoon with time to settle in before a short orientation game drive — usually enough to put you onto your first lions or elephants before sundowners.",
        ],
        lodge: "Mara Bush Camp (or similar tier)",
        meals: ["L", "D"],
      },
      {
        day: 2,
        title: "Full day in the Mara",
        location: "Maasai Mara",
        description: [
          "Out before sunrise with coffee in flasks. The first two hours after dawn are when the cats are most active and the light is at its best — so we work hard at the front of the day.",
          "Back to camp for a proper brunch, then a slow afternoon — read, swim if your camp has a pool, sleep. Out again from 4pm for the second window, returning at dusk. Dinner around the fire.",
        ],
        lodge: "Mara Bush Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 3,
        title: "Full day in the Mara",
        location: "Maasai Mara",
        description: [
          "Today we head deeper — either into the Mara Triangle if river crossings are likely (Jul–Oct), or north into Naboisho Conservancy for a quieter, more relaxed predator experience.",
          "Hot lunch in the field. Your guide will adjust the day around what's been radioed in — a leopard with a kill in a sausage tree, a cheetah hunting, a black rhino glimpsed on the slope. Nothing here is scheduled around scenery.",
        ],
        lodge: "Mara Bush Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 4,
        title: "Full day in the Mara",
        location: "Maasai Mara",
        description: [
          "Optional balloon safari at first light (additional cost, $450 per person — book in advance). One hour over the savanna, champagne breakfast on landing, back to the camp by 10am.",
          "Afternoon game drive routed toward the parts of the reserve we haven't seen yet. Late return to camp, with the option of a Maasai cultural visit at the conservancy gate if you'd like one.",
        ],
        lodge: "Mara Bush Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 5,
        title: "Mara to Amboseli",
        location: "Amboseli",
        description: [
          "A long transfer day — the most efficient route is a short charter flight back to Wilson Airport in Nairobi, then a second flight south to Amboseli. We can also drive (8–9 hours total) if you prefer to stay overland. We'll discuss what suits you best when we plan.",
          "By late afternoon you'll be at your Amboseli camp, with the swamps in view and Kilimanjaro to the south. A short evening drive picks up the first elephant herds of the trip.",
        ],
        lodge: "Tortilis Camp (or similar tier)",
        meals: ["B", "L", "D"],
      },
      {
        day: 6,
        title: "Full day in Amboseli",
        location: "Amboseli",
        description: [
          "First light at Observation Hill for the Kilimanjaro view — typically clear at dawn, gone by 10am. Then down to the swamps, where the morning's elephant procession works through the marsh edge in long files. Buffalo, hippo, and a high concentration of pelicans share the swamp.",
          "Afternoon drive routed through Amboseli's drier western corner, looking for cheetah and Maasai giraffe. Sunset shoot back toward Kilimanjaro from the open plain.",
        ],
        lodge: "Tortilis Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 7,
        title: "Amboseli to Nairobi",
        location: "Nairobi",
        description: [
          "Final morning drive. The aim today is to catch the elephants moving back from the swamp toward the dry-country bush — long-tusker territory, best photography of the trip if the mountain is clear.",
          "Back to camp for brunch, then a short flight or 4-hour drive to Nairobi. Day-room available at a Karen hotel if you have an evening flight out.",
        ],
        meals: ["B"],
      },
    ],
    inclusions: [
      "Private 4x4 game-viewer with pop-up roof",
      "Professional guide for the duration",
      "All park and conservancy fees",
      "All accommodation on full-board basis",
      "Airport transfers in Nairobi",
      "Drinking water in the vehicle",
      "Game drives as listed",
    ],
    exclusions: [
      "International flights",
      "Kenya visa ($50 per person)",
      "Internal flights (Mara–Amboseli, $400 per person if elected)",
      "Optional balloon safari ($450 per person)",
      "Tips and gratuities",
      "Personal travel insurance",
      "Drinks at camps",
    ],
    faqs: [
      {
        question: "Is this suitable for kids?",
        answer:
          "Yes, from age 6 upwards comfortably. The pace is gentle in the middle of the day, the camps we use are family-friendly, and the predator viewing is the kind of thing that turns kids into lifelong conservationists. Below age 6 we'd recommend a shorter family-focused trip with closer drives.",
      },
      {
        question: "What vehicles do you use?",
        answer:
          "Toyota Landcruiser 4x4 game-viewers, fitted with pop-up roofs for photography. Maximum six guests per vehicle but on a private booking it's you and your party only. All vehicles have charging points and a stocked cool-box.",
      },
      {
        question: "What's the best time of year for this trip?",
        answer:
          "July through October is peak — the Great Migration is in the Mara and Amboseli's dry season concentrates wildlife around the swamps. June and November are excellent shoulder months with lower prices. January and February are great too. The long rains in April and May can be wet but the country is green and many camps offer significant low-season discounts.",
      },
      {
        question: "How fit do I need to be?",
        answer:
          "No fitness requirement. Game drives are vehicle-based. You'll spend long hours sitting, so a small lumbar cushion is welcome. Walks inside camp grounds are flat and short.",
      },
      {
        question: "What happens if I need to cancel?",
        answer:
          "Cancellations more than 60 days before departure: full refund less a $200 admin fee. Between 60 and 30 days: 50% refund. Within 30 days: no refund — but we'll work with you to reschedule to a different date within 12 months, with no penalty.",
      },
    ],
    heroImage: "/images/tours/classic-mara-amboseli.webp",
    gallery: [
      { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80", alt: "Elephants on the savanna at sunset" },
      { src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200&q=80", alt: "Elephant herd in Amboseli with Kilimanjaro" },
      { src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200&q=80", alt: "Lion resting in tall grass" },
      { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80", alt: "Cheetah on a termite mound" },
      { src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Maasai giraffe browsing acacia" },
      { src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=1200&q=80", alt: "Wildebeest river crossing" },
      { src: "https://images.pexels.com/photos/259411/pexels-photo-259411.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Lake at dawn" },
      { src: "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?w=1200&q=80", alt: "Camp tent at golden hour" },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },

  // 2. Great Migration Special — 5 days, mid-range
  {
    slug: "great-migration-special",
    title: "Great Migration Special",
    durationDays: 5,
    style: "Mid-range",
    priceFromUsd: 1450,
    groupSizeMax: 6,
    rating: 4.9,
    reviewCount: 89,
    shortDescription:
      "Built for the river crossings. Five days, all Mara, July through October. We position you for the Mara River crossings the brochures show.",
    overview: [
      "Between July and October roughly 1.5 million wildebeest, 200,000 zebra and 350,000 gazelle move into the Maasai Mara from Tanzania. The crossings of the Mara River — where columns of wildebeest plunge into crocodile-thick water — are concentrated within a narrow window of time and place. This trip is built around finding them.",
      "Five days. All in the Mara. We position you in a camp inside or directly adjacent to the Mara Triangle, where most crossings happen. Your guide and vehicle work the river day after day until the crossings happen. Most travellers see at least one in a week; many see several.",
    ],
    highlights: [
      { icon: "Sunrise", text: "Five full days in the Mara — built around the migration." },
      { icon: "Camera", text: "Mara River crossings on the Mara Triangle side." },
      { icon: "Tent", text: "Conservancy-edge tented camp, lion calling at night." },
      { icon: "Users", text: "Guide who works the migration every season — knows the river bends." },
      { icon: "Mountain", text: "Optional balloon safari over the moving herds." },
    ],
    destinations: ["maasai-mara"],
    routeLabel: ["Nairobi", "Maasai Mara", "Nairobi"],
    routeStops: [
      { slug: "nairobi", label: "Nairobi", ...COORDS.nairobi },
      { slug: "maasai-mara", label: "Maasai Mara", ...COORDS["maasai-mara"] },
      { slug: "nairobi", label: "Nairobi", ...COORDS.nairobi },
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly into the Mara",
        location: "Maasai Mara",
        description: [
          "Morning charter flight from Wilson Airport to an airstrip inside the reserve — typically Olkiombo or Kichwa Tembo, depending on where the migration is concentrated that week. Roughly 45 minutes in the air, with the Rift Valley below.",
          "Your guide and vehicle meet you on the airstrip. Game drive en route to camp. Lunch on arrival, then an orientation drive into the late afternoon.",
        ],
        lodge: "Little Governors' Camp (or similar tier)",
        meals: ["L", "D"],
      },
      {
        day: 2,
        title: "Full day on the river",
        location: "Maasai Mara",
        description: [
          "Out by 6am with a packed breakfast. We work the river bends most active this season — your guide is in radio contact with all the camps in the area and will move on credible reports.",
          "Crossings are weather- and pressure-driven. You may sit at a single crossing point for three hours. You may sit for six. When the wildebeest commit, you'll know — and the photographer in you should have everything ready.",
        ],
        lodge: "Little Governors' Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 3,
        title: "Full day in the Mara Triangle",
        location: "Maasai Mara",
        description: [
          "Today we cross the Mara River into the Triangle — the western side of the reserve, managed separately and with materially fewer vehicles. The Triangle's lion prides are large and the cheetah viewing is reliable.",
          "Hot lunch in the field. Late return — possibly via a different river bend on the way out.",
        ],
        lodge: "Little Governors' Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 4,
        title: "Balloon (optional) and full day",
        location: "Maasai Mara",
        description: [
          "First light: optional balloon safari ($450 per person, prebook). One hour over the moving herds — at this density, from this height, the visual is hard to overstate. Champagne breakfast on landing.",
          "Afternoon drive returns us to the river or routes us into the conservancies, depending on activity. Wildebeest can move 40km in a day; the work is always to be ahead of where they're going.",
        ],
        lodge: "Little Governors' Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 5,
        title: "Mara to Nairobi",
        location: "Nairobi",
        description: [
          "Final morning drive — the best of the trip usually happens at either end, and the last morning often delivers the close encounter. Brunch back at camp, then your flight from the reserve back to Wilson by midday.",
          "Transfer to JKIA or your Nairobi hotel. Day-room available if you have a late evening flight out.",
        ],
        meals: ["B"],
      },
    ],
    inclusions: [
      "Return scheduled flights Nairobi–Mara",
      "Private 4x4 game-viewer with pop-up roof",
      "Professional Mara-specialist guide",
      "All reserve and conservancy fees",
      "Accommodation on full-board basis",
      "Airport transfers in Nairobi",
      "Drinking water in the vehicle",
    ],
    exclusions: [
      "International flights",
      "Kenya visa ($50 per person)",
      "Optional balloon safari ($450 per person)",
      "Tips and gratuities",
      "Personal travel insurance",
      "Premium drinks at camps",
    ],
    faqs: [
      {
        question: "Is this suitable for kids?",
        answer:
          "Yes from age 8 upwards. The pace is intense during crossing windows — long sits, no movement — so younger children can find it taxing. For families with kids under 8 we'd recommend the Family Safari & Beach package instead.",
      },
      {
        question: "What vehicles do you use?",
        answer:
          "Toyota Landcruiser 4x4 game-viewers, pop-up roof for photography. Private use throughout. We can configure a second vehicle if you have a large group or different photography needs within your party.",
      },
      {
        question: "What's the best time of year for this trip?",
        answer:
          "Departures run July through October only — this trip exists specifically for the migration window. Peak crossing activity is typically mid-August through late September but the herds can arrive earlier or stay later. We'll discuss timing in the planning conversation.",
      },
      {
        question: "How fit do I need to be?",
        answer:
          "No fitness requirement. The optional balloon involves a short crouched landing position — passengers with mobility limitations should discuss in advance with the balloon operator.",
      },
      {
        question: "What happens if I need to cancel?",
        answer:
          "Migration-season cancellations more than 90 days out: full refund less $250 admin. 90–60 days: 50% refund. Inside 60 days: no refund but a credit toward a future trip within 12 months. The peak-season window is tight; reschedules are best routed to the same season the following year.",
      },
    ],
    heroImage: "/images/tours/great-migration-special.webp",
    gallery: [
      { src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=1200&q=80", alt: "Wildebeest gathering at the riverbank" },
      { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80", alt: "Elephants on the open Mara plain" },
      { src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200&q=80", alt: "Lion pride at dawn" },
      { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80", alt: "Cheetah scanning from a mound" },
      { src: "https://images.pexels.com/photos/259411/pexels-photo-259411.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Hot air balloons over the Mara" },
      { src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200&q=80", alt: "Elephants crossing a track" },
      { src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Maasai giraffe at a thorn tree" },
      { src: "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?w=1200&q=80", alt: "Tented camp by the river" },
    ],
    bestMonths: ["Jul", "Aug", "Sep", "Oct"],
    departureNote: "Departures July–October only.",
  },

  // 3. Big Five Grand Circuit — 10 days, mid-range to luxury
  {
    slug: "big-five-grand-circuit",
    title: "Big Five Grand Circuit",
    durationDays: 10,
    style: "Luxury",
    priceFromUsd: 3200,
    groupSizeMax: 6,
    rating: 4.95,
    reviewCount: 64,
    shortDescription:
      "The complete Kenya loop. Four parks, ten days, and a deliberate route through the country's best big-game habitat. Lion, leopard, elephant, buffalo, rhino.",
    overview: [
      "Most travellers do one or two parks. This trip does four, in the right order, with internal flights connecting them so you spend your time in the parks instead of on the road. Mara for cats. Nakuru for rhino. Amboseli for elephants. Tsavo for the wild, dust-red end of the country.",
      "Ten days. Luxury-tier camps and lodges throughout. Private guide and vehicle in each park (we hand you off between teams so the local specialist drives you in the place they know best). This is the trip we'd recommend to a serious wildlife traveller on their first or second visit to East Africa.",
    ],
    highlights: [
      { icon: "Sunrise", text: "Four full parks, professionally connected — no wasted days on the road." },
      { icon: "Camera", text: "All five members of the Big Five, reliably." },
      { icon: "Tent", text: "Luxury-tier camps throughout — every one hand-selected." },
      { icon: "Users", text: "Local specialist guide in each park, not a single rotating one." },
      { icon: "Mountain", text: "Kilimanjaro from Amboseli; Lake Nakuru's rhinos; Tsavo's red elephants." },
    ],
    destinations: ["maasai-mara", "lake-nakuru", "amboseli", "tsavo"],
    routeLabel: ["Nairobi", "Maasai Mara", "Lake Nakuru", "Amboseli", "Tsavo", "Mombasa"],
    routeStops: [
      { slug: "nairobi", label: "Nairobi", ...COORDS.nairobi },
      { slug: "maasai-mara", label: "Maasai Mara", ...COORDS["maasai-mara"] },
      { slug: "lake-nakuru", label: "Lake Nakuru", ...COORDS["lake-nakuru"] },
      { slug: "amboseli", label: "Amboseli", ...COORDS.amboseli },
      { slug: "tsavo", label: "Tsavo", ...COORDS.tsavo },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        location: "Nairobi",
        description: [
          "Airport pickup at JKIA. Transfer to a boutique hotel in Karen — a quiet, leafy suburb 20 minutes from the airport.",
          "If you arrive in the morning we'll arrange a visit to the David Sheldrick Wildlife Trust to see the orphan elephants, or to the Giraffe Centre. Otherwise: rest, eat, sleep.",
        ],
        lodge: "Hemingways Nairobi",
        meals: ["D"],
      },
      {
        day: 2,
        title: "Fly to the Mara",
        location: "Maasai Mara",
        description: [
          "Morning flight from Wilson Airport into the Mara — 45 minutes over the Rift Valley. Lunch on arrival at camp.",
          "Afternoon game drive into the conservancy. Your Mara guide will already know what's been seen this week and route you accordingly.",
        ],
        lodge: "Angama Mara",
        meals: ["B", "L", "D"],
      },
      {
        day: 3,
        title: "Full day in the Mara",
        location: "Maasai Mara",
        description: [
          "Early start with coffee in the vehicle. Three to four hours on the predators in the cool of the morning, then back to camp for brunch and the heat of the day.",
          "Out again in the late afternoon. The Angama-side of the Triangle is famously productive — we'd usually expect lion and cheetah in the first 48 hours.",
        ],
        lodge: "Angama Mara",
        meals: ["B", "L", "D"],
      },
      {
        day: 4,
        title: "Mara to Lake Nakuru",
        location: "Lake Nakuru",
        description: [
          "Morning flight back to Wilson, then road transfer to Lake Nakuru — roughly three hours, with lunch at a Rift Valley viewpoint.",
          "Afternoon game drive on arrival. Nakuru is compact and rhino-rich; we'd expect both species on the first drive.",
        ],
        lodge: "The Cliff, Lake Nakuru",
        meals: ["B", "L", "D"],
      },
      {
        day: 5,
        title: "Full day Lake Nakuru",
        location: "Lake Nakuru",
        description: [
          "A full day in the park. The lake circuit usually produces white rhino on grasslands by the shore, and black rhino in the wooded edges. Rothschild's giraffe are easy to find here — distinguished by clean white legs.",
          "Late afternoon: drive up to Baboon Cliff or Lion Hill for the sunset view across the lake and park.",
        ],
        lodge: "The Cliff, Lake Nakuru",
        meals: ["B", "L", "D"],
      },
      {
        day: 6,
        title: "Nakuru to Amboseli",
        location: "Amboseli",
        description: [
          "Drive to Naivasha airstrip and fly south to Amboseli — bypasses Nairobi and the long road south.",
          "Camp by mid-afternoon. Short evening drive routed toward the elephant herds heading back to the swamp at dusk.",
        ],
        lodge: "Tortilis Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 7,
        title: "Full day Amboseli",
        location: "Amboseli",
        description: [
          "Pre-dawn at Observation Hill for Kilimanjaro — typically the cleanest mountain view of the trip is now.",
          "Long morning at the swamp. Big tuskers, buffalo, pelicans. Afternoon drive into Amboseli's western corner for cheetah country.",
        ],
        lodge: "Tortilis Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 8,
        title: "Amboseli to Tsavo",
        location: "Tsavo",
        description: [
          "Road transfer east into Tsavo West — about four hours, mostly inside park boundaries so the drive is itself a game drive.",
          "Lunch at Finch Hattons. Afternoon visit to Mzima Springs — hippo and crocodile visible from an underwater observation chamber.",
        ],
        lodge: "Finch Hattons",
        meals: ["B", "L", "D"],
      },
      {
        day: 9,
        title: "Full day Tsavo",
        location: "Tsavo",
        description: [
          "Tsavo East or West, depending on your guide's read of where the wildlife is concentrated. Tsavo's elephants are unmistakable — coated in iron-red dust from their dust baths.",
          "Visit to the Shetani lava flow if the guide can fit it — a recent volcanic flow you can walk across.",
        ],
        lodge: "Finch Hattons",
        meals: ["B", "L", "D"],
      },
      {
        day: 10,
        title: "Tsavo to Nairobi or Mombasa",
        location: "Departure",
        description: [
          "Final morning drive. Brunch at the lodge, then transfer to Voi for the train to Nairobi (recommended — fast and scenic) or onward train south to Mombasa if you're continuing to the coast.",
          "Day-room available in Nairobi if you have a late international flight. We'll coordinate the timing to your flight.",
        ],
        meals: ["B"],
      },
    ],
    inclusions: [
      "All internal flights (Wilson–Mara, Mara–Wilson, Naivasha–Amboseli)",
      "Train fare Voi–Nairobi",
      "Private 4x4 game-viewers and local specialist guide in each park",
      "All park, reserve and conservancy fees",
      "Luxury accommodation on full-board basis",
      "Airport transfers in Nairobi",
      "Two-bottle daily water allowance, sundowners, beer & house wines included at most camps",
    ],
    exclusions: [
      "International flights",
      "Kenya visa ($50 per person)",
      "Premium spirits and cellar wines at camps",
      "Optional balloon safari ($450 per person)",
      "Tips and gratuities",
      "Personal travel insurance",
    ],
    faqs: [
      {
        question: "Is this suitable for kids?",
        answer:
          "Yes, from age 10 upwards. The trip is long and involves four different sets of unpacking, so it suits older children who can handle the rhythm. Several of the luxury camps used have minimum age restrictions in their main areas — we'll match accommodation to your party.",
      },
      {
        question: "What vehicles do you use?",
        answer:
          "Toyota Landcruiser 4x4 game-viewers throughout. Each park hands you over to its own local specialist — we believe the best Mara guide is not necessarily the best Tsavo guide. Vehicles are equipped with charging, fridges and pop-up roofs.",
      },
      {
        question: "What's the best time of year for this trip?",
        answer:
          "June through October is optimal across all four parks. January and February also excellent. We'd avoid April and May (long rains) for this particular routing as roads in Tsavo can become difficult.",
      },
      {
        question: "How fit do I need to be?",
        answer:
          "Moderate. Some of the camps used have raised tents with steps; the Mzima Springs walk is short and flat but on uneven ground. Otherwise the trip is vehicle-based and accessible.",
      },
      {
        question: "What happens if I need to cancel?",
        answer:
          "More than 90 days out: full refund less $300 admin. 90–60 days: 50% refund. Inside 60 days: no refund but a credit for 12 months. For peak July–October bookings, we hold camp space with a non-refundable deposit at the camps' request — we'll be explicit about this in the contract.",
      },
    ],
    heroImage: "/images/tours/big-five-grand-circuit.webp",
    gallery: [
      { src: "https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Pink-tinged lake at dawn" },
      { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80", alt: "Elephants on the open plain" },
      { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80", alt: "Cheetah at golden hour" },
      { src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200&q=80", alt: "Elephant herd against Kilimanjaro" },
      { src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Reticulated giraffe in scrub" },
      { src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200&q=80", alt: "Lion pride at rest" },
      { src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=1200&q=80", alt: "Forest stream and montane mist" },
      { src: "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?w=1200&q=80", alt: "Luxury camp tent at sunset" },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },

  // 4. Northern Frontier — 8 days, luxury
  {
    slug: "northern-frontier",
    title: "Northern Frontier",
    durationDays: 8,
    style: "Luxury",
    priceFromUsd: 3900,
    groupSizeMax: 4,
    rating: 5.0,
    reviewCount: 41,
    shortDescription:
      "Samburu, Ol Pejeta and Lewa — the species you won't see in the south, on conservancies that wrote the modern conservation playbook.",
    overview: [
      "Northern Kenya is the country's other Kenya. Drier, scrubbier, less travelled — and home to the \"Samburu Five\" species that don't exist south of Mount Kenya. Reticulated giraffe, Grevy's zebra, gerenuk, beisa oryx, Somali ostrich. Plus the densest rhino population in the country at Lewa, and the last northern white rhinos at Ol Pejeta.",
      "Eight days. Three private conservancies, no public parks. Conservancies mean strict vehicle limits, off-road tracking, night drives and walking — none of which is permitted in national parks. Luxury-tier accommodation throughout, with several of the rooms widely considered the best in Kenya.",
    ],
    highlights: [
      { icon: "Sunrise", text: "Three conservancies — no crowds, full off-road access." },
      { icon: "Camera", text: "Samburu Five species: reticulated giraffe, Grevy's, gerenuk, oryx, Somali ostrich." },
      { icon: "Tent", text: "Walking safaris with armed rangers — only possible on conservancies." },
      { icon: "Users", text: "The last two northern white rhinos at Ol Pejeta." },
      { icon: "Mountain", text: "Mount Kenya views from Lewa's higher ground." },
    ],
    destinations: ["samburu", "ol-pejeta"],
    routeLabel: ["Nairobi", "Samburu", "Ol Pejeta", "Lewa", "Nairobi"],
    routeStops: [
      { slug: "nairobi", label: "Nairobi", ...COORDS.nairobi },
      { slug: "samburu", label: "Samburu", ...COORDS.samburu },
      { slug: "ol-pejeta", label: "Ol Pejeta / Lewa", ...COORDS["ol-pejeta"] },
      { slug: "nairobi", label: "Nairobi", ...COORDS.nairobi },
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly to Samburu",
        location: "Samburu",
        description: [
          "Morning charter flight from Wilson to Samburu — one hour, with Mount Kenya filling the window on a clear day.",
          "Lunch on arrival, then a late afternoon drive along the Ewaso Ng'iro river. Reticulated giraffe and Grevy's zebra typically work the riverbank in the late light.",
        ],
        lodge: "Sasaab",
        meals: ["L", "D"],
      },
      {
        day: 2,
        title: "Full day Samburu",
        location: "Samburu",
        description: [
          "Pre-dawn drive to look for leopard in the doum palm thickets. The Samburu leopards are known by name to the guides; sightings are reliable.",
          "Afternoon walking safari with an armed Samburu ranger — focused on tracks, plants and bird behaviour rather than chasing big game.",
        ],
        lodge: "Sasaab",
        meals: ["B", "L", "D"],
      },
      {
        day: 3,
        title: "Samburu + cultural visit",
        location: "Samburu",
        description: [
          "Morning game drive into Buffalo Springs Reserve, adjacent to Samburu. The two reserves work as one ecosystem — different vegetation, often different cats.",
          "Afternoon: visit to a Samburu manyatta arranged through the community conservancy. This isn't a curated performance — it's a conversation with a community whose income depends on tourism revenue working honestly.",
        ],
        lodge: "Sasaab",
        meals: ["B", "L", "D"],
      },
      {
        day: 4,
        title: "Fly to Ol Pejeta",
        location: "Ol Pejeta",
        description: [
          "Short flight south to Ol Pejeta — 30 minutes. Mount Kenya emerges to the south as you descend.",
          "Lunch at camp. Afternoon: visit to the Sweetwaters Chimpanzee Sanctuary and the rhino enclosure where Najin and Fatu — the last two northern white rhinos on earth — are kept under armed protection.",
        ],
        lodge: "Sirikoi (private wing)",
        meals: ["B", "L", "D"],
      },
      {
        day: 5,
        title: "Full day Ol Pejeta",
        location: "Ol Pejeta",
        description: [
          "Off-road tracking of black rhino at dawn (only conservancies permit this). Ol Pejeta holds the largest black rhino population in East Africa.",
          "Night drive after dinner — the only place in Kenya where you can legally take a spotlight into the bush. Bushbabies, civets, white-tailed mongoose, and on a good night, leopard.",
        ],
        lodge: "Sirikoi",
        meals: ["B", "L", "D"],
      },
      {
        day: 6,
        title: "Transfer to Lewa",
        location: "Lewa",
        description: [
          "Short transfer (one hour, mostly off-road through conservancy land) to Lewa. Lewa is where modern community conservation in Kenya was effectively invented; visiting it is visiting the working blueprint.",
          "Afternoon: walking safari and rhino tracking on foot — possible only here because of Lewa's rhino density and ranger training.",
        ],
        lodge: "Lewa House",
        meals: ["B", "L", "D"],
      },
      {
        day: 7,
        title: "Full day Lewa",
        location: "Lewa",
        description: [
          "Optional horseback safari at first light (additional cost) — the riding here is widely considered the best in East Africa. Otherwise a vehicle-based morning targeting cheetah and Lewa's resident wild dog pack when they're in.",
          "Afternoon: helicopter scenic flight option to the slopes of Mount Kenya (additional cost). Or a slow afternoon at the camp.",
        ],
        lodge: "Lewa House",
        meals: ["B", "L", "D"],
      },
      {
        day: 8,
        title: "Lewa to Nairobi",
        location: "Departure",
        description: [
          "Final morning walk or drive — choice is yours. Brunch back at the lodge, then a one-hour flight back to Wilson.",
          "Onward transfer to your hotel or the international airport. Day-room arranged as needed.",
        ],
        meals: ["B"],
      },
    ],
    inclusions: [
      "All internal flights (Wilson–Samburu, Samburu–Ol Pejeta, Lewa–Wilson)",
      "Private 4x4 game-viewer in each conservancy",
      "Local specialist guide in each conservancy",
      "All conservancy and rhino sanctuary fees",
      "Luxury accommodation on full-board basis",
      "House wines, beers and spirits at all camps",
      "Airport transfers in Nairobi",
    ],
    exclusions: [
      "International flights",
      "Kenya visa ($50 per person)",
      "Optional horseback safari ($300 per person, Lewa)",
      "Optional helicopter scenic ($1,200 for two)",
      "Tips and gratuities",
      "Personal travel insurance",
      "Premium spirits and cellar wines",
    ],
    faqs: [
      {
        question: "Is this suitable for kids?",
        answer:
          "From age 12 upwards. The walking safaris and night drives are not appropriate for younger children, and several of the camps used have age restrictions. For families with younger children we'd swap Lewa for a more family-oriented Ol Pejeta wing and skip walking activities.",
      },
      {
        question: "What vehicles do you use?",
        answer:
          "Open-sided Toyota Landcruiser game-viewers on the conservancies (since they permit it). Private use throughout. Charging points, fridges and a small ranger seat for walking transitions.",
      },
      {
        question: "What's the best time of year for this trip?",
        answer:
          "June through October and January through February are the strongest months for the northern conservancies. March, April and May are the long rains — most northern lodges close or reduce capacity. November is shoulder.",
      },
      {
        question: "How fit do I need to be?",
        answer:
          "Walking safaris involve 2–3 hours on foot at a slow tracking pace — moderate fitness needed. Riding (optional) requires prior horseback experience. The night drives are vehicle-based.",
      },
      {
        question: "What happens if I need to cancel?",
        answer:
          "More than 90 days out: full refund less $400 admin. 90–60 days: 40% refund. Inside 60 days: no refund but credit toward a future trip within 18 months. The luxury camps used here ask for non-refundable deposits closer to date; we'll itemise these clearly.",
      },
    ],
    heroImage: "/images/tours/northern-frontier.webp",
    gallery: [
      { src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Reticulated giraffe close-up" },
      { src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200&q=80", alt: "Lion in early light" },
      { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80", alt: "Elephant family at the riverbed" },
      { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80", alt: "Cheetah scanning open ground" },
      { src: "https://images.pexels.com/photos/3551226/pexels-photo-3551226.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Conservancy plains at golden hour" },
      { src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200&q=80", alt: "Riverbed scene" },
      { src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=1200&q=80", alt: "Forest canopy in mist" },
      { src: "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?w=1200&q=80", alt: "Luxury bush tent interior" },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },

  // 5. Family Safari & Beach — 11 days, family/mid-range
  {
    slug: "family-safari-beach",
    title: "Family Safari & Beach",
    durationDays: 11,
    style: "Family",
    priceFromUsd: 2650,
    groupSizeMax: 8,
    rating: 4.9,
    reviewCount: 58,
    shortDescription:
      "Built for parents, paced for kids. Sheldrick orphans, Ol Pejeta off-road tracking, three Mara days, four on the white sand of Diani.",
    overview: [
      "A trip that respects how kids actually travel — short driving legs, lots of variety, things to touch and do, and unwinding days on a beach at the end. Nairobi-based activities at the start, then a non-stop safari arc through Ol Pejeta and the Mara, then four full days on Diani Beach to decompress.",
      "Family rooms or interconnecting tents at every stop. Children's-menu options at every meal. A private vehicle and guide who works specifically with families — slower starts, longer mid-day breaks, things explained as the day unfolds.",
    ],
    highlights: [
      { icon: "Sunrise", text: "Sheldrick elephant orphans and the Giraffe Centre in Nairobi." },
      { icon: "Camera", text: "Ol Pejeta off-road rhino tracking and chimps." },
      { icon: "Tent", text: "Three full days in the Mara — predator country, family-paced." },
      { icon: "Users", text: "Maasai community visit with kids' activities." },
      { icon: "Mountain", text: "Four days on Diani Beach — pool, reef, sailing." },
    ],
    destinations: ["ol-pejeta", "maasai-mara", "diani-beach"],
    routeLabel: ["Nairobi", "Ol Pejeta", "Maasai Mara", "Diani Beach"],
    routeStops: [
      { slug: "nairobi", label: "Nairobi", ...COORDS.nairobi },
      { slug: "ol-pejeta", label: "Ol Pejeta", ...COORDS["ol-pejeta"] },
      { slug: "maasai-mara", label: "Maasai Mara", ...COORDS["maasai-mara"] },
      { slug: "diani-beach", label: "Diani Beach", ...COORDS["diani-beach"] },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        location: "Nairobi",
        description: [
          "Airport pickup and transfer to a family-friendly hotel in Karen — leafy, quiet, pool, big rooms.",
          "Easy day to recover from the flight. If you arrive early, the David Sheldrick Wildlife Trust elephant orphans are open 11am to noon daily — kid-favourite, foster-an-elephant option available.",
        ],
        lodge: "House of Waine",
        meals: ["D"],
      },
      {
        day: 2,
        title: "Sheldrick + Giraffe Centre",
        location: "Nairobi",
        description: [
          "Morning at the Sheldrick orphans (if not done yesterday), then the Giraffe Centre — Rothschild's giraffes you can hand-feed from a raised platform. Eye-level with a giraffe is unforgettable for kids and adults.",
          "Afternoon: Karen Blixen House (the Out of Africa one) or the Karura Forest walk, depending on the weather and how the kids are doing.",
        ],
        lodge: "House of Waine",
        meals: ["B", "D"],
      },
      {
        day: 3,
        title: "Drive to Ol Pejeta",
        location: "Ol Pejeta",
        description: [
          "Morning drive north — about three hours, with a stop at the Thomson's Falls or the Equator line crossing (water-spinning demonstration is a hit with kids).",
          "Lunch at lodge. Afternoon visit to the chimpanzee sanctuary, then a short game drive on Ol Pejeta. Off-road tracking is permitted here, so the guide can take you to the rhino, not just past them.",
        ],
        lodge: "Sweetwaters Serena (family tent)",
        meals: ["B", "L", "D"],
      },
      {
        day: 4,
        title: "Full day Ol Pejeta",
        location: "Ol Pejeta",
        description: [
          "Morning visit to the northern white rhinos — Najin and Fatu. The conservancy will brief the kids on why these two animals matter; it lands.",
          "Afternoon: a short walking safari (age-permitting) with a ranger, and night drive after dinner — bush babies, white-tailed mongoose, civets. Kids stay up later than they should.",
        ],
        lodge: "Sweetwaters Serena",
        meals: ["B", "L", "D"],
      },
      {
        day: 5,
        title: "Fly to the Mara",
        location: "Maasai Mara",
        description: [
          "Short transfer to Nanyuki airstrip, then a charter flight south to the Mara — 90 minutes total. The flight itself is a highlight for kids; ask for a window seat both sides.",
          "Lunch on arrival, then an afternoon game drive. The Mara's lion density makes the first afternoon usually productive.",
        ],
        lodge: "Naboisho Camp (family tent)",
        meals: ["B", "L", "D"],
      },
      {
        day: 6,
        title: "Full day Mara",
        location: "Maasai Mara",
        description: [
          "Sunrise drive — packed breakfast in the field. The conservancy permits off-road tracking, so when the guide picks up a cheetah or hunting pride the vehicle can follow.",
          "Late afternoon: visit to a Maasai community arranged by the conservancy. Kids' activities — beading, throwing a rungu — are part of the visit when requested.",
        ],
        lodge: "Naboisho Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 7,
        title: "Full day Mara",
        location: "Maasai Mara",
        description: [
          "Today the guide builds the day around what's been seen. The Naboisho lion prides have a habit of being on a kill in the morning; if so, that's where we go first.",
          "Afternoon: balloon safari for the family (optional, additional cost). For families who skip the balloon, a sundowner picnic in the conservancy is a gentle alternative.",
        ],
        lodge: "Naboisho Camp",
        meals: ["B", "L", "D"],
      },
      {
        day: 8,
        title: "Fly to Diani",
        location: "Diani Beach",
        description: [
          "Morning game drive on the way to the airstrip — last shot at anything you haven't seen yet. Charter back to Wilson, then a scheduled flight south to Ukunda (Diani's airstrip). Long day, but the reward is the beach by late afternoon.",
          "Sunset on the sand. Pool. Pasta. Sleep.",
        ],
        lodge: "AfroChic Diani (or Almanara private cottage)",
        meals: ["B", "L", "D"],
      },
      {
        day: 9,
        title: "Diani Beach",
        location: "Diani Beach",
        description: [
          "Slow day. The reef is half a kilometre offshore, so shore-break is gentle. Snorkel on the inshore reef at low tide, swim, build sand things.",
          "Afternoon option: a dhow trip out to the Kisite-Mpunguti marine park (kids upwards of 6) — bottlenose dolphins are common, and the reef snorkelling is the best on the south coast.",
        ],
        lodge: "AfroChic Diani",
        meals: ["B", "L", "D"],
      },
      {
        day: 10,
        title: "Diani Beach",
        location: "Diani Beach",
        description: [
          "Free day. Optional Shimba Hills excursion — elephants in the coastal forest above the beach, and the rare sable antelope (Kenya's only population).",
          "Afternoon: kitesurf lesson for older kids (Diani is the kitesurf capital of East Africa, June–October).",
        ],
        lodge: "AfroChic Diani",
        meals: ["B", "L", "D"],
      },
      {
        day: 11,
        title: "Diani to Nairobi",
        location: "Departure",
        description: [
          "Morning at the beach. Late checkout, flight from Ukunda to Nairobi by mid-afternoon — connects to most international evening flights out of JKIA. Day-room available in Nairobi if needed.",
        ],
        meals: ["B"],
      },
    ],
    inclusions: [
      "All internal flights (Wilson–Mara, Mara–Wilson, Wilson–Ukunda)",
      "Private 4x4 game-viewer and family-specialist guide",
      "All park, conservancy and sanctuary fees",
      "Accommodation in family tents / interconnecting rooms",
      "Full board on safari; half board at the beach",
      "Sheldrick Trust and Giraffe Centre entry",
      "Airport transfers throughout",
    ],
    exclusions: [
      "International flights",
      "Kenya visa ($50 per adult; under-16s free)",
      "Optional Mara balloon ($450/person; 7yr+ minimum)",
      "Optional kitesurf lessons",
      "Tips and gratuities",
      "Personal travel insurance",
      "Drinks at restaurants outside camps",
    ],
    faqs: [
      {
        question: "Is this suitable for kids?",
        answer:
          "Yes — this trip is specifically built for families with children aged 6–16. We've used it for everything from a single family of three to multi-generational groups of eight. We can adjust pacing and accommodation for younger or older kids; just tell us their ages when we plan.",
      },
      {
        question: "What vehicles do you use?",
        answer:
          "Toyota Landcruiser 4x4 game-viewers with extended seating and a fold-down bench at the rear for younger kids. Pop-up roof, fridges, charging. The guide is selected from our family-specialist roster — they pace the day differently and explain things at a kid's level when needed.",
      },
      {
        question: "What's the best time of year for this trip?",
        answer:
          "June through October for the safari portion and the beach. December and January are also excellent. We'd avoid April and May for the safari leg (long rains) but the beach is fine year-round.",
      },
      {
        question: "How fit do I need to be?",
        answer:
          "No fitness requirement — the trip is built around comfort. The optional walking safari on day 4 is short and easy.",
      },
      {
        question: "What happens if I need to cancel?",
        answer:
          "More than 60 days out: full refund less $250 admin. 60–30 days: 50% refund. Inside 30 days: 25% refund. For family bookings we're more flexible than usual on reschedules — life with kids changes plans, we get it.",
      },
    ],
    heroImage: "/images/tours/family-safari-beach.webp",
    gallery: [
      { src: "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?w=1200&q=80", alt: "Beach palms and turquoise water" },
      { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80", alt: "Elephants on the savanna" },
      { src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Reticulated giraffe close-up" },
      { src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200&q=80", alt: "Elephant family at the swamp" },
      { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80", alt: "Cheetah on a termite mound" },
      { src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200&q=80", alt: "Sleeping lion under acacia" },
      { src: "https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Flamingo flock at a lake" },
      { src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=1200&q=80", alt: "Wildebeest at the riverbank" },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"],
  },

  // 6. Budget Camping Adventure — 6 days, budget
  {
    slug: "budget-camping-adventure",
    title: "Budget Camping Adventure",
    durationDays: 6,
    style: "Budget",
    priceFromUsd: 890,
    groupSizeMax: 7,
    rating: 4.7,
    reviewCount: 96,
    shortDescription:
      "Same wildlife, half the price. Three parks, public campsites, shared group, real cooking around real fires. Built for travellers under 35 — but anyone can come.",
    overview: [
      "A small-group camping trip designed to make a real Kenyan safari accessible on a real backpacker budget. Public campsites inside or adjacent to the parks. A cook traveling with the group. A guide-driver who's been doing this for years and knows where the wildlife is at any given hour. Same Toyota Landcruiser as our luxury trips — the difference is the camp, not the country.",
      "Six days. Mara, Lake Nakuru and Naivasha. Tents and bedding are provided; you'll help with camp setup and washing up after dinner. The group is mixed but capped at seven travellers — no truck-tour energy.",
    ],
    highlights: [
      { icon: "Sunrise", text: "Three parks in six days at less than half the typical price." },
      { icon: "Camera", text: "Same Mara wildlife as our luxury trips." },
      { icon: "Tent", text: "Public campsites — wild edges, fire-cooked dinners." },
      { icon: "Users", text: "Small group cap of seven, not a converted truck of twenty." },
      { icon: "Mountain", text: "Optional Hell's Gate biking in Naivasha — cycle past zebra and giraffe." },
    ],
    destinations: ["maasai-mara", "lake-nakuru"],
    routeLabel: ["Nairobi", "Maasai Mara", "Lake Nakuru", "Naivasha", "Nairobi"],
    routeStops: [
      { slug: "nairobi", label: "Nairobi", ...COORDS.nairobi },
      { slug: "maasai-mara", label: "Maasai Mara", ...COORDS["maasai-mara"] },
      { slug: "lake-nakuru", label: "Lake Nakuru", ...COORDS["lake-nakuru"] },
      { slug: "nairobi", label: "Nairobi", ...COORDS.nairobi },
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to the Mara",
        location: "Maasai Mara",
        description: [
          "Pickup from your Nairobi hostel or hotel by 8am. Long drive west into the Mara — five hours, with a lunch stop at a Rift Valley overlook.",
          "Arrival at the public campsite near Talek Gate by mid-afternoon. Tent setup as a group, short orientation, then the first afternoon game drive into the reserve.",
        ],
        lodge: "Public campsite, Talek (tents provided)",
        meals: ["L", "D"],
      },
      {
        day: 2,
        title: "Full day Mara",
        location: "Maasai Mara",
        description: [
          "Out early after breakfast at camp. Full day in the reserve — your guide knows the section well and we typically work the morning around the cats.",
          "Hot lunch in the field. Back to camp at dusk; dinner cooked over fire by the trip cook.",
        ],
        lodge: "Public campsite, Talek",
        meals: ["B", "L", "D"],
      },
      {
        day: 3,
        title: "Full day Mara",
        location: "Maasai Mara",
        description: [
          "A second full day in the reserve, today routed deeper into the Mara — possibly down to the river if crossings are running (Jul–Oct).",
          "Optional Maasai village visit on the conservancy boundary, additional fee paid direct to the community.",
        ],
        lodge: "Public campsite, Talek",
        meals: ["B", "L", "D"],
      },
      {
        day: 4,
        title: "Mara to Lake Nakuru",
        location: "Lake Nakuru",
        description: [
          "Long transfer day — Mara to Nakuru, about six hours with lunch en route. Camp at a public site just outside the park gate.",
          "Late afternoon game drive in Nakuru. Both species of rhino are usually findable in the first afternoon.",
        ],
        lodge: "Public campsite, Nakuru",
        meals: ["B", "L", "D"],
      },
      {
        day: 5,
        title: "Nakuru to Naivasha",
        location: "Naivasha",
        description: [
          "Morning game drive in Nakuru — Baboon Cliff for the lake view, then descend to look for tree-climbing lions and rhino we may have missed.",
          "After lunch, a short transfer to Lake Naivasha. Camp by the lake (hippos grunt at night — they're outside the tent, not inside). Optional sundowner boat trip on Naivasha to see fish eagles.",
        ],
        lodge: "Public campsite, Naivasha",
        meals: ["B", "L", "D"],
      },
      {
        day: 6,
        title: "Naivasha to Nairobi",
        location: "Departure",
        description: [
          "Morning: optional bike ride or walk in Hell's Gate National Park — the only park in Kenya where you can do both safely, since there are no big cats. You'll cycle past zebra, giraffe and warthog.",
          "Brunch back at camp, then the two-hour drive back to Nairobi. Drop-off at your hotel or the airport.",
        ],
        meals: ["B"],
      },
    ],
    inclusions: [
      "Land transport in a shared Toyota Landcruiser",
      "Professional guide-driver and trip cook",
      "All park fees for Mara, Nakuru and Naivasha",
      "Camping fees, tents, sleeping mats",
      "All meals on safari (breakfast, packed lunch, hot dinner)",
      "Drinking water in the vehicle",
      "Nairobi hotel pickup and drop-off",
    ],
    exclusions: [
      "International flights",
      "Kenya visa ($50 per person)",
      "Sleeping bag (rent for $30 or bring your own)",
      "Optional Naivasha boat ($30 per person)",
      "Optional Hell's Gate biking ($25 per person)",
      "Optional Maasai village visit ($20 per person, paid direct)",
      "Tips and gratuities",
      "Personal travel insurance",
    ],
    faqs: [
      {
        question: "Is this suitable for kids?",
        answer:
          "Children over 14 only, and only when in your party. The shared-group format and basic camping conditions don't suit younger kids — for families, we'd recommend the Family Safari & Beach instead.",
      },
      {
        question: "What vehicles do you use?",
        answer:
          "The same Toyota Landcruiser 4x4 game-viewers as our other trips. Up to 7 guests share one vehicle; everyone gets a window seat. Pop-up roof for photography.",
      },
      {
        question: "What's the best time of year for this trip?",
        answer:
          "We run departures year-round but recommend June through October and January through March. April and May (long rains) can mean wet camping and difficult roads — discounted prices but the experience is materially harder.",
      },
      {
        question: "How fit do I need to be?",
        answer:
          "You need to be able to sleep on a thin camping mat and help carry your own bag. The optional bike ride in Hell's Gate requires basic cycling ability. Otherwise the days are vehicle-based and easy.",
      },
      {
        question: "What happens if I need to cancel?",
        answer:
          "More than 30 days out: full refund less $100 admin. 30–14 days: 50% refund. Inside 14 days: no refund, but you can transfer the booking to someone else for free or move to a later departure for a $100 fee.",
      },
    ],
    heroImage: "/images/tours/budget-camping-adventure.webp",
    gallery: [
      { src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=1200&q=80", alt: "Wildebeest crossing the river" },
      { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80", alt: "Elephants in dust light" },
      { src: "https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Lake Nakuru flamingos" },
      { src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Giraffe at thorn tree" },
      { src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200&q=80", alt: "Sleeping lion" },
      { src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200&q=80", alt: "Elephant herd" },
      { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80", alt: "Cheetah on a mound" },
      { src: "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?w=1200&q=80", alt: "Camp tent at sunset" },
    ],
    bestMonths: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
];

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export function getRelatedTours(slug: string, count = 3) {
  return tours.filter((t) => t.slug !== slug).slice(0, count);
}
