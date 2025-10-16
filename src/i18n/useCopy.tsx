// src/i18n/useCopy.ts
import { LangCode } from "./lang";
import { useLanguage } from "./LanguageContext";

export const useCopy = <T,>(dict: Record<LangCode, T>): T => {
  const { code } = useLanguage();
  return dict[code];
};
