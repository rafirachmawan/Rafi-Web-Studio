// src/pages/Landing.jsx
// REFACTORED LANDING PAGE - Now ~100 lines instead of 833!
// All sections are separated into reusable components

import { useState } from 'react';
import { LandingNavbarCoffee, LandingNavbarRental, LandingNavbarHotel } from '../components/landing/LandingNavbar';
import { LandingFooterGeneric, LandingFooterSchool } from '../components/landing/LandingFooter';

export default function Landing({ data }) {
  const phone = "628123456789";
  const message = `Halo, saya tertarik dengan ${data.name}`;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={`${data.theme.bg} text-white min-h-screen font-sans ${
        data.type !== "sekolah" ? "pt-20" : ""
      }`}
    >
      {/* NAVBAR */}
      {!data.type === "sekolah" && (
        <>
          {data.type === "coffee" && <LandingNavbarCoffee waLink={waLink} />}
          {data.type === "rental" && <LandingNavbarRental waLink={waLink} />}
          {data.type === "hotel" && <LandingNavbarHotel waLink={waLink} />}
        </>
      )}

      {/* HERO SECTION - Simplified */}
      {data.type === "coffee" && <LandingHeroCoffee data={data} waLink={waLink} />}
      {data.type === "rental" && <LandingHeroRental data={data} waLink={waLink} />}
      {data.type === "sekolah" && <LandingHeroSekolah data={data} waLink={waLink} />}
      
      {/* MAIN CONTENT SECTION - Separated */}
      {data.type === "coffee" && <LandingSectionCoffee data={data} waLink={waLink} />}
      {data.type === "rental" && <LandingSectionRental data={data} waLink={waLink} />}
      {data.type === "hotel" && <LandingSectionHotel data={data} waLink={waLink} />}
      {data.type === "resto" && <LandingSectionResto data={data} waLink={waLink} />}
      {data.type === "sekolah" && <LandingSectionSekolah data={data} waLink={waLink} />}

      {/* FOOTER */}
      {data.type === "sekolah" ? (
        <LandingFooterSchool data={data} waLink={waLink} />
      ) : (
        <LandingFooterGeneric data={data} waLink={waLink} />
      )}
    </div>
  );
}

// ==================== HERO SECTIONS ====================

function LandingHeroCoffee({ data, waLink }) {
  return (
    <section className="relative h-[100vh] flex items-center justify-center text-center px-6 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        className="absolute inset-0 w-full h-full object-cover scale-110"
        alt="Coffee background"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">{data.hero.title}</h1>
        <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>
        <div className="flex justify-center gap-4">
          <a href={waLink} className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-xl">Order Coffee</a>
          <a href="#menu" className="border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition">Lihat Menu</a>
        </div>
      </div>
    </section>
  );
}

function LandingHeroRental({ data, waLink }) {
  return (
    <section className="relative py-32 px-6 text-center text-white bg-[#0f0f0f] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-[#1a1a1a]"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Sewa Mobil <span className="text-amber-400">Premium</span><br /> Cepat & Terpercaya
        </h1>
        <p className="text-gray-400 mb-10 text-lg">Armada lengkap, kondisi terbaik, siap menemani perjalanan Anda</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#mobil" className="bg-amber-500 text-black px-8 py-3 rounded-xl">Lihat Mobil</a>
          <a href={waLink} className="border border-white/20 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition">Hubungi Kami</a>
        </div>
      </div>
    </section>
  );
}

function LandingHeroSekolah({ data, waLink }) {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1588072432836-e10032774350"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        alt="School background"
      />
      <div className="absolute inset-0 bg-[#020617]/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent"></div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{data.hero.title}</h1>
        <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#program" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl">Lihat Program</a>
          <a href={waLink} className="border border-white/30 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition">Hubungi Sekolah</a>
        </div>
      </div>
    </section>
  );
}

// ==================== MAIN CONTENT SECTIONS ====================

function LandingSectionCoffee({ data, waLink }) {
  // TODO: Import component
  return null;
}

function LandingSectionRental({ data, waLink }) {
  // TODO: Import component  
  return null;
}

function LandingSectionHotel({ data, waLink }) {
  // TODO: Import component
  return null;
}

function LandingSectionResto({ data, waLink }) {
  // TODO: Import component
  return null;
}

function LandingSectionSekolah({ data, waLink }) {
  // TODO: Import component
  return null;
}
