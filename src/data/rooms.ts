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
      P("rooms/suite-single/img1.webp"),
      P("rooms/suite-single/img2.webp"),
      P("rooms/suite-single/img3.webp"),
      P("rooms/suite-single/img4.webp"),
      P("rooms/suite-single/img5.webp"),
    ],
    type: "suite_single",
    amenities: ["breakfast", "wifi", "parking"],
  },
  {
    id: 3,
    price: 600_000,
    priceIntl: 670_000,
    images: [
      P("rooms/luxury/img1.webp"),
      P("rooms/luxury/img2.webp"),
      P("rooms/luxury/img3.webp"),
      P("rooms/luxury/img4.webp"),
      P("rooms/luxury/img5.webp"),
    ],
    type: "suite_single",
    amenities: ["wifi", "parking"],
  },
  {
    id: 4,
    price: 720_000,
    priceIntl: 860_000,
    images: [
      P("rooms/double/img1.webp"),
      P("rooms/double/img2.webp"),
      P("rooms/double/img3.webp"),
      P("rooms/double/img4.webp"),
      P("rooms/double/img5.webp"),
    ],
    type: "standard_twin",
    amenities: ["breakfast", "sauna", "wifi"],
  },
  {
    id: 5,
    price: 850_000,
    priceIntl: 990_000,
    images: [
      P("rooms/double-suite/img1.webp"),
      P("rooms/double-suite/img2.webp"),
      P("rooms/double-suite/img3.webp"),
      P("rooms/double-suite/img4.webp"),
      P("rooms/double-suite/img5.webp"),
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
      title: "Bir kishilik standart",
      capacity: "1 mehmon",
      size: "18 m²",
      rooms: "1 xona",
      desc:
        "18 kv.m maydonga ega qulay va yorug‘ xona mehmonlarning shinam yashashi uchun barcha zarur qulayliklar bilan jihozlangan. Xonada alohida boshqariladigan konditsioner, choy va qahva tayyorlash to‘plami, xalat va tapochkalar mavjud. Vannaxonada dush kabinasi yoki vanna, sochiqlar va bir martalik gigiyena vositalari taqdim etilgan.",
    },

    2: {
      title: "Bir kishilik yarim lyuks",
      capacity: "1 mehmon",
      size: "21 m²",
      rooms: "1 xona",
      desc:
        "21 kv.m maydonga ega qulay xona yumshoq kreslo va jurnallik bilan jihozlangan. Keng va qulay karavot sokin uyquni ta'minlaydi. Xonada alohida boshqariladigan konditsioner, televizor, choy va qahva tayyorlash to‘plami, tapochkalar mavjud. Vannaxonada dush kabinasi yoki vanna, sochiqlar va bir martalik gigiyena vositalari bor. Nonushta (“shved stoli”) va ichimlik suvi xizmatga kiradi.",
    },

    3: {
      title: "Bir kishilik lyuks",
      capacity: "1 mehmon",
      size: "33 m²",
      rooms: "2 xona",
      desc:
        "33 kv.m maydonga ega ikki xonali lyuks: mehmonxonada yumshoq divanlar va kreslolar, yotoqxonada esa keng “king-size” karavot mavjud. Xona alohida boshqariladigan konditsioner, smart-TV, yuqori tezlikdagi internet, choy va qahva tayyorlash to‘plami, ichimlik suvi, xalat va tapochkalar bilan jihozlangan. Katta vannaxona sochiqlar va gigiyena vositalari bilan ta’minlangan. “Shved stoli” nonushta ham kiritilgan.",
    },

    4: {
      title: "Ikki kishilik standart",
      capacity: "2 mehmon",
      size: "21 m²",
      rooms: "1 xona",
      desc:
        "21 kv.m maydonga ega ikki kishilik xona ortopedik matrasli ikki karavot bilan jihozlangan. Xonada alohida boshqariladigan konditsioner, televizor, choy va qahva tayyorlash to‘plami va tapochkalar mavjud. Vannaxonada dush kabinasi yoki vanna, sochiqlar va bir martalik gigiyena vositalari taqdim etiladi.",
    },

    5: {
      title: "Ikki kishilik lyuks",
      capacity: "2 mehmon",
      size: "33 m²",
      rooms: "2 xona",
      desc:
        "33 kv.m maydonga ega ikki xonali lyuks mehmonlarga qo‘shimcha qulaylik yaratadi: mehmonxonada yumshoq divanlar, yotoqxonada esa keng “king-size” karavot mavjud. Xona konditsioner, smart-TV, yuqori tezlikdagi internet, choy va qahva tayyorlash to‘plami, ichimlik suvi, xalat va tapochkalar bilan jihozlangan. Vannaxona keng va qulay. Xizmatga “shved stoli” nonushta kiritilgan.",
    },

    6: {
      title: "Uch kishilik standart",
      capacity: "3 mehmon",
      size: "25 m²",
      rooms: "2 xona",
      desc:
        "25 kv.m maydonga ega uch kishilik xona uchta qulay ortopedik karavot bilan jihozlangan. Xonada konditsioner, televizor, choy va qahva tayyorlash to‘plami, tapochkalar mavjud. Vannaxona keng bo‘lib, sochiqlar va bir martalik gigiyena vositalari beriladi. Xizmatga “shved stoli” nonushta va ichimlik suvi kiradi.",
    },
  },

  RU: {
    1: {
      title: "Одноместный стандарт",
      capacity: "1 гость",
      size: "18 м²",
      rooms: "1 комната",
      desc:
        "Уютный и светлый номер площадью 18 кв.м., оборудован всем необходимым для комфортного проживания. В номере имеется система кондиционирования, набор для чая и кофе, халат и тапочки. В ванной комнате — душевая кабина или ванна, полотенца и одноразовые средства личной гигиены.",
    },

    2: {
      title: "Одноместный Полулюкс",
      capacity: "1 гость",
      size: "21 м²",
      rooms: "1 комната",
      desc:
        "Удобный номер площадью 21 кв.м. с мягким креслом и журнальным столиком. Широкая кровать с качественным матрасом обеспечит спокойный сон. Номер оснащён системой кондиционирования, телевизором, набором для чая и кофе, тапочками. В ванной комнате — душевая кабина или ванна, полотенца и средства гигиены. В стоимость включён завтрак «шведский стол» и питьевая вода.",
    },

    3: {
      title: "Одноместный Люкс",
      capacity: "1 гость",
      size: "33 м²",
      rooms: "2 комнаты",
      desc:
        "Гостям предлагается двухкомнатный люкс площадью 33 кв.м. c гостиной зоной с мягкими диванами и креслами. В светлой спальне установлена широкая кровать «king-size» с ортопедическим матрасом. Номер оснащён кондиционером, смарт-ТВ, высокоскоростным интернетом, набором для чая и кофе, питьевой водой, халатом и тапочками. Просторная ванная комната укомплектована полотенцами и одноразовыми средствами гигиены. Завтрак «шведский стол» входит в стоимость.",
    },

    4: {
      title: "Двухместный стандарт",
      capacity: "2 гостя",
      size: "21 м²",
      rooms: "1 комната",
      desc:
        "Двухместный номер площадью 21 кв.м., оснащён двумя удобными кроватями с ортопедическими матрасами. В номере есть система кондиционирования, телевизор, набор для чая и кофе и тапочки. В ванной комнате — душ или ванна, полотенца и средства гигиены.",
    },

    5: {
      title: "Двухместный люкс",
      capacity: "2 гостя",
      size: "33 m²",
      rooms: "2 комнаты",
      desc:
        "Двухкомнатный люкс площадью 33 кв.м. с гостиной зоной и уютной спальней, где установлена кровать «king-size». Номер оснащён системой кондиционирования, смарт-ТВ, высокоскоростным интернетом, чаем и кофе, питьевой водой, халатом и тапочками. Ванная просторная, с полотенцами и средствами гигиены. Завтрак «шведский стол» включён.",
    },

    6: {
      title: "Трехместный стандарт",
      capacity: "3 гостя",
      size: "25 м²",
      rooms: "2 комнаты",
      desc:
        "Трехместный номер площадью 25 кв.м. оснащён тремя удобными кроватями с ортопедическими матрасами. В номере есть кондиционер, телевизор, чай и кофе, тапочки. Ванная комната просторная, с полотенцами и средствами личной гигиены. В стоимость входит завтрак «шведский стол» и питьевая вода.",
    },
  },

  EN: {
    1: {
      title: "Single standard",
      capacity: "1 guest",
      size: "18 m²",
      rooms: "1 room",
      desc:
        "A cozy and bright 18 m² room equipped with everything necessary for a comfortable stay. The room includes an individually controlled air-conditioning system, a tea and coffee set, bathrobe and slippers. The bathroom offers either a shower cabin or a bathtub, along with towels and complimentary toiletries.",
    },

    2: {
      title: "Single semi-luxury",
      capacity: "1 guest",
      size: "21 m²",
      rooms: "1 room",
      desc:
        "A comfortable 21 m² room with a soft armchair and a coffee table. The large bed with a quality mattress ensures a restful sleep. The room includes an individually controlled air-conditioning system, TV, tea and coffee set, and slippers. The bathroom has a shower cabin or bathtub with towels and toiletries. Buffet breakfast and drinking water are included.",
    },

    3: {
      title: "Single suite",
      capacity: "1 guest",
      size: "33 m²",
      rooms: "2 rooms",
      desc:
        "A spacious two-room 33 m² suite with a living area furnished with soft sofas and armchairs. The bright bedroom features a king-size bed with an orthopedic mattress. The room includes air-conditioning, smart TV, high-speed internet, tea and coffee set, drinking water, bathrobe and slippers. The large bathroom is equipped with towels and complimentary toiletries. Buffet breakfast is included.",
    },

    4: {
      title: "Double standard",
      capacity: "2 guests",
      size: "21 m²",
      rooms: "1 room",
      desc:
        "A 21 m² double room equipped with two comfortable beds with orthopedic mattresses. The room includes air-conditioning, TV, tea and coffee set, and slippers. The bathroom offers a shower or bathtub with towels and toiletries.",
    },

    5: {
      title: "Double suite",
      capacity: "2 guests",
      size: "33 m²",
      rooms: "2 rooms",
      desc:
        "A 33 m² two-room suite featuring a living area and a cozy bedroom with a king-size bed. The room includes air-conditioning, smart TV, high-speed internet, tea and coffee set, drinking water, bathrobe and slippers. The bathroom is spacious and equipped with towels and toiletries. Buffet breakfast is included.",
    },

    6: {
      title: "Triple standard",
      capacity: "3 guests",
      size: "25 m²",
      rooms: "2 rooms",
      desc:
        "A 25 m² triple room equipped with three comfortable beds with orthopedic mattresses. The room includes air-conditioning, TV, tea and coffee set, and slippers. The spacious bathroom provides towels and complimentary toiletries. Buffet breakfast and drinking water are included.",
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
