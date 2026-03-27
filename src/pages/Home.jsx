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

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [pricingTab, setPricingTab] = useState("landing");

  const waLink =
    "https://wa.me/6285707185783?text=Halo%20saya%20tertarik%20dengan%20paket%20website";

  const demos = [
    {
      name: "Coffee",
      path: "/coffee",
      desc: "Website cafe aesthetic & modern",
      icon: "☕",
      category: "food",
      image: coffeeImg,
    },
    {
      name: "Rental",
      path: "/rental",
      desc: "Sistem sewa mobil cepat & praktis",
      icon: "🚗",
      category: "service",
      image: rentalImg,
    },
    {
      name: "Hotel",
      path: "/hotel",
      desc: "Landing page hotel elegan & premium",
      icon: "🏨",
      category: "service",
      image: hotelImg,
    },
    {
      name: "Resto",
      path: "/resto",
      desc: "Website menu & booking restoran",
      icon: "🍽️",
      category: "food",
      image: restoImg,
    },
    {
      name: "Sekolah",
      path: "/sekolah",
      desc: "Profil sekolah profesional",
      icon: "🏫",
      category: "education",
      image: sekolahImg,
    },
    {
      name: "Laundry",
      path: "/laundry",
      desc: "Website laundry modern + tracking order",
      icon: "🧺",
      category: "service",
      image: laundryImg,
    },
    {
      name: "Umroh",
      path: "/umroh",
      desc: "Landing page travel umroh profesional",
      icon: "🕋",
      category: "religion",
      image: umrohImg,
    },
  ];

  const filtered =
    filter === "all" ? demos : demos.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-500/10 blur-[100px] rounded-full"></div>

      {/* ===================== */}
      {/* 🔥 NAVBAR FLOATING */}
      {/* ===================== */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-3 flex justify-between items-center shadow-lg">
          <h1 className="font-heading font-semibold text-sm tracking-wide">
            RAFWEB
          </h1>

          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#home" className="hover:text-amber-400 transition">
              Home
            </a>

            <a href="#demo" className="hover:text-amber-400 transition">
              Demo
            </a>

            <a href="#proses" className="hover:text-amber-400 transition">
              Proses
            </a>

            <a href="#harga" className="hover:text-amber-400 transition">
              Harga
            </a>

            <a href="#testimoni" className="hover:text-amber-400 transition">
              Testimoni
            </a>

            <a href="#contact" className="hover:text-amber-400 transition">
              Contact
            </a>
          </div>

          <button className="bg-amber-500 hover:bg-amber-400 text-black px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition">
            Konsultasi
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-16 relative z-10">
        {/* ===================== */}
        {/* 🔥 HERO SECTION */}
        {/* ===================== */}
        <div
          id="home"
          className="border border-white/10 rounded-[30px] md:rounded-[40px] p-6 md:p-10 bg-white/[0.02] backdrop-blur-lg mb-16 md:mb-24"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* TEXT */}
            <div>
              <h1 className="text-3xl md:text-6xl font-heading font-extrabold tracking-tight leading-tight">
                WEBSITE PROFESIONAL UNTUK{" "}
                <span className="text-amber-400">BISNIS KAMU</span>
              </h1>

              <p className="text-gray-400 mt-4 text-sm md:text-base">
                Kami membantu bisnis tampil modern, cepat, dan siap closing
                dengan website berkualitas tinggi.
              </p>

              <a
                href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-amber-500 hover:bg-amber-400 text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold transition"
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* VIDEO / IMAGE */}
            <div className="h-[200px] md:h-[300px] rounded-2xl overflow-hidden relative">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* overlay glow biar premium */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 TAMBAHKAN DI SINI */}
        {/* ===================== */}
        <div className="text-center mt-10 md:mt-16 mb-16 md:mb-24">
          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-5xl mx-auto">
            {/* ITEM 1 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-amber-400/30 transition">
              <h2 className="text-4xl md:text-5xl font-bold text-white">50+</h2>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Proyek Selesai
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-amber-400/30 transition">
              <h2 className="text-4xl md:text-5xl font-bold text-white">99%</h2>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Kepuasan Klien
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-amber-400/30 transition">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                24/7
              </h2>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Dukungan Teknis
              </p>
            </div>
          </div>

          {/* BADGE */}
          <div className="inline-block px-6 py-3 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-base md:text-lg font-medium mb-8 shadow-[0_0_20px_rgba(255,180,0,0.15)]">
            ⚠️ Realita Pasar Digital
          </div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-snug max-w-2xl mx-auto">
            Kenapa Banyak <span className="text-amber-400">UMKM</span> Kalah
            Saing Secara Online?
          </h2>

          {/* DESC */}
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Hari ini pelanggan tidak langsung datang ke toko. Mereka cari di
            Google dulu. Mereka cek Instagram. Mereka lihat review.
          </p>
        </div>

        {/* ===================== */}
        {/* 🔥 PROBLEM DETAIL SECTION */}
        {/* ===================== */}
        <div className="mb-24">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            {/* LEFT */}
            <div className="space-y-4 order-2 md:order-1">
              {/* ITEM 1 */}
              <div className="group relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition hover:-translate-y-0.5 overflow-hidden">
                {/* GLOW LINE */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-400/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                {/* ICON */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-400/10 text-red-400 text-xs mt-1">
                  ✖
                </div>

                {/* TEXT */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition">
                  Terlihat kurang meyakinkan
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="group relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition hover:-translate-y-0.5 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-400/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-400/10 text-red-400 text-xs mt-1">
                  ✖
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition">
                  Kalah dari kompetitor yang tampil lebih modern
                </p>
              </div>
            </div>

            {/* AVATAR (NO BOX) */}
            <div className="flex justify-center order-1 md:order-2 relative">
              <img
                src={thinkingImg}
                alt="thinking"
                className="w-[260px] md:w-[360px] object-contain drop-shadow-[0_20px_60px_rgba(255,180,0,0.2)]"
              />
            </div>

            {/* RIGHT */}
            <div className="space-y-4 order-3">
              {/* ITEM 1 */}
              <div className="group relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition hover:-translate-y-0.5 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-400/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-400/10 text-red-400 text-xs mt-1">
                  ✖
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition">
                  Sulit ditemukan di Google
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="group relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition hover:-translate-y-0.5 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-400/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-400/10 text-red-400 text-xs mt-1">
                  ✖
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition">
                  Pelanggan ragu untuk menghubungi
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <div className="mt-12 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-center">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Padahal produk kamu mungkin lebih bagus.{" "}
              <span className="text-amber-400 font-medium">
                Masalahnya bukan di kualitas.
              </span>{" "}
              Masalahnya di{" "}
              <span className="text-amber-400 font-medium">
                tampilan dan kepercayaan.
              </span>
            </p>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 SOLUSI SECTION */}
        {/* ===================== */}
        <div className="text-center mb-24">
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-base md:text-lg font-semibold mb-8 shadow-[0_0_25px_rgba(255,180,0,0.2)] backdrop-blur-md">
            <span className="text-lg md:text-xl">✔</span>
            Solusi Kami
          </div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-snug max-w-2xl mx-auto">
            Kami Tidak Hanya Membuat Website.
            <br />
            <span className="text-amber-400">
              Kami Membuat Bisnis Kamu Terlihat Profesional.
            </span>
          </h2>

          {/* DESC */}
          <p className="text-gray-400 mt-6">
            Setiap website yang kami buat dirancang untuk:
          </p>
        </div>

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
        <div id="demo" className="text-center mb-16 mt-10">
          <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-snug max-w-2xl mx-auto">
            Hasil Nyata Yang Sudah{" "}
            <span className="text-amber-400">Kami Kerjakan</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Beberapa project yang telah kami bantu untuk meningkatkan
            kepercayaan dan penjualan bisnis klien.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "food", "service", "education", "religion"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                filter === cat
                  ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_20px_rgba(255,180,0,0.4)] scale-105"
                  : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20 hover:text-white hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((demo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={demo.path}
                className="group block bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 transition"
              >
                {/* IMAGE */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={demo.image}
                    alt={demo.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  {/* ICON */}
                  <div className="text-2xl mb-2">{demo.icon}</div>

                  {/* TITLE */}
                  <h2 className="text-lg font-semibold group-hover:text-amber-400">
                    {demo.name}
                  </h2>

                  {/* DESC */}
                  <p className="text-gray-400 text-sm mt-1 mb-4">{demo.desc}</p>

                  {/* CTA */}
                  <span className="text-amber-400 text-sm">Lihat Demo →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ===================== */}
        {/* 🔥 CTA SECTION */}
        {/* ===================== */}
        <div className="mt-24 mb-24 max-w-3xl mx-auto bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-10 text-center">
          {/* TEXT */}
          <p className="text-gray-400 text-lg">
            Website bukan hanya tampilan.{" "}
            <span className="text-white font-semibold">
              Website adalah alat untuk meningkatkan kredibilitas.
            </span>
          </p>

          {/* BUTTON */}
          <div className="mt-6">
            <a
              href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Diskusikan Project Kamu ↗
            </a>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 PROCESS SECTION */}
        {/* ===================== */}
        <div
          id="proses"
          className="mt-32 grid md:grid-cols-2 gap-10 items-start"
        >
          {/* LEFT (STICKY) */}
          <div className="md:sticky md:top-32 h-fit">
            <p className="text-amber-400 text-sm tracking-widest mb-4">
              CARA KAMI BEKERJA
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Proses <br />
              Pembuatan yang <span className="text-amber-400">Transparan.</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-md">
              Kami memecah proyek kompleks menjadi langkah-langkah sederhana
              agar Anda selalu tahu apa yang sedang kami kerjakan.
            </p>
          </div>

          {/* RIGHT (SCROLL CONTENT) */}
          <div className="space-y-20">
            {/* STEP 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
                  01
                </div>
                <div className="w-[2px] h-24 bg-white/10 mt-2"></div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-semibold tracking-tight">
                  Konsultasi Gratis
                </h3>
                <p className="text-gray-400 mt-2">
                  Kami dengarkan kebutuhan dan tujuan bisnis kamu.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
                  02
                </div>
                <div className="w-[2px] h-24 bg-white/10 mt-2"></div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-semibold tracking-tight">
                  Konsep & Desain
                </h3>
                <p className="text-gray-400 mt-2">
                  Kami kirim preview sebelum website online.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
                  03
                </div>
                <div className="w-[2px] h-24 bg-white/10 mt-2"></div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-semibold tracking-tight">
                  Revisi & Finalisasi
                </h3>
                <p className="text-gray-400 mt-2">
                  Pastikan semuanya sesuai dengan keinginan kamu.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
                  04
                </div>
                <div className="w-[2px] h-24 bg-white/10 mt-2"></div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-semibold tracking-tight">
                  Launching
                </h3>
                <p className="text-gray-400 mt-2">
                  Website aktif dan siap digunakan.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
                  05
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-semibold tracking-tight">
                  Support
                </h3>
                <p className="text-gray-400 mt-2">
                  Kami tetap membantu setelah website selesai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 PRICING SECTION */}
        {/* ===================== */}
        <div id="harga" className="mt-32 mb-24 max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-snug max-w-2xl mx-auto">
            Paket Website <span className="text-amber-400">Profesional</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4 mb-8">
            Pilih paket sesuai kebutuhan bisnis kamu. Semua sudah siap untuk
            meningkatkan kepercayaan dan penjualan.
          </p>

          {/* TAB */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { label: "Landing Page", value: "landing" },
              { label: "Company Profile", value: "company" },
              { label: "E-Commerce", value: "ecommerce" },
              { label: "Custom", value: "custom" },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setPricingTab(item.value)}
                className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                  pricingTab === item.value
                    ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_12px_rgba(255,180,0,0.3)]"
                    : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20 hover:scale-105"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CARD */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* LANDING */}
            {pricingTab === "landing" && (
              <>
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    Landing Page Starter
                  </h3>
                  <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-3">
                    Rp 600.000
                  </h2>
                  <ul className="text-gray-400 text-xs space-y-1 mb-4">
                    <li>✔ 1 Halaman</li>
                    <li>✔ Desain Modern</li>
                    <li>✔ Mobile Friendly</li>
                  </ul>

                  <a
                    href={`${waLink}%20Landing%20Page%20Starter`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-amber-500 hover:bg-amber-400 text-black py-2 rounded-full text-xs md:text-sm font-medium transition"
                  >
                    Konsultasi Sekarang
                  </a>
                </div>

                <div className="bg-white/[0.05] border border-amber-400/40 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Landing Page Pro
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                    Rp 1.300.000
                  </h2>
                  <ul className="text-gray-400 text-sm space-y-2 mb-6">
                    <li>✔ Multi Section</li>
                    <li>✔ SEO Basic</li>
                    <li>✔ WhatsApp + Form</li>
                  </ul>

                  <a
                    href={`${waLink}%20Landing%20Page%20Pro`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-gradient-to-r from-amber-400 to-yellow-300 text-black py-2.5 rounded-full font-semibold hover:scale-105 transition"
                  >
                    Konsultasi Sekarang
                  </a>
                </div>
              </>
            )}

            {/* COMPANY */}
            {pricingTab === "company" && (
              <>
                {/* Company Basic */}
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
                  {/* TOP */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-2">
                      Company Basic
                    </h3>

                    <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-3">
                      Rp 1.500.000
                    </h2>

                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>✔ 3-5 Halaman</li>
                      <li>✔ Profil Perusahaan</li>
                    </ul>
                  </div>

                  {/* BUTTON */}
                  <a
                    href={`${waLink}%20Company%20Basic`}
                    target="_blank"
                    className="mt-6 block text-center bg-amber-500 hover:bg-amber-400 text-black py-2 rounded-full text-xs font-medium transition"
                  >
                    Konsultasi Sekarang
                  </a>
                </div>

                {/* Company Pro */}
                <div className="bg-white/[0.05] border border-amber-400/40 rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
                  {/* TOP */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-2">
                      Company Pro
                    </h3>

                    <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-3">
                      Rp 3.000.000
                    </h2>

                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>✔ Unlimited Page</li>
                      <li>✔ SEO + Speed</li>
                    </ul>
                  </div>

                  {/* BUTTON */}
                  <a
                    href={`${waLink}%20Company%20Pro`}
                    target="_blank"
                    className="mt-6 block text-center bg-gradient-to-r from-amber-400 to-yellow-300 text-black py-2 rounded-full text-xs font-medium transition"
                  >
                    Konsultasi Sekarang
                  </a>
                </div>
              </>
            )}

            {/* ECOMMERCE */}
            {pricingTab === "ecommerce" && (
              <>
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
                  <h3 className="text-2xl font-semibold mb-4">
                    Toko Online Basic
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                    Rp 2.500.000
                  </h2>
                  <ul className="text-gray-400 text-sm space-y-2 mb-6">
                    <li>✔ Produk Catalog</li>
                    <li>✔ WhatsApp Order</li>
                  </ul>

                  <a
                    href={`${waLink}%20Ecommerce%20Basic`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-amber-500 hover:bg-amber-400 text-black py-2.5 rounded-full font-semibold transition"
                  >
                    Konsultasi Sekarang
                  </a>
                </div>

                <div className="bg-white/[0.05] border border-amber-400/40 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Toko Online Pro
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                    Rp 5.000.000
                  </h2>
                  <ul className="text-gray-400 text-sm space-y-2 mb-6">
                    <li>✔ Payment Gateway</li>
                    <li>✔ Dashboard Admin</li>
                  </ul>

                  <a
                    href={`${waLink}%20Ecommerce%20Pro`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-gradient-to-r from-amber-400 to-yellow-300 text-black py-2.5 rounded-full font-semibold hover:scale-105 transition"
                  >
                    Konsultasi Sekarang
                  </a>
                </div>
              </>
            )}

            {/* CUSTOM */}
            {pricingTab === "custom" && (
              <div className="col-span-2 bg-white/[0.03] border border-white/10 rounded-3xl p-10 text-center">
                <h3 className="text-2xl font-semibold mb-4">Custom Project</h3>

                <p className="text-gray-400 mb-6">
                  Punya kebutuhan khusus? Kami siap bantu sesuai kebutuhan kamu.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                  Mulai dari Rp 1.000.000+
                </h2>

                <a
                  href={`${waLink}%20Custom%20Project`}
                  target="_blank"
                  className="inline-block bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-6 py-3 rounded-full font-semibold"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            )}
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 TESTIMONI SECTION */}
        {/* ===================== */}
        <div
          id="testimoni"
          className="mt-32 mb-24 max-w-6xl mx-auto text-center"
        >
          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Kisah Sukses{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Klien Kami
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base">
            Website bukan cuma gaya-gayaan, tapi senjata rahasia untuk bisnis
            maju.
          </p>

          {/* GRID TESTIMONI */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-left hover:border-amber-400/30 transition">
              <div className="text-amber-400 mb-3">★★★★★</div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "Website travel agency saya jadi rujukan utama pelanggan.
                Tampilan di HP sangat smooth!"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-sm font-semibold">Lestari Budi</h4>
                  <p className="text-xs text-gray-400">Lancar Jaya Travel</p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-left hover:border-amber-400/30 transition">
              <div className="text-amber-400 mb-3">★★★★★</div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "Custom project dikerjakan dengan sangat detail. Fitur yang saya
                minta semuanya berfungsi sempurna."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-sm font-semibold">Budi Kusuma</h4>
                  <p className="text-xs text-gray-400">E-Learning Platform</p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-left hover:border-amber-400/30 transition">
              <div className="text-amber-400 mb-3">★★★★★</div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "Awalnya ragu, tapi setelah jadi hasilnya jauh melampaui
                ekspektasi. TOP!"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-sm font-semibold">Agus Salim</h4>
                  <p className="text-xs text-gray-400">Catering Berkah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 FINAL CTA SECTION */}
        {/* ===================== */}
        <div className="mb-24">
          <div className="max-w-5xl mx-auto px-6 py-6 md:py-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* LEFT */}
            <div className="flex items-center gap-4">
              {/* AVATAR GROUP */}
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/40?img=11"
                  className="w-10 h-10 rounded-full border-2 border-black"
                />
                <img
                  src="https://i.pravatar.cc/40?img=12"
                  className="w-10 h-10 rounded-full border-2 border-black"
                />
                <img
                  src="https://i.pravatar.cc/40?img=13"
                  className="w-10 h-10 rounded-full border-2 border-black"
                />
                <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center text-xs font-bold border-2 border-black">
                  100+
                </div>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Siap Melejitkan Bisnis Anda?
                </h3>
                <p className="text-gray-400 text-sm">
                  Bergabunglah dengan{" "}
                  <span className="text-amber-400 font-medium">
                    ratusan pengusaha
                  </span>{" "}
                  yang telah naik kelas.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <a
              href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 BIG CTA SECTION (BLUE) */}
        {/* ===================== */}
        <div className="mb-24 px-4">
          <div className="max-w-6xl mx-auto rounded-[30px] md:rounded-[40px]bg-gradient-to-br from-[#111] via-[#0a0a0a] to-black border border-amber-400/10 py-16 md:py-20 px-6 text-center relative overflow-hidden">
            {/* GLOW BACKGROUND */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-3xl mx-auto">
              {/* TITLE */}
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Bisnis Kamu Sudah Siap{" "}
                <span className="italic text-gray-400">Naik Level?</span>
              </h2>

              {/* DESC */}
              <p className="text-blue-100 mt-6 text-sm md:text-lg">
                Kalau kompetitor kamu sudah punya website profesional, kamu
                tidak bisa terus menunda.{" "}
                <span className="font-semibold text-white">
                  Bangun kepercayaan. Dapatkan pelanggan baru.
                </span>
              </p>

              {/* BUTTON */}
              <div className="mt-10">
                <a
                  href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-lg hover:scale-105 transition"
                >
                  Konsultasi Gratis Sekarang →
                </a>
              </div>

              {/* NOTE */}
              <p className="text-gray-400 text-xs md:text-sm mt-6">
                Gratis, tanpa komitmen, tanpa syarat tersembunyi.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 FOOTER PREMIUM */}
        {/* ===================== */}
        <div
          id="contact"
          className="mt-32 border-t border-white/10 pt-16 pb-10"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-10 text-left">
            {/* LEFT */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                RAFWEB<span className="text-amber-400">.</span>
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Jasa pembuatan website profesional untuk UMKM, bisnis lokal, dan
                personal branding agar tampil lebih terpercaya dan modern.
              </p>
            </div>

            {/* MENU */}
            <div>
              <h3 className="text-white font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#home" className="hover:text-amber-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-amber-400">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#proses" className="hover:text-amber-400">
                    Proses
                  </a>
                </li>
                <li>
                  <a href="#harga" className="hover:text-amber-400">
                    Harga
                  </a>
                </li>
                <li>
                  <a href="#testimoni" className="hover:text-amber-400">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>

              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">💬</span>
                  <a
                    href="https://wa.me/6285707185783"
                    target="_blank"
                    className="hover:text-amber-400 transition"
                  >
                    WhatsApp
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-amber-400">📷</span>
                  <span className="hover:text-amber-400 transition cursor-pointer">
                    Instagram
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✉️</span>
                  <span className="text-gray-500">rafwebstudio@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* LINE */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs md:text-sm">
            <p>© 2026 RafWeb Studio. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Website Profesional untuk Bisnis Modern 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
