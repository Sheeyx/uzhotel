import React from "react";
import ServiceGallery from "../../components/ServiceGallery";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Pool() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: "Basseyn",
      lead: `Yoz faslida «Sodiq-Namangan» mehmonxonasi mehmonlarga alohida qulayliklar — zamonaviy suv filtrlash tizimiga ega ochiq basseynni taqdim etadi. Keng va toza basseyn hududi mehmonlarga suzish, tongni tetiklik bilan boshlash va sog‘lom dam olish yoki shunchaki issiq kunda salqinlikdan bahramand bo‘lish imkonini beradi.`,
    },
    EN: {
      title: "Swimming Pool",
      lead: `During the summer season, the «Sodiq-Namangan» Hotel offers guests a special comfort — a modern open-air swimming pool equipped with a water filtration system. The spacious and clean pool area allows guests to swim, start the day with energy and well-being, or simply enjoy the coolness on a hot day.`,
    },
    RU: {
      title: "Бассеин",
      lead: `В летний период отель «Sodiq-Namangan» предлагает своим гостям персональные удобства — современный открытый бассейн с системой фильтрации воды. Просторная и чистая зона бассейна позволяет гостям поплавать, начать день бодро и с пользой для здоровья или просто насладиться прохладой в жаркий день.`,
    },
  };

  const T = copy[code as "UZ" | "EN" | "RU"] || copy.UZ;

  return (
    <ServiceGallery
      title={T.title}
      lead={T.lead}
      images={[
        "/assets/services/summer1.webp",
        "/assets/services/summer2.webp",
        "/assets/services/summer3.webp",
        "/assets/services/summer4.webp",
        "/assets/services/summer5.webp",
      ]}
    />
  );
}
