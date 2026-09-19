import { motion } from "framer-motion";
const hotelHeroImg = "/assets/hotel_hero.jpg";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export function HotelHeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
      <motion.img
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        src={hotelHeroImg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Crown Victoria Hotel Lobby Entrance"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-[#050505]/60 to-[#050505]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-95" />

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={STAGGER}
        className="relative z-10 text-center max-w-4xl mt-20"
      >
        <motion.p variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-500/20 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-purple-300 tracking-[0.4em] uppercase text-xs md:text-sm font-bold">⭐ CROWN VICTORIA HOTEL TULUNGAGUNG</span>
        </motion.p>
        <motion.h1 variants={FADE_UP} className="text-4xl sm:text-6xl md:text-7xl font-serif font-black leading-tight mb-8 text-white drop-shadow-2xl">
          Where Victorian Elegance<br /><span className="text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400">Meets Modern Luxury</span>
        </motion.h1>
        <motion.p variants={FADE_UP} className="text-sm md:text-lg lg:text-xl text-zinc-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Nikmati fasilitas bintang 4 terbaik dengan pesona arsitektur khas Victorian yang klasik dan layanan ramah di pusat kota Tulungagung.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#rooms"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-full text-sm shadow-lg shadow-purple-600/30 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Explore Rooms ↓
          </a>
          <a
            href="#facilities"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full text-sm transition-all duration-300 hover:scale-105"
          >
            View Facilities →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
