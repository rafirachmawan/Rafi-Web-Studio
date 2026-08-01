import { useState } from "react";

import HeroSection from "../components/home/HeroSection";
import TechMarquee from "../components/home/TechMarquee";
import RealProjectsSection from "../components/home/RealProjectsSection";
import DemoSection from "../components/home/DemoSection";
import WhyUsSection from "../components/home/WhyUsSection";
import ProcessSection from "../components/home/ProcessSection";
import PricingSection from "../components/home/PricingSection";
import TestimoniSection from "../components/home/TestimoniSection";
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
      {/* Above the fold — loads immediately */}
      <HeroSection />
      <TechMarquee />

      {/* Below the fold — lazy loaded when scrolled near */}
      <LazySection minHeight="400px">
        <RealProjectsSection />
      </LazySection>

      <LazySection minHeight="60px">
        <TextMarqueeDivider
          texts={["PORTOFOLIO", "CLIENT PROJECTS", "KARYA NYATA", "PRODUCTION READY"]}
          direction="left"
          speed={35}
          size="xs"
          className="my-2"
        />
      </LazySection>

      <LazySection minHeight="500px">
        <DemoSection filter={filter} setFilter={setFilter} filtered={filtered} />
      </LazySection>

      {/* Visual break: demo → why us */}
      <LazySection minHeight="60px">
        <TextMarqueeDivider
          texts={["KENAPA KAMI", "WHY GAPAI", "SOLUSI DIGITAL", "EKSKLUSIF"]}
          direction="right"
          speed={28}
          size="xs"
          className="my-2"
        />
      </LazySection>

      <LazySection minHeight="500px">
        <WhyUsSection />
      </LazySection>

      <LazySection minHeight="500px">
        <ProcessSection />
      </LazySection>

      {/* Visual break: process → pricing */}
      <LazySection minHeight="60px">
        <TextMarqueeDivider
          texts={["HARGA TRANSPARAN", "PRICING", "PILIH PAKET", "MULAI SEKARANG"]}
          direction="left"
          speed={32}
          size="xs"
          className="my-2"
        />
      </LazySection>

      <LazySection minHeight="600px">
        <PricingSection pricingTab={pricingTab} setPricingTab={setPricingTab} waLink={waLink} />
      </LazySection>

      <LazySection minHeight="400px">
        <TestimoniSection />
      </LazySection>

      {/* Visual break: testimoni → founder */}
      <LazySection minHeight="60px">
        <TextMarqueeDivider
          texts={["KISAH SUKSES", "SUCCESS STORIES", "KLIEN PUAS", "5.0 RATING"]}
          direction="right"
          speed={25}
          size="xs"
          className="mb-2"
        />
      </LazySection>

      <LazySection minHeight="400px">
        <FounderSection />
      </LazySection>

      <LazySection minHeight="200px">
        <BigCTASection />
      </LazySection>
    </>
  );
}
