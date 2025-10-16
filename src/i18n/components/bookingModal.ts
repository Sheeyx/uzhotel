// src/i18n/components/bookingModal.ts

import { LangCode } from "../lang";

export type BookingModalCopy = {
  title: string;
  selectedRoom: string;
  price: string;
  perNight: string;

  firstName: string;
  lastName: string;
  emailOpt: string;
  nationality: string;
  countryPlaceholder: string;
  phone: string;

  checkIn: string;
  checkOut: string;
  guests: string;

  nightsUnit: string;         // "kecha" | "ночей" | "night(s)"
  nightsUnknown: string;      // "Kecha soni" | ...
  cancel: string;
  confirm: string;
  confirming: string;

  successTitle: string;
  successMessage: string;
  ok: string;
};

export const BOOKING_COPY: Record<LangCode, BookingModalCopy> = {
  UZ: {
    title: "Xonani band qilish",
    selectedRoom: "Tanlangan xona",
    price: "Narx",
    perNight: "/ kecha",

    firstName: "Ism *",
    lastName: "Familiya *",
    emailOpt: "Email (ixtiyoriy)",
    nationality: "Fuqarolik *",
    countryPlaceholder: "Davlatni tanlang",
    phone: "Telefon *",

    checkIn: "Kelish sanasi *",
    checkOut: "Ketish sanasi *",
    guests: "Mehmonlar *",

    nightsUnit: "kecha",
    nightsUnknown: "Kecha soni",
    cancel: "Bekor qilish",
    confirm: "Tasdiqlash",
    confirming: "Yuborilmoqda...",

    successTitle: "Bron muvaffaqiyatli yuborildi",
    successMessage: "Bron ma’lumoti emailga yuborildi. Rahmat!",
    ok: "OK",
  },

  RU: {
    title: "Бронирование номера",
    selectedRoom: "Выбранный номер",
    price: "Цена",
    perNight: "/ ночь",

    firstName: "Имя *",
    lastName: "Фамилия *",
    emailOpt: "Email (необязательно)",
    nationality: "Гражданство *",
    countryPlaceholder: "Выберите страну",
    phone: "Телефон *",

    checkIn: "Заезд *",
    checkOut: "Выезд *",
    guests: "Гости *",

    nightsUnit: "ночей",
    nightsUnknown: "Количество ночей",
    cancel: "Отмена",
    confirm: "Подтвердить",
    confirming: "Отправка...",

    successTitle: "Бронь успешно отправлена",
    successMessage: "Информация о брони отправлена на email. Спасибо!",
    ok: "OK",
  },

  EN: {
    title: "Book this room",
    selectedRoom: "Selected room",
    price: "Price",
    perNight: "/ night",

    firstName: "First name *",
    lastName: "Last name *",
    emailOpt: "Email (optional)",
    nationality: "Nationality *",
    countryPlaceholder: "Select a country",
    phone: "Phone *",

    checkIn: "Check-in *",
    checkOut: "Check-out *",
    guests: "Guests *",

    nightsUnit: "night(s)",
    nightsUnknown: "Number of nights",
    cancel: "Cancel",
    confirm: "Confirm",
    confirming: "Sending...",

    successTitle: "Booking sent successfully",
    successMessage: "Your booking details were emailed. Thank you!",
    ok: "OK",
  },
};

export const getBookingCopy = (code: LangCode) => BOOKING_COPY[code];
