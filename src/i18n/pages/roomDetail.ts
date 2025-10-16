// src/i18n/pages/roomDetail.ts
import type { RoomTypeKey } from "../../data/rooms";
import { LangCode } from "../lang";

/** Small tags so the component can pick proper icon/color */
export type BulletTag = "light" | "ac" | "wifi" | "fax" | "computer" | "water";

export type RoomDetailCopy = {
  back: string;
  hotelName: string;
  perNight: string;
  bookNow: string;
  notFound: string;
  notesTitle: string;
  extraTitle: string;
  facilitiesByType: Record<RoomTypeKey, string[]>;
  checkPolicies: { text: string }[];
  extraCards: Array<{
    title: string;
    price: string;
    note?: string;
    bullets: Array<{ text: string; tag: BulletTag }>;
  }>;
};

export const ROOM_DETAIL_COPY: Record<LangCode, RoomDetailCopy> = {
  UZ: {
    back: "Ortga",
    hotelName: "S-Namangan mehmonxonasi",
    perNight: "/ kecha",
    bookNow: "Band qilish",
    notFound: "Xona topilmadi.",
    notesTitle: "Eslatma (Check-in / Check-out)",
    extraTitle: "Qo‘shimcha xizmatlar narxlari",
    facilitiesByType: {
      standard_single: [
        "Qulay yakka karavot",
        "❄️ Konditsioner / isitish",
        "🚿 Shaxsiy hammom (dush, sochiqlar, gigiyena vositalari)",
        "📺 Yassi ekranli televizor",
        "🌐 Bepul Wi-Fi",
        "☕️ Elektr choynak va choy to‘plami (so‘rov bo‘yicha)",
        "🪞 Shkaf va ish stoli",
      ],
      standard_twin: [
        "Ikki dona bitta o‘rinli karavot (ortopedik matraslar)",
        "❄️ Konditsioner / isitish",
        "📺 Sun’iy yo‘ldosh TV bilan yassi ekran",
        "🌐 Bepul Wi-Fi",
        "🚿 Shaxsiy hammom (dush, sochiqlar, gigiyena vositalari)",
        "☕️ Elektr choynak, choy/kofe (so‘rov bo‘yicha)",
        "🪞 Shkaf, ish stoli",
      ],
      standard_triple: [
        "Uchta bitta o‘rinli yoki 1 juft + 1 bitta (joylashuvga qarab)",
        "❄️ Konditsioner / isitish",
        "📺 Sun’iy yo‘ldosh TV bilan yassi ekran",
        "🌐 Bepul Wi-Fi",
        "🚿 Shaxsiy hammom (dush, fen, gigiyena vositalari)",
        "☕️ Choynak, choy to‘plami (so‘rov bo‘yicha)",
        "🪞 Shkaf, ish stoli",
      ],
      suite_single: [
        "King-size juft karavot",
        "🛋 Yumshoq mebellar bilan dam olish zonasi",
        "🛁 Keng hammom (vanna yoki dush), xalat va shippaklar",
        "❄️ Konditsioner / iqlim nazorati",
        "📺 Yassi ekranli televizor (ba’zi xonalarda bir nechta)",
        "🌐 Tezkor bepul Wi-Fi",
        "☕️ Elektr choynak, choy/kofe to‘plami, mini-bar",
        "🪞 Shkaf, ish stoli, seyf",
      ],
      suite_double: [
        "Ikki dona keng bitta o‘rinli karavot",
        "🛋 Yumshoq mebellar bilan dam olish zonasi",
        "🛁 Hammom (vanna), fen, xalat va shippaklar",
        "❄️ Konditsioner / iqlim nazorati",
        "📺 Sun’iy yo‘ldosh TV bilan yassi ekran",
        "🌐 Bepul Wi-Fi",
        "☕️ Elektr choynak, choy to‘plami, mini-bar",
        "🪞 Shkaf, seyf, ish stoli",
      ],
    },
    checkPolicies: [
      { text: "Erta kirish 06:00–12:00 — 50% to‘lov" },
      { text: "Erta kirish 06:00 gacha — 100% to‘lov" },
      { text: "Hisob-kitob vaqti (check-out) — 12:00" },
      { text: "Kech chiqish 12:00–18:00 — 50% to‘lov" },
      { text: "Kech chiqish 18:00 dan — 100% to‘lov" },
    ],
    extraCards: [
      {
        title: "Konferens-zal (uskunalarsiz)",
        price: "800 000 so‘m / kun",
        bullets: [
          { text: "Sun’iy yoritish ta’minlangan", tag: "light" },
          { text: "Konditsioner mavjud", tag: "ac" },
          { text: "Faks, ksero-kopiya", tag: "fax" },
          { text: "Wi-Fi (simsiz internet)", tag: "wifi" },
        ],
      },
      {
        title: "Konferens-zal (uskunalar bilan)",
        price: "950 000 so‘m / kun",
        note: "Ishtirokchilar uchun ichimlik suvi (0.5 l/odam) narxga kiradi",
        bullets: [
          { text: "LCD kompyuter, ekran, doska, proyektor", tag: "computer" },
          { text: "Sun’iy yoritish ta’minlangan", tag: "light" },
          { text: "Konditsioner mavjud", tag: "ac" },
          { text: "Faks, ksero-kopiya", tag: "fax" },
          { text: "Wi-Fi (simsiz internet)", tag: "wifi" },
          { text: "Ichimlik suvi stolga qo‘yiladi", tag: "water" },
        ],
      },
    ],
  },

  RU: {
    back: "Назад",
    hotelName: "Отель S-Namangan",
    perNight: "/ ночь",
    bookNow: "Забронировать",
    notFound: "Номер не найден.",
    notesTitle: "Примечание (Заезд / Выезд)",
    extraTitle: "Цены на дополнительные услуги",
    facilitiesByType: {
      standard_single: [
        "Удобная односпальная кровать",
        "❄️ Кондиционер / отопление",
        "🚿 Собственная ванная (душ, полотенца, туалетные принадлежности)",
        "📺 Плоский телевизор",
        "🌐 Бесплатный Wi-Fi",
        "☕️ Электрочайник и чайный набор (по запросу)",
        "🪞 Шкаф и рабочий стол",
      ],
      standard_twin: [
        "Две односпальные кровати (ортопедические матрасы)",
        "❄️ Кондиционер / отопление",
        "📺 Плоский телевизор со спутниковыми каналами",
        "🌐 Бесплатный Wi-Fi",
        "🚿 Собственная ванная (душ, полотенца, туалетные принадлежности)",
        "☕️ Электрочайник, чай/кофе (по запросу)",
        "🪞 Шкаф, рабочий стол",
      ],
      standard_triple: [
        "Три односпальные или 1 двуспальная + 1 односпальная кровать (по планировке)",
        "❄️ Кондиционер / отопление",
        "📺 Плоский телевизор со спутниковыми каналами",
        "🌐 Бесплатный Wi-Fi",
        "🚿 Собственная ванная (душ, фен, туалетные принадлежности)",
        "☕️ Чайник, чайный набор (по запросу)",
        "🪞 Шкаф, рабочий стол",
      ],
      suite_single: [
        "Кровать king-size",
        "🛋 Отдельная зона отдыха с мягкой мебелью",
        "🛁 Просторная ванная (ванна или душевая), халаты и тапочки",
        "❄️ Кондиционер / климат-контроль",
        "📺 Плоский телевизор (в некоторых номерах — несколько)",
        "🌐 Высокоскоростной бесплатный Wi-Fi",
        "☕️ Электрочайник, набор чай/кофе, мини-бар",
        "🪞 Шкаф, рабочий стол, сейф",
      ],
      suite_double: [
        "Две просторные односпальные кровати",
        "🛋 Зона отдыха с мягкой мебелью",
        "🛁 Ванная комната (ванна), фен, халат и тапочки",
        "❄️ Кондиционер / климат-контроль",
        "📺 Плоский телевизор со спутниковыми каналами",
        "🌐 Бесплатный Wi-Fi",
        "☕️ Электрочайник, чайный набор, мини-бар",
        "🪞 Шкаф, сейф, рабочий стол",
      ],
    },
    checkPolicies: [
      { text: "Ранний заезд 06:00–12:00 — 50% оплаты" },
      { text: "Ранний заезд до 06:00 — 100% оплаты" },
      { text: "Расчётный час (check-out) — 12:00" },
      { text: "Поздний выезд 12:00–18:00 — 50% оплаты" },
      { text: "Поздний выезд после 18:00 — 100% оплаты" },
    ],
    extraCards: [
      {
        title: "Конференц-зал (без оборудования)",
        price: "800 000 сум / день",
        bullets: [
          { text: "Искусственное освещение", tag: "light" },
          { text: "Есть кондиционер", tag: "ac" },
          { text: "Факс, ксерокопия", tag: "fax" },
          { text: "Wi-Fi (беспроводной интернет)", tag: "wifi" },
        ],
      },
      {
        title: "Конференц-зал (с оборудованием)",
        price: "950 000 сум / день",
        note: "Питьевая вода для участников (0.5 л/чел) включена в цену",
        bullets: [
          { text: "LCD-компьютер, экран, доска, проектор", tag: "computer" },
          { text: "Искусственное освещение", tag: "light" },
          { text: "Есть кондиционер", tag: "ac" },
          { text: "Факс, ксерокопия", tag: "fax" },
          { text: "Wi-Fi (беспроводной интернет)", tag: "wifi" },
          { text: "На стол подаётся питьевая вода", tag: "water" },
        ],
      },
    ],
  },

  EN: {
    back: "Back",
    hotelName: "S-Namangan Hotel",
    perNight: "/ night",
    bookNow: "Book now",
    notFound: "Room not found.",
    notesTitle: "Note (Check-in / Check-out)",
    extraTitle: "Extra services pricing",
    facilitiesByType: {
      standard_single: [
        "Comfortable single bed",
        "❄️ Air conditioning / heating",
        "🚿 Private bathroom (shower, towels, toiletries)",
        "📺 Flat-screen TV",
        "🌐 Free Wi-Fi",
        "☕️ Electric kettle and tea set (on request)",
        "🪞 Wardrobe and desk",
      ],
      standard_twin: [
        "Two single beds (orthopedic mattresses)",
        "❄️ Air conditioning / heating",
        "📺 Flat-screen TV with satellite channels",
        "🌐 Free Wi-Fi",
        "🚿 Private bathroom (shower, towels, toiletries)",
        "☕️ Electric kettle, tea/coffee (on request)",
        "🪞 Wardrobe, desk",
      ],
      standard_triple: [
        "Three singles / or 1 double + 1 single (layout-dependent)",
        "❄️ Air conditioning / heating",
        "📺 Flat-screen TV with satellite channels",
        "🌐 Free Wi-Fi",
        "🚿 Private bathroom (shower, hairdryer, toiletries)",
        "☕️ Kettle, tea set (on request)",
        "🪞 Wardrobe, desk",
      ],
      suite_single: [
        "King-size double bed",
        "🛋 Separate living/relax area with upholstered furniture",
        "🛁 Spacious bathroom (bathtub or shower), bathrobes and slippers",
        "❄️ Air conditioning / climate control",
        "📺 Flat-screen TV (some rooms: multiple) with satellite",
        "🌐 Free high-speed Wi-Fi",
        "☕️ Electric kettle, tea/coffee set, mini-bar",
        "🪞 Wardrobe, desk, safe",
      ],
      suite_double: [
        "Two spacious single beds",
        "🛋 Relaxation area with upholstered furniture",
        "🛁 Bathroom with bathtub, hairdryer, bathrobe and slippers",
        "❄️ Air conditioning / climate control",
        "📺 Flat-screen TV with satellite channels",
        "🌐 Free Wi-Fi",
        "☕️ Electric kettle, tea set, mini-bar",
        "🪞 Wardrobe, safe, desk",
      ],
    },
    checkPolicies: [
      { text: "Early check-in 06:00–12:00 — 50% charge" },
      { text: "Early check-in before 06:00 — 100% charge" },
      { text: "Check-out time — 12:00" },
      { text: "Late check-out 12:00–18:00 — 50% charge" },
      { text: "Late check-out after 18:00 — 100% charge" },
    ],
    extraCards: [
      {
        title: "Conference hall (no equipment)",
        price: "800,000 UZS / day",
        bullets: [
          { text: "Artificial lighting provided", tag: "light" },
          { text: "Air conditioning available", tag: "ac" },
          { text: "Fax, photocopy", tag: "fax" },
          { text: "Wi-Fi (wireless internet)", tag: "wifi" },
        ],
      },
      {
        title: "Conference hall (with equipment)",
        price: "950,000 UZS / day",
        note: "Drinking water for participants (0.5 L/person) is included",
        bullets: [
          { text: "LCD computer, screen, board, projector", tag: "computer" },
          { text: "Artificial lighting provided", tag: "light" },
          { text: "Air conditioning available", tag: "ac" },
          { text: "Fax, photocopy", tag: "fax" },
          { text: "Wi-Fi (wireless internet)", tag: "wifi" },
          { text: "Drinking water served on table", tag: "water" },
        ],
      },
    ],
  },
};

export const getRoomDetailCopy = (lang: LangCode) => ROOM_DETAIL_COPY[lang];
