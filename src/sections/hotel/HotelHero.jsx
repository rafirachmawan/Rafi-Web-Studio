// src/sections/hotel/HotelHero.jsx
// Clean, Professional Hero Section for Crown Victoria Hotel

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function HotelHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0c] overflow-hidden">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full bg-amber-900/10 blur-[180px]" />
        <div className="absolute bottom-[5%] right-[8%] w-[450px] h-[450px] rounded-full bg-stone-800/10 blur-[150px]" />
      </div>

      {/* Grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Elegant badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Crown Victoria Hotel Tulungagung</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-6 leading-tight tracking-tight">
            Where Victorian<br />
            <span className="text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text">
              Elegance Meets
            </span><br />
            Modern Luxury
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Nikmati fasilitas bintang 4 terbaik dengan pesona arsitektur khas Victorian yang klasik dan layanan ramah di pusat kota Tulungagung.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#rooms"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-amber-600/20 hover:bg-amber-500 transform hover:-translate-y-0.5"
            >
              Explore Rooms
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#facilities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-zinc-700 text-zinc-300 font-medium rounded-lg transition-all hover:border-zinc-600 hover:text-white hover:bg-zinc-900/50"
            >
              View Facilities
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
