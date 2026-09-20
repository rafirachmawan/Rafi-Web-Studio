import { motion } from "framer-motion";
import { Flame, ChevronDown, MessageCircle, Utensils, Clock, Sparkles, MapPin } from "lucide-react";
import { restoInfo } from "../data/resto";

export function RestoHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-purple-50/60 via-white to-violet-50/40 overflow-hidden">
      {/* Background glow effects - Purple/Violet */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[12%] left-[8%] w-[500px] h-[500px] rounded-full bg-violet-200/40 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[6%] w-[550px] h-[550px] rounded-full bg-purple-200/35 blur-[160px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(109, 40, 217, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(109, 40, 217, 0.2) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Top Pill: Official Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 bg-violet-50/90 text-violet-700 shadow-sm mb-6">
            <Flame className="w-4 h-4 text-violet-600 fill-violet-600" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Spicy Food Revolution • Mojokerto
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-medium text-emerald-600">Buka 24 Jam</span>
          </div>

          {/* Main heading with purple/indigo gradient */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 leading-[1.08] tracking-tight">
            Mie Pedas
            <br />
            <span className="text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text">
              No.1 Indonesia
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Nikmati sensasi mie pedas legendaris berlevel, dimsum renyah gurih, dan es manis segar di Mie Gacoan Mojokerto. Tempat nongkrong favorit 24 jam dengan harga serba ramah!
          </p>

          {/* Quick Stat Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-purple-100 shadow-sm text-xs font-medium text-slate-700">
              <Utensils className="w-3.5 h-3.5 text-violet-600" />
              <span>46 Menu Lengkap</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-purple-100 shadow-sm text-xs font-medium text-slate-700">
              <Clock className="w-3.5 h-3.5 text-violet-600" />
              <span>Layanan 24 Jam Non-stop</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-purple-100 shadow-sm text-xs font-medium text-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Mulai Rp 4.500</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-purple-100 shadow-sm text-xs font-medium text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-violet-600" />
              <span>Jl. Jenderal Sudirman</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-600/25 hover:shadow-violet-600/35 transform hover:-translate-y-0.5"
            >
              <span>Lihat Menu & Harga</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href={restoInfo.waOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white border-2 border-violet-200 text-violet-700 font-bold rounded-xl transition-all hover:bg-violet-50 hover:border-violet-400 shadow-sm hover:shadow"
            >
              <MessageCircle className="w-5 h-5 text-violet-600" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Banner Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-14 relative mx-auto max-w-4xl rounded-2xl overflow-hidden border border-purple-100 shadow-xl bg-white"
        >
          <div className="relative aspect-[21/9] sm:aspect-[24/9] overflow-hidden">
            <img
              src={restoInfo.banner}
              alt="Mie Gacoan Mojokerto Banner"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex items-end p-6 sm:p-8">
              <div className="flex items-center gap-4 text-left">
                <img
                  src={restoInfo.logoThumbnail || restoInfo.logo}
                  alt="Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-1.5 shadow-md border border-white/40 object-contain"
                />
                <div>
                  <h2 className="text-white font-black text-lg sm:text-2xl tracking-tight leading-tight">
                    Mie Gacoan Mojokerto
                  </h2>
                  <p className="text-violet-200 text-xs sm:text-sm font-medium">
                    Jl. Jenderal Sudirman, Mergelo, Kota Mojokerto • Buka 24 Jam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none hidden md:block"
      >
        <div className="flex flex-col items-center gap-1.5 text-violet-400/80">
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll Menu</span>
          <div className="w-px h-8 bg-gradient-to-b from-violet-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
