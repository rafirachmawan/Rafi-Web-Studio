import { useState } from "react";
import { LandingNavbar } from "./components/LandingNavbar";
import { RentalHero } from "./sections/RentalHero";
import { RentalInventoryGrid } from "./components/RentalInventoryGrid";
import { RentalService } from "./sections/RentalService";
import { RentalDealers } from "./sections/RentalDealers";
import { RentalRacing } from "./sections/RentalRacing";
import { RentalFooter } from "./components/RentalFooter";
import { rental } from "./data/rental";

export default function RentalLanding() {
  const phone = rental.wa;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent("Halo Yamaha, saya ingin informasi produk.")}`;

  return (
    <div className="bg-white text-zinc-900 min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <LandingNavbar category="rental" waLink={waLink} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <RentalHero />

        {/* Products Grid */}
        <RentalInventoryGrid />

        {/* Service Section */}
        <RentalService />

        {/* Dealers Section */}
        <RentalDealers />

        {/* Racing Section */}
        <RentalRacing />
      </main>

      {/* Footer */}
      <RentalFooter />
    </div>
  );
}
