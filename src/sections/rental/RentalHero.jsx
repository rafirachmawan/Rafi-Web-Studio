// src/sections/rental/RentalHero.jsx
// Clean, Professional Hero Section for Car Rental

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function RentalHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0c] to-[#1a1a1f] overflow-hidden">
      {/* Subtle gradient overlays - NOT too flashy */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-red-500 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-blue-500 blur-[120px]" />
      </div>

      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Premium Car Rental</span>
        </div>

        {/* Clean, minimalist heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
          Rent Premium Cars<br />With Confidence
        </h1>

        {/* Professional subtitle */}
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Experience luxury and reliability with our carefully maintained fleet. 
          Book online in seconds, drive today.
        </p>

        {/* Clean CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inventory"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-red-500 hover:bg-red-600 text-black font-bold rounded-lg transition-all duration-200 shadow-xl shadow-red-500/20 hover:shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-0.5"
          >
            View Vehicles
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
