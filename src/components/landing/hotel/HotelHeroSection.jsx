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
        <motion.p variants={FADE_UP} className="text-purple-400 tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6">
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
  );
}
