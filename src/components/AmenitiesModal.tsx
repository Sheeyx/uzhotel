// src/components/AmenitiesModal.tsx
import React from "react";
import {
  FaDog,
  FaTv,
  FaPhoneAlt,
  FaWifi,
  FaSnowflake,
  FaLock,
  FaShieldAlt,
  FaLightbulb,
  FaBed,
  FaSoap,
  FaShower,
  FaToilet,
  FaPumpSoap,
  FaSpa,
  FaTshirt,
  FaHotTub,
  FaTree,
  FaBinoculars,
  FaCity,
} from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import { getAmenitiesCopy, AmenityKey } from "../i18n/components/amenities";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ICONS: Record<AmenityKey, React.ReactNode> = {
  ac: <FaSnowflake />,
  lamp: <FaLightbulb />,
  e_lock: <FaLock />,
  security: <FaShieldAlt />,

  toiletries: <FaPumpSoap />,
  towels: <FaTshirt />,
  bath: <FaShower />,
  soap: <FaSoap />,
  slippers: <FaTshirt />,
  premium_toiletries: <FaPumpSoap />,
  toilet: <FaToilet />,
  sink: <FaSpa />,
  jacuzzi: <FaHotTub />,

  king_bed: <FaBed />,
  orthopedic_mattress: <FaBed />,

  tv: <FaTv />,
  smart_tv: <FaTv />,
  flat_tv: <FaTv />,

  wifi: <FaWifi />,
  internet: <FaWifi />,
  phone: <FaPhoneAlt />,

  view_courtyard: <FaTree />,
  view_garden: <FaBinoculars />,
  view_city: <FaCity />,

  no_pets: <FaDog />,
};

export default function AmenitiesModal({ open, onClose }: Props) {
  const { code } = useLanguage();
  const T = getAmenitiesCopy(code);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120]">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid place-items-center px-4 py-8">
        <div className="w-full max-w-5xl rounded-2xl bg-white ring-1 ring-gray-100 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">
              {T.modalTitle}
            </h3>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100"
              aria-label={T.close}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          {/* main scroll content */}
          <div className="max-h-[70vh] overflow-auto px-6 py-5">
            {/* even columns layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {T.categories.map((cat) => (
                <div key={cat.id} className="break-inside-avoid mb-6 inline-block w-full">
                  <h4 className="font-semibold text-gray-900 mb-2">{cat.title}</h4>
                  <ul className="grid gap-2 text-gray-700">
                    {cat.items.map((k) => (
                      <li
                        key={k}
                        className="flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-2 ring-1 ring-gray-100 hover:bg-gray-100 transition"
                      >
                        <span className="text-[#2F80ED]">{ICONS[k]}</span>
                        <span>{T.itemLabel[k]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-4 border-t flex justify-end">
            <button
              onClick={onClose}
              className="rounded-xl px-4 py-2 font-semibold text-white"
              style={{ backgroundColor: "#2F80ED" }}
            >
              {T.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
