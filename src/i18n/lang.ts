export type LangCode = "UZ" | "RU" | "EN";

export const LANGUAGES = [
  { code: "UZ" as LangCode, label: "O‘zbekcha", flag: "/assets/navbar/uz.png" },
  { code: "RU" as LangCode, label: "Русский", flag: "/assets/navbar/ru.png" },
  { code: "EN" as LangCode, label: "English", flag: "/assets/navbar/us.png" },
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
