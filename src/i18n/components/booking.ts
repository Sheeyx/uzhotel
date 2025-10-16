// src/i18n/components/booking.ts

import { LangCode } from "../lang";

export type BookingCopy = {
  checkInLabel: string;
  checkOutLabel: string;
  guestsLabel: string;
  submit: string;
  alertTitle: string;
  alertCheckIn: string;
  alertCheckOut: string;
  alertGuests: string;
};

export const BOOKING_COPY: Record<LangCode, BookingCopy> = {
  UZ: {
    checkInLabel: "Kelish sanasi",
    checkOutLabel: "Ketish sanasi",
    guestsLabel: "Mehmonlar",
    submit: "Band qilish",
    alertTitle: "Band qilish:",
    alertCheckIn: "Kelish:",
    alertCheckOut: "Ketish:",
    alertGuests: "Mehmonlar:",
  },
  RU: {
    checkInLabel: "Дата заезда",
    checkOutLabel: "Дата выезда",
    guestsLabel: "Гости",
    submit: "Забронировать",
    alertTitle: "Бронирование:",
    alertCheckIn: "Заезд:",
    alertCheckOut: "Выезд:",
    alertGuests: "Гостей:",
  },
  EN: {
    checkInLabel: "Check-in date",
    checkOutLabel: "Check-out date",
    guestsLabel: "Guests",
    submit: "Book now",
    alertTitle: "Reservation:",
    alertCheckIn: "Check-in:",
    alertCheckOut: "Check-out:",
    alertGuests: "Guests:",
  },
};
