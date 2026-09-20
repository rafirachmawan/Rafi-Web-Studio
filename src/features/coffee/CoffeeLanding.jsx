// src/features/coffee/CoffeeLanding.jsx
// Coffee Landing Page Orchestrator

import { CoffeeNavigation } from "./components/CoffeeNavigation";
import { CoffeeHero } from "./sections/CoffeeHero";
import { CoffeeMenu } from "./sections/CoffeeMenu";
import { CoffeeSection } from "./sections/CoffeeSection";
import { RewardsSection } from "./sections/RewardsSection";
import { DewataSection } from "./sections/DewataSection";
import { ResponsibilitySection } from "./sections/ResponsibilitySection";
import { AboutSection } from "./sections/AboutSection";
import { CoffeeFooter } from "./components/CoffeeFooter";
import bgHero from "../../assets/AmbienceCoffe.jpg";

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
      
      {/* DEWATA BALI SANCTUARY SECTION */}
      <DewataSection />
      
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
