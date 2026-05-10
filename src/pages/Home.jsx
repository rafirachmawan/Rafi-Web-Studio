import { useState } from "react";

// COMPONENTS
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import ProblemSection from "../components/home/ProblemSection";
import SolutionSection from "../components/home/SolutionSection";
import DemoSection from "../components/home/DemoSection";
import CTASection from "../components/home/CTASection";
import ProcessSection from "../components/home/ProcessSection";
import PricingSection from "../components/home/PricingSection";
import TestimoniSection from "../components/home/TestimoniSection";
import FinalCTASection from "../components/home/FinalCTASection";
import BigCTASection from "../components/home/BigCTASection";

// DATA
import { demos } from "../constants/demos";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [pricingTab, setPricingTab] = useState("landing");

  const waLink =
    "https://wa.me/6285707185783?text=Halo%20saya%20tertarik%20dengan%20paket%20website";

  const filtered =
    filter === "all"
      ? demos
      : demos.filter((item) => {
          // support old category "website"
          if (filter === "landing page") {
            return (
              item.category === "landing page" || item.category === "website"
            );
          }

          return item.category === filter;
        });

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white font-sans relative overflow-hidden transition-colors duration-300">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-500/10 dark:bg-amber-500/10 bg-amber-300/20 blur-[100px] rounded-full" />

      {/* NAVBAR */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-16 relative z-10">
        {/* HERO */}
        <HeroSection />
        {/* STATS */}
        <StatsSection />
        {/* PROBLEM */}
        <ProblemSection />
        {/* SOLUTION */}
        <SolutionSection />

        {/* DEMO */}
        <DemoSection
          filter={filter}
          setFilter={setFilter}
          filtered={filtered}
        />
        {/* CTA */}
        <CTASection />
        {/* PROCESS */}
        <ProcessSection />
        {/* PRICING */}
        <PricingSection
          pricingTab={pricingTab}
          setPricingTab={setPricingTab}
          waLink={waLink}
        />
        {/* TESTIMONI */}
        <TestimoniSection />
        {/* FINAL CTA */}
        <FinalCTASection />
        {/* BIG CTA */}
        <BigCTASection />
        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
