// src/services/email/sendBookingEmail.ts
import emailjs from "./EmailJsClient";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  validateEmailJsConfig,
} from "./EmailJsClient";
import type { BookingPayload } from "../../types/booking";

/**
 * Map your payload into EmailJS template variables.
 * Make sure your template has matching variable names.
 */
export async function sendBookingEmail(
  payload: BookingPayload,
  toEmailOverride?: string
) {
  validateEmailJsConfig();

  const templateParams: Record<string, any> = {
    to_email: toEmailOverride ?? "",

    roomId: String(payload.roomId),
    roomTitle: payload.roomTitle,
    pricePerNight: String(payload.pricePerNight),

    firstName: payload.firstName,
    secondName: payload.secondName,
    email: payload.email ?? "",

    nationality_code: payload.nationality.code,
    nationality_label: payload.nationality.label,

    phoneE164: payload.phoneE164,

    checkIn: payload.dates.checkIn,
    checkOut: payload.dates.checkOut,
    nights: String(payload.dates.nights),

    guests: String(payload.guests),
    totalPrice: String(payload.totalPrice),

    createdAt: payload.createdAt,
  };

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    { publicKey: EMAILJS_PUBLIC_KEY }
  );
}
