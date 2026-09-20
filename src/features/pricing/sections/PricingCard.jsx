// src/sections/pricing/PricingCard.jsx
// Individual pricing card component

import { Check, Zap } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { formatPrice } from "../data/packages";

export function PricingCard({ pkg, onChoose }) {
  const { t } = useLanguage();

  return (
    <div
      className={`relative bg-white dark:bg-zinc-900 border-2 ${pkg.popularity ? 'border-amber-400 md:-translate-y-4' : 'border-black/5 dark:border-white/5'} rounded-[2.5rem] p-8 shadow-${pkg.popularity ? '2xl shadow-amber-500/20' : 'xl'} flex flex-col justify-between min-h-[480px] transition-all duration-300`}
    >
      {/* Popular Badge */}
      {pkg.flameIcon && (
        <div className="absolute top-5 right-5 bg-amber-500 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1">
          {pkg.badge.includes('Popular') ? '🔥 Popular' : '🔥 Hot'}
        </div>
      )}

      {/* Package Info */}
      <div className="text-left mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            {t('Package', 'Package')}
          </span>
          {pkg.badge && (
            <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
              {pkg.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-zinc-900 dark:text-white">
          {pkg.name}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
          {pkg.description}
        </p>

        {/* Pricing */}
        <div className="mb-6">
          <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">
            {formatPrice(pkg.originalPrice)}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            {formatPrice(pkg.promoPrice)}
          </h2>
        </div>

        <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

        {/* Features List */}
        <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 mb-8 font-semibold">
          {pkg.features.map((feature, idx) => {
            if (typeof feature === 'boolean') {
              const isDisabled = !feature;
              return (
                <li
                  key={idx}
                  className={`flex items-start gap-2.5 text-sm ${isDisabled ? 'line-through opacity-50' : ''}`}
                >
                  <Check size={16} className={`text-emerald-500 shrink-0 mt-0.5 ${!isDisabled ? '' : 'opacity-50'}`} />
                  <span>{pkg.featureLabels?.[idx] || '-'}</span>
                </li>
              );
            }
            return (
              <li key={idx} className="flex items-start gap-2.5">
                <Zap size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => onChoose(pkg.name)}
        className={`w-full text-center py-4 rounded-2xl text-sm font-black transition-all shadow-lg hover:scale-102 cursor-pointer ${
          pkg.popularity
            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl'
            : 'bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-900 dark:text-white'
        }`}
      >
        {pkg.cta}
      </button>
    </div>
  );
}
