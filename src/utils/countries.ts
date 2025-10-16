// src/utils/countries.ts
import countryList from "react-select-country-list";
import type { CountryOption } from "../types/booking";

export const flagEmoji = (countryCode: string) =>
  countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));

export function getCountryOptionsWithFlags(): CountryOption[] {
  const raw = countryList().getData(); // [{ value: 'UZ', label: 'Uzbekistan' }, ...]
  return raw.map((c) => ({
    value: c.value,
    label: `${flagEmoji(c.value)} ${c.label}`,
  }));
}
