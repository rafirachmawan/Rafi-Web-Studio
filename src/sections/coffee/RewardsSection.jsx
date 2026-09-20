// src/sections/coffee/RewardsSection.jsx
// Starbucks Rewards Program & Interactive Stars Calculator with CleanPlaceholder

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Gift, Sparkles, CreditCard, Award, ArrowRight } from "lucide-react";
import CleanPlaceholder from "../../components/common/CleanPlaceholder";

export function RewardsSection() {
  const [spendAmount, setSpendAmount] = useState(250000);
  const [selectedTier, setSelectedTier] = useState("gold");

  // Every Rp 10.000 = 1 Star
  const starsEarned = Math.floor(spendAmount / 10000);
  const freeDrinksEarned = Math.floor(starsEarned / 100);

  return (
    <section id="rewards" className="relative py-28 px-6 bg-gradient-to-b from-[#0B1512] via-[#0D1E18] to-[#0B1512] overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-4">
            <Star size={14} className="fill-current" />
            <span>Starbucks® Rewards Indonesia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white mb-4">
            Collect Stars. Get Rewarded.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Dapatkan 1 Star setiap pembelian Rp 10.000 dengan Starbucks Card atau aplikasi. Tukarkan Stars dengan minuman dan makanan favorit gratis.
          </p>
        </div>

        {/* 1. INTERACTIVE STARS CALCULATOR & DIGITAL CARD */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Left: Spending Calculator Widget */}
          <div className="lg:col-span-7 bg-[#101C18]/90 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold font-serif text-white mb-2 flex items-center gap-2">
              <Sparkles size={20} className="text-amber-400" />
              <span>Simulasi Perolehan Stars Anda</span>
            </h3>
            <p className="text-xs text-zinc-400 mb-8">
              Geser nominal belanja bulanan Anda untuk melihat Stars & reward gratis yang bisa Anda kumpulkan.
            </p>

            {/* Slider */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-zinc-400">Estimasi Belanja Bulanan:</span>
                <span className="text-2xl font-black text-emerald-400 font-mono">
                  Rp {spendAmount.toLocaleString("id-ID")}
                </span>
              </div>

              <input
                type="range"
                min="50000"
                max="1500000"
                step="25000"
                value={spendAmount}
                onChange={(e) => setSpendAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#00704A]"
              />

              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>Rp 50.000</span>
                <span>Rp 750.000</span>
                <span>Rp 1.500.000+</span>
              </div>
            </div>

            {/* Result Stats Box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center">
              <div className="p-4 rounded-2xl bg-[#09110F] border border-white/5">
                <span className="block text-3xl font-black text-amber-400 font-mono mb-1">
                  {starsEarned} ★
                </span>
                <span className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">
                  Stars Terkumpul
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#09110F] border border-white/5">
                <span className="block text-3xl font-black text-emerald-400 font-mono mb-1">
                  {starsEarned >= 300 ? "Gold 👑" : "Green 🌿"}
                </span>
                <span className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">
                  Tier Membership
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#09110F] border border-white/5">
                <span className="block text-3xl font-black text-cyan-400 font-mono mb-1">
                  {freeDrinksEarned}
                </span>
                <span className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">
                  Free Reward Drink
                </span>
              </div>
            </div>
          </div>

          {/* Right: Digital Starbucks Card Mockup with CleanPlaceholder */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm">
              <div className="h-56 rounded-2xl overflow-hidden relative shadow-2xl border border-amber-500/30">
                <CleanPlaceholder
                  width={856}
                  height={540}
                  ratio="16:10"
                  label={selectedTier === "gold" ? "Starbucks Gold Card" : "Starbucks Green Card"}
                  sublabel="Official Digital Membership Card"
                  badge={selectedTier === "gold" ? "Gold Member 300+ ★" : "Green Member"}
                  icon={CreditCard}
                  className="w-full h-full !p-4 bg-gradient-to-br from-[#1B2B23] to-[#0A1310]"
                />
              </div>

              {/* Card Tier Switcher */}
              <div className="flex justify-center gap-2 mt-5">
                <button
                  onClick={() => setSelectedTier("green")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedTier === "green"
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-[#101C18] text-zinc-400 border border-white/10"
                  }`}
                >
                  Green Level (0-299 ★)
                </button>
                <button
                  onClick={() => setSelectedTier("gold")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedTier === "gold"
                      ? "bg-[#CBA258] text-zinc-950 shadow-md"
                      : "bg-[#101C18] text-zinc-400 border border-white/10"
                  }`}
                >
                  Gold Level (300+ ★)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MEMBERSHIP TIERS HIGHLIGHT */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Green Level */}
          <div className="p-8 rounded-3xl bg-[#101C18] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-4">
                Level 01
              </div>
              <h4 className="text-2xl font-bold font-serif text-white mb-2">
                Green Level (0 – 299 Stars)
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Status awal begitu mendaftar akun Starbucks Card. Nikmati keuntungan langsung di setiap transaksi.
              </p>

              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Akses promosi eksklusif member dan pre-order produk baru.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Koleksi kartu Starbucks edisi khusus (Batik, Holiday, Indonesia).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Kemudahan top up saldo via GoPay, OVO, VA, dan Kartu Kredit.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Gold Level */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#101C18] to-[#1F2718] border border-amber-500/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-wider mb-4">
                <Award size={13} />
                <span>Level Eksklusif</span>
              </div>
              <h4 className="text-2xl font-bold font-serif text-white mb-2">
                Gold Level (300+ Stars)
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Level tertinggi untuk pecinta sejati kopi Starbucks dengan deretan reward mewah tanpa batas.
              </p>

              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">★</span>
                  <span><strong>1 Free Reward</strong> (Minuman / Makanan) setiap kelipatan 100 Stars.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">★</span>
                  <span><strong>Double Stars Day</strong>: Perolehan bintang 2x lipat di hari tertentu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">★</span>
                  <span><strong>Free Birthday Treat</strong>: Minuman dan sepotong kue gratis saat hari ulang tahun.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
