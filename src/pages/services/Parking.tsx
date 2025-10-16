// src/pages/services/Parking.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";

export default function Parking() {
  return (
    <ServiceGallery
      title="Parking Space"
      lead={`Mehmonxonamiz mehmonlari uchun keng va xavfsiz bepul avtoturargoh mavjud. Endi avtomobilingiz uchun joy izlash haqida o‘ylamaysiz — bizda hammasi tayyor!`}
      bullets={[
        "24/7 bepul parking xizmati",
        "Xavfsizlik kameralarida doimiy nazorat",
        "Qulay joylashuv – mehmonxonamiz yonida",
        "Avtomobilingizni ishonch bilan qoldirishingiz mumkin",
      ]}
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
