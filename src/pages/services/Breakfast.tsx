// src/pages/services/Breakfast.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Breakfast() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: `Nonushta “Bufet”`,
      lead: `S-Namangan mehmonxonasi sizning ertalablaringizni yanada yoqimli qilish uchun mehmonlarga bepul nonushta bufetini taklif etadi. Har kuni ertalab sizni turli xil yangi va mazali taomlar, issiq ichimliklar hamda yengil shirinliklar kutadi. Bufetda mahalliy va xalqaro oshxonadan namunalar taqdim etilib, har bir mehmon o‘z didiga mos taomni tanlashi mumkin. Shinam muhit, qulay xizmat va iliq muomala sizning kuningizni tetik kayfiyatda boshlashingizga yordam beradi.`,
      bullets: [
        "Kundalik yangi ingredientlar",
        "Turli xil taomlar",
        "Bepul ichimliklar",
      ],
    },
    EN: {
      title: `Breakfast “Buffet”`,
      lead: `S-Namangan Hotel offers guests a complimentary breakfast buffet to make your mornings even more pleasant. Every morning, you’ll find a wide selection of fresh and delicious dishes, hot beverages, and light desserts. The buffet includes both local and international cuisine, allowing every guest to choose something to their taste. The cozy atmosphere, attentive service, and warm hospitality help you start your day in a cheerful mood.`,
      bullets: [
        "Fresh ingredients daily",
        "Variety of dishes",
        "Free beverages",
      ],
    },
    RU: {
      title: `Завтрак «Шведский стол»`,
      lead: `Отель S-Namangan предлагает гостям бесплатный завтрак по системе «шведский стол», чтобы сделать ваши утра ещё приятнее. Каждое утро вас ждёт разнообразие свежих и вкусных блюд, горячие напитки и лёгкие десерты. В буфете представлены блюда местной и международной кухни, чтобы каждый гость мог выбрать угощение по своему вкусу. Уютная атмосфера, внимательное обслуживание и тёплый приём помогут вам начать день в хорошем настроении.`,
      bullets: [
        "Ежедневно свежие ингредиенты",
        "Разнообразие блюд",
        "Бесплатные напитки",
      ],
    },
  };

  const T = copy[code as "UZ" | "EN" | "RU"] || copy.UZ;

  return (
    <ServiceGallery
      title={T.title}
      lead={T.lead}
      bullets={T.bullets}
      images={[
        "/assets/services/meal1.webp",
        "/assets/services/meal2.webp",
        "/assets/services/meal3.webp",
        "/assets/services/meal3.webp",
        "/assets/services/meal3.webp",
      ]}
    />
  );
}
