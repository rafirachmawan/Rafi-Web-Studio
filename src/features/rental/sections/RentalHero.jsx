// src/sections/rental/RentalHero.jsx
// Clean Minimalist Hero Section for Yamaha Motor Indonesia

import { motion } from "framer-motion";
import { rental } from "../data/rental";
import yamahaImage1 from "../../../assets/Yamaha/gambar1.png";

const slides = [yamahaImage1];

export function RentalHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDFDFD] via-[#F5F7FA] to-[#E8EEF7] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 197, 253, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 py-32 max-w-6xl mx-auto">
        {/* Animated badge/tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-zinc-200 shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <p className="text-zinc-700 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            {rental.tagline}
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-zinc-900 mb-6 leading-tight"
        >
          Revs Your Heart
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6"
        >
          The Ultimate Motor Experience
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {rental.vision}
        </motion.p>

        {/* CTA Buttons with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Button - Explore Products */}
          <a
            href="#products"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-full text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <span>Explore Products</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            >
              →
            </motion.span>
          </a>

          {/* Secondary Button - Find Dealer */}
          <a
            href="#service"
            className="group px-8 py-4 bg-white border-2 border-zinc-200 hover:border-blue-600 text-zinc-800 hover:text-blue-600 font-bold rounded-full text-sm sm:text-base transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <span>Find Dealer</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
