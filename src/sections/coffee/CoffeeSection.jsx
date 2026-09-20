// src/sections/coffee/CoffeeSection.jsx
// Starbucks Coffee Mastery & How to Brew Section with CleanPlaceholder

import { motion } from "framer-motion";
import { Coffee, Flame, Droplets, Sparkles, CheckCircle2 } from "lucide-react";
import CleanPlaceholder from "../../components/common/CleanPlaceholder";

const roastSpectrums = [
  {
    id: "blonde-roast",
    name: "Starbucks® Blonde Roast",
    tagline: "Light & Mellow",
    description: "Disangrai dengan waktu lebih singkat untuk menghasilkan rasa yang lembut, ringan, serta aksen sitrun yang menyegarkan.",
    notes: "Sweet & Light-Bodied",
    temp: "Light Roast",
    badge: "Blonde",
    accentColor: "from-amber-400 to-yellow-600",
  },
  {
    id: "medium-roast",
    name: "Starbucks® Medium Roast",
    tagline: "Smooth & Balanced",
    description: "Keseimbangan sempurna antara body medium, keasaman lembut, dan aroma kacang serta cokelat panggang yang kaya.",
    notes: "Rich & Balanced",
    temp: "Medium Roast",
    badge: "Medium",
    accentColor: "from-amber-600 to-orange-700",
  },
  {
    id: "dark-roast",
    name: "Starbucks® Dark Roast",
    tagline: "Bold & Robust",
    description: "Ciri khas legendaris Starbucks dengan body penuh, rasa smoky karamel intens, dan aroma rempah Sumatra yang mendalam.",
    notes: "Roasty & Deep Earthy",
    temp: "Dark Roast",
    badge: "Dark",
    accentColor: "from-amber-900 to-stone-900",
  },
];

const brewingMethods = [
  {
    id: "french-press",
    name: "Coffee Press (French Press)",
    ratio: "10g kopi : 180ml air",
    time: "4 Menit Seduh",
    grind: "Coarse (Kasar)",
    description: "Mempertahankan minyak alami biji kopi untuk rasa yang tebal, bertekstur kental (full-bodied), dan kaya rasa.",
  },
  {
    id: "pour-over",
    name: "Pour-Over (Manual Drip)",
    ratio: "10g kopi : 180ml air",
    time: "3 Menit Seduh",
    grind: "Medium (Sedang)",
    description: "Menghasilkan cangkir kopi yang sangat jernih (clean), menonjolkan notes floral dan keasaman buah yang tajam.",
  },
  {
    id: "iced-pour-over",
    name: "Iced Pour-Over & Cold Brew",
    ratio: "Konsentrat 1:1 Es Batu",
    time: "12-20 Jam (Cold Brew)",
    grind: "Coarse (Kasar)",
    description: "Ekstraksi suhu dingin yang menghasilkan cita rasa manis alami tanpa rasa asam pahit berlebih.",
  },
];

export function CoffeeSection() {
  return (
    <section id="coffee" className="relative py-28 px-6 bg-[#0B1512] overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#00704A 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00704A]/20 border border-[#00704A]/30 text-[#D4E9E2] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Sparkles size={14} className="text-emerald-400" />
            <span>Coffee Mastery & Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white mb-4">
            The Art of Great Coffee
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Setiap cangkir kopi Starbucks adalah perjalanan dari biji arabika terbaik dunia, disangrai dengan presisi spektrum roast eksklusif, dan diseduh dengan metode sempurna.
          </p>
        </div>

        {/* 1. ROAST SPECTRUM CARDS */}
        <div className="mb-20">
          <h3 className="text-xl font-bold font-serif text-white mb-8 text-center flex items-center justify-center gap-2">
            <Flame className="text-amber-500" size={20} />
            <span>Starbucks Roast Spectrum</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roastSpectrums.map((roast, index) => (
              <motion.div
                key={roast.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#101C18] rounded-3xl p-6 border border-white/10 hover:border-[#00704A]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Clean Placeholder Header */}
                  <div className="h-44 mb-5 rounded-2xl overflow-hidden relative flex items-center justify-center">
                    <CleanPlaceholder
                      width={600}
                      height={400}
                      ratio="3:2"
                      label={roast.name}
                      sublabel={roast.tagline}
                      badge={roast.badge}
                      icon={Flame}
                      className="w-full h-full !p-3"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {roast.temp}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-mono">
                      {roast.notes}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-serif text-white mb-2">
                    {roast.name}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {roast.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                  <span>Profil: {roast.tagline}</span>
                  <span className="text-amber-400 font-semibold">100% Arabica</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. HOW TO BREW GREAT COFFEE */}
        <div className="bg-[#101C18]/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="max-w-3xl mb-10 text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif text-white mb-2 flex items-center gap-2 justify-center md:justify-start">
              <Droplets className="text-cyan-400" size={24} />
              <span>How to Brew Great Coffee at Home</span>
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Kuasai 4 pilar dasar seduh: Proporsi Kopi, Gilingan Biji, Air Bersih, dan Kesegaran Biji Kopi untuk menghasilkan cita rasa kafe di rumah Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brewingMethods.map((method, idx) => (
              <div
                key={method.id}
                className="p-6 rounded-2xl bg-[#09110F] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 mb-4 rounded-xl overflow-hidden relative">
                    <CleanPlaceholder
                      width={500}
                      height={350}
                      ratio="4:3"
                      label={method.name}
                      sublabel={method.grind}
                      badge={`Step 0${idx + 1}`}
                      icon={Coffee}
                      className="w-full h-full !p-2"
                    />
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">
                    {method.name}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {method.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-white/5 text-[11px] text-zinc-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>Rasio: {method.ratio}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>Waktu: {method.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
