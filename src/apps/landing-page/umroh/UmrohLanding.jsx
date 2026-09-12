import { UmrohNavbar } from "../../../components/landing/UmrohNavbar";
import { UmrohHeroSection } from "../../../components/landing/UmrohHeroSection";
import { UmrohKeunggulanSection } from "../../../components/landing/UmrohKeunggulanSection";
import { UmrohPaketSection } from "../../../components/landing/UmrohPaketSection";
import { UmrohGaleriSection } from "../../../components/landing/UmrohGaleriSection";
import { UmrohCallToAction } from "../../../components/landing/UmrohCallToAction";
import { UmrohFooter } from "../../../components/landing/UmrohFooter";

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
