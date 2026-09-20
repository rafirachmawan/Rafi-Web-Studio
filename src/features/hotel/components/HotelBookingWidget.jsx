// src/features/hotel/components/HotelBookingWidget.jsx
// Interactive direct booking reservation bar for Crown Victoria Hotel Tulungagung (Purple Theme)

import { useState } from "react";
import { Calendar, Users, Home, Search, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { ROOMS_DATA } from "../data/hotelData";

export function HotelBookingWidget({ phone = "085196221716" }) {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [roomType, setRoomType] = useState("Deluxe Double Room");
  const [guests, setGuests] = useState("2 Tamu Dewasa");

  const calculateNights = () => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = Math.abs(d2 - d1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  };

  const handleSearchAndBook = (e) => {
    e.preventDefault();
    const nights = calculateNights();
    const msg = encodeURIComponent(
      `Halo Crown Victoria Hotel Tulungagung, saya ingin reservasi kamar dengan rincian:\n` +
      `• Tipe Kamar: ${roomType}\n` +
      `• Check-in: ${checkIn}\n` +
      `• Check-out: ${checkOut} (${nights} malam)\n` +
      `• Jumlah Tamu: ${guests}\n\n` +
      `Apakah kamar masih tersedia untuk tanggal tersebut? Terima kasih.`
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Widget Container */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 shadow-2xl border border-purple-500/20 shadow-purple-950/10 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-zinc-900">
              Reservasi Langsung • Harga Terbaik Terjamin
            </h3>
          </div>
          <span className="text-xs font-semibold text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 inline-block w-fit">
            {calculateNights()} Malam Menginap
          </span>
        </div>

        <form onSubmit={handleSearchAndBook} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Check-In */}
          <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-zinc-50 border border-zinc-200 focus-within:border-purple-500 focus-within:bg-purple-50/20 transition-all">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-purple-600" />
              Check-In
            </label>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-sm font-semibold text-zinc-900 focus:outline-none cursor-pointer"
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-zinc-50 border border-zinc-200 focus-within:border-purple-500 focus-within:bg-purple-50/20 transition-all">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-purple-600" />
              Check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-sm font-semibold text-zinc-900 focus:outline-none cursor-pointer"
            />
          </div>

          {/* Room Selection */}
          <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-zinc-50 border border-zinc-200 focus-within:border-purple-500 focus-within:bg-purple-50/20 transition-all">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-purple-600" />
              Tipe Kamar
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="bg-transparent text-sm font-semibold text-zinc-900 focus:outline-none cursor-pointer"
            >
              {ROOMS_DATA.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name} ({r.priceFormatted})
                </option>
              ))}
            </select>
          </div>

          {/* Guests & Action Button */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-zinc-50 border border-zinc-200 focus-within:border-purple-500 focus-within:bg-purple-50/20 transition-all">
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-purple-600" />
                Jumlah Tamu
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-transparent text-sm font-semibold text-zinc-900 focus:outline-none cursor-pointer"
              >
                <option value="1 Tamu Dewasa">1 Tamu Dewasa</option>
                <option value="2 Tamu Dewasa">2 Tamu Dewasa</option>
                <option value="2 Dewasa + 1 Anak">2 Dewasa + 1 Anak</option>
                <option value="3+ Dewasa (Keluarga)">3+ Tamu (Rombongan)</option>
              </select>
            </div>
          </div>

          {/* Submit Button spanning full width */}
          <div className="lg:col-span-4 mt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black text-sm sm:text-base shadow-xl shadow-purple-600/25 hover:shadow-2xl hover:shadow-purple-600/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 tracking-wide cursor-pointer"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
              <span>Cek Ketersediaan & Booking via WhatsApp</span>
            </button>
          </div>
        </form>

        {/* Perks Badges under widget */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 pt-4 border-t border-zinc-100 text-xs text-zinc-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span>Garansi Harga Termurah</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span>Gratis Parkir Valet</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span>Kolam Indoor & Gym Gratis</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span>Resepsionis Siaga 24 Jam</span>
          </div>
        </div>
      </div>
    </div>
  );
}
