import { useState, useId } from "react";
import { motion } from "framer-motion";
import { Calculator, Sparkles, MessageCircle, HelpCircle, Check, ArrowRight, Bike } from "lucide-react";
import { rental } from "../data/rental";

export function RentalCreditCalculator({ preselectedMotor }) {
  const inventory = rental.inventory || [];
  const [selectedId, setSelectedId] = useState(preselectedMotor?.id || inventory[0]?.id || "");
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(35); // 11, 23, 35 bulan

  const currentMotor = inventory.find((m) => m.id === selectedId) || inventory[0];
  const price = currentMotor ? currentMotor.priceNum : 30000000;

  // Calculations
  const dpAmount = Math.round((price * dpPercent) / 100);
  const pokokHutang = price - dpAmount;
  // Estimasi bunga flat per tahun ~18% (1.5% per bulan)
  const monthlyRate = 0.015;
  const totalBunga = pokokHutang * monthlyRate * tenor;
  const totalBayar = pokokHutang + totalBunga;
  const cicilanPerBulan = Math.round(totalBayar / tenor);

  const formatRupiah = (val) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const waText = encodeURIComponent(
    `Halo Yamaha Motor Indonesia, saya ingin mengajukan simulasi kredit untuk:\n- Unit: ${currentMotor.name}\n- Harga OTR: ${formatRupiah(price)}\n- DP (${dpPercent}%): ${formatRupiah(dpAmount)}\n- Tenor: ${tenor} Bulan\n- Estimasi Cicilan: ${formatRupiah(cicilanPerBulan)} / bulan.\nMohon info persyaratan dan promo diskon DP.`
  );

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator size={14} />
            <span>Fitur Unggulan Redesign Yamaha</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white font-heading tracking-tight mb-4">
            Simulasi Kredit Motor Yamaha
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Hitung perkiraan uang muka (DP) dan cicilan bulanan motor impian Anda secara transparan dan mudah, langsung dari ponsel atau laptop.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-blue-500/5 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Form Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* 1. Select Motorcycle */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">
                  1. Pilih Model Sepeda Motor
                </label>
                <div className="relative">
                  <select
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="w-full py-3.5 px-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-bold text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                  >
                    {inventory.map((item) => (
                      <option key={item.id} value={item.id}>
                        [{item.category}] {item.name} — {item.price}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* 2. DP Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    2. Uang Muka (DP): <span className="text-blue-600 dark:text-blue-400 font-extrabold">{dpPercent}%</span>
                  </label>
                  <span className="text-sm font-extrabold text-zinc-800 dark:text-zinc-200 font-mono">
                    {formatRupiah(dpAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="50"
                  step="5"
                  value={dpPercent}
                  onChange={(e) => setDpPercent(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                  <span>Min 15%</span>
                  <span>25%</span>
                  <span>35%</span>
                  <span>Maks 50%</span>
                </div>
              </div>

              {/* 3. Tenor Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">
                  3. Jangka Waktu (Tenor Cicilan)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[11, 23, 35].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTenor(t)}
                      className={`py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                        tenor === t
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20 scale-[1.02]"
                          : "bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-blue-400"
                      }`}
                    >
                      {t} Bulan
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 flex items-start gap-3">
                <Sparkles size={18} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                  <strong>Program Promo Khusus:</strong> Diskon DP hingga Rp 1.5 Juta untuk pembelian unit MAXi & Classy Yamaha melalui dealer resmi bulan ini.
                </p>
              </div>
            </div>

            {/* Right Column: Dynamic Output Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#0033a0] via-blue-800 to-indigo-950 text-white shadow-xl relative overflow-hidden space-y-5">
                <div className="absolute top-0 right-0 w-36 h-36 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

                {/* Motor Mini Preview */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/15">
                  <div className="w-16 h-12 flex items-center justify-center bg-white/10 rounded-xl shrink-0 border border-dashed border-white/20">
                    <Bike size={20} className="text-white/50" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/20 text-white inline-block mb-0.5">
                      {currentMotor.category}
                    </span>
                    <h4 className="font-extrabold text-sm text-white truncate max-w-[190px]">
                      {currentMotor.name}
                    </h4>
                    <p className="text-xs text-blue-200">{formatRupiah(price)}</p>
                  </div>
                </div>

                {/* Calculation Summary */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-blue-100">
                    <span>Uang Muka (DP {dpPercent}%)</span>
                    <span className="font-bold font-mono text-white">{formatRupiah(dpAmount)}</span>
                  </div>
                  <div className="flex justify-between text-blue-100">
                    <span>Pokok Pinjaman</span>
                    <span className="font-bold font-mono text-white">{formatRupiah(pokokHutang)}</span>
                  </div>
                  <div className="flex justify-between text-blue-100">
                    <span>Jangka Waktu</span>
                    <span className="font-bold text-white">{tenor} Bulan</span>
                  </div>
                </div>

                {/* Big Angsuran Display */}
                <div className="pt-4 border-t border-white/15 text-center">
                  <span className="text-[11px] font-medium text-blue-200 uppercase tracking-wider block mb-1">
                    Estimasi Angsuran Per Bulan
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-amber-300 font-heading tracking-tight drop-shadow-sm">
                    {formatRupiah(cicilanPerBulan)}
                  </div>
                  <span className="text-[10px] text-blue-200 block mt-1">
                    *Estimasi bunga flat 1.5%/bln. Syarat & ketentuan berlaku.
                  </span>
                </div>

                {/* CTA to WhatsApp */}
                <a
                  href={`https://wa.me/6285196221716?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle size={17} />
                  <span>Ajukan Simulasi via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
