import { useState } from "react";
import { RestoNavbar } from "../../../components/landing/RestoNavbar";
import { RestoFooter } from "../../../components/landing/resto/RestoFooter";
import { RestoHero } from "../../../sections/resto/RestoHero";
import { RestoFeatures } from "../../../sections/resto/RestoFeatures";
import { RestoMenu } from "../../../sections/resto/RestoMenu";
import { RestoCTA } from "../../../sections/resto/RestoCTA";

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
