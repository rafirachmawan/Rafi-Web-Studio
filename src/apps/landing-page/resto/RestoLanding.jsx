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
  RotateCcw
} from "lucide-react";

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
  
  const phone = "6285707185783"; // Rafi's developer contact

  // Interactive Ramen Builder States
  const [broth, setBroth] = useState("Original Tonkotsu (Pork-free)");
  const [noodle, setNoodle] = useState("Keriting (Curly)");
  const [spicyLevel, setSpicyLevel] = useState(2);
  const [extraToppings, setExtraToppings] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toppingsList = [
    { id: "ajitama", name: "Ajitama Egg", price: 5000 },
    { id: "beef", name: "Extra Beef Slice", price: 12000 },
    { id: "nori", name: "Extra Nori (3 pcs)", price: 3000 },
    { id: "corn", name: "Sweet Corn", price: 2000 },
  ];

  const calculateCustomRamenPrice = () => {
    let basePrice = 28000; // Base ramen price
    if (broth === "Spicy Tantanmen") basePrice += 4000;
    
    const toppingsPrice = extraToppings.reduce((total, toppingId) => {
      const topping = toppingsList.find(t => t.id === toppingId);
      return total + (topping ? topping.price : 0);
    }, 0);

    return basePrice + toppingsPrice;
  };

  const handleToggleTopping = (toppingId) => {
    if (extraToppings.includes(toppingId)) {
      setExtraToppings(extraToppings.filter(id => id !== toppingId));
    } else {
      setExtraToppings([...extraToppings, toppingId]);
    }
  };

  const handleOrderCustomRamen = () => {
    const toppingsNames = extraToppings.map(id => toppingsList.find(t => t.id === id)?.name).join(", ") || "Tanpa Extra";
    const totalPrice = calculateCustomRamenPrice();
    const message = `Halo Niko-Niko Ramen Kediri, saya ingin memesan *Custom Ramen Bowl* racikan sendiri:
- *Kuah Broth*: ${broth}
- *Tipe Mie*: ${noodle}
- *Level Pedas*: Level ${spicyLevel}
- *Extra Toppings*: ${toppingsNames}
- *Total Harga*: Rp ${totalPrice.toLocaleString("id-ID")}

Mohon diproses untuk pengiriman. Terima kasih!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-[#0b0909] text-stone-200 min-h-screen font-sans selection:bg-red-600/30 overflow-x-hidden">
      
      {/* JAPANESE RED GLOWS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-600/10 blur-[130px]" />
      </div>

      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#0b0909]/90 backdrop-blur-xl border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-lg shadow-red-600/25 font-black text-white text-base font-serif">
              ニコ
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white font-serif">
              NIKO-NIKO <span className="text-red-500">RAMEN</span>
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-bold text-stone-400">
            <a href="#bestseller" className="hover:text-red-500 transition-colors">Bestsellers</a>
            <a href="#customizer" className="hover:text-red-500 transition-colors">Custom Bowl</a>
            <a href="#menu" className="hover:text-red-500 transition-colors">Menu Utama</a>
            <a href="#about" className="hover:text-red-500 transition-colors">Tentang</a>
            <a href="#location" className="hover:text-red-500 transition-colors">Outlet</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={`https://wa.me/${phone}?text=Halo%20Niko-Niko%20Ramen%20Kediri%2C%20saya%20tertarik%20memesan%20ramen.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-red-600/25 transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            Order Now
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
              className="md:hidden absolute top-0 left-0 w-full bg-[#0b0909] flex flex-col pt-24 px-6 z-40 border-b border-white/5"
            >
              <div className="flex flex-col gap-6 text-lg font-bold uppercase tracking-widest">
                <a href="#bestseller" onClick={() => setMobileMenuOpen(false)} className="text-stone-300 hover:text-red-500 border-b border-white/5 pb-4">Bestsellers</a>
                <a href="#customizer" onClick={() => setMobileMenuOpen(false)} className="text-stone-300 hover:text-red-500 border-b border-white/5 pb-4">Custom Bowl</a>
                <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-stone-300 hover:text-red-500 border-b border-white/5 pb-4">Menu Utama</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-stone-300 hover:text-red-500 border-b border-white/5 pb-4">Tentang Kami</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-stone-300 hover:text-red-500 border-b border-white/5 pb-4">Outlet</a>
                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-500 text-white px-5 py-4 rounded-xl font-bold mt-4 text-xs tracking-widest uppercase"
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
        <section className="relative min-h-screen flex items-center pt-28 pb-12 px-6">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="relative z-10 lg:col-span-7 space-y-6"
            >
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-black uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5" />
                Pare - Kediri Ramen Spot
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-6xl md:text-7xl font-serif font-black leading-[1.1] text-white tracking-tighter">
                {data.hero?.title}
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-sm md:text-base text-stone-400 max-w-xl leading-relaxed font-light">
                {data.hero?.subtitle}
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#customizer"
                  className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase hover:shadow-xl hover:shadow-red-600/20 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  Racik Ramenmu
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#menu"
                  className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Lihat Menu
                </a>
              </motion.div>

              <motion.div variants={FADE_UP} className="mt-8 flex items-center gap-6 text-xs font-bold text-stone-400">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://randomuser.me/api/portraits/women/${30+i}.jpg`} className="w-10 h-10 rounded-full border-2 border-[#0b0909]" alt="Customer portrait" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#0b0909] bg-stone-800 flex items-center justify-center text-white font-bold text-xs z-10">
                    4k+
                  </div>
                </div>
                <div>
                  <div className="flex text-amber-500 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="uppercase tracking-wider">Favorit Pecinta Kuliner pare</p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE — HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex lg:col-span-5 relative items-center justify-center"
            >
              {/* Main ramen image */}
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-amber-500/10 blur-[60px] rounded-full" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&q=80&w=800"
                    alt="Niko Niko Ramen Bowl"
                    className="w-full h-[420px] object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0909]/70 via-transparent to-transparent" />
                </div>

                {/* Floating badge — Spicy Tantanmen */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -right-5 bg-[#161313]/90 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3.5 z-20 shadow-2xl"
                >
                  <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center text-red-500">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-xs">Spicy Tantanmen</p>
                    <p className="text-[10px] text-stone-400">Kuah Kental & Gurih</p>
                  </div>
                </motion.div>

                {/* Floating badge bottom — rating */}
                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-5 -left-5 bg-[#161313]/90 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3 z-20 shadow-2xl"
                >
                  <div className="text-left">
                    <div className="flex gap-0.5 text-amber-400 mb-0.5">
                      {[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="text-white font-bold text-xs">4.8 / 5.0</p>
                    <p className="text-[10px] text-stone-400">4k+ Pelanggan Puas</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BEST SELLER LIST */}
        <section id="bestseller" className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-2 text-red-500 text-xs font-bold tracking-widest uppercase mb-3">
                  <Flame className="w-4 h-4" /> NIKO'S RECOMMENDATIONS
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-serif font-black tracking-tighter">
                  Pare Outlet Best Sellers
                </motion.h2>
              </div>
              <p className="text-stone-400 text-sm max-w-sm leading-relaxed font-light">Tiga mangkuk legend yang selalu habis terjual setiap harinya. Diramu dengan kaldu gurih buatan Chef kami.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&q=80&w=800", 
                  name: "Chicken Tantanmen", 
                  price: "32.000",
                  desc: "Ramen kaldu wijen pedas bertekstur kental, irisan daging ayam juicy, telur ajitama setengah matang, nori, dan daun bawang segar." 
                },
                { 
                  img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800", 
                  name: "Gyudon Beef Donburi", 
                  price: "36.000",
                  desc: "Nasi pulen Jepang disajikan dengan irisan daging sapi premium tipis yang dimasak dengan bawang bombay dan saus shoyu manis gurih." 
                },
                { 
                  img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800", 
                  name: "Original Shoyu Ramen", 
                  price: "28.000",
                  desc: "Ramen kuah kecap Jepang jernih aromatik klasik, chashu ayam panggang, irisan rebung bambu renyah, nori, dan telur rebus ajitama." 
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group bg-[#161313] border border-white/5 hover:border-red-500/30 rounded-3xl overflow-hidden flex flex-col transition-all duration-300"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]" />
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                      Must Try
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                        <span className="text-amber-500 font-serif font-black text-sm">Rp {item.price}</span>
                      </div>
                      <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed mb-6">{item.desc}</p>
                    </div>
                    <a 
                      href={`https://wa.me/${phone}?text=${encodeURIComponent(`Halo Niko-Niko Ramen Kediri, saya ingin pesan Best Seller: *${item.name}* (Rp ${item.price}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white/5 group-hover:bg-red-600 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-center border border-white/10 group-hover:border-transparent transition-all"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= RAMEN BOWL CUSTOMIZER [NEW FEATURE] ================= */}
        <section id="customizer" className="py-24 px-6 bg-[#0f0c0c] border-y border-white/5 relative">
          <div className="absolute left-0 bottom-10 w-[300px] h-[300px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs text-red-500 uppercase tracking-[0.3em] font-extrabold mb-4">Ramen Lab</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Ramen Customizer</h3>
              <p className="text-stone-400 text-xs sm:text-sm max-w-md mx-auto mt-4">
                Racik semangkuk ramen idaman Anda! Tentukan kuah broth, bentuk mi, tingkat kepedasan, dan topping extra favorit Anda di bawah.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Customizer Panel Left */}
              <div className="lg:col-span-8 bg-[#161313] border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 text-left">
                {/* Broth Selector */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">1. Pilih Kuah Broth:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Original Tonkotsu (Pork-free)", "Spicy Tantanmen", "Classic Shoyu", "Creamy Miso"].map(b => (
                      <button
                        key={b}
                        onClick={() => setBroth(b)}
                        className={`py-3 px-2 rounded-xl text-[10px] font-bold transition-all border ${
                          broth === b
                            ? "bg-red-600 text-white border-transparent shadow-lg shadow-red-600/20"
                            : "bg-black/30 text-stone-400 border-white/5 hover:bg-white/5"
                        }`}
                      >
                        {b.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Noodle Selector */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">2. Jenis Mie:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Keriting (Curly)", "Lurus (Thin-Straight)"].map(n => (
                      <button
                        key={n}
                        onClick={() => setNoodle(n)}
                        className={`py-3 px-2 rounded-xl text-[10px] font-bold transition-all border ${
                          noodle === n
                            ? "bg-red-600 text-white border-transparent"
                            : "bg-black/30 text-stone-400 border-white/5 hover:bg-white/5"
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Spicy Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">3. Tingkat Kepedasan:</label>
                    <span className="text-xs text-red-500 font-extrabold">Level {spicyLevel}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={spicyLevel}
                    onChange={(e) => setSpicyLevel(parseInt(e.target.value))}
                    className="w-full accent-red-600 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-zinc-500 font-bold px-1 mt-1">
                    <span>Lvl 0 (Mild)</span>
                    <span>Lvl 2 (Medium)</span>
                    <span>Lvl 5 (Extremely Spicy)</span>
                  </div>
                </div>

                {/* Toppings Multi-selector */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">4. Tambah Extra Topping:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {toppingsList.map(topping => {
                      const isSelected = extraToppings.includes(topping.id);
                      return (
                        <button
                          key={topping.id}
                          onClick={() => handleToggleTopping(topping.id)}
                          className={`p-3 rounded-xl border text-left flex flex-col justify-between h-20 transition-all ${
                            isSelected
                              ? "bg-red-600/10 border-red-600 text-white"
                              : "bg-black/30 border-white/5 text-stone-400 hover:bg-white/5"
                          }`}
                        >
                          <span className="text-[10px] font-bold block">{topping.name}</span>
                          <span className="text-[9px] text-amber-500 font-black">+Rp {topping.price.toLocaleString("id-ID")}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Price & Summary Checkout Right */}
              <div className="lg:col-span-4 bg-[#161313] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between text-left">
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-white border-b border-white/5 pb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    Custom Bowl Summary
                  </h4>
                  
                  <div className="space-y-3.5 text-xs text-stone-300 font-medium">
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-bold">Ramen Base:</span>
                      <span>Original Ramen (Rp 28.000)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-bold">Kuah Broth:</span>
                      <span className="text-white">{broth} {broth === "Spicy Tantanmen" && "(+Rp 4.000)"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-bold">Jenis Mie:</span>
                      <span className="text-white">{noodle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-bold">Rasa Pedas:</span>
                      <span className="text-red-500 font-bold">Level {spicyLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-bold">Extra Toppings:</span>
                      <span className="text-white text-right max-w-[150px] truncate">
                        {extraToppings.map(id => toppingsList.find(t => t.id === id)?.name).join(", ") || "-"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="bg-[#0C0C0C] border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Total Racikan</p>
                      <h4 className="text-xl sm:text-2xl font-black text-amber-400">
                        Rp {calculateCustomRamenPrice().toLocaleString("id-ID")}
                      </h4>
                    </div>
                  </div>

                  <button
                    onClick={handleOrderCustomRamen}
                    className="w-full bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold text-xs tracking-widest py-4 rounded-xl hover:shadow-lg hover:shadow-red-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={14} />
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED MENU LIST WITH FILTER */}
        <RestoSection phone={phone} />

        {/* ABOUT / ATMOSPHERE SECTION */}
        <section id="about" className="py-24 px-6 bg-[#0f0c0c] border-y border-white/5 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT: Images collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden row-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&q=80&w=600"
                    alt="Suasana Kedai Ramen"
                    className="w-full h-full object-cover min-h-[320px] brightness-75"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&q=80&w=600"
                    alt="Ramen Bowl"
                    className="w-full h-[150px] object-cover brightness-75"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&q=80&w=600"
                    alt="Gyoza"
                    className="w-full h-[150px] object-cover brightness-75"
                  />
                </div>
              </div>
              {/* Label overlay */}
              <div className="absolute bottom-4 left-4 bg-[#0b0909]/80 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl">
                <p className="text-white font-bold text-sm">Open Kitchen</p>
                <p className="text-stone-400 text-[10px]">Lihat langsung proses pembuatan ramen Anda</p>
              </div>
            </motion.div>

            {/* RIGHT: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-left"
            >
              <div>
                <p className="text-xs text-red-500 uppercase tracking-[0.3em] font-extrabold mb-3">Tentang Kami</p>
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tighter text-white leading-tight">
                  Kedai Ramen Jepang
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400"> di Jantung Pare</span>
                </h2>
              </div>

              <p className="text-stone-400 text-sm leading-relaxed">
                Niko-Niko Ramen hadir dengan konsep kedai khas Jepang yang estetik dan cozy, dihiasi ornamen pohon sakura dan
                area <strong className="text-white">open kitchen</strong> yang memukau. Cocok untuk makan santai, ngerjain tugas,
                atau hangout bersama teman di Kampung Inggris, Pare, Kediri.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🌸", title: "Dekorasi Sakura", desc: "Aesthetic & Instagrammable" },
                  { icon: "🍜", title: "Kuah Kaldu Autentik", desc: "Tanpa MSG berlebihan" },
                  { icon: "🪑", title: "Pilihan Tempat Duduk", desc: "Mini bar, lesehan & meja panjang" },
                  { icon: "💰", title: "Harga Terjangkau", desc: "Mulai Rp 21.000 saja" },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#161313] border border-white/5 p-4 rounded-2xl"
                  >
                    <span className="text-2xl mb-2 block">{f.icon}</span>
                    <p className="text-white font-bold text-xs">{f.title}</p>
                    <p className="text-stone-500 text-[10px] mt-0.5">{f.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-6 pt-2">
                {[
                  { value: "4k+", label: "Pelanggan" },
                  { value: "4.8★", label: "Rating" },
                  { value: "15+", label: "Menu" },
                ].map((s, i) => (
                  <div key={i} className="text-left">
                    <p className="text-2xl font-black text-white font-serif">{s.value}</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wider font-bold">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="reviews" className="py-24 px-6 relative overflow-hidden bg-[#161313]/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs text-red-500 uppercase tracking-[0.3em] font-extrabold mb-4">Testimonials</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-black mb-4">Apa Kata Pecinta Ramen Kediri?</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Dimas Pratama", text: "Niko-Niko Pare ini beneran hidden gem. Kuah Chicken Tantanmen-nya kental gurih, pedasnya mantap. Mirip ramen mahal di mall kota besar!" },
                { name: "Larasati Putri", text: "Rekomendasi banget buat anak Kampung Inggris. Harganya sangat bersahabat buat kantong pelajar, porsinya kenyang dan rasanya authentic Jepang." },
                { name: "Wahyu Hidayat", text: "Daging sapinya di Beef Donburi manis gurih pas banget di lidah. Pelayanannya cepat dan ramah sekali. Sukses terus Niko-Niko Pare!" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#161313] p-8 rounded-3xl border border-white/5 text-left"
                >
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light italic leading-relaxed mb-8">"{item.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center font-bold text-white text-xs">
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-white">{item.name}</p>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Local Guide Kediri</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION Pare, Kediri */}
        <section id="location" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch text-left">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#161313] p-10 lg:p-12 rounded-3xl border border-white/5 flex flex-col justify-center"
            >
              <h2 className="text-xs text-red-500 uppercase tracking-[0.3em] font-extrabold mb-4">Pare Outlet</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-black mb-6 tracking-tighter text-white">Mampir ke Ramen Bar Kami</h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
                Nikmati atmosfer kedai ramen Jepang yang estetik dan cozy di pusat Pare, Kediri. Sangat cocok untuk makan malam santai bersama teman-teman.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 bg-black/30 p-4 rounded-2xl">
                  <MapPin className="text-red-500 w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-bold text-xs text-white">Alamat Outlet</p>
                    <p className="text-[11px] text-zinc-400 leading-normal">Jl. Anyelir No. 18, Kec. Pare, Kabupaten Kediri, Jawa Timur</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-black/30 p-4 rounded-2xl">
                  <Clock className="text-red-500 w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-bold text-xs text-white">Jam Operasional</p>
                    <p className="text-[11px] text-zinc-400 leading-normal">Sen–Sab: 12.30 – 21.30 WIB <span className="text-red-400">(Minggu Tutup)</span></p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/maps?q=Niko%20Niko%20Ramen%20Pare%20Kediri"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white text-stone-950 text-xs font-bold uppercase tracking-widest text-center py-4 rounded-xl hover:bg-stone-200 transition-colors"
              >
                Buka Petunjuk Arah Google Maps
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
                src="https://maps.google.com/maps?q=Niko%20Niko%20Ramen%20Pare%20Kediri&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </motion.div>
            
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/5 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center font-serif text-white text-xs font-black">
              ニコ
            </div>
            <span className="text-base font-black tracking-tighter text-white">
              NIKO-NIKO RAMEN KEDIRI
            </span>
          </div>
          
          <div className="flex gap-6 text-[10px] tracking-widest uppercase font-bold text-stone-500">
            <a href="#bestseller" className="hover:text-white transition-colors">Bestsellers</a>
            <a href="#customizer" className="hover:text-white transition-colors">Custom Bowl</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu Utama</a>
          </div>
          
          <div className="text-stone-600 text-xs font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} Niko-Niko Ramen Pare. Website Developed by GapaiDigital.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ========================= */
/* 🍽️ MENU SECTION */
/* ========================= */

function RestoSection({ phone }) {
  const [activeCategory, setActiveCategory] = useState("semua");

  const categories = [
    { id: "semua", label: "Semua Menu" },
    { id: "ramen", label: "Signature Ramen" },
    { id: "donburi", label: "Rice Bowl" },
    { id: "camilan", label: "Snacks / Gyoza" },
    { id: "minuman", label: "Japanese Drinks" },
  ];

  const menus = [
    {
      name: "Chicken Tantanmen",
      price: "32.000",
      category: "ramen",
      img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&q=80&w=800",
      tags: ["Pedas Gurih", "Bestseller"]
    },
    {
      name: "Beef Tantanmen Special",
      price: "38.000",
      category: "ramen",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800",
      tags: ["Daging Sapi Slice", "Recommended"]
    },
    {
      name: "Original Shoyu Ramen",
      price: "28.000",
      category: "ramen",
      img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
      tags: ["Kuah Shoyu Jernih"]
    },
    {
      name: "Chicken Shio Ramen",
      price: "25.000",
      category: "ramen",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800",
      tags: ["Ringan & Segar"]
    },
    {
      name: "Gyudon (Beef Donburi)",
      price: "35.000",
      category: "donburi",
      img: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&q=80&w=800",
      tags: ["Nasi Jepang", "Recommended"]
    },
    {
      name: "Oyakodon",
      price: "28.000",
      category: "donburi",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
      tags: ["Ayam & Telur"]
    },
    {
      name: "Chicken Donburi",
      price: "25.000",
      category: "donburi",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
      tags: ["Hemat & Kenyang"]
    },
    {
      name: "Pan-Fried Gyoza (5 pcs)",
      price: "20.000",
      category: "camilan",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
      tags: ["Garing Gurih"]
    },
    {
      name: "Crispy Takoyaki (6 pcs)",
      price: "18.000",
      category: "camilan",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800",
      tags: ["Topping Katsuobushi"]
    },
    {
      name: "Edamame Salted",
      price: "12.000",
      category: "camilan",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
      tags: ["Light Snack"]
    },
    {
      name: "Iced Matcha Latte",
      price: "15.000",
      category: "minuman",
      img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=800",
      tags: ["Creamy Matcha"]
    },
    {
      name: "Traditional Ocha Iced",
      price: "6.000",
      category: "minuman",
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
      tags: ["Free Refill"]
    },
    {
      name: "Japanese Lemonade",
      price: "12.000",
      category: "minuman",
      img: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&q=80&w=800",
      tags: ["Segar & Asam"]
    },
  ];

  const filteredMenus = activeCategory === "semua" 
    ? menus 
    : menus.filter((menu) => menu.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 relative z-10 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-xs text-red-500 uppercase tracking-[0.3em] font-extrabold mb-4">Our Menu</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Eksplor Menu Niko-Niko</h3>
          </div>

          <div className="flex flex-wrap gap-2 p-1.5 bg-[#161313] border border-white/5 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat.id ? "text-white" : "text-stone-400 hover:text-white"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategoryResto"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 rounded-xl shadow-md"
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
              const wa = `https://wa.me/${phone}?text=${encodeURIComponent(`Halo Niko-Niko Ramen Pare Kediri, saya ingin pesan: *${menu.name}* (Rp ${menu.price}).`)}`;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={menu.name}
                  className="group bg-[#161313] border border-white/5 hover:border-red-500/30 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={menu.img}
                        alt={menu.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {menu.tags.map((tag, idx) => (
                          <span key={idx} className="bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{menu.name}</h3>
                      <p className="text-amber-500 font-serif font-black text-xl">Rp {menu.price}</p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-red-600 text-white border border-white/10 hover:border-transparent py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Order Sekarang
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
