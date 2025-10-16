// src/pages/services/Sauna.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";

export default function Sauna() {
  return (
    <ServiceGallery
      title="Sauna"
      lead={`“S-Namangan” mehmonxonasi mehmonlari uchun bepul Sauna xizmati taqdim etadi. Siz bu yerda suzib, kuningizni tetik va sog‘lom boshlashingiz yoki issiq kunda salqinlikdan bahramand bo‘lishingiz mumkin. Sauna har kuni toza saqlanadi va xavfsizlik qoidalariga rioya qilinadi.`}
      bullets={[
        "Issiq kunlarda salqinlik, tetiklik va maroqli hordiq",
        "Toza suv, qulay shezlonglar va bolalar uchun xavfsiz maydon",
        "Siz va yaqinlaringiz uchun mukammal dam olish maskani",
      ]}
      images={[
        "/assets/services/sauna.png",
        "/assets/services/sauna1.png",
        "/assets/services/sauna2.png",
        "/assets/services/sauna3.png",
        "/assets/services/sauna4.png",
      ]}
    />
  );
}
