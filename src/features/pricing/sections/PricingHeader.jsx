// src/sections/pricing/PricingHeader.jsx
// Pricing section header component

import { Sparkles } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function PricingHeader() {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-10 md:mb-14">
      {/* Glowing Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] font-bold tracking-widest uppercase mb-5">
        <Sparkles size={14} className="text-amber-500" />
        {t('Promo Terbatas', 'Limited Promo')}
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto text-zinc-900 dark:text-white mb-4 font-heading text-balance">
        {t('Paket Harga Website & Aplikasi.', 'Website & App Pricing.')}
      </h2>

      {/* Description */}
      <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
        {t(
          'Harga transparan, tanpa biaya tersembunyi, siap naikkan omzet bisnis.',
          'Transparent pricing, no hidden fees, ready to grow your sales.'
        )}
      </p>
    </div>
  );
}
