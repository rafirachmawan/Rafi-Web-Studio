import { Check, Flame, Sparkles, Zap } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function PricingSection({ pricingTab, setPricingTab, waLink }) {
  const { t } = useLanguage();
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
          {t("Promo Terbatas • Investasi Terbaik", "Limited Promo • Best Investment")}
        </motion.div>

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto text-black dark:text-white mb-4">
          {t("Investasi Bisnis dengan", "Business Investment with")} <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
            {t("Paket Website & Aplikasi", "Website & App Packages")}
          </span>
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          {t("Dapatkan solusi digital premium berkecepatan tinggi, SEO-friendly, dan siap melejitkan penjualan bisnis Anda. Tanpa biaya tersembunyi!", "Get premium, high-speed, SEO-friendly digital solutions ready to boost your business sales. No hidden fees!")}
        </p>

        {/* TAB */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-16 w-full">
          {[
            { label: t("Landing Page", "Landing Page"), value: "landingpage" },
            { label: t("Aplikasi Mobile", "Mobile Apps"), value: "mobileapps" },
            { label: t("Sistem Web", "Web System"), value: "websystem" },
            { label: t("Kustom", "Custom"), value: "custom" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setPricingTab(item.value)}
              className={`w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs md:text-sm font-bold transition-all duration-300 border flex items-center justify-center ${
                pricingTab === item.value
                  ? "bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/30 scale-[1.02] sm:scale-105"
                  : "bg-black/[0.02] dark:bg-white/[0.02] text-zinc-600 dark:text-zinc-400 border-black/5 dark:border-white/5 hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:scale-[1.02] sm:hover:scale-105"
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
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t("Paket Starter", "Starter Package")}</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">{t("Hemat 50%", "Save 50%")}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">{t("Landing Page Standard", "Standard Landing Page")}</h3>
                  
                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 999.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-amber-500 tracking-tight">
                      Rp 499<span className="text-lg text-zinc-500">.000</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("1 Halaman Responsif Modern", "1 Modern Responsive Page")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Desain Keren & Kecepatan Akses Tinggi", "Cool Design & High Speed Access")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Integrasi Tombol WhatsApp Chat & Call", "WhatsApp Chat & Call Button Integration")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("SEO Dasar & Google Indexing", "Basic SEO & Google Indexing")}</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-zinc-400 dark:text-zinc-600 line-through">
                      <span className="w-4 h-4 shrink-0 mt-0.5 inline-block" />
                      <span>{t("Tanpa Free Domain", "No Free Domain")}</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-zinc-400 dark:text-zinc-600 line-through">
                      <span className="w-4 h-4 shrink-0 mt-0.5 inline-block" />
                      <span>{t("Tanpa Free Hosting", "No Free Hosting")}</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={`${waLink}%20Landing%20Page%20Starter`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-zinc-100 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white/10 text-black dark:text-white py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all"
                >
                  {t("Pilih Starter", "Choose Starter")}
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
                  {t("Paling Populer", "Most Popular")}
                </div>

                <div className="text-left relative z-10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{t("Paket Pro", "Pro Package")}</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">{t("Hemat 50%", "Save 50%")}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-zinc-900 dark:text-white">
                    {t("Pro Landing Page", "Pro Landing Page")}
                  </h3>

                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 1.999.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                      Rp 999<span className="text-lg text-zinc-500">.000</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5 text-amber-600 dark:text-amber-400 font-bold">
                      <Zap size={16} className="shrink-0 mt-0.5" />
                      <span>{t("Multi Section Lengkap (Tampilan Panjang)", "Complete Multi-Section (Long Page)")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Copywriting Hipnotik & Desain Kustom Figma", "Hypnotic Copywriting & Custom Figma Design")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Premium Domain (.com) selama 1 Tahun", "Premium Domain (.com) for 1 Year")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Cloud Hosting Unlimited Bandwidth", "Cloud Hosting Unlimited Bandwidth")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Advanced SEO Setup & Google Console Integration", "Advanced SEO Setup & Google Console Integration")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Integrasi Google Analytics & FB/Tiktok Pixel", "Google Analytics & FB/Tiktok Pixel Integration")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Garansi Perbaikan Sistem 3 Bulan + Support Prioritas", "3-Month System Bug Warranty + Priority Support")}</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={`${waLink}%20Landing%20Page%20Pro`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 block text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white py-4 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02]"
                >
                  {t("Mulai Buat Sekarang", "Get Started Now")}
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
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t("Mobile Starter", "Mobile Starter")}</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">{t("Hemat 50%", "Save 50%")}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">{t("Basic Mobile App", "Basic Mobile App")}</h3>

                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 3.999.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-amber-500 tracking-tight">
                      Rp 1.999<span className="text-lg text-zinc-500">.000</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("1 Platform Rilis (Android atau iOS)", "1 Release Platform (Android or iOS)")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Desain Modern UI/UX Interaktif", "Modern Interactive UI/UX Design")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Fitur Utama Mandiri & Integrasi API Dasar", "Independent Core Features & Basic API Integration")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Dibantu Upload ke Google Play / App Store", "Assisted Upload to Google Play / App Store")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Garansi Perbaikan Bug Sistem selama 3 Bulan", "3-Month System Bug Repair Warranty")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Konsultasi Teknis & Alur Sistem Awal", "Technical Consultation & Initial System Flow")}</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href={`${waLink}%20Mobile%20Apps%20Starter`} 
                  className="block text-center bg-zinc-100 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white/10 text-black dark:text-white py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all"
                >
                  {t("Pilih Starter Mobile", "Choose Starter Mobile")}
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
                  {t("Paling Laris", "Best Seller")}
                </div>
                <div className="text-left">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{t("Mobile Pro", "Mobile Pro")}</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">{t("Hemat 50%", "Save 50%")}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-zinc-900 dark:text-white">{t("Pro Mobile App", "Pro Mobile App")}</h3>

                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 7.999.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                      Rp 3.999<span className="text-lg text-zinc-500">.999</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5 text-amber-600 dark:text-amber-400 font-bold">
                      <Zap size={16} className="shrink-0 mt-0.5" />
                      <span>{t("Multiplatform Rilis Langsung (Android & iOS)", "Instant Multiplatform Release (Android & iOS)")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Desain UI/UX Kustom High-Fidelity (Figma)", "Custom High-Fidelity UI/UX Design (Figma)")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Integrasi Payment Gateway & Maps API", "Payment Gateway & Maps API Integration")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Fitur Realtime Push Notifications & Fitur Chat", "Realtime Push Notifications & Chat Features")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Admin Panel berbasis Web untuk Kelola Konten & Data", "Web-based Admin Panel to Manage Content & Data")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Garansi & Dukungan Pemeliharaan Premium 6 Bulan", "6-Month Premium Maintenance & Support")}</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href={`${waLink}%20Mobile%20Apps%20Pro`} 
                  className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-lg hover:scale-[1.02]"
                >
                  {t("Mulai Buat Sekarang", "Get Started Now")}
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
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t("Web System Basic", "Web System Basic")}</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">{t("Hemat 50%", "Save 50%")}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">{t("Basic Web System", "Basic Web System")}</h3>

                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 3.000.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-amber-500 tracking-tight">
                      Rp 1.499<span className="text-lg text-zinc-500">.999</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Sistem Manajemen Data & Pengelolaan User (Multi-Role)", "Data Management & User Management System (Multi-Role)")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Halaman Admin Dashboard Interaktif & Grafik", "Interactive Admin Dashboard Page & Charts")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Fitur Ekspor / Impor Data (Excel / PDF / CSV)", "Data Export / Import Features (Excel / PDF / CSV)")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Integrasi Database Relasional yang Cepat & Aman", "Fast & Secure Relational Database Integration")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Cloud Server Premium & SSL Keamanan Selamanya", "Premium Cloud Server & SSL Security Lifetime")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Garansi Perbaikan Cepat & Bug Sistem 3 Bulan", "3-Month Fast Fix & System Bug Warranty")}</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href={`${waLink}%20Web%20System%20Basic`} 
                  className="block text-center bg-zinc-100 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white/10 text-black dark:text-white py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all"
                >
                  {t("Pilih System Basic", "Choose System Basic")}
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
                  {t("Paling Komprehensif", "Most Comprehensive")}
                </div>
                <div className="text-left">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{t("Web System Custom", "Custom Web System")}</span>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">{t("Hemat 50%", "Save 50%")}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-zinc-900 dark:text-white">{t("Custom Web System / ERP", "Custom Web System / ERP")}</h3>

                  {/* PRICING AREA */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-zinc-400 line-through dark:text-zinc-500 block mb-1">Rp 7.000.000</span>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                      Rp 3.499<span className="text-lg text-zinc-500">.999</span>
                    </h2>
                  </div>

                  <hr className="border-zinc-200 dark:border-zinc-800 my-6" />

                  <ul className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm space-y-3 mb-8 font-semibold">
                    <li className="flex items-start gap-2.5 text-amber-600 dark:text-amber-400 font-bold">
                      <Zap size={16} className="shrink-0 mt-0.5" />
                      <span>{t("Sistem Manajemen Bisnis Kompleks (ERP / CRM / HRIS)", "Complex Business Management System (ERP / CRM / HRIS)")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Integrasi Multi-Cabang, Inventori & Multi-Gudang", "Multi-Branch, Inventory & Multi-Warehouse Integration")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Integrasi API Pihak Ketiga & Payment Gateway Otomatis", "Third-Party API Integration & Automatic Payment Gateway")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Optimasi Kinerja Database Tingkat Tinggi (Jutaan Data)", "High-Level Database Performance Optimization (Millions of Data)")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Desain Eksklusif Sesuai Kebutuhan Unik Alur Bisnis", "Exclusive Design According to Unique Business Workflow Needs")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Dukungan Teknis Prioritas & Maintenance selama 1 Tahun", "Priority Technical Support & Maintenance for 1 Year")}</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href={`${waLink}%20Web%20System%20Custom`} 
                  className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-lg hover:scale-[1.02]"
                >
                  {t("Mulai Buat Sekarang", "Get Started Now")}
                </a>
              </motion.div>
            </>
          )}

          {/* CUSTOM TAB */}
          {pricingTab === "custom" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative bg-white dark:bg-zinc-900 border-2 border-amber-400 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-amber-500/20 flex flex-col md:flex-row gap-8 items-center justify-between min-h-[300px] overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="text-left flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-wider">{t("Premium Service", "Premium Service")}</span>
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{t("Custom Project", "Custom Project")}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-zinc-900 dark:text-white leading-tight">
                  {t("Punya Sistem", "Have a")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                    {t("Unik & Spesifik?", "Unique & Specific System?")}
                  </span>
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base mb-6 max-w-xl font-medium leading-relaxed">
                  {t("Kami mengerti bahwa setiap bisnis memiliki keunikan. Jika Anda membutuhkan integrasi API khusus, aplikasi berskala Enterprise, atau sistem dengan alur kerja yang sangat spesifik, kami siap merancangnya dari nol khusus untuk Anda.", "We understand that every business is unique. If you need a custom API integration, an Enterprise-scale application, or a system with a very specific workflow, we are ready to design it from scratch specifically for you.")}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-semibold mb-6">
                  <li className="flex items-center gap-2.5"><Check size={16} className="text-emerald-500" /> {t("Desain Eksklusif Figma", "Exclusive Figma Design")}</li>
                  <li className="flex items-center gap-2.5"><Check size={16} className="text-emerald-500" /> {t("Skalabilitas Tinggi", "High Scalability")}</li>
                  <li className="flex items-center gap-2.5"><Check size={16} className="text-emerald-500" /> {t("Integrasi Pihak Ketiga (API)", "Third-Party Integration (API)")}</li>
                  <li className="flex items-center gap-2.5"><Check size={16} className="text-emerald-500" /> {t("Keamanan Enterprise", "Enterprise Security")}</li>
                </ul>
              </div>

              <div className="w-full md:w-auto shrink-0 relative z-10 flex flex-col items-center">
                <div className="mb-6 text-center">
                  <span className="text-sm font-bold text-zinc-400 block mb-1">{t("Mulai Dari", "Starting From")}</span>
                  <h2 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                    {t("Fleksibel", "Flexible")}
                  </h2>
                </div>
                <a 
                  href="https://wa.me/6285707185783?text=Halo%20Rafi,%20saya%20tertarik%20untuk%20diskusi%20lebih%20lanjut%20mengenai%20pembuatan%20Custom%20Project" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-4 rounded-2xl text-sm font-black transition-all shadow-lg hover:shadow-amber-500/25 hover:scale-[1.05]"
                >
                  {t("Konsultasi Custom via WA", "Custom Consultation via WA")}
                </a>
                <span className="text-[10px] text-zinc-500 mt-3 font-semibold">{t("*Konsultasi 100% Gratis", "*100% Free Consultation")}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
