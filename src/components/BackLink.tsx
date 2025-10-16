import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { getBackLinkLabel } from "../i18n/components/backlink";

type Props = { label?: string };

export default function BackLink({ label }: Props) {
  const nav = useNavigate();
  const { code } = useLanguage();
  const text = label ?? getBackLinkLabel(code);

  return (
    <button
      type="button"
      onClick={() => nav(-1)}
      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mt-5 mb-5"
      aria-label={text}
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
}

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
