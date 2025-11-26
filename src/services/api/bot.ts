// src/services/api/bot.ts
import axios from "axios";

// MUST END WITHOUT TRAILING SLASH ❗
// Example: https://www.snhotel.uz/api
const API_BASE = (process.env.REACT_APP_BACKEND_URL || "").replace(/\/+$/, "");
const API_KEY  = process.env.REACT_APP_BOOKING_API_KEY || "";

console.log("[BOT FRONTEND] API_BASE =", API_BASE);
console.log("[BOT FRONTEND] API_KEY exists =", Boolean(API_KEY));

const http = axios.create({
  baseURL: API_BASE, // <= always full backend URL
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});

/**
 * Send booking data to backend → Telegram bot
 */
export async function sendBookingToBot(p: {
  roomTitle: string;
  guestName: string;
  phone?: string;
  email?: string | null;
  nationality?: string | null;
  checkin: string;
  checkout: string;
  nights?: number;
  guests: number;
  totalPrice?: number;
}) {
  // correct backend route: /api/bot/booking
  const res = await http.post("/booking/bot", p);
  return res.data;
}
