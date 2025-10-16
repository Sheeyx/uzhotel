// src/types/booking.ts
import { Room } from "../data/rooms";

export type CountryOption = { value: string; label: string };

export type BookingPayload = {
  roomId: Room["id"];
  roomTitle: Room["title"];
  pricePerNight: Room["price"];
  firstName: string;
  secondName: string;
  email: string | null;
  nationality: { code: string; label: string };
  phoneE164: string;
  dates: { checkIn: string; checkOut: string; nights: number };
  guests: number;
  totalPrice: number;
  createdAt: string; // ISO
};
