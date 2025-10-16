// src/pages/services/Pool.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";

export default function Pool() {
  return (
    <ServiceGallery
      title="Yozgi Basseyn"
      lead={`S-Namangan mehmonxonasi mehmonlari uchun yoz oylarida alohida qulaylik – zamonaviy ochiq yozgi basseyn taqdim etiladi. Keng va toza basseyn hududi mehmonlarga nafaqat suzish, balki salqinlikda maroqli dam olish imkonini ham beradi.`}
      images={[
        "/assets/services/summer1.png",
        "/assets/services/summer2.png",
        "/assets/services/summer3.png",
        "/assets/services/summer4.png",
        "/assets/services/summer5.png",
      ]}
    />
  );
}
