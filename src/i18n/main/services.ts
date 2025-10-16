// src/i18n/sections/services.ts
import { LangCode } from "../lang";

export type ServiceText = { title: string; desc: string };
export type ServicesCopy = {
  headingTitle: string;
  headingLead: string;
  learnMore: string;
  // keyed by numeric id from your base list
  items: Record<number, ServiceText>;
};

export const SERVICES_COPY: Record<LangCode, ServicesCopy> = {
  UZ: {
    headingTitle: "Qulayliklaringiz uchun xizmatlar",
    headingLead:
      "S-Namangan mehmonxonasi mehmonlari uchun barcha zarur xizmatlarni taqdim etadi. Har bir tafsilot sizning rohat va tinchligingiz uchun.",
    learnMore: "Batafsil",
    items: {
      1: {
        title: "Nonushta “Bufet”",
        desc:
          "S-Namangan mehmonxonasida nonushta bufeti! Ertangizni mazali va sermazmun boshlang — yangi taomlar va ichimliklar tanlovi siz uchun.",
      },
      2: {
        title: "Avtoturargoh",
        desc:
          "Mehmonlarimiz uchun qulay va xavfsiz avtoturargoh maydoni mavjud. Qulay joylashuv — bezovta bo‘lmang.",
      },
      3: {
        title: "Wi-Fi",
        desc:
          "Barcha hududlarda bepul yuqori tezlikdagi Wi-Fi. Xonalarda, umumiy joylarda va hududda internet mavjud.",
      },
      4: {
        title: "Sauna",
        desc:
          "S-Namangan saunasi — kun davomida charchoqni yozish va dam olish uchun ajoyib joy. Iliq muhit va qulay sharoitlar.",
      },
      5: {
        title: "Yozgi basseyn",
        desc:
          "Och-iqil maydondagi yozgi basseyn — issiq kunlarda suzish va dam olish uchun zo‘r tanlov. Oila va do‘stlar bilan maroqli dam oling.",
      },
      6: {
        title: "Qushlar bog‘i",
        desc:
          "Hovlimizdagi sokin yashil maskan — kichik qushlar bog‘i bilan. Qushlar sayrashi ostida yoqimli tonglar.",
      },
    },
  },
  RU: {
    headingTitle: "Сервисы для вашего комфорта",
    headingLead:
      "Гостиница S-Namangan предоставляет все необходимые услуги для гостей. Каждая деталь — для вашего удобства и спокойствия.",
    learnMore: "Подробнее",
    items: {
      1: {
        title: "Завтрак «Шведский стол»",
        desc:
          "Начните утро со вкусом! Разнообразный буфет с горячими и холодными блюдами, свежей выпечкой и напитками.",
      },
      2: {
        title: "Парковка",
        desc:
          "Для гостей предусмотрена удобная и безопасная парковка на территории отеля. Никаких лишних забот.",
      },
      3: {
        title: "Wi-Fi",
        desc:
          "Бесплатный высокоскоростной Wi-Fi на всей территории: в номерах, общественных зонах и во внутреннем дворе.",
      },
      4: {
        title: "Сауна",
        desc:
          "Идеальное место для отдыха и восстановления после насыщенного дня. Теплая атмосфера и комфорт.",
      },
      5: {
        title: "Летний бассейн",
        desc:
          "Открытый бассейн под открытым небом — плавание и релакс в жаркие дни. Подходит для отдыха всей семьи.",
      },
      6: {
        title: "Сад птиц",
        desc:
          "Уютный зеленый дворик с небольшим садом птиц — встречайте тихие утра под пение пернатых.",
      },
    },
  },
  EN: {
    headingTitle: "Services for Your Comfort",
    headingLead:
      "S-Namangan Hotel provides all essential services for our guests. Every detail is designed for your ease and peace of mind.",
    learnMore: "Learn more",
    items: {
      1: {
        title: "Breakfast Buffet",
        desc:
          "Start your morning with flavor! A varied buffet with hot and cold dishes, fresh pastries, and drinks.",
      },
      2: {
        title: "Parking Space",
        desc:
          "Convenient and secure on-site parking is available for all guests. Park with confidence.",
      },
      3: {
        title: "Wi-Fi",
        desc:
          "Free high-speed Wi-Fi across the property — in rooms, public areas, and the courtyard.",
      },
      4: {
        title: "Sauna",
        desc:
          "The perfect place to unwind and recharge after a busy day. Warm atmosphere and comfort.",
      },
      5: {
        title: "Summer Pool",
        desc:
          "Open-air summer pool — swim and relax in comfort. Great for hot days with family and friends.",
      },
      6: {
        title: "Bird Garden",
        desc:
          "A quiet green courtyard with a small bird garden — enjoy calm mornings with birdsong.",
      },
    },
  },
};

export const getServicesCopy = (code: LangCode) => SERVICES_COPY[code];
