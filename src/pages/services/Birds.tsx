// src/pages/services/Birds.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Birds() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: "Qushlar",
      lead: `Tabiat bilan uyg‘unlikni yoqtiradigan mehmonlar uchun mehmonxona atrofida yaratilgan yashil hudud, gulzorlar va qushlar bog‘i alohida e’tiborga loyiq. Ayniqsa, qushlar bosh joyi – sayohatchilar uchun unutilmas manzara bo‘lib, turli xil qushlarning chiroyli ovozlari ertalabki tongni yanada yoqimli qiladi.`,
    },
    EN: {
      title: "Birds",
      lead: `For guests who love harmony with nature, the green area, flower gardens, and bird park created around the hotel deserve special attention. In particular, the bird sanctuary offers travelers an unforgettable view, as the beautiful songs of various birds make the early morning even more pleasant.`,
    },
    RU: {
      title: "Птицы",
      lead: `Для гостей, любящих гармонию с природой, зелёная зона, цветники и птичий парк, созданные вокруг отеля, заслуживают особого внимания. Особенно уголок птиц — это незабываемое зрелище для путешественников, а красивые трели разных птиц делают утро ещё приятнее.`,
    },
  };

  const T = copy[code as "UZ" | "EN" | "RU"] || copy.UZ;

  return (
    <ServiceGallery
      title={T.title}
      lead={T.lead}
      images={[
        "/assets/services/bird1.png",
        "/assets/services/bird2.png",
        "/assets/services/bird3.png",
        "/assets/services/bird4.png",
        "/assets/services/bird5.png",
      ]}
    />
  );
}
