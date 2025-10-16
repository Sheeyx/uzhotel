// src/pages/Gallery.tsx
import React, { JSX, useEffect, useMemo, useState } from "react";

const IMAGES: string[] = [
  "assets/gallarypage/img1.png",
  "/assets/gallarypage/img2.png",
  "/assets/gallarypage/img3.png",
  "/assets/gallarypage/img4.png",
  "/assets/gallarypage/img5.png",
  "/assets/gallarypage/img6.png",
  "/assets/gallarypage/img7.png",
  "/assets/gallarypage/img8.png",
  "/assets/gallarypage/img9.png",
  "/assets/gallarypage/img10.png",
  "/assets/gallarypage/img11.png",
  "/assets/gallarypage/img12.png",
  "/assets/gallarypage/img13.png",
  "/assets/gallarypage/img14.png",
  "/assets/gallarypage/img15.png",
  "/assets/gallarypage/img16.png",
  "/assets/gallarypage/img17.png",
  "/assets/gallarypage/img18.png",
  "/assets/gallarypage/img19.png",
  "/assets/gallarypage/img20.png",
  "/assets/gallarypage/img21.png",
  "/assets/gallarypage/img22.png",
  "/assets/gallarypage/img23.png",
  "/assets/gallarypage/img24.png",
  "/assets/gallarypage/img25.png",
  "/assets/gallarypage/img26.png",
  "/assets/gallarypage/img27.png",
  "/assets/gallarypage/img28.png",
  "/assets/gallarypage/img29.png",
  "/assets/gallarypage/img30.png",
];

/** Height presets we cycle through to create varied tile sizes (Explore vibe). */
const TILE_HEIGHTS = [
  "h-48 sm:h-56 md:h-64",            // short
  "h-64 sm:h-72 md:h-80",            // tall
  "h-56 sm:h-64 md:h-72",            // medium
  "h-80 sm:h-96 md:h-[26rem]",       // extra tall
  "h-52 sm:h-60 md:h-72",            // short/medium
  "h-72 sm:h-80 md:h-96",            // very tall
];

export default function GalleryPage(): JSX.Element {
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length));
  const next = () => setIndex((i) => (i === null ? i : (i + 1) % IMAGES.length));

  // Disable body scroll + keyboard nav while lightbox is open
  useEffect(() => {
    if (index === null) return;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index]);

  // Preload neighbors for snappy nav
  useEffect(() => {
    if (index === null) return;
    const pre = (src: string) => { const img = new Image(); img.src = src; };
    pre(IMAGES[(index + 1) % IMAGES.length]);
    pre(IMAGES[(index - 1 + IMAGES.length) % IMAGES.length]);
  }, [index]);

  const countLabel = useMemo(() => (index === null ? "" : `${index + 1} / ${IMAGES.length}`), [index]);

  return (
    <main className="bg-white">
      {/* Hero */}
      <header className="bg-[#0B1320] text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Foto galereya</h1>
          <p className="mt-3 mx-auto max-w-3xl font-inter text-[16px] leading-[32px] text-white/80">
            Instagram uslubidagi galereya — turli o‘lchamdagi suratlar beqiyos, bo‘shliqsiz ko‘rinishda.
          </p>
        </div>
        <div className="h-px w-full bg-white/10" />
      </header>

      {/* Masonry columns — gap-free; varying heights give an IG Explore feel */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {IMAGES.map((src, i) => {
            const tile = TILE_HEIGHTS[i % TILE_HEIGHTS.length];
            return (
              <figure key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-black/5">
                <button
                  type="button"
                  onClick={() => open(i)}
                  className="group block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`Rasmni kattalashtirish ${i + 1}`}
                >
                  {/* Wrapper controls the tile’s height; image covers it nicely */}
                  <div className={`w-full ${tile}`}>
                    <img
                      src={src}
                      alt={`Galereya rasmi ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </button>
                <figcaption className="sr-only">Hotel gallery image {i + 1}</figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* Lightbox */}
      {index !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image preview" className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/80" onClick={close} />
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">{countLabel}</div>

            <img
              src={IMAGES[index]}
              alt={`Preview ${index + 1}`}
              className="max-h-[85vh] max-w-[95vw] rounded-xl object-contain shadow-2xl select-none"
              draggable={false}
              onClick={next} // click image → next
            />

            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Yopish"
              className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <CloseIcon className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={prev}
              aria-label="Oldingi rasm"
              className="absolute left-3 md:left-6 grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              aria-label="Keyingi rasm"
              className="absolute right-3 md:right-6 grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

/* Icons */
function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}
function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
