// src/sections/pricing/PricingHeader.jsx
// Pricing section header component

import { Sparkles } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function PricingHeader() {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-16">
      {/* Glowing Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-5">
        <Sparkles size={14} className="text-amber-400" />
        {t('Limited Promo • Best Investment', 'Limited Promo • Best Investment')}
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] max-w-3xl mx-auto text-zinc-900 dark:text-white mb-4 font-heading">
        {t('Business Investment with ', 'Business Investment with ')}
        <br className="hidden sm:inline" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 font-extrabold">
          {t('Website & App Packages', 'Website & App Packages')}
        </span>
      </h2>

      {/* Description */}
      <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        {t(
          'Get premium, high-speed, SEO-friendly digital solutions ready to boost your business sales. No hidden fees!',
          'Get premium, high-speed, SEO-friendly digital solutions ready to boost your business sales. No hidden fees!'
        )}
      </p>
    </div>
  );
}
