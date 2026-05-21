import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shirt,
  Wind,
  Zap,
  Search,
  Truck,
  Sparkles,
  Droplets,
  Clock,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  MapPin
} from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function LaundryLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phone = "628123456789";
  const message = "Halo, saya ingin order penjemputan laundry.";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-blue-200 overflow-x-hidden">
      
      {/* FLOATING BUBBLES (Background Effect) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-400/10 blur-[60px]" />
        <motion.div animate={{ y: [0, 30, 0], x: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-cyan-400/10 blur-[80px]" />
        <motion.div animate={{ y: [0, -40, 0], x: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] left-[20%] w-80 h-80 rounded-full bg-sky-300/20 blur-[100px]" />
      </div>

      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 text-white">
              <Droplets className="w-6 h-6 fill-current" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              Aio<span className="text-blue-600">Laundry</span>
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#layanan" className="hover:text-blue-600 transition-colors">Layanan</a>
            <a href="#tracking" className="hover:text-blue-600 transition-colors">Cek Resi</a>
            <a href="#keunggulan" className="hover:text-blue-600 transition-colors">Keunggulan</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={waLink}
            className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Pick-up Sekarang
          </motion.a>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-slate-900 relative z-50"
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
              className="md:hidden absolute top-0 left-0 w-full bg-white/95 backdrop-blur-xl flex flex-col pt-24 px-6 z-40 border-b border-slate-200"
            >
              <div className="flex flex-col gap-6 text-xl font-bold text-center">
                <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 pb-4 border-b border-slate-100">Layanan</a>
                <a href="#tracking" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 pb-4 border-b border-slate-100">Cek Status Cucian</a>
                <a href="#keunggulan" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 pb-4 border-b border-slate-100">Keunggulan Kami</a>
                <a
                  href={waLink}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-blue-500/30"
                >
                  <Truck className="w-5 h-5" /> Minta Penjemputan
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        {/* HERO */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="relative z-10">
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold mb-6 shadow-sm">
                <Sparkles className="w-4 h-4" />
                Aio Laundry Express Antar Jemput
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-slate-900 tracking-tight">
                Pakaian Bersih <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Seperti Baru Lagi
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
                Nikmati layanan cuci express dengan formula anti-bakteri. Gratis antar-jemput untuk wilayah kota dengan sistem pelacakan real-time.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a
                  href={waLink}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  <Truck className="w-5 h-5" />
                  Jemput Pakaian Saya
                </a>
                <a
                  href="#layanan"
                  className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
                >
                  Lihat Harga
                </a>
              </motion.div>

              <motion.div variants={FADE_UP} className="mt-12 flex items-center gap-4 text-sm font-bold text-slate-500">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://randomuser.me/api/portraits/women/${20+i}.jpg`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Customer" />
                  ))}
                </div>
                <p>Dipercaya oleh <span className="text-blue-600">2,000+</span> pelanggan setia.</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:h-[600px] w-full flex items-center justify-center"
            >
              {/* Creative Layout with Glassmorphism Overlays */}
              <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[90%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1000"
                  alt="Fresh Laundry"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge 1 */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 md:-left-12 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl flex items-center gap-4 shadow-xl z-20"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-900 font-black">Garansi 100%</p>
                  <p className="text-xs text-slate-500 font-bold">Aman dari Kelunturan</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 -right-6 md:-right-10 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl flex items-center gap-4 shadow-xl z-20"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-900 font-black">Selesai 24 Jam</p>
                  <p className="text-xs text-slate-500 font-bold">Layanan Express</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* TRACKING WIDGET */}
        <section id="tracking" className="px-6 mb-24 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10" />
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-slate-900 mb-3">Lacak Cucian Anda</h2>
              <p className="text-slate-500 font-medium">Masukkan nomor resi untuk melihat status proses laundry Anda secara real-time.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Contoh: LND-89234" 
                  className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white outline-none transition-all shadow-inner"
                />
              </div>
              <button className="bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-colors shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                Cek Status <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="layanan" className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm text-blue-600 font-black tracking-widest uppercase mb-3">Daftar Layanan</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900">Pilih Paket Sesuai Kebutuhan</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Cuci Pakaian Kiloan", price: "Mulai Rp 5k", unit: "/kg", icon: Wind, desc: "Layanan cuci, kering, dan setrika pakaian harian Anda dengan hasil rapi dan wangi.", color: "text-sky-500", bg: "bg-sky-50" },
                { name: "Cuci Bedding", price: "Mulai Rp 15k", unit: "/pcs", icon: Shirt, desc: "Cuci bersih berbagai macam sprei, selimut, dan bed cover untuk kenyamanan tidur maksimal.", color: "text-blue-600", bg: "bg-blue-50", popular: true },
                { name: "Cuci Sepatu & Tas", price: "Mulai Rp 25k", unit: "/pcs", icon: Zap, desc: "Perawatan khusus cuci sepatu, tas, dan stroller kesayangan Anda agar tampak seperti baru.", color: "text-indigo-600", bg: "bg-indigo-50" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative bg-white rounded-[2rem] p-8 border ${item.popular ? 'border-blue-500 shadow-xl shadow-blue-500/10' : 'border-slate-100 shadow-lg shadow-slate-200/50'} hover:-translate-y-2 transition-all duration-300`}
                >
                  {item.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                      Paling Laris
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-8`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  
                  <h4 className="text-2xl font-black text-slate-900 mb-2">{item.name}</h4>
                  <p className="text-slate-500 font-medium mb-6 leading-relaxed">{item.desc}</p>
                  
                  <div className="flex items-end gap-1 mb-8">
                    <span className="text-4xl font-black text-slate-900">{item.price}</span>
                    <span className="text-slate-500 font-bold mb-1">{item.unit}</span>
                  </div>

                  <a href={waLink} className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${item.popular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                    Pilih Paket
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="keunggulan" className="px-6 mb-24 relative">
          <div className="absolute inset-0 bg-blue-600 rounded-[3rem] md:rounded-[5rem] -skew-y-2 transform -z-10 mx-4 md:mx-10" />
          
          <div className="max-w-7xl mx-auto py-20 md:py-32 px-6 lg:px-16 text-white grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Kenapa Harus Memilih <span className="text-blue-200">Aio Laundry?</span></h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed font-medium">Kami tidak sekadar mencuci pakaian Anda. Kami merawatnya menggunakan teknologi modern dan deterjen ramah lingkungan yang menjaga warna dan serat kain.</p>
              
              <div className="space-y-6">
                {[
                  { icon: Droplets, title: "Deterjen Premium Anti-Bakteri", desc: "Membunuh 99.9% kuman penyebab bau tak sedap." },
                  { icon: Clock, title: "Tepat Waktu", desc: "Kami menjamin cucian Anda selesai sesuai estimasi waktu." },
                  { icon: Truck, title: "Gratis Antar Jemput", desc: "Tanpa repot keluar rumah, kurir kami siap menjemput." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-200" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                      <p className="text-blue-100/80">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-[4/5] bg-white p-4 rounded-3xl shadow-2xl transform rotate-3">
                <img src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-2xl" alt="Clean Clothes" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white text-slate-900 p-6 rounded-3xl shadow-xl transform -rotate-3 flex items-center gap-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                <div>
                  <p className="font-black text-xl">10.000+</p>
                  <p className="text-sm font-bold text-slate-500">Pakaian Dicuci</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 text-center">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60')] mix-blend-overlay opacity-10 bg-cover bg-center" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">Tumpukan Baju Kotor Bikin Stres?</h2>
            <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto font-medium">Biar kami yang urus. Duduk santai, hubungi kami via WhatsApp, dan kurir kami akan segera meluncur ke lokasi Anda.</p>
            
            <a
              href={waLink}
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-400 hover:scale-105 transition-all shadow-lg shadow-blue-500/30 relative z-10"
            >
              Order via WhatsApp <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-6 mt-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="text-blue-600 w-6 h-6" />
              <span className="text-xl font-black text-slate-900">Aio Laundry</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">Solusi cerdas untuk pakaian bersih, wangi, dan rapi tanpa perlu membuang waktu berharga Anda.</p>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-4 uppercase tracking-wider text-sm">Layanan</h4>
            <div className="flex flex-col gap-3 text-slate-500 font-medium">
              <a href="#" className="hover:text-blue-600 transition-colors">Cuci Pakaian Kiloan</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cuci Sprei & Selimut</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cuci Sepatu & Tas</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cuci Stroller</a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-4 uppercase tracking-wider text-sm">Hubungi Kami</h4>
            <div className="flex flex-col gap-4 text-slate-500 font-medium">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Jl. Ahmad Yani Timur No. 29, Tamanan, Kec. Tulungagung</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Buka Setiap Hari: 07.00 - 21.00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-slate-400 font-medium text-sm pt-8 border-t border-slate-100">
          © {new Date().getFullYear()} Aio Laundry Tulungagung. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
