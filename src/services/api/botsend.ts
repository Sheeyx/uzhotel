// src/services/BotService.ts
import axios from "axios";
import { serverApi } from "../config";
// 🔹 If you already have a Messages type, import it here:
// import type { Messages } from "../libs/types/messages";

export type BotBookingPayload = {
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
};

// If you don't have a Messages type yet, you can temporarily use this:
export type Messages = any;

class BotService {
  private readonly path: string;

  constructor() {
    this.path = `${serverApi}`;
  }

  // ✅ Class method (not "async function" inside class)
  public async sendBookingToBot(input: BotBookingPayload): Promise<Messages> {
    try {
      const result = await axios.post(`${this.path}/booking/bot`, input, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("sendBookingToBot", result);
      return result.data;
    } catch (err) {
      console.log("Error sendBookingToBot", err);
      throw err;
    }
  }
}

export default BotService;
