// src/features/hotel/sections/HotelCTA.jsx
// Final luxury call-to-action section for Crown Victoria Hotel Tulungagung (Purple Theme)

import { motion } from "framer-motion";
import { PhoneCall, Calendar, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { HOTEL_INFO } from "../data/hotelData";

export function HotelCTA({ phone = "085196221716" }) {
  const handleBooking = () => {
    const text = encodeURIComponent(
      `Halo Crown Victoria Hotel Tulungagung, saya ingin reservasi kamar untuk rencana menginap saya. Mohon informasi ketersediaan kamar dan promo terbaiknya. Terima kasih.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-purple-950 text-white p-8 sm:p-14 overflow-hidden shadow-2xl border border-purple-500/30">
          {/* Ambient radial glows */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Garansi Harga Terbaik Terjamin</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              Rencanakan Menginap Berkelas di Tulungagung
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
              Pesan langsung tanpa perantara untuk mendapatkan jaminan tarif terendah,
              prioritas pemilihan kamar, serta layanan personal staf kami selama 24 jam.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Reservasi Cepat via WhatsApp</span>
              </button>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Hubungi Hotline: {HOTEL_INFO.phone}</span>
              </a>
            </div>

            {/* Perks Underneath */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Tanpa Biaya Reservasi Tambahan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Gratis Akses Kolam Indoor & Gym</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Staf 24 Jam Siaga Melayani</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
