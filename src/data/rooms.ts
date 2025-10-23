// src/data/rooms.ts
import { LangCode } from "../i18n/lang";

/* ===== Types ===== */
export type AmenityKey = "breakfast" | "wifi" | "sauna" | "parking";
export type RoomTypeKey =
  | "standard_single"
  | "standard_twin"
  | "standard_triple"
  | "suite_single"
  | "suite_double";

export type RoomText = {
  title: string;
  desc?: string;
  capacity: string;
  size: string;
  rooms: string;
};

export type RoomBase = {
  id: number;
  images: string[];
  /** Base price for citizens of Uzbekistan (UZ). */
  price: number;
  /** Price for foreign guests (INTL: foreigners/CIS/LBG). */
  priceIntl: number;
  type: RoomTypeKey;
  amenities: AmenityKey[];
};

export type Room = RoomBase & RoomText;

/* ===== Amenity labels (i18n) ===== */
export const AMENITY_LABEL: Record<LangCode, Record<AmenityKey, string>> = {
  UZ: { breakfast: "Nonushta “Bufet”", wifi: "Wi-Fi", sauna: "Sauna", parking: "Avtoturargoh" },
  RU: { breakfast: "Завтрак «Шведский стол»", wifi: "Wi-Fi", sauna: "Сауна", parking: "Парковка" },
  EN: { breakfast: "Breakfast (Buffet)", wifi: "Wi-Fi", sauna: "Sauna", parking: "Parking" },
};

/* ===== Image helper (public/) ===== */
const P = (p: string) => `/assets/${p}`;

/* ===== Language-agnostic base =====
   Prices (so'm) from your table, left→right per room id (1..6):

   Citizens of Uzbekistan: 400000, 480000, 600000, 720000, 850000, 940000
   Foreign/CIS/LBG:       470000, 550000, 670000, 860000, 990000, 1150000
*/
const ROOMS_BASE: RoomBase[] = [
  {
    id: 1,
    price: 400_000,
    priceIntl: 470_000,
    images: [
      P("room/single/single5.webp"),
      P("room/single/single3.webp"),
      P("room/single/single4.webp"),
      P("room/single/single2.webp"),
      P("room/single/single1.webp"),
    ],
    type: "standard_single",
    amenities: ["breakfast", "wifi"],
  },
  {
    id: 2,
    price: 480_000,
    priceIntl: 550_000,
    images: [
      P("room/two/tworoom1.webp"),
      P("room/two/tworoom2.webp"),
      P("room/two/tworoom4.webp"),
      P("room/two/tworoom5.webp"),
      P("room/two/tworoom6.webp"),
    ],
    type: "standard_twin",
    amenities: ["breakfast", "wifi", "parking"],
  },
  {
    id: 3,
    price: 600_000,
    priceIntl: 670_000,
    images: [
      P("room/triple/triple1.webp"),
      P("room/triple/triple2.webp"),
      P("room/triple/triple3.webp"),
      P("room/triple/triple4.webp"),
      P("room/triple/triple5.webp"),
    ],
    type: "standard_triple",
    amenities: ["wifi", "parking"],
  },
  {
    id: 4,
    price: 720_000,
    priceIntl: 860_000,
    images: [
      P("room/family/family1.webp"),
      P("room/family/family4.webp"),
      P("room/family/family1.webp"),
      P("room/family/family4.webp"),
      P("room/family/family5.webp"),
    ],
    type: "suite_single",
    amenities: ["breakfast", "sauna", "wifi"],
  },
  {
    id: 5,
    price: 850_000,
    priceIntl: 990_000,
    images: [
      P("room/luxurysingle/room1.webp"),
      P("room/luxurysingle/room2.webp"),
      P("room/luxurysingle/room3.webp"),
      P("room/luxurysingle/room4.webp"),
      P("room/luxurysingle/room5.webp"),
    ],
    type: "suite_single",
    amenities: ["breakfast", "wifi", "parking"],
  },
  {
    id: 6,
    price: 940_000,
    priceIntl: 1_150_000,
    images: [
      P("room/luxurytwo/room1.webp"),
      P("room/luxurytwo/room2.webp"),
      P("room/luxurytwo/room3.webp"),
      P("room/luxurytwo/room4.webp"),
      P("room/luxurytwo/room5.webp"),
    ],
    type: "suite_double",
    amenities: ["wifi", "breakfast", "parking"],
  },
];

/* ===== Per-language text ===== */
const ROOMS_TEXT: Record<LangCode, Record<number, RoomText>> = {
  UZ: {
    1: {
      title: "Standard bir kishilik",
      capacity: "1 mehmon",
      size: "18 m²",
      rooms: "1 xona",
      desc:
        "Yakka sayohatchilar uchun qulay va shinam xonamiz. Ish safarlari yoki qisqa dam olish uchun barcha zarur sharoitlar yaratildi.",
    },
    2: {
      title: "Standard ikki kishilik",
      capacity: "2 mehmon",
      size: "21 m²",
      rooms: "1 xona",
      desc:
        "Do‘stlar yoki hamkasblar bilan sayohat uchun qulay xona. Ikki yotoq, yorug‘ va zamonaviy interyer.",
    },
    3: {
      title: "Standard uch kishilik",
      capacity: "3 mehmon",
      size: "30 m²",
      rooms: "1 xona",
      desc:
        "Oila yoki uch kishilik guruh uchun keng va yorug‘ xona. Zamonaviy qulayliklar bilan jihozlangan.",
    },
    4: {
      title: "Oilaviy xona",
      capacity: "2–3 mehmon",
      size: "40 m²",
      rooms: "1 xona",
      desc:
        "Keng va nafis xona — qulaylik, uslub va qo‘shimcha xizmatlarni qadrlaydigan mehmonlar uchun.",
    },
    5: {
      title: "Lyuks — bir kishilik",
      capacity: "1 mehmon",
      size: "33 m²",
      rooms: "2 xona",
      desc:
        "King-size karavot, alohida mehmonxona zonasi, vanna xonasi, iqlim nazorati va mini-bar.",
    },
    6: {
      title: "Deluxe ikki kishilik",
      capacity: "2 mehmon",
      size: "33 m²",
      rooms: "2 xona",
      desc:
        "Juftliklar va ish safaridagi mehmonlar uchun mos: yaxshilangan ovoz izolatsiyasi, shinam yotoq.",
    },
  },
  RU: {
    1: {
      title: "Стандарт одноместный",
      capacity: "1 гость",
      size: "18 м²",
      rooms: "1 комната",
      desc:
        "Уютный номер для индивидуального размещения: чисто, тихо и всё необходимое для отдыха.",
    },
    2: {
      title: "Стандарт двухместный",
      capacity: "2 гостя",
      size: "21 м²",
      rooms: "1 комната",
      desc:
        "Светлый и удобный номер для поездок с друзьями или коллегами. Две кровати, современный интерьер.",
    },
    3: {
      title: "Стандарт трехместный",
      capacity: "3 гостя",
      size: "30 м²",
      rooms: "1 комната",
      desc:
        "Просторный номер, подходящий для семьи или компании из трёх человек.",
    },
    4: {
      title: "Семейный номер",
      capacity: "2–3 гостя",
      size: "40 м²",
      rooms: "1 комната",
      desc:
        "Элегантный и просторный номер с гостиной зоной и быстрым Wi-Fi.",
    },
    5: {
      title: "Люкс одноместный",
      capacity: "1 гостя",
      size: "30 м²",
      rooms: "2 комнаты",
      desc:
        "Изысканный люкс: king-size кровать, отдельная гостиная, ванная, климат-контроль.",
    },
    6: {
      title: "Делюкс двухместный",
      capacity: "2 гостя",
      size: "30 м²",
      rooms: "2 комната",
      desc:
        "Современный и уютный номер для пар и деловых гостей.",
    },
  },
  EN: {
    1: {
      title: "Standard Single Room",
      capacity: "1 guest",
      size: "18 m²",
      rooms: "1 room",
      desc:
        "Cozy standard room ideal for solo travelers—clean, quiet, and well equipped.",
    },
    2: {
      title: "Standard Double Room",
      capacity: "2 guests",
      size: "21 m²",
      rooms: "1 room",
      desc:
        "Bright, comfortable room with two single beds and a modern interior.",
    },
    3: {
      title: "Standard Triple Room",
      capacity: "3 guests",
      size: "30 m²",
      rooms: "1 room",
      desc:
        "Spacious and light—great for a family or a group of three.",
    },
    4: {
      title: "Family Room",
      capacity: "2–3 guests",
      size: "40 m²",
      rooms: "1 room",
      desc:
        "Elegant and spacious; lounge area, climate control, and fast Wi-Fi.",
    },
    5: {
      title: "Luxury Single Room",
      capacity: "1 guests",
      size: "30 m²",
      rooms: "2 rooms",
      desc:
        "Refined suite with a king-size bed, separate living area, and bathtub.",
    },
    6: {
      title: "Deluxe Double Room",
      capacity: "1 guests",
      size: "30 m²",
      rooms: "1 room",
      desc:
        "Modern and cozy—enhanced soundproofing and stylish interior.",
    },
  },
};

/* ===== Helpers ===== */
export const getRooms = (lang: LangCode): Room[] =>
  ROOMS_BASE.map((b) => {
    const text = ROOMS_TEXT[lang][b.id] ?? ROOMS_TEXT.EN[b.id] ?? {
      title: "Room",
      capacity: "",
      size: "",
      rooms: "",
      desc: "",
    };
    return { ...b, ...text };
  });

export const getRoomById = (lang: LangCode, id: number): Room | undefined => {
  const base = ROOMS_BASE.find((r) => r.id === id);
  if (!base) return;
  const text = ROOMS_TEXT[lang][id] ?? ROOMS_TEXT.EN[id] ?? {
    title: "Room",
    capacity: "",
    size: "",
    rooms: "",
    desc: "",
  };
  return { ...base, ...text };
};

/** Choose correct price based on nationality flag. */
export const getRoomPrice = (room: RoomBase, isInternational: boolean): number =>
  isInternational ? room.priceIntl : room.price;

// Price format (UZS)
export const formatPriceUZS = (price: number, lang: LangCode): string => {
  const nf =
    lang === "RU" ? new Intl.NumberFormat("ru-RU")
    : lang === "EN" ? new Intl.NumberFormat("en-US")
    : new Intl.NumberFormat("uz-UZ");
  return `${nf.format(price)} so’m`;
};
