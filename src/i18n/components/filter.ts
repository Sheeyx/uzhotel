// src/i18n/components/filters.ts

import { LangCode } from "../lang";

/** Keep this union in sync with your RoomTypeKey */
export type RoomTypeKey =
  | "standard_single"
  | "standard_twin"
  | "standard_triple"
  | "suite_single"
  | "suite_double";

export type FiltersUICopy = {
  title: string;            // "Filter"
  roomsSection: string;     // "Rooms"
  amenitiesSection: string; // "Amenities"
  clear: string;            // "Clear"
  apply: string;            // "Apply"
};

export const FILTERS_COPY: Record<LangCode, FiltersUICopy> = {
  UZ: {
    title: "Filtr",
    roomsSection: "Xonalar",
    amenitiesSection: "Qulayliklar",
    clear: "Tozalash",
    apply: "Qo‘llash",
  },
  RU: {
    title: "Фильтр",
    roomsSection: "Номера",
    amenitiesSection: "Удобства",
    clear: "Сбросить",
    apply: "Применить",
  },
  EN: {
    title: "Filter",
    roomsSection: "Rooms",
    amenitiesSection: "Amenities",
    clear: "Clear",
    apply: "Apply",
  },
};

export const getFiltersCopy = (code: LangCode) => FILTERS_COPY[code];

export const ROOM_TYPE_LABELS: Record<
  LangCode,
  Record<RoomTypeKey, string>
> = {
  UZ: {
    standard_single: "Standart bir kishilik xona",
    standard_twin: "2 ta alohida karovatli standart xona",
    standard_triple: "Standart uch kishilik xona",
    suite_single: "Suite bir kishilik xona",
    suite_double: "Suite ikki kishilik xona",
  },
  RU: {
    standard_single: "Стандарт одноместный",
    standard_twin: "Стандарт с 2 односпальными кроватями",
    standard_triple: "Стандарт трехместный",
    suite_single: "Сьют одноместный",
    suite_double: "Сьют двухместный",
  },
  EN: {
    standard_single: "Standard Single",
    standard_twin: "Standard Twin",
    standard_triple: "Standard Triple",
    suite_single: "Suite Single",
    suite_double: "Suite Double",
  },
};
