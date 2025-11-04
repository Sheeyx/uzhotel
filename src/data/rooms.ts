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
  UZ: {
    breakfast: "Nonushta “Bufet”",
    wifi: "Wi-Fi",
    sauna: "Sauna",
    parking: "Avtoturargoh",
  },
  RU: {
    breakfast: "Завтрак «Шведский стол»",
    wifi: "Wi-Fi",
    sauna: "Сауна",
    parking: "Парковка",
  },
  EN: {
    breakfast: "Breakfast (Buffet)",
    wifi: "Wi-Fi",
    sauna: "Sauna",
    parking: "Parking",
  },
};

/* ===== Image helper (public/) ===== */
const P = (p: string) => `/assets/${p}`;

/* ===== Base room data ===== */
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
    type: "suite_single",
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
    type: "suite_single",
    amenities: ["wifi", "parking"],
  },
  {
    id: 4,
    price: 720_000,
    priceIntl: 860_000,
    images: [
      P("room/family/family1.webp"),
      P("room/family/family4.webp"),
      P("room/family/family2.webp"),
      P("room/family/family3.webp"),
      P("room/family/family5.webp"),
    ],
    type: "standard_twin",
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
    type: "suite_double",
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
    type: "standard_triple",
    amenities: ["wifi", "breakfast", "parking"],
  },
];

/* ===== Room descriptions by language =====
   UZ va EN bo‘limlari RU ma’lumotlariga moslashtirildi.
*/
const ROOMS_TEXT: Record<LangCode, Record<number, RoomText>> = {
  UZ: {
    1: {
      title: "Standart — bir kishilik",
      capacity: "1 mehmon",
      size: "18 m²",
      rooms: "1 xona",
      desc:
        "18 m² maydonga ega qulay va yorug‘ xona. Qulay yashash uchun zarur jihozlar: konditsioner, choy-kofe to‘plami, xalat va tapochkalar. Xonada dush yoki vanna, sochiqlar va shaxsiy gigiyena vositalari mavjud.",
    },
    2: {
      title: "Standart — ikki karavotli",
      capacity: "1 mehmon",
      size: "21 m²",
      rooms: "1 xona",
      desc:
        "21 m² maydondagi standart ikki karavotli xona. Ortopedik matraslar, konditsioner, televizor, choy-kofe to‘plami, tapochkalar. Dush yoki vanna, sochiqlar va gigiyena vositalari bilan ta’minlangan.",
    },
    3: {
      title: "Oilaviy — katta karavotli",
      capacity: "1 mehmon",
      size: "21 m²",
      rooms: "1 xona",
      desc:
        "21 m² maydondagi katta karavotli oilaviy xona. Yumshoq kreslo va jurnallik mavjud. Konditsioner, televizor, choy-kofe to‘plami, tapochkalar. Dush yoki vanna, sochiqlar va gigiyena vositalari. Xizmatga «shved stoli» nonushta va ichimlik suvi kiradi.",
    },
    4: {
      title: "Lyuks xonasi",
      capacity: "2 mehmon",
      size: "33 m²",
      rooms: "1 xona",
      desc:
        "33 m² maydondagi lyuks: mehmonxona zonasi va yotoqxona (king-size karavot), smart-TV, yuqori tezlikdagi internet, choy-kofe, ichimlik suvi, xalat va tapochkalar. Keng vanna xonasi. «Shved stoli» nonushta kiritilgan.",
    },
    5: {
      title: "Yarim lyuks — katta karavotli",
      capacity: "2 mehmon",
      size: "21 m²",
      rooms: "2 xona",
      desc:
        "21 m² qulay xona katta karavot bilan: konditsioner, televizor, choy-kofe to‘plami, tapochkalar. Dush yoki vanna, sochiqlar va bir martalik gigiyena vositalari. «Shved stoli» nonushta va ichimlik suvi kiritilgan.",
    },
    6: {
      title: "Uch kishilik xona",
      capacity: "3 mehmon",
      size: "25 m²",
      rooms: "2 xona",
      desc:
        "25 m² uch kishilik xona: ortopedik karavotlar, konditsioner, televizor, choy-kofe to‘plami, tapochkalar. Keng vanna xonasi, sochiqlar va gigiyena vositalari. «Shved stoli» nonushta va ichimlik suvi kiritilgan.",
    },
  },

  RU: {
    1: {
      title: "Стандартный номер – одноместный",
      capacity: "1 гость",
      size: "18 м²",
      rooms: "1 комната",
      desc:
        "Уютный и светлый номер площадью 18 кв.м., оборудован всем необходимым для комфортного проживания гостей. Контролируемой системой кондиционирования, набором для заваривания чая и кофе, халатом и тапочками. В номерах имеется душевые кабины, либо ванна обеспеченные полотенцами и одноразовыми средствами личной гигиены.",
    },
    2: {
      title: "Стандартный номер с двумя кроватями",
      capacity: "1 гость",
      size: "21 м²",
      rooms: "1 комната",
      desc:
        "Двухместный номер с площадью 21 кв.м. оснащен двумя удобными кроватями с ортопедическими матрасами, Номер также оснащен контролируемой системой кондиционирования, телевизором, набором для заваривания чая и кофе, тапочками. В номерах имеется душевые кабины, либо ванна обеспеченные полотенцами и одноразовыми средствами личной гигиены.",
    },
    3: {
      title: "Семейный номер с большой кроватью",
      capacity: "1 гость",
      size: "21 м²",
      rooms: "1 комната",
      desc:
        "Удобный номер с одной большой кроватью площадью 21 кв.м. с мягким креслом и журнальным столиком, широкая кровать с удобным матрасом обеспечит спокойный и безмятежный сон. Номер также оснащен Контролируемой системой кондиционирования, телевизором, набором для заваривания чая и кофе, тапочками. В номерах имеется душевые кабины, либо ванна обеспеченные полотенцами и одноразовыми средствами личной гигиены. В услугу так же включен завтрак «шведский стол», питьевая вода.",
    },
    4: {
      title: "Номер люкс",
      capacity: "2 гостя",
      size: "33 м²",
      rooms: "1 комната",
      desc:
        "Гостям предоставляется двухкомнатный люкс площадью 33 кв.м. с гостиной, где находится мягкие диваны и кресла. В элегантной и светлой спальне установлена широкая кровать размера «king-size», ортопедический матрас и светонепроницаемые шторы. Номер также оснащен контролируемой системой кондиционирования, смарт-телевизором, высокоскоростным интернетом, набором для заваривания чая и кофе, питьевой водой, халатом и тапочками. В номере имеется просторная ванна, обеспеченная полотенцами и одноразовыми средствами личной гигиены. В услугу так же включен завтрак «шведский стол».",
    },
    5: {
      title: "Номер полулюкс с большой кроватью",
      capacity: "2 гостя",
      size: "21 м²",
      rooms: "2 комнаты",
      desc:
        "Удобный номер с одной большой кроватью площадью 21 кв.м. с мягким креслом и журнальным столиком, широкая кровать с удобным матрасом обеспечит спокойный и безмятежный сон. Номер также оснащен Контролируемой системой кондиционирования, телевизором, набором для заваривания чая и кофе, тапочками. В номерах имеется душевые кабины, либо ванна обеспеченные полотенцами и одноразовыми средствами личной гигиены. В услугу так же включен завтрак «шведский стол», питьевая вода.",
    },
    6: {
      title: "Трехместный номер",
      capacity: "3 гостя",
      size: "25 м²",
      rooms: "2 комнаты",
      desc:
        "Трехместный номер с площадью 25 кв.м. оснащен тремя удобными кроватями с ортопедическими матрасами, Номер также оснащен контролируемой системой кондиционирования, телевизором, набором для заваривания чая и кофе, тапочками. В номерах имеется просторная ванна, обеспеченные полотенцами и одноразовыми средствами личной гигиены. В услугу так же включен завтрак «шведский стол», питьевая вода.",
    },
  },

  EN: {
    1: {
      title: "Standard Single Room",
      capacity: "1 guest",
      size: "18 m²",
      rooms: "1 room",
      desc:
        "A cozy and bright 18 m² room equipped with essentials for a comfortable stay: air-conditioning, tea/coffee set, bathrobe and slippers. Bathroom with shower or bathtub, towels and complimentary toiletries.",
    },
    2: {
      title: "Standard Room with Two Beds",
      capacity: "1 guest",
      size: "21 m²",
      rooms: "1 room",
      desc:
        "21 m² standard twin room with two orthopedic-mattress beds. Includes A/C, TV, tea/coffee set, slippers. Bathroom with shower or bathtub, towels and toiletries.",
    },
    3: {
      title: "Family Room with Large Bed",
      capacity: "1 guest",
      size: "21 m²",
      rooms: "1 room",
      desc:
        "Comfortable 21 m² room with a large bed, soft armchair and coffee table. Wide bed with quality mattress ensures restful sleep. A/C, TV, tea/coffee set, slippers. Shower or bathtub with towels and toiletries. Breakfast (buffet) and drinking water included.",
    },
    4: {
      title: "Luxury Room",
      capacity: "2 guests",
      size: "33 m²",
      rooms: "1 room",
      desc:
        "A 33 m² luxury accommodation: living area with soft sofas and an elegant bedroom with a king-size bed, orthopedic mattress and blackout curtains. Features A/C, smart TV, high-speed internet, tea/coffee set, drinking water, bathrobe and slippers. Spacious bathroom. Breakfast (buffet) included.",
    },
    5: {
      title: "Semi-Luxury Room with Large Bed",
      capacity: "2 guests",
      size: "21 m²",
      rooms: "2 rooms",
      desc:
        "Comfortable room with a large bed (21 m²): A/C, TV, tea/coffee set, slippers. Bathroom with shower or bathtub, towels and toiletries. Breakfast (buffet) and drinking water included.",
    },
    6: {
      title: "Triple Room",
      capacity: "3 guests",
      size: "25 m²",
      rooms: "2 rooms",
      desc:
        "25 m² triple room with orthopedic beds, equipped with A/C, TV, tea/coffee set and slippers. Spacious bathroom with towels and toiletries. Breakfast (buffet) and drinking water included.",
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
    lang === "RU"
      ? new Intl.NumberFormat("ru-RU")
      : lang === "EN"
      ? new Intl.NumberFormat("en-US")
      : new Intl.NumberFormat("uz-UZ");
  return `${nf.format(price)} so’m`;
};
