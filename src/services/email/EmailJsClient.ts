// src/services/email/emailjsClient.ts
import emailjs from "@emailjs/browser";

export const EMAILJS_SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
export const EMAILJS_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
export const EMAILJS_PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

export function validateEmailJsConfig() {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error(
      "Missing EmailJS config. Please set REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, and REACT_APP_EMAILJS_PUBLIC_KEY."
    );
  }
}

export default emailjs;
