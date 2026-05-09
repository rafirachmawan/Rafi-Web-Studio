import { useState } from "react";

// COMPONENTS
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import ProblemSection from "../components/home/ProblemSection";
import SolutionSection from "../components/home/SolutionSection";
import DemoSection from "../components/home/DemoSection";
import CTASection from "../components/home/CTASection";
import ProcessSection from "../components/home/ProcessSection";
import PricingSection from "../components/home/PricingSection";
import TestimoniSection from "../components/home/TestimoniSection";
import FinalCTASection from "../components/home/FinalCTASection";
import BigCTASection from "../components/home/BigCTASection";

// DATA
import { demos } from "../constants/demos";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [pricingTab, setPricingTab] = useState("landing");

  const waLink =
    "https://wa.me/6285707185783?text=Halo%20saya%20tertarik%20dengan%20paket%20website";

  const filtered =
    filter === "all" ? demos : demos.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white font-sans relative overflow-hidden transition-colors duration-300">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-500/10 dark:bg-amber-500/10 bg-amber-300/20 blur-[100px] rounded-full" />

      {/* NAVBAR */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-16 relative z-10">
        {/* HERO */}
        <HeroSection />

        {/* STATS */}
        <StatsSection />

        {/* PROBLEM */}
        <ProblemSection />

        {/* SOLUTION */}
        <SolutionSection />

        {/* BENEFIT LIST */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div
            className="bg-black/[0.03] dark:bg-white/[0.03]
border border-black/10 dark:border-white/10 rounded-2xl p-6"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
              🛡️
            </div>

            <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight">
              Meningkatkan Kepercayaan
            </h4>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Desain modern dan bersih yang membuat bisnis kamu terlihat serius
              dan terpercaya.
            </p>
          </div>

          <div
            className="bg-black/[0.03] dark:bg-white/[0.03]
border border-black/10 dark:border-white/10 rounded-2xl p-6"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
              💬
            </div>

            <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight">
              Mempermudah Pelanggan Menghubungi
            </h4>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Tombol WhatsApp langsung, Google Maps terintegrasi, dan navigasi
              yang simpel.
            </p>
          </div>

          <div
            className="bg-black/[0.03] dark:bg-white/[0.03]
border border-black/10 dark:border-white/10 rounded-2xl p-6"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
              📱
            </div>

            <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight">
              Mobile Friendly 100%
            </h4>

            <p className="text-gray-400 text-sm">
              Mayoritas pelanggan membuka dari HP. Website kamu akan tampil
              sempurna di semua perangkat.
            </p>
          </div>

          <div
            className="bg-black/[0.03] dark:bg-white/[0.03]
border border-black/10 dark:border-white/10 rounded-2xl p-6"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
              🔍
            </div>

            <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight">
              Siap Tampil di Google
            </h4>

            <p className="text-gray-600 dark:text-gray-400text-sm">
              Struktur SEO dasar agar bisnis kamu lebih mudah ditemukan.
            </p>
          </div>

          <div
            className="bg-black/[0.03] dark:bg-white/[0.03]
border border-black/10 dark:border-white/10 rounded-2xl p-6"
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
              ⚡
            </div>

            <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight">
              Loading Cepat & Aman
            </h4>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Website ringan, cepat, dan stabil.
            </p>
          </div>
        </div>

        {/* CUSTOM MESSAGE */}
        <div className="mt-16 mb-24 max-w-4xl mx-auto bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-3xl px-6 py-8 text-center">
          <p className="text-base md:text-lg text-gray-300">
            Kami tidak menggunakan template asal jadi.
          </p>

          <p className="text-lg md:text-xl font-semibold mt-2 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Setiap website disesuaikan dengan identitas bisnis kamu.
          </p>
        </div>

        {/* DEMO */}
        <DemoSection
          filter={filter}
          setFilter={setFilter}
          filtered={filtered}
        />

        {/* CTA */}
        <CTASection />

        {/* PROCESS */}
        <ProcessSection />

        {/* PRICING */}
        <PricingSection
          pricingTab={pricingTab}
          setPricingTab={setPricingTab}
          waLink={waLink}
        />

        {/* TESTIMONI */}
        <TestimoniSection />

        {/* FINAL CTA */}
        <FinalCTASection />

        {/* BIG CTA */}
        <BigCTASection />

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
