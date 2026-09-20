// src/features/hotel/sections/HotelDining.jsx
// Dedicated culinary showcase for Crown Victoria Hotel Tulungagung (Purple Theme)

import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Coffee, Flame, Clock, Sparkles, PhoneCall } from "lucide-react";

export function HotelDining({ phone = "085196221716" }) {
  const handleReserveTable = (restoName) => {
    const text = encodeURIComponent(
      `Halo Crown Victoria Hotel Tulungagung, saya ingin reservasi meja / info menu di *${restoName}*. Terima kasih.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="dining" className="py-24 px-4 sm:px-6 bg-[#FAFAFD] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-bold uppercase tracking-widest mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5 text-purple-700" />
            <span>Pengalaman Kuliner Eksklusif</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Sultan Café & Venezia Pool Bar
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Nikmati cita rasa istimewa masakan Nusantara, Barat, dan Chinese favorit dengan sensasi
            live cooking station saat sarapan pagi, atau bersantai sore di tepi kolam renang.
          </p>
        </div>

        {/* 2 Main Dining Highlights */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* 1. Sultan Cafe & Resto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 hover:border-purple-500/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200 text-xs font-bold">
                  <Flame className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
                  Live Cooking Breakfast
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-3">
                Sultan Café & Resto
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Restoran utama hotel yang menyuguhkan buffet sarapan pagi lengkap dan pilihan menu makan siang/malam. Keistimewaan yang paling dicintai para tamu adalah live cooking nasi goreng khas Crown Victoria dan ragam kreasi telur segar yang dimasak hangat di hadapan Anda.
              </p>

              <div className="space-y-3 py-4 border-y border-zinc-100 text-xs text-zinc-700 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Sarapan Pagi Buffet:</span>
                  <span className="text-zinc-600">06:00 - 10:00 WIB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Makan Siang (Lunch):</span>
                  <span className="text-zinc-600">12:00 - 14:30 WIB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Makan Malam (Dinner):</span>
                  <span className="text-zinc-600">18:00 - 22:00 WIB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleReserveTable("Sultan Café & Resto")}
              className="w-full py-3.5 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-purple-400" />
              <span>Reservasi Meja di Sultan Resto</span>
            </button>
          </motion.div>

          {/* 2. Venezia Resto & Pool Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 hover:border-purple-500/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <Wine className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  Poolside Atmosphere
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-3">
                Venezia Resto & Pool Bar
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Menghadirkan suasana kasual santai bernuansa tropis tepat di pinggir kolam renang. Pilihan sempurna untuk menikmati mocktail segar, jus tropis dingin, kopi racikan barista, piza renyah, dan pasta hangat setelah berenang atau saat santai sore.
              </p>

              <div className="space-y-3 py-4 border-y border-zinc-100 text-xs text-zinc-700 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Jam Operasional:</span>
                  <span className="text-zinc-600">10:00 - 22:00 WIB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Spesialisasi Menu:</span>
                  <span className="text-zinc-600">Mocktails, Pizza, Pasta & Light Bites</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Suasana:</span>
                  <span className="text-zinc-600">Al fresco poolside & semi-outdoor lounge</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleReserveTable("Venezia Resto & Pool Bar")}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Info Menu & Reservasi Venezia</span>
            </button>
          </motion.div>
        </div>

        {/* 24-Hour In-Room Dining banner */}
        <div className="p-6 rounded-2xl bg-zinc-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-purple-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                24-Hour In-Room Dining Service
              </h4>
              <p className="text-xs text-zinc-400">
                Pesan hidangan lezat langsung ke kamar Anda kapan saja untuk privasi dan kenyamanan istirahat optimal.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-purple-300 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-400/30 whitespace-nowrap">
            Tersedia 24 Jam Nonstop
          </span>
        </div>
      </div>
    </section>
  );
}
