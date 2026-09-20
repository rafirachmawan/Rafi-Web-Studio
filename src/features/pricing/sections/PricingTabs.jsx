// src/sections/pricing/PricingTabs.jsx
// Pricing tab navigation component

import { useLanguage } from "../../../context/LanguageContext";

export function PricingTabs({ activeTab, onTabChange }) {
  const { t } = useLanguage();

  const tabs = [
    { label: t('Landing Page', 'Landing Page'), value: 'landingpage' },
    { label: t('Mobile Apps', 'Mobile Apps'), value: 'mobileapps' },
    { label: t('Web System', 'Web System'), value: 'websystem' },
    { label: t('Custom', 'Custom'), value: 'custom' }
  ];

  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-16 w-full">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm md:text-sm font-bold transition-all duration-300 border flex items-center justify-center ${
            activeTab === tab.value
              ? 'bg-amber-500 text-zinc-900 border-amber-400 shadow-lg shadow-amber-500/30 scale-105'
              : 'bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:scale-102 shadow-sm'
          }`}
          aria-pressed={activeTab === tab.value}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
