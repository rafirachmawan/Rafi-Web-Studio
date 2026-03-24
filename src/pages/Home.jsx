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

import thinkingImg from "../assets/thinking.png";

export default function Home() {
  const [filter, setFilter] = useState("all");

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
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-500/10 blur-[100px] rounded-full"></div>

      {/* ===================== */}
      {/* 🔥 NAVBAR FLOATING */}
      {/* ===================== */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-3 flex justify-between items-center shadow-lg">
          <h1 className="font-semibold text-sm">RAFWEB</h1>

          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-amber-400">
              Home
            </a>
            <a href="#" className="hover:text-amber-400">
              Demo
            </a>
            <a href="#" className="hover:text-amber-400">
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
        <div className="border border-white/10 rounded-[30px] md:rounded-[40px] p-6 md:p-10 bg-white/[0.02] backdrop-blur-lg mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* TEXT */}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Website Profesional untuk{" "}
                <span className="text-amber-400">Bisnis Kamu</span>
              </h1>

              <p className="text-gray-400 mt-4 text-sm md:text-base">
                Kami membantu bisnis tampil modern, cepat, dan siap closing
                dengan website berkualitas tinggi.
              </p>

              <button className="mt-6 bg-amber-500 hover:bg-amber-400 text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold transition">
                Lihat Demo
              </button>
            </div>

            {/* VIDEO / IMAGE */}
            <div className="h-[200px] md:h-[300px] bg-white/5 rounded-2xl flex items-center justify-center text-gray-500">
              VIDEO AI
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 TAMBAHKAN DI SINI */}
        {/* ===================== */}
        <div className="text-center mb-16 md:mb-24">
          {/* STATS */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">50+</h2>
              <p className="text-gray-400 text-sm mt-1">Proyek Selesai</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">99%</h2>
              <p className="text-gray-400 text-sm mt-1">Kepuasan Klien</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">24/7</h2>
              <p className="text-gray-400 text-sm mt-1">Dukungan Teknis</p>
            </div>
          </div>

          {/* BADGE */}
          <div className="inline-block px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-sm mb-6">
            ⚠️ Realita Pasar Digital
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Kenapa Banyak UMKM Kalah Saing Secara Online?
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
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Padahal produk kamu mungkin lebih bagus.{" "}
              <span className="text-amber-400 font-semibold">
                Masalahnya bukan di kualitas.
              </span>{" "}
              Masalahnya di{" "}
              <span className="text-amber-400 font-semibold">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm mb-6">
            ✔ Solusi Kami
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Kami Tidak Hanya Membuat Website.
          </h2>

          <h3 className="text-2xl md:text-4xl font-bold mt-3 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Kami Membuat Bisnis Kamu Terlihat Profesional.
          </h3>

          {/* DESC */}
          <p className="text-gray-400 mt-6">
            Setiap website yang kami buat dirancang untuk:
          </p>

          {/* LIST BENEFIT */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h4 className="font-semibold text-lg mb-2 text-amber-400">
                🔥 Meningkatkan Kepercayaan
              </h4>
              <p className="text-gray-400 text-sm">
                Tampilan modern membuat bisnis kamu terlihat profesional dan
                terpercaya.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h4 className="font-semibold text-lg mb-2 text-amber-400">
                🚀 Mudah Ditemukan
              </h4>
              <p className="text-gray-400 text-sm">
                Website dioptimalkan agar muncul di Google dan mudah dicari
                pelanggan.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h4 className="font-semibold text-lg mb-2 text-amber-400">
                💰 Meningkatkan Penjualan
              </h4>
              <p className="text-gray-400 text-sm">
                Desain dibuat untuk convert pengunjung jadi pembeli.
              </p>
            </div>
          </div>
        </div>

        {/* LIST BENEFIT */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* 1 */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
              🛡️
            </div>
            <h4 className="font-semibold text-lg mb-2">
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
            <h4 className="font-semibold text-lg mb-2">
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
            <h4 className="font-semibold text-lg mb-2">Mobile Friendly 100%</h4>
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
            <h4 className="font-semibold text-lg mb-2">
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
            <h4 className="font-semibold text-lg mb-2">Loading Cepat & Aman</h4>
            <p className="text-gray-400 text-sm">
              Website ringan, cepat, dan stabil.
            </p>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 CUSTOM MESSAGE */}
        {/* ===================== */}
        <div className="mt-16 mb-24 max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-8 text-center">
          <p className="text-lg md:text-xl text-gray-300">
            Kami tidak menggunakan template asal jadi.
          </p>

          <p className="text-xl md:text-2xl font-semibold mt-2 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Setiap website disesuaikan dengan identitas bisnis kamu.
          </p>
        </div>

        {/* HEADER */}
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hasil Nyata Yang Sudah{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Kami Kerjakan
            </span>
          </h1>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "food", "service", "education", "religion"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === cat
                  ? "bg-amber-500 text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
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
        <div className="mt-32 grid md:grid-cols-2 gap-10 items-start">
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
                <h3 className="text-2xl font-semibold">Konsultasi Gratis</h3>
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
                <h3 className="text-2xl font-semibold">Konsep & Desain</h3>
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
                <h3 className="text-2xl font-semibold">Revisi & Finalisasi</h3>
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
                <h3 className="text-2xl font-semibold">Launching</h3>
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
                <h3 className="text-2xl font-semibold">Support</h3>
                <p className="text-gray-400 mt-2">
                  Kami tetap membantu setelah website selesai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-10 text-gray-500 text-xs md:text-sm">
          © 2026 Rafi Web Studio
        </div>
      </div>
    </div>
  );
}
