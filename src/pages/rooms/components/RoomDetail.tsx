// src/pages/rooms/detail/RoomDetail.tsx
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import {
  FaUserFriends,
  FaBed,
} from "react-icons/fa";

import { useLanguage } from "../../../i18n/LanguageContext";
import {
  getRoomById as getRoomByIdI18N,
  formatPriceUZS,
  Room,
  RoomTypeKey,
} from "../../../data/rooms";
import { getRoomDetailCopy } from "../../../i18n/pages/roomDetail";

// Optional compact section + modal you already have
import AmenitySection from "../../../components/AmenitySection";
import AmenitiesModal from "../../../components/AmenitiesModal";
import BookingModal from "../../../components/BookingModal";
import RoomPolicies from "./Poliies";
import ExtraServices from "./ExtraServices";
import BookingAside from "./BookingAside";

// New split components

export default function RoomDetail() {
  const { code } = useLanguage();
  const T = getRoomDetailCopy(code);

  const { id } = useParams();
  const navigate = useNavigate();

  // Always resolve the room from data by (lang, id) so text re-localizes on language change
  const room: Room | undefined = useMemo(() => {
    const rid = Number(id);
    if (!Number.isFinite(rid)) return undefined;
    return getRoomByIdI18N(code, rid);
  }, [id, code]);

  const [lbIndex, setLbIndex] = useState<number>(-1);
  const [showBooking, setShowBooking] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);

  if (!room) {
    return (
      <div className="container mx-auto px-4 py-10">
        <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline">
          {T.back}
        </button>
        <p className="mt-6 text-gray-700">{T.notFound}</p>
      </div>
    );
  }

  const [hero, ...thumbs] = room.images;
  const facilities = T.facilitiesByType[room.type as RoomTypeKey] ?? [];

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
      {/* Back */}
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-gray-100"
          aria-label={T.back}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span>{T.back}</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
        {room.title}
      </h1>

      {/* Images grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Hero */}
        {hero && (
          <button
            type="button"
            onClick={() => setLbIndex(0)}
            className="md:col-span-2 rounded-2xl overflow-hidden bg-white ring-1 ring-gray-100 group cursor-zoom-in"
          >
            <img
              src={hero}
              alt={room.title}
              className="w-full h-full object-cover aspect-[16/10] transition group-hover:brightness-[.95]"
            />
          </button>
        )}

        {/* Thumbs */}
        <div className="grid grid-cols-2 gap-3">
          {thumbs.slice(0, 4).map((src, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setLbIndex(i + 1)}
              className="rounded-2xl overflow-hidden bg-white ring-1 ring-gray-100 group cursor-zoom-in"
            >
              <img
                src={src}
                alt={`${room.title} ${i + 2}`}
                className="w-full h-full object-cover aspect-[1/1] transition group-hover:brightness-[.95]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Info + CTA */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: info */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{T.hotelName}</h2>
            <p className="mt-1 text-sm text-gray-600 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2">
                <FaUserFriends className="text-gray-500" />
                {room.capacity}
              </span>
              <span>•</span>
              <span>{room.size}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-2">
                <FaBed className="text-gray-500" />
                {room.rooms}
              </span>
            </p>
          </div>

          {/* Description + detailed facilities */}
          <div className="p-6 bg-white rounded-2xl shadow-md ring-1 ring-gray-100">
            <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
            {room.desc && <p className="text-gray-700 mb-4">{room.desc}</p>}
            {facilities.length > 0 && (
              <ul className="space-y-1 text-gray-700">
                {facilities.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Small amenities preview */}
          <AmenitySection onShowAll={() => setShowAmenities(true)} />

          {/* Policies */}
          <RoomPolicies title={T.notesTitle} items={T.checkPolicies} />

          {/* Extra services */}
          <ExtraServices title={T.extraTitle} cards={T.extraCards} />
        </div>

        {/* Right: booking card */}
        <BookingAside
          price={room.price}
          lang={code}
          perNightLabel={T.perNight}
          ctaLabel={T.bookNow}
          onBook={() => setShowBooking(true)}
        />
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lbIndex >= 0}
        index={lbIndex}
        close={() => setLbIndex(-1)}
        slides={room.images.map((src) => ({ src }))}
      />
  
      {/* Big amenities modal */}
      <AmenitiesModal open={showAmenities} onClose={() => setShowAmenities(false)} />

      {/* Booking modal */}
      <BookingModal
        open={showBooking}
        onClose={() => setShowBooking(false)}
        room={room}
        onSubmit={(payload) => {
          console.log("Submit booking:", payload);
        }}
      />
    </div>
  );
}
