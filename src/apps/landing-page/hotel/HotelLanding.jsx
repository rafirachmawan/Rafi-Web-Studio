import { useState } from "react";
import { LandingNavbarHotel } from "../../../components/landing/LandingNavbar";
import { HotelFooter } from "../../../components/landing/hotel/HotelFooter";
import { HotelHeroSection } from "../../../components/landing/hotel/HotelHeroSection";
import { HotelBookingWidget } from "../../../components/landing/hotel/HotelBookingWidget";
import { HotelExperienceSection } from "../../../components/landing/hotel/HotelExperienceSection";
import { HotelRoomsCard } from "../../../components/landing/hotel/HotelRoomsCard";
import { HotelBallroomSection } from "../../../components/landing/hotel/HotelBallroomSection";
import { HotelFacilitiesSection } from "../../../components/landing/hotel/HotelFacilitiesSection";
import { HotelGallerySection } from "../../../components/landing/hotel/HotelGallerySection";
import { HotelPromoTourismSection } from "../../../components/landing/hotel/HotelPromoTourismSection";
import { HotelTestimonialsSection } from "../../../components/landing/hotel/HotelTestimonialsSection";
import { HotelLocationSection } from "../../../components/landing/hotel/HotelLocationSection";

export default function HotelLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phone = "6285707185783";

  return (
    <div className="bg-[#050505] text-[#e5e5e5] min-h-screen">
      <LandingNavbarHotel waLink={`https://wa.me/${phone}`} />
      
      <main>
        <HotelHeroSection />
        <HotelBookingWidget />
        <HotelExperienceSection />
        <HotelRoomsCard phone={phone} />
        <HotelBallroomSection />
        <HotelFacilitiesSection />
        <HotelGallerySection />
        <HotelPromoTourismSection />
        <HotelTestimonialsSection />
        <HotelLocationSection />
      </main>

      <HotelFooter waLink={`https://wa.me/${phone}`} />
    </div>
  );
}

