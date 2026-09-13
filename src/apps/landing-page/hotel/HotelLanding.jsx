import { useState } from "react";
import { LandingNavbarHotel } from "../../../components/landing/LandingNavbar";
import { HotelFooter } from "../../../components/landing/hotel/HotelFooter";
import { HotelHero } from "../../../sections/hotel/HotelHero";
import { HotelRooms } from "../../../sections/hotel/HotelRooms";
import { HotelFacilities } from "../../../sections/hotel/HotelFacilities";
import { HotelGallery } from "../../../sections/hotel/HotelGallery";
import { HotelTestimonials } from "../../../sections/hotel/HotelTestimonials";
import { HotelStats } from "../../../sections/hotel/HotelStats";
import { HotelCTA } from "../../../sections/hotel/HotelCTA";

export default function HotelLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phone = "085196221716";

  return (
    <div className="bg-[#0a0a0c] text-zinc-200 min-h-screen font-sans selection:bg-amber-500/30">
      <LandingNavbarHotel waLink={`https://wa.me/${phone}`} />
      
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

