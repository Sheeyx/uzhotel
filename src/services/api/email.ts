import axios from "axios";

/**
 * Backend shape expected by /api/booking/email
 */
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

/**
 * UI shape from your form
 */
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

/**
 * CRA FRONTEND ENV
 * Must be set as:
 * REACT_APP_BACKEND_URL=http://localhost:4007
 * REACT_APP_BOOKING_API_KEY=super-secret-123
 */
const API_BASE = process.env.REACT_APP_BACKEND_URL || "";
const API_KEY = process.env.REACT_APP_BOOKING_API_KEY || "";

console.log("[EMAIL FRONTEND] API_BASE =", API_BASE || "(same-origin)");
console.log("[EMAIL FRONTEND] API_KEY exists =", Boolean(API_KEY));

/**
 * Axios client
 * baseURL ensures correct URL and avoids /rooms/undefined/...
 */
const http = axios.create({
  baseURL: API_BASE || undefined, // if empty -> same origin
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});

/**
 * Normalize UI payload
 */
function toEmailPayload(
  p: BookingEmailPayload | UIBookingPayload,
  roomTitleFallback?: string
): BookingEmailPayload {
  if ("guestName" in p && "checkin" in p && "checkout" in p) {
    return p as BookingEmailPayload;
  }

  const ui = p as UIBookingPayload;

  return {
    roomTitle: ui.roomTitle || roomTitleFallback || "Unknown room",
    guestName: `${ui.firstName} ${ui.secondName}`.trim(),
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

/**
 * Send booking request → backend → email
 * ALWAYS USE ABSOLUTE PATH: "/api/booking/email"
 */
export async function sendBookingEmail(
  payload: BookingEmailPayload | UIBookingPayload,
  toEmail?: string,
  roomTitle?: string
) {
  const normalized = toEmailPayload(payload, roomTitle);

  const res = await http.post("/booking/email", {
    ...normalized,
    toEmail,
  });

  return res.data;
}
