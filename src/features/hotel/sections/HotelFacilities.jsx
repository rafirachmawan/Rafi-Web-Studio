// src/features/hotel/sections/HotelFacilities.jsx
// Authentic facilities showcase for Crown Victoria Hotel Tulungagung (Purple Theme)

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Waves,
  UtensilsCrossed,
  Wine,
  Dumbbell,
  Sparkles,
  Calendar,
  Briefcase,
  Gamepad2,
  Clock,
  MapPin,
  Check,
} from "lucide-react";
import { FACILITIES_DATA } from "../data/hotelData";

export function HotelFacilities() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "Semua Fasilitas" },
    { id: "recreation", label: "Kolam & Hiburan" },
    { id: "dining", label: "Kuliner & Dining" },
    { id: "wellness", label: "Spa & Kebugaran" },
    { id: "events", label: "Ballroom & MICE" },
  ];

  const filteredFacilities = activeTab === "all"
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((f) => f.category === activeTab);

  const getIcon = (id) => {
    switch (id) {
      case "indoor-pool":
        return Waves;
      case "sultan-resto":
        return UtensilsCrossed;
      case "venezia-bar":
        return Wine;
      case "fitness-gym":
        return Dumbbell;
      case "spa-wellness":
        return Sparkles;
      case "grand-ballroom":
        return Calendar;
      case "meeting-rooms":
        return Briefcase;
      case "kids-playroom":
        return Gamepad2;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="facilities" className="py-24 px-4 sm:px-6 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Fasilitas Bintang 4 Lengkap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Pengalaman Rekreasi, Kuliner & Relaksasi
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Dari keseruan kolam renang indoor dengan water slide hingga kenikmatan sarapan live cooking di Sultan Resto, nikmati kenyamanan tanpa batas dalam satu tempat.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredFacilities.map((facility) => {
              const IconComponent = getIcon(facility.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={facility.id}
                  className="p-6 rounded-3xl bg-[#FAF9FC] border border-zinc-200 hover:border-purple-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Icon & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                        {facility.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-zinc-950 mb-2 group-hover:text-purple-700 transition-colors">
                      {facility.title}
                    </h3>

                    <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                      {facility.desc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 text-xs text-zinc-600 mb-6">
                      {facility.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hours & Location Footer */}
                  <div className="pt-4 border-t border-zinc-200/60 text-[11px] text-zinc-500 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-zinc-400" />
                      <span>{facility.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      <span>{facility.location}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
