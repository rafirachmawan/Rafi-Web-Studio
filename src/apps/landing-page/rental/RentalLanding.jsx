import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Car
} from "lucide-react";

import mobilImg from "./assets/RentalMobil2.png";
import mobil1 from "./assets/mobil1.png";

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

  const phone = "628123456789";
  const defaultMsg = encodeURIComponent("Halo, saya ingin sewa mobil. Mohon info lebih lanjut.");

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Car className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Rental<span className="text-indigo-400">Jaya</span>
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#mobil" className="hover:text-white transition-colors">Armada</a>
            <a href="#benefit" className="hover:text-white transition-colors">Keunggulan</a>
            <a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={`https://wa.me/${phone}?text=${defaultMsg}`}
            className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-full font-semibold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            Booking
          </motion.a>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-slate-300 hover:text-white relative z-50"
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
              className="md:hidden absolute top-0 left-0 w-full bg-[#030712] z-40 flex flex-col pt-24 px-6"
            >
              <div className="flex flex-col gap-6 text-xl font-medium">
                <a href="#mobil" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white border-b border-white/5 pb-4">Armada</a>
                <a href="#benefit" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white border-b border-white/5 pb-4">Keunggulan</a>
                <a href="#testimoni" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white border-b border-white/5 pb-4">Testimoni</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white border-b border-white/5 pb-4">FAQ</a>
                <a
                  href={`https://wa.me/${phone}?text=${defaultMsg}`}
                  className="flex items-center justify-center gap-2 bg-indigo-500 text-white px-5 py-4 rounded-xl font-semibold mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Booking Sekarang
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
              <motion.div variants={FADE_DOWN} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Tersedia untuk disewa hari ini
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] text-white">
                Perjalanan <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">
                  Tanpa Batas
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                Nikmati kebebasan berkendara dengan koleksi mobil premium kami. Proses cepat, harga transparan, dan jaminan kualitas terbaik.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a
                  href="#mobil"
                  className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  Jelajahi Armada
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${phone}`}
                  className="group bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Tanya Admin
                </a>
              </motion.div>

              <motion.div variants={FADE_UP} className="mt-12 flex items-center gap-8 text-sm text-slate-400">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://randomuser.me/api/portraits/women/${40+i}.jpg`} className="w-10 h-10 rounded-full border-2 border-[#030712]" alt="User" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#030712] bg-indigo-500 flex items-center justify-center text-white font-bold text-xs z-10">
                    +2k
                  </div>
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p>Dipercaya oleh 2,000+ pelanggan</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 rounded-full blur-[100px]" />
              <img
                src={mobilImg}
                alt="Luxury Car"
                className="relative z-10 w-full max-w-[600px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-0 md:-right-10 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 z-20 shadow-2xl hidden md:flex"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold">Asuransi Penuh</p>
                  <p className="text-xs text-slate-400">Perjalanan aman</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* QUICK SEARCH WIDGET */}
        <section className="px-6 relative z-20 -mt-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#0f172a]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 shadow-2xl shadow-black/50"
          >
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 bg-white/5 rounded-2xl p-4 flex items-center gap-3 border border-transparent hover:border-white/10 transition-colors">
                <MapPin className="text-indigo-400 w-5 h-5" />
                <div className="flex-1">
                  <p className="text-xs text-slate-400 mb-1">Lokasi Jemput</p>
                  <input type="text" placeholder="Masukkan lokasi" className="bg-transparent w-full text-white outline-none placeholder:text-slate-500 font-medium" />
                </div>
              </div>
              <div className="w-px bg-white/10 hidden md:block my-4" />
              <div className="flex-1 bg-white/5 rounded-2xl p-4 flex items-center gap-3 border border-transparent hover:border-white/10 transition-colors">
                <Calendar className="text-indigo-400 w-5 h-5" />
                <div className="flex-1">
                  <p className="text-xs text-slate-400 mb-1">Tanggal Mulai</p>
                  <input type="date" className="bg-transparent w-full text-white outline-none font-medium [color-scheme:dark]" />
                </div>
              </div>
              <div className="w-px bg-white/10 hidden md:block my-4" />
              <div className="flex-1 bg-white/5 rounded-2xl p-4 flex items-center gap-3 border border-transparent hover:border-white/10 transition-colors">
                <Calendar className="text-indigo-400 w-5 h-5" />
                <div className="flex-1">
                  <p className="text-xs text-slate-400 mb-1">Tanggal Kembali</p>
                  <input type="date" className="bg-transparent w-full text-white outline-none font-medium [color-scheme:dark]" />
                </div>
              </div>
              
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl px-8 py-4 flex items-center justify-center gap-2 font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-indigo-500/25">
                <Search className="w-5 h-5" />
                <span>Cari</span>
              </button>
            </div>
          </motion.div>
        </section>

        {/* BENTO BENEFITS */}
        <section id="benefit" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Mengapa Memilih <span className="text-indigo-400">Kami</span>?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Kombinasi sempurna antara kenyamanan, keamanan, dan gaya untuk perjalanan Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-gradient-to-br from-[#0f172a] to-[#0a0f1a] border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-colors duration-500" />
                <Zap className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">Proses Booking Kilat</h3>
                <p className="text-slate-400 max-w-md text-lg">Hanya butuh 3 menit dari memilih mobil hingga konfirmasi. Tanpa dokumen rumit, langsung jalan.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#0f172a] to-[#0a0f1a] border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-[50px] group-hover:bg-fuchsia-500/20 transition-colors duration-500" />
                <ShieldCheck className="w-12 h-12 text-fuchsia-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Kondisi Prima</h3>
                <p className="text-slate-400">Setiap armada melalui 50+ titik inspeksi sebelum diserahkan ke Anda.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#0f172a] to-[#0a0f1a] border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-colors duration-500" />
                <Clock className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Layanan 24/7</h3>
                <p className="text-slate-400">Tim kami siap membantu Anda kapanpun, dimanapun.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-[#0f172a] border border-white/5 rounded-3xl p-0 relative overflow-hidden group flex flex-col md:flex-row items-center"
              >
                <div className="p-8 flex-1 z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">Transparan Tanpa Biaya Tersembunyi</h3>
                  <p className="text-slate-400 text-lg mb-6">Harga yang Anda lihat adalah harga yang Anda bayar. Termasuk asuransi dasar dan pajak.</p>
                  <ul className="space-y-3">
                    {["Gratis antar-jemput bandara", "Batal gratis H-1", "Harga final"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 h-full min-h-[250px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[#0f172a] z-10" />
                  <img src={mobil1} alt="Car Detail" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FLEET SECTION */}
        <RentalSection />

        {/* TESTIMONIALS */}
        <section id="testimoni" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Pengalaman <span className="text-indigo-400">Mereka</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Ratusan pelanggan telah membuktikan kualitas layanan kami.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Andi Pratama",
                  role: "Pengusaha",
                  text: "Sangat impresif! Mobil dikirim tepat waktu ke bandara, kondisi sangat bersih seperti baru keluar dealer. Proses pengembalian juga sangat mudah.",
                  img: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "Siti Rahma",
                  role: "Traveler",
                  text: "Liburan keluarga di Bali jadi super nyaman. Hiace yang kami sewa sangat lega dan supir yang disediakan (Pak Budi) sangat ramah & tau tempat bagus.",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                  featured: true
                },
                {
                  name: "Budi Santoso",
                  role: "Eksekutif",
                  text: "Sering dinas luar kota dan RentalJaya selalu jadi pilihan pertama. Respon admin WA super cepat, sangat bisa diandalkan untuk urusan mendadak.",
                  img: "https://randomuser.me/api/portraits/men/65.jpg",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                    item.featured
                      ? "bg-gradient-to-b from-indigo-900/50 to-[#0f172a] border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                      : "bg-[#0f172a]/50 border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-300 mb-8 text-lg leading-relaxed">"{item.text}"</p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full ring-2 ring-indigo-500/30" />
                    <div>
                      <h4 className="text-white font-bold">{item.name}</h4>
                      <p className="text-sm text-slate-400">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-6 relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Pertanyaan <span className="text-indigo-400">Umum</span></h2>
            </div>

            <div className="space-y-4">
              <FAQItem
                question="Apa saja syarat untuk sewa lepas kunci?"
                answer="Untuk WNI: E-KTP asli, SIM A/C yang masih berlaku, dan jaminan (bisa berupa motor+STNK atau deposit dana). Untuk WNA: Paspor, KITAS (jika ada), dan SIM Internasional."
              />
              <FAQItem
                question="Apakah harga sewa sudah termasuk bensin dan tol?"
                answer="Harga yang tertera adalah untuk unit mobil saja (dan supir jika memilih paket with driver). Bensin, tol, parkir, dan tiket masuk wisata menjadi tanggungan penyewa."
              />
              <FAQItem
                question="Bisa antar jemput ke Bandara/Stasiun?"
                answer="Sangat bisa! Kami menyediakan layanan antar-jemput gratis untuk area dalam kota dan bandara terdekat selama jam kerja (06:00 - 22:00)."
              />
              <FAQItem
                question="Bagaimana jika terjadi kerusakan atau kecelakaan?"
                answer="Semua unit kami dilindungi asuransi all-risk. Namun, ada biaya own-risk/klaim asuransi maksimal Rp 300.000 - Rp 500.000 per titik kerusakan."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d')] opacity-10 bg-cover bg-center mix-blend-overlay" />
            
            <div className="relative z-10 py-16 px-8 md:px-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Siap untuk Perjalanan Anda?</h2>
                <p className="text-indigo-100 text-lg max-w-lg">Booking sekarang dan dapatkan diskon 10% untuk penyewaan pertama Anda via WhatsApp.</p>
              </div>
              
              <a
                href={`https://wa.me/${phone}`}
                className="whitespace-nowrap bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
              >
                Booking Sekarang
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#030712] border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Car className="text-white w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Rental<span className="text-indigo-400">Jaya</span></h2>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Penyedia layanan sewa mobil premium terpercaya. Kami berkomitmen memberikan pengalaman berkendara terbaik dengan armada terawat dan layanan profesional.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500 hover:border-transparent transition-all">
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Layanan</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Sewa Lepas Kunci</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Sewa dengan Supir</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Antar Jemput Bandara</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Sewa Mobil Pengantin</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Kontak</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Jl. Sudirman No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>+62 812-3456-789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 relative z-10">
          <p>© {new Date().getFullYear()} RentalJaya. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ========================= */
/* 🚗 FLEET SECTION */
/* ========================= */

function RentalSection() {
  const phone = "628123456789";
  const [activeCategory, setActiveCategory] = useState("semua");

  const categories = [
    { id: "semua", label: "Semua Armada" },
    { id: "city", label: "City Car" },
    { id: "mpv", label: "MPV Keluarga" },
    { id: "suv", label: "SUV Premium" },
    { id: "luxury", label: "Luxury & Sport" },
  ];

  const cars = [
    {
      name: "Honda Brio RS",
      price: "350.000",
      category: "city",
      seats: 5,
      trans: "Automatic",
      img: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Toyota Innova Zenix",
      price: "850.000",
      category: "mpv",
      seats: 7,
      trans: "Automatic",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Mitsubishi Pajero Sport",
      price: "1.200.000",
      category: "suv",
      seats: 7,
      trans: "Automatic",
      img: "https://images.unsplash.com/photo-1506015391300-415ea27b8764?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Toyota Alphard",
      price: "2.500.000",
      category: "luxury",
      seats: 6,
      trans: "Automatic",
      img: "https://images.unsplash.com/photo-1623910344583-b78cc73693fb?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Mercedes Benz C300",
      price: "3.000.000",
      category: "luxury",
      seats: 5,
      trans: "Automatic",
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Honda HRV",
      price: "600.000",
      category: "suv",
      seats: 5,
      trans: "Automatic",
      img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
    }
  ];

  const filteredCars = activeCategory === "semua" 
    ? cars 
    : cars.filter((car) => car.category === activeCategory);

  return (
    <section id="mobil" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Armada <span className="text-indigo-400">Pilihan</span></h2>
            <p className="text-slate-400 text-lg">Pilih kendaraan yang paling sesuai dengan kebutuhan perjalanan Anda.</p>
          </div>

          <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeCategory === cat.id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-indigo-500 rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => {
              const wa = `https://wa.me/${phone}?text=${encodeURIComponent(`Halo, saya ingin info sewa ${car.name}`)}`;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={car.name}
                  className="group bg-[#0f172a]/60 backdrop-blur-xl border border-white/5 hover:border-indigo-500/50 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-800">
                    <img
                      src={car.img}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4 bg-[#0f172a]/80 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Tersedia
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{car.name}</h3>
                      <p className="text-slate-400 text-sm">Mulai dari</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl font-bold text-white">Rp {car.price}</span>
                        <span className="text-slate-500 text-sm">/hari</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-slate-300 text-sm bg-white/5 px-3 py-2 rounded-lg">
                        <Car className="w-4 h-4 text-indigo-400" />
                        {car.seats} Kursi
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 text-sm bg-white/5 px-3 py-2 rounded-lg">
                        <Zap className="w-4 h-4 text-indigo-400" />
                        {car.trans}
                      </div>
                    </div>

                    <a
                      href={wa}
                      className="mt-auto block w-full text-center bg-white/5 hover:bg-indigo-500 text-white border border-white/10 hover:border-transparent py-3.5 rounded-xl font-semibold transition-all duration-300"
                    >
                      Booking Unit Ini
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#0f172a]/40 backdrop-blur-sm transition-colors hover:bg-[#0f172a]/80">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-medium focus:outline-none"
      >
        <span className="pr-8 text-lg">{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} className="shrink-0 text-indigo-400">
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
