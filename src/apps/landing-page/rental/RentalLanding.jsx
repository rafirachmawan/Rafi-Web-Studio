import { useState } from "react";
import { LandingNavbar } from "../../../components/landing/LandingNavbar";
import { RentalHero } from "../../../sections/rental/RentalHero";
import { RentalInventoryGrid } from "../../../components/landing/RentalInventoryGrid";
import { RentalService } from "../../../sections/rental/RentalService";
import { RentalDealers } from "../../../sections/rental/RentalDealers";
import { RentalRacing } from "../../../sections/rental/RentalRacing";
import { RentalFooter } from "../../../components/landing/RentalFooter";
import { rental } from "../../../data/rental";

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
