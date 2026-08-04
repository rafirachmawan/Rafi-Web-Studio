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
  Flame,
  ShoppingBag,
  ArrowRight,
  Search,
  CheckCircle2,
  Users,
  Check,
  Sparkles,
  RotateCcw,
  Briefcase,
  ChevronRight,
  Utensils
} from "lucide-react";

// Import Brand Logo
import logoMieGacoan from "../../../assets/mieGacoan/logoMieGacoan.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function RestoLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = resto;
  
  const phone = "6285707185783"; // Rafi's developer/WhatsApp contact

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

    const message = `Halo Mie Gacoan Tulungagung, saya ingin pesan paket racikan online:
- *Varian Mie*: ${noodleType}
- *Level Pedas*: Level ${spicyLevel}
- *Pilihan Dimsum*: ${dimsumNames}
- *Minuman Segar*: ${bevName}
- *Total Harga*: Rp ${totalPrice.toLocaleString("id-ID")}

Mohon diproses untuk pengiriman / take away. Terima kasih!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-[#0b090a] text-zinc-200 min-h-screen font-sans selection:bg-rose-600/30 overflow-x-hidden">
      
      {/* VIBRANT GACOAN GLOW EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-rose-600/15 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-amber-500/10 blur-[140px]" />
      </div>

      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#0b090a]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" 
            : "bg-transparent py-5"
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
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xl font-black tracking-tight text-white uppercase font-serif">MIE GACOAN</span>
              </div>
              <span className="text-[10px] text-rose-400 font-extrabold tracking-widest uppercase mt-0.5">CABANG TULUNGAGUNG</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8 text-xs tracking-widest uppercase font-bold text-zinc-400">
            <a href="#bestseller" className="hover:text-rose-500 transition-colors">Menu Favorit</a>
            <a href="#customizer" className="hover:text-rose-500 transition-colors">Custom Level</a>
            <a href="#menu" className="hover:text-rose-500 transition-colors">Daftar Menu</a>
            <a href="#location" className="hover:text-rose-500 transition-colors">Cabang Tulungagung</a>
            <a href="#karir" className="hover:text-rose-500 transition-colors">Info Karir</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={`https://wa.me/${phone}?text=Halo%20Mie%20Gacoan%20Tulungagung%2C%20saya%20tertarik%20untuk%20pesan%20mie%20gacoan.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:shadow-lg hover:shadow-rose-600/30 transition-all hover:scale-105 active:scale-95 border border-rose-400/30"
          >
            <ShoppingBag className="w-4 h-4" />
            Pesan Online
          </motion.a>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-zinc-300 hover:text-white relative z-50 p-2 rounded-xl bg-zinc-900 border border-white/10"
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
              className="lg:hidden absolute top-0 left-0 w-full bg-[#0b090a]/98 backdrop-blur-2xl flex flex-col pt-24 px-6 z-40 border-b border-white/10"
            >
              <div className="flex flex-col gap-5 text-base font-bold uppercase tracking-widest text-left">
                <a href="#bestseller" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-rose-500 border-b border-white/5 pb-3">Menu Favorit</a>
                <a href="#customizer" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-rose-500 border-b border-white/5 pb-3">Custom Level</a>
                <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-rose-500 border-b border-white/5 pb-3">Daftar Menu</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-rose-500 border-b border-white/5 pb-3">Cabang Tulungagung</a>
                <a href="#karir" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-rose-500 border-b border-white/5 pb-3">Info Karir</a>
                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-amber-500 text-white px-5 py-4 rounded-xl font-black mt-2 text-xs tracking-widest uppercase shadow-xl shadow-rose-600/30"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Pesan Sekarang (WhatsApp)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-6">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center text-left">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600/10 border border-rose-600/20 text-rose-400 text-xs font-black uppercase tracking-widest">
                <Flame className="w-4 h-4 text-rose-500" />
                MIE GACOAN TULUNGAGUNG — RESMI & MODERN
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black leading-[1.1] text-white tracking-tight">
                Pedasnya Nendang — <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400">
                  Harga Ramah!
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-medium">
                Satu-satunya tempat nongkrong seru dengan sajian Mie Pedas No. 1 di Indonesia. Nikmati varian Mie Gacoan, Mie Hompimpa, dimsum goreng renyah, dan aneka es segar legendaris!
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#customizer"
                  className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 text-white px-8 py-4 rounded-2xl font-black text-xs tracking-widest uppercase hover:shadow-2xl hover:shadow-rose-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  Pilih Level Pedasmu
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#location"
                  className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-rose-400" />
                  Cabang Terdekat
                </a>
              </motion.div>

              {/* STATS BADGES (from mieGacoanTulungagung.md) */}
              <motion.div variants={FADE_UP} className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-rose-500 font-serif">100k+</h3>
                  <p className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider">Pelanggan Puas</p>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">30+</h3>
                  <p className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider">Kota Layanan</p>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-pink-400 font-serif">50+</h3>
                  <p className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider">Menu Tersedia</p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE — HERO SHOWCASE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/30 to-amber-500/20 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800"
                    alt="Mie Gacoan Tulungagung Special Bowl"
                    className="w-full h-[440px] object-cover brightness-90 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 bg-rose-600 text-white rounded-full">
                      🔥 Bestseller Level 8
                    </span>
                    <h4 className="text-xl font-serif font-black text-white mt-2">Mie Gacoan Super Pedas</h4>
                    <p className="text-xs text-zinc-300 mt-1 font-medium">Lengkap dengan taburan ayam gurih & pangsit goreng krispi.</p>
                  </div>
                </div>

                {/* Floating Badge 1 */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -right-4 bg-[#141013]/90 backdrop-blur-xl border border-white/15 px-4 py-3 rounded-2xl flex items-center gap-3 z-20 shadow-2xl"
                >
                  <div className="w-9 h-9 bg-rose-600/20 rounded-full flex items-center justify-center text-rose-500 font-bold">
                    🌶️
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-xs">Level 0 - 8</p>
                    <p className="text-[10px] text-zinc-400">Pilih Kepedasanmu</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2 */}
                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-[#141013]/90 backdrop-blur-xl border border-white/15 px-4 py-3 rounded-2xl flex items-center gap-3 z-20 shadow-2xl"
                >
                  <div className="text-left">
                    <div className="flex gap-0.5 text-amber-400 mb-0.5">
                      {[...Array(5)].map((_,i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <p className="text-white font-bold text-xs">Es Gobak Sodor</p>
                    <p className="text-[10px] text-rose-400 font-black">Hanya Rp 12.000</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BESTSELLERS SHOWCASE */}
        <section id="bestseller" className="py-24 px-6 relative bg-zinc-950/60 border-y border-white/5">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-2 text-rose-500 text-xs font-black tracking-widest uppercase mb-3">
                  <Flame className="w-4 h-4" /> GACOAN RECOMMENDED
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-serif font-black tracking-tight text-white">
                  Menu Favorit Pelanggan
                </motion.h2>
              </div>
              <p className="text-zinc-400 text-sm max-w-sm leading-relaxed font-light">Sajian favorit jutaan masyarakat Indonesia dengan racikan mie pedas manis/gurih dan dimsum lezat dipadu es segar.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800", 
                  name: "Mie Gacoan (Lv. 1 - 8)", 
                  price: "10.000",
                  badge: "Must Try (Manis Pedas)",
                  desc: "Mie manis pedas gurih khas Gacoan disajikan dengan taburan ayam cincang halus, daun bawang segar, dan 2 pangsit goreng krispi." 
                },
                { 
                  img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800", 
                  name: "Mie Hompimpa (Lv. 1 - 8)", 
                  price: "10.000",
                  badge: "Asin Pedas Gurih",
                  desc: "Mie asin pedas nagih bertabur cabe asli, cincangan daging ayam pilihan, dan topping pangsit krispi super renyah." 
                },
                { 
                  img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800", 
                  name: "Pangsit Goreng & Udang Keju", 
                  price: "12.000",
                  badge: "Dimsum Favorit",
                  desc: "Dimsum olahan udang keju lumer & pangsit goreng jumbo krispi renyah dengan isian daging gurih dipadu saus asam manis khas Gacoan." 
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group bg-[#131013] border border-white/5 hover:border-rose-500/40 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 shadow-xl"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]" />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                      {item.badge}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">{item.name}</h3>
                        <span className="text-rose-400 font-serif font-black text-base">Rp {item.price}</span>
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-6">{item.desc}</p>
                    </div>
                    <a 
                      href={`https://wa.me/${phone}?text=${encodeURIComponent(`Halo Mie Gacoan Tulungagung, saya mau pesan menu favorit: *${item.name}* (Rp ${item.price}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white/5 group-hover:bg-rose-600 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-center border border-white/10 group-hover:border-transparent transition-all shadow-md"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= GACOAN LEVEL & ORDER LAB ================= */}
        <section id="customizer" className="py-24 px-6 bg-[#0f0c0f] border-y border-white/5 relative">
          <div className="absolute left-0 bottom-10 w-[350px] h-[350px] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs text-rose-500 uppercase tracking-[0.3em] font-extrabold mb-3">Interactive Order Lab</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Gacoan Level & Order Customizer</h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto mt-4">
                Pilih racikan mi favorit Anda, tentukan tingkat kepedasan, serta tambahkan dimsum & es segar secara langsung!
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Customizer Panel Left */}
              <div className="lg:col-span-8 bg-[#151115] border border-white/10 rounded-3xl p-6 md:p-8 space-y-7 text-left">
                
                {/* 1. Noodle Type */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-3">1. Pilih Varian Mie Gacoan:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Mie Gacoan (Manis Pedas)", desc: "Kecap manis + cabai asli" },
                      { name: "Mie Hompimpa (Asin Pedas)", desc: "Gurih asin + cabai segar" },
                      { name: "Mie Suit (Gurih No Pedas)", desc: "Cocok untuk anak-anak & mild" }
                    ].map(n => (
                      <button
                        key={n.name}
                        onClick={() => setNoodleType(n.name)}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          noodleType === n.name
                            ? "bg-rose-600 text-white border-transparent shadow-lg shadow-rose-600/30"
                            : "bg-black/40 text-zinc-400 border-white/5 hover:bg-white/5"
                        }`}
                      >
                        <span className="text-xs font-bold block">{n.name.split(" ")[0]} {n.name.split(" ")[1]}</span>
                        <span className="text-[10px] opacity-80 mt-0.5 block">{n.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Spicy Level Selector */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">2. Tingkat Kepedasan:</label>
                    <span className="text-sm text-rose-500 font-extrabold bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                      🔥 Level {spicyLevel} {spicyLevel >= 8 && "(Super Pedas)"}
                    </span>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {[0, 1, 2, 3, 4, 6, 8].map(lvl => (
                      <button
                        key={lvl}
                        onClick={() => setSpicyLevel(lvl)}
                        className={`py-3 rounded-xl font-black text-xs transition-all border ${
                          spicyLevel === lvl
                            ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white border-transparent shadow-md scale-105"
                            : "bg-black/30 text-zinc-400 border-white/5 hover:bg-white/5"
                        }`}
                      >
                        Lvl {lvl}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-2 font-medium">Level 1 - 6 (Rp 10.000) | Level 8 (Rp 14.000)</p>
                </div>

                {/* 3. Dimsum Multi-Selector */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-3">3. Tambah Pilihan Dimsum:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {dimsumList.map(dimsum => {
                      const isSelected = selectedDimsum.includes(dimsum.id);
                      return (
                        <button
                          key={dimsum.id}
                          onClick={() => handleToggleDimsum(dimsum.id)}
                          className={`p-3 rounded-xl border text-left flex flex-col justify-between h-20 transition-all ${
                            isSelected
                              ? "bg-rose-600/15 border-rose-500 text-white shadow-md"
                              : "bg-black/30 border-white/5 text-zinc-400 hover:bg-white/5"
                          }`}
                        >
                          <span className="text-[10px] font-bold block leading-tight">{dimsum.name}</span>
                          <span className="text-[10px] text-amber-400 font-black">+Rp {dimsum.price.toLocaleString("id-ID")}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Beverage Selector */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-3">4. Pilihan Minuman Segar:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 flex-wrap">
                    {beverageList.map(bev => (
                      <button
                        key={bev.id}
                        onClick={() => setSelectedBeverage(bev.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedBeverage === bev.id
                            ? "bg-amber-500/20 border-amber-500 text-amber-300"
                            : "bg-black/30 border-white/5 text-zinc-400 hover:bg-white/5"
                        }`}
                      >
                        <span className="text-[10px] font-bold block">{bev.name}</span>
                        <span className="text-[9px] text-zinc-400">Rp {bev.price.toLocaleString("id-ID")}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary Right */}
              <div className="lg:col-span-4 bg-[#151115] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between text-left shadow-2xl">
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-white border-b border-white/10 pb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-rose-500" />
                    Ringkasan Pesanan
                  </h4>
                  
                  <div className="space-y-4 text-xs text-zinc-300 font-medium">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-zinc-400 font-bold">Varian Mie:</span>
                      <span className="text-white text-right font-bold">{noodleType.split(" ")[0]} {noodleType.split(" ")[1]}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-zinc-400 font-bold">Tingkat Pedas:</span>
                      <span className="text-rose-400 font-black">Level {spicyLevel} ({spicyLevel >= 8 ? "Rp 14.000" : "Rp 10.000"})</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-zinc-400 font-bold">Dimsum:</span>
                      <span className="text-white text-right max-w-[140px] truncate">
                        {selectedDimsum.map(id => dimsumList.find(d => d.id === id)?.name.split(" ")[0]).join(", ") || "Tanpa Dimsum"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-zinc-400 font-bold">Minuman Segar:</span>
                      <span className="text-amber-400 font-bold">{beverageList.find(b => b.id === selectedBeverage)?.name}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="bg-[#0c0a0c] border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Total Estimasi Harga</p>
                      <h4 className="text-2xl font-black text-rose-400 font-serif">
                        Rp {calculateCustomGacoanPrice().toLocaleString("id-ID")}
                      </h4>
                    </div>
                  </div>

                  <button
                    onClick={handleOrderCustomGacoan}
                    className="w-full bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 text-white font-black text-xs tracking-widest py-4 rounded-xl hover:shadow-xl hover:shadow-rose-600/30 transition-all flex items-center justify-center gap-2 uppercase"
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
        <section id="location" className="py-24 px-6 relative bg-zinc-950/70 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch text-left">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#131013] p-8 lg:p-12 rounded-3xl border border-white/10 flex flex-col justify-center shadow-2xl"
            >
              <h2 className="text-xs text-rose-500 uppercase tracking-[0.3em] font-extrabold mb-3">Cabang Resmi</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-black mb-6 tracking-tight text-white">Mie Gacoan Tulungagung</h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
                Kunjungi outlet resmi kami di Tulungagung. Dilengkapi fasilitas area indoor AC, outdoor santai, musholla, parkiran luas, dan wifi gratis.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 bg-black/40 p-4 rounded-2xl border border-white/5">
                  <MapPin className="text-rose-500 w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-bold text-xs text-white">Alamat Outlet</p>
                    <p className="text-[11px] text-zinc-400 leading-normal">{data.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-black/40 p-4 rounded-2xl border border-white/5">
                  <Clock className="text-amber-400 w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-bold text-xs text-white">Jam Operasional</p>
                    <p className="text-[11px] text-zinc-400 leading-normal">{data.hours}</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/maps?q=Mie%20Gacoan%20Tulungagung"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white text-zinc-950 text-xs font-black uppercase tracking-widest text-center py-4 rounded-xl hover:bg-rose-500 hover:text-white transition-all shadow-md"
              >
                Petunjuk Arah Google Maps
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[380px] md:h-auto rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
            >
              <iframe
                className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src="https://maps.google.com/maps?q=Mie%20Gacoan%20Tulungagung&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </motion.div>
            
          </div>
        </section>

        {/* INFO KARIR (KARIR SECTION) */}
        <section id="karir" className="py-24 px-6 bg-[#0c0a0c] relative border-t border-white/5">
          <div className="max-w-7xl mx-auto text-left">
            <div className="bg-gradient-to-r from-rose-950/50 via-[#151115] to-zinc-900 border border-rose-500/20 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-rose-500 text-xs font-bold uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                    Join Our Dynamic Team
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">Karir & Lowongan Kerja Gacoan</h2>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                    Tertarik mengembangkan karir di industri F&B terbesar di Indonesia? Mie Gacoan Tulungagung rutin membuka kesempatan lowongan pekerjaan untuk posisi Crew Resto, Kasir, Kitchen, dan Supervisor.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {["Crew Resto / Stand", "Kasir & Floor", "Kitchen Staff", "Store Supervisor"].map((job, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/10 text-xs text-zinc-300 px-3 py-1.5 rounded-lg font-bold">
                        💼 {job}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent("Halo Tim HRD Mie Gacoan Tulungagung, saya bermaksud menanyakan info lowongan kerja / karir yang tersedia.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-gradient-to-r from-rose-600 to-amber-500 text-white font-black text-xs uppercase tracking-widest py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-rose-600/30 transition-all text-center flex items-center justify-center gap-2"
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

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6 text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoMieGacoan} alt="Mie Gacoan Logo" className="h-8 w-auto object-contain" />
            <span className="text-base font-black tracking-tight text-white font-serif">
              MIE GACOAN TULUNGAGUNG
            </span>
          </div>
          
          <div className="flex gap-6 text-[10px] tracking-widest uppercase font-bold text-zinc-500">
            <a href="#bestseller" className="hover:text-white transition-colors">Menu Favorit</a>
            <a href="#customizer" className="hover:text-white transition-colors">Custom Level</a>
            <a href="#location" className="hover:text-white transition-colors">Cabang</a>
            <a href="#karir" className="hover:text-white transition-colors">Karir</a>
          </div>
          
          <div className="text-zinc-600 text-xs font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} Mie Gacoan Tulungagung. Redesign by GapaiDigital.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ========================= */
/* 🍽️ MENU SECTION FILTER */
/* ========================= */

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
      tags: ["Manis Pedas", "Best Seller"]
    },
    {
      name: "Mie Gacoan Level 8",
      price: "14.000",
      category: "mie",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800",
      tags: ["Super Pedas Cabai Asli"]
    },
    {
      name: "Mie Hompimpa Level 1 - 6",
      price: "10.000",
      category: "mie",
      img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
      tags: ["Asin Pedas Gurih"]
    },
    {
      name: "Mie Suit (No Pedas)",
      price: "10.000",
      category: "mie",
      img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
      tags: ["Gurih Mild", "Anak & Remaja"]
    },
    {
      name: "Pangsit Goreng (3 Pcs)",
      price: "12.000",
      category: "dimsum",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
      tags: ["Krispi Renyah", "Favorit"]
    },
    {
      name: "Udang Keju (3 Pcs)",
      price: "12.000",
      category: "dimsum",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
      tags: ["Keju Lumer", "Recommended"]
    },
    {
      name: "Udang Rambutan (3 Pcs)",
      price: "12.000",
      category: "dimsum",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
      tags: ["Olahan Udang Gurih"]
    },
    {
      name: "Siomay Dimsum (3 Pcs)",
      price: "10.000",
      category: "dimsum",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
      tags: ["Kukus Lembut"]
    },
    {
      name: "Es Gobak Sodor",
      price: "12.000",
      category: "es",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      tags: ["Buah & Jelly", "Segar Pedas Loss"]
    },
    {
      name: "Es Teklek",
      price: "10.000",
      category: "es",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      tags: ["Segar Manis"]
    },
    {
      name: "Es Petak Sumpet",
      price: "10.000",
      category: "es",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      tags: ["Susu Segar Jelly"]
    },
    {
      name: "Es Sluku Bathok",
      price: "10.000",
      category: "es",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      tags: ["Moka & Susu"]
    },
  ];

  const filteredMenus = activeCategory === "semua" 
    ? menus 
    : menus.filter(m => m.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-[#0b090a] relative">
      <div className="max-w-7xl mx-auto text-left">
        <div className="text-center mb-12">
          <p className="text-xs text-rose-500 uppercase tracking-[0.3em] font-extrabold mb-3">Katalog Lengkap</p>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-white">Daftar Menu Gacoan</h2>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30 scale-105"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#131013] border border-white/5 hover:border-rose-500/30 rounded-2xl overflow-hidden flex flex-col justify-between p-4 transition-all group"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90" />
                  <div className="absolute top-2 left-2 flex gap-1">
                    {item.tags.map((t, idx) => (
                      <span key={idx} className="bg-black/75 backdrop-blur-md text-amber-400 text-[9px] font-bold px-2 py-0.5 rounded-md border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-bold text-base text-white group-hover:text-rose-400 transition-colors mb-1">{item.name}</h3>
                <p className="text-rose-400 font-serif font-black text-sm mb-4">Rp {item.price}</p>
              </div>

              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(`Halo Mie Gacoan Tulungagung, saya mau pesan: *${item.name}* (Rp ${item.price}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 hover:bg-rose-600 text-white text-xs font-bold py-2.5 rounded-xl uppercase tracking-wider text-center transition-colors border border-white/10"
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
