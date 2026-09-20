import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rental } from "../data/rental";
import { ChevronRight, ChevronLeft, ArrowRight, Shield, Award, Users, Compass, Calculator, MapPin } from "lucide-react";

export function RentalHero() {
  const banners = rental.banners || [];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-gradient-to-b from-white via-zinc-50 to-blue-50/20 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-32 sm:pt-36 pb-16 overflow-hidden">
      {/* Subtle Background Circuit & Radial Accent */}
      <div
        className="absolute inset-0 opacity-25 dark:opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, rgba(0, 51, 160, 0.15) 0%, transparent 45%), radial-gradient(circle at 85% 70%, rgba(230, 0, 18, 0.1) 0%, transparent 50%)",
        }}
      />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Top Official Tagline */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
              {rental.tagline}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-zinc-950 dark:text-white font-heading tracking-tight leading-[1.08]">
              Revs Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Heart</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mt-2 tracking-wide font-heading">
              The Ultimate Motor Experience
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Website resmi PT Yamaha Indonesia Motor Manufacturing (YIMM). Temukan informasi spesifikasi motor terbaru, simulasi kredit cerdas, booking servis, dan jaringan dealer resmi se-Indonesia.
          </motion.p>

          {/* Quick CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            <a
              href="#products"
              className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
            >
              <Compass size={17} />
              <span>Jelajahi 6 Kategori</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#calculator"
              className="px-7 py-3.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 text-zinc-800 dark:text-zinc-200 font-bold text-sm sm:text-base shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Calculator size={17} className="text-amber-500" />
              <span>Hitung Simulasi Kredit</span>
            </a>

            <a
              href="#dealers"
              className="px-6 py-3.5 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-sm transition-all flex items-center gap-2"
            >
              <MapPin size={16} className="text-blue-600" />
              <span>Cari Dealer</span>
            </a>
          </motion.div>
        </div>

        {/* Live Promotional Campaign Carousel */}
        <div className="relative max-w-5xl mx-auto mt-6 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 dark:border-zinc-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={`p-7 sm:p-10 bg-gradient-to-r ${banners[currentSlide].bgGradient} text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden`}
            >
              <div className="space-y-3 z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span>{banners[currentSlide].tag}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tight leading-snug">
                  {banners[currentSlide].title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
                  {banners[currentSlide].subtitle}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3 z-10">
                <a
                  href="#products"
                  className="px-6 py-3 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Lihat Unit</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Slide Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-8 bg-white" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Quick Stats Ticker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {rental.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs flex flex-col justify-between"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {stat.label}
              </span>
              <p className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-white font-heading mt-1">
                {stat.value}
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
