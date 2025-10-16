import React from "react";
import { LangCode } from "../../../i18n/lang";
import { formatPriceUZS } from "../../../data/rooms";

type Props = {
  price: number;
  lang: LangCode;
  perNightLabel: string;  // e.g., "/ kecha", "/ ночь", "/ night"
  ctaLabel: string;       // e.g., "Band qilish"
  onBook: () => void;
  stickyTopClass?: string; // default top-20
};

export default function BookingAside({
  price,
  lang,
  perNightLabel,
  ctaLabel,
  onBook,
  stickyTopClass = "top-20",
}: Props) {
  return (
    <aside className="lg:col-span-1">
      <div className={`sticky ${stickyTopClass}`}>
        <div className="rounded-2xl bg-white ring-1 ring-gray-100 p-4 shadow-sm">
          <div className="text-2xl font-bold text-gray-900">
            {formatPriceUZS(price, lang)}
            <span className="ml-1 text-sm font-medium text-gray-500">{perNightLabel}</span>
          </div>
          <button
            className="mt-4 w-full rounded-xl bg-blue-600 text-white font-semibold py-3 shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:bg-blue-700 transition"
            onClick={onBook}
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </aside>
  );
}
