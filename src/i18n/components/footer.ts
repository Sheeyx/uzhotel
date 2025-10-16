// src/i18n/sections/footer.ts

import { LangCode } from "../lang";

export type FooterCopy = {
  nav: {
    rooms: string;
    about: string;
    offers: string;
    services: string;
    contact: string;
  };
  social: {
    instagram: string;
    telegram: string;
    email: string;
  };
  copyright: (year: number) => string;
};

export const FOOTER_COPY: Record<LangCode, FooterCopy> = {
  UZ: {
    nav: {
      rooms: "Xonalar",
      about: "Mehmonxona haqida",
      offers: "Maxsus takliflar",
      services: "Xizmatlar",
      contact: "Aloqa uchun",
    },
    social: {
      instagram: "Instagram",
      telegram: "Telegram",
      email: "Gmail",
    },
    copyright: (y) => `© S-Namangan Mehmonxonasi ${y}`,
  },
  RU: {
    nav: {
      rooms: "Номера",
      about: "О гостинице",
      offers: "Спецпредложения",
      services: "Услуги",
      contact: "Контакты",
    },
    social: {
      instagram: "Инстаграм",
      telegram: "Телеграм",
      email: "Почта",
    },
    copyright: (y) => `© Отель S-Namangan ${y}`,
  },
  EN: {
    nav: {
      rooms: "Rooms",
      about: "About",
      offers: "Special offers",
      services: "Services",
      contact: "Contact",
    },
    social: {
      instagram: "Instagram",
      telegram: "Telegram",
      email: "Email",
    },
    copyright: (y) => `© S-Namangan Hotel ${y}`,
  },
};

export const getFooterCopy = (code: LangCode) => FOOTER_COPY[code];
