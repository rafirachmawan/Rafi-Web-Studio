import { useState } from "react";
import { LandingNavbar } from "./components/LandingNavbar";
import { HotelFooter } from "./components/HotelFooter";
import { HotelHero } from "./sections/HotelHero";
import { HotelRooms } from "./sections/HotelRooms";
import { HotelFacilities } from "./sections/HotelFacilities";
import { HotelGallery } from "./sections/HotelGallery";
import { HotelTestimonials } from "./sections/HotelTestimonials";
import { HotelStats } from "./sections/HotelStats";
import { HotelCTA } from "./sections/HotelCTA";

export default function HotelLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phone = "085196221716";

  return (
    <div className="bg-white text-zinc-800 min-h-screen font-sans selection:bg-purple-500/30">
      <LandingNavbar category="hotel" waLink={`https://wa.me/${phone}`} />

      <main>
        <HotelHero />
        <HotelStats />
        <HotelRooms phone={phone} />
        <HotelFacilities />
        <HotelGallery />
        <HotelTestimonials />
        <HotelCTA />
      </main>

      <HotelFooter waLink={`https://wa.me/${phone}`} />
    </div>
  );
}
