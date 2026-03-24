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
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[80px] rounded-full"></div>

      {/* ===================== */}
      {/* 🔥 NAVBAR FLOATING */}
      {/* ===================== */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-lg">
          <h1 className="font-semibold text-sm">RAFWEB</h1>

          <div className="flex gap-6 text-sm text-gray-300">
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

          <button className="bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-medium">
            Konsultasi
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        {/* ===================== */}
        {/* 🔥 HERO SECTION */}
        {/* ===================== */}
        <div className="border border-white/10 rounded-[40px] p-6 md:p-10 bg-white/[0.02] backdrop-blur-lg mb-20">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* TEXT */}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Website Profesional untuk{" "}
                <span className="text-amber-400">Bisnis Kamu</span>
              </h1>

              <p className="text-gray-400 mt-4">
                Kami membantu bisnis tampil modern, cepat, dan siap closing
                dengan website berkualitas tinggi.
              </p>

              <button className="mt-6 bg-amber-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                Lihat Demo
              </button>
            </div>

            {/* VIDEO / IMAGE */}
            <div className="h-[250px] md:h-[300px] bg-white/5 rounded-2xl flex items-center justify-center text-gray-500">
              VIDEO AI
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* 🔥 TAMBAHKAN DI SINI */}
        {/* ===================== */}
        <div className="text-center mb-20">
          {/* STATS */}
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white">50+</h2>
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
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* LEFT */}
            <div className="space-y-4">
              <div className="border border-red-400/20 bg-red-400/5 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sm text-gray-300">
                  Terlihat kurang meyakinkan
                </span>
                <span className="text-red-400">✖</span>
              </div>

              <div className="border border-red-400/20 bg-red-400/5 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sm text-gray-300">
                  Kalah dari kompetitor yang tampil lebih modern
                </span>
                <span className="text-red-400">✖</span>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="w-[220px] h-[220px] bg-white/5 rounded-2xl flex items-center justify-center text-gray-500">
                IMAGE
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-4">
              <div className="border border-red-400/20 bg-red-400/5 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sm text-gray-300">
                  Sulit ditemukan di Google
                </span>
                <span className="text-red-400">✖</span>
              </div>

              <div className="border border-red-400/20 bg-red-400/5 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sm text-gray-300">
                  Pelanggan ragu untuk menghubungi
                </span>
                <span className="text-red-400">✖</span>
              </div>
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <div className="mt-10 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-center">
            <p className="text-gray-300">
              Padahal produk kamu mungkin lebih bagus.{" "}
              <span className="text-red-400 font-semibold">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm mb-6">
            ✔ Solusi Kami
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Kami Tidak Hanya Membuat Website.
          </h2>

          <h3 className="text-2xl md:text-4xl font-bold mt-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
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
            <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 text-xl">
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
            <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 text-xl">
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
            <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 text-xl">
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
            <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 text-xl">
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
            <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 text-xl">
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

          <p className="text-xl md:text-2xl font-semibold mt-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg hover:shadow-amber-400/30"
            >
              Diskusikan Project Kamu ↗
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-20 text-gray-500 text-sm">
          © 2026 Rafi Web Studio
        </div>
      </div>
    </div>
  );
}
