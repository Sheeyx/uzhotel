// src/pages/Rooms/Rooms.tsx (or wherever this component lives)
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import RoomCard from "../../components/RoomCard";
import FiltersModal, {
  AmenityKey,
  FiltersState,
  RoomTypeKey,
} from "../../components/FiltersModal";
import { getRooms, Room } from "../../data/rooms";
import BackLink from "../../components/BackLink";
import { useLanguage } from "../../i18n/LanguageContext";
import { ROOMS_COPY } from "../../i18n/pages/rooms";
import { useCopy } from "../../i18n/useCopy";

const EMPTY_FILTERS: FiltersState = {
  roomTypes: {
    standard_single: false,
    standard_twin: false,
    standard_triple: false,
    suite_single: false,
    suite_double: false,
  },
  amenities: {
    breakfast: false,
    wifi: false,
    sauna: false,
    parking: false,
  },
};


export default function Rooms() {
  const { code } = useLanguage(); // "UZ" | "RU" | "EN"
  const allRooms = useMemo(() => getRooms(code), [code]);

  const [visible, setVisible] = useState(9);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersState>(EMPTY_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<FiltersState>(EMPTY_FILTERS);

  const filteredRooms = useMemo(() => {
    const activeTypes = Object.entries(appliedFilters.roomTypes)
      .filter(([, v]) => v)
      .map(([k]) => k as RoomTypeKey);

    const activeAmenities = Object.entries(appliedFilters.amenities)
      .filter(([, v]) => v)
      .map(([k]) => k as AmenityKey);

    return allRooms.filter((r: Room) => {
      const typeOk = activeTypes.length ? activeTypes.includes(r.type) : true;
      const amenitiesOk = activeAmenities.every((a) => r.amenities.includes(a));
      return typeOk && amenitiesOk;
    });
  }, [appliedFilters, allRooms]);

  const toRender = filteredRooms.slice(0, visible);

  const applyFilters = () => setAppliedFilters(filters);
  const clearFilters = () => {
    setFilters(EMPTY_FILTERS);
    setAppliedFilters(EMPTY_FILTERS);
  };

  const selectedCount =
    Object.values(filters.roomTypes).filter(Boolean).length +
    Object.values(filters.amenities).filter(Boolean).length;

const T = useCopy(ROOMS_COPY);


  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
      {/* Back */}
      <BackLink />

      {/* Title + Filters */}
      <div className="mb-4 md:mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
          {T.title}
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            type="button"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M3 5h18M6 12h12M10 19h4" />
            </svg>
            {T.moreFilters}
            {selectedCount > 0 && (
              <span className="ml-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs">{selectedCount}</span>
            )}
          </button>
        </div>
      </div>

      {/* Cards (click to details) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {toRender.map((r: Room) => (
          <Link
  key={r.id}
  to={`/rooms/${r.id}`}
  state={{ room: r }}
  aria-label={`${r.title} — детализация`}
  className="block rounded-2xl outline-none focus:outline-none focus-visible:outline-none"
>
  <RoomCard room={r} />
</Link>

        ))}
      </div>


      {/* No results */}
      {filteredRooms.length === 0 && (
        <p className="mt-8 text-center text-gray-600">{T.noResults}</p>
      )}

      {/* Load more */}
      {visible < filteredRooms.length && (
        <div className="mt-6 md:mt-8 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + 6)}
            className="w-full max-w-xs rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            {T.loadMore}
          </button>
        </div>
      )}

      {/* Modal */}
      <FiltersModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        value={filters}
        onChange={setFilters}
        onApply={applyFilters}
        onClear={clearFilters}
      />
    </div>
  );
}
