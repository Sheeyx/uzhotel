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
        `S-Namangan mehmonxonasi barcha mehmonlari uchun yuqori tezlikdagi bepul Wi-Fi xizmatini taqdim etadi. Siz xonangizda, lobbida, restoran va boshqa umumiy joylarda internetdan bemalol foydalanishingiz mumkin.`,
        `Har bir mehmon uchun bepul taqdim etiladigan Wi-Fi tarmog‘i butun mehmonxona hududini qamrab olgan. Xoh xonangizda dam olayotgan bo‘ling, xoh restoranda ovqatlaning yoki majlis zalida uchrashuv o‘tkazing — internet har doim siz bilan birga.`,
      ],
    },
    EN: {
      title: "Wi-Fi",
      paragraphs: [
        `S-Namangan Hotel provides all guests with high-speed, free Wi-Fi service. You can easily access the internet in your room, the lobby, the restaurant, and other public areas.`,
        `The complimentary Wi-Fi network covers the entire hotel area. Whether you are relaxing in your room, dining in the restaurant, or attending a meeting in the conference hall — you’ll stay connected at all times.`,
      ],
    },
    RU: {
      title: "Wi-Fi",
      paragraphs: [
        `Отель S-Namangan предоставляет всем гостям бесплатный высокоскоростной Wi-Fi. Вы можете пользоваться интернетом в номере, лобби, ресторане и других общих зонах.`,
        `Бесплатная сеть Wi-Fi охватывает всю территорию отеля. Будь то отдых в номере, обед в ресторане или встреча в конференц-зале — интернет всегда с вами.`,
      ],
    },
  };

  const T = copy[code as "UZ" | "EN" | "RU"] || copy.UZ;

  return (
    <ServiceSplit title={T.title} image="/assets/services/wifi.webp">
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
