import type { Destination, Month } from "@/types";

const months12: Month[] = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function scores(values: number[]): Record<Month, number> {
  return months12.reduce(
    (acc, m, i) => {
      acc[m] = values[i] ?? 3;
      return acc;
    },
    {} as Record<Month, number>
  );
}

export const destinations: Destination[] = [
  {
    slug: "maasai-mara",
    name: "Maasai Mara",
    oneLineDraw: "Migration & big cats.",
    heroImage: "/images/destinations/maasai-mara.webp",
    shortDescription:
      "Kenya's flagship reserve — open savanna, dense predator populations, and the Great Migration crossings from July to October.",
    whyGo: [
      "The Mara holds the densest lion population of any reserve in Kenya, and cheetah sightings are reliable across the year. The Mara Triangle and the northern conservancies (Mara North, Naboisho, Ol Kinyei) deliver the same wildlife with a fraction of the vehicles.",
      "Between July and October, more than a million wildebeest, zebra and Thomson's gazelle move into the reserve from Tanzania's Serengeti. The Mara River crossings — where columns of wildebeest plunge into crocodile-thick water — are the visual the entire continent is famous for.",
      "Off-season (November to June) is when the Mara comes into its own for travellers who want the wildlife without the convoys. Cubs are abundant, the grass is short after the rains, and accommodation is materially cheaper.",
    ],
    sizeKm2: 1510,
    bestMonths: ["Jul", "Aug", "Sep", "Oct"],
    monthlyScore: scores([3, 3, 3, 3, 3, 4, 5, 5, 5, 5, 4, 3]),
    signatureWildlife: ["Lion", "Cheetah", "Leopard", "Wildebeest Migration"],
    species: [
      {
        name: "Lion",
        note: "Resident prides of 15+ in the Mara Triangle and Naboisho.",
        icon: "Cat",
      },
      {
        name: "Cheetah",
        note: "Reliable daily sightings — often on termite mounds at dawn.",
        icon: "Wind",
      },
      {
        name: "Leopard",
        note: "Concentrated along the Talek and Mara River fig trees.",
        icon: "Eye",
      },
      {
        name: "Elephant",
        note: "Large breeding herds, particularly in the eastern Mara.",
        icon: "Mountain",
      },
      {
        name: "Wildebeest",
        note: "Migration river-crossings July through October.",
        icon: "Waves",
      },
      {
        name: "Black Rhino",
        note: "Critically endangered population in the Mara Triangle.",
        icon: "Shield",
      },
    ],
  },
  {
    slug: "amboseli",
    name: "Amboseli",
    oneLineDraw: "Elephants under Kilimanjaro.",
    heroImage: "/images/destinations/amboseli.webp",
    shortDescription:
      "The classic Kenya photograph — long-tusked elephant families crossing dry lake beds with Mount Kilimanjaro filling the southern horizon.",
    whyGo: [
      "Amboseli holds some of the largest tuskers left in East Africa. The elephants here have been studied continuously since 1972, making this one of the most documented populations on earth — and one of the most relaxed around vehicles.",
      "Despite the name (Amboseli means \"salty dust\" in Maa), the park is fed by underground rivers from Kilimanjaro's snowmelt. The result is a network of permanent swamps that draw thousands of animals into a relatively small area, especially in dry months.",
      "The Kilimanjaro backdrop is real but fickle — the mountain is most reliably clear at sunrise and sunset, and often shrouded by midday. Plan your photography accordingly.",
    ],
    sizeKm2: 392,
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
    monthlyScore: scores([5, 5, 4, 3, 3, 4, 5, 5, 5, 5, 3, 4]),
    signatureWildlife: ["Elephant", "Wildebeest", "Buffalo", "Hippo"],
    species: [
      {
        name: "Elephant",
        note: "Tuskers with ivory still touching the ground.",
        icon: "Mountain",
      },
      {
        name: "Cape Buffalo",
        note: "Large herds congregate around the swamps.",
        icon: "Shield",
      },
      {
        name: "Hippo",
        note: "Permanent pods in Enkongo Narok swamp.",
        icon: "Droplet",
      },
      {
        name: "Lion",
        note: "Smaller population than the Mara but reliably sighted.",
        icon: "Cat",
      },
      {
        name: "Spotted Hyena",
        note: "Active at dusk near the western marshes.",
        icon: "Moon",
      },
      {
        name: "African Fish Eagle",
        note: "Calling from acacias at the swamp edge.",
        icon: "Bird",
      },
    ],
  },
  {
    slug: "tsavo",
    name: "Tsavo East & West",
    oneLineDraw: "Red elephants and lava country.",
    heroImage: "/images/destinations/tsavo.webp",
    shortDescription:
      "Kenya's largest wild place — 22,000 km² of dust-red elephants, ancient lava flows, and the spring-fed Mzima oasis.",
    whyGo: [
      "Tsavo is roughly the size of Wales. It is older, drier and wilder than the Mara, with elephants that dust-bathe in iron-rich soil and emerge stained dark red — Tsavo's signature image. Lion are present but harder to spot than in the Mara; that's the point.",
      "Tsavo West contains Mzima Springs, where a chain of pools fed by underground rivers from the Chyulu Hills hosts hippos and crocodiles visible through an underwater observation chamber. The Shetani lava flow nearby is geologically recent and walkable.",
      "Tsavo East's Yatta Plateau is the longest lava flow on earth. The eastern park is open and dust-coloured — the contrast with the lush vegetation around Mzima in the west is the reason to do both parks in a single visit.",
    ],
    sizeKm2: 22000,
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep"],
    monthlyScore: scores([5, 5, 4, 2, 2, 4, 5, 5, 5, 4, 3, 3]),
    signatureWildlife: ["Elephant", "Lion", "Leopard", "Hirola"],
    species: [
      {
        name: "Elephant",
        note: "Red-stained from iron-rich Tsavo soil.",
        icon: "Mountain",
      },
      {
        name: "Lion",
        note: "Famously maneless males in some Tsavo prides.",
        icon: "Cat",
      },
      {
        name: "Lesser Kudu",
        note: "Striking dry-country antelope, easy to miss.",
        icon: "Triangle",
      },
      {
        name: "Hirola",
        note: "Critically endangered antelope; Tsavo conservation programme.",
        icon: "Shield",
      },
      {
        name: "Hippo",
        note: "Visible underwater at Mzima Springs.",
        icon: "Droplet",
      },
      {
        name: "Crocodile",
        note: "Mzima Springs holds a large breeding population.",
        icon: "Waves",
      },
    ],
  },
  {
    slug: "samburu",
    name: "Samburu",
    oneLineDraw: "Northern species you won't see further south.",
    heroImage: "/images/destinations/samburu.webp",
    shortDescription:
      "Semi-arid scrubland north of Mount Kenya — home to the \"Samburu Five\" species found almost nowhere else on the safari circuit.",
    whyGo: [
      "Samburu's draw is its specialists — reticulated giraffe, Grevy's zebra, gerenuk, beisa oryx, and Somali ostrich. None of these are in the Mara or Amboseli, which makes Samburu the natural pairing for a returning traveller or anyone wanting their list to stretch beyond the southern parks.",
      "The Ewaso Ng'iro river runs through the reserve and pulls almost everything toward it, especially in the dry season. Elephant herds bathe in the river. Leopard slip through the doum palms at dusk. Crocodile lie like driftwood on the sandbanks.",
      "The Samburu people — close cousins of the Maasai — live on the surrounding lands. Cultural visits arranged through community-run conservancies are not staged; they're conversations.",
    ],
    sizeKm2: 165,
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
    monthlyScore: scores([5, 5, 4, 3, 2, 5, 5, 5, 5, 4, 3, 4]),
    signatureWildlife: ["Reticulated Giraffe", "Grevy's Zebra", "Gerenuk", "Leopard"],
    species: [
      {
        name: "Reticulated Giraffe",
        note: "Crisp white lines on chestnut panels — distinct from Mara giraffe.",
        icon: "TreePine",
      },
      {
        name: "Grevy's Zebra",
        note: "Larger ears, narrower stripes — endangered.",
        icon: "Triangle",
      },
      {
        name: "Gerenuk",
        note: "Long-necked antelope that browses standing on hind legs.",
        icon: "Eye",
      },
      {
        name: "Beisa Oryx",
        note: "Pale antelope with rapier horns, well-camouflaged in scrub.",
        icon: "Shield",
      },
      {
        name: "Somali Ostrich",
        note: "Blue-legged, blue-necked — replaces the common ostrich here.",
        icon: "Bird",
      },
      {
        name: "Leopard",
        note: "Concentrated along the river — Kamunyak made Samburu famous.",
        icon: "Cat",
      },
    ],
  },
  {
    slug: "lake-nakuru",
    name: "Lake Nakuru",
    oneLineDraw: "Rhino sanctuary, alkaline shores.",
    heroImage: "/images/destinations/lake-nakuru.webp",
    shortDescription:
      "A compact, fenced national park in the Rift Valley — Kenya's most productive site for both black and white rhino, plus flamingos when lake levels suit.",
    whyGo: [
      "Lake Nakuru offers the highest rhino-sighting probability of any Kenyan park. Both black and white rhino are present in good numbers and the park's compact size means you don't need long drives to find them.",
      "Tree-climbing lions appear here occasionally — a behaviour shared with Lake Manyara across the border. The yellow-fever acacia woodlands also hold leopard, but they are harder to track than in the open Mara.",
      "Flamingos remain symbolic of Nakuru but populations have shifted significantly with changing lake chemistry. When they're here, the spectacle is real; when they aren't, the park still delivers on rhino, buffalo and rothschild's giraffe.",
    ],
    sizeKm2: 188,
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
    monthlyScore: scores([5, 4, 3, 3, 3, 5, 5, 5, 5, 4, 3, 4]),
    signatureWildlife: ["White Rhino", "Black Rhino", "Rothschild's Giraffe", "Flamingo"],
    species: [
      {
        name: "White Rhino",
        note: "Grazers — typically seen on open lake-edge grassland.",
        icon: "Shield",
      },
      {
        name: "Black Rhino",
        note: "Browsers — found in denser bush; harder to spot.",
        icon: "Shield",
      },
      {
        name: "Rothschild's Giraffe",
        note: "Distinguished by clean white legs (no spots below the knee).",
        icon: "TreePine",
      },
      {
        name: "Lesser Flamingo",
        note: "Present when alkaline lake chemistry supports cyanobacteria.",
        icon: "Bird",
      },
      {
        name: "Cape Buffalo",
        note: "Large herds along the lakeshore.",
        icon: "Shield",
      },
      {
        name: "Lion",
        note: "Occasionally tree-climbing in yellow-fever acacias.",
        icon: "Cat",
      },
    ],
  },
  {
    slug: "lake-naivasha",
    name: "Lake Naivasha",
    oneLineDraw: "Hippos, fish-eagles, boats at dawn.",
    heroImage: "/images/destinations/lake-naivasha.webp",
    shortDescription:
      "A freshwater Rift Valley lake fringed with papyrus and yellow-fever acacia, ninety minutes from Nairobi — boat safaris among hippos and fish-eagles, and free-roaming walks on Crescent Island.",
    whyGo: [
      "Naivasha is a rare freshwater lake in a Rift Valley otherwise ruled by soda lakes. Papyrus beds and yellow-fever acacia ring the shoreline, and the whole place sits about ninety minutes from Nairobi on a good road — which makes it the easiest soft landing or quick add-on in the country, with no internal flight required.",
      "The experience set is unusually varied for somewhere this compact. Morning boat safaris put you within metres of hippo pods and fishing African fish-eagles. Crescent Island is a walking safari with no big cats, so you go on foot among giraffe, zebra, eland and waterbuck. And Hell's Gate — cycling between the cliffs, hiking the gorge — is a short drive away.",
      "We like to open or close a trip here. As a warm-up it lets travellers shake off the long-haul flight at a gentle pace before the bigger parks; as a wind-down it's a calm, low-distance finish. Either way the manageable distance means you spend the day on the water and the trails, not on the road.",
    ],
    sizeKm2: 139,
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct"],
    monthlyScore: scores([4, 4, 3, 3, 3, 4, 5, 5, 5, 4, 3, 4]),
    signatureWildlife: ["Hippopotamus", "African Fish-Eagle", "Black-and-white Colobus", "Giraffe"],
    species: [
      {
        name: "Hippopotamus",
        note: "Large resident pods — best seen from a boat at first light.",
        icon: "Droplet",
      },
      {
        name: "African Fish-Eagle",
        note: "The iconic Rift call; pairs fish the lake edge at close range.",
        icon: "Bird",
      },
      {
        name: "Black-and-white Colobus",
        note: "Troops in the yellow-fever acacias along the shoreline.",
        icon: "TreePine",
      },
      {
        name: "Maasai Giraffe",
        note: "Walked among on foot on Crescent Island — no predators here.",
        icon: "TreePine",
      },
      {
        name: "Waterbuck",
        note: "Shaggy lakeside antelope, easy to approach on the island.",
        icon: "Triangle",
      },
      {
        name: "Eland",
        note: "Africa's largest antelope, grazing the open Crescent Island plain.",
        icon: "Triangle",
      },
    ],
  },
  {
    slug: "ol-pejeta",
    name: "Ol Pejeta",
    oneLineDraw: "Conservation work made visible.",
    heroImage: "/images/destinations/ol-pejeta.webp",
    shortDescription:
      "A private conservancy north of Mount Kenya — home to the last two northern white rhinos on earth and one of the best places in Kenya to see chimpanzees.",
    whyGo: [
      "Ol Pejeta is the kind of place where conservation is not abstract. The conservancy holds Najin and Fatu — the last two northern white rhinos. It also runs the Sweetwaters Chimpanzee Sanctuary, the only place in Kenya where you'll see chimps (rescued from the bushmeat trade, not native to Kenya).",
      "Off-road driving is permitted (most public parks restrict it), night drives are available, and walking safaris with armed rangers are part of the standard programme. The big-cat density is good but the experience here is more about access and proximity than sheer numbers.",
      "Black and southern white rhino are abundant — the conservancy holds the largest black rhino population in East Africa. Lion, cheetah and elephant are all reliably present.",
    ],
    sizeKm2: 360,
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
    monthlyScore: scores([5, 5, 4, 3, 3, 5, 5, 5, 5, 5, 3, 4]),
    signatureWildlife: ["Northern White Rhino", "Black Rhino", "Chimpanzee", "Lion"],
    species: [
      {
        name: "Northern White Rhino",
        note: "Last two on earth — a quiet, sobering encounter.",
        icon: "Shield",
      },
      {
        name: "Black Rhino",
        note: "Largest population in East Africa lives here.",
        icon: "Shield",
      },
      {
        name: "Chimpanzee",
        note: "Sweetwaters sanctuary — rescued, not native.",
        icon: "Heart",
      },
      {
        name: "Lion",
        note: "Resident prides, off-road tracking permitted.",
        icon: "Cat",
      },
      {
        name: "Cheetah",
        note: "Good open-country sightings; coalition of brothers tracked.",
        icon: "Wind",
      },
      {
        name: "Grevy's Zebra",
        note: "Reintroduced here as part of recovery programme.",
        icon: "Triangle",
      },
    ],
  },
  {
    slug: "aberdare",
    name: "Aberdare",
    oneLineDraw: "Mountain forest, bongo and elephant.",
    heroImage: "/images/destinations/aberdare.webp",
    shortDescription:
      "High-altitude moorland and montane forest east of the Rift — best known for the floodlit waterhole hides where elephant, buffalo and the secretive bongo come in after dark.",
    whyGo: [
      "Aberdare runs along a high ridge above the Rift Valley. Days are cool, mornings are misty, and the forest holds species you won't see in the savanna — the giant forest hog, the elusive bongo, and the elephant subspecies adapted to mountain forest.",
      "The classic Aberdare experience is built around \"tree hotels\" — lodges with floodlit waterholes that bring wildlife in close, especially at night. The Ark and Treetops are the originals; both remain operational.",
      "Bird life is exceptional in the bamboo and giant heather zones at altitude. The trout fishing in the highland streams is a less-talked-about Aberdare draw.",
    ],
    sizeKm2: 766,
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep"],
    monthlyScore: scores([5, 5, 4, 3, 2, 4, 5, 5, 5, 3, 3, 3]),
    signatureWildlife: ["Forest Elephant", "Bongo", "Black Rhino", "Giant Forest Hog"],
    species: [
      {
        name: "Forest Elephant",
        note: "Smaller, darker tusks than savanna elephant.",
        icon: "Mountain",
      },
      {
        name: "Bongo",
        note: "Critically endangered forest antelope — very rare sighting.",
        icon: "Triangle",
      },
      {
        name: "Giant Forest Hog",
        note: "Largest wild pig species; comes to floodlit waterholes.",
        icon: "Shield",
      },
      {
        name: "Black Rhino",
        note: "Forest-dwelling subpopulation, glimpsed at waterholes.",
        icon: "Shield",
      },
      {
        name: "Hartlaub's Turaco",
        note: "Spectacular crimson-winged forest bird.",
        icon: "Bird",
      },
      {
        name: "Colobus Monkey",
        note: "Black-and-white troops in the canopy.",
        icon: "TreePine",
      },
    ],
  },
  {
    slug: "diani-beach",
    name: "Diani Beach",
    oneLineDraw: "White sand. Indian Ocean. The other half of Kenya.",
    heroImage: "/images/destinations/diani-beach.webp",
    shortDescription:
      "The south coast — fine white sand, turquoise reef-protected water, and a slow rhythm that's the natural counterweight to a week in dust and game vehicles.",
    whyGo: [
      "After a serious safari, Diani is the place to stop moving for a few days. The beach itself is among the finest in East Africa — wide, white, palm-backed. The reef sits a kilometre offshore, so the shore-break is gentle and swimming is reliable.",
      "The Shimba Hills above Diani still hold elephant and the rare sable antelope. Kisite-Mpunguti marine park, a short boat south, is one of the better snorkelling and dolphin-watching spots on the East African coast.",
      "Diani is also a launchpad for kitesurfing (June to October, when the kuzi wind blows steadily) and for swimming with rehabilitated turtles released through the local conservancy.",
    ],
    sizeKm2: 0,
    bestMonths: ["Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    monthlyScore: scores([5, 5, 4, 2, 2, 3, 4, 5, 5, 5, 3, 5]),
    signatureWildlife: ["Bottlenose Dolphin", "Green Turtle", "Reef Fish", "Colobus"],
    species: [
      {
        name: "Bottlenose Dolphin",
        note: "Resident pods off Kisite-Mpunguti.",
        icon: "Waves",
      },
      {
        name: "Green Turtle",
        note: "Nesting on Diani's quieter southern beaches.",
        icon: "Shell",
      },
      {
        name: "Whale Shark",
        note: "Migratory — October to February in coastal waters.",
        icon: "Fish",
      },
      {
        name: "Colobus Monkey",
        note: "Coastal forest pockets above the beach.",
        icon: "TreePine",
      },
      {
        name: "Sable Antelope",
        note: "Shimba Hills — Kenya's only remaining population.",
        icon: "Triangle",
      },
      {
        name: "Hammerhead Shark",
        note: "Visible on deeper dives off the reef wall.",
        icon: "Fish",
      },
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
