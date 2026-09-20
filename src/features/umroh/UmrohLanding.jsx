import { UmrohNavbar } from "./components/UmrohNavbar";
import { UmrohHeroSection } from "./components/UmrohHeroSection";
import { UmrohKeunggulanSection } from "./components/UmrohKeunggulanSection";
import { UmrohPaketSection } from "./components/UmrohPaketSection";
import { UmrohGaleriSection } from "./components/UmrohGaleriSection";
import { UmrohCallToAction } from "./components/UmrohCallToAction";
import { UmrohFooter } from "./components/UmrohFooter";

export default function UmrohLanding() {
  const phone = "628123456789";
  const message = encodeURIComponent("Assalamu'alaikum, saya tertarik dengan program umroh dari Jabal Noor.official.");
  const waLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="bg-[#fdfbf7] text-stone-900 min-h-screen font-sans selection:bg-orange-200 overflow-x-hidden">
      <UmrohNavbar waLink={waLink} />
      
      <main className="relative z-10">
        <UmrohHeroSection phone={phone} />
        <UmrohKeunggulanSection />
        <UmrohPaketSection waLink={waLink} />
        <UmrohGaleriSection />
        <UmrohCallToAction waLink={waLink} />
      </main>

      <UmrohFooter />
    </div>
  );
}
