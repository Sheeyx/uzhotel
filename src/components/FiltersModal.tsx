import React, { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { AMENITY_LABEL as AMENITY_LABELS } from "../data/rooms"; // reusing amenity i18n
import { getFiltersCopy, ROOM_TYPE_LABELS } from "../i18n/components/filter";

export type RoomTypeKey =
  | "standard_single"
  | "standard_twin"
  | "standard_triple"
  | "suite_single"
  | "suite_double";

export type AmenityKey = "breakfast" | "wifi" | "sauna" | "parking";

export type FiltersState = {
  roomTypes: Record<RoomTypeKey, boolean>;
  amenities: Record<AmenityKey, boolean>;
};

type Props = {
  open: boolean;
  onClose: () => void;
  value: FiltersState;
  onChange: (next: FiltersState) => void;
  onApply: () => void;
  onClear: () => void;
};

export default function FiltersModal({
  open,
  onClose,
  value,
  onChange,
  onApply,
  onClear,
}: Props) {
  const { code } = useLanguage();
  const T = getFiltersCopy(code);
  const ROOM_LABEL = ROOM_TYPE_LABELS[code];
  const AM_LABEL = AMENITY_LABELS[code];

  // scroll lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const toggleRT = (k: RoomTypeKey) =>
    onChange({
      ...value,
      roomTypes: { ...value.roomTypes, [k]: !value.roomTypes[k] },
    });

  const toggleAm = (k: AmenityKey) =>
    onChange({
      ...value,
      amenities: { ...value.amenities, [k]: !value.amenities[k] },
    });

  return (
    <div className="fixed inset-0 z-50">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      {/* sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={T.title}
        className="absolute inset-x-0 top-6 mx-auto w-[92%] max-w-2xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-xl font-semibold">{T.title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-5 py-4">
          {/* Rooms */}
          <section className="mb-5">
            <h4 className="mb-3 text-sm font-semibold text-gray-700">
              {T.roomsSection}
            </h4>
            <div className="space-y-3">
              {(Object.keys(ROOM_LABEL) as RoomTypeKey[]).map((k) => (
                <label
                  key={k}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2"
                >
                  <input
                    type="checkbox"
                    checked={value.roomTypes[k]}
                    onChange={() => toggleRT(k)}
                    className="h-4 w-4"
                    aria-label={ROOM_LABEL[k]}
                  />
                  <span className="text-sm">{ROOM_LABEL[k]}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Amenities */}
          <section>
            <h4 className="mb-3 text-sm font-semibold text-gray-700">
              {T.amenitiesSection}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(Object.keys(AM_LABEL) as AmenityKey[]).map((k) => (
                <label
                  key={k}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2"
                >
                  <input
                    type="checkbox"
                    checked={value.amenities[k]}
                    onChange={() => toggleAm(k)}
                    className="h-4 w-4"
                    aria-label={AM_LABEL[k]}
                  />
                  <span className="text-sm">{AM_LABEL[k]}</span>
                </label>
              ))}
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between gap-3 px-5 py-4 border-t">
          <button
            onClick={onClear}
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            type="button"
          >
            {T.clear}
          </button>

          <button
            onClick={() => {
              onApply();
              onClose();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90"
            type="button"
          >
            {T.apply}
          </button>
        </div>
      </div>
    </div>
  );
}
