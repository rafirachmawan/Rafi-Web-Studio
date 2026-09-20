// src/features/hotel/sections/HotelLocation.jsx
// Strategic location & Tulungagung attractions guide for Crown Victoria Hotel (Purple Theme)

import { motion } from "framer-motion";
import { MapPin, Navigation, Train, Compass, Landmark, Waves, ShoppingBag, ExternalLink } from "lucide-react";
import { HOTEL_INFO, NEARBY_LANDMARKS } from "../data/hotelData";

export function HotelLocation() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Train":
        return Train;
      case "Compass":
        return Compass;
      case "Landmark":
        return Landmark;
      case "Waves":
        return Waves;
      case "ShoppingBag":
        return ShoppingBag;
      default:
        return MapPin;
    }
  };

  return (
    <section id="location" className="py-24 px-4 sm:px-6 bg-[#FAFAFD] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5 text-purple-700" />
            <span>Lokasi Strategis 8.8 / 10</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Akses Terdekat ke Pusat Bisnis & Wisata
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Berada di jantung kota Tulungagung di Jl. Supriadi No. 41. Hanya 5 menit dari
            Stasiun Kereta Api Tulungagung dan dikelilingi destinasi kuliner serta wisata unggulan.
          </p>
        </div>

        {/* Location Card & Map Preview Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 text-white mb-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold">
              <span>📍 Alamat Resmi Crown Victoria Hotel</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {HOTEL_INFO.address}
            </h3>
            <p className="text-sm text-zinc-400">
              Dekat perkantoran, pusat pemerintahan, stasiun kereta, serta sentra oleh-oleh khas Tulungagung.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-zinc-300 justify-center lg:justify-start">
              <span className="flex items-center gap-1.5">
                <Train className="w-4 h-4 text-purple-400" />
                5 Menit ke Stasiun KA
              </span>
              <span className="flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-purple-400" />
                Gratis Parkir Valet
              </span>
            </div>
          </div>

          <a
            href={HOTEL_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Buka di Google Maps</span>
          </a>
        </div>

        {/* Nearby Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEARBY_LANDMARKS.map((landmark, idx) => {
            const IconComponent = getIcon(landmark.icon);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-white border border-zinc-200 hover:border-purple-500/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                    {landmark.distance}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                  {landmark.category}
                </div>

                <h4 className="text-base font-black text-zinc-900 mb-2">
                  {landmark.name}
                </h4>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {landmark.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
