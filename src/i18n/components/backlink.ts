// src/i18n/components/backLink.ts

import { LangCode } from "../lang";

export const BACKLINK_COPY: Record<LangCode, string> = {
  UZ: "Ortga",
  RU: "Назад",
  EN: "Back",
};

export const getBackLinkLabel = (code: LangCode) => BACKLINK_COPY[code];
