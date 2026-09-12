import { SekolahNavbar } from "../../../components/landing/SekolahNavbar";
import { SekolahHeroSection } from "../../../components/landing/SekolahHeroSection";
import { SekolahStatsSection } from "../../../components/landing/SekolahStatsSection";
import { SekolahProgramSection } from "../../../components/landing/SekolahProgramSection";
import { SekolahAlurSection } from "../../../components/landing/SekolahAlurSection";
import { SekolahMentorSection } from "../../../components/landing/SekolahMentorSection";
import { SekolahGaleriSection } from "../../../components/landing/SekolahGaleriSection";
import { SekolahTestimoniSection } from "../../../components/landing/SekolahTestimoniSection";
import { SekolahLocationSection } from "../../../components/landing/SekolahLocationSection";
import { SekolahCTASection } from "../../../components/landing/SekolahCTASection";
import { SekolahFooter } from "../../../components/landing/SekolahFooter";

export default function SekolahLanding() {
  const phone = "628123456789";

  return (
    <div className="bg-[#09090b] text-zinc-200 min-h-screen font-sans selection:bg-teal-500/30 overflow-x-hidden">
      <SekolahNavbar phone={phone} />
      <main className="relative z-10">
        <SekolahHeroSection phone={phone} />
        <SekolahStatsSection />
        <SekolahProgramSection />
        <SekolahAlurSection />
        <SekolahMentorSection />
        <SekolahGaleriSection />
        <SekolahTestimoniSection />
        <SekolahLocationSection />
        <SekolahCTASection phone={phone} />
      </main>
      <SekolahFooter />
    </div>
  );
}
