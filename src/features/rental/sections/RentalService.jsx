import { motion } from "framer-motion";
import { Wrench, Smartphone, ShieldCheck, Clock, Award, Star, Check, ArrowRight, PhoneCall } from "lucide-react";
import { rental } from "../data/rental";

export function RentalService() {
  const services = rental.services || [];

  return (
    <section id="service" className="py-24 sm:py-32 bg-white dark:bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Wrench size={14} />
            <span>Purna Jual & Ekosistem Digital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white font-heading tracking-tight mb-4">
            Layanan Resmi & Teknologi Yamaha
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Menghadirkan kenyamanan berkendara dengan standar perawatan bengkel resmi bersertifikasi, suku cadang asli Jepang, serta teknologi digital pintar.
          </p>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-7 rounded-3xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-2xl bg-white dark:bg-zinc-700 shadow-xs group-hover:scale-110 transition-transform">
                    {svc.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {svc.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-heading mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-700/60 space-y-2">
                {svc.features?.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <Check size={14} className="text-blue-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner: 5-Year Frame Warranty & YES24 */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0033a0] via-blue-800 to-indigo-950 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={16} className="text-amber-400" />
                <span>Standar Mutu Pabrikan Teruji</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tight">
                Garansi Rangka 5 Tahun & Bantuan Darurat 24 Jam
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
                Seluruh rangka motor matic Yamaha diproduksi dengan standar presisi tinggi dan dilindungi masa garansi hingga 5 tahun / 50.000 KM. Khusus pemilik XMAX & TMAX, nikmati fasilitas darurat derek gratis YES24 tanpa batas waktu.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="https://wa.me/6285196221716?text=Halo%20Yamaha%2C%20saya%20ingin%20booking%20jadwal%20servis%20motor%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Wrench size={16} />
                <span>Booking Servis Online</span>
              </a>

              <a
                href="tel:02124575555"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
              >
                <PhoneCall size={16} />
                <span>Call Center (021) 2457 5555</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
