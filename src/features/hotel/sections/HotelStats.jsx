// src/features/hotel/sections/HotelStats.jsx
// Metric stats & verified review scores for Crown Victoria Hotel Tulungagung (Purple Theme)

import { motion } from "framer-motion";
import { Award, MapPin, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, Waves, UtensilsCrossed } from "lucide-react";
import { HOTEL_STATS, RATING_BREAKDOWN } from "../data/hotelData";

export function HotelStats() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white border-y border-zinc-200">
      <div className="max-w-6xl mx-auto">
        {/* Top Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {HOTEL_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[#FAF9FC] border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-700 mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Review Breakdown & Special Advantages */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Rating Scores Bar */}
          <div className="lg:col-span-6 bg-[#FAF9FC] p-7 sm:p-9 rounded-3xl border border-zinc-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-1.5 text-purple-700 text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  <span>Skor Tamu Terverifikasi</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-900">
                  Kepuasan Pengunjung
                </h3>
              </div>

              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-black text-purple-700">7.3</span>
                <span className="text-xs text-zinc-500 block">dari 10</span>
              </div>
            </div>

            <div className="space-y-4">
              {RATING_BREAKDOWN.map((item, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-zinc-800">{item.category}</span>
                    <span className="text-purple-700 font-bold">{item.score} / 10</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-zinc-200 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.score / 10) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                    />
                  </div>
                  <div className="text-[10px] text-zinc-500 italic text-right">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Keunggulan Utama Properti */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>Mengapa Memilih Crown Victoria</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
              Hospitality Bintang 4 dengan Kenyamanan Tanpa Kompromi
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Dikenal dengan keramahan tulus khas Jawa Timur, Crown Victoria Hotel menjadi
              pilihan utama para pebisnis, keluarga, dan tamu penting saat berkunjung ke Tulungagung.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900">Kolam Indoor & Perosotan</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Bebas sengatan matahari dan hujan kapan saja.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900">Live Cooking Breakfast</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Nasi goreng & hidangan telur segar dimasak di depan Anda.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900">Hanya 5 Mnt ke Stasiun</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Sangat ideal untuk pelancong kereta api & transit.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900">Parkir Valet & ATM On-Site</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Kemudahan parkir tanpa repot dan transaksi tunai aman.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
