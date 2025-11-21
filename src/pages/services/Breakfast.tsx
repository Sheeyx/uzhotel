// src/pages/services/Restaurant.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Restaurant() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: "Restoran",
      lead: `«Sodiq-Namangan» mehmonxonasining beshinchi qavatida mehmonlar uchun qulay muhit, zamonaviy uslub va 70 o‘ringa mo‘ljallangan mebellar bilan jihozlangan keng restoran xizmat ko‘rsatadi. Bu yerda nafaqat nonushta, balki milliy va yevropa oshxonasining eng yaxshi an’analariga asoslangan tushlik va kechki ovqatlar ham taqdim etiladi.

Nozik ta’mlar ixlosmandlari uchun restoran menyusida mazali taomlar va o‘ziga xos desertlar mavjud. Restoran eshiklari har kuni soat 7:00 dan 10:00 gacha ochiq bo‘lib, «shved stoli» tarzida xizmat ko‘rsatiladi. Menyuga issiq va sovuq taomlar, pishiriqlar, salqin ichimliklar hamda sog‘lom ovqatlanishni yoqtiradiganlar uchun maxsus taomlar kiradi.`,
      bullets: [
        "Har kuni yangi ingredientlar",
        "Turli xil taomlar",
        "Sog‘lom ovqatlanish",
      ],
    },
    EN: {
      title: "Restaurant",
      lead: `On the fifth floor of the «Sodiq-Namangan» Hotel, guests are welcomed to a spacious restaurant featuring a cozy atmosphere, modern style, and comfortable seating for 70 people. Here, not only breakfasts but also lunches and dinners are served in the finest traditions of diverse national and European cuisine.

Indulge yourself with the exquisite taste of our delicious dishes and unique desserts. The restaurant doors are open from 7:00 to 10:00, serving breakfast in a buffet format, which includes hot and cold dishes, pastries, refreshing drinks, and special meals for those who prefer healthy eating.`,
      bullets: [
        "Fresh ingredients every day",
        "A wide variety of dishes",
        "Healthy dining",
      ],
    },
    RU: {
      title: "Ресторан",
      lead: `На пятом этаже в HOTEL «Sodiq-Namangan» к вашим услугам просторный ресторан с уютной атмосферой, современным стилем и комфортной мебелью на 70 человек, где проводятся не только завтраки, а также обеды и ужины, исполненные в лучших традициях многогранной национальной и европейской кухни.

Побалуйте себя тончайшими вкусами наших прекрасных блюд и оригинальными десертами. Двери ресторана открыты для Вас с 7:00 до 10:00, где сервируется завтрак в формате «шведского стола» и включают в себя холодные и горячие блюда, выпечку, прохладительные напитки, а также блюда для приверженцев здорового питания.`,
      bullets: [
        "Свежие ингредиенты каждый день",
        "Разнообразные блюда",
        "Здоровое питание",
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
        "/images/services/restaurant/img1.webp",
        "/images/services/restaurant/img2.webp",
        "/images/services/restaurant/img3.webp",
        "/images/services/restaurant/img4.webp",
        "/images/services/restaurant/img5.webp",
      ]}
    />
  );
}
