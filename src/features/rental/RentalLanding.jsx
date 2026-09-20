import { useState } from "react";
import { LandingNavbar } from "./components/LandingNavbar";
import { RentalHero } from "./sections/RentalHero";
import { RentalInventoryGrid } from "./components/RentalInventoryGrid";
import { RentalCreditCalculator } from "./sections/RentalCreditCalculator";
import { RentalService } from "./sections/RentalService";
import { RentalDealers } from "./sections/RentalDealers";
import { RentalRacing } from "./sections/RentalRacing";
import { RentalQuickSider } from "./components/RentalQuickSider";
import { RentalFooter } from "./components/RentalFooter";
import { rental } from "./data/rental";

export default function RentalLanding() {
  const [selectedMotorForCalculator, setSelectedMotorForCalculator] = useState(null);

  const phone = rental.wa || "6285196221716";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Halo Yamaha Motor Indonesia, saya ingin konsultasi dan informasi produk terbaru."
  )}`;

  const handleSelectMotorForCalculator = (motor) => {
    setSelectedMotorForCalculator(motor);
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 min-h-screen overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <LandingNavbar category="rental" waLink={waLink} />

      {/* Floating Quick Navigation Sider */}
      <RentalQuickSider />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section with Live Campaign Carousel & Quick Stats */}
        <RentalHero />

        {/* 2. Full Products Showcase (6 Categories & Spec Modal) */}
        <RentalInventoryGrid onSelectForCalculator={handleSelectMotorForCalculator} />

        {/* 3. Interactive Credit Calculator */}
        <RentalCreditCalculator preselectedMotor={selectedMotorForCalculator} />

        {/* 4. Digital Ecosystem & Services (Y-Connect, Warranty, YES24) */}
        <RentalService />

        {/* 5. Dealers Locator Directory */}
        <RentalDealers />

        {/* 6. Racing & Events (bLU cRU, GP Mandalika, Clan of Classy) */}
        <RentalRacing />
      </main>

      {/* Footer */}
      <RentalFooter />
    </div>
  );
}
