// src/services/api/bot.ts
import axios from "axios";

// use your actual base url
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// TEMP: hardcode to prove request path works
const API_KEY = "super-secret-123";

console.log("[booking] API_BASE =", API_BASE);
console.log("[booking] API_KEY len =", API_KEY.length);

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
  const res = await axios.post(`${API_BASE}/api/bot/booking`, p, {
    headers: { "x-api-key": API_KEY },
  });
  return res.data;
}
