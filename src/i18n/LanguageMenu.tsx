// src/components/LanguageMenu.tsx
import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { ChevronDown } from "../components/icons/Icons";

export default function LanguageMenu() {
  const { code, setCode, currentLang, allLangs } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700"
      >
        <img src={currentLang.flag} alt={code} className="h-4 w-4 rounded-full" />
        <span className="hidden sm:inline">{code}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-[60] mt-2 w-40 rounded-xl border bg-white/95 backdrop-blur shadow-xl ring-1 ring-black/5"
        >
          {allLangs.map((lang) => (
            <button
              key={lang.code}
              role="menuitem"
              onClick={() => {
                setCode(lang.code);
                setOpen(false);
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <img src={lang.flag} alt={lang.code} className="h-4 w-4 rounded-full" />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
