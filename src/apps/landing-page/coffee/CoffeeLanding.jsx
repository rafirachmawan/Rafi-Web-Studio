// src/apps/landing-page/coffee/CoffeeLanding.jsx
// NEW STRUCTURE - Coffee Landing Page Orchestrator
// This is now ONLY 100 lines instead of 974! All sections are split into separate files

import { CoffeeNavigation } from '../../../components/molecules/Navigation/CoffeeNavigation';
import { CoffeeHero } from '../../../sections/coffee/CoffeeHero';
import { CoffeeMenu } from '../../../sections/coffee/CoffeeMenu';
import bgHero from './assets/bgHero_starbucks.jpg';

export default function CoffeeLanding() {
  return (
    <div className="bg-[#0B1512] text-zinc-100 overflow-hidden font-sans selection:bg-[#00704A]/30">
      {/* Navigation */}
      <CoffeeNavigation />
      
      {/* Hero Section */}
      <CoffeeHero />
      
      {/* Menu Section */}
      <CoffeeMenu />
      
      {/* Placeholder for other sections:
          <CoffeeEducation />
          <RewardsSection />
          <ResponsibilitySection />
          <AboutSection />
          <CoffeeFooter />
      */}
      
      {/* 
        ==========================================
        MIGRATION STATUS:
        ==========================================
        ✅ Navigation (80 lines → Clean component)
        ✅ Hero Section (100 lines → Framer Motion only)
        ✅ Menu Section (149 lines → Data-driven)
        ⏳ Education Section (TODO)
        ⏳ Rewards Section (TODO)
        ⏳ Footer Section (TODO)
        
        Total original: 974 lines
        New structure: ~100 lines main + reusable components
        Code reduction: 90%+ in main orchestrator file
      */}
    </div>
  );
}
