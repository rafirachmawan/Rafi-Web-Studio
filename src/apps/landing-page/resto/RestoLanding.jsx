import { resto } from "../../../data/resto";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Menu,
  X,
  Utensils,
  Flame,
  ShoppingBag,
  ArrowRight,
  Search,
  CheckCircle2,
  Users
} from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function RestoLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = resto || { name: "Savoria", hero: { title: "Taste the Magic", subtitle: "Delicious food delivered to you." } };
  const phone = "628123456789";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0c0a09] text-stone-200 min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-600/10 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#0c0a09]/80 backdrop-blur-xl border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Utensils className="text-white w-5 h-5" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-white">
              {data.name}
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
            <a href="#bestseller" className="hover:text-orange-400 transition-colors">Best Seller</a>
            <a href="#menu" className="hover:text-orange-400 transition-colors">Menu Utama</a>
            <a href="#reviews" className="hover:text-orange-400 transition-colors">Ulasan</a>
            <a href="#location" className="hover:text-orange-400 transition-colors">Lokasi</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={`https://wa.me/${phone}`}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            Pesan
          </motion.a>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-stone-300 hover:text-white relative z-50"
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
              className="md:hidden absolute top-0 left-0 w-full bg-[#0c0a09] flex flex-col pt-24 px-6 z-40 border-b border-white/5"
            >
              <div className="flex flex-col gap-6 text-xl font-bold">
                <a href="#bestseller" onClick={() => setMobileMenuOpen(false)} className="text-stone-300 hover:text-white border-b border-white/5 pb-4">Best Seller</a>
                <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-stone-300 hover:text-white border-b border-white/5 pb-4">Menu Utama</a>
                <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-stone-300 hover:text-white border-b border-white/5 pb-4">Ulasan</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-stone-300 hover:text-white border-b border-white/5 pb-4">Lokasi</a>
                <a
                  href={`https://wa.me/${phone}`}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-5 py-4 rounded-xl font-bold mt-4"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Order Sekarang
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="relative z-10 order-2 lg:order-1"
            >
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold mb-6">
                <Flame className="w-4 h-4" />
                Rasa Autentik, Harga Terbaik
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white tracking-tighter">
                {data.hero?.title.split(' ').slice(0, -1).join(' ')} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                  {data.hero?.title.split(' ').slice(-1)}
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-stone-400 mb-10 max-w-lg leading-relaxed font-medium">
                {data.hero?.subtitle} Rasakan perpaduan bumbu rahasia kami yang akan memanjakan lidah Anda.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a
                  href="#menu"
                  className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-orange-500/25 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  Lihat Menu
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${phone}`}
                  className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Hubungi Kami
                </a>
              </motion.div>

              <motion.div variants={FADE_UP} className="mt-12 flex items-center gap-6 text-sm font-medium text-stone-400">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://randomuser.me/api/portraits/men/${30+i}.jpg`} className="w-10 h-10 rounded-full border-2 border-[#0c0a09]" alt="Customer" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#0c0a09] bg-stone-800 flex items-center justify-center text-white font-bold text-xs z-10">
                    5k+
                  </div>
                </div>
                <div>
                  <div className="flex text-orange-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p>Direview 5.0 oleh ribuan pelanggan</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:h-[600px] flex items-center justify-center order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-rose-500/20 rounded-full blur-[100px]" />
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000"
                alt="Delicious Food"
                className="relative z-10 w-full max-w-[500px] h-[500px] object-cover rounded-full shadow-[0_0_50px_rgba(249,115,22,0.15)] ring-4 ring-white/5 hover:scale-105 transition-transform duration-700"
              />
              
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-0 md:-left-10 bg-[#1c1917]/90 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-4 z-20 shadow-2xl"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold tracking-tight">Halal Certified</p>
                  <p className="text-xs text-stone-400">100% Aman & Terjamin</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* QUICK SEARCH WIDGET */}
        <section className="px-6 relative z-20 -mt-10 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#1c1917]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-3 shadow-2xl shadow-black/50"
          >
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 bg-black/40 rounded-2xl p-4 flex items-center gap-3 border border-transparent focus-within:border-orange-500/50 transition-colors">
                <Search className="text-stone-400 w-5 h-5" />
                <input type="text" placeholder="Cari menu favoritmu..." className="bg-transparent w-full text-white outline-none placeholder:text-stone-500 font-medium" />
              </div>
              <div className="flex-1 bg-black/40 rounded-2xl p-4 flex items-center gap-3 border border-transparent focus-within:border-orange-500/50 transition-colors">
                <Users className="text-stone-400 w-5 h-5" />
                <input type="number" placeholder="Jumlah porsi" className="bg-transparent w-full text-white outline-none placeholder:text-stone-500 font-medium" />
              </div>
              
              <button className="bg-white text-stone-950 hover:bg-stone-200 rounded-2xl px-8 py-4 flex items-center justify-center gap-2 font-bold transition-all hover:scale-[1.02] active:scale-95">
                <ShoppingBag className="w-5 h-5" />
                <span>Pesan Cepat</span>
              </button>
            </div>
          </motion.div>
        </section>

        {/* BEST SELLER */}
        <section id="bestseller" className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-2 text-orange-400 font-bold mb-3">
                  <Flame className="w-5 h-5" /> MUST TRY
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black tracking-tighter">
                  Best Seller Kami
                </motion.h2>
              </div>
              <p className="text-stone-400 max-w-md font-medium">Hidangan yang paling banyak dipesan dan menjadi favorit pelanggan setia kami. Wajib Anda coba!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d", name: "Nasi Goreng Spesial", desc: "Nasi goreng dengan bumbu rempah rahasia" },
                { img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", name: "Ayam Bakar Madu", desc: "Ayam bakar empuk dengan olesan madu murni" },
                { img: "https://images.unsplash.com/photo-1617191519009-5d0f5c9b5c2c", name: "Mie Goreng Seafood", desc: "Mie goreng dengan topping seafood melimpah" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square"
                >
                  <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
                      #1 Terlaris
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-stone-300 text-sm mb-4 line-clamp-2">{item.desc}</p>
                    <a href={`https://wa.me/${phone}`} className="inline-flex items-center gap-2 text-orange-400 font-bold group/btn hover:text-orange-300">
                      Pesan Sekarang <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MENU */}
        <RestoSection />

        {/* REVIEWS */}
        <section id="reviews" className="py-24 px-6 relative overflow-hidden bg-[#1c1917]/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Apa Kata Mereka?</h2>
              <p className="text-stone-400">Ribuan porsi telah disajikan, dan inilah kesan mereka.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Budi Santoso", text: "Sumpah ini Nasi Goreng terenak yang pernah saya makan. Bumbunya pas, porsinya juga ngenyangin banget!" },
                { name: "Siti Aminah", text: "Pengiriman cepat, packing rapi, dan yang paling penting ayam bakar madunya juara! Bumbunya meresap sampai ke tulang." },
                { name: "Andi Wijaya", text: "Selalu jadi andalan buat makan siang kantor. Harga bersahabat tapi rasa bintang lima. Mantap pokoknya!" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0c0a09] p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex gap-1 text-orange-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-stone-300 mb-8 font-medium leading-relaxed">"{item.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-stone-700 to-stone-800 rounded-full flex items-center justify-center font-bold">
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-stone-500">Pelanggan Setia</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION & CTA SPLIT */}
        <section id="location" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1c1917] p-10 lg:p-12 rounded-3xl border border-white/5 flex flex-col justify-center"
            >
              <h2 className="text-4xl font-black mb-6 tracking-tighter">Mampir ke Tempat Kami</h2>
              <p className="text-stone-400 mb-8 text-lg">
                Selain pesan antar, Anda juga bisa menikmati suasana santai dan nyaman di resto kami. Cocok untuk kumpul keluarga atau teman.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 bg-black/30 p-4 rounded-2xl">
                  <MapPin className="text-orange-400 w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold">Alamat</p>
                    <p className="text-sm text-stone-400">Jl. Kuliner Nusantara No. 123, Jakarta</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-black/30 p-4 rounded-2xl">
                  <Clock className="text-orange-400 w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold">Jam Buka</p>
                    <p className="text-sm text-stone-400">Setiap Hari: 10.00 - 22.00 WIB</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-950 px-8 py-4 rounded-2xl font-bold hover:bg-stone-200 transition-colors"
              >
                Lihat di Google Maps
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-auto rounded-3xl overflow-hidden border border-white/5 group"
            >
              <iframe
                className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-black/10 rounded-3xl" />
            </motion.div>
            
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/5 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Utensils className="text-orange-500 w-6 h-6" />
            <span className="text-xl font-black tracking-tighter text-white">
              {data.name}
            </span>
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-stone-400">
            <a href="#bestseller" className="hover:text-white transition-colors">Best Seller</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#location" className="hover:text-white transition-colors">Lokasi</a>
          </div>
          
          <div className="text-stone-500 text-sm font-medium">
            © {new Date().getFullYear()} {data.name}. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ========================= */
/* 🍽️ MENU SECTION */
/* ========================= */

function RestoSection() {
  const phone = "628123456789";
  const [activeCategory, setActiveCategory] = useState("semua");

  const categories = [
    { id: "semua", label: "Semua Menu" },
    { id: "utama", label: "Menu Utama" },
    { id: "camilan", label: "Camilan" },
    { id: "minuman", label: "Minuman" },
  ];

  const menus = [
    {
      name: "Nasi Goreng Spesial",
      price: "25.000",
      category: "utama",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
      tags: ["Pedas", "Bestseller"]
    },
    {
      name: "Ayam Bakar Madu",
      price: "30.000",
      category: "utama",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800",
      tags: ["Manis Gurih"]
    },
    {
      name: "Mie Goreng Seafood",
      price: "28.000",
      category: "utama",
      img: "https://images.unsplash.com/photo-1617191519009-5d0f5c9b5c2c?auto=format&fit=crop&q=80&w=800",
      tags: ["Seafood"]
    },
    {
      name: "Sate Taichan Senayan",
      price: "35.000",
      category: "camilan",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
      tags: ["Pedas Nampol"]
    },
    {
      name: "Es Jeruk Kelapa",
      price: "15.000",
      category: "minuman",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      tags: ["Segar"]
    },
    {
      name: "Kopi Gula Aren",
      price: "18.000",
      category: "minuman",
      img: "https://images.unsplash.com/photo-1572442388796-11668a67eff4?auto=format&fit=crop&q=80&w=800",
      tags: ["Kopi"]
    }
  ];

  const filteredMenus = activeCategory === "semua" 
    ? menus 
    : menus.filter((menu) => menu.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Eksplor Menu <span className="text-orange-500">Kami</span></h2>
            <p className="text-stone-400 text-lg">Pilih hidangan favorit Anda dari berbagai kategori menu kami.</p>
          </div>

          <div className="flex flex-wrap gap-2 p-1.5 bg-[#1c1917] border border-white/5 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  activeCategory === cat.id ? "text-white" : "text-stone-400 hover:text-white"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategoryResto"
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMenus.map((menu) => {
              const wa = `https://wa.me/${phone}?text=${encodeURIComponent(`Halo, saya mau pesan ${menu.name}`)}`;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={menu.name}
                  className="group bg-[#1c1917] border border-white/5 hover:border-orange-500/30 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={menu.img}
                      alt={menu.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {menu.tags.map((tag, idx) => (
                        <span key={idx} className="bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">{menu.name}</h3>
                    <p className="text-orange-400 text-2xl font-black mb-6">Rp {menu.price}</p>

                    <a
                      href={wa}
                      className="mt-auto flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-orange-500 text-white border border-white/10 hover:border-transparent py-3.5 rounded-xl font-bold transition-all duration-300"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Tambah ke Keranjang
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
