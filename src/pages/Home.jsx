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
      <HeroSection />
      <TechMarquee />
      <RealProjectsSection />

      <TextMarqueeDivider
        texts={["PORTOFOLIO", "CLIENT PROJECTS", "KARYA NYATA", "PRODUCTION READY"]}
        direction="left"
        speed={35}
        size="xs"
        className="my-2"
      />

      <DemoSection filter={filter} setFilter={setFilter} filtered={filtered} />

      {/* Visual break: demo → why us */}
      <TextMarqueeDivider
        texts={["KENAPA KAMI", "WHY GAPAI", "SOLUSI DIGITAL", "EKSKLUSIF"]}
        direction="right"
        speed={28}
        size="xs"
        className="my-2"
      />

      <WhyUsSection />
      <ProcessSection />

      {/* Visual break: process → pricing */}
      <TextMarqueeDivider
        texts={["HARGA TRANSPARAN", "PRICING", "PILIH PAKET", "MULAI SEKARANG"]}
        direction="left"
        speed={32}
        size="xs"
        className="my-2"
      />

      <PricingSection pricingTab={pricingTab} setPricingTab={setPricingTab} waLink={waLink} />
      <TestimoniSection />

      {/* Visual break: testimoni → founder */}
      <TextMarqueeDivider
        texts={["KISAH SUKSES", "SUCCESS STORIES", "KLIEN PUAS", "5.0 RATING"]}
        direction="right"
        speed={25}
        size="xs"
        className="mb-2"
      />

      <FounderSection />
      <BigCTASection />
    </>
  );
}
