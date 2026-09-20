import { motion } from "framer-motion";
import { MessageCircle, Clock, MapPin, CalendarCheck, UtensilsCrossed } from "lucide-react";
import { restoInfo } from "../data/resto";

export function RestoCTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-200 text-xs font-bold uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5 text-violet-300" />
            <span>Buka 24 Jam Setiap Hari</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            Lapar? Langsung Pesan di Mie Gacoan Mojokerto!
          </h2>

          <p className="text-violet-200 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Melayani pesanan online via WhatsApp, dine-in, takeaway, serta reservasi rombongan & acara.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {/* WhatsApp Order */}
            <a
              href={restoInfo.waOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-violet-50 text-violet-900 font-black rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-black/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 text-violet-700" />
              <span>Order WhatsApp</span>
            </a>

            {/* Reservation Contact */}
            <a
              href="https://wa.me/6285708428376?text=Halo%20Kak%20Kartika%2C%20saya%20ingin%20reservasi%20meja%20di%20Mie%20Gacoan%20Mojokerto."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-violet-800/60 hover:bg-violet-800/90 border border-violet-400/40 text-white font-bold rounded-xl text-sm uppercase tracking-wider transition-all"
            >
              <CalendarCheck className="w-5 h-5 text-violet-300" />
              <span>Reservasi (A.N Kartika)</span>
            </a>
          </div>

          {/* Quick Info Grid */}
          <div id="info" className="pt-8 border-t border-violet-800/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-violet-200">
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-violet-950/40 border border-violet-800/40">
              <Clock className="w-4 h-4 text-violet-400 shrink-0" />
              <span>24 Jam Non-Stop</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-violet-950/40 border border-violet-800/40">
              <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
              <span className="truncate">Jl. Jenderal Sudirman, Mojokerto</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-violet-950/40 border border-violet-800/40">
              <UtensilsCrossed className="w-4 h-4 text-violet-400 shrink-0" />
              <span>46 Menu Pilihan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
