// src/sections/pricing/PricingCustomSection.jsx
// Custom project consultation section

import { Check } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function PricingCustomSection({ onConsult }) {
  const { t } = useLanguage();

  return (
    <div className="md:col-span-2 relative bg-white dark:bg-zinc-900 border-2 border-amber-400 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-amber-500/20 flex flex-col md:flex-row gap-8 items-center justify-between min-h-[300px] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="text-left flex-1 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-xs font-black text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
            {t('Premium Service', 'Premium Service')}
          </span>
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            {t('Custom Project', 'Custom Project')}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-black mb-4 text-zinc-900 dark:text-white leading-tight">
          {t('Have a ', 'Have a')}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
            {t('Unique & Specific System?', 'Unique & Specific System?')}
          </span>
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base mb-6 max-w-xl font-medium leading-relaxed">
          {t(
            "We understand that every business is unique. If you need custom API integration, an Enterprise-scale application, or a system with a very specific workflow, we are ready to design it from scratch specifically for you.",
            "We understand that every business is unique. If you need custom API integration, an Enterprise-scale application, or a system with a very specific workflow, we are ready to design it from scratch specifically for you."
          )}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-700 dark:text-zinc-300 text-sm font-semibold mb-6">
          <li className="flex items-center gap-2.5">
            <Check size={16} className="text-emerald-500" /> {t('Exclusive Figma Design', 'Exclusive Figma Design')}
          </li>
          <li className="flex items-center gap-2.5">
            <Check size={16} className="text-emerald-500" /> {t('High Scalability', 'High Scalability')}
          </li>
          <li className="flex items-center gap-2.5">
            <Check size={16} className="text-emerald-500" /> {t('Third-Party Integration (API)', 'Third-Party Integration (API)')}
          </li>
          <li className="flex items-center gap-2.5">
            <Check size={16} className="text-emerald-500" /> {t('Enterprise Security', 'Enterprise Security')}
          </li>
        </ul>
      </div>

      <div className="w-full md:w-auto shrink-0 relative z-10 flex flex-col items-center">
        <div className="mb-6 text-center">
          <span className="text-sm font-bold text-zinc-400 block mb-1">
            {t('Starting From', 'Starting From')}
          </span>
          <h2 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            {t('Flexible', 'Flexible')}
          </h2>
        </div>
        <button
          onClick={() => onConsult(t('Custom Project', 'Custom Project'))}
          className="w-full sm:w-auto text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-4 rounded-2xl text-sm font-black transition-all shadow-lg hover:shadow-amber-500/25 hover:scale-105 cursor-pointer"
        >
          {t('Custom Consultation', 'Custom Consultation')}
        </button>
        <span className="text-[10px] text-zinc-500 mt-3 font-semibold">
          {t('*100% Free Consultation', '*100% Free Consultation')}
        </span>
      </div>
    </div>
  );
}
