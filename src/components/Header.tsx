import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  AboutIcon,
  ArrowRight,
  Burger,
  Close,
  ContactIcon,
  RoomsIcon,
  ServicesIcon,
} from "./icons/Icons";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageMenu from "../i18n/LanguageMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [headerH, setHeaderH] = useState(64);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("site-header");
    if (!el) return;
    const measure = () => setHeaderH(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const NAV = useMemo(
    () => [
      { id: "rooms", label: t.nav.rooms, icon: RoomsIcon },
      { id: "about", label: t.nav.about, icon: AboutIcon },
      { id: "services", label: t.nav.services, icon: ServicesIcon },
      { id: "gallery", label: t.nav.gallery, icon: ServicesIcon }, // agar GalleryIcon bo‘lsa shu yerda almashtiring
      { id: "contact", label: t.nav.contact, icon: ContactIcon },
    ],
    [t]
  );

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - (headerH + 8);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onNavClick = (id: string) => {
    if (location.pathname === "/") {
      scrollToId(id);
    } else {
      navigate("/");
      setTimeout(() => scrollToId(id), 50);
    }
    setOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        id="site-header"
        className={[
          "fixed top-0 left-0 right-0 z-50 flex items-center",
          "backdrop-blur-md transition duration-200",
          scrolled ? "bg-white/70 shadow-sm border-b" : "border-transparent",
          "h-14 md:h-16",
        ].join(" ")}
      >
        <div className="w-full px-3 md:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => {
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate("/");
                }
              }}
              className="flex items-center"
              aria-label="Go home"
            >
              <img
          src="/assets/logo/SNlogo.png"
          alt="Logo"
          className="w-[48px] h-[48px] md:w-[60px] md:h-[60px]"
        />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => onNavClick(id)}
                  className="text-sm font-medium text-gray-800 hover:text-blue-600 transition"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2 md:gap-3">
              <LanguageMenu />

              {/* CTA — goes to /rooms */}
              <Link
                to="/rooms"
                onClick={() => setOpen(false)}
                className="hidden md:inline-flex rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 shadow-sm"
              >
                {t.book}
              </Link>

              {/* Burger (mobile) */}
              <button
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Burger className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="h-14 md:h-16" />

      {/* Mobile Drawer */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`fixed right-0 top-0 z-50 h-full w-[80%] max-w-xs bg-white shadow-2xl border-l transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 h-14 border-b">
            <span className="text-sm font-semibold text-gray-800">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-2 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="p-3 space-y-1">
            {NAV.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavClick(id)}
                className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition"
              >
                <Icon className="h-5 w-5 text-gray-500" />
                <span>{label}</span>
                <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
              </button>
            ))}
          </nav>

          {/* CTA in mobile menu */}
          <div className="p-4 border-t">
            <Link
              to="/rooms"
              onClick={() => setOpen(false)}
              className="block w-full rounded-lg bg-[#2563EB] px-4 py-2 text-center text-sm font-semibold text-white hover:opacity-90 shadow"
            >
              {t.book}
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
