import React from "react";
import { FaClock } from "react-icons/fa";

export type PolicyItem = { text: string };

type Props = {
  title: string;
  items: PolicyItem[];
  className?: string;
};

export default function RoomPolicies({ title, items, className }: Props) {
  return (
    <div className={["rounded-2xl bg-white ring-1 ring-gray-100 p-4 md:p-5 shadow-sm", className].join(" ")}>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <ul className="mt-3 grid gap-2 text-gray-700">
        {items.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 text-gray-500">
              <FaClock className="h-4 w-4" />
            </span>
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
