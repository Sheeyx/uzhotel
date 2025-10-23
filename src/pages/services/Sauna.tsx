// src/pages/services/Sauna.tsx
import React from "react";
import ServiceGallery from "../../components/ServiceGallery";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Sauna() {
  const { code } = useLanguage();

  const copy = {
    UZ: {
      title: "Sauna",
      lead: `“S-Namangan” mehmonxonasi mehmonlari uchun bepul sauna xizmati taqdim etadi. Siz bu yerda suzib, kuningizni tetik va sog‘lom boshlashingiz yoki issiq kunda salqinlikdan bahramand bo‘lishingiz mumkin. Sauna har kuni toza saqlanadi va xavfsizlik qoidalariga qat’iy rioya qilinadi.`,
      bullets: [
        "Issiq kunlarda salqinlik, tetiklik va maroqli hordiq",
        "Toza suv, qulay shezlonglar va bolalar uchun xavfsiz maydon",
        "Siz va yaqinlaringiz uchun mukammal dam olish maskani",
      ],
    },
    EN: {
      title: "Sauna",
      lead: `S-Namangan Hotel offers guests a free sauna service. Here you can swim, refresh your body, and start your day with energy, or simply enjoy a cool, relaxing time on a hot day. The sauna is cleaned daily and strictly follows safety standards.`,
      bullets: [
        "Refreshing and relaxing experience on hot days",
        "Clean water, comfortable loungers, and a safe area for children",
        "A perfect relaxation spot for you and your loved ones",
      ],
    },
    RU: {
      title: "Сауна",
      lead: `Отель S-Namangan предлагает своим гостям бесплатное посещение сауны. Здесь вы можете поплавать, начать день бодро и с пользой для здоровья или просто насладиться прохладой в жаркий день. Сауна ежедневно очищается и строго соблюдает правила безопасности.`,
      bullets: [
        "Освежающее и расслабляющее время в жаркие дни",
        "Чистая вода, удобные шезлонги и безопасная зона для детей",
        "Идеальное место отдыха для вас и ваших близких",
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
        "/assets/services/sauna.png",
        "/assets/services/sauna1.png",
        "/assets/services/sauna2.png",
        "/assets/services/sauna3.png",
        "/assets/services/sauna4.png",
      ]}
    />
  );
}
