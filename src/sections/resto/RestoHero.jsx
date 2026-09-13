// src/sections/resto/RestoHero.jsx
// Clean, Professional Hero Section for Mie Gacoan

import { motion } from 'framer-motion';
import { Flame, ChevronDown } from 'lucide-react';

export function RestoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-red-900/10 blur-[200px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-orange-900/10 blur-[180px]" />
      </div>

      {/* Grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge with flame icon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-8">
            <Flame className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Spicy Food Revolution</span>
          </div>

          {/* Main heading - cleaner typography */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            Mie Pedas<br />
            <span className="text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text">
              No.1 Indonesia
            </span>
          </h1>

          {/* Description - more readable */}
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Nikmati sensasi mie pedas legendaris, dimsum renyah gurih, dan es segar favorit di Mie Gacoan Tulungagung. Tempat nongkrong asyik dengan harga serene!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-red-600/30 hover:bg-red-500 transform hover:-translate-y-0.5"
            >
              Order Sekarang
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#customize"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-zinc-700 text-zinc-300 font-medium rounded-lg transition-all hover:border-red-500 hover:text-red-500 hover:bg-red-500/5"
            >
              Custom Pesanan
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
