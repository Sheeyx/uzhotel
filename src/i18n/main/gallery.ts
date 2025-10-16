// src/i18n/sections/gallery.ts

import { LangCode } from "../lang";

export type GalleryCopy = {
  title: string;
  lead: string;
  cta: string;
  alts: {
    lobby: string;
    room: string;
    pool: string;
    restaurant: string;
    deluxe: string;
  };
};

export const GALLERY_COPY: Record<LangCode, GalleryCopy> = {
  UZ: {
    title: "Foto galereya",
    lead:
      "Mehmonxonamizning interyeri, xonalari va qulayliklari bilan tanishing. Real suratlar orqali sizni kutayotgan shinam muhit va zamonaviy sharoitlarni ko‘ring.",
    cta: "Batafsil ko‘rish",
    alts: {
      lobby: "Lobbi",
      room: "Xona",
      pool: "Basseyn",
      restaurant: "Restoran",
      deluxe: "Deluxe xona",
    },
  },
  RU: {
    title: "Фотогалерея",
    lead:
      "Познакомьтесь с интерьером, номерами и удобствами нашей гостиницы. Реальные фотографии покажут уютную атмосферу и современные условия.",
    cta: "Смотреть все",
    alts: {
      lobby: "Лобби",
      room: "Номер",
      pool: "Бассейн",
      restaurant: "Ресторан",
      deluxe: "Номер Делюкс",
    },
  },
  EN: {
    title: "Photo Gallery",
    lead:
      "Explore our interiors, rooms, and amenities. Real photos showcase the cozy atmosphere and modern comforts awaiting you.",
    cta: "View all",
    alts: {
      lobby: "Lobby",
      room: "Room",
      pool: "Pool",
      restaurant: "Restaurant",
      deluxe: "Deluxe room",
    },
  },
};

export const getGalleryCopy = (code: LangCode) => GALLERY_COPY[code];
