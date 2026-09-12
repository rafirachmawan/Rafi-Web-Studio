import { useState } from "react";
import { RentalNavbar } from "../../../components/landing/RentalNavbar";
import { RentalHeroSection } from "../../../components/landing/RentalHeroSection";
import { RentalInventoryGrid } from "../../../components/landing/RentalInventoryGrid";
import { RentalFeaturesSection } from "../../../components/landing/RentalFeaturesSection";
import { RentalTestimonialsSection } from "../../../components/landing/RentalTestimonialsSection";
import { RentalFooter } from "../../../components/landing/RentalFooter";
import { rental } from "../../../data/rental";

export default function RentalLanding() {
  const phone = rental.wa;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent("Halo Rental Jaya, saya ingin informasi booking mobil.")}`;

  return (
    <div className="bg-[#0b0b0e] text-zinc-200 min-h-screen font-sans selection:bg-red-500/30 overflow-x-hidden">
      <RentalNavbar waLink={waLink} />
      
      <main>
        <RentalHeroSection data={rental} />
        <RentalInventoryGrid phone={phone} />
        <RentalFeaturesSection />
        <RentalTestimonialsSection />
      </main>

      <RentalFooter />
    </div>
  );
}
