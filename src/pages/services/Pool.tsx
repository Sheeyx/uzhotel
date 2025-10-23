import React from "react";
import ServiceGallery from "../../components/ServiceGallery";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Pool() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: "Yozgi Basseyn",
      lead: `S-Namangan mehmonxonasi mehmonlari uchun yoz oylarida alohida qulaylik – zamonaviy ochiq yozgi basseyn taqdim etiladi. Keng va toza basseyn hududi mehmonlarga nafaqat suzish, balki salqinlikda maroqli dam olish imkonini ham beradi.`,
    },
    EN: {
      title: "Summer Pool",
      lead: `During the summer months, S-Namangan Hotel offers guests a special comfort — a modern open-air swimming pool. The spacious and clean pool area allows guests not only to swim but also to relax and enjoy a refreshing atmosphere.`,
    },
    RU: {
      title: "Летний бассейн",
      lead: `В летний период отель S-Namangan предоставляет своим гостям особое удобство — современный открытый бассейн. Просторная и чистая зона бассейна позволяет гостям не только плавать, но и приятно отдохнуть в прохладе.`,
    },
  };

  const T = copy[code as "UZ" | "EN" | "RU"] || copy.UZ;

  return (
    <ServiceGallery
      title={T.title}
      lead={T.lead}
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
