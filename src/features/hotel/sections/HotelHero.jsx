// src/features/hotel/sections/HotelHero.jsx
// Redesigned Luxury Hero Section for Crown Victoria Hotel Tulungagung (Purple Dominant)

import { motion } from "framer-motion";
import { Sparkles, MapPin, Award, ArrowRight, PhoneCall, ShieldCheck, ChevronDown } from "lucide-react";
import { HotelBookingWidget } from "../components/HotelBookingWidget";
import { HOTEL_INFO } from "../data/hotelData";

export function HotelHero({ phone = "085196221716" }) {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#FAFAFD] via-[#F5F2FB] to-[#ECE7F7] text-zinc-900 overflow-hidden">
      {/* Subtle luxury ambient radial glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-purple-300/30 via-purple-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-60 -right-20 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative architectural grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Official Hotel Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-purple-500/30 shadow-sm shadow-purple-900/5 mb-6"
        >
          <span className="text-purple-600 font-bold text-xs tracking-wider">👑</span>
          <span className="text-zinc-800 text-xs font-black uppercase tracking-widest">
            HOTEL BINTANG 4 RESMI TULUNGAGUNG
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
          <span className="text-purple-800 text-xs font-bold">
            Rating 7.3/10
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-zinc-950 tracking-tight leading-[1.1] mb-6 max-w-4xl"
        >
          Kemewahan Klasik{" "}
          <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Victorian
          </span>{" "}
          di Jantung Tulungagung
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Nikmati pengalaman menginap bintang 4 yang tenang dan ramah dengan kolam
          renang <strong className="text-zinc-800 font-semibold">indoor ber-water slide</strong>,
          sarapan otentik dengan <strong className="text-zinc-800 font-semibold">live cooking</strong> di Sultan Resto,
          dan Victoria Grand Ballroom. Hanya 5 menit dari Stasiun Kereta Api.
        </motion.p>

        {/* Quick CTA Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#rooms"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-purple-600/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Lihat Kamar & Tarif</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent("Halo Crown Victoria Hotel, saya ingin bertanya info kamar dan fasilitas...")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-white/90 hover:bg-white border-2 border-zinc-200 hover:border-purple-500/60 text-zinc-800 hover:text-purple-700 font-bold text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-purple-600" />
            <span>Chat WhatsApp Concierge</span>
          </a>
        </motion.div>

        {/* Interactive Booking Bar Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full mb-12"
        >
          <HotelBookingWidget phone={phone} />
        </motion.div>

        {/* Key Highlights Pill Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl"
        >
          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-purple-950/5 text-left shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs shrink-0">
              8.8
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-900 leading-tight">Lokasi Terbaik</div>
              <div className="text-[11px] text-zinc-500">5 Mnt ke Stasiun KA</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-purple-950/5 text-left shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-sm shrink-0">
              🏊
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-900 leading-tight">Kolam Renang Indoor</div>
              <div className="text-[11px] text-zinc-500">Aman Terik & Hujan</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-purple-950/5 text-left shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-sm shrink-0">
              🍳
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-900 leading-tight">Live Cooking Resto</div>
              <div className="text-[11px] text-zinc-500">Sultan Café & Resto</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-purple-950/5 text-left shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-sm shrink-0">
              👑
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-900 leading-tight">Grand Ballroom</div>
              <div className="text-[11px] text-zinc-500">Wedding & Acara MICE</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
