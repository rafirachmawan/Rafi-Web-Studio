import { motion } from "framer-motion";
import { Check, Flame, Sparkles, Zap } from "lucide-react";

export default function PricingSection({ pricingTab, setPricingTab, waLink }) {
  return (
    <>
      <div id="harga" className="mt-32 mb-24 max-w-6xl mx-auto text-center px-4 relative">
        {/* Background ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />

        {/* GLOWING BADGE */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-5 animate-pulse"
        >
          <Sparkles size={14} className="text-amber-400 animate-spin-slow" />
          Promo Terbatas • Investasi Terbaik
        </motion.div>

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto text-black dark:text-white mb-4">
          Investasi Bisnis dengan <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
            Paket Website & Aplikasi
          </span>
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Dapatkan solusi digital premium berkecepatan tinggi, SEO-friendly, dan siap melejitkan penjualan bisnis Anda. Tanpa biaya tersembunyi!
        </p>

        {/* TAB */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16">
          {[
            { label: "Landing Page", value: "landingpage" },
            { label: "Mobile Apps", value: "mobileapps" },
            { label: "Web System", value: "websystem" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setPricingTab(item.value)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border ${
                pricingTab === item.value
                  ? "bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/30 scale-105"
                  : "bg-black/[0.02] dark:bg-white/[0.02] text-zinc-600 dark:text-zinc-400 border-black/5 dark:border-white/5 hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:scale-105"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* LANDING TAB */}
          {pricingTab === "landingpage" && (
            <>
              {/* STARTER */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-xl shadow-black/[0.02] dark:shadow-none min-h-[480px] relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300"
              >
                <div className="text-left">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Paket Starter</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">Hemat 50%</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Landing Page Standard</h3>
                  
                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 1.200.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-amber-500 tracking-tight">
                      Rp 599<span className="text-lg text-zinc-500">.000</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>1 Halaman Responsif Modern</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Desain Keren & Kecepatan Akses Tinggi</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Integrasi Tombol WhatsApp Chat & Call</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Free Domain (.my.id) selama 1 Tahun</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Free Hosting Kecepatan Tinggi (1 Tahun)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>SEO Dasar & Google Indexing</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={`${waLink}%20Landing%20Page%20Starter`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-zinc-100 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white/10 text-black dark:text-white py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all"
                >
                  Pilih Starter
                </a>
              </motion.div>

              {/* PRO LANDING */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }} 
                className="relative bg-white dark:bg-zinc-900 border-2 border-amber-400 rounded-[2.5rem] p-8 shadow-2xl shadow-amber-500/20 md:-translate-y-4 flex flex-col justify-between min-h-[500px] overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-[60px] rounded-full" />
                <div className="absolute top-5 right-5 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1">
                  <Flame size={10} />
                  Paling Populer
                </div>

                <div className="text-left relative z-10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Paket Pro</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">Hemat 50%</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-zinc-900 dark:text-white">
                    Pro Landing Page
                  </h3>

                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 2.600.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                      Rp 1.299<span className="text-lg text-zinc-500">.000</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5 text-amber-600 dark:text-amber-400 font-bold">
                      <Zap size={16} className="shrink-0 mt-0.5" />
                      <span>Multi Section Lengkap (Tampilan Panjang)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Copywriting Hipnotik & Desain Kustom Figma</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Premium Domain (.com) selama 1 Tahun</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Cloud Hosting Unlimited Bandwidth</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Advanced SEO Setup & Google Console Integration</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Integrasi Google Analytics & FB/Tiktok Pixel</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Garansi Perbaikan Sistem 3 Bulan + Support Prioritas</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={`${waLink}%20Landing%20Page%20Pro`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 block text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white py-4 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02]"
                >
                  Mulai Buat Sekarang
                </a>
              </motion.div>
            </>
          )}

          {/* MOBILE APPS TAB */}
          {pricingTab === "mobileapps" && (
            <>
              {/* STARTER MOBILE APP */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-xl min-h-[480px] relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300"
              >
                <div className="text-left">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Mobile Starter</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">Hemat 50%</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Basic Mobile App</h3>

                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 8.000.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-amber-500 tracking-tight">
                      Rp 3.999<span className="text-lg text-zinc-500">.000</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>1 Platform Rilis (Android atau iOS)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Desain Modern UI/UX Interaktif</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Fitur Utama Mandiri & Integrasi API Dasar</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Dibantu Upload ke Google Play / App Store</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Garansi Perbaikan Bug Sistem selama 3 Bulan</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Konsultasi Teknis & Alur Sistem Awal</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href={`${waLink}%20Mobile%20Apps%20Starter`} 
                  className="block text-center bg-zinc-100 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white/10 text-black dark:text-white py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all"
                >
                  Pilih Starter Mobile
                </a>
              </motion.div>

              {/* PRO MOBILE APP */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }} 
                className="relative bg-white dark:bg-zinc-900 border-2 border-amber-400 rounded-[2.5rem] p-8 md:-translate-y-4 shadow-2xl shadow-amber-500/20 flex flex-col justify-between min-h-[500px]"
              >
                <div className="absolute top-5 right-5 bg-amber-500 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1">
                  <Flame size={10} />
                  Paling Laris
                </div>
                <div className="text-left">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Mobile Pro</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">Hemat 50%</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-zinc-900 dark:text-white">Pro Mobile App</h3>

                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 16.000.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                      Rp 7.999<span className="text-lg text-zinc-500">.000</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5 text-amber-600 dark:text-amber-400 font-bold">
                      <Zap size={16} className="shrink-0 mt-0.5" />
                      <span>Multiplatform Rilis Langsung (Android & iOS)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Desain UI/UX Kustom High-Fidelity (Figma)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Integrasi Payment Gateway & Maps API</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Fitur Realtime Push Notifications & Fitur Chat</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Admin Panel berbasis Web untuk Kelola Konten & Data</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Garansi & Dukungan Pemeliharaan Premium 6 Bulan</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href={`${waLink}%20Mobile%20Apps%20Pro`} 
                  className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-lg hover:scale-[1.02]"
                >
                  Mulai Buat Sekarang
                </a>
              </motion.div>
            </>
          )}

          {/* WEB SYSTEM TAB */}
          {pricingTab === "websystem" && (
            <>
              {/* WEB SYSTEM BASIC */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-xl min-h-[480px] relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300"
              >
                <div className="text-left">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Web System Basic</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">Hemat 50%</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Basic Web System</h3>

                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 10.000.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-amber-500 tracking-tight">
                      Rp 4.999<span className="text-lg text-zinc-500">.000</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Sistem Manajemen Data & Pengelolaan User (Multi-Role)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Halaman Admin Dashboard Interaktif & Grafik</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Fitur Ekspor / Impor Data (Excel / PDF / CSV)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Integrasi Database Relasional yang Cepat & Aman</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Cloud Server Premium & SSL Keamanan Selamanya</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Garansi Perbaikan Cepat & Bug Sistem 3 Bulan</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href={`${waLink}%20Web%20System%20Basic`} 
                  className="block text-center bg-zinc-100 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white/10 text-black dark:text-white py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all"
                >
                  Pilih System Basic
                </a>
              </motion.div>

              {/* WEB SYSTEM CUSTOM / PRO */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }} 
                className="relative bg-white dark:bg-zinc-900 border-2 border-amber-400 rounded-[2.5rem] p-8 md:-translate-y-4 shadow-2xl shadow-amber-500/20 flex flex-col justify-between min-h-[500px]"
              >
                <div className="absolute top-5 right-5 bg-amber-500 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1">
                  <Flame size={10} />
                  Paling Komprehensif
                </div>
                <div className="text-left">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Web System Custom</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">Hemat 50%</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-zinc-900 dark:text-white">Custom Web System / ERP</h3>

                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 20.000.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                      Rp 9.999<span className="text-lg text-zinc-500">.000+</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5 text-amber-600 dark:text-amber-400 font-bold">
                      <Zap size={16} className="shrink-0 mt-0.5" />
                      <span>Sistem Manajemen Bisnis Kompleks (ERP / CRM / HRIS)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Integrasi Multi-Cabang, Inventori & Multi-Gudang</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Integrasi API Pihak Ketiga & Payment Gateway Otomatis</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Optimasi Kinerja Database Tingkat Tinggi (Jutaan Data)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Desain Eksklusif Sesuai Kebutuhan Unik Alur Bisnis</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Dukungan Teknis Prioritas & Maintenance selama 1 Tahun</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href={`${waLink}%20Web%20System%20Custom`} 
                  className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-lg hover:scale-[1.02]"
                >
                  Mulai Buat Sekarang
                </a>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
