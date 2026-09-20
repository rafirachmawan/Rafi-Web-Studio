import { useState } from "react";

import HeroSection from "../features/home/sections/HeroSection";
import ProblemSection from "../features/home/sections/ProblemSection";
import GrowthSection from "../features/home/sections/GrowthSection";
import RealProjectsSection from "../features/home/sections/RealProjectsSection";
import DemoSection from "../features/home/sections/DemoSection";
import DigitalProductsSection from "../features/home/sections/DigitalProductsSection";
import WhyUsSection from "../features/home/sections/WhyUsSection";
import ProcessSection from "../features/home/sections/ProcessSection";
import PricingSection from "../features/home/sections/PricingSection";
import TestimoniSection from "../features/home/sections/TestimoniSection";
import FAQSection from "../features/home/sections/FAQSection";
import FounderSection from "../features/home/sections/FounderSection";
import BigCTASection from "../features/home/sections/BigCTASection";
import TextMarqueeDivider from "../components/shared/TextMarqueeDivider";
import LazySection from "../components/ui/LazySection";

import { demos } from "../features/home/data/demos";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [pricingTab, setPricingTab] = useState("landingpage");

  const waLink =
    "https://wa.me/085196221716?text=Halo%20saya%20tertarik%20dengan%20paket%20website";

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

      {/* ─── Problem Section — pain points ─── */}
      <LazySection minHeight="400px" delay={0}>
        <ProblemSection />
      </LazySection>

      {/* ─── Growth Section — value & benefits ─── */}
      <LazySection minHeight="400px" delay={0}>
        <GrowthSection />
      </LazySection>

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
          texts={["PRODUK DIGITAL", "READY APPS", "LYNK.ID STORE", "INSTANT DOWNLOAD"]}
          direction="right"
          speed={30}
          size="xs"
          className="my-2"
        />
      </LazySection>

      <LazySection minHeight="450px" delay={0}>
        <DigitalProductsSection />
      </LazySection>

      <LazySection minHeight="50px" delay={50}>
        <TextMarqueeDivider
          texts={["KENAPA KAMI", "WHY GAPAI", "SOLUSI DIGITAL", "EKSKLUSIF"]}
          direction="left"
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

