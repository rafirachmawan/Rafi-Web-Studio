// src/sections/coffee/DewataSection.jsx
// Starbucks Dewata Coffee Sanctuary Bali Showcase with CleanPlaceholder

import { motion } from "framer-motion";
import { Compass, Sparkles, MapPin, ExternalLink, Coffee, Sun } from "lucide-react";
import CleanPlaceholder from "../../../components/ui/CleanPlaceholder";

export function DewataSection() {
  return (
    <section id="dewata" className="relative py-28 px-6 bg-[#0E1513] border-t border-white/5 overflow-hidden">
      {/* Ambient Bali Glow */}
      <div className="absolute right-10 top-20 w-[400px] h-[400px] bg-[#CBA258]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CBA258]/20 border border-[#CBA258]/40 text-[#CBA258] text-xs font-extrabold uppercase tracking-widest mb-6">
              <Sun size={14} />
              <span>Bali Coffee Sanctuary</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight mb-6">
              Starbucks Dewata Coffee Sanctuary
            </h2>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-6">
              <MapPin size={15} />
              <span>Jl. Sunset Road No. 77, Kuta, Bali — Gerai Reserve Terbesar di Asia Tenggara</span>
            </div>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
              Bukan sekadar kedai kopi biasa. Starbucks Dewata adalah perayaan seni bertani dan menyeduh kopi. Dilengkapi dengan kebun kopi mini seluas 1.000 m², nursery tour interaktif, dan bar Reserve artisan yang menyajikan racikan eksklusif yang hanya ada di pulau dewata.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-[#14211D] border border-white/5">
                <span className="block text-xl font-bold text-white mb-1">1.000 m²</span>
                <span className="text-xs text-zinc-400">Mini Arabica Coffee Farm</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#14211D] border border-white/5">
                <span className="block text-xl font-bold text-white mb-1">Artisan Bar</span>
                <span className="text-xs text-zinc-400">Exclusive Reserve Menus</span>
              </div>
            </div>

            <a
              href="https://www.starbucks.co.id/dewata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#CBA258] to-[#AA8238] text-zinc-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-lg active:scale-95"
            >
              <span>Jelajahi Starbucks Dewata</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Right Column: Visual Mockup with CleanPlaceholder */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Main Sanctuary Mockup */}
            <div className="h-64 sm:h-80 rounded-3xl overflow-hidden relative shadow-2xl border border-[#CBA258]/30">
              <CleanPlaceholder
                width={1200}
                height={800}
                ratio="16:9"
                label="Starbucks Dewata Sanctuary Bali"
                sublabel="Sunset Road Kuta • The Largest Reserve in Southeast Asia"
                badge="Dewata Reserve"
                icon={Coffee}
                className="w-full h-full !p-5 bg-gradient-to-br from-[#1C1710] to-[#0D1513]"
              />
            </div>

            {/* Sub Preview Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-36 rounded-2xl overflow-hidden relative border border-white/10">
                <CleanPlaceholder
                  width={600}
                  height={400}
                  ratio="3:2"
                  label="Arabica Coffee Nursery"
                  sublabel="Seed to Cup Journey"
                  badge="Farm Tour"
                  icon={Compass}
                  className="w-full h-full !p-2"
                />
              </div>

              <div className="h-36 rounded-2xl overflow-hidden relative border border-white/10">
                <CleanPlaceholder
                  width={600}
                  height={400}
                  ratio="3:2"
                  label="Reserve Tasting Room"
                  sublabel="Artisan Pour-Over & Chemex"
                  badge="Manual Brew"
                  icon={Sparkles}
                  className="w-full h-full !p-2"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
