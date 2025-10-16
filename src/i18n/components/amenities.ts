// src/i18n/components/amenities.ts

import { LangCode } from "../lang";

/** Keep keys stable across languages so we can map icons once in the component */
export type AmenityKey =
  | "ac"
  | "lamp"
  | "e_lock"
  | "security"
  | "toiletries"
  | "towels"
  | "bath"
  | "soap"
  | "slippers"
  | "premium_toiletries"
  | "toilet"
  | "sink"
  | "jacuzzi"
  | "king_bed"
  | "orthopedic_mattress"
  | "tv"
  | "smart_tv"
  | "flat_tv"
  | "wifi"
  | "internet"
  | "phone"
  | "view_courtyard"
  | "view_garden"
  | "view_city"
  | "no_pets";

export type AmenityCategory = {
  id: string;
  title: string;
  items: AmenityKey[];
};

export type AmenitiesCopy = {
  modalTitle: string;  // e.g., "All amenities"
  close: string;       // e.g., "Close"
  categories: AmenityCategory[];
  itemLabel: Record<AmenityKey, string>;
};

export const AMENITIES_COPY: Record<LangCode, AmenitiesCopy> = {
  UZ: {
    modalTitle: "Barcha qulayliklar",
    close: "Yopish",
    categories: [
      {
        id: "electronics",
        title: "Elektronika",
        items: ["ac", "lamp", "e_lock", "security"],
      },
      {
        id: "bathroom",
        title: "Hammom",
        items: [
          "toiletries",
          "towels",
          "bath",
          "soap",
          "slippers",
          "premium_toiletries",
          "toilet",
          "sink",
          "jacuzzi",
        ],
      },
      {
        id: "bedding",
        title: "To‘shaklar",
        items: ["king_bed", "orthopedic_mattress"],
      },
      {
        id: "video_audio",
        title: "Video/Audio",
        items: ["tv", "smart_tv", "flat_tv"],
      },
      {
        id: "internet_tel",
        title: "Internet/telefoniya",
        items: ["wifi", "internet", "phone"],
      },
      {
        id: "view",
        title: "Ko‘rinish",
        items: ["view_courtyard", "view_garden", "view_city"],
      },
      {
        id: "pets",
        title: "Hayvonlar bilan joylashish",
        items: ["no_pets"],
      },
    ],
    itemLabel: {
      ac: "Konditsioner",
      lamp: "Lampa",
      e_lock: "Elektron qulflar",
      security: "Xavfsizlik tizimi",
      toiletries: "Mehmonxona parfyumeriyasi",
      towels: "Hammom sochiqlari",
      bath: "Hammom va hojatxona (dush)",
      soap: "Sovun",
      slippers: "Shippak",
      premium_toiletries: "Premium hojatxona vositalari",
      toilet: "Hojatxona",
      sink: "Yuz-qo‘l yuvgich",
      jacuzzi: "Jakuzi",
      king_bed: "“King size” yotoq",
      orthopedic_mattress: "Ortopedik matras",
      tv: "Televizor",
      smart_tv: "Smart TV",
      flat_tv: "Tekis panelli TV",
      wifi: "Wi-Fi",
      internet: "Internet",
      phone: "Ichki telefon",
      view_courtyard: "Hovliga qaraydi",
      view_garden: "Bog‘ tomonga qaraydi",
      view_city: "Shahar manzarasi",
      no_pets: "Uy hayvonlarisiz",
    },
  },

  RU: {
    modalTitle: "Все удобства",
    close: "Закрыть",
    categories: [
      {
        id: "electronics",
        title: "Электроника",
        items: ["ac", "lamp", "e_lock", "security"],
      },
      {
        id: "bathroom",
        title: "Ванная",
        items: [
          "toiletries",
          "towels",
          "bath",
          "soap",
          "slippers",
          "premium_toiletries",
          "toilet",
          "sink",
          "jacuzzi",
        ],
      },
      {
        id: "bedding",
        title: "Спальные места",
        items: ["king_bed", "orthopedic_mattress"],
      },
      {
        id: "video_audio",
        title: "Видео/Аудио",
        items: ["tv", "smart_tv", "flat_tv"],
      },
      {
        id: "internet_tel",
        title: "Интернет/телефония",
        items: ["wifi", "internet", "phone"],
      },
      {
        id: "view",
        title: "Вид из окна",
        items: ["view_courtyard", "view_garden", "view_city"],
      },
      {
        id: "pets",
        title: "Размещение с животными",
        items: ["no_pets"],
      },
    ],
    itemLabel: {
      ac: "Кондиционер",
      lamp: "Лампа",
      e_lock: "Электронные замки",
      security: "Система безопасности",
      toiletries: "Гостиничная косметика",
      towels: "Банные полотенца",
      bath: "Ванная/душевая",
      soap: "Мыло",
      slippers: "Тапочки",
      premium_toiletries: "Премиальные туалетные принадлежности",
      toilet: "Туалет",
      sink: "Раковина",
      jacuzzi: "Джакузи",
      king_bed: "Кровать king size",
      orthopedic_mattress: "Ортопедический матрас",
      tv: "Телевизор",
      smart_tv: "Smart TV",
      flat_tv: "Плоский телевизор",
      wifi: "Wi-Fi",
      internet: "Интернет",
      phone: "Внутренняя связь",
      view_courtyard: "Вид во двор",
      view_garden: "Вид на сад",
      view_city: "Вид на город",
      no_pets: "Без животных",
    },
  },

  EN: {
    modalTitle: "All amenities",
    close: "Close",
    categories: [
      {
        id: "electronics",
        title: "Electronics",
        items: ["ac", "lamp", "e_lock", "security"],
      },
      {
        id: "bathroom",
        title: "Bathroom",
        items: [
          "toiletries",
          "towels",
          "bath",
          "soap",
          "slippers",
          "premium_toiletries",
          "toilet",
          "sink",
          "jacuzzi",
        ],
      },
      {
        id: "bedding",
        title: "Bedding",
        items: ["king_bed", "orthopedic_mattress"],
      },
      {
        id: "video_audio",
        title: "Video/Audio",
        items: ["tv", "smart_tv", "flat_tv"],
      },
      {
        id: "internet_tel",
        title: "Internet/Telephony",
        items: ["wifi", "internet", "phone"],
      },
      {
        id: "view",
        title: "View",
        items: ["view_courtyard", "view_garden", "view_city"],
      },
      {
        id: "pets",
        title: "Pets",
        items: ["no_pets"],
      },
    ],
    itemLabel: {
      ac: "Air conditioning",
      lamp: "Lamp",
      e_lock: "Electronic locks",
      security: "Security system",
      toiletries: "Hotel toiletries",
      towels: "Bath towels",
      bath: "Bathroom/Shower",
      soap: "Soap",
      slippers: "Slippers",
      premium_toiletries: "Premium toiletries",
      toilet: "Toilet",
      sink: "Wash basin",
      jacuzzi: "Jacuzzi",
      king_bed: "King-size bed",
      orthopedic_mattress: "Orthopedic mattress",
      tv: "Television",
      smart_tv: "Smart TV",
      flat_tv: "Flat-screen TV",
      wifi: "Wi-Fi",
      internet: "Internet",
      phone: "Internal phone",
      view_courtyard: "Courtyard view",
      view_garden: "Garden view",
      view_city: "City view",
      no_pets: "No pets",
    },
  },
};

export const getAmenitiesCopy = (code: LangCode) => AMENITIES_COPY[code];
