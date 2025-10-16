// src/i18n/pages/rooms.ts

import { LangCode } from "../lang";

export type RoomsCopy = {
  title: string;
  moreFilters: string;
  noResults: string;
  loadMore: string;
};

export const ROOMS_COPY: Record<LangCode, RoomsCopy> = {
  UZ: {
    title: "Xonalar",
    moreFilters: "Ko‘proq filtrlar",
    noResults: "Hech qanday xona topilmadi.",
    loadMore: "Yana ko‘rsatish",
  },
  RU: {
    title: "Номера",
    moreFilters: "Больше фильтров",
    noResults: "Ничего не найдено.",
    loadMore: "Показать ещё",
  },
  EN: {
    title: "Rooms",
    moreFilters: "More filters",
    noResults: "No rooms found.",
    loadMore: "Load more",
  },
};

export const getRoomsCopy = (code: LangCode) => ROOMS_COPY[code];
