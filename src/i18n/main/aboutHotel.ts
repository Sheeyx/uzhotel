// src/i18n/sections/about.ts

import { LangCode } from "../lang";

export type AboutCopy = {
  title: string;
  body: string;
  cta: string;
};

export const ABOUT_COPY: Record<LangCode, AboutCopy> = {
  UZ: {
    title: "S-Namangan mehmonxonasi haqida",
    body:
      "S-Namangan mehmonxonasi – Namangan shahrining markazida joylashgan zamonaviy va qulay maskan. Bizning maqsadimiz – har bir mehmonimizga o‘zini uyidagidek erkin his qilish imkonini yaratish.",
    cta: "Batafsil ko‘rish",
  },
  RU: {
    title: "О гостинице S-Namangan",
    body:
      "Гостиница S-Namangan — современное и уютное место в самом центре Намангана. Наша цель — чтобы каждый гость чувствовал себя как дома.",
    cta: "Подробнее",
  },
  EN: {
    title: "About S-Namangan Hotel",
    body:
      "S-Namangan Hotel is a modern, comfortable stay in the heart of Namangan. Our goal is to make every guest feel right at home.",
    cta: "Learn more",
  },
};

export const getAboutCopy = (code: LangCode) => ABOUT_COPY[code];
