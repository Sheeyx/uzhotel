// src/i18n/components/amenitySection.ts

import { LangCode } from "../lang";

export type AmenityItemKey =
  | "big_bed"
  | "ac"
  | "tv"
  | "wifi"
  | "bath_shower"
  | "mini_bar"
  | "breakfast"
  | "spa_sauna"
  | "parking"
  | "security"
  | "lounge_corner"
  | "up_to_3"
  | "private_entrance";

export type AmenitySectionCopy = {
  title: string;     // "Qulayliklar" / "Удобства" / "Amenities"
  seeAll: string;    // CTA button
  groups: Array<{
    id: "inroom" | "services" | "extra";
    title: string;
    items: AmenityItemKey[];
  }>;
  itemLabel: Record<AmenityItemKey, string>;
};

const COPY: Record<LangCode, AmenitySectionCopy> = {
  UZ: {
    title: "Qulayliklar",
    seeAll: "Batafsil",
    groups: [
      { id: "inroom", title: "Xona qulayliklari", items: ["big_bed", "ac", "tv", "wifi", "bath_shower", "mini_bar"] },
      { id: "services", title: "Xizmatlar", items: ["breakfast", "spa_sauna", "parking", "security", "lounge_corner"] },
      { id: "extra", title: "Qo‘shimcha", items: ["up_to_3", "private_entrance"] },
    ],
    itemLabel: {
      big_bed: "Katta yotoq",
      ac: "Konditsioner",
      tv: "Televizor",
      wifi: "Wi-Fi",
      bath_shower: "Hammom va dush",
      mini_bar: "Mini-bar",
      breakfast: "Nonushta “bufet”",
      spa_sauna: "Spa va sauna",
      parking: "Bepul avtoturargoh",
      security: "Xavfsizlik tizimi",
      lounge_corner: "Dam olish burchagi",
      up_to_3: "3 tagacha mehmon uchun",
      private_entrance: "Shaxsiy kirish",
    },
  },

  RU: {
    title: "Удобства",
    seeAll: "Подробнее",
    groups: [
      { id: "inroom", title: "Удобства в номере", items: ["big_bed", "ac", "tv", "wifi", "bath_shower", "mini_bar"] },
      { id: "services", title: "Сервисы", items: ["breakfast", "spa_sauna", "parking", "security", "lounge_corner"] },
      { id: "extra", title: "Дополнительно", items: ["up_to_3", "private_entrance"] },
    ],
    itemLabel: {
      big_bed: "Большая кровать",
      ac: "Кондиционер",
      tv: "Телевизор",
      wifi: "Wi-Fi",
      bath_shower: "Ванная и душ",
      mini_bar: "Мини-бар",
      breakfast: "Завтрак «шведский стол»",
      spa_sauna: "Спа и сауна",
      parking: "Бесплатная парковка",
      security: "Система безопасности",
      lounge_corner: "Зона отдыха",
      up_to_3: "До 3 гостей",
      private_entrance: "Отдельный вход",
    },
  },

  EN: {
    title: "Amenities",
    seeAll: "See all",
    groups: [
      { id: "inroom", title: "In-room amenities", items: ["big_bed", "ac", "tv", "wifi", "bath_shower", "mini_bar"] },
      { id: "services", title: "Services", items: ["breakfast", "spa_sauna", "parking", "security", "lounge_corner"] },
      { id: "extra", title: "Additional", items: ["up_to_3", "private_entrance"] },
    ],
    itemLabel: {
      big_bed: "Large bed",
      ac: "Air conditioning",
      tv: "Television",
      wifi: "Wi-Fi",
      bath_shower: "Bathroom & shower",
      mini_bar: "Mini-bar",
      breakfast: "Buffet breakfast",
      spa_sauna: "Spa & sauna",
      parking: "Free parking",
      security: "Security system",
      lounge_corner: "Lounge area",
      up_to_3: "Up to 3 guests",
      private_entrance: "Private entrance",
    },
  },
};

export const getAmenitySectionCopy = (code: LangCode) => COPY[code];
