// src/components/RoomsCarousel.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { getRooms, formatPriceUZS, Room } from "../../data/rooms";
import { getRoomsCarouselCopy } from "../../i18n/pages/roomsCarousel";

const SLIDE_MS = 650; // animation speed (ms)
const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";
const MD_BP = 768; // Tailwind md breakpoint (px);

// Helper: choose a single main image per room (Option 1 style)
function getMainImage(r: Room): string {
  // You used r.images[2] || r.images[0] before
  return r.images[2] || r.images[0];
}

export default function RoomsCarousel() {
  const { code } = useLanguage();
  const rooms = useMemo(() => getRooms(code), [code]);
  const T = getRoomsCarouselCopy(code);

  // ── First-scroll reveal
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const el = sectionRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Respect reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── Responsive: mobile vs desktop
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < MD_BP;
  });
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < MD_BP);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── Desktop carousel state (3-up)
  const [index, setIndex] = useState(1);
  const n = rooms.length;

  // Ensure at least 3 cards for desktop
  const safeRooms = useMemo<Room[]>(() => {
    if (n >= 3) return rooms;
    if (n === 2) return [rooms[0], rooms[1], rooms[0]];
    if (n === 1) return [rooms[0], rooms[0], rooms[0]];
    return [];
  }, [rooms, n]);

  // Base trio [left, center, right]
  const baseView = useMemo(() => {
    const m = safeRooms.length;
    if (m === 0) return [] as number[];
    const left = (index - 1 + m) % m;
    const center = index % m;
    const right = (index + 1) % m;
    return [left, center, right];
  }, [index, safeRooms.length]);

  // Animation state (desktop)
  const [isAnimating, setAnimating] = useState(false);
  const [dir, setDir] = useState<"next" | "prev" | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Extended view during animation
  const extendedView = useMemo(() => {
    const m = safeRooms.length;
    if (baseView.length !== 3 || m === 0) return [] as number[];

    if (dir === "next") {
      const nextRight = (baseView[2] + 1) % m;
      return [...baseView, nextRight];
    }
    if (dir === "prev") {
      const prevLeft = (baseView[0] - 1 + m) % m;
      return [prevLeft, ...baseView];
    }
    return baseView;
  }, [baseView, dir, safeRooms.length]);

  // Pixel translate
  const [translatePx, setTranslatePx] = useState(0);
  const [transition, setTransition] = useState<string>("");

  // slideWidth = stage width / (isMobile ? 1 : 3)
  const getSlideWidth = () => {
    const stage = stageRef.current;
    if (!stage) return 0;
    const perView = isMobile ? 1 : 3;
    return stage.clientWidth / perView;
  };

  // Keep a ref to width for effects
  const slideWRef = useRef(0);
  useEffect(() => {
    const measure = () => {
      slideWRef.current = getSlideWidth();
      if (isAnimating && dir === "prev" && transition === "") {
        setTranslatePx(slideWRef.current);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isAnimating, dir, transition, isMobile]);

  const prev = () => {
    if (isAnimating || safeRooms.length <= 1) return;
    setDir("prev");
    setAnimating(true);
  };
  const next = () => {
    if (isAnimating || safeRooms.length <= 1) return;
    setDir("next");
    setAnimating(true);
  };

  // Start animation (desktop only)
  useEffect(() => {
    if (isMobile) return;
    if (!isAnimating || !dir) return;

    const track = trackRef.current;

    const start = () => {
      const slideW = slideWRef.current || getSlideWidth();

      if (dir === "next") {
        setTransition("");
        setTranslatePx(0);
        requestAnimationFrame(() => {
          track && track.getBoundingClientRect();
          setTransition(`transform ${SLIDE_MS}ms ${EASE}`);
          setTranslatePx(slideW);
        });
      } else {
        setTransition("");
        setTranslatePx(slideW);
        requestAnimationFrame(() => {
          track && track.getBoundingClientRect();
          setTransition(`transform ${SLIDE_MS}ms ${EASE}`);
          setTranslatePx(0);
        });
      }
    };

    requestAnimationFrame(start);
  }, [isAnimating, dir, isMobile]);

  // Normalize after transition (desktop only)
  useEffect(() => {
    if (isMobile) return;
    const el = trackRef.current;
    if (!el) return;

    const onEnd = (e: TransitionEvent) => {
      if (e.propertyName !== "transform") return;
      if (!isAnimating || !dir) return;

      if (dir === "next") {
        setIndex((i) => (i + 1) % safeRooms.length);
      } else if (dir === "prev") {
        setIndex((i) => (i - 1 + safeRooms.length) % safeRooms.length);
      }

      setTransition("");
      setTranslatePx(0);
      setDir(null);
      setAnimating(false);
    };

    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [isAnimating, dir, safeRooms.length, isMobile]);

  const listToRender = !isMobile && isAnimating && dir ? extendedView : baseView;

  // ── 🔥 Option 1-style preloading of next/prev room images
  useEffect(() => {
    if (!safeRooms.length) return;
    const m = safeRooms.length;

    const nextIndex = (index + 1) % m;
    const prevIndex = (index - 1 + m) % m;

    [nextIndex, prevIndex].forEach((idx) => {
      const room = safeRooms[idx];
      if (!room) return;
      const img = new Image();
      img.src = getMainImage(room); // preload main image
    });
  }, [index, safeRooms]);

  // ── Utilities for first-reveal styles
  const revealClass = (base = "") =>
    revealed || prefersReducedMotion
      ? `${base} opacity-100 translate-y-0 blur-0`
      : `${base} opacity-0 translate-y-4 blur-[2px]`;

  const revealStyle = (i = 0): React.CSSProperties =>
    revealed && !prefersReducedMotion
      ? {
          transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}, filter 700ms ${EASE}`,
          transitionDelay: `${100 + i * 90}ms`,
        }
      : { transition: `opacity 0ms, transform 0ms, filter 0ms` };

  return (
    <section
      id="rooms"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-4 py-12"
    >
      <div
        className={revealClass("mx-auto max-w-3xl text-center")}
        style={revealStyle(0)}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          {T.title}
        </h2>
        <p className="mt-3 text-slate-600">{T.lead}</p>
      </div>

      {/* MOBILE: 1-per-view swipe/scroll with scroll-snap */}
      {isMobile ? (
        <div className={revealClass("relative mt-8")} style={revealStyle(1)}>
          <div className="-mx-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory scroll-px-4 pb-1 overscroll-x-contain">
            <div className="flex gap-4 px-4">
              {rooms.map((r, i) => {
                const mainImg = getMainImage(r);

                return (
                  <div
                    key={r.id}
                    className={revealClass("snap-start shrink-0 basis-full")}
                    style={revealStyle(2 + i)}
                  >
                    <Link
                      to="/rooms"
                      className="block w-full group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
                    >
                      <article className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100 transition hover:shadow-xl">
                        <div className="p-3">
                          <img
                            src={mainImg}
                            alt={r.title}
                            loading={i === 0 ? "eager" : "lazy"} // first visible card eager, others lazy
                            className="h-56 w-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="px-5 pb-5">
                          <h3 className="text-2xl font-bold leading-tight text-slate-900">
                            {r.title}
                          </h3>
                          {r.desc && (
                            <p className="mt-2 line-clamp-2 text-[15px] leading-6 text-slate-600">
                              {r.desc}
                            </p>
                          )}
                          <p className="mt-5 text-2xl font-bold text-slate-900">
                            {formatPriceUZS(r.price, code)}
                          </p>
                        </div>
                      </article>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={revealClass("mt-8 flex justify-center")}
            style={revealStyle(rooms.length + 3)}
          >
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-10 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
            >
              {T.seeAll}
            </Link>
          </div>
        </div>
      ) : (
        // DESKTOP: 3-up animated carousel with arrows
        <div className={revealClass("relative mt-8")} style={revealStyle(1)}>
          <button
            aria-label={T.prev}
            onClick={prev}
            className="absolute left-0 -translate-x-1/2 top-[190px] hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-slate-800 to-black text-white ring-8 ring-white/90 shadow-2xl hover:scale-105 transition z-10"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <button
            aria-label={T.next}
            onClick={next}
            className="absolute right-0 translate-x-1/2 top-[190px] hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-slate-800 to-black text-white ring-8 ring-white/90 shadow-2xl hover:scale-105 transition z-10"
          >
            <ArrowRight className="h-6 w-6" />
          </button>

          {/* Stage */}
          <div ref={stageRef} className="relative overflow-hidden">
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{
                transform: `translate3d(-${translatePx}px, 0, 0)`,
                transition,
              }}
            >
              {listToRender.map((idx, i) => {
                const r = safeRooms[idx] as Room;
                const mainImg = getMainImage(r);

                return (
                  <div
                    key={`${r.id}-${i}`}
                    className={revealClass("basis-1/3 shrink-0 grow-0")}
                    style={revealStyle(2 + i)}
                  >
                    <Link
                      to="/rooms"
                      className="block w-full group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
                    >
                      <article className="mx-3 md:mx-4 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100 transition hover:shadow-xl">
                        <div className="p-3">
                          <img
                            src={mainImg}
                            alt={r.title}
                            loading="lazy"
                            className="h-52 w-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="px-5 pb-5">
                          <h3 className="text-2xl font-bold leading-tight text-slate-900">
                            {r.title}
                          </h3>
                          {r.desc && (
                            <p className="mt-2 line-clamp-2 text-[15px] leading-6 text-slate-600">
                              {r.desc}
                            </p>
                          )}
                          <p className="mt-5 text-2xl font-bold text-slate-900">
                            {formatPriceUZS(r.price, code)}
                          </p>
                        </div>
                      </article>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={revealClass("mt-8 flex justify-center")}
            style={revealStyle(5)}
          >
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-24 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
            >
              {T.seeAll}
            </Link>
          </div>
        </div>
      )}
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
