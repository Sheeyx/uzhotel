// src/components/booking/BookingModal.tsx
import React from "react";
import Select, { SingleValue } from "react-select";
import { PhoneInput } from "react-international-phone";
import { formatPriceUZS, Room, getRoomPrice } from "../data/rooms";
import { CountryOption } from "../types/booking";
import { useLanguage } from "../i18n/LanguageContext";
import { getBookingCopy } from "../i18n/components/bookingModal";
import { getCountryOptionsWithFlags } from "../utils/countries";
import { useBookingForm } from "../hooks/useBookingForm";

import { sendBookingEmail } from "../services/api/email";
import { CalendarIcon } from "./icons/Icons";
import BotService from "../services/api/botsend";

/* Create a single instance of BotService */
const botService = new BotService();

/* ✅ Success Dialog */
function SuccessDialog({
  onOk,
  title,
  message,
  okLabel,
}: { onOk: () => void; title: string; message: string; okLabel: string }) {
  return (
    <div className="fixed inset-0 z-[120] grid place-items-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" aria-hidden="true" />
      <div
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-gray-100 p-6 animate-[fadeIn_200ms_ease-out]"
        role="dialog"
        aria-labelledby="success-title"
        aria-modal="true"
      >
        <div
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: "#00971e", color: "#fff" }}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h3 id="success-title" className="text-xl font-semibold text-center text-black">
          {title}
        </h3>
        <p className="mt-2 text-center text-gray-600">{message}</p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onOk}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold text-white shadow hover:opacity-90 focus:outline-none focus:ring-2"
            style={{ backgroundColor: "#2F80ED" }}
            autoFocus
          >
            {okLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
  room: Room;
  onSubmit?: (p: any) => void;
  toEmail?: string;
};

export default function BookingModal({ open, onClose, room, onSubmit, toEmail }: Props) {
  const { code } = useLanguage();
  const T = getBookingCopy(code);

  const {
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
    setFirstName,
    setSecondName,
    setEmail,
    setNationality,
    setPhone,
    setCheckIn,
    setCheckOut,
    setGuestCount,
    setSending,
    handleLocalSubmit,
  } = useBookingForm({ room, onSubmit });

  const [showSuccess, setShowSuccess] = React.useState(false);
  const countryOptions = React.useMemo(() => getCountryOptionsWithFlags(), []);

  // ✅ hooks before return
  const checkInRef = React.useRef<HTMLInputElement>(null);
  const checkOutRef = React.useRef<HTMLInputElement>(null);

  function openPicker(el: HTMLInputElement | null) {
    if (!el) return;
    if (typeof (el as any).showPicker === "function") (el as any).showPicker();
    else el.focus();
  }

  if (!open) return null;

  // 🇺🇿 or 🌍 choose correct price
  const isForeignGuest = nationality && nationality.value !== "UZ";
  const perNightPrice = getRoomPrice(room, Boolean(isForeignGuest));

  const defaultPhoneCountry = code === "RU" ? "ru" : code === "EN" ? "us" : "uz";

  const resetForm = () => {
    setFirstName("");
    setSecondName("");
    setEmail("");
    setNationality(null);
    setPhone("");
    setCheckIn("");
    setCheckOut("");
    setGuestCount(1);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = handleLocalSubmit();
    if (!payload) return;

    try {
      setSending(true);

      // 🔵 send to Telegram bot via BotService
      await botService.sendBookingToBot({
        roomTitle: room.title,
        guestName: `${firstName} ${secondName}`.trim(),
        phone,
        email,
        nationality: nationality ? (nationality.label || (nationality as any).value) : null,
        checkin: checkIn,
        checkout: checkOut,
        nights,
        guests: guestCount,
        totalPrice,
      });

      // 📨 send email
      await sendBookingEmail(
        {
          roomTitle: room.title,
          guestName: `${firstName} ${secondName}`.trim(),
          phone,
          email,
          nationality: nationality ? (nationality.label || (nationality as any).value) : null,
          checkin: checkIn,
          checkout: checkOut,
          nights,
          guests: guestCount,
          totalPrice,
        },
        toEmail
      );

      resetForm();
      setShowSuccess(true);
    } catch (err) {
      console.error("Booking submit error:", err);
      window.alert(
        code === "RU"
          ? "К сожалению, произошла ошибка. Попробуйте позже."
          : code === "EN"
          ? "An error occurred. Please try again later."
          : "Xatolik yuz berdi. Keyinroq qayta urinib ko‘ring."
      );
    } finally {
      setSending(false);
    }
  }

  const handleSuccessOk = () => {
    setShowSuccess(false);
    onClose();
  };

  const inputStyle =
    "mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-800 placeholder-gray-400 " +
    "focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED] transition-all duration-200 outline-none";

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={showSuccess ? undefined : onClose}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid place-items-center px-4 py-8">
        <div className="w-full max-w-2xl rounded-2xl bg-white ring-1 ring-gray-100 shadow-xl relative">
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h2 className="text-lg font-semibold text-[#757575]">{T.title}</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100 disabled:opacity-50"
              aria-label="Close"
              type="button"
              disabled={sending || showSuccess}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="px-5 py-4 space-y-5">
            {/* Selected room + price */}
            <div className="rounded-xl bg-gray-50 p-3 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">{T.selectedRoom}</div>
                <div className="font-semibold">{room.title}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  {isForeignGuest
                    ? code === "RU"
                      ? "Цена для иностранных гостей"
                      : code === "EN"
                      ? "Price for foreign guests"
                      : "Xorijiy mehmonlar uchun narx"
                    : code === "RU"
                    ? "Цена для граждан Узбекистана"
                    : code === "EN"
                    ? "Price for Uzbekistan citizens"
                    : "O‘zbekiston fuqarolari uchun narx"}
                </div>
                <div className="font-bold">
                  {formatPriceUZS(perNightPrice, code)}{" "}
                  <span className="text-sm text-gray-500">{T.perNight}</span>
                </div>
              </div>
            </div>

            {/* Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#757575]">{T.firstName}</label>
                <input
                  className={inputStyle}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={code === "RU" ? "Иван" : code === "EN" ? "John" : "Ali"}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#757575]">{T.lastName}</label>
                <input
                  className={inputStyle}
                  value={secondName}
                  onChange={(e) => setSecondName(e.target.value)}
                  placeholder={code === "RU" ? "Иванов" : code === "EN" ? "Doe" : "Valiyev"}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#757575]">{T.emailOpt}</label>
              <input
                type="email"
                className={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  code === "RU" ? "ivan@example.com" : code === "EN" ? "john@example.com" : "ali@example.com"
                }
              />
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-sm font-medium text-[#757575]">{T.nationality}</label>
              <Select
                className="mt-1"
                classNamePrefix="select"
                options={countryOptions}
                value={nationality}
                onChange={(opt: SingleValue<CountryOption>) => setNationality(opt ?? null)}
                placeholder={T.countryPlaceholder}
                isSearchable
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#757575]">{T.phone}</label>
              <div className="mt-1">
                <PhoneInput
                  defaultCountry={defaultPhoneCountry as any}
                  value={phone}
                  onChange={setPhone}
                  className="ip-input w-full"
                  inputClassName={inputStyle}
                  // @ts-expect-error
                  dropdownClassName="z-[110]"
                />
              </div>
            </div>

            {/* Dates + guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
              <div>
                <label className="block text-sm font-medium text-[#757575]">{T.checkIn}</label>
                <div className="relative">
                  <input
                    ref={checkInRef}
                    type="date"
                    className={`${inputStyle} pr-11`}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => openPicker(checkInRef.current)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center rounded-md p-1 hover:bg-gray-100"
                    aria-label={T.checkIn}
                  >
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#757575]">{T.checkOut}</label>
                <div className="relative">
                  <input
                    ref={checkOutRef}
                    type="date"
                    className={`${inputStyle} pr-11`}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    min={checkIn || undefined}
                  />
                  <button
                    type="button"
                    onClick={() => openPicker(checkOutRef.current)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center rounded-md p-1 hover:bg-gray-100"
                    aria-label={T.checkOut}
                  >
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#757575]">{T.guests}</label>
                <input
                  type="number"
                  min={1}
                  className={inputStyle}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Math.max(1, Number(e.target.value) || 1))}
                  required
                />
              </div>
            </div>

            {/* Summary */}
            <div className="rounded-xl bg-gray-50 p-3 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                {nights > 0
                  ? `${nights} ${T.nightsUnit} × ${formatPriceUZS(perNightPrice, code)}`
                  : T.nightsUnknown}
              </div>
              <div className="text-lg font-bold">
                {nights > 0 ? `${formatPriceUZS(nights * perNightPrice, code)}` : formatPriceUZS(0, code)}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-1">
              <button
                type="button"
                className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={onClose}
                disabled={sending || showSuccess}
              >
                {T.cancel}
              </button>
              <button
                type="submit"
                disabled={sending || showSuccess}
                className="rounded-lg text-white font-semibold px-5 py-2 shadow disabled:opacity-60"
                style={{ backgroundColor: "#2F80ED" }}
              >
                {sending ? T.confirming : T.confirm}
              </button>
            </div>
          </form>

          {showSuccess && (
            <SuccessDialog onOk={handleSuccessOk} title={T.successTitle} message={T.successMessage} okLabel={T.ok} />
          )}
        </div>
      </div>
    </div>
  );
}
