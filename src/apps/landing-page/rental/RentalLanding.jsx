import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rental } from "../../../data/rental";
import {
  MapPin,
  Calendar,
  Search,
  CheckCircle2,
  Star,
  ChevronDown,
  ShieldCheck,
  Zap,
  Clock,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Wrench,
  CreditCard,
  UserCheck,
  BookOpen,
  Award,
  ExternalLink
} from "lucide-react";

const FADE_DOWN = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
};

export default function RentalLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phone = rental.wa;
  const defaultMsg = encodeURIComponent("Halo Yamaha Indonesia, saya membutuhkan informasi bantuan produk/layanan.");

  const categories = [
    { id: "all", name: "Semua Kategori" },
    { id: "MAXi", name: "MAXi" },
    { id: "Classy", name: "Classy" },
    { id: "Matic", name: "Matic" },
    { id: "Sport", name: "Sport" },
    { id: "Off-Road", name: "Off-Road" },
    { id: "Moped", name: "Moped" },
  ];

  const filteredInventory = activeCategory === "all"
    ? rental.inventory
    : rental.inventory.filter(item => item.name.includes(activeCategory) || item.specs.some(s => s.toLowerCase().includes(activeCategory.toLowerCase())));

  return (
    <div className="bg-[#0b0b0e] text-zinc-200 min-h-screen font-sans selection:bg-red-500/30 overflow-x-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#0b0b0e]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" 
            : "bg-[#0b0b0e]/80 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* BRAND LOGO */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3.5"
          >
            <img 
              src={rental.logo} 
              alt="Yamaha Logo" 
              className="h-9 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1 leading-none">
                <span className="text-lg font-black tracking-tight text-white uppercase">YAMAHA</span>
                <span className="text-lg font-black tracking-tight text-red-500 uppercase">MOTOR</span>
              </div>
              <span className="text-[9px] text-zinc-400 font-extrabold tracking-widest uppercase mt-0.5">INDONESIA (YIMM)</span>
            </div>
          </motion.div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-1 bg-zinc-900/90 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-lg shadow-inner">
            <a href="#katalog" className="text-zinc-300 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all">Products</a>
            <a href="#layanan" className="text-zinc-300 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all">Services & Booking</a>
            <a href="#dealer" className="text-zinc-300 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all">Find Dealer</a>
            <a href="#layanan" className="text-zinc-300 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all">Members</a>
            <a href="#layanan" className="text-zinc-300 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all">Racing & News</a>
          </div>

          {/* ACTION BUTTON */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={`https://wa.me/${phone}?text=${defaultMsg}`}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:shadow-red-600/40 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-red-600/25 border border-red-400/30"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            Dapatkan Bantuan
          </motion.a>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-zinc-300 hover:text-white relative z-50 p-2 rounded-xl bg-zinc-900 border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-0 left-0 w-full bg-[#0b0b0e]/98 backdrop-blur-2xl z-40 flex flex-col pt-24 px-6 border-b border-white/10"
            >
              <div className="flex flex-col gap-4 text-base font-bold uppercase">
                <a href="#katalog" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 border-b border-white/5 pb-3 flex justify-between items-center">
                  Products Category <ChevronRight className="w-4 h-4 text-zinc-600" />
                </a>
                <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 border-b border-white/5 pb-3 flex justify-between items-center">
                  Services & Booking <ChevronRight className="w-4 h-4 text-zinc-600" />
                </a>
                <a href="#dealer" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 border-b border-white/5 pb-3 flex justify-between items-center">
                  Find Dealer <ChevronRight className="w-4 h-4 text-zinc-600" />
                </a>
                <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 border-b border-white/5 pb-3 flex justify-between items-center">
                  My Yamaha Members <ChevronRight className="w-4 h-4 text-zinc-600" />
                </a>
                <a
                  href={`https://wa.me/${phone}?text=${defaultMsg}`}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-4 rounded-2xl font-black text-sm uppercase tracking-wider mt-4 shadow-xl shadow-red-600/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Dapatkan Bantuan (WhatsApp)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={FADE_UP}
              className="lg:col-span-7 relative z-10"
            >
              <motion.div variants={FADE_DOWN} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Official Website PT Yamaha Indonesia Motor Manufacturing
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-[1.15] text-white tracking-tight">
                Revs Your Heart — <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">
                  Portal Resmi Yamaha
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-base sm:text-lg text-zinc-300 mb-10 max-w-xl leading-relaxed font-medium">
                Pusat informasi terpadu produk sepeda motor Yamaha, layanan purna jual, booking servis berkala, simulasi kredit, lokasi dealer resmi, hingga informasi komunitas & racing bLU cRU.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a
                  href="#katalog"
                  className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl font-extrabold hover:from-red-500 hover:to-red-400 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl shadow-red-600/25"
                >
                  Katalog Motor
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="#layanan"
                  className="group bg-zinc-900/80 border border-white/15 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all flex items-center gap-2"
                >
                  Booking Servis & Dealer
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-blue-600/20 rounded-full blur-[100px]" />
              <img
                src={rental.heroImage}
                alt="Yamaha Motor Indonesia"
                className="relative z-10 w-full max-w-[550px] object-cover rounded-3xl drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 border border-white/10"
              />
              
              {/* Floating Badge 1 */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-2 md:-right-6 bg-[#141419]/90 backdrop-blur-xl border border-white/15 p-4 rounded-2xl flex items-center gap-3 z-20 shadow-2xl"
              >
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-xs">My Yamaha Motor</p>
                  <p className="text-[10px] text-zinc-400 font-medium">Members Access</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-2 md:-left-6 bg-[#141419]/90 backdrop-blur-xl border border-white/15 p-4 rounded-2xl flex items-center gap-3 z-20 shadow-2xl"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-xs">Service Booking</p>
                  <p className="text-[10px] text-zinc-400 font-medium">Online 24/7</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* STATS WIDGET */}
        <section className="px-6 relative z-20 -mt-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#141419]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/5 text-center">
              {rental.stats.map((s, i) => (
                <div key={i} className="px-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400 mb-1">{s.value}</h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FITUR & LAYANAN UTAMA (yamaha.md) */}
        <section id="layanan" className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">Fitur & Layanan Utama</span>
              <h2 className="text-3xl md:text-5xl font-black mt-4 mb-4 uppercase tracking-tight">Solusi Digital <span className="text-red-500">Yamaha</span></h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-medium">Kemudahan akses transaksi, perawatan kendaraan, hingga layanan purna jual resmi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rental.services.map((srv, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-[#141419] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-red-500/50 transition-colors"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px] group-hover:bg-red-500/10 transition-colors duration-500" />
                  <div className="text-3xl mb-6 bg-zinc-900 border border-white/5 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">{srv.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{srv.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">{srv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KATALOG SECTION (6 CATEGORIES) */}
        <section id="katalog" className="py-24 px-6 relative z-10 bg-zinc-900/40 border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">Katalog Produk</span>
              <h2 className="text-3xl md:text-5xl font-black mt-4 mb-4 uppercase tracking-tight">Kategori <span className="text-red-500">Motor Yamaha</span></h2>
              <p className="text-zinc-400 text-base sm:text-lg font-medium max-w-2xl mx-auto">Jelajahi 6 kategori utama motor Yamaha: MAXi, Classy, Matic, Sport, Off-Road, dan Moped.</p>
            </div>

            {/* CATEGORY TABS */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                      : "bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredInventory.map((motor) => {
                  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(`Halo Yamaha Motor, saya ingin konsultasi & info detail mengenai produk ${motor.name}.`)}`;

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      key={motor.id}
                      className="group bg-[#141419] border border-white/10 hover:border-red-500/50 rounded-3xl overflow-hidden transition-all duration-500 flex flex-col shadow-lg"
                    >
                      <div className="relative h-60 overflow-hidden bg-black flex items-center justify-center p-4">
                        <img
                          src={motor.image}
                          alt={motor.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                          onError={(e) => { e.target.src = rental.heroImage; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141419] via-transparent to-transparent opacity-90" />
                        <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-wider">
                          Official Lineup 2026
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-xl font-black text-white mb-2 group-hover:text-red-500 transition-colors">{motor.name}</h3>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">{motor.price}</span>
                          </div>
                          <p className="text-zinc-400 text-xs font-semibold mt-1 flex items-center gap-1">
                            <CreditCard className="w-3.5 h-3.5 text-red-500" /> {motor.dp}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-6 mt-2">
                          {motor.specs.map((spec, i) => (
                            <span key={i} className="bg-zinc-800/90 text-zinc-300 text-[11px] px-2.5 py-1 rounded-md font-medium border border-white/5">
                              {spec}
                            </span>
                          ))}
                        </div>

                        <a
                          href={wa}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto block w-full text-center bg-zinc-800 hover:bg-red-600 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-red-600/20"
                        >
                          Konsultasi Produk
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* DEALERS & SERVICE SECTION */}
        <section id="dealer" className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-zinc-900 via-[#141419] to-zinc-900 rounded-3xl border border-white/10 p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-red-500 text-xs font-bold uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">Find Dealer & Service</span>
                <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-4 uppercase tracking-tight">Temukan Dealer & Servis Resmi</h2>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                  Cari jaringan dealer resmi Yamaha terdekat di kota Anda. Booking jadwal servis secara online melalui fitur **Service Booking** atau aplikasi **My Yamaha Motor**.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent("Halo Yamaha, saya mau tanya lokasi dealer & booking servis terdekat.")}`}
                    className="bg-red-600 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-500 transition-all shadow-lg shadow-red-600/25 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" /> Cari Dealer Terdekat
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-zinc-800/50 p-5 rounded-2xl border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Service Booking</h4>
                    <p className="text-xs text-zinc-400 mt-1">Pilih jadwal servis sesuai keinginan Anda tanpa mengantre lama di bengkel resmi.</p>
                  </div>
                </div>
                <div className="bg-zinc-800/50 p-5 rounded-2xl border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Yamaha Genuine Parts (YGP) & Yamalube</h4>
                    <p className="text-xs text-zinc-400 mt-1">Jaminan 100% suku cadang asli dan oli pelumas resmi rekomendasi pabrikan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA (WHATSAPP HELP) */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-red-500/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-zinc-900 to-black" />
            
            <div className="relative z-10 py-12 px-8 sm:px-14 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-white mb-2 uppercase tracking-tight">Dapatkan Bantuan Langsung</h2>
                <p className="text-zinc-300 text-sm max-w-md font-medium">Tim customer care Yamaha siap membantu pertanyaan produk, simulasi kredit, dan booking servis via WhatsApp.</p>
              </div>
              
              <a
                href={`https://wa.me/${phone}?text=${defaultMsg}`}
                className="whitespace-nowrap bg-red-600 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-red-500 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/30 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Chat WhatsApp Help
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER (yamaha.md) */}
      <footer className="bg-[#08080a] border-t border-white/10 pt-16 pb-10 px-6 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img 
                src={rental.logo} 
                alt="Yamaha Logo" 
                className="h-8 w-auto bg-white p-1 rounded-md"
              />
              <h2 className="text-xl font-black text-white uppercase tracking-tight">Yamaha<span className="text-red-500">Motor</span></h2>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md mb-6 font-medium">
              Website resmi PT Yamaha Indonesia Motor Manufacturing (YIMM). Portal terpadu katalog produk, layanan purna jual, booking servis, simulasi kredit, hingga informasi balap & komunitas.
            </p>
            <div className="text-xs text-zinc-500 space-y-1 font-medium">
              <p>📍 {rental.address}</p>
              <p>📞 {rental.phone} | ✉️ {rental.email}</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Menu Navigasi</h3>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li><a href="#katalog" className="hover:text-red-500 transition-colors">Products (MAXi, Classy, Matic, Sport, Off-Road, Moped)</a></li>
              <li><a href="#layanan" className="hover:text-red-500 transition-colors">Service Booking & Find Dealer</a></li>
              <li><a href="#layanan" className="hover:text-red-500 transition-colors">Credit Simulation</a></li>
              <li><a href="#members" className="hover:text-red-500 transition-colors">My Yamaha Motor Members</a></li>
              <li><a href="#racing" className="hover:text-red-500 transition-colors">Racing & bLU cRU Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Help & Support</h3>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li><a href={`https://wa.me/${phone}`} className="hover:text-red-500 transition-colors">WhatsApp Help Center</a></li>
              <li><a href="#layanan" className="hover:text-red-500 transition-colors">Owners Manual Online</a></li>
              <li><a href="#layanan" className="hover:text-red-500 transition-colors">Yamaha Genuine Parts (YGP)</a></li>
              <li><a href="#layanan" className="hover:text-red-500 transition-colors">Yamalube Lubricants</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium relative z-10">
          <p>© {new Date().getFullYear()} PT Yamaha Indonesia Motor Manufacturing (YIMM). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

