// src/features/hotel/components/HotelRoomModal.jsx
// Modal interaktif detail kamar Crown Victoria Hotel Tulungagung (Purple Theme)

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Bed, Users, Maximize2, Coffee, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";

export function HotelRoomModal({ room, isOpen, onClose, phone = "085196221716" }) {
  if (!isOpen || !room) return null;

  const handleBooking = () => {
    const text = encodeURIComponent(
      `Halo Crown Victoria Hotel Tulungagung, saya tertarik dan ingin reservasi tipe kamar *${room.name}* (${room.priceFormatted}/malam). Mohon informasi ketersediaan tanggalnya. Terima kasih.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-purple-500/20 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-zinc-950 via-zinc-900 to-purple-950 p-6 sm:p-8 text-white">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{room.badge || "Pilihan Bintang 4"}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
              {room.name}
            </h3>
            <p className="text-purple-200/80 text-sm">{room.tagline}</p>

            {/* Quick Specs Pill */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 pt-6 border-t border-white/10 text-center">
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                <Maximize2 className="w-4 h-4 mx-auto text-purple-400 mb-1" />
                <span className="text-[11px] text-zinc-400 block">Luas Kamar</span>
                <span className="text-xs sm:text-sm font-bold text-white">{room.size}</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                <Bed className="w-4 h-4 mx-auto text-purple-400 mb-1" />
                <span className="text-[11px] text-zinc-400 block">Tipe Ranjang</span>
                <span className="text-xs sm:text-sm font-bold text-white truncate">{room.bed}</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                <Users className="w-4 h-4 mx-auto text-purple-400 mb-1" />
                <span className="text-[11px] text-zinc-400 block">Kapasitas</span>
                <span className="text-xs sm:text-sm font-bold text-white">{room.capacity}</span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-zinc-700">
            {/* Deskripsi */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
                Deskripsi Kamar
              </h4>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Fitur Kamar */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-3">
                Fitur & Spesifikasi
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                    <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-purple-700 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fasilitas & Amenities */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-3">
                Fasilitas Kamar (Amenities)
              </h4>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-medium"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Keuntungan Pemesanan Langsung */}
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-xs sm:text-sm text-purple-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-purple-950">
                <ShieldCheck className="w-4 h-4 text-purple-700" />
                <span>Keuntungan Reservasi Langsung:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-purple-800 text-xs pl-1">
                <li>Garansi Harga Terbaik tanpa biaya booking tersembunyi</li>
                <li>Akses kolam renang indoor ber-perosotan & fitness gym gratis</li>
                <li>Layanan parkir valet gratis & sambutan concierge 24 jam</li>
              </ul>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-5 sm:p-6 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-zinc-500 block">Tarif Mulai Dari</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-zinc-950">
                  {room.priceFormatted}
                </span>
                <span className="text-xs text-zinc-500 font-medium">/ malam</span>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Reservasi Kamar Ini</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
