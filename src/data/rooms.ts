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
    breakfast: "Nonushta “bufet”",
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
    breakfast: "Breakfast (buffet)",
    wifi: "Wi-Fi",
    sauna: "Sauna",
    parking: "Parking",
  },
};

/* ===== Image helper (public/) ===== */
const P = (p: string) => `/images/${p}`;

/* ===== Base room data (prices from your table) ===== */
const ROOMS_BASE: RoomBase[] = [
  {
    id: 1,
    price: 400_000,
    priceIntl: 470_000,
    images: [
      P("rooms/single/img1.webp"),
      P("rooms/single/img2.webp"),
      P("rooms/single/img3.webp"),
      P("rooms/single/img4.webp"),
      P("rooms/single/img5.webp"),
    ],
    type: "standard_single",
    amenities: ["breakfast", "wifi"],
  },
  {
    id: 2,
    price: 480_000,
    priceIntl: 550_000,
    images: [
      P("rooms/double/img1.webp"),
      P("rooms/double/img2.webp"),
      P("rooms/double/img3.webp"),
      P("rooms/double/img4.webp"),
      P("rooms/double/img5.webp"),
    ],
    type: "suite_single",
    amenities: ["breakfast", "wifi", "parking"],
  },
  {
    id: 3,
    price: 600_000,
    priceIntl: 670_000,
    images: [
      P("rooms/double-suite/img1.webp"),
      P("rooms/double-suite/img2.webp"),
      P("rooms/double-suite/img3.webp"),
      P("rooms/double-suite/img4.webp"),
      P("rooms/double-suite/img5.webp"),
    ],
    type: "suite_single",
    amenities: ["wifi", "parking"],
  },
  {
    id: 4,
    price: 720_000,
    priceIntl: 860_000,
    images: [
      P("rooms/luxury/img1.webp"),
      P("rooms/luxury/img2.webp"),
      P("rooms/luxury/img3.webp"),
      P("rooms/luxury/img4.webp"),
      P("rooms/luxury/img5.webp"),
    ],
    type: "standard_twin",
    amenities: ["breakfast", "sauna", "wifi"],
  },
  {
    id: 5,
    price: 850_000,
    priceIntl: 990_000,
    images: [
      P("rooms/suite-single/img1.webp"),
      P("rooms/suite-single/img2.webp"),
      P("rooms/suite-single/img3.webp"),
      P("rooms/suite-single/img4.webp"),
      P("rooms/suite-single/img5.webp"),
    ],
    type: "suite_double",
    amenities: ["breakfast", "wifi", "parking"],
  },
  {
    id: 6,
    price: 940_000,
    priceIntl: 1_150_000,
    images: [
      P("rooms/triple/img1.webp"),
      P("rooms/triple/img2.webp"),
      P("rooms/triple/img3.webp"),
      P("rooms/triple/img4.webp"),
      P("rooms/triple/img5.webp"),
    ],
    type: "standard_triple",
    amenities: ["wifi", "breakfast", "parking"],
  },
];

/* ===== Price table for Russian layout (your screenshot) ===== */
/** Use this for the RU price grid: header + 2 rows (UZ / foreign). */
export const ROOM_PRICE_TABLE_RU: {
  id: number;
  title: string;
  price: number;
  priceIntl: number;
}[] = [
  {
    id: 1,
    title: "Одноместный стандарт",
    price: 400_000,
    priceIntl: 470_000,
  },
  {
    id: 2,
    title: "Одноместный Полулюкс",
    price: 480_000,
    priceIntl: 550_000,
  },
  {
    id: 3,
    title: "Одноместный Люкс",
    price: 600_000,
    priceIntl: 670_000,
  },
  {
    id: 4,
    title: "Двухместный стандарт",
    price: 720_000,
    priceIntl: 860_000,
  },
  {
    id: 5,
    title: "Двухместный люкс",
    price: 850_000,
    priceIntl: 990_000,
  },
  {
    id: 6,
    title: "Трехместный стандарт",
    price: 940_000,
    priceIntl: 1_150_000,
  },
];

/* ===== Room descriptions by language ===== */
const ROOMS_TEXT: Record<LangCode, Record<number, RoomText>> = {
  UZ: {
    1: {
      title: "Bir kishilik",
      capacity: "1 mehmon",
      size: "18 m²",
      rooms: "1 xona",
      desc:
        "18 kv.m maydonga ega, qulay va yorugʻ xona mehmonlarning qulay yashashi uchun zarur barcha narsalar bilan jihozlangan: alohida boshqariladigan konditsioner tizimi, choy va qahva tayyorlash toʻplami, xalat va tapochkalar. Xonalarda dush kabinasi yoki vanna mavjud bo‘lib, sochiqlar va bir martalik shaxsiy gigiyena vositalari bilan ta’minlangan.",
    },
    2: {
      title: "Ikki kishilik",
      capacity: "2 mehmon",
      size: "21 m²",
      rooms: "1 xona",
      desc:
        "21 kv.m maydonga ega ikki kishilik xona ikki ortopedik matrasli qulay karavotlar bilan jihozlangan. Xonada alohida boshqariladigan konditsioner tizimi, televizor, choy va qahva tayyorlash toʻplami, tapochkalar mavjud. Vannaxonada dush kabinasi yoki vanna, sochiqlar va bir martalik shaxsiy gigiyena vositalari taqdim etiladi.",
    },
    3: {
      title: "Ikki kishilik lyuks",
      capacity: "2 mehmon",
      size: "21 m²",
      rooms: "1 xona",
      desc:
        "21 kv.m maydonga ega, katta karavotli qulay xona yumshoq kreslo va jurnallik bilan jihozlangan. Keng va qulay matrasli karavot sokin va tinch uyquni ta’minlaydi. Xonada alohida boshqariladigan konditsioner tizimi, televizor, choy va qahva tayyorlash toʻplami, tapochkalar mavjud. Vannaxonada dush kabinasi yoki vanna, sochiqlar va bir martalik shaxsiy gigiyena vositalari taqdim etiladi. Xizmatga “shved stoli” nonushta va ichimlik suvi ham kiradi.",
    },
    4: {
      title: "Lyuks xona",
      capacity: "2 mehmon",
      size: "33 m²",
      rooms: "1 xona",
      desc:
        "Mehmonlarga 33 kv.m maydonga ega ikki xonali lyuks taklif etiladi: mehmonxona qismida yumshoq divanlar va kreslolar joylashgan. Yengil va nafis yotoqxona qismida keng “king-size” karavot, ortopedik matras va yorugʻlik oʻtkazmaydigan parda o‘rnatilgan. Xonada alohida boshqariladigan konditsioner tizimi, smart-TV, yuqori tezlikdagi internet, choy va qahva tayyorlash toʻplami, ichimlik suvi, xalat va tapochkalar mavjud. Keng vannaxona sochiqlar va bir martalik shaxsiy gigiyena vositalari bilan ta’minlangan. Xizmatga “shved stoli” nonushta ham kiradi.",
    },
    5: {
      title: "Yarim lyuks xona",
      capacity: "1 mehmon",
      size: "21 m²",
      rooms: "2 xona",
      desc:
        "21 kv.m maydonga ega, katta karavotli qulay xona yumshoq kreslo va jurnallik bilan jihozlangan. Keng va qulay matrasli karavot sokin va tinch uyquni ta’minlaydi. Xonada alohida boshqariladigan konditsioner tizimi, televizor, choy va qahva tayyorlash toʻplami, tapochkalar mavjud. Vannaxonada dush kabinasi yoki vanna, sochiqlar va bir martalik shaxsiy gigiyena vositalari taqdim etiladi. Xizmatga “shved stoli” nonushta va ichimlik suvi ham kiradi.",
    },
    6: {
      title: "Uch kishilik",
      capacity: "3 mehmon",
      size: "25 m²",
      rooms: "2 xona",
      desc:
        "25 kv.m maydonga ega uch kishilik xona uchta ortopedik matrasli qulay karavotlar bilan jihozlangan. Xonada alohida boshqariladigan konditsioner tizimi, televizor, choy va qahva tayyorlash toʻplami, tapochkalar mavjud. Keng vannaxona sochiqlar va bir martalik shaxsiy gigiyena vositalari bilan ta’minlangan. Xizmatga “shved stoli” nonushta va ichimlik suvi ham kiradi.",
    },
  },

  RU: {
    1: {
      title: "Одноместный стандарт",
      capacity: "1 гость",
      size: "18 м²",
      rooms: "1 комната",
      desc:
        "Уютный и светлый номер площадью 18 кв.м., оборудован всем необходимым для комфортного проживания гостей. Контролируемой системой кондиционирования, набором для заваривания чая и кофе, халатом и тапочками. В номерах имеется душевые кабины, либо ванна обеспеченные полотенцами и одноразовыми средствами личной гигиены.",
    },
    2: {
      title: "Одноместный Полулюкс",
      capacity: "2 гость",
      size: "21 м²",
      rooms: "1 комната",
      desc:
        "Двухместный номер с площадью 21 кв.м. оснащен двумя удобными кроватями с ортопедическими матрасами. Номер также оснащен контролируемой системой кондиционирования, телевизором, набором для заваривания чая и кофе, тапочками. В номерах имеется душевые кабины, либо ванна обеспеченные полотенцами и одноразовыми средствами личной гигиены.",
    },
    3: {
      title: "Одноместный Люкс",
      capacity: "2 гость",
      size: "21 м²",
      rooms: "1 комната",
      desc:
        "Удобный номер с одной большой кроватью площадью 21 кв.м. с мягким креслом и журнальным столиком, широкая кровать с удобным матрасом обеспечит спокойный и безмятежный сон. Номер также оснащен контролируемой системой кондиционирования, телевизором, набором для заваривания чая и кофе, тапочками. В номерах имеется душевые кабины, либо ванна обеспеченные полотенцами и одноразовыми средствами личной гигиены. В услугу также включен завтрак «шведский стол», питьевая вода.",
    },
    4: {
      title: "Двухместный стандарт",
      capacity: "2 гостя",
      size: "33 м²",
      rooms: "1 комната",
      desc:
        "Гостям предоставляется двухкомнатный люкс площадью 33 кв.м. с гостиной, где находятся мягкие диваны и кресла. В элегантной и светлой спальне установлена широкая кровать размера «king-size», ортопедический матрас и светонепроницаемые шторы. Номер также оснащен контролируемой системой кондиционирования, смарт-телевизором, высокоскоростным интернетом, набором для заваривания чая и кофе, питьевой водой, халатом и тапочками. В номере имеется просторная ванна, обеспеченная полотенцами и одноразовыми средствами личной гигиены. В услугу также включен завтрак «шведский стол».",
    },
    5: {
      title: "Двухместный люкс",
      capacity: "1 гостя",
      size: "21 м²",
      rooms: "2 комнаты",
      desc:
        "Удобный номер с одной большой кроватью площадью 21 кв.м. с мягким креслом и журнальным столиком, широкая кровать с удобным матрасом обеспечит спокойный и безмятежный сон. Номер также оснащен контролируемой системой кондиционирования, телевизором, набором для заваривания чая и кофе, тапочками. В номерах имеется душевые кабины, либо ванна обеспеченные полотенцами и одноразовыми средствами личной гигиены. В услугу также включен завтрак «шведский стол», питьевая вода.",
    },
    6: {
      title: "Трехместный стандарт",
      capacity: "3 гостя",
      size: "25 м²",
      rooms: "2 комнаты",
      desc:
        "Трехместный номер с площадью 25 кв.м. оснащен тремя удобными кроватями с ортопедическими матрасами. Номер также оснащен контролируемой системой кондиционирования, телевизором, набором для заваривания чая и кофе, тапочками. В номерах имеется просторная ванна, обеспеченные полотенцами и одноразовыми средствами личной гигиены. В услугу также включен завтрак «шведский стол», питьевая вода.",
    },
  },

  EN: {
    1: {
      title: "Single room",
      capacity: "1 guest",
      size: "18 m²",
      rooms: "1 room",
      desc:
        "A cozy and bright 18 m² room equipped with everything needed for a comfortable stay: individually controlled air-conditioning system, tea and coffee making set, bathrobe and slippers. The bathroom has either a shower cabin or a bathtub, complete with towels and complimentary toiletries.",
    },
    2: {
      title: "Double room",
      capacity: "2 guest",
      size: "21 m²",
      rooms: "1 room",
      desc:
        "A double room with an area of 21 m², equipped with two comfortable beds with orthopedic mattresses. The room also features an individually controlled air-conditioning system, TV, tea and coffee making set, and slippers. The bathroom has either a shower cabin or a bathtub, supplied with towels and complimentary toiletries.",
    },
    3: {
      title: "Double suite",
      capacity: "2 guest",
      size: "21 m²",
      rooms: "1 room",
      desc:
        "A comfortable 21 m² room with one large bed, a soft armchair and a coffee table. The wide bed with a quality mattress ensures a calm and restful sleep. The room is also equipped with an individually controlled air-conditioning system, TV, tea and coffee making set, and slippers. The bathroom has either a shower cabin or a bathtub, with towels and complimentary toiletries provided. The rate also includes buffet breakfast and drinking water.",
    },
    4: {
      title: "Suite room",
      capacity: "2 guests",
      size: "33 m²",
      rooms: "1 room",
      desc:
        "Guests are offered a two-room suite of 33 m² with a living area featuring soft sofas and armchairs. The elegant and bright bedroom has a wide king-size bed with an orthopedic mattress and blackout curtains. The room is also equipped with an individually controlled air-conditioning system, smart TV, high-speed internet, tea and coffee making set, drinking water, bathrobe and slippers. The spacious bathroom is supplied with towels and complimentary toiletries. Buffet breakfast is also included.",
    },
    5: {
      title: "Semi-suite room",
      capacity: "1 guest",
      size: "21 m²",
      rooms: "2 rooms",
      desc:
        "A comfortable 21 m² room with one large bed, a soft armchair and a coffee table. The wide bed with a quality mattress ensures a calm and restful sleep. The room is also equipped with an individually controlled air-conditioning system, TV, tea and coffee making set, and slippers. The bathroom has either a shower cabin or a bathtub, supplied with towels and complimentary toiletries. The rate also includes buffet breakfast and drinking water.",
    },
    6: {
      title: "Triple room",
      capacity: "3 guests",
      size: "25 m²",
      rooms: "2 rooms",
      desc:
        "A 25 m² triple room equipped with three comfortable beds with orthopedic mattresses. The room also features an individually controlled air-conditioning system, TV, tea and coffee making set, and slippers. The spacious bathroom is supplied with towels and complimentary toiletries. The rate also includes buffet breakfast and drinking water.",
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
export const getRoomPrice = (
  room: RoomBase,
  isInternational: boolean
): number => (isInternational ? room.priceIntl : room.price);

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
