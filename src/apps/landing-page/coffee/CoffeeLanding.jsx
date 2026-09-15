// src/apps/landing-page/coffee/CoffeeLanding.jsx
// NEW STRUCTURE - Coffee Landing Page Orchestrator
// This is now ONLY 100 lines instead of 974! All sections are split into separate files

import { CoffeeNavigation } from '../../../components/molecules/Navigation/CoffeeNavigation';
import { CoffeeHero } from '../../../sections/coffee/CoffeeHero';
import { CoffeeMenu } from '../../../sections/coffee/CoffeeMenu';
import { CoffeeSection } from '../../../sections/coffee/CoffeeSection';
import { RewardsSection } from '../../../sections/coffee/RewardsSection';
import { ResponsibilitySection } from '../../../sections/coffee/ResponsibilitySection';
import { AboutSection } from '../../../sections/coffee/AboutSection';
import { CoffeeFooter } from '../../../components/landing/coffee/CoffeeFooter';
import bgHero from '../../../assets/AmbienceCoffe.jpg';

const phone = "6285196221716";
const message = encodeURIComponent("Halo, saya tertarik dengan Starbucks Rewards.");
const waLink = `https://wa.me/${phone}?text=${message}`;

export default function CoffeeLanding() {
  return (
    <div className="bg-[#0B1512] text-zinc-100 overflow-hidden font-sans selection:bg-[#00704A]/30">
      {/* Navigation */}
      <CoffeeNavigation />
      
      {/* Hero Section */}
      <CoffeeHero />
      
      {/* Menu Section */}
      <CoffeeMenu />
      
      {/* COFFEE SECTION */}
      <CoffeeSection />
      
      {/* REWARDS SECTION */}
      <RewardsSection />
      
      {/* RESPONSIBILITY SECTION */}
      <ResponsibilitySection />
      
      {/* ABOUT SECTION */}
      <AboutSection />
      
      {/* FOOTER */}
      <CoffeeFooter waLink={waLink} />
      
      {/* 
        ==========================================
        MIGRATION STATUS:
        ==========================================
        ✅ Navigation (80 lines → Clean component)
        ✅ Hero Section (100 lines → Framer Motion only)
        ✅ Menu Section (149 lines → Data-driven)
        ✅ Coffee Section (NEW - Product Showcase)
        ✅ Rewards Section (NEW - Program Features)
        ✅ Responsibility Section (NEW - Sustainability)
        ✅ About Section (NEW - Our Story)
        
        Total original: 974 lines
        New structure: ~100 lines main + reusable components
        Code reduction: 90%+ in main orchestrator file
      */}
    </div>
  );
}
