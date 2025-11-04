// src/pages/services/Birds.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Birds() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: "Ichki hovli va bog‘",
      lead:
        "Tabiat bilan uyg‘unlikni yoqtiradigan mehmonlar uchun mehmonxona atrofida barpo etilgan yashil hudud, gul va qushlar bog‘i alohida e’tiborga loyiq. HOTEL \"Sodik-Namangan\"ning ichki, keng hovlisida bog‘ bo‘ylab sayr qilishingiz mumkin — bu yerda ekzotik qushlarning shirali sayrashi va flora hamda faunaning unutilmas muhitini his qilasiz. Ekzotik interyerli bog‘imiz fotosessiyalar uchun a’lo fon yaratadi.",
    },
    EN: {
      title: "Inner Courtyard & Garden",
      lead:
        "The green zone and the flower & bird park created around the hotel deserve special attention for guests who love harmony with nature. In the spacious inner courtyard of HOTEL \"Sodik-Namangan\" you can stroll through the garden, where the melodious songs of exotic birds and an unforgettable atmosphere of flora and fauna await you. Our garden, with its exotic design, provides excellent backdrops for photo shoots.",
    },
    RU: {
      title: "Внутренний двор и сад",
      lead:
        "Особое внимания заслуживает созданные вокруг отеля зеленая зона, парк цветов и птиц, специально разработанные для гостей, любителей гармонии с природой. Просторный двор во внутренней части HOTEL «Sodik-Namangan», где можно прогуляться в саду и Вас встретит сладкоголосое пение экзотических птиц и незабываемая атмосфера флоры и фауны. Наш сад с экзотическим интерьером создаст превосходные фоны для фотосессии.",
    },
  };

  const T = copy[code as "UZ" | "EN" | "RU"] || copy.UZ;

  return (
    <ServiceGallery
      title={T.title}
      lead={T.lead}
      images={[
        "/assets/services/bird1.webp",
        "/assets/services/bird2.webp",
        "/assets/services/bird3.webp",
        "/assets/services/bird4.webp",
        "/assets/services/bird5.webp",
      ]}
    />
  );
}
