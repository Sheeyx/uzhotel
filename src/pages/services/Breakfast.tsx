// src/pages/services/Breakfast.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";

export default function Breakfast() {
  return (
    <ServiceGallery
      title='Nonushta “Bufet”'
      lead={`S-Namangan mehmonxonasi sizning ertalablaringizni yanada yoqimli qilish uchun mehmonlarga bepul nonushta bufetini taklif etadi. Har kuni ertalab sizni turli xil yangi va mazali taomlar, issiq ichimliklar hamda yengil shirinliklar kutadi. Bufetda mahalliy va xalqaro oshxonadan namunalar taqdim etilib, har bir mehmon o‘z didiga mos taomni tanlashi mumkin. Shinam muhit, qulay xizmat va iliq muomala sizning kuningizni tetik kayfiyatda boshlashingizga yordam beradi.`}
      bullets={[
        "Kundalik yangi ingredientlar",
        "Turli xil taomlar",
        "Bepul ichimliklar",
      ]}
      images={[
        "/assets/services/meal1.png",
        "/assets/services/meal2.png",
        "/assets/services/meal3.png",
        "/assets/services/meal3.png",
        "/assets/services/meal3.png",
      ]}
    />
  );
}
