// src/sections/rental/RentalHero.jsx
// Clean Hero Section for Yamaha Motor Indonesia

import { motion } from "framer-motion";
import { rental } from "../../data/rental";

export function RentalHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Simple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b82f6]/5 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6 py-32 max-w-5xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <img
            src={rental.logo}
            alt="Yamaha Motor"
            className="w-24 sm:w-32 h-auto object-contain"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-blue-500 text-sm font-semibold tracking-wide uppercase mb-8"
        >
          {rental.tagline}
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 mb-6 leading-tight"
        >
          Revs Your Heart
          <br />
          The Ultimate Motor Experience
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-zinc-600 text-base max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {rental.vision}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-black font-bold rounded text-sm uppercase tracking-wide transition-colors"
          >
            Explore Products
          </a>

          <a
            href="#service"
            className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded text-sm uppercase tracking-wide transition-colors"
          >
            Find Dealer
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
