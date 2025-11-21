// src/pages/services/Wifi.tsx
import React from "react";
import ServiceSplit from "../../components/ServiceSplit";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Wifi() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: "Wi-Fi",
      paragraphs: [
        `«Sodiq-Namangan» mehmonxonasi barcha mehmonlariga butun mehmonxona hududida yuqori tezlikdagi bepul Wi-Fi xizmatini taqdim etadi. Internetdan xonangizda, lobbida, restoranda yoki boshqa jamoat joylarida bemalol foydalanishingiz mumkin.`,
        `Wi-Fi tarmog‘i barqaror va tez ishlaydi, ishbilarmonlar uchun onlayn uchrashuvlar o‘tkazish, mehmonlar uchun esa sevimli kontentni tomosha qilish yoki muloqotda bo‘lish uchun qulay muhit yaratadi.`,
      ],
    },
    EN: {
      title: "Wi-Fi",
      paragraphs: [
        `The «Sodiq-Namangan» Hotel provides all guests with high-speed, free Wi-Fi throughout the entire property. You can easily access the internet in your room, the lobby, the restaurant, or any other public area of the hotel.`,
        `The Wi-Fi network is fast and stable, creating a convenient environment both for business guests conducting online meetings and for travelers who simply wish to stay connected or enjoy their favorite content.`,
      ],
    },
    RU: {
      title: "Wi-Fi",
      paragraphs: [
        `Отель «Sodiq-Namangan» предлагает всем гостям бесплатный высокоскоростной Wi-Fi, который охватывает всю территорию отеля. Интернет доступен в номерах, лобби, ресторане и других общественных зонах.`,
        `Сеть работает стабильно и обеспечивает удобство как для деловых гостей, так и для туристов, желающих оставаться на связи и наслаждаться любимым контентом.`,
      ],
    },
  };

  const T = copy[code as "UZ" | "EN" | "RU"] || copy.UZ;

  return (
    <ServiceSplit title={T.title} image="/images/services/wifi.webp">
      {T.paragraphs.map((p, i) => (
        <p
          key={i}
          className="font-inter mt-4 text-[16px] leading-[32px] font-normal text-black"
        >
          {p}
        </p>
      ))}
    </ServiceSplit>
  );
}
