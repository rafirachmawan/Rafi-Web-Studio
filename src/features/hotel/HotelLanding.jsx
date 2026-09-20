// src/features/hotel/HotelLanding.jsx
// Redesigned luxury experience for Crown Victoria Hotel Tulungagung
// Based on official data foundation: CROWN_VICTORIA_REDESIGN_FOUNDATION.md

import { useState } from "react";
import { MessageSquare, PhoneCall } from "lucide-react";
import { LandingNavbar } from "./components/LandingNavbar";
import { HotelFooter } from "./components/HotelFooter";
import { HotelHero } from "./sections/HotelHero";
import { HotelStats } from "./sections/HotelStats";
import { HotelRooms } from "./sections/HotelRooms";
import { HotelFacilities } from "./sections/HotelFacilities";
import { HotelDining } from "./sections/HotelDining";
import { HotelMICE } from "./sections/HotelMICE";
import { HotelLocation } from "./sections/HotelLocation";
import { HotelPolicies } from "./sections/HotelPolicies";
import { HotelTestimonials } from "./sections/HotelTestimonials";
import { HotelCTA } from "./sections/HotelCTA";
import { HOTEL_INFO } from "./data/hotelData";

export default function HotelLanding() {
  const phone = "085196221716";
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Halo Crown Victoria Hotel Tulungagung, saya ingin konsultasi reservasi kamar / paket ballroom. Mohon informasinya. Terima kasih."
  )}`;

  return (
    <div className="bg-[#FAFAFD] text-zinc-900 min-h-screen font-sans selection:bg-purple-500/30">
      {/* Top Navbar */}
      <LandingNavbar category="hotel" waLink={waUrl} />

      <main className="overflow-x-hidden">
        {/* 1. Hero Section with Interactive Reservation Bar */}
        <HotelHero phone={phone} />

        {/* 2. Official Metrics & Rating Breakdown */}
        <HotelStats />

        {/* 3. Rooms & Suites Catalog with Interactive Modal */}
        <HotelRooms phone={phone} />

        {/* 4. Hotel Facilities & Recreation (Indoor Pool, Gym, Spa) */}
        <HotelFacilities />

        {/* 5. Dining Spotlight (Sultan Resto Live Cooking & Venezia Pool Bar) */}
        <HotelDining phone={phone} />

        {/* 6. MICE, Wedding & Victoria Grand Ballroom */}
        <HotelMICE phone={phone} />

        {/* 7. Strategic Location & Tulungagung Landmark Guide */}
        <HotelLocation />

        {/* 8. Verified Guest Testimonials & Reviews */}
        <HotelTestimonials />

        {/* 9. Hotel Policies & FAQ Accordion */}
        <HotelPolicies />

        {/* 10. Final Call to Action */}
        <HotelCTA phone={phone} />
      </main>

      {/* Official Footer */}
      <HotelFooter waLink={waUrl} />

      {/* Floating WhatsApp Concierge Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 group"
        aria-label="Konsultasi WhatsApp"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        <MessageSquare className="w-4 h-4" />
        <span>Konsultasi WA</span>
      </a>
    </div>
  );
}
