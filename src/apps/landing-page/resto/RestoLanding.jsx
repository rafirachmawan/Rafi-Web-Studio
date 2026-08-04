import { resto } from "../../../data/resto";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  Clock,
  Menu,
  X,
  Flame,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Briefcase,
  ChevronRight,
  Utensils
} from "lucide-react";

// Import Brand Logo
import logoMieGacoan from "../../../assets/mieGacoan/logoMieGacoan.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function RestoLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = resto;
  
  const phone = "6285707185783"; // WhatsApp contact

  // Gacoan Order Customizer States
  const [noodleType, setNoodleType] = useState("Mie Gacoan (Manis Pedas)");
  const [spicyLevel, setSpicyLevel] = useState(3);
  const [selectedDimsum, setSelectedDimsum] = useState(["pangsit_goreng"]);
  const [selectedBeverage, setSelectedBeverage] = useState("es_gobak_sodor");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dimsumList = [
    { id: "pangsit_goreng", name: "Pangsit Goreng (3 pcs)", price: 12000 },
    { id: "udang_keju", name: "Udang Keju (3 pcs)", price: 12000 },
    { id: "udang_rambutan", name: "Udang Rambutan (3 pcs)", price: 12000 },
    { id: "siomay", name: "Siomay Dimsum (3 pcs)", price: 10000 },
  ];

  const beverageList = [
    { id: "es_gobak_sodor", name: "Es Gobak Sodor", price: 12000 },
    { id: "es_teklek", name: "Es Teklek", price: 10000 },
    { id: "es_petak_sumpet", name: "Es Petak Sumpet", price: 10000 },
    { id: "es_sluku_bathok", name: "Es Sluku Bathok", price: 10000 },
    { id: "es_teh_manis", name: "Es Teh Manis", price: 5000 },
  ];

  const calculateCustomGacoanPrice = () => {
    let noodlePrice = spicyLevel >= 8 ? 14000 : 10000;
    
    const dimsumPrice = selectedDimsum.reduce((total, id) => {
      const item = dimsumList.find(d => d.id === id);
      return total + (item ? item.price : 0);
    }, 0);

    const bevItem = beverageList.find(b => b.id === selectedBeverage);
    const bevPrice = bevItem ? bevItem.price : 0;

    return noodlePrice + dimsumPrice + bevPrice;
  };

  const handleToggleDimsum = (dimsumId) => {
    if (selectedDimsum.includes(dimsumId)) {
      setSelectedDimsum(selectedDimsum.filter(id => id !== dimsumId));
    } else {
      setSelectedDimsum([...selectedDimsum, dimsumId]);
    }
  };

  const handleOrderCustomGacoan = () => {
    const dimsumNames = selectedDimsum.map(id => dimsumList.find(d => d.id === id)?.name).join(", ") || "Tanpa Dimsum";
    const bevName = beverageList.find(b => b.id === selectedBeverage)?.name || "Tanpa Minuman";
    const totalPrice = calculateCustomGacoanPrice();

    const message = `Halo Mie Gacoan Tulungagung, saya ingin pesan online:
- *Varian Mie*: ${noodleType}
- *Level Pedas*: Level ${spicyLevel}
- *Pilihan Dimsum*: ${dimsumNames}
- *Minuman Segar*: ${bevName}
- *Total Harga*: Rp ${totalPrice.toLocaleString("id-ID")}

Mohon diproses. Terima kasih!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen font-sans selection:bg-pink-500/20 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm" 
            : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img 
              src={logoMieGacoan} 
              alt="Mie Gacoan Logo" 
              className="h-10 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col justify-center text-left">
              <span className="text-xl font-black tracking-tight text-[#db2777] font-serif uppercase leading-tight">MIE GACOAN</span>
              <span className="text-[10px] text-[#0284c7] font-extrabold tracking-widest uppercase">CABANG TULUNGAGUNG</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase font-bold text-slate-600">
            <a href="#bestseller" className="hover:text-[#db2777] transition-colors">Menu Favorit</a>
            <a href="#customizer" className="hover:text-[#db2777] transition-colors">Custom Level</a>
            <a href="#menu" className="hover:text-[#db2777] transition-colors">Daftar Menu</a>
            <a href="#location" className="hover:text-[#db2777] transition-colors">Cabang Tulungagung</a>
            <a href="#karir" className="hover:text-[#db2777] transition-colors">Info Karir</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={`https://wa.me/${phone}?text=Halo%20Mie%20Gacoan%20Tulungagung%2C%20saya%20tertarik%20pesan%20online.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#db2777] hover:bg-[#be185d] text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-pink-500/25 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            Pesan Online
          </motion.a>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-slate-700 hover:text-[#db2777] p-2 rounded-xl bg-slate-100 border border-slate-200"
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
              className="lg:hidden absolute top-0 left-0 w-full bg-white flex flex-col pt-24 px-6 z-40 border-b border-slate-200"
            >
              <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-wider text-left">
                <a href="#bestseller" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-[#db2777] border-b border-slate-100 pb-3">Menu Favorit</a>
                <a href="#customizer" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-[#db2777] border-b border-slate-100 pb-3">Custom Level</a>
                <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-[#db2777] border-b border-slate-100 pb-3">Daftar Menu</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-[#db2777] border-b border-slate-100 pb-3">Cabang Tulungagung</a>
                <a href="#karir" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-[#db2777] border-b border-slate-100 pb-3">Info Karir</a>
                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#db2777] text-white px-5 py-3.5 rounded-full font-black mt-2 text-xs tracking-wider uppercase shadow-lg shadow-pink-500/25"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Pesan Sekarang (WhatsApp)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 pt-24">
        {/* HERO SECTION WITH OFFICIAL GACOAN ORNAMENTS */}
        <section className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-12 shadow-xl shadow-slate-200/60 relative overflow-hidden text-left">
            
            {/* FLOATING GACOAN RIBBON DOODLES (MATCHING OFFICIAL SITE SCREENSHOT) */}
            <div className="absolute top-4 left-6 pointer-events-none opacity-90 hidden sm:block">
              <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 25C25 5 45 35 65 15C85 -5 105 35 125 15C145 -5 165 25 175 15" stroke="#db2777" strokeWidth="5" strokeLinecap="round"/>
                <path d="M15 32C35 12 55 42 75 22C95 2 115 42 135 22" stroke="#0284c7" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="160" cy="8" r="3" fill="#db2777"/>
                <circle cx="170" cy="22" r="2" fill="#0284c7"/>
              </svg>
            </div>

            <div className="absolute bottom-4 right-6 pointer-events-none opacity-90 hidden sm:block">
              <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15C25 35 45 5 65 25C85 45 105 5 125 25C145 45 165 15 175 25" stroke="#db2777" strokeWidth="5" strokeLinecap="round"/>
                <path d="M15 8C35 28 55 -2 75 18C95 38 115 -2 135 18" stroke="#0284c7" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10 pt-4">
              
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={STAGGER}
                className="lg:col-span-7 space-y-6"
              >
                <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#db2777] text-xs font-black tracking-wider uppercase">
                  <Sparkles className="w-4 h-4 text-[#db2777]" />
                  MIE GACOAN TULUNGAGUNG — RESMI & MODERN
                </motion.div>

                {/* MAIN TITLE MATCHING OFFICIAL GACOAN SITE */}
                <motion.h1 variants={FADE_UP} className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black leading-[1.1] tracking-tight">
                  <span className="text-[#db2777] block">MIE PEDAS NO. 1</span>
                  <span className="text-[#0284c7] block mt-1">DI INDONESIA</span>
                </motion.h1>

                <motion.p variants={FADE_UP} className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
                  Mie Gacoan, terkenal dengan mie pedas khas dan berbagai level kepedasan. Menyajikan rasa nikmat, harga super ramah, dan suasana nyaman untuk pengalaman kuliner seru di Tulungagung.
                </motion.p>

                <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#customizer"
                    className="bg-[#db2777] hover:bg-[#be185d] text-white px-8 py-4 rounded-full font-black text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-xl shadow-pink-500/25 active:scale-95"
                  >
                    Pilih Level Pedasmu
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#location"
                    className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-8 py-4 rounded-full font-black text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-xl shadow-cyan-500/25 active:scale-95"
                  >
                    <MapPin className="w-4 h-4" />
                    Cabang Terdekat
                  </a>
                </motion.div>

                {/* HERO STATS PILLS */}
                <motion.div variants={FADE_UP} className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-lg">
                  <div className="bg-pink-50/70 p-3 rounded-2xl border border-pink-100">
                    <h3 className="text-2xl font-black text-[#db2777] font-serif">100k+</h3>
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">Pelanggan Puas</p>
                  </div>
                  <div className="bg-sky-50/70 p-3 rounded-2xl border border-sky-100">
                    <h3 className="text-2xl font-black text-[#0284c7] font-serif">30+</h3>
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">Kota Layanan</p>
                  </div>
                  <div className="bg-purple-50/70 p-3 rounded-2xl border border-purple-100">
                    <h3 className="text-2xl font-black text-purple-600 font-serif">50+</h3>
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">Menu Tersedia</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE — HIGH QUALITY GACOAN DISH SHOWCASE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:col-span-5 relative flex items-center justify-center"
              >
                <div className="relative w-full max-w-md">
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800"
                      alt="Mie Gacoan Dish"
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-5 left-5 right-5 text-left">
                      <span className="text-[10px] uppercase font-black tracking-wider px-3 py-1 bg-[#db2777] text-white rounded-full">
                        🔥 Bestseller Level 8
                      </span>
                      <h4 className="text-xl font-serif font-black text-white mt-2">Mie Gacoan Super Pedas</h4>
                      <p className="text-xs text-slate-200 mt-0.5 font-medium">Dengan taburan ayam gurih & pangsit krispi khas Gacoan.</p>
                    </div>
                  </div>

                  {/* Floating Badge 1 */}
                  <div className="absolute -top-4 -right-3 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-xl">
                    <span className="text-[#db2777] font-black text-base">🌶️</span>
                    <div className="text-left">
                      <p className="text-slate-900 font-extrabold text-xs">Level 0 - 8</p>
                      <p className="text-[10px] text-slate-500 font-semibold">Pilih Kepedasanmu</p>
                    </div>
                  </div>

                  {/* Floating Badge 2 */}
                  <div className="absolute -bottom-3 -left-3 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-xl">
                    <div className="text-left">
                      <div className="flex gap-0.5 text-amber-400 mb-0.5">
                        {[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                      <p className="text-slate-900 font-extrabold text-xs">Es Gobak Sodor</p>
                      <p className="text-[10px] text-[#db2777] font-black">Hanya Rp 12.000</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BESTSELLERS SHOWCASE */}
        <section id="bestseller" className="py-20 px-6 relative bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="flex items-center gap-2 text-[#db2777] text-xs font-black tracking-wider uppercase mb-2">
                  <Flame className="w-4 h-4 text-[#db2777]" /> GACOAN RECOMMENDED
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-slate-900">
                  Menu Favorit Pelanggan
                </h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm max-w-sm leading-relaxed font-medium">Sajian favorit dengan racikan mie pedas khas dipadu dimsum renyah dan es segar pelepas dahaga.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800", 
                  name: "Mie Gacoan (Lv. 1 - 8)", 
                  price: "10.000",
                  tag: "Manis Pedas",
                  desc: "Mie manis pedas gurih khas Gacoan disajikan dengan taburan ayam cincang halus, daun bawang segar, dan 2 pangsit goreng krispi." 
                },
                { 
                  img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800", 
                  name: "Mie Hompimpa (Lv. 1 - 8)", 
                  price: "10.000",
                  tag: "Asin Pedas Gurih",
                  desc: "Mie asin pedas nagih bertabur cabe asli, cincangan daging ayam pilihan, dan topping pangsit krispi super renyah." 
                },
                { 
                  img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800", 
                  name: "Pangsit Goreng & Udang Keju", 
                  price: "12.000",
                  tag: "Dimsum Favorit",
                  desc: "Dimsum olahan udang keju lumer & pangsit goreng jumbo krispi renyah dengan isian daging gurih dipadu saus khas Gacoan." 
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-200/80 hover:border-pink-300 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-[#db2777] text-white text-[10px] font-black tracking-wider px-3 py-1 rounded-full shadow-md">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-extrabold text-slate-900">{item.name}</h3>
                        <span className="text-[#db2777] font-black font-serif text-base">Rp {item.price}</span>
                      </div>
                      <p className="text-slate-600 text-xs font-normal leading-relaxed mb-6">{item.desc}</p>
                    </div>
                    <a 
                      href={`https://wa.me/${phone}?text=${encodeURIComponent(`Halo Mie Gacoan Tulungagung, saya mau pesan: *${item.name}* (Rp ${item.price}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#db2777] hover:bg-[#be185d] text-white py-3 rounded-2xl font-black text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-pink-500/20"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GACOAN LEVEL & ORDER CUSTOMIZER */}
        <section id="customizer" className="py-20 px-6 relative bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs text-[#0284c7] uppercase tracking-widest font-extrabold mb-2">Interactive Order</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">Gacoan Customizer</h2>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mt-2 font-medium">
                Pilih racikan mi favorit Anda, tentukan tingkat kepedasan, serta tambahkan dimsum & es segar.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch text-left">
              {/* Customizer Panel Left */}
              <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg shadow-slate-200/50">
                
                {/* 1. Noodle Type */}
                <div>
                  <label className="text-[10px] uppercase font-extrabold tracking-wider text-slate-500 block mb-3">1. Pilih Varian Mie Gacoan:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Mie Gacoan (Manis Pedas)", desc: "Kecap manis + cabai asli" },
                      { name: "Mie Hompimpa (Asin Pedas)", desc: "Gurih asin + cabai segar" },
                      { name: "Mie Suit (Gurih No Pedas)", desc: "Mild / Tanpa Pedas" }
                    ].map(n => (
                      <button
                        key={n.name}
                        onClick={() => setNoodleType(n.name)}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          noodleType === n.name
                            ? "bg-[#db2777] text-white border-transparent shadow-md shadow-pink-500/20"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <span className="text-xs font-black block">{n.name.split(" ")[0]} {n.name.split(" ")[1]}</span>
                        <span className="text-[10px] opacity-90 mt-0.5 block font-medium">{n.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Spicy Level Selector */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-[10px] uppercase font-extrabold tracking-wider text-slate-500">2. Tingkat Kepedasan:</label>
                    <span className="text-xs text-[#db2777] font-black bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
                      🔥 Level {spicyLevel} {spicyLevel >= 8 && "(Super Pedas)"}
                    </span>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {[0, 1, 2, 3, 4, 6, 8].map(lvl => (
                      <button
                        key={lvl}
                        onClick={() => setSpicyLevel(lvl)}
                        className={`py-2.5 rounded-xl font-black text-xs transition-all border ${
                          spicyLevel === lvl
                            ? "bg-[#db2777] text-white border-transparent shadow-md shadow-pink-500/20"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        Lvl {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Dimsum Multi-Selector */}
                <div>
                  <label className="text-[10px] uppercase font-extrabold tracking-wider text-slate-500 block mb-3">3. Tambah Pilihan Dimsum:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {dimsumList.map(dimsum => {
                      const isSelected = selectedDimsum.includes(dimsum.id);
                      return (
                        <button
                          key={dimsum.id}
                          onClick={() => handleToggleDimsum(dimsum.id)}
                          className={`p-3 rounded-2xl border text-left flex flex-col justify-between h-20 transition-all ${
                            isSelected
                              ? "bg-sky-50 border-[#0284c7] text-[#0284c7] font-extrabold"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <span className="text-[10px] font-bold block leading-tight">{dimsum.name}</span>
                          <span className="text-[10px] font-black text-[#db2777]">+Rp {dimsum.price.toLocaleString("id-ID")}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Beverage Selector */}
                <div>
                  <label className="text-[10px] uppercase font-extrabold tracking-wider text-slate-500 block mb-3">4. Pilihan Minuman Segar:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {beverageList.map(bev => (
                      <button
                        key={bev.id}
                        onClick={() => setSelectedBeverage(bev.id)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          selectedBeverage === bev.id
                            ? "bg-pink-50 border-[#db2777] text-[#db2777] font-extrabold"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="text-[10px] font-bold block">{bev.name}</span>
                        <span className="text-[9px] text-slate-500">Rp {bev.price.toLocaleString("id-ID")}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary Right */}
              <div className="lg:col-span-4 bg-white border-2 border-pink-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-pink-500/5">
                <div className="space-y-5">
                  <h4 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#db2777]" />
                    Ringkasan Pesanan
                  </h4>
                  
                  <div className="space-y-3.5 text-xs text-slate-700 font-medium">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-bold">Varian Mie:</span>
                      <span className="text-slate-900 font-extrabold">{noodleType.split(" ")[0]} {noodleType.split(" ")[1]}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-bold">Tingkat Pedas:</span>
                      <span className="text-[#db2777] font-black">Level {spicyLevel} ({spicyLevel >= 8 ? "Rp 14.000" : "Rp 10.000"})</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-bold">Dimsum:</span>
                      <span className="text-slate-900 font-bold text-right max-w-[140px] truncate">
                        {selectedDimsum.map(id => dimsumList.find(d => d.id === id)?.name.split(" ")[0]).join(", ") || "Tanpa Dimsum"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-bold">Minuman Segar:</span>
                      <span className="text-[#0284c7] font-extrabold">{beverageList.find(b => b.id === selectedBeverage)?.name}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="bg-pink-50/60 border border-pink-100 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Total Estimasi</p>
                      <h4 className="text-2xl font-black text-[#db2777] font-serif">
                        Rp {calculateCustomGacoanPrice().toLocaleString("id-ID")}
                      </h4>
                    </div>
                  </div>

                  <button
                    onClick={handleOrderCustomGacoan}
                    className="w-full bg-[#db2777] hover:bg-[#be185d] text-white font-black text-xs tracking-wider py-4 rounded-full transition-all flex items-center justify-center gap-2 uppercase shadow-lg shadow-pink-500/25"
                  >
                    <ShoppingBag size={16} />
                    Pesan via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED MENU LIST */}
        <RestoSection phone={phone} />

        {/* CABANG & LOKASI TULUNGAGUNG */}
        <section id="location" className="py-20 px-6 relative bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch text-left">
            
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 flex flex-col justify-center shadow-xl shadow-slate-200/50">
              <h2 className="text-xs text-[#0284c7] uppercase tracking-widest font-black mb-2">Cabang Resmi</h2>
              <h3 className="text-2xl sm:text-3xl font-serif font-black mb-4 text-slate-900">Mie Gacoan Tulungagung</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-6 font-medium">
                Kunjungi outlet resmi kami di Tulungagung. Dilengkapi fasilitas area indoor AC, outdoor santai, musholla, dan parkir luas.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 bg-pink-50/60 p-4 rounded-2xl border border-pink-100">
                  <MapPin className="text-[#db2777] w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-extrabold text-xs text-slate-900">Alamat Outlet</p>
                    <p className="text-[11px] text-slate-600 font-medium">{data.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-sky-50/60 p-4 rounded-2xl border border-sky-100">
                  <Clock className="text-[#0284c7] w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-extrabold text-xs text-slate-900">Jam Operasional</p>
                    <p className="text-[11px] text-slate-600 font-medium">{data.hours}</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/maps?q=Mie%20Gacoan%20Tulungagung"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-black uppercase tracking-wider text-center py-3.5 rounded-full transition-all shadow-md shadow-cyan-500/20"
              >
                Petunjuk Arah Google Maps
              </a>
            </div>

            <div className="relative h-[340px] md:h-auto rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/50">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://maps.google.com/maps?q=Mie%20Gacoan%20Tulungagung&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </div>
            
          </div>
        </section>

        {/* INFO KARIR */}
        <section id="karir" className="py-20 px-6 bg-white relative border-t border-slate-200">
          <div className="max-w-7xl mx-auto text-left">
            <div className="bg-gradient-to-r from-[#db2777] via-pink-600 to-[#0284c7] p-8 sm:p-12 rounded-3xl text-white shadow-2xl shadow-pink-500/20">
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-white/30">
                    Karir Mie Gacoan
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">Lowongan Kerja & Karir</h2>
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                    Tertarik bergabung dengan tim Mie Gacoan Tulungagung? Kami membuka kesempatan lowongan pekerjaan untuk posisi Crew Resto, Kasir, Kitchen, dan Supervisor.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent("Halo Tim HRD Mie Gacoan Tulungagung, saya bermaksud menanyakan info lowongan kerja.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-white text-[#db2777] hover:bg-slate-100 font-black text-xs uppercase tracking-wider py-4 px-6 rounded-full transition-all text-center flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Briefcase className="w-4 h-4" />
                    Kirim Lamaran (WA HRD)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER BANNER MATCHING OFFICIAL SITE SCREENSHOT */}
      <div className="w-full h-3 bg-gradient-to-r from-[#db2777] via-[#0284c7] to-[#db2777]" />

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200/80 pt-12 pb-8 px-6 text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoMieGacoan} alt="Mie Gacoan Logo" className="h-8 w-auto object-contain" />
            <div className="flex flex-col justify-center">
              <span className="text-base font-black tracking-tight text-[#db2777] font-serif uppercase leading-tight">
                MIE GACOAN
              </span>
              <span className="text-[9px] text-[#0284c7] font-extrabold tracking-wider uppercase">
                CABANG TULUNGAGUNG
              </span>
            </div>
          </div>
          
          <div className="flex gap-6 text-[10px] tracking-wider uppercase font-bold text-slate-600">
            <a href="#bestseller" className="hover:text-[#db2777] transition-colors">Menu Favorit</a>
            <a href="#customizer" className="hover:text-[#db2777] transition-colors">Custom Level</a>
            <a href="#location" className="hover:text-[#db2777] transition-colors">Cabang</a>
            <a href="#karir" className="hover:text-[#db2777] transition-colors">Karir</a>
          </div>
          
          <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
            © {new Date().getFullYear()} Mie Gacoan Tulungagung. Redesign by GapaiDigital.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* MENU SECTION FILTER */
function RestoSection({ phone }) {
  const [activeCategory, setActiveCategory] = useState("semua");

  const categories = [
    { id: "semua", label: "Semua Menu" },
    { id: "mie", label: "Mie Pedas" },
    { id: "dimsum", label: "Dimsum Renyah" },
    { id: "es", label: "Es Segar" },
  ];

  const menus = [
    {
      name: "Mie Gacoan Level 1 - 6",
      price: "10.000",
      category: "mie",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800",
      tag: "Manis Pedas"
    },
    {
      name: "Mie Gacoan Level 8",
      price: "14.000",
      category: "mie",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800",
      tag: "Super Pedas"
    },
    {
      name: "Mie Hompimpa Level 1 - 6",
      price: "10.000",
      category: "mie",
      img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
      tag: "Asin Pedas"
    },
    {
      name: "Mie Suit (No Pedas)",
      price: "10.000",
      category: "mie",
      img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
      tag: "Mild / Gurih"
    },
    {
      name: "Pangsit Goreng (3 Pcs)",
      price: "12.000",
      category: "dimsum",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
      tag: "Krispi"
    },
    {
      name: "Udang Keju (3 Pcs)",
      price: "12.000",
      category: "dimsum",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
      tag: "Keju Lumer"
    },
    {
      name: "Udang Rambutan (3 Pcs)",
      price: "12.000",
      category: "dimsum",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
      tag: "Dimsum Udang"
    },
    {
      name: "Siomay Dimsum (3 Pcs)",
      price: "10.000",
      category: "dimsum",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
      tag: "Kukus"
    },
    {
      name: "Es Gobak Sodor",
      price: "12.000",
      category: "es",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      tag: "Es Buah Segar"
    },
    {
      name: "Es Teklek",
      price: "10.000",
      category: "es",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      tag: "Manis Segar"
    },
    {
      name: "Es Petak Sumpet",
      price: "10.000",
      category: "es",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      tag: "Susu Jelly"
    },
    {
      name: "Es Sluku Bathok",
      price: "10.000",
      category: "es",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      tag: "Moka Susu"
    },
  ];

  const filteredMenus = activeCategory === "semua" 
    ? menus 
    : menus.filter(m => m.category === activeCategory);

  return (
    <section id="menu" className="py-20 px-6 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto text-left">
        <div className="text-center mb-10">
          <p className="text-xs text-[#db2777] uppercase tracking-widest font-black mb-2">Katalog Lengkap</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">Daftar Menu Gacoan</h2>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? "bg-[#db2777] text-white shadow-md shadow-pink-500/20"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMenus.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-white border border-slate-200/80 hover:border-pink-300 rounded-2xl overflow-hidden flex flex-col justify-between p-4 transition-all shadow-md shadow-slate-200/40 hover:shadow-xl group"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-3 relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 bg-[#db2777] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#db2777] transition-colors mb-1">{item.name}</h3>
                <p className="text-[#db2777] font-black font-serif text-sm mb-3">Rp {item.price}</p>
              </div>

              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(`Halo Mie Gacoan Tulungagung, saya mau pesan: *${item.name}* (Rp ${item.price}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#db2777] hover:bg-[#be185d] text-white text-xs font-black py-2.5 rounded-xl uppercase tracking-wider text-center transition-all shadow-sm shadow-pink-500/20"
              >
                Pesan Menu
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
