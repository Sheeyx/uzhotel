// src/i18n/pages/roomsCarousel.ts

import { LangCode } from "../lang";

export type RoomsCarouselCopy = {
  title: string;
  lead: string;
  prev: string;
  next: string;
  seeAll: string;
};

export const ROOMS_CAROUSEL_COPY: Record<LangCode, RoomsCarouselCopy> = {
  UZ: {
    title: "Xonalar",
    lead:
      "Har bir xonamiz zamonaviy dizayn, toza muhit va yuqori darajadagi xizmat bilan jihozlangan. Siz uchun turli ehtiyojlarga mos turdagi xonalarni taklif etamiz: yakka sayohatchilardan tortib, oilaviy dam olishgacha.",
    prev: "Oldingi",
    next: "Keyingi",
    seeAll: "Batafsil ko‘rish",
  },
  RU: {
    title: "Номера",
    lead:
      "Каждый наш номер оснащён современным дизайном, чистотой и высоким уровнем сервиса. Подберём тип под разные потребности: от одиночных поездок до семейного отдыха.",
    prev: "Назад",
    next: "Вперёд",
    seeAll: "Смотреть все",
  },
  EN: {
    title: "Rooms",
    lead:
      "Each room features modern design, a spotless environment, and attentive service. Choose the type that fits your needs—from solo trips to family getaways.",
    prev: "Previous",
    next: "Next",
    seeAll: "View all",
  },
};

export const getRoomsCarouselCopy = (code: LangCode) => ROOMS_CAROUSEL_COPY[code];
