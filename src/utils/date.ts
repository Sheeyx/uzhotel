// src/utils/date.ts
export function diffNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const inD = new Date(checkIn);
  const outD = new Date(checkOut);
  const ms = outD.getTime() - inD.getTime();
  if (Number.isNaN(ms) || ms <= 0) return 0;
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}
