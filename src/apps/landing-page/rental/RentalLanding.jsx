import { useState } from "react";
import { RentalNavbar } from "../../../components/landing/RentalNavbar";
import { RentalHero } from "../../../sections/rental/RentalHero";
import { RentalInventory } from "../../../sections/rental/RentalInventory";
import { RentalFeatures } from "../../../sections/rental/RentalFeatures";
import { RentalStats } from "../../../sections/rental/RentalStats";
import { RentalTestimonials } from "../../../sections/rental/RentalTestimonials";
import { RentalCTA } from "../../../sections/rental/RentalCTA";
import { RentalFooter } from "../../../components/landing/RentalFooter";
import { rental } from "../../../data/rental";

export default function RentalLanding() {
  const phone = rental.wa;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent("Halo Rental Jaya, saya ingin informasi booking mobil.")}`;

  return (
    <div className="bg-[#0b0b0e] text-zinc-200 min-h-screen font-sans selection:bg-red-500/30 overflow-x-hidden">
      {/* Navigation */}
      <RentalNavbar waLink={waLink} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <RentalHero />
        
        {/* Inventory Showcase */}
        <RentalInventory />
        
        {/* Features */}
        <RentalFeatures />
        
        {/* Stats & Achievement */}
        <RentalStats />
        
        {/* Testimonials */}
        <RentalTestimonials />
        
        {/* Call to Action */}
        <RentalCTA />
      </main>

      {/* Footer */}
      <RentalFooter />
    </div>
  );
}
