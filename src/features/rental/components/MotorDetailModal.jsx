import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ShieldCheck, Gauge, Fuel, Zap, ArrowRight, MessageCircle } from "lucide-react";
import { MotorPlaceholder } from "./MotorPlaceholder";

export function MotorDetailModal({ motor, isOpen, onClose, onSelectForCalculator }) {
  if (!isOpen || !motor) return null;

  const waText = encodeURIComponent(
    `Halo Yamaha Motor Indonesia, saya ingin konsultasi dan informasi pemesanan unit: ${motor.name} (${motor.price}). Mohon info ketersediaan unit dan promo terbaru.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden z-10 border border-zinc-200 dark:border-zinc-800 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-600 text-white">
                {motor.category}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {motor.code} • Model {motor.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Top Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Visual Frame */}
              <div className="md:col-span-6 relative rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/40 dark:from-zinc-800 dark:to-zinc-950 p-6 flex flex-col items-center justify-center min-h-[260px] border border-blue-100 dark:border-zinc-800 overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <MotorPlaceholder name={motor.name} category={motor.category} className="!h-48 sm:!h-56" />
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>Pilihan Warna: {motor.color}</span>
                </div>
              </div>

              {/* Title & Pricing */}
              <div className="md:col-span-6 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white font-heading">
                    {motor.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                    {motor.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80 space-y-1">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Rekomendasi OTR Jakarta
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-heading">
                    {motor.price}
                  </div>
                  {motor.priceRange && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Rentang Varian: {motor.priceRange}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">Uang Muka Mulai</span>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">{motor.dpStarting}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">Estimasi Cicilan</span>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{motor.estCicilan}</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={`https://wa.me/6285196221716?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <MessageCircle size={17} />
                    <span>Konsultasi & Promo</span>
                  </a>
                  {onSelectForCalculator && (
                    <button
                      onClick={() => {
                        onSelectForCalculator(motor);
                        onClose();
                      }}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white font-bold text-sm transition-all"
                    >
                      <span>Hitung Kredit</span>
                      <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                <Gauge size={16} className="text-blue-600" />
                <span>Spesifikasi Mesin & Performa</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="text-[11px] text-zinc-400 block mb-1">Tipe Mesin</span>
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 leading-snug block">
                    {motor.engine}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="text-[11px] text-zinc-400 block mb-1">Daya Maksimum</span>
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 leading-snug block">
                    {motor.power}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="text-[11px] text-zinc-400 block mb-1">Torsi Maksimum</span>
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 leading-snug block">
                    {motor.torque}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="text-[11px] text-zinc-400 block mb-1">Tangki Bensin & Bobot</span>
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 leading-snug block">
                    {motor.fuelCapacity} • {motor.weight}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Features & Technology */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                  <Zap size={16} className="text-amber-500" />
                  <span>Fitur & Teknologi Unggulan</span>
                </h4>
                <div className="space-y-2.5">
                  {motor.specs?.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      <Check size={15} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span>Kenyamanan & Keamanan</span>
                </h4>
                <div className="space-y-2.5">
                  {motor.features?.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      <Check size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Official Warranty Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={22} className="text-blue-300" />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Dilindungi Garansi Resmi Yamaha</h5>
                  <p className="text-xs text-blue-200">Garansi Rangka 5 Tahun / 50.000 KM + Garansi Forged Piston & DiASil Cylinder</p>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold bg-white/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                Standar Pabrikan Jepang
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
