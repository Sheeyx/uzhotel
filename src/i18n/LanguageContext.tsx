// src/i18n/LanguageContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { I18N, LANGUAGES, LangCode } from "./lang";

type LanguageContextValue = {
  code: LangCode;
  setCode: (code: LangCode) => void;
  t: typeof I18N[LangCode];
  currentLang: (typeof LANGUAGES)[number];
  allLangs: typeof LANGUAGES;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "langCode";

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [code, setCodeState] = useState<LangCode>("UZ");

  // load initial from localStorage or browser
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as LangCode | null;
    if (saved && ["UZ", "RU", "EN"].includes(saved)) {
      setCodeState(saved);
      document.documentElement.lang = saved.toLowerCase();
    } else {
      // optional: detect from browser
      const nav = navigator.language.toLowerCase();
      const guess: LangCode = nav.startsWith("ru")
        ? "RU"
        : nav.startsWith("en")
        ? "EN"
        : "UZ";
      setCodeState(guess);
      document.documentElement.lang = guess.toLowerCase();
      localStorage.setItem(STORAGE_KEY, guess);
    }
  }, []);

  const setCode = (c: LangCode) => {
    setCodeState(c);
    localStorage.setItem(STORAGE_KEY, c);
    document.documentElement.lang = c.toLowerCase();
  };

  const t = useMemo(() => I18N[code], [code]);
  const currentLang = useMemo(() => LANGUAGES.find(l => l.code === code)!, [code]);

  const value: LanguageContextValue = {
    code,
    setCode,
    t,
    currentLang,
    allLangs: LANGUAGES,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
