// src/components/home/PricingSection.jsx
// REFACTORED PRICING SECTION - Now ~100 lines instead of 865!
// All data and components are separated

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import { useConsultation } from "../../../context/ConsultationContext";
import { PricingHeader } from "../../pricing/sections/PricingHeader";
import { PricingTabs } from "../../pricing/sections/PricingTabs";
import { PricingCard } from "../../pricing/sections/PricingCard";
import { PricingCustomSection } from "../../pricing/sections/PricingCustomSection";
import { 
  landingPagePackages, 
  mobileAppPackages, 
  webSystemPackages,
  pricingTabs 
} from '../../pricing/data/packages';

export default function PricingSection({ pricingTab, setPricingTab, waLink }) {
  const { t } = useLanguage();
  const { openConsultation } = useConsultation();
  
  // Default state if not provided (for backward compatibility)
  const [internalTab, setInternalTab] = useState('landingpage');
  const effectivePricingTab = pricingTab || internalTab;
  const effectiveSetPricingTab = setPricingTab || setInternalTab;

  const handleChoose = (pkgName) => {
    openConsultation(pkgName);
  };

  const handleCustomConsult = () => {
    openConsultation(t('Custom Project', 'Custom Project'));
  };

  // Get correct package based on tab
  const getPackages = () => {
    switch (effectivePricingTab) {
      case 'landingpage':
        return [landingPagePackages.starter, landingPagePackages.pro];
      case 'mobileapps':
        return [mobileAppPackages.starter, mobileAppPackages.pro];
      case 'websystem':
        return [webSystemPackages.basic, webSystemPackages.custom];
      default:
        return [landingPagePackages.starter, landingPagePackages.pro];
    }
  };

  const packages = getPackages();

  return (
    <div id="harga" className="mt-24 mb-24 max-w-6xl mx-auto text-center px-4 relative">
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-amber-500/5 blur-[80px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <PricingHeader />

        {/* Tabs */}
        <PricingTabs activeTab={effectivePricingTab} onTabChange={effectiveSetPricingTab} />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Starter Package */}
          {packages[0] && (
            <PricingCard pkg={packages[0]} onChoose={handleChoose} />
          )}

          {/* Pro Package */}
          {packages[1] && (
            <PricingCard pkg={packages[1]} onChoose={handleChoose} />
          )}
        </div>

        {/* Custom Section (only show for websystem or custom tabs) */}
        {(effectivePricingTab === 'websystem' || effectivePricingTab === 'custom') && (
          <PricingCustomSection onConsult={handleCustomConsult} />
        )}
      </motion.div>
    </div>
  );
}
