import { LangCode } from "../lang";

/** Use readonly arrays to match `as const` literals */
export interface AboutCopy {
  pageTitle: string;
  galleryAlt: {
    hero: string;
    i1: string; i2: string; i3: string; i4: string;
    m1: string; m2: string; m3: string; m4: string;
  };
  sec1: {
    title: string;
    line1: string; line2: string; line3: string; line4: string;
    amenities: ReadonlyArray<string>;
  };
  sec2: {
    title: string;
    p1: string; p2: string;
  };
  sec3: {
    title: string;
    features: ReadonlyArray<string>;
  };
  booking: {
    title: string;
    checkin: string; checkout: string; guests: string; btn: string;
    guestOptions: ReadonlyArray<string>;
  };
}

export const ABOUT_COPY = {
  UZ: {
    pageTitle: "S-Namangan mehmonxonasi haqida",
    galleryAlt: {
      hero: "S-Namangan mehmonxonasi — asosiy ko‘rinish",
      i1: "Mehmonxona interyeri 1",
      i2: "Mehmonxona interyeri 2",
      i3: "Mehmonxona interyeri 3",
      i4: "Mehmonxona interyeri 4",
      m1: "Interyer 1",
      m2: "Interyer 2",
      m3: "Interyer 3",
      m4: "Interyer 4",
    },
    sec1: {
      title: "S- Namangan mehmonxonasi",
      line1: "2 mehmon · Studio · 2 ta yotoq · 1 ta hammom",
      line2: "O‘z-o‘zidan kirish — Kalit orqali mustaqil kirish mumkin.",
      line3:
        "Ajoyib restoranlar yaqin — Mehmonlar yaqin atrofda juda yaxshi ovqatlanish maskanlari borligini aytishgan.",
      line4:
        "16-oktabrgacha bepul bekor qilish — Fikringiz o‘zgarsa, to‘liq pul qaytariladi.",
      amenities: [
        "Shkaf, kir yuvish mashinasi, kiyim quritgich, dazmol taxtasi va dazmol",
        "Shaxsiy hammom (dush yoki vanna bilan)",
        "Fen va boshqa gigiena vositalari",
        "Yuqori tezlikdagi internet va kabel TV",
        "42 dyuymli “Smart TV”",
        "Ortopedik matraslar, qorong‘ulatkich pardalar",
      ],
    },
    sec2: {
      title: "S-Namangan mehmonxonasi Qulaylik va Shinamlik Maskani!",
      p1: `S-Namangan mehmonxonasi – Namangan shahrining markazida joylashgan zamonaviy, qulay va mehmonlarga do‘stona muhit yaratadigan maskan. Mehmonxona 2007 yildan beri faoliyat yuritib kelmoqda va bugungi kunda shahar mehmonlari uchun eng tanilgan turar joylardan biridir.`,
      p2: "Bizning maqsadimiz – har bir mehmonimizga o‘zini uyidagidek erkin va qulay his qilish imkonini yaratish.",
    },
    sec3: {
      title: "Namangan markazida qulaylik va mehmondo‘stlik",
      features: [
        '🍽 Nonushta "Bufet"',
        "🅿 Avtoturargoh",
        "🏊‍♂️ Yozgi Basseyn",
        "📶 Wi-Fi",
        "🧖 Sauna",
        "🕊 Qushlar",
      ],
    },
    booking: {
      title: "Xonalarni band qilish",
      checkin: "Kelish sanasi",
      checkout: "Ketish sanasi",
      guests: "Mehmonlar",
      btn: "Band qilish",
      guestOptions: ["1", "2", "3", "4+"],
    },
  },

  EN: {
    pageTitle: "About S-Namangan Hotel",
    galleryAlt: {
      hero: "S-Namangan Hotel — main view",
      i1: "Hotel interior 1",
      i2: "Hotel interior 2",
      i3: "Hotel interior 3",
      i4: "Hotel interior 4",
      m1: "Interior 1",
      m2: "Interior 2",
      m3: "Interior 3",
      m4: "Interior 4",
    },
    sec1: {
      title: "S-Namangan Hotel",
      line1: "2 guests · Studio · 2 beds · 1 bathroom",
      line2: "Self check-in — Key access available.",
      line3:
        "Great restaurants nearby — Guests say there are excellent dining options around.",
      line4:
        "Free cancellation until October 16 — Full refund if you change your mind.",
      amenities: [
        "Wardrobe, washing machine, dryer, ironing board and iron",
        "Private bathroom (with shower or bathtub)",
        "Hairdryer and complimentary toiletries",
        "High-speed internet and cable TV",
        '42" Smart TV',
        "Orthopedic mattresses, blackout curtains",
      ],
    },
    sec2: {
      title: "S-Namangan Hotel — A Place of Comfort and Warmth!",
      p1: `S-Namangan Hotel is a modern and welcoming place located in the heart of Namangan. Operating since 2007, it has become one of the city’s most recognized accommodations.`,
      p2: "Our goal is to make every guest feel as free and comfortable as at home.",
    },
    sec3: {
      title: "Comfort & hospitality in the heart of Namangan",
      features: [
        '🍽 Breakfast "Buffet"',
        "🅿 Parking Space",
        "🏊‍♂️ Summer Pool",
        "📶 Wi-Fi",
        "🧖 Sauna",
        "🕊 Birds",
      ],
    },
    booking: {
      title: "Book Rooms",
      checkin: "Check-in date",
      checkout: "Check-out date",
      guests: "Guests",
      btn: "Book now",
      guestOptions: ["1", "2", "3", "4+"],
    },
  },

  RU: {
    pageTitle: "Об отеле S-Namangan",
    galleryAlt: {
      hero: "Отель S-Namangan — главный вид",
      i1: "Интерьер отеля 1",
      i2: "Интерьер отеля 2",
      i3: "Интерьер отеля 3",
      i4: "Интерьер отеля 4",
      m1: "Интерьер 1",
      m2: "Интерьер 2",
      m3: "Интерьер 3",
      m4: "Интерьер 4",
    },
    sec1: {
      title: "Отель S-Namangan",
      line1: "2 гостя · студия · 2 кровати · 1 ванная",
      line2: "Самостоятельное заселение — доступ по ключу.",
      line3:
        "Отличные рестораны рядом — гости отмечают хорошие места для еды неподалёку.",
      line4:
        "Бесплатная отмена до 16 октября — полный возврат при изменении планов.",
      amenities: [
        "Шкаф, стиральная машина, сушилка, гладильная доска и утюг",
        "Собственная ванная (с душем или ванной)",
        "Фен и туалетные принадлежности",
        "Высокоскоростной интернет и кабельное ТВ",
        '42" Smart TV',
        "Ортопедические матрасы, светонепроницаемые шторы",
      ],
    },
    sec2: {
      title: "Отель S-Namangan — место уюта и комфорта!",
      p1: `Отель S-Namangan — современное и гостеприимное место в центре Намангана. С 2007 года остаётся одним из самых узнаваемых вариантов размещения.`,
      p2: "Наша цель — чтобы каждый гость чувствовал себя свободно и комфортно, как дома.",
    },
    sec3: {
      title: "Комфорт и гостеприимство в центре Намангана",
      features: [
        "🍽 Завтрак «Шведский стол»",
        "🅿 Парковка",
        "🏊‍♂️ Летний бассейн",
        "📶 Wi-Fi",
        "🧖 Сауна",
        "🕊 Птицы",
      ],
    },
    booking: {
      title: "Бронирование номеров",
      checkin: "Дата заезда",
      checkout: "Дата выезда",
      guests: "Гости",
      btn: "Забронировать",
      guestOptions: ["1", "2", "3", "4+"],
    },
  },
} as const satisfies Record<LangCode, AboutCopy>;
