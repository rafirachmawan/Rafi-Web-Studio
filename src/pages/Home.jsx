import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import coffeeImg from "../assets/Coffe.jpg";
import rentalImg from "../assets/Rental.jpg";
import hotelImg from "../assets/Hotel.jpg";
import restoImg from "../assets/Resto.jpg";
import sekolahImg from "../assets/Sekolah.jpg";
import laundryImg from "../assets/Loundry.jpg";
import umrohImg from "../assets/Umroh.jpg";

import heroVideo from "../assets/Video.mp4";

import thinkingImg from "../assets/thinking.png";

// import baru Refactor clean code
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import ProblemSection from "../components/home/ProblemSection";
import SolutionSection from "../components/home/SolutionSection";
import { demos } from "../constants/demos";
import DemoSection from "../components/home/DemoSection";
import ProcessSection from "../components/home/ProcessSection";
import PricingSection from "../components/home/PricingSection";
import TestimoniSection from "../components/home/TestimoniSection";
import CTASection from "../components/home/CTASection";
import FinalCTASection from "../components/home/FinalCTASection";
import BigCTASection from "../components/home/BigCTASection";
import Footer from "../components/common/Footer";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [pricingTab, setPricingTab] = useState("landing");

  const waLink =
    "https://wa.me/6285707185783?text=Halo%20saya%20tertarik%20dengan%20paket%20website";

  const filtered =
    filter === "all" ? demos : demos.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-500/10 blur-[100px] rounded-full"></div>

      {/* 🔥 NAVBAR FLOATING */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-16 relative z-10">
        {/* 🔥 HERO SECTION */}
        <HeroSection />

        {/* 🔥 TAMBAHKAN DI SINI */}
        <StatsSection />

        {/* 🔥 PROBLEM DETAIL SECTION */}
        <ProblemSection />

        {/* 🔥 SOLUSI SECTION */}
        <SolutionSection />

        {/* LIST BENEFIT */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* 1 */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
              🛡️
            </div>
            <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight">
              Meningkatkan Kepercayaan
            </h4>
            <p className="text-gray-400 text-sm">
              Desain modern dan bersih yang membuat bisnis kamu terlihat serius
              dan terpercaya.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
              💬
            </div>
            <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight">
              Mempermudah Pelanggan Menghubungi
            </h4>
            <p className="text-gray-400 text-sm">
              Tombol WhatsApp langsung, Google Maps terintegrasi, dan navigasi
              yang simpel.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
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

          {/* 4 */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
              🔍
            </div>
            <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight">
              Siap Tampil di Google
            </h4>
            <p className="text-gray-400 text-sm">
              Struktur SEO dasar agar bisnis kamu lebih mudah ditemukan.
            </p>
          </div>

          {/* 5 */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
              ⚡
            </div>
            <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight">
              Loading Cepat & Aman
            </h4>
            <p className="text-gray-400 text-sm">
              Website ringan, cepat, dan stabil.
            </p>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 CUSTOM MESSAGE */}
        {/* ===================== */}
        <div className="mt-16 mb-24 max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-8 text-center">
          <p className="text-base md:text-lg text-gray-300">
            Kami tidak menggunakan template asal jadi.
          </p>

          <p className="text-lg md:text-xl font-semibold mt-2 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Setiap website disesuaikan dengan identitas bisnis kamu.
          </p>
        </div>

        {/* HEADER */}
        <DemoSection
          filter={filter}
          setFilter={setFilter}
          filtered={filtered}
        />

        {/* 🔥 CTA SECTION */}
        <CTASection />

        {/* 🔥 PROCESS SECTION */}
        <ProcessSection />

        {/* 🔥 PRICING SECTION */}
        <PricingSection
          pricingTab={pricingTab}
          setPricingTab={setPricingTab}
          waLink={waLink}
        />

        {/* 🔥 TESTIMONI SECTION */}
        <TestimoniSection />

        {/* 🔥 FINAL CTA SECTION */}
        <FinalCTASection />

        {/* 🔥 BIG CTA SECTION (BLUE) */}
        <BigCTASection />

        {/* 🔥 FOOTER PREMIUM */}
        <Footer />
      </div>
    </div>
  );
}
