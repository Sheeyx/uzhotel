// src/pages/AboutPage.tsx
import React from "react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      {/* Back */}
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-gray-100"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Ortga
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
        S-Namangan mehmonxonasi haqida
      </h1>

      {/* === GALLERY (full width) === */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Big image left */}
        <div className="lg:col-span-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src="/assets/about/about1.png"
              alt="S-Namangan mehmonxonasi — asosiy ko‘rinish"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Right 2x2 grid on desktop */}
        <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4">
          <img src="/assets/about/about2.png" alt="Mehmonxona interyeri 1" className="h-full w-full rounded-2xl object-cover" loading="lazy" />
          <img src="/assets/about/about3.png" alt="Mehmonxona interyeri 2" className="h-full w-full rounded-2xl object-cover" loading="lazy" />
          <img src="/assets/about/about4.png" alt="Mehmonxona interyeri 3" className="h-full w-full rounded-2xl object-cover" loading="lazy" />
          <img src="/assets/about/about5.png" alt="Mehmonxona interyeri 4" className="h-full w-full rounded-2xl object-cover" loading="lazy" />
        </div>
      </div>

      {/* Mobile extra images */}
      <div className="mt-4 grid grid-cols-2 gap-4 lg:hidden">
        <img src="/assets/about/about2.png" alt="Interyer 1" className="h-full w-full rounded-2xl object-cover" loading="lazy" />
        <img src="/assets/about/about3.png" alt="Interyer 2" className="h-full w-full rounded-2xl object-cover" loading="lazy" />
        <img src="/assets/about/about4.png" alt="Interyer 3" className="h-full w-full rounded-2xl object-cover" loading="lazy" />
        <img src="/assets/about/about5.png" alt="Interyer 4" className="h-full w-full rounded-2xl object-cover" loading="lazy" />
      </div>

      {/* === CONTENT + BOOKING (two-column) === */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* LEFT: text content */}
        <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold">S- Namangan mehmonxonasi</h2>
            <p>2 mehmon · Studio · 2 ta yotoq · 1 ta hammom</p>
            <p>O‘z-o‘zidan kirish — Kalit orqali mustaqil kirish mumkin.</p>
            <p>Ajoyib restoranlar yaqin — Mehmonlar yaqin atrofda juda yaxshi ovqatlanish maskanlari borligini aytishgan.</p>
            <p>16-oktabrgacha bepul bekor qilish — Fikringiz o‘zgarsa, to‘liq pul qaytariladi.</p>

            <ul className="list-disc list-inside space-y-1">
              <li>Shkaf, kir yuvish mashinasi, kiyim quritgich, dazmol taxtasi va dazmol</li>
              <li>Shaxsiy hammom (dush yoki vanna bilan)</li>
              <li>Fen va boshqa gigiena vositalari</li>
              <li>Yuqori tezlikdagi internet va kabel TV</li>
              <li>42 dyuymli “Smart TV”</li>
              <li>Ortopedik matraslar, qorong‘ulatkich pardalar</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">S-Namangan mehmonxonasi Qulaylik va Shinamlik Maskani!</h2>
            <p>
              S-Namangan mehmonxonasi – Namangan shahrining markazida joylashgan zamonaviy, qulay va mehmonlarga do‘stona muhit
              yaratadigan maskan. Mehmonxona 2007 yildan beri faoliyat yuritib kelmoqda va bugungi kunda shahar mehmonlari uchun eng
              tanilgan turar joylardan biridir.
            </p>
            <p>Bizning maqsadimiz – har bir mehmonimizga o‘zini uyidagidek erkin va qulay his qilish imkonini yaratish.</p>
          </div>

          {/* Amenities */}
          <div className="pt-2">
            <h2 className="text-xl font-bold mb-4">Namangan markazida qulaylik va mehmondo‘stlik</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              <li>🍽 Nonushta "Bufet"</li>
              <li>🅿 Parking Space</li>
              <li>🏊‍♂️ Yozgi Basseyn</li>
              <li>📶 Wi-Fi</li>
              <li>🧖 Sauna</li>
              <li>🕊 Qushlar</li>
            </ul>
          </div>
        </div>

        {/* RIGHT: booking widget (sticky) */}
        <aside className="lg:col-span-1 lg:sticky lg:top-24 h-max">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md">
            <h3 className="mb-4 text-lg font-semibold">Xonalarni band qilish</h3>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Kelish sanasi</label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Ketish sanasi</label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Mehmonlar</label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>

              <button className="w-full rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90">
                Band qilish
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
