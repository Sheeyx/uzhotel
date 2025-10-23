import { LangCode } from "../lang";

export interface GalleryCopy {
  title: string;
  subtitle: string;
  aria: {
    open: (idx: number) => string;
    count: (idx: number, total: number) => string;
    dialog: string;
    close: string;
    prev: string;
    next: string;
    imgAlt: (idx: number) => string;
  };
}

export const GALLERY_COPY = {
  UZ: {
    title: "Foto galereya",
    subtitle:
      "Bu bizning mehmonxonamiz galereyasi — bu yerda siz mehmonxonamizdagi qulayliklar va chiroyli muhitdan lavhalarni ko‘rishingiz mumkin.",
    aria: {
      open: (i) => `Rasmni kattalashtirish ${i}`,
      count: (i, t) => `${i} / ${t}`,
      dialog: "Rasmni ko‘rish oynasi",
      close: "Yopish",
      prev: "Oldingi rasm",
      next: "Keyingi rasm",
      imgAlt: (i) => `Galereya rasmi ${i}`,
    },
  },
  EN: {
    title: "Photo Gallery",
    subtitle:
      "This is the gallery of our hotel — explore the comfort, elegance, and atmosphere that make S-Namangan special.",
    aria: {
      open: (i) => `Open image ${i} in lightbox`,
      count: (i, t) => `${i} / ${t}`,
      dialog: "Image preview dialog",
      close: "Close",
      prev: "Previous image",
      next: "Next image",
      imgAlt: (i) => `Gallery image ${i}`,
    },
  },
  RU: {
    title: "Фотогалерея",
    subtitle:
      "Это галерея нашего отеля — здесь вы можете увидеть уют, красоту и атмосферу S-Namangan.",
    aria: {
      open: (i) => `Открыть изображение ${i} в лайтбоксе`,
      count: (i, t) => `${i} / ${t}`,
      dialog: "Просмотр изображения",
      close: "Закрыть",
      prev: "Предыдущее изображение",
      next: "Следующее изображение",
      imgAlt: (i) => `Изображение галереи ${i}`,
    },
  },
} as const satisfies Record<LangCode, GalleryCopy>;
