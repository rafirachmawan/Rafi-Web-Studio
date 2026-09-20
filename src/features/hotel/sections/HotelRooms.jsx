// src/features/hotel/sections/HotelRooms.jsx
// Interactive room catalog with filtering & modal details for Crown Victoria Hotel Tulungagung (Purple Theme)

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bed, Users, Maximize2, Check, ArrowRight, Sparkles, PhoneCall, Info } from "lucide-react";
import { ROOMS_DATA } from "../data/hotelData";
import { HotelRoomModal } from "../components/HotelRoomModal";

export function HotelRooms({ phone = "085196221716" }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedRoom, setSelectedRoom] = useState(null);

  const filterTabs = [
    { id: "all", label: "Semua Kamar" },
    { id: "deluxe", label: "Deluxe" },
    { id: "grand-deluxe", label: "Grand Deluxe" },
    { id: "suite", label: "Executive Suite" },
    { id: "standard", label: "Standard" },
  ];

  const filteredRooms = activeCategory === "all"
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === activeCategory);

  const handleDirectBook = (room) => {
    const text = encodeURIComponent(
      `Halo Crown Victoria Hotel Tulungagung, saya ingin reservasi kamar tipe *${room.name}* (${room.priceFormatted}/malam). Mohon informasi ketersediaan tanggalnya. Terima kasih.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="rooms" className="py-24 px-4 sm:px-6 bg-[#FAFAFD] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Akomodasi & Pilihan Kamar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Kamar & Suite Mewah Victorian
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Setiap kamar dirancang dengan standar kenyamanan bintang 4, furnitur kayu
            elegan bernuansa Victorian, fasilitas modern, dan suasana hening untuk istirahat terbaik Anda.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                  : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredRooms.map((room) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={room.id}
                className="bg-white rounded-3xl border border-zinc-200 hover:border-purple-500/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Visual Card Header / Placeholder with Luxury Badge */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-zinc-900 via-zinc-800 to-purple-950 flex items-center justify-center p-6 text-center text-white overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/15 via-transparent to-black/40" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-purple-400/40 text-purple-300 text-[11px] font-bold tracking-wide">
                    {room.badge}
                  </div>

                  <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-medium">
                    {room.size}
                  </div>

                  <div className="relative z-10 space-y-2">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                      <Bed className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-purple-200/90 tracking-wider uppercase block">
                      Victorian Comfort
                    </span>
                    <span className="text-sm font-semibold text-zinc-300 block">
                      {room.bed}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-zinc-950 tracking-tight mb-1 group-hover:text-purple-700 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-zinc-500 mb-4 line-clamp-2">
                      {room.tagline}
                    </p>

                    {/* Room Key Specs */}
                    <div className="flex items-center gap-4 py-3 border-y border-zinc-100 text-xs text-zinc-600 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-purple-600" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-purple-600" />
                        <span>{room.capacity}</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-2 text-xs text-zinc-600 mb-6">
                      {room.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-zinc-500 font-medium">Tarif / Malam</span>
                      <div className="text-right">
                        <span className="text-xl font-black text-zinc-950">
                          {room.priceFormatted}
                        </span>
                        <span className="text-[11px] text-zinc-500 block">Termasuk Pajak & Layanan</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <button
                        onClick={() => setSelectedRoom(room)}
                        className="py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-purple-50 hover:text-purple-700 text-zinc-800 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Detail Kamar</span>
                      </button>

                      <button
                        onClick={() => handleDirectBook(room)}
                        className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-purple-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Pesan Kamar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Detail Modal */}
      <HotelRoomModal
        room={selectedRoom}
        isOpen={Boolean(selectedRoom)}
        onClose={() => setSelectedRoom(null)}
        phone={phone}
      />
    </section>
  );
}
