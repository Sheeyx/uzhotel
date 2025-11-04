// src/pages/services/Sauna.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Sauna() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: "Sauna",
      lead: `Bir necha soatlik osoyishtalik, dam olish va stressdan xalos bo‘lish — bularning barchasini «Sodiq-Namangan» mehmonxonasidagi sauna orqali his qilishingiz mumkin. Fin, turk va fito saunalari hamda zamonaviy isitish va filtrlash tizimiga ega yopiq basseyn sizga tetiklik va sog‘lomlik bag‘ishlaydi. Sauna har kuni faoliyat yuritadi va xavfsizlik qoidalariga qat’iy amal qiladi.`,
      bullets: [
        "Sog‘lomlashtiruvchi va tinchlantiruvchi dam olish muhitiga ega.",
        "Toza suv, qulay shezlonglar va bolalar uchun xavfsiz zona.",
        "Mukammal hordiq uchun ideal joy.",
      ],
    },
    EN: {
      title: "Sauna",
      lead: `Give yourself a few hours of peace, relaxation, and rejuvenation — all of this awaits you in the sauna at the «Sodiq-Namangan» Hotel. Finnish, Turkish, and herbal (phyto) saunas, along with an indoor pool equipped with a modern heating and filtration system, will help you refresh your body and mind. The sauna operates daily and strictly follows safety standards.`,
      bullets: [
        "A relaxing and health-improving atmosphere.",
        "Clean water, comfortable loungers, and a safe area for children.",
        "An ideal place for a perfect rest.",
      ],
    },
    RU: {
      title: "Сауна",
      lead: `Подарить себе несколько часов безмятежного спокойствия, расслабиться и снять стресс, оздоровится и получить заряд бодрости позволит Вам сауна (финская, турецкая, фито-бочка), крытый бассейн с современной системой подогрева и фильтрации воды. Сауна работает каждый день и строго соблюдает правила безопасности. Почему стоит выбрать эту услугу?`,
      bullets: [
        "Оздоровляющее и расслабляющее времяпровождение.",
        "Чистая вода, удобные шезлонги и безопасная зона для детей.",
        "Идеальное место для отдыха.",
      ],
    },
  };

  const T = copy[code as "UZ" | "EN" | "RU"] || copy.UZ;

  return (
    <ServiceGallery
      title={T.title}
      lead={T.lead}
      bullets={T.bullets}
      images={[
        "/assets/services/sauna.webp",
        "/assets/services/sauna1.webp",
        "/assets/services/sauna2.webp",
        "/assets/services/sauna3.webp",
        "/assets/services/sauna4.webp",
      ]}
    />
  );
}
