import { motion } from "framer-motion";
const mieGacoanHeroImg = "/assets/mie_gacoan_hero.jpg";

const FADE_UP = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function RestoHeroSection({ data }) {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        src={mieGacoanHeroImg}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        alt="Mie Gacoan Experience"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={STAGGER}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <motion.p variants={FADE_UP} className="text-pink-400 font-black tracking-[0.3em] uppercase text-sm md:text-base mb-4">
          🔥 SPICY FOOD REVOLUTION
        </motion.p>
        <motion.h1 variants={FADE_UP} className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl">
          {data.hero.title}
        </motion.h1>
        <motion.p variants={FADE_UP} className="text-zinc-300 text-sm md:text-lg max-w-2xl mx-auto mb-8 font-light">
          {data.hero.subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}
