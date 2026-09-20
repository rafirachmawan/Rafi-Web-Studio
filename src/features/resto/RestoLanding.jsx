import { useState } from "react";
import { RestoNavbar } from "./components/RestoNavbar";
import { RestoFooter } from "./components/RestoFooter";
import { RestoHero } from "./sections/RestoHero";
import { RestoFeatures } from "./sections/RestoFeatures";
import { RestoMenu } from "./sections/RestoMenu";
import { RestoCTA } from "./sections/RestoCTA";

export default function RestoLanding() {
  const phone = "085196221716";
  const waLink = `https://wa.me/${phone}?text=Halo%20Mie%20Gacoan!`;

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-red-500/20">
      <RestoNavbar waLink={waLink} />
      
      <main>
        <RestoHero />
        <RestoFeatures />
        <RestoMenu phone={phone} />
        <RestoCTA phone={phone} />
      </main>

      <RestoFooter />
    </div>
  );
}
