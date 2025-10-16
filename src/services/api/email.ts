import axios from "axios";

/** Backend shape expected by /api/booking/email */
export type BookingEmailPayload = {
  roomTitle: string;
  guestName: string;
  phone: string;
  email?: string | null;
  nationality?: string | null;
  checkin: string;
  checkout: string;
  nights: number;
  guests: number;
  totalPrice: number;
};

/** UI shape from your form (if you want to pass this directly) */
export type UIBookingPayload = {
  roomTitle?: string;
  firstName: string;
  secondName: string;
  phone: string;
  email?: string | null;
  nationality?: string | null;
  checkIn: string;
  checkOut: string;
  nights: number;
  guestCount: number;
  totalPrice: number;
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4008";
const API_KEY  = process.env.NEXT_PUBLIC_API_KEY || "super-secret-123";

console.log("[email] API_BASE =", API_BASE);
console.log("[email] API_KEY len =", API_KEY.length);

const http = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
  headers: { "Content-Type": "application/json", "x-api-key": API_KEY },
});

function toEmailPayload(
  p: BookingEmailPayload | UIBookingPayload,
  roomTitleFallback?: string
): BookingEmailPayload {
  if ("guestName" in p && "checkin" in p && "checkout" in p) return p as BookingEmailPayload;

  const ui = p as UIBookingPayload;
  return {
    roomTitle: ui.roomTitle || roomTitleFallback || "Unknown room",
    guestName: `${ui.firstName ?? ""} ${ui.secondName ?? ""}`.trim(),
    phone: ui.phone,
    email: ui.email ?? null,
    nationality: ui.nationality ?? null,
    checkin: ui.checkIn,
    checkout: ui.checkOut,
    nights: ui.nights,
    guests: ui.guestCount,
    totalPrice: ui.totalPrice,
  };
}

/** Send booking email (accepts backend or UI payload) */
export async function sendBookingEmail(
  payload: BookingEmailPayload | UIBookingPayload,
  toEmail?: string,
  roomTitle?: string
) {
  const normalized = toEmailPayload(payload, roomTitle);
  const res = await http.post("/api/booking/email", { ...normalized, toEmail });
  return res.data; // { ok: true }
}
