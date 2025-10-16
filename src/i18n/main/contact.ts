// src/i18n/sections/contact.ts

import { LangCode } from "../lang";

export type ContactCopy = {
  heading: string;
  lead: string;
  items: Record<
    number,
    {
      title: string;
      // optional: address/phone/email per language (kept empty to use base values)
      textOverride?: string;
    }
  >;
};

export const CONTACT_COPY: Record<LangCode, ContactCopy> = {
  UZ: {
    heading: "Biz bilan bog‘laning",
    lead:
      "Savollaringiz bormi? Xona band qilmoqchimisiz? Biz 24/7 sizning xizmatingizdamiz.",
    items: {
      1: { title: "Manzil" },
      2: { title: "Telefon" },
      3: { title: "Email" },
    },
  },
  RU: {
    heading: "Свяжитесь с нами",
    lead:
      "Есть вопросы? Хотите забронировать номер? Мы на связи 24/7.",
    items: {
      1: { title: "Адрес" },
      2: { title: "Телефон" },
      3: { title: "Email" },
    },
  },
  EN: {
    heading: "Contact Us",
    lead:
      "Have questions? Want to book a room? We’re available 24/7.",
    items: {
      1: { title: "Address" },
      2: { title: "Phone" },
      3: { title: "Email" },
    },
  },
};

export const getContactCopy = (code: LangCode) => CONTACT_COPY[code];
