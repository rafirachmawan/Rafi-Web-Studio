import { SekolahNavbar } from "./components/SekolahNavbar";
import { SekolahHeroSection } from "./components/SekolahHeroSection";
import { SekolahStatsSection } from "./components/SekolahStatsSection";
import { SekolahProgramSection } from "./components/SekolahProgramSection";
import { SekolahAlurSection } from "./components/SekolahAlurSection";
import { SekolahMentorSection } from "./components/SekolahMentorSection";
import { SekolahGaleriSection } from "./components/SekolahGaleriSection";
import { SekolahTestimoniSection } from "./components/SekolahTestimoniSection";
import { SekolahLocationSection } from "./components/SekolahLocationSection";
import { SekolahCTASection } from "./components/SekolahCTASection";
import { SekolahFooter } from "./components/SekolahFooter";

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
