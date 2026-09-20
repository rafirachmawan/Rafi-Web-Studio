import "./unita.css";
import { UNITANavbar } from "./components/UNITANavbar";
import { UNITAHeroSection } from "./components/UNITAHeroSection";
import { UNITACredibilitySection } from "./components/UNITACredibilitySection";
import { UNITAStatsSection } from "./components/UNITAStatsSection";
import { UNITATentangSection } from "./components/UNITATentangSection";
import { UNITAFakultasSection } from "./components/UNITAFakultasSection";
import { UNITAEserviceSection } from "./components/UNITAEserviceSection";
import { UNITAFasilitasSection } from "./components/UNITAFasilitasSection";
import { UNITAPMBSection } from "./components/UNITAPMBSection";
import { UNITATestimoniSection } from "./components/UNITATestimoniSection";
import { UNITADownloadSection } from "./components/UNITADownloadSection";
import { UNITAKontakSection } from "./components/UNITAKontakSection";
import { UNITAFooter } from "./components/UNITAFooter";

export default function UNITALanding() {
  return (
    <div className="unita-root">
      {/* BACKGROUND BLOBS */}
      <div className="unita-blobs">
        <div className="blob blob-red" />
        <div className="blob blob-blue" />
        <div className="blob blob-gold" />
      </div>

      <UNITANavbar />
      <main>
        <UNITAHeroSection />
        <UNITACredibilitySection />
        <UNITAStatsSection />
        <UNITATentangSection />
        <UNITAFakultasSection />
        <UNITAEserviceSection />
        <UNITAFasilitasSection />
        <UNITAPMBSection />
        <UNITATestimoniSection />
        <UNITADownloadSection />
        <UNITAKontakSection />
      </main>
      <UNITAFooter />
    </div>
  );
}
