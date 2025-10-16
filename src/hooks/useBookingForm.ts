// src/hooks/useBookingForm.ts
import { useMemo, useState } from "react";
import type { Room } from "../data/rooms";
import type { BookingPayload, CountryOption } from "../types/booking";
import { diffNights } from "../utils/date";

type Args = {
  room: Room;
  onSubmit?: (payload: BookingPayload) => void;
};

export function useBookingForm({ room, onSubmit }: Args) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");

  const [nationality, setNationality] = useState<CountryOption | null>(null);
  const [phone, setPhone] = useState("");

  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guestCount, setGuestCount] = useState(1);

  const [sending, setSending] = useState(false);

  const nights = useMemo(
    () => diffNights(checkIn, checkOut),
    [checkIn, checkOut]
  );
  const totalPrice = useMemo(
    () => nights * room.price,
    [nights, room.price]
  );

  function validate(): string | null {
    if (!firstName.trim()) return "Ism majburiy.";
    if (!secondName.trim()) return "Familiya majburiy.";
    if (!phone.trim()) return "Telefon raqami majburiy.";
    if (!nationality) return "Fuqarolikni tanlang.";
    if (!checkIn || !checkOut) return "Kelish/ketish sanalarini tanlang.";
    if (nights <= 0)
      return "Ketish sanasi kelish sanasidan keyin bo‘lishi kerak.";
    if (guestCount < 1) return "Mehmonlar soni 1 dan kam bo‘lolmaydi.";
    return null;
  }

  function buildPayload(): BookingPayload {
    return {
      roomId: room.id,
      roomTitle: room.title,
      pricePerNight: room.price,
      firstName,
      secondName,
      email: email.trim() || null,
      nationality: {
        code: nationality!.value,
        label: nationality!.label,
      },
      phoneE164: phone,
      dates: { checkIn, checkOut, nights },
      guests: guestCount,
      totalPrice,
      createdAt: new Date().toISOString(),
    };
  }

  function handleLocalSubmit(): BookingPayload | null {
    const err = validate();
    if (err) {
      alert(err);
      return null;
    }
    const payload = buildPayload();
    onSubmit?.(payload);
    return payload;
  }

  return {
    // state
    firstName,
    secondName,
    email,
    nationality,
    phone,
    checkIn,
    checkOut,
    guestCount,
    sending,
    nights,
    totalPrice,

    // setters
    setFirstName,
    setSecondName,
    setEmail,
    setNationality,
    setPhone,
    setCheckIn,
    setCheckOut,
    setGuestCount,
    setSending,

    // actions
    handleLocalSubmit,
  };
}
