export type LangCode = "UZ" | "RU" | "EN";

export const LANGUAGES = [
  { code: "UZ" as LangCode, label: "O‘zbekcha", flag: "/assets/navbar/uz.webp" },
  { code: "RU" as LangCode, label: "Русский", flag: "/assets/navbar/ru.webp" },
  { code: "EN" as LangCode, label: "English", flag: "/assets/navbar/us.webp" },
];
export const I18N: Record<
  LangCode,
  { nav: { rooms: string; about: string; services: string; gallery: string; contact: string }; book: string }
> = {
  UZ: {
    nav: { rooms: "Xonalar", about: "Mehmonxona haqida", services: "Xizmatlar", gallery: "Gallereya", contact: "Aloqa uchun" },
    book: "Band qilish",
  },
  RU: {
    nav: { rooms: "Номера", about: "О гостинице", services: "Услуги", gallery: "Галерея", contact: "Контакты" },
    book: "Забронировать",
  },
  EN: {
    nav: { rooms: "Rooms", about: "About", services: "Services", gallery: "Gallery", contact: "Contact" },
    book: "Book now",
  },
};
