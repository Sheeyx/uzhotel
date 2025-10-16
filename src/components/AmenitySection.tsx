// src/components/AmenitySection.tsx
import React from "react";
import {
  FaWifi,
  FaTv,
  FaBed,
  FaSnowflake,
  FaShower,
  FaUtensils,
  FaCoffee,
  FaParking,
  FaLock,
  FaSpa,
  FaCouch,
  FaUserFriends,
  FaDoorClosed,
} from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import {
  getAmenitySectionCopy,
  AmenityItemKey,
} from "../i18n/components/amenitySection";

type AmenitySectionProps = {
  onShowAll?: () => void;
};

const ICONS: Record<AmenityItemKey, React.ReactNode> = {
  big_bed: <FaBed />,
  ac: <FaSnowflake />,
  tv: <FaTv />,
  wifi: <FaWifi />,
  bath_shower: <FaShower />,
  mini_bar: <FaCoffee />,

  breakfast: <FaUtensils />,
  spa_sauna: <FaSpa />,
  parking: <FaParking />,
  security: <FaLock />,
  lounge_corner: <FaCouch />,

  up_to_3: <FaUserFriends />,
  private_entrance: <FaDoorClosed />,
};

export default function AmenitySection({ onShowAll }: AmenitySectionProps) {
  const { code } = useLanguage();
  const T = getAmenitySectionCopy(code);

  return (
    <section className="rounded-2xl bg-white ring-1 ring-gray-100 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{T.title}</h3>
        {onShowAll && (
          <button
            onClick={onShowAll}
            className="text-sm font-semibold rounded-lg px-3 py-1.5 text-white"
            style={{ backgroundColor: "#2F80ED" }}
          >
            {T.seeAll}
          </button>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {T.groups.map((group) => (
          <div key={group.id}>
            <h4 className="text-gray-800 font-medium mb-2">{group.title}</h4>
            <ul className="space-y-2 text-gray-700">
              {group.items.map((key) => (
                <li
                  key={key}
                  className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2 hover:bg-gray-100 transition"
                >
                  <span className="text-[#2F80ED]">{ICONS[key]}</span>
                  <span>{T.itemLabel[key]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
