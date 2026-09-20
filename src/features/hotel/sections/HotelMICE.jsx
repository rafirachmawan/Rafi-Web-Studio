// src/features/hotel/sections/HotelMICE.jsx
// Ballroom & Meeting Rooms showcase for Crown Victoria Hotel Tulungagung (Purple Theme)

import { motion } from "framer-motion";
import { Users, Presentation, Calendar, Award, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";

export function HotelMICE({ phone = "085196221716" }) {
  const handleMiceInquiry = (eventName) => {
    const text = encodeURIComponent(
      `Halo Tim Sales & Banquet Crown Victoria Hotel Tulungagung, saya ingin meminta proposal & pricelist paket untuk acara *${eventName}*. Mohon informasi ketersediaan tanggal dan kapasitasnya. Terima kasih.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="mice" className="py-24 px-4 sm:px-6 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-bold uppercase tracking-widest mb-4">
            <Presentation className="w-3.5 h-3.5 text-purple-700" />
            <span>MICE, Meeting & Grand Ballroom</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Ruang Pertemuan & Ballroom Termegah di Tulungagung
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Wujudkan momen pernikahan impian atau sukseskan rapat kerja korporat Anda dengan
            fasilitas audio-visual mutakhir, tata ruang fleksibel, dan katering istimewa.
          </p>
        </div>

        {/* 2 Main Spaces Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* 1. Victoria Grand Ballroom (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-purple-950 text-white flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                  👑 Grand Ballroom
                </span>
                <span className="text-xs text-zinc-400">
                  Hingga Ratusan Tamu Undangan
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Victoria Grand Ballroom
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Pilihan utama untuk perayaan pernikahan megah (Wedding Reception), wisuda akbar, rapat umum pemegang saham, pameran bisnis, dan gala dinner perusahaan. Dilengkapi panggung utama, pencahayaan panggung dramatis, sound system canggih, dan ruang rias/VIP holding room.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 mb-6 text-xs text-zinc-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-purple-300 font-bold mb-1">Layout Banquet</div>
                  <div>Meja Bundar (Round Table)</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-purple-300 font-bold mb-1">Layout Theatre</div>
                  <div>Kapasitas Maksimal</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-purple-300 font-bold mb-1">Fasilitas VIP</div>
                  <div>Make-up & Transit Room</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleMiceInquiry("Victoria Grand Ballroom / Wedding Package")}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-purple-500/20 hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Minta Proposal Paket Wedding & Ballroom</span>
            </button>
          </motion.div>

          {/* 2. Executive Meeting Rooms (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#FAF9FC] border border-zinc-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider">
                  💼 Business MICE
                </span>
                <span className="text-xs text-zinc-500">
                  Rapat Kerja & Pelatihan
                </span>
              </div>

              <h3 className="text-2xl font-black text-zinc-950 mb-3">
                Executive Meeting Rooms
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Ruang rapat privat dengan tata pendingin udara optimal dan pencahayaan terang yang mendukung fokus dan produktivitas pertemuan bisnis Anda.
              </p>

              <div className="space-y-2.5 text-xs text-zinc-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Pilihan konfigurasi meja: U-Shape, Classroom, Boardroom</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Layar proyektor LCD & sistem audio wireless</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Memo pad, pensil rapat, permen, dan air mineral</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Katering coffee break lezat & buffet prasmanan makan siang</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleMiceInquiry("Executive Meeting Room")}
              className="w-full py-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-purple-400" />
              <span>Konsultasi Paket Meeting Rapat</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
