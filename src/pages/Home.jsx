import { useState } from "react";

import HeroSection from "../components/home/HeroSection";
import TechMarquee from "../components/home/TechMarquee";
import ClientLogosSection from "../components/home/ClientLogosSection";
import RealProjectsSection from "../components/home/RealProjectsSection";
import DemoSection from "../components/home/DemoSection";
import WhyUsSection from "../components/home/WhyUsSection";
import ProcessSection from "../components/home/ProcessSection";
import PricingSection from "../components/home/PricingSection";
import TestimoniSection from "../components/home/TestimoniSection";
import FAQSection from "../components/home/FAQSection";
import FounderSection from "../components/home/FounderSection";
import BigCTASection from "../components/home/BigCTASection";
import TextMarqueeDivider from "../components/common/TextMarqueeDivider";
import LazySection from "../components/common/LazySection";

import { demos } from "../constants/demos";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [pricingTab, setPricingTab] = useState("landingpage");

  const waLink =
    "https://wa.me/6285707185783?text=Halo%20saya%20tertarik%20dengan%20paket%20website";

  const filtered =
    filter === "all"
      ? demos
      : demos.filter((item) => {
          if (filter === "landing page") {
            return (
              item.category === "landing page" || item.category === "website"
            );
          }
          return item.category === filter;
        });

  return (
    <>
      {/* ─── Above the fold — renders immediately ─── */}
      <HeroSection />
      <TechMarquee />
      <ClientLogosSection />

      {/* ─── Below the fold — each section lazy-loads & reveals smoothly ─── */}
      <LazySection minHeight="400px" delay={0}>
        <RealProjectsSection />
      </LazySection>

      <LazySection minHeight="50px" delay={50}>
        <TextMarqueeDivider
          texts={["PORTOFOLIO", "CLIENT PROJECTS", "KARYA NYATA", "PRODUCTION READY"]}
          direction="left"
          speed={35}
          size="xs"
          className="my-2"
        />
      </LazySection>

      <LazySection minHeight="500px" delay={0}>
        <DemoSection filter={filter} setFilter={setFilter} filtered={filtered} />
      </LazySection>

      <LazySection minHeight="50px" delay={50}>
        <TextMarqueeDivider
          texts={["KENAPA KAMI", "WHY GAPAI", "SOLUSI DIGITAL", "EKSKLUSIF"]}
          direction="right"
          speed={28}
          size="xs"
          className="my-2"
        />
      </LazySection>

      <LazySection minHeight="500px" delay={0}>
        <WhyUsSection />
      </LazySection>

      <LazySection minHeight="500px" delay={0}>
        <ProcessSection />
      </LazySection>

      <LazySection minHeight="50px" delay={50}>
        <TextMarqueeDivider
          texts={["HARGA TRANSPARAN", "PRICING", "PILIH PAKET", "MULAI SEKARANG"]}
          direction="left"
          speed={32}
          size="xs"
          className="my-2"
        />
      </LazySection>

      <LazySection minHeight="600px" delay={0}>
        <PricingSection pricingTab={pricingTab} setPricingTab={setPricingTab} waLink={waLink} />
      </LazySection>

      <LazySection minHeight="400px" delay={0}>
        <TestimoniSection />
      </LazySection>

      <LazySection minHeight="50px" delay={50}>
        <TextMarqueeDivider
          texts={["KISAH SUKSES", "SUCCESS STORIES", "KLIEN PUAS", "5.0 RATING"]}
          direction="right"
          speed={25}
          size="xs"
          className="mb-2"
        />
      </LazySection>

      <LazySection minHeight="400px" delay={0}>
        <FAQSection />
      </LazySection>

      <LazySection minHeight="400px" delay={0}>
        <FounderSection />
      </LazySection>

      <LazySection minHeight="200px" delay={0}>
        <BigCTASection />
      </LazySection>
    </>
  );
}

