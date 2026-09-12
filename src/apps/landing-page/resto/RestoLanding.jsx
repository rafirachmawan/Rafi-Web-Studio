import { useState } from "react";
import { resto } from "../../../data/resto";
import { RestoNavbar } from "../../../components/landing/RestoNavbar";
import { RestoFooter } from "../../../components/landing/resto/RestoFooter";
import { RestoHeroSection } from "../../../components/landing/resto/RestoHeroSection";
import { RestoFeaturesSection } from "../../../components/landing/resto/RestoFeaturesSection";
import { RestoOrderCustomizer } from "../../../components/landing/resto/RestoOrderCustomizer";
import { RestoMenuGrid } from "../../../components/landing/resto/RestoMenuGrid";

export default function RestoLanding() {
  const phone = "085196221716";
  const waLink = `https://wa.me/${phone}?text=Halo%20Mie%20Gacoan!`;

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <RestoNavbar waLink={waLink} />
      
      <main>
        <RestoHeroSection data={resto} />
        <RestoFeaturesSection />
        <RestoOrderCustomizer phone={phone} />
        <RestoMenuGrid phone={phone} />
      </main>

      <RestoFooter />
    </div>
  );
}
