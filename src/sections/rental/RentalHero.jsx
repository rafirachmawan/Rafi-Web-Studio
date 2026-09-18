// src/sections/rental/RentalHero.jsx
// Clean Hero Section for Yamaha Motor Indonesia with Auto-Slide Background

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rental } from "../../data/rental";
import yamahaImage1 from "../../assets/Yamaha/gambar1.png";

const slides = [
  yamahaImage1,
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23DBEAFE;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2360A5FA;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad2)'/%3E%3Cg font-family='Arial, sans-serif'%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' fill='%231E3A8A' opacity='0.3' font-style='italic'%3EPlaceholder%3C/text%3E%3C/g%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D1FAE5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2334D399;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad3)'/%3E%3Cg font-family='Arial, sans-serif'%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' fill='%23064E3B' opacity='0.3' font-style='italic'%3EPlaceholder%3C/text%3E%3C/g%3E%3C/svg%3E",
];

export function RentalHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Slide Background with Auto-Slide */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            alt={`Yamaha Slide ${currentSlide + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6 py-32 max-w-5xl mx-auto"
      >
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
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
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
          className="text-zinc-300 text-base max-w-2xl mx-auto mb-10 leading-relaxed"
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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-500 w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
