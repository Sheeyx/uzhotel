import React from "react";
import { FaLightbulb, FaSnowflake, FaWifi, FaCopy, FaDesktop, FaTint } from "react-icons/fa";

export type BulletTag = "light" | "ac" | "wifi" | "fax" | "computer" | "water";

export type ExtraCard = {
  title: string;
  price: string;
  note?: string;
  bullets: Array<{ text: string; tag: BulletTag }>;
};

type Props = {
  title: string;
  cards: ExtraCard[];
  className?: string;
};

const TAG_ICON: Record<BulletTag, React.ReactNode> = {
  light: <FaLightbulb className="h-4 w-4" />,
  ac: <FaSnowflake className="h-4 w-4" />,
  wifi: <FaWifi className="h-4 w-4" />,
  fax: <FaCopy className="h-4 w-4" />,
  computer: <FaDesktop className="h-4 w-4" />,
  water: <FaTint className="h-4 w-4" />,
};

const TAG_BG: Record<BulletTag, string> = {
  light: "bg-amber-400",
  ac: "bg-sky-400",
  wifi: "bg-teal-500",
  fax: "bg-gray-500",
  computer: "bg-indigo-500",
  water: "bg-pink-500",
};

export default function ExtraServices({ title, cards, className }: Props) {
  return (
    <div className={["rounded-2xl bg-white ring-1 ring-gray-100 p-4 md:p-5 shadow-sm", className].join(" ")}>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className="rounded-xl ring-1 ring-gray-100 p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900">{card.title}</h4>
              <div className="text-sm font-bold text-gray-900">{card.price}</div>
            </div>

            {card.note && <p className="mt-1 text-xs text-gray-600 italic">{card.note}</p>}

            <ul className="mt-4 grid gap-2 text-gray-700">
              {card.bullets.map((b, j) => (
                <li key={j} className="flex items-center justify-start gap-3 py-1">
                  <span className={`flex items-center justify-center w-7 h-7 rounded-full text-white text-sm flex-shrink-0 ${TAG_BG[b.tag]}`}>
                    {TAG_ICON[b.tag]}
                  </span>
                  <span className="text-sm font-medium translate-y-[1px]">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
