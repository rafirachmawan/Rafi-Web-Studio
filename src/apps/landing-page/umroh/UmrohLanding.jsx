import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Star,
  ShieldCheck,
  Plane,
  HeartHandshake,
  Menu,
  X,
  ArrowRight,
  Phone,
  Clock,
  CheckCircle2
} from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function UmrohLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phone = "628123456789";
  const message = "Assalamu'alaikum, saya tertarik dengan program umroh dari Al-Amanah.";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const packages = [
    {
      name: "Paket Hemat",
      price: "Rp 25.000.000",
      duration: "9 Hari",
      hotelMakkah: "Bintang 3 (± 500m)",
      hotelMadinah: "Bintang 3 (± 300m)",
      flight: "Direct Flight Jakarta",
      highlight: false
    },
    {
      name: "Paket Reguler",
      price: "Rp 30.000.000",
      duration: "10 Hari",
      hotelMakkah: "Bintang 4 (± 300m)",
      hotelMadinah: "Bintang 4 (± 150m)",
      flight: "Saudia Airlines Direct",
      highlight: true
    },
    {
      name: "Paket VIP Eksklusif",
      price: "Rp 40.000.000",
      duration: "12 Hari",
      hotelMakkah: "Bintang 5 (Zamzam Tower)",
      hotelMadinah: "Bintang 5 (Pelataran)",
      flight: "Saudia Airlines Business",
      highlight: false
    },
  ];

  return (
    <div className="bg-[#fdfbf7] text-stone-900 min-h-screen font-sans selection:bg-emerald-200 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#fdfbf7]/90 backdrop-blur-xl border-b border-emerald-900/10 py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-amber-400 shadow-lg shadow-emerald-900/20">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h1 className={`text-2xl font-black tracking-tight ${isScrolled ? 'text-emerald-950' : 'text-white md:text-emerald-950'}`}>
              Al-Amanah <span className="text-amber-500">Travel</span>
            </h1>
          </motion.div>

          <div className={`hidden md:flex items-center gap-8 text-sm font-bold ${isScrolled ? 'text-stone-600' : 'text-stone-600'}`}>
            <a href="#keunggulan" className="hover:text-emerald-700 transition-colors">Keunggulan</a>
            <a href="#paket" className="hover:text-emerald-700 transition-colors">Paket Umroh</a>
            <a href="#galeri" className="hover:text-emerald-700 transition-colors">Galeri</a>
            <a href="#testimoni" className="hover:text-emerald-700 transition-colors">Testimoni</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={waLink}
            className="hidden md:flex items-center gap-2 bg-emerald-800 text-amber-400 px-6 py-2.5 rounded-full font-bold hover:bg-emerald-900 hover:shadow-lg hover:shadow-emerald-900/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Konsultasi Gratis
          </motion.a>

          {/* MOBILE TOGGLE */}
          <button 
            className={`md:hidden relative z-50 ${isScrolled ? 'text-emerald-950' : 'text-emerald-950'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-0 left-0 w-full bg-[#fdfbf7] flex flex-col pt-24 px-6 z-40 border-b border-stone-200"
            >
              <div className="flex flex-col gap-6 text-xl font-bold text-center">
                <a href="#keunggulan" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-emerald-700 pb-4 border-b border-stone-100">Keunggulan Kami</a>
                <a href="#paket" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-emerald-700 pb-4 border-b border-stone-100">Paket Umroh</a>
                <a href="#testimoni" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-emerald-700 pb-4 border-b border-stone-100">Testimoni Jamaah</a>
                <a
                  href={waLink}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-800 text-amber-400 px-5 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-emerald-900/20"
                >
                  <Phone className="w-5 h-5" /> Hubungi Kami
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center px-6 pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1565552643952-b50458b2bd49?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover"
              alt="Makkah Kaaba"
            />
            {/* Elegant overlay: dark emerald gradient fade to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-2xl"
            >
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-amber-400 text-sm font-bold mb-6 backdrop-blur-md">
                <Star className="w-4 h-4 fill-current" />
                Terakreditasi A Kemenag RI
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white tracking-tight">
                Menuju Baitullah <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                  Dengan Penuh Berkah
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-stone-200 mb-10 max-w-lg leading-relaxed font-medium">
                Nikmati kenyamanan dan kekhusyukan ibadah Umroh bersama pembimbing berpengalaman, fasilitas premium, dan pelayanan sepenuh hati.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a
                  href="#paket"
                  className="bg-amber-500 text-emerald-950 px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  Lihat Jadwal & Paket
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={waLink}
                  className="bg-emerald-800/80 backdrop-blur-md border border-emerald-500/30 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Konsultasi Gratis
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section id="keunggulan" className="py-24 px-6 relative z-20 bg-[#fdfbf7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm text-emerald-700 font-black tracking-widest uppercase mb-3">Kenapa Memilih Kami</h2>
              <h3 className="text-4xl md:text-5xl font-black text-emerald-950">Pelayanan Jamaah Terbaik</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Terpercaya & Berizin Resmi", desc: "Perusahaan kami terdaftar resmi di Kemenag RI, menjamin keamanan dan kenyamanan perjalanan ibadah Anda." },
                { icon: HeartHandshake, title: "Pembimbing Profesional", desc: "Didampingi oleh muthawif bersertifikat dan berpengalaman yang akan membimbing ibadah sesuai sunnah." },
                { icon: Plane, title: "Penerbangan Direct", desc: "Menggunakan maskapai penerbangan terbaik dengan rute direct (langsung) untuk kenyamanan maksimal." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white p-10 rounded-[2rem] border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 text-emerald-700">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-emerald-950 mb-4">{item.title}</h4>
                  <p className="text-stone-500 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="paket" className="py-24 px-6 bg-stone-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm text-emerald-700 font-black tracking-widest uppercase mb-3">Pilihan Program</h2>
              <h3 className="text-4xl md:text-5xl font-black text-emerald-950 mb-6">Paket Umroh 2026</h3>
              <p className="text-stone-500 max-w-2xl mx-auto font-medium">Kami menyediakan berbagai pilihan paket yang disesuaikan dengan kebutuhan dan kenyamanan ibadah Anda bersama keluarga.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {packages.map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white rounded-[2rem] p-8 border ${pkg.highlight ? 'border-amber-400 shadow-[0_20px_50px_rgba(217,119,6,0.15)] md:-translate-y-4' : 'border-stone-100 shadow-lg shadow-stone-200/50'} relative overflow-hidden`}
                >
                  {pkg.highlight && (
                    <div className="absolute top-6 right-6 bg-amber-100 text-amber-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      Terfavorit
                    </div>
                  )}

                  <h4 className="text-2xl font-black text-emerald-950 mb-2">{pkg.name}</h4>
                  <div className="text-4xl font-black text-emerald-800 mb-8">{pkg.price}</div>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                      <span className="text-stone-600 font-medium">Program {pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                      <span className="text-stone-600 font-medium">Makkah: {pkg.hotelMakkah}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                      <span className="text-stone-600 font-medium">Madinah: {pkg.hotelMadinah}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Plane className="w-5 h-5 text-amber-500 shrink-0" />
                      <span className="text-stone-600 font-medium">{pkg.flight}</span>
                    </div>
                  </div>

                  <a
                    href={waLink}
                    className={`block w-full text-center py-4 rounded-xl font-bold transition-colors ${
                      pkg.highlight 
                        ? 'bg-amber-500 hover:bg-amber-400 text-emerald-950' 
                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    Pilih Paket Ini
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITY / EXPERIENCE */}
        <section id="galeri" className="py-24 px-6 bg-[#fdfbf7]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1591604122718-fd406892258b?auto=format&fit=crop&q=80&w=800" 
                  alt="Madinah Mosque" 
                  className="rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-emerald-800 text-white p-8 rounded-[2rem] shadow-xl max-w-xs border border-emerald-700/50 hidden md:block">
                  <Star className="w-8 h-8 text-amber-400 mb-4 fill-current" />
                  <p className="font-bold text-lg leading-snug">"Pengalaman spiritual yang tak terlupakan dengan layanan yang sangat memuaskan."</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-sm text-emerald-700 font-black tracking-widest uppercase mb-3">Fasilitas Ekstra</h2>
              <h3 className="text-4xl md:text-5xl font-black text-emerald-950 mb-6 leading-tight">Fokus Beribadah, Biar Kami yang Mengurus Sisanya</h3>
              <p className="text-stone-500 text-lg mb-8 leading-relaxed font-medium">Setiap jamaah akan mendapatkan fasilitas komprehensif mulai dari keberangkatan hingga kepulangan.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Perlengkapan Umroh Premium",
                  "Makan 3x Sehari (Menu Indonesia)",
                  "Ziarah Kota Makkah & Madinah",
                  "Air Zamzam 5 Liter",
                  "Handling Bandara & Asuransi",
                  "Muthawif Berpengalaman"
                ].map((fasilitas, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span className="text-stone-700 font-bold">{fasilitas}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-950" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565552643952-b50458b2bd49')] mix-blend-overlay opacity-5 bg-cover bg-center" />
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Wujudkan Niat Suci Anda Tahun Ini</h2>
            <p className="text-emerald-100/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">Jangan tunda panggilan ke Baitullah. Konsultasikan rencana perjalanan ibadah Anda bersama tim kami sekarang juga.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 text-emerald-950 px-10 py-5 rounded-full font-black text-lg hover:bg-amber-400 hover:scale-105 transition-all shadow-xl shadow-amber-500/20"
              >
                <Phone className="w-6 h-6" /> Hubungi Sekarang
              </a>
              <a
                href="#paket"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all"
              >
                Lihat Jadwal
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-emerald-950 border-t border-emerald-900 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-amber-500 w-6 h-6 fill-current" />
              <span className="text-2xl font-black text-white">Al-Amanah</span>
            </div>
            <p className="text-emerald-200/60 font-medium leading-relaxed max-w-xs">Melayani perjalanan ibadah Umroh dan Haji Plus dengan amanah, nyaman, dan sesuai sunnah.</p>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-4 uppercase tracking-wider text-sm">Informasi</h4>
            <div className="flex flex-col gap-3 text-emerald-200/60 font-medium">
              <a href="#keunggulan" className="hover:text-amber-400 transition-colors">Tentang Kami</a>
              <a href="#paket" className="hover:text-amber-400 transition-colors">Paket Umroh</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-amber-400 transition-colors">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-4 uppercase tracking-wider text-sm">Hubungi Kami</h4>
            <div className="flex flex-col gap-4 text-emerald-200/60 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Gedung Al-Amanah, Jl. Mampang Prapatan No. 12, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>+62 812 3456 7890</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-emerald-500 font-medium text-sm pt-8 border-t border-emerald-900/50">
          © {new Date().getFullYear()} Al-Amanah Travel. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
