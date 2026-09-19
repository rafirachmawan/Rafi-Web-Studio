// src/sections/hotel/HotelHero.jsx
// Clean Minimalist Hero Section for Crown Victoria Hotel

import { motion } from 'framer-motion';

export function HotelHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)"
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 py-32 max-w-6xl mx-auto">
        {/* Animated badge/tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-zinc-200 shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <p className="text-zinc-700 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            Crown Victoria Hotel Tulungagung
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-zinc-900 mb-6 leading-tight"
        >
          Where Victorian<br />
          <span className="text-purple-600">Elegance Meets</span><br />
          Modern Luxury
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Nikmati fasilitas bintang 4 terbaik dengan pesona arsitektur khas Victorian yang klasik dan layanan ramah di pusat kota Tulungagung.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Button - Explore Rooms */}
          <a
            href="#rooms"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-full text-sm sm:text-base shadow-lg shadow-purple-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/40 hover:scale-105 active:scale-95"
          >
            <span>Explore Rooms</span>
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            >
              ↓
            </motion.span>
          </a>

          {/* Secondary Button - View Facilities */}
          <a
            href="#facilities"
            className="group px-8 py-4 bg-white border-2 border-zinc-200 hover:border-purple-600 text-zinc-800 hover:text-purple-600 font-bold rounded-full text-sm sm:text-base transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <span>View Facilities</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
