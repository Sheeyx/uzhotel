// src/services/api/bot.ts
import axios from "axios";

const API_BASE = process.env.REACT_APP_BACKEND_URL || "";
const API_KEY = process.env.REACT_APP_BOOKING_API_KEY || "";

console.log("[BOT FRONTEND] API_BASE =", API_BASE || "(same-origin)");
console.log("[BOT FRONTEND] API_KEY exists =", Boolean(API_KEY));

const http = axios.create({
  baseURL: API_BASE || undefined,  // backend url or same-origin
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});

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
  const res = await http.post("/api/bot/booking", p); // ALWAYS absolute path
  return res.data;
}
