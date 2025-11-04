// src/pages/services/Parking.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Parking() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: "Avtoturargoh",
      lead: `Mehmonxonamiz mehmonlari uchun xavfsiz va bepul avtoturargoh taqdim etilgan — barchasi sizning qulayligingiz uchun! Nega bu xizmatni tanlash kerak?`,
      bullets: [
        "24/7 bepul avtoturargoh xizmati",
        "Doimiy videokuzatuv nazorati",
        "Avtomobilingizni bemalol qo‘yishingiz mumkin",
      ],
    },
    EN: {
      title: "Parking",
      lead: `For our hotel guests, a safe and free parking area is provided — everything is made for your convenience! Why choose this service?`,
      bullets: [
        "Free parking available 24/7",
        "Constant CCTV surveillance",
        "You can park your car safely and with ease",
      ],
    },
    RU: {
      title: "Стоянка",
      lead: `Для гостей нашего отеля предусмотрена безопасная бесплатная парковка — всё сделано для вашего удобства! Почему стоит выбрать эту услугу?`,
      bullets: [
        "Бесплатная парковка 24/7",
        "Постоянный контроль камеры наблюдения",
        "Можно спокойно установить машину",
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
        "/assets/services/parking1.webp",
        "/assets/services/parking2.webp",
        "/assets/services/parking3.webp",
        "/assets/services/parking4.webp",
        "/assets/services/parking5.webp",
      ]}
    />
  );
}
