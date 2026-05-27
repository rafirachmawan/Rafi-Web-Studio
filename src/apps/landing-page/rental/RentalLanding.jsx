import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rental } from "../../../data/rental";
import showroomHero from "./assets/showroom_hero.jpg";
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
  Car,
  Settings
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phone = rental.wa;
  const defaultMsg = encodeURIComponent("Halo UD Arya Motor, saya ingin info tentang motor bekas.");

  return (
    <div className="bg-[#0f0f0f] text-zinc-200 min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Settings className="text-black w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white uppercase">
              Arya<span className="text-sky-500">Motor</span>
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-zinc-400">
            <a href="#katalog" className="hover:text-sky-500 transition-colors uppercase">Katalog Motor</a>
            <a href="#layanan" className="hover:text-sky-500 transition-colors uppercase">Layanan</a>
            <a href="#testimoni" className="hover:text-sky-500 transition-colors uppercase">Testimoni</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={`https://wa.me/${phone}?text=${defaultMsg}`}
            className="hidden md:flex items-center gap-2 bg-sky-500 text-black px-6 py-2.5 rounded-full font-bold hover:bg-sky-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/25"
          >
            <MessageCircle className="w-4 h-4" />
            Hubungi Kami
          </motion.a>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-0 left-0 w-full bg-[#0f0f0f] z-40 flex flex-col pt-24 px-6 border-b border-white/5"
            >
              <div className="flex flex-col gap-6 text-xl font-bold uppercase">
                <a href="#katalog" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-sky-500 border-b border-white/5 pb-4">Katalog Motor</a>
                <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-sky-500 border-b border-white/5 pb-4">Layanan</a>
                <a href="#testimoni" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-sky-500 border-b border-white/5 pb-4">Testimoni</a>
                <a
                  href={`https://wa.me/${phone}?text=${defaultMsg}`}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-black px-5 py-4 rounded-xl font-black mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi Sekarang
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={FADE_UP}
              className="relative z-10"
            >
              <motion.div variants={FADE_DOWN} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-500 text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Unit Ready & Siap Pakai
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl md:text-6xl font-black mb-6 leading-[1.2] text-white tracking-tight">
                {rental.tagline.split(" di ")[0]} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                  Di Tulungagung
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed font-medium">
                {rental.vision}
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a
                  href="#katalog"
                  className="bg-sky-500 text-black px-8 py-4 rounded-xl font-black hover:bg-sky-400 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-sky-500/20"
                >
                  Lihat Katalog Motor
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${phone}`}
                  className="group bg-zinc-900/50 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all flex items-center gap-2"
                >
                  Tanya Harga Cash/Kredit
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-cyan-500/20 rounded-full blur-[100px]" />
              <img
                src={showroomHero}
                alt="Showroom UD Arya Motor"
                className="relative z-10 w-full max-w-[600px] object-cover rounded-3xl drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 border border-white/5"
              />
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-0 md:-right-10 bg-[#18181b]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 z-20 shadow-2xl"
              >
                <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center text-sky-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold">Garansi Mesin</p>
                  <p className="text-xs text-zinc-400">1 Bulan Penuh</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* STATS WIDGET */}
        <section className="px-6 relative z-20 -mt-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#18181b]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
              {rental.stats.map((s, i) => (
                <div key={i} className="px-4">
                  <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500 mb-2">{s.value}</h3>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* BENTO BENEFITS (LAYANAN) */}
        <section id="layanan" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">Kenapa Harus di <span className="text-sky-500">{rental.shortName}</span>?</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-medium">Kami menjamin kualitas setiap unit motor yang dijual dengan pengecekan ketat.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rental.services.map((srv, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-zinc-900 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-sky-500/50 transition-colors"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-[40px] group-hover:bg-sky-500/10 transition-colors duration-500" />
                  <div className="text-4xl mb-6 bg-zinc-800 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">{srv.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{srv.title}</h3>
                  <p className="text-zinc-400 font-medium">{srv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KATALOG SECTION */}
        <section id="katalog" className="py-24 px-6 relative z-10 bg-zinc-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">Katalog <span className="text-sky-500">Motor Ready</span></h2>
                <p className="text-zinc-400 text-lg font-medium">Temukan motor impian Anda. Kondisi istimewa, harga bersahabat.</p>
              </div>
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {rental.inventory.map((motor) => {
                  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(`Halo ${rental.shortName}, saya tertarik dengan motor ${motor.name} tahun ${motor.year}. Apakah masih ready?`)}`;

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      key={motor.id}
                      className="group bg-zinc-900 border border-white/5 hover:border-sky-500/50 rounded-3xl overflow-hidden transition-all duration-500 flex flex-col"
                    >
                      <div className="relative h-64 overflow-hidden bg-black">
                        <img
                          src={motor.image}
                          alt={motor.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />
                        <div className="absolute top-4 left-4 bg-sky-500 text-black text-xs px-3 py-1.5 rounded-full font-black uppercase tracking-wider flex items-center gap-1.5">
                          Tahun {motor.year}
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-2xl font-black text-white mb-2 group-hover:text-sky-500 transition-colors">{motor.name}</h3>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">{motor.price}</span>
                          </div>
                          <p className="text-emerald-400 text-sm font-bold mt-1">DP {motor.dp}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8 mt-2">
                          {motor.specs.map((spec, i) => (
                            <span key={i} className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-md font-medium border border-white/5">
                              {spec}
                            </span>
                          ))}
                        </div>

                        <a
                          href={wa}
                          className="mt-auto block w-full text-center bg-zinc-800 hover:bg-sky-500 text-white hover:text-black border border-white/5 hover:border-transparent py-3.5 rounded-xl font-bold transition-all duration-300"
                        >
                          Tanya Unit Ini
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">Galeri <span className="text-sky-500">Showroom</span></h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {rental.gallery.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden aspect-video border border-white/5 bg-zinc-900"
                >
                  <img src={img} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100" alt="Showroom" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800'; }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimoni" className="py-24 px-6 relative overflow-hidden bg-zinc-900/50 border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-600/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">Kata <span className="text-sky-500">Pelanggan</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {rental.testimonials.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="relative p-8 rounded-3xl border transition-all duration-300 bg-zinc-900 border-white/5 hover:border-sky-500/30"
                >
                  <div className="flex gap-1 text-sky-500 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-zinc-300 mb-8 text-lg font-medium leading-relaxed">"{item.text}"</p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-sky-500 font-bold text-xl">
                      {item.author[0]}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{item.author}</h4>
                      <p className="text-sm text-zinc-500">{item.role} · {item.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-black" />
            
            <div className="relative z-10 py-16 px-8 md:px-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Cari Motor Bekas?</h2>
                <p className="text-zinc-400 text-lg max-w-lg font-medium">Datang langsung to showroom kami atau hubungi via WhatsApp untuk cek stok terbaru.</p>
              </div>
              
              <a
                href={`https://wa.me/${phone}`}
                className="whitespace-nowrap bg-sky-500 text-black px-8 py-4 rounded-xl font-black text-lg hover:bg-sky-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-sky-500/20"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#0f0f0f] border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                <Settings className="text-black w-5 h-5" />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Arya<span className="text-sky-500">Motor</span></h2>
            </div>
            <p className="text-zinc-400 max-w-md font-medium leading-relaxed mb-8">
              {rental.tagline}. Solusi kendaraan impian dengan harga terbaik dan terpercaya.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase">Menu</h3>
            <ul className="space-y-4 text-zinc-400 font-medium">
              <li><a href="#katalog" className="hover:text-sky-500 transition-colors">Katalog Motor</a></li>
              <li><a href="#layanan" className="hover:text-sky-500 transition-colors">Layanan Kami</a></li>
              <li><a href="#testimoni" className="hover:text-sky-500 transition-colors">Testimoni</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase">Kontak</h3>
            <ul className="space-y-4 text-zinc-400 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>{rental.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-sky-500 shrink-0" />
                <span>{rental.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600 font-medium relative z-10">
          <p>© {new Date().getFullYear()} {rental.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
