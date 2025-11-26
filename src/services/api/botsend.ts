// src/services/BotService.ts
import axios from "axios";
import { API_KEY, serverApi } from "../config";

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

export type Messages = any;

class BotService {
  private readonly path: string;
  

  constructor() {
    // ❗ Faqat backend URL bo‘ladi
    this.path = serverApi;        
  }


  public async sendBookingToBot(input: BotBookingPayload): Promise<Messages> {
    console.log(this.path, "this.path")
    console.log(API_KEY)
    try {
      const result = await axios.post(
        `${this.path}/booking/bot`,   // ❗ endpoint shu
        input,
        {
          withCredentials: false,    // cookie kerak emas
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,    // ❗ API KEY shu yerda ketadi
          },
        }
      );

      console.log("sendBookingToBot", result.data);
      return result.data;
    } catch (err) {
      console.log("Error sendBookingToBot", err);
      throw err;
    }
  }
}

export default BotService;
