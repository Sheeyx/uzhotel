// src/components/Footer.tsx
import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { getFooterCopy } from "../i18n/components/footer";

type SocialItem = {
  id: number;
  href: string;
  label: string;
  src: string;
};

export default function Footer() {
  const { code } = useLanguage();
  const T = getFooterCopy(code);
  const year = new Date().getFullYear();

  const SOCIALS: SocialItem[] = [
    {
      id: 1,
      href: "https://www.instagram.com/s.namangan_hotel_?igsh=bDNhNHI0bDgyMG5o",
      label: T.social.instagram,
      src: "/assets/social/Instagram.svg",
    },
    {
      id: 2,
      href: "https://t.me/S_Namangan",
      label: T.social.telegram,
      src: "/assets/social/tg.svg",
    },
    {
      id: 3, // Mail.ru first
      href: "mailto:snamanganhotel@mail.ru",
      label: T.social.email,
      src: "/assets/social/email.svg",
    },
    {
      id: 4, // Gmail after Mail.ru
      href: "mailto:snamanganhotel@gmail.com",
      label: T.social.email,
      src: "/assets/social/mailogo.svg",
    },
  ];

  const LINKS = [
    { href: "#rooms", label: T.nav.rooms },
    { href: "#about", label: T.nav.about },
    { href: "#offers", label: T.nav.offers },
    { href: "#services", label: T.nav.services },
    { href: "#contact", label: T.nav.contact },
  ];

  return (
    <footer className="w-full bg-[#F1F5F9] text-slate-700">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6">
        {/* Top row: logo + socials */}
        <div className="flex items-center justify-between">
          <img
            src="/assets/logo/logosn.webp"
            alt="Logo"
            className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] rounded-full object-cover"
          />

          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.label}
                className="p-2 rounded-full hover:bg-slate-200 transition"
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
              >
                <img src={s.src} alt={s.label} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-4 h-px w-full bg-slate-300" />

        {/* Bottom row */}
        <div className="mt-3 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs sm:text-sm">{T.copyright(year)}</p>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-slate-900 transition">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
