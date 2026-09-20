import { motion } from "framer-motion";

const FADE_DOWN = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function RentalHeroSection({ data }) {
  const hero = data?.hero || { title: "Premium Car Rental", subtitle: "Experience luxury with our fleet of premium vehicles and professional service!" };
  
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={FADE_DOWN}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
          {hero.title}
        </h1>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          {hero.subtitle}
        </p>
        <a
          href="#inventory"
          className="inline-block bg-red-500 hover:bg-red-600 text-black font-black text-sm uppercase tracking-wider px-8 py-4 rounded-lg transition-all shadow-lg shadow-red-500/30"
        >
          Explore Inventory
        </a>
      </motion.div>
    </section>
  );
}
