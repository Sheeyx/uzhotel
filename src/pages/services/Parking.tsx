import React from "react";
import ServiceGallery from "../../components/ServiceGallery";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Parking() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: "Avtoturargoh",
      lead: `Mehmonxonamiz mehmonlari uchun keng va xavfsiz bepul avtoturargoh mavjud. Endi avtomobilingiz uchun joy izlash haqida o‘ylamaysiz — bizda hammasi tayyor!`,
      bullets: [
        "24/7 bepul parking xizmati",
        "Xavfsizlik kameralarida doimiy nazorat",
        "Qulay joylashuv – mehmonxonamiz yonida",
        "Avtomobilingizni ishonch bilan qoldirishingiz mumkin",
      ],
    },
    EN: {
      title: "Parking Space",
      lead: `Our hotel provides guests with a spacious and secure free parking area. No need to worry about finding a spot for your car — everything is ready for your convenience!`,
      bullets: [
        "Free parking available 24/7",
        "Continuous CCTV surveillance",
        "Convenient location – right next to the hotel",
        "Leave your car with confidence",
      ],
    },
    RU: {
      title: "Парковка",
      lead: `Для гостей нашего отеля предусмотрена просторная и безопасная бесплатная парковка. Больше не нужно думать о месте для машины — у нас всё готово для вашего удобства!`,
      bullets: [
        "Бесплатная парковка 24/7",
        "Постоянный контроль с камер наблюдения",
        "Удобное расположение – рядом с отелем",
        "Можно спокойно оставить автомобиль",
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
        "/assets/services/parking1.png",
        "/assets/services/parking2.png",
        "/assets/services/parking3.png",
        "/assets/services/parking4.png",
        "/assets/services/parking5.png",
      ]}
    />
  );
}
