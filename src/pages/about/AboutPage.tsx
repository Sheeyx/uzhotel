// src/pages/AboutPage.tsx
import React from "react";
import BackLink from "../../components/BackLink";
import { useCopy } from "../../i18n/useCopy";
import { ABOUT_COPY, type AboutCopy } from "../../i18n/pages/about";

export default function AboutPage() {
  // If your useCopy is typed to accept Record<LangCode, T>, this is enough:
  const T = useCopy<AboutCopy>(ABOUT_COPY);

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <BackLink />

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
        {T.pageTitle}
      </h1>

      {/* === GALLERY (full width) === */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Big image left */}
        <div className="lg:col-span-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src="/assets/about/about1.png"
              alt={T.galleryAlt.hero}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Right 2x2 grid on desktop */}
        <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4">
          <img src="/assets/about/about2.png" alt={T.galleryAlt.i1} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
          <img src="/assets/about/about3.png" alt={T.galleryAlt.i2} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
          <img src="/assets/about/about4.png" alt={T.galleryAlt.i3} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
          <img src="/assets/about/about5.png" alt={T.galleryAlt.i4} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
        </div>
      </div>

      {/* Mobile extra images */}
      <div className="mt-4 grid grid-cols-2 gap-4 lg:hidden">
        <img src="/assets/about/about2.png" alt={T.galleryAlt.m1} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
        <img src="/assets/about/about3.png" alt={T.galleryAlt.m2} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
        <img src="/assets/about/about4.png" alt={T.galleryAlt.m3} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
        <img src="/assets/about/about5.png" alt={T.galleryAlt.m4} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
      </div>

      {/* === CONTENT + BOOKING (two-column) === */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* LEFT: text content */}
        <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold">{T.sec1.title}</h2>
            <p>{T.sec1.line1}</p>
            <p>{T.sec1.line2}</p>
            <p>{T.sec1.line3}</p>
            <p>{T.sec1.line4}</p>

            <ul className="list-disc list-inside space-y-1">
              {T.sec1.amenities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">{T.sec2.title}</h2>
            <p>{T.sec2.p1}</p>
            <p>{T.sec2.p2}</p>
          </div>

          {/* Amenities */}
          <div className="pt-2">
            <h2 className="text-xl font-bold mb-4">{T.sec3.title}</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {T.sec3.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
