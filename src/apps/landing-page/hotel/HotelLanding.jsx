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
  ChevronRight,
  Menu,
  X,
  Bed,
  GlassWater,
  Phone,
  Maximize2,
  Utensils,
  Dumbbell,
  ShieldCheck,
  Check
} from "lucide-react";

// Import Local Images
import hotelHeroImg from "./assets/hotel_hero.png";
import roomSuperiorImg from "./assets/room_superior.png";
import roomDeluxeImg from "./assets/room_deluxe.png";
import roomSuiteImg from "./assets/room_suite.png";
import hotelBallroomImg from "./assets/hotel_ballroom.png";
import hotelRestoImg from "./assets/hotel_resto.png";

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
  const data = hotel || { name: "Crown Victoria Hotel", hero: { title: "Crown Victoria Hotel", subtitle: "Victorian Luxury 4-Star Experience" } };
  
  const phone = "6285707185783"; // Rafi's developer/owner contact

  // Booking states
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState("2 Guests");
  const [selectedRoomType, setSelectedRoomType] = useState("Superior Room");

  // Ballroom calculator state
  const [activeBallroom, setActiveBallroom] = useState("Victoria Grand Ballroom");
  const [activeLayout, setActiveLayout] = useState("Banquet (Round Table)");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCapacityDetails = (ballroom, layout) => {
    const capacities = {
      "Victoria Grand Ballroom": {
        "Banquet (Round Table)": "950 Kursi (95 Round Tables)",
        "Theater Style": "2.500 Kursi (Theater Setup)",
        "Classroom Style": "1.200 Kursi (Classroom Setup)"
      },
      "Victoria Ballroom A": {
        "Banquet (Round Table)": "400 Kursi (40 Round Tables)",
        "Theater Style": "1.000 Kursi (Theater Setup)",
        "Classroom Style": "500 Kursi (Classroom Setup)"
      },
      "Victoria Ballroom B": {
        "Banquet (Round Table)": "260 Kursi (26 Round Tables)",
        "Theater Style": "500 Kursi (Theater Setup)",
        "Classroom Style": "250 Kursi (Classroom Setup)"
      }
    };
    return capacities[ballroom]?.[layout] || "Call for Custom Layouts";
  };

  const handleBookingRedirect = (e) => {
    e.preventDefault();
    const message = `Halo Crown Victoria Hotel Tulungagung, saya ingin reservasi kamar:
- *Tipe Kamar*: ${selectedRoomType}
- *Check In*: ${checkIn || "Belum Ditentukan"}
- *Check Out*: ${checkOut || "Belum Ditentukan"}
- *Tamu*: ${guestCount}

Apakah kamar tersedia pada tanggal tersebut?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleBallroomInquiry = () => {
    const message = `Halo Crown Victoria Hotel Tulungagung, saya ingin menanyakan ketersediaan ballroom untuk acara saya:
- *Ballroom*: ${activeBallroom}
- *Layout*: ${activeLayout}
- *Kapasitas*: ${getCapacityDetails(activeBallroom, activeLayout)}

Mohon info harga paket dan tanggal kosong terdekat. Terima kasih.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-[#050505] text-[#e5e5e5] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl tracking-[0.25em] font-light uppercase"
          >
            <span className="text-amber-400 font-bold">CROWN VICTORIA</span> <span className="hidden sm:inline">HOTEL</span>
          </motion.h1>

          <div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase font-semibold text-zinc-400">
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#room" className="hover:text-amber-400 transition-colors">Rooms</a>
            <a href="#ballroom" className="hover:text-amber-400 transition-colors">Ballrooms</a>
            <a href="#facilities" className="hover:text-amber-400 transition-colors">Facilities</a>
            <a href="#location" className="hover:text-amber-400 transition-colors">Location</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            href={`https://wa.me/${phone}?text=Halo%20Crown%20Victoria%20Hotel%20Tulungagung%2C%20saya%20tertarik%20untuk%20booking%20kamar.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block border border-amber-400/50 text-amber-400 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-400 hover:text-black transition-all duration-300"
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
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-xl font-light uppercase tracking-widest hover:text-amber-400">Experience</a>
              <a href="#room" onClick={() => setMobileMenuOpen(false)} className="text-xl font-light uppercase tracking-widest hover:text-amber-400">Rooms</a>
              <a href="#ballroom" onClick={() => setMobileMenuOpen(false)} className="text-xl font-light uppercase tracking-widest hover:text-amber-400">Ballrooms</a>
              <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="text-xl font-light uppercase tracking-widest hover:text-amber-400">Facilities</a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-xl font-light uppercase tracking-widest hover:text-amber-400">Location</a>
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 border border-amber-400 text-amber-400 px-8 py-3 rounded-full uppercase tracking-widest text-xs font-bold"
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
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={hotelHeroImg}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
            alt="Crown Victoria Hotel Lobby Entrance"
          />
          <div className="absolute inset-0 bg-[#050505]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-95" />

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="relative z-10 text-center max-w-4xl mt-20"
          >
            <motion.p variants={FADE_UP} className="text-amber-400 tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6">
              ⭐ CROWN VICTORIA HOTEL TULUNGAGUNG
            </motion.p>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-6xl md:text-7xl font-serif font-black leading-tight mb-8 text-white drop-shadow-xl">
              Where Victorian Elegance Meets Modern Luxury
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-sm md:text-lg text-zinc-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Nikmati fasilitas bintang 4 terbaik dengan pesona arsitektur khas Victorian yang klasik dan layanan ramah di pusat kota Tulungagung.
            </motion.p>
          </motion.div>
        </section>

        {/* BOOKING WIDGET */}
        <section className="relative z-20 px-6 -mt-24 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/85"
          >
            <form onSubmit={handleBookingRedirect} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:bg-white/10 transition-colors">
                <Bed className="text-amber-400 w-5 h-5 shrink-0" />
                <div className="w-full text-left">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Room Type</p>
                  <select 
                    value={selectedRoomType}
                    onChange={(e) => setSelectedRoomType(e.target.value)}
                    className="bg-transparent w-full text-xs text-white outline-none font-bold cursor-pointer appearance-none"
                  >
                    <option className="bg-[#0a0a0a]" value="Superior Room">Superior Room</option>
                    <option className="bg-[#0a0a0a]" value="Deluxe Room">Deluxe Room</option>
                    <option className="bg-[#0a0a0a]" value="Executive Suite">Executive Suite</option>
                  </select>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:bg-white/10 transition-colors">
                <CalendarDays className="text-amber-400 w-5 h-5 shrink-0" />
                <div className="w-full text-left">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Check In</p>
                  <input 
                    type="date" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="bg-transparent w-full text-xs text-white outline-none font-medium [color-scheme:dark]" 
                  />
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:bg-white/10 transition-colors">
                <CalendarDays className="text-amber-400 w-5 h-5 shrink-0" />
                <div className="w-full text-left">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Check Out</p>
                  <input 
                    type="date" 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="bg-transparent w-full text-xs text-white outline-none font-medium [color-scheme:dark]" 
                  />
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:bg-white/10 transition-colors">
                <Users className="text-amber-400 w-5 h-5 shrink-0" />
                <div className="w-full text-left">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Guests</p>
                  <select 
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="bg-transparent w-full text-xs text-white outline-none font-bold appearance-none cursor-pointer"
                  >
                    <option className="bg-[#0a0a0a]" value="1 Guest">1 Guest</option>
                    <option className="bg-[#0a0a0a]" value="2 Guests">2 Guests</option>
                    <option className="bg-[#0a0a0a]" value="3 Guests">3 Guests</option>
                    <option className="bg-[#0a0a0a]" value="4+ Guests">4+ Guests</option>
                  </select>
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-black rounded-xl py-4 font-bold tracking-widest transition-all uppercase text-xs flex items-center justify-center gap-2"
              >
                Book Now
              </button>
            </form>
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-xs text-amber-400 uppercase tracking-[0.3em] font-extrabold mb-4">The Experience</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Redefining Tulungagung Comfort</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Bed, title: "Victorian Class Design", desc: "Setiap kamar didesain dengan detail ornamen elegan khas Victorian, dipadu dengan kenyamanan tidur premium." },
                { icon: Star, title: "4-Star Hospitality", desc: "Layanan ramah staf profesional 24 jam untuk melayani seluruh kebutuhan pemesanan, meeting, dan event." },
                { icon: MapPin, title: "Strategic City Center", desc: "Hanya berjarak 5 menit berkendara dari Stasiun Kereta Api Tulungagung, dikelilingi destinasi kuliner populer." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="group p-8 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors duration-500 text-center"
                >
                  <div className="w-14 h-14 mx-auto border border-amber-400/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-500">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-4">{title}</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROOMS */}
        <HotelSection phone={phone} />

        {/* ================= BALLROOM SECTION [NEW] ================= */}
        <section id="ballroom" className="py-24 px-6 bg-[#0B0B0B] border-y border-white/5 relative">
          <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs text-amber-400 uppercase tracking-[0.3em] font-extrabold mb-4">Victoria Ballrooms</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Event & Wedding Space Planner</h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto mt-4">
                Pilih kapasitas ballroom terbaik di Tulungagung dengan ornamen megah Victorian. Sesuaikan layout kursi tamu Anda di bawah.
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-center bg-[#070707] border border-white/10 rounded-3xl p-6 md:p-10">
              {/* Image Preview Left */}
              <div className="md:col-span-6 relative rounded-2xl overflow-hidden group">
                <img
                  src={hotelBallroomImg}
                  alt="Victoria Grand Ballroom Setup"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-amber-400/10 text-amber-400 rounded-full border border-amber-400/20">
                    High Ceiling Victorian Design
                  </span>
                  <h4 className="text-lg font-bold text-white mt-2">Victoria Grand Ballroom</h4>
                </div>
              </div>

              {/* Calculator Panel Right */}
              <div className="md:col-span-6 text-left space-y-6">
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">1. Pilih Ruangan Ballroom:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Victoria Grand Ballroom", "Victoria Ballroom A", "Victoria Ballroom B"].map(ballroom => (
                      <button
                        key={ballroom}
                        onClick={() => setActiveBallroom(ballroom)}
                        className={`py-2 px-1 rounded-xl text-[9px] sm:text-[10px] font-bold transition-all border ${
                          activeBallroom === ballroom
                            ? "bg-amber-400 text-black border-transparent"
                            : "bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10"
                        }`}
                      >
                        {ballroom.replace("Victoria ", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">2. Pilih Tipe Penataan Kursi:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Banquet (Round Table)", "Theater Style", "Classroom Style"].map(layout => (
                      <button
                        key={layout}
                        onClick={() => setActiveLayout(layout)}
                        className={`py-2 px-1 rounded-xl text-[9px] sm:text-[10px] font-bold transition-all border ${
                          activeLayout === layout
                            ? "bg-amber-400 text-black border-transparent"
                            : "bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10"
                        }`}
                      >
                        {layout.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculated Result Panel */}
                <div className="bg-[#0C0C0C] border border-white/5 rounded-2xl p-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Estimasi Maksimal Kapasitas</p>
                    <h4 className="text-xl sm:text-2xl font-black text-amber-400">
                      {getCapacityDetails(activeBallroom, activeLayout)}
                    </h4>
                  </div>
                  <div className="h-10 w-px bg-white/10 mx-2" />
                  <div className="text-right">
                    <p className="text-[9px] text-zinc-500 uppercase">Ideal for</p>
                    <span className="text-xs text-white font-bold">
                      {activeLayout.includes("Banquet") ? "Wedding Reception" : "Corporate Seminars"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBallroomInquiry}
                  className="w-full bg-white/5 hover:bg-amber-400 text-zinc-300 hover:text-black font-extrabold text-xs tracking-widest py-4 rounded-xl border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  Hubungi Sales & Marketing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section id="facilities" className="py-24 px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={hotelRestoImg} className="w-full h-64 object-cover rounded-2xl mt-8 brightness-[0.8]" alt="Sultan Resto Table Setup" />
              <img src={hotelHeroImg} className="w-full h-64 object-cover rounded-2xl brightness-[0.8]" alt="Crown Victoria Entrance Lobby" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h2 className="text-xs text-amber-400 uppercase tracking-[0.3em] font-extrabold mb-4">Amenities & Gastronomy</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white mb-8">Hotel Facilities</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed mb-10">
                Kami menyediakan fasilitas lengkap kelas atas untuk mengoptimalkan pengalaman kunjungan dan relaksasi Anda selama berada di Tulungagung.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Waves, label: "Spacious Indoor Pool" },
                  { icon: Utensils, label: "Sultan Cafe & Resto" },
                  { icon: GlassWater, label: "Venezia Second Bar" },
                  { icon: Wifi, label: "High-Speed Hotel WiFi" },
                  { icon: Dumbbell, label: "Full-Equipped Gym" },
                  { icon: ShieldCheck, label: "24-Hour Room Service" },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Icon className="w-4 h-4 text-amber-400" />
                    <span className="text-zinc-300 text-xs sm:text-sm font-medium">{label}</span>
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
              <h2 className="text-xs text-amber-400 uppercase tracking-[0.3em] font-extrabold mb-4">Aesthetics</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Visual Journey</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} src={hotelHeroImg} className="w-full h-48 md:h-64 object-cover rounded-xl brightness-[0.8] hover:brightness-100 transition-all duration-300" alt="Lobby" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} src={roomSuperiorImg} className="w-full h-48 md:h-64 object-cover rounded-xl brightness-[0.8] hover:brightness-100 transition-all duration-300" alt="Superior" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} src={roomDeluxeImg} className="w-full h-48 md:h-64 object-cover rounded-xl col-span-2 md:col-span-2 brightness-[0.8] hover:brightness-100 transition-all duration-300" alt="Deluxe Balcony" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} src={hotelBallroomImg} className="w-full h-48 md:h-64 object-cover rounded-xl col-span-2 md:col-span-2 brightness-[0.8] hover:brightness-100 transition-all duration-300" alt="Victoria Ballroom" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} src={roomSuiteImg} className="w-full h-48 md:h-64 object-cover rounded-xl brightness-[0.8] hover:brightness-100 transition-all duration-300" alt="Executive Suite" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} src={hotelRestoImg} className="w-full h-48 md:h-64 object-cover rounded-xl brightness-[0.8] hover:brightness-100 transition-all duration-300" alt="Dining Room" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-950/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-black mb-16 text-white">Guest Reflections</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Jenkins", text: "Atmosfer hotel klasik Victorian yang mewah. Kolam renang indoor-nya besar dan bersih sekali, anak-anak sangat menikmatinya." },
                { name: "Michael Chen", text: "Menginap di tipe Executive Suite dan pelayanannya luar biasa. Menu sarapan di Sultan Café sangat lezat dengan pilihan yang beragam." },
                { name: "Amanda Putri", text: "Lokasinya strategis, hanya 5 menit dari stasiun. Ballroom-nya sangat megah, cocok sekali untuk perayaan pernikahan." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#050505] p-10 rounded-2xl border border-white/5 text-left"
                >
                  <div className="flex gap-1 text-amber-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light italic leading-relaxed mb-8">"{item.text}"</p>
                  <p className="text-white tracking-wider uppercase text-xs font-black">{item.name}</p>
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
              className="text-left"
            >
              <h2 className="text-xs text-amber-400 uppercase tracking-[0.3em] font-extrabold mb-4">Location</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-black mb-8 text-white">Find Your Sanctuary</h3>
              
              <div className="space-y-6 mb-10 text-zinc-400 font-light">
                <p className="flex items-start gap-4">
                  <MapPin className="text-amber-400 shrink-0 w-6 h-6 mt-1" />
                  <span className="text-xs sm:text-sm leading-relaxed">
                    Jl. K.H. Hasyim Asy'ari No. 17, Kampungdalem, Kec. Tulungagung,<br/>
                    Kabupaten Tulungagung, Jawa Timur 66212
                  </span>
                </p>
                <p className="flex items-center gap-4">
                  <Phone className="text-amber-400 shrink-0 w-6 h-6" />
                  <span className="text-xs sm:text-sm font-bold">+62 355 331 321</span>
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/KkG6uU4WjUjY6"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b border-amber-400 text-amber-400 pb-1 hover:text-white hover:border-white transition-colors uppercase text-xs font-black tracking-widest"
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
                src="https://maps.google.com/maps?q=Crown%20Victoria%20Hotel%20Tulungagung&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-lg tracking-[0.25em] font-light uppercase text-white mb-6">
            <span className="text-amber-400 font-bold">CROWN VICTORIA</span> HOTEL
          </h2>
          <div className="flex gap-8 mb-12 text-[10px] tracking-widest uppercase font-bold text-zinc-500">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#room" className="hover:text-white transition-colors">Rooms</a>
            <a href="#ballroom" className="hover:text-white transition-colors">Ballrooms</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          </div>
          <div className="w-full h-px bg-white/5 mb-8" />
          <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Crown Victoria Hotel Tulungagung. Website Developed by GapaiDigital.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ========================= */
/* 🛏️ ROOM SECTION */
/* ========================= */

function HotelSection({ phone }) {
  const rooms = [
    {
      name: "Superior Room",
      size: "32 sqm",
      price: "650.000",
      img: roomSuperiorImg,
      features: ["City View", "King or Twin Bed", "Complimentary Water"]
    },
    {
      name: "Deluxe Room",
      size: "36 sqm",
      price: "800.000",
      img: roomDeluxeImg,
      features: ["Pool View", "King Bed Only", "Private Balcony"]
    },
    {
      name: "Executive Suite",
      size: "65 sqm",
      price: "1.500.000",
      img: roomSuiteImg,
      features: ["Panoramic View", "Adjoining Living Room", "Mini Bar"]
    },
  ];

  return (
    <section id="room" className="px-6 py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left">
          <div>
            <h2 className="text-xs text-amber-400 uppercase tracking-[0.3em] font-extrabold mb-4">Accommodations</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Signature Rooms</h3>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-md">
            Desain kamar klasik yang hangat dan menenangkan, disempurnakan dengan furnitur kayu mewah dan ornamen Victorian yang menakjubkan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => {
            const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo Crown Victoria Hotel Tulungagung, saya ingin reservasi tipe *${room.name}* (Mulai Rp ${room.price}/malam). Mohon informasikan ketersediaan kamar.`,
            )}`;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative text-left"
              >
                <div className="overflow-hidden rounded-2xl mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={room.img}
                    alt={room.name}
                    className="h-80 w-full object-cover group-hover:scale-105 transition duration-700 ease-out brightness-[0.9]"
                  />
                  <div className="absolute top-4 right-4 bg-[#050505]/75 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-20 border border-amber-400/20">
                    {room.size}
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors">{room.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-zinc-500 font-medium">
                    {room.features.map((feat, idx) => (
                      <span key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Starting From</p>
                      <p className="text-base text-white font-bold">Rp {room.price} <span className="text-[10px] text-zinc-500 font-normal">/ malam</span></p>
                    </div>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-white uppercase tracking-widest text-xs font-bold shrink-0 flex items-center gap-1 transition-colors"
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
