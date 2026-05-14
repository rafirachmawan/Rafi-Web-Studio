import { hotel } from "../../../data/hotel";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Users,
  MapPin,
  Star,
  Coffee,
  Wifi,
  Waves,
  CarFront,
  ChevronRight,
  Menu,
  X,
  Bed,
  GlassWater,
  Phone
} from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function HotelLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = hotel || { name: "Hotel Luxury", hero: { title: "Experience Elegance", subtitle: "Your perfect getaway." } };
  const phone = "628123456789";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] text-[#e5e5e5] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl tracking-[0.2em] font-light uppercase"
          >
            <span className="text-amber-400">LUXURY</span> HOTEL
          </motion.h1>

          <div className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase font-light">
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#room" className="hover:text-amber-400 transition-colors">Rooms</a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
            <a href="#location" className="hover:text-amber-400 transition-colors">Location</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            href={`https://wa.me/${phone}`}
            className="hidden md:inline-block border border-amber-400/50 text-amber-400 px-6 py-2.5 rounded-full text-sm uppercase tracking-wider hover:bg-amber-400 hover:text-black transition-all duration-300"
          >
            Reserve
          </motion.a>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-white relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#050505] flex flex-col items-center justify-center gap-8 z-40"
            >
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-light uppercase tracking-widest hover:text-amber-400">Experience</a>
              <a href="#room" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-light uppercase tracking-widest hover:text-amber-400">Rooms</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-light uppercase tracking-widest hover:text-amber-400">Gallery</a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-light uppercase tracking-widest hover:text-amber-400">Location</a>
              <a
                href={`https://wa.me/${phone}`}
                className="mt-8 border border-amber-400 text-amber-400 px-8 py-3 rounded-full uppercase tracking-widest"
              >
                Reserve Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1542314831-c6a4d27ce66f?auto=format&fit=crop&q=80&w=2000"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="relative z-10 text-center max-w-4xl mt-20"
          >
            <motion.p variants={FADE_UP} className="text-amber-400 tracking-[0.3em] uppercase text-sm mb-6">
              Welcome to the extraordinary
            </motion.p>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 text-white drop-shadow-lg">
              {data.hero?.title || "Discover True Elegance"}
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-12">
              {data.hero?.subtitle || "A sanctuary of unparalleled luxury and sophisticated comfort awaits you."}
            </motion.p>
          </motion.div>
        </section>

        {/* BOOKING WIDGET */}
        <section className="relative z-20 px-6 -mt-24 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/50"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                <CalendarDays className="text-amber-400 w-6 h-6" />
                <div className="w-full">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Check In</p>
                  <input type="date" className="bg-transparent w-full text-white outline-none font-light [color-scheme:dark]" />
                </div>
              </div>
              <div className="hidden md:block w-px bg-white/10 my-2" />
              <div className="flex-1 bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                <CalendarDays className="text-amber-400 w-6 h-6" />
                <div className="w-full">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Check Out</p>
                  <input type="date" className="bg-transparent w-full text-white outline-none font-light [color-scheme:dark]" />
                </div>
              </div>
              <div className="hidden md:block w-px bg-white/10 my-2" />
              <div className="flex-1 bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Users className="text-amber-400 w-6 h-6" />
                <div className="w-full">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Guests</p>
                  <select className="bg-transparent w-full text-white outline-none font-light appearance-none cursor-pointer">
                    <option className="bg-[#0a0a0a]">1 Guest</option>
                    <option className="bg-[#0a0a0a]">2 Guests</option>
                    <option className="bg-[#0a0a0a]">3 Guests</option>
                    <option className="bg-[#0a0a0a]">4+ Guests</option>
                  </select>
                </div>
              </div>
              
              <a 
                href={`https://wa.me/${phone}`}
                className="bg-amber-400 hover:bg-amber-500 text-black rounded-xl px-8 py-4 flex items-center justify-center font-medium tracking-wide transition-all uppercase text-sm"
              >
                Check Availability
              </a>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-sm text-amber-400 uppercase tracking-[0.3em] mb-4">The Experience</h2>
              <h3 className="text-3xl md:text-5xl font-light text-white">Redefining Luxury Stay</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Bed, title: "Artfully Designed", desc: "Setiap kamar dirancang dengan detail sempurna untuk kenyamanan maksimal." },
                { icon: Star, title: "World-Class Service", desc: "Pelayanan personal 24 jam yang mengantisipasi setiap kebutuhan Anda." },
                { icon: MapPin, title: "Prime Location", desc: "Berada di jantung kota, dekat dengan pusat bisnis dan hiburan." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="group p-8 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors duration-500 text-center"
                >
                  <div className="w-16 h-16 mx-auto border border-amber-400/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-500">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="text-xl font-light text-white mb-4">{title}</h4>
                  <p className="text-gray-400 font-light leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROOMS */}
        <HotelSection />

        {/* FACILITIES */}
        <section className="py-24 px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-2xl mt-8" alt="Facility 1" />
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-2xl" alt="Facility 2" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm text-amber-400 uppercase tracking-[0.3em] mb-4">Amenities</h2>
              <h3 className="text-3xl md:text-5xl font-light text-white mb-8">Unrivaled Facilities</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-10">
                Nikmati fasilitas kelas dunia yang dirancang khusus untuk memanjakan dan menyegarkan tubuh serta pikiran Anda selama menginap.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Waves, label: "Infinity Pool" },
                  { icon: Coffee, label: "Gourmet Dining" },
                  { icon: GlassWater, label: "Lounge Bar" },
                  { icon: Wifi, label: "High-Speed WiFi" },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Icon className="w-5 h-5 text-amber-400" />
                    <span className="text-gray-300 font-light">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm text-amber-400 uppercase tracking-[0.3em] mb-4">Aesthetics</h2>
              <h3 className="text-3xl md:text-5xl font-light text-white">Visual Journey</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=600" className="w-full h-48 md:h-64 object-cover rounded-xl" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600" className="w-full h-48 md:h-64 object-cover rounded-xl" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600" className="w-full h-48 md:h-64 object-cover rounded-xl col-span-2 md:col-span-2" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&q=80&w=800" className="w-full h-48 md:h-64 object-cover rounded-xl col-span-2 md:col-span-2" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=600" className="w-full h-48 md:h-64 object-cover rounded-xl" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600" className="w-full h-48 md:h-64 object-cover rounded-xl" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-16 text-white">Guest Reflections</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Jenkins", text: "Pelayanan sangat memuaskan! Atmosfernya sungguh elegan dan menenangkan. Benar-benar oase di tengah kota." },
                { name: "Michael Chen", text: "Kamar bersih, luas & nyaman. Menu breakfastnya luar biasa dengan variasi kelas dunia. Will definitely return." },
                { name: "Amanda Putri", text: "Lokasi strategis banget, staf sangat ramah dan proaktif. Pemandangan dari kamar suite tak tertandingi." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#050505] p-10 rounded-2xl border border-white/5"
                >
                  <div className="flex justify-center gap-1 text-amber-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-400 font-light italic leading-relaxed mb-8">"{item.text}"</p>
                  <p className="text-white tracking-wider uppercase text-sm">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm text-amber-400 uppercase tracking-[0.3em] mb-4">Location</h2>
              <h3 className="text-3xl md:text-5xl font-light mb-8 text-white">Find Your Sanctuary</h3>
              
              <div className="space-y-6 mb-10 text-gray-400 font-light">
                <p className="flex items-start gap-4">
                  <MapPin className="text-amber-400 shrink-0 w-6 h-6 mt-1" />
                  <span>Jl. Sudirman No. 123, SCBD Area<br/>Jakarta Selatan, Indonesia 12190</span>
                </p>
                <p className="flex items-center gap-4">
                  <Phone className="text-amber-400 shrink-0 w-6 h-6" />
                  <span>+62 812 3456 789</span>
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b border-amber-400 text-amber-400 pb-1 hover:text-white hover:border-white transition-colors"
              >
                Get Directions <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[400px] w-full bg-white/5 rounded-2xl overflow-hidden border border-white/10"
            >
              <iframe
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl tracking-[0.2em] font-light uppercase text-white mb-6">
            <span className="text-amber-400">LUXURY</span> HOTEL
          </h2>
          <div className="flex gap-8 mb-12 text-sm tracking-widest uppercase font-light text-gray-400">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#room" className="hover:text-white transition-colors">Rooms</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          </div>
          <div className="w-full h-px bg-white/5 mb-8" />
          <p className="text-gray-600 text-sm font-light uppercase tracking-wider">
            © {new Date().getFullYear()} {data.name || "Luxury Hotel"}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ========================= */
/* 🛏️ ROOM SECTION */
/* ========================= */

function HotelSection() {
  const phone = "628123456789";

  const rooms = [
    {
      name: "Superior Room",
      size: "32 sqm",
      price: "1.200.000",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
      features: ["City View", "King Bed"]
    },
    {
      name: "Deluxe Premier",
      size: "45 sqm",
      price: "1.800.000",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      features: ["Ocean View", "Lounge Access"]
    },
    {
      name: "Executive Suite",
      size: "75 sqm",
      price: "3.500.000",
      img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
      features: ["Panoramic View", "Butler Service"]
    },
  ];

  return (
    <section id="room" className="px-6 py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm text-amber-400 uppercase tracking-[0.3em] mb-4">Accommodations</h2>
            <h3 className="text-3xl md:text-5xl font-light text-white">Signature Rooms</h3>
          </div>
          <p className="text-gray-400 font-light max-w-md">
            Desain elegan yang memadukan kenyamanan modern dengan sentuhan estetika kontemporer yang memukau.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => {
            const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo, saya ingin reservasi tipe ${room.name}`,
            )}`;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="overflow-hidden rounded-2xl mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={room.img}
                    alt={room.name}
                    className="h-96 w-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs uppercase tracking-widest px-3 py-1.5 rounded-full z-20">
                    {room.size}
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-light text-white group-hover:text-amber-400 transition-colors">{room.name}</h3>
                  </div>
                  
                  <div className="flex gap-4 mb-4 text-sm text-gray-500 font-light">
                    {room.features.map((feat, idx) => (
                      <span key={idx}>{feat}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Starting From</p>
                      <p className="text-lg text-white font-medium">Rp {room.price}</p>
                    </div>
                    <a
                      href={wa}
                      className="text-amber-400 hover:text-white uppercase tracking-widest text-sm text-right flex items-center gap-1 transition-colors"
                    >
                      Book <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
