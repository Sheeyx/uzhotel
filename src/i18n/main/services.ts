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
      "Sodiq-Namangan mehmonxonasi mehmonlari uchun barcha zarur xizmatlarni taqdim etadi. Har bir tafsilot sizning rohat va tinchligingiz uchun.",
    learnMore: "Batafsil",
    items: {
      1: {
        title: "Restoran",
        desc:
          "«Sodiq-Namangan» mehmonxonasining beshinchi qavatida joylashgan keng restoran — milliy va yevropa oshxonasining eng yaxshi an’analarini o‘zida mujassam etgan.",
      },
      2: {
        title: "Avtoturargoh",
        desc:
          "Mehmonlarimiz uchun qulay va xavfsiz bepul avtoturargoh mavjud. Avtomobilingizni ishonch bilan qoldirishingiz mumkin.",
      },
      3: {
        title: "Wi-Fi",
        desc:
          "Barcha hududlarda bepul yuqori tezlikdagi Wi-Fi. Xonalarda, restoranda va umumiy joylarda barqaror internet mavjud.",
      },
      4: {
        title: "Sauna",
        desc:
          "«Sodiq-Namangan» saunasi — dam olish va sog‘lomlashtirish uchun ajoyib joy. Fin, turk va fito saunalari siz uchun.",
      },
      5: {
        title: "Basseyn",
        desc:
          "Yozgi ochiq basseyn — issiq kunlarda suzish va tetiklik uchun mukammal tanlov. Oila va do‘stlar bilan maroqli dam oling.",
      },
      6: {
        title: "Ichki hovli va bog‘",
        desc:
          "Mehmonxonaning ichki hovlisi va qushlar bog‘i — ertalabki qushlar sayrashi ostida tinchlik va tabiat bilan uyg‘unlik.",
      },
    },
  },
  RU: {
    headingTitle: "Сервисы для вашего комфорта",
    headingLead:
      "Отель «Sodiq-Namangan» предоставляет все необходимые услуги для гостей. Каждая деталь — для вашего удобства и спокойствия.",
    learnMore: "Подробнее",
    items: {
      1: {
        title: "Ресторан",
        desc:
          "Просторный ресторан на пятом этаже отеля «Sodiq-Namangan» — национальная и европейская кухня в уютной атмосфере.",
      },
      2: {
        title: "Парковка",
        desc:
          "Для гостей предусмотрена удобная и безопасная бесплатная парковка на территории отеля. Всё для вашего удобства.",
      },
      3: {
        title: "Wi-Fi",
        desc:
          "Бесплатный высокоскоростной Wi-Fi на всей территории: в номерах, ресторане и общественных зонах.",
      },
      4: {
        title: "Сауна",
        desc:
          "Сауна в отеле «Sodiq-Namangan» — место для отдыха, расслабления и восстановления сил. Финская, турецкая и фито-бочка.",
      },
      5: {
        title: "Бассейн",
        desc:
          "Открытый бассейн под открытым небом с системой фильтрации воды. Идеален для отдыха всей семьи.",
      },
      6: {
        title: "Внутренний двор и сад",
        desc:
          "Зелёный внутренний двор с садом и поющими птицами — наслаждайтесь тишиной и природой.",
      },
    },
  },
  EN: {
    headingTitle: "Services for Your Comfort",
    headingLead:
      "The «Sodiq-Namangan» Hotel provides all essential services for our guests. Every detail is designed for your comfort and peace of mind.",
    learnMore: "Learn more",
    items: {
      1: {
        title: "Restaurant",
        desc:
          "The spacious restaurant on the fifth floor of the «Sodiq-Namangan» Hotel serves national and European cuisine in a cozy setting.",
      },
      2: {
        title: "Parking",
        desc:
          "For guests’ convenience, a safe and free on-site parking area is available. Everything is ready for your comfort.",
      },
      3: {
        title: "Wi-Fi",
        desc:
          "Free high-speed Wi-Fi throughout the hotel — available in rooms, the restaurant, and public areas.",
      },
      4: {
        title: "Sauna",
        desc:
          "The sauna at «Sodiq-Namangan» Hotel is perfect for rest and recovery — featuring Finnish, Turkish, and herbal sauna types.",
      },
      5: {
        title: "Swimming Pool",
        desc:
          "An open-air pool with modern filtration — a refreshing choice for hot days, ideal for families and friends.",
      },
      6: {
        title: "Inner Courtyard & Garden",
        desc:
          "A peaceful courtyard and bird garden — enjoy quiet mornings surrounded by nature and birdsong.",
      },
    },
  },
};

export const getServicesCopy = (code: LangCode) => SERVICES_COPY[code];
