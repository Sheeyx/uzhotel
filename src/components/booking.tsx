// src/components/Booking.tsx
import React, { useMemo, useRef, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom"; // ⬅️ add
import { CalendarIcon } from "./icons/Icons";
import { useLanguage } from "../i18n/LanguageContext";
import { BOOKING_COPY } from "../i18n/components/booking";
import { LangCode } from "../i18n/lang";

export default function Booking() {
  const { code } = useLanguage(); // "UZ" | "RU" | "EN"
  const T = BOOKING_COPY[code];
  const navigate = useNavigate(); // ⬅️ add

  // Helpers
  const toLocalISO = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`; // yyyy-mm-dd
  };
  const addDays = (d: Date, n: number) => {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    x.setHours(0, 0, 0, 0);
    return x;
  };

  const LOCALE: Record<LangCode, string> = { UZ: "uz-UZ", RU: "ru-RU", EN: "en-US" };
  const fmt = (val: string) =>
    new Intl.DateTimeFormat(LOCALE[code], { dateStyle: "medium" }).format(
      new Date(val + "T00:00:00")
    );

  // Today (normalized)
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // State
  const [checkIn, setCheckIn] = useState<string>(toLocalISO(today));
  const [checkOut, setCheckOut] = useState<string>(toLocalISO(addDays(today, 1)));
  const [guests, setGuests] = useState<number>(2);

  // Refs to inputs for showPicker()
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  // Derived mins
  const minCheckIn = toLocalISO(today);
  const minCheckOut = useMemo(() => {
    const base = new Date(checkIn);
    return toLocalISO(addDays(base, 1)); // at least 1 night
  }, [checkIn]);

  const handleCheckIn = (val: string) => {
    setCheckIn(val);
    const minOut = toLocalISO(addDays(new Date(val), 1));
    if (checkOut < minOut) setCheckOut(minOut);
  };

  const openPicker = (el: HTMLInputElement | null) => {
    if (!el) return;
    if (typeof (el as any).showPicker === "function") (el as any).showPicker();
    else el.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic guard: ensure at least 1 night
    if (new Date(checkOut) <= new Date(checkIn)) {
      // Optional: localize this in your i18n if you want
      alert(`${T.checkOutLabel} must be after ${T.checkInLabel}.`);
      return;
    }

    // Navigate to /rooms with query params
    const search = createSearchParams({
      checkin: checkIn,
      checkout: checkOut,
      guests: String(guests),
    }).toString();

    navigate({ pathname: "/rooms", search });
  };

  return (
    <div className="-mt-10 w-full relative z-20">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-3 md:p-6 shadow-xl border border-gray-100">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {/* Check-in */}
          <div>
            <label htmlFor="checkin" className="mb-1 block text-xs font-medium text-gray-700">
              {T.checkInLabel}
            </label>
            <div className="relative">
              <input
                id="checkin"
                ref={checkInRef}
                type="date"
                value={checkIn}
                min={minCheckIn}
                onChange={(e) => handleCheckIn(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 pr-10 py-2 text-sm outline-none focus:border-blue-500 appearance-none"
                aria-label={T.checkInLabel}
              />
              <button
                type="button"
                onClick={() => openPicker(checkInRef.current)}
                className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center rounded-md p-1 hover:bg-gray-100 focus:outline-none"
                aria-label={T.checkInLabel}
              >
                <CalendarIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Check-out */}
          <div>
            <label htmlFor="checkout" className="mb-1 block text-xs font-medium text-gray-700">
              {T.checkOutLabel}
            </label>
            <div className="relative">
              <input
                id="checkout"
                ref={checkOutRef}
                type="date"
                value={checkOut}
                min={minCheckOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 pr-10 py-2 text-sm outline-none focus:border-blue-500 appearance-none"
                aria-label={T.checkOutLabel}
              />
              <button
                type="button"
                onClick={() => openPicker(checkOutRef.current)}
                className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center rounded-md p-1 hover:bg-gray-100 focus:outline-none"
                aria-label={T.checkOutLabel}
              >
                <CalendarIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">{T.guestsLabel}</label>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 [&::-ms-expand]:hidden"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                aria-label={T.guestsLabel}
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full rounded-lg bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              {T.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
