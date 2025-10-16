// src/pages/services/Wifi.tsx
import React from "react";
import ServiceSplit from "../../components/ServiceSplit";

export default function Wifi() {
  return (
    <ServiceSplit title="Wi-Fi" image="/assets/services/wifi.png">
      <p className="font-inter mt-4 text-[16px] leading-[32px] font-normal text-black">
        S-Namangan mehmonxonasi barcha mehmonlari uchun yuqori tezlikdagi bepul Wi-Fi xizmatini taqdim etadi.
        Siz xonangizda, lobbida, restoran va boshqa umumiy joylarda internetdan bemalol foydalanishingiz mumkin.
      </p>
      <p className="mt-3 font-inter text-[16px] leading-[32px] font-normal text-black">
        Har bir mehmon uchun bepul taqdim etiladigan Wi-Fi tarmog‘i butun mehmonxona hududini qamrab olgan.
        Xoh xonangizda dam olayotgan bo‘ling, xoh restoranda ovqatlaning yoki majlis zalida uchrashuv o‘tkazing —
        internet har doim siz bilan birga.
      </p>
    </ServiceSplit>
  );
}
