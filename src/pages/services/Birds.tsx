// src/pages/services/Birds.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";

export default function Birds() {
  return (
    <ServiceGallery
      title="Qushlar"
      lead={`Tabiat bilan uyg‘unlikni yoqtiradigan mehmonlar uchun mehmonxona atrofida yaratilgan yashil hudud, gulzorlar va qushlar bog‘i alohida e’tiborga loyiq. Ayniqsa, qushlar bosh joyi – sayohatchilar uchun unutilmas manzara bo‘lib, turli xil qushlarning chiroyli ovozlari ertalabki tongni yanada yoqimli qiladi.`}
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
