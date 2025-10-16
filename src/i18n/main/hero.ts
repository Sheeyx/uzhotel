// src/i18n/sections/hero.ts

import { LangCode } from "../lang";

export type HeroSlideText = {
  title: string;        // can contain \n for line breaks
  subtitle?: string;
  address?: string;
  badge?: string;
};

export type HeroCopy = {
  prev: string;
  next: string;
  dotAriaPrefix: string; // e.g., "Go to slide"
  slides: Record<number, HeroSlideText>; // keyed by slide id
};

export const HERO_COPY: Record<LangCode, HeroCopy> = {
  UZ: {
    prev: "Oldingi",
    next: "Keyingi",
    dotAriaPrefix: "Slaydga o'tish",
    slides: {
      1: {
        title: "S-Namangan mehmonxonasi,\nNamangan shahri",
        subtitle: "160116 Namangan Viloyati Namangan Shahri",
        address: "Islom Karimov ko‘chasi, 2-uy",
      },
      2: {
        title: "S-Namangan mehmonxonasi,\nDeluxe xonalar",
        subtitle: "Markazda joylashuv • Bepul Wi-Fi",
        address: "Islom Karimov ko‘chasi, 2-uy",
      },
      3: {
        title: "S-Namangan mehmonxonasi,\nOilaviy dam olish",
        subtitle: "Nonushta qo‘shilgan • 24/7 qabulxona",
        address: "Islom Karimov ko‘chasi, 2-uy",
      },
    },
  },
  RU: {
    prev: "Назад",
    next: "Вперёд",
    dotAriaPrefix: "Перейти к слайду",
    slides: {
      1: {
        title: "Отель S-Namangan,\nгород Наманган",
        subtitle: "160116 Наманганская область, город Наманган",
        address: "ул. Ислама Каримова, дом 2",
      },
      2: {
        title: "Отель S-Namangan,\nНомера Делюкс",
        subtitle: "Расположение в центре • Бесплатный Wi-Fi",
        address: "ул. Ислама Каримова, дом 2",
      },
      3: {
        title: "Отель S-Namangan,\nСемейный отдых",
        subtitle: "Завтрак включён • Ресепшн 24/7",
        address: "ул. Ислама Каримова, дом 2",
      },
    },
  },
  EN: {
    prev: "Previous",
    next: "Next",
    dotAriaPrefix: "Go to slide",
    slides: {
      1: {
        title: "S-Namangan Hotel,\nNamangan City",
        subtitle: "160116 Namangan Region, Namangan City",
        address: "Islom Karimov St., 2",
      },
      2: {
        title: "S-Namangan Hotel,\nDeluxe Rooms",
        subtitle: "Central location • Free Wi-Fi",
        address: "Islom Karimov St., 2",
      },
      3: {
        title: "S-Namangan Hotel,\nFamily getaway",
        subtitle: "Breakfast included • 24/7 reception",
        address: "Islom Karimov St., 2",
      },
    },
  },
};

export const getHeroCopy = (code: LangCode) => HERO_COPY[code];
