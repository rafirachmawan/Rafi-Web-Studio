import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "../../assets/Video.mp4";
import { Star, CheckCircle, Zap } from "lucide-react";

const phrases = [
  "Website yang Menjual",
  "Sistem Kasir Efisien",
  "Mobile App Modern",
  "Landing Page Premium"
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="relative overflow-hidden border border-black/10 dark:border-white/10 rounded-[24px] md:rounded-[40px] p-5 sm:p-6 md:p-10 bg-white dark:bg-zinc-950 backdrop-blur-lg mb-16 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors duration-300"
    >
      {/* SOFT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative grid md:grid-cols-2 gap-10 md:gap-8 items-center">
        {/* TEXT */}
        <div className="order-2 md:order-1 relative z-10">
          {/* BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs md:text-sm font-bold mb-5 md:mb-6 shadow-lg shadow-amber-500/10"
          >
            <Zap className="w-4 h-4" /> Solusi Digital All-in-One
          </motion.div>

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-black dark:text-white flex flex-col gap-1 sm:gap-2 min-h-[140px] sm:min-h-[160px] md:min-h-[180px]">
            <span>Bangun</span>
            <div className="relative w-full h-[90px] sm:h-[110px] md:h-[90px]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute left-0 top-0 w-full text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 pb-2"
                >
                  {phrases[index]}
                </motion.div>
              </AnimatePresence>
            </div>
          </h1>

          {/* DESC */}
          <p className="mt-2 md:mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg">
            Rafi Web Studio hadir untuk mendigitalisasi bisnis Anda dengan website cepat, dashboard interaktif, dan aplikasi mobile yang memukau.
          </p>

          {/* BUTTON */}
          <div className="flex flex-wrap gap-3 md:gap-4 mt-7 md:mt-8">
            <a
              href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold transition duration-300 hover:scale-[1.02] shadow-xl shadow-amber-500/20"
            >
              Konsultasi Gratis
            </a>

            <a
              href="#demo"
              className="border border-black/10 dark:border-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold text-black dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition duration-300"
            >
              Lihat Portofolio
            </a>
          </div>
        </div>

        {/* VIDEO & FLOATING BADGES */}
        <div className="order-1 md:order-2 relative h-[280px] sm:h-[320px] md:h-[420px] rounded-[32px] overflow-hidden border border-black/5 dark:border-white/10 bg-black group shadow-2xl">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-amber-500/20" />

          {/* Floating Badge 1 */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 left-6 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center gap-3 shadow-2xl"
          >
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-white font-black text-sm">Rating 5.0</p>
              <p className="text-white/70 text-xs font-medium">Klien Puas</p>
            </div>
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-6 right-6 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center gap-3 shadow-2xl"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-black text-sm">100+ Proyek</p>
              <p className="text-white/70 text-xs font-medium">Selesai Tepat Waktu</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
