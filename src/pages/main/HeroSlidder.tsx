// src/components/HeroSlider.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { getHeroCopy } from "../../i18n/main/hero";
import Booking from "../../components/booking";

type SlideBase = { id: number; image: string };

// Rasmlar public/ ichidan absolute path bilan
const SLIDES_BASE: SlideBase[] = [
  { id: 1, image: "images/hotel/img1.webp" },
  { id: 2, image: "images/hotel/img2.webp" },
  { id: 3, image: "images/hotel/img3.webp" },
  { id: 4, image: "images/hotel/img4.webp" },
];

export default function HeroSlider() {
  const { code } = useLanguage();
  const T = getHeroCopy(code);

  const [index, setIndex] = useState(0);

  // i18n matnlarini slaydlarga qo‘shamiz
  const slides = useMemo(
    () => SLIDES_BASE.map((b) => ({ ...b, ...T.slides[b.id] })),
    [T]
  );
  const current = slides[index];

  // autoplay
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      6000
    );
    return () => clearInterval(t);
  }, [slides.length]);

  // 🔥 Preload next slide image
  useEffect(() => {
    if (!slides.length) return;

    const nextIndex = (index + 1) % slides.length;
    const next = slides[nextIndex];
    if (!next) return;

    const img = new Image();
    img.src = next.image; // preload next slide image
  }, [index, slides]);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative w-full">
      <div className="relative h-[72vh] min-h-[420px] w-full overflow-hidden">
        {/* 🔥 Only ONE image rendered */}
        <img
          key={current.id}
          src={current.image}
          alt={current.title?.replaceAll("\n", " ") ?? "Hotel slide"}
          loading="eager" // hero is above the fold
          className="h-full w-full object-cover brightness-[.55] transition-opacity duration-700"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        {/* Centered text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 text-center text-white">
            <div className="mx-auto inline-block rounded-md px-2 py-1 md:px-4 md:py-2">
              <h1 className="text-2xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                {current.title?.split("\n").map((line: string, i: number) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            {(current.subtitle || current.address) && (
              <p className="mt-4 text-sm text-gray-200 md:text-base">
                {current.subtitle}
                {current.address && (
                  <span className="block">{current.address}</span>
                )}
              </p>
            )}
          </div>
        </div>

        {/* Badge */}
        {current.badge && (
          <div className="absolute left-4 top-4 rounded-md bg-orange-500 px-2 py-1 text-xs font-semibold text-white md:left-6 md:top-6 md:text-sm">
            {current.badge}
          </div>
        )}

        {/* Prev/Next */}
        <button
          onClick={prev}
          aria-label={T.prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white md:left-6"
        >
          <ArrowLeft className="h-5 w-5 text-gray-800" />
        </button>
        <button
          onClick={next}
          aria-label={T.next}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white md:right-6"
        >
          <ArrowRight className="h-5 w-5 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`${T.dotAriaPrefix} ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Booking bar */}
      <Booking />
    </section>
  );
}

/* Icons */
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
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
