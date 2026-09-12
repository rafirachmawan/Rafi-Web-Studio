import { LaundryNavbar } from "../../../components/landing/LaundryNavbar";
import { LaundryHeroSection } from "../../../components/landing/LaundryHeroSection";
import { LaundryTrackingWidget } from "../../../components/landing/LaundryTrackingWidget";
import { LaundryServicesSection } from "../../../components/landing/LaundryServicesSection";
import { LaundryFeaturesSection } from "../../../components/landing/LaundryFeaturesSection";
import { LaundryCallToAction } from "../../../components/landing/LaundryCallToAction";
import { LaundryFooter } from "../../../components/landing/LaundryFooter";

export default function LaundryLanding() {
  const phone = "628123456789";
  const message = encodeURIComponent("Halo, saya ingin order penjemputan laundry.");
  const waLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-blue-200 overflow-x-hidden">
      {/* Background Bubbles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-400/10 blur-[60px]" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-cyan-400/10 blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 rounded-full bg-sky-300/20 blur-[100px]" />
      </div>

      <LaundryNavbar waLink={waLink} />
      
      <main className="relative z-10 pt-32 pb-20">
        <LaundryHeroSection phone={phone} />
        <LaundryTrackingWidget />
        <LaundryServicesSection waLink={waLink} />
        <LaundryFeaturesSection />
        <LaundryCallToAction waLink={waLink} />
      </main>

      <LaundryFooter waLink={waLink} />
    </div>
  );
}
