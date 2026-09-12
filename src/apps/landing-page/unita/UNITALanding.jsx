import "./unita.css";
import { UNITANavbar } from "../../../components/landing/UNITANavbar";
import { UNITAHeroSection } from "../../../components/landing/UNITAHeroSection";
import { UNITACredibilitySection } from "../../../components/landing/UNITACredibilitySection";
import { UNITAStatsSection } from "../../../components/landing/UNITAStatsSection";
import { UNITATentangSection } from "../../../components/landing/UNITATentangSection";
import { UNITAFakultasSection } from "../../../components/landing/UNITAFakultasSection";
import { UNITAEserviceSection } from "../../../components/landing/UNITAEserviceSection";
import { UNITAFasilitasSection } from "../../../components/landing/UNITAFasilitasSection";
import { UNITAPMBSection } from "../../../components/landing/UNITAPMBSection";
import { UNITATestimoniSection } from "../../../components/landing/UNITATestimoniSection";
import { UNITADownloadSection } from "../../../components/landing/UNITADownloadSection";
import { UNITAKontakSection } from "../../../components/landing/UNITAKontakSection";
import { UNITAFooter } from "../../../components/landing/UNITAFooter";

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
