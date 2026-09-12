import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function SekolahHeroSection({ phone }) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6">
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="relative z-10"
        >
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold mb-6">
            <Award className="w-4 h-4" />
            Penerimaan Siswa Baru 2026 Dibuka
          </motion.div>

          <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] text-white tracking-tight">
            Bangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-400">Masa Depanmu</span> Bersama Kami
          </motion.h1>

          <motion.p variants={FADE_UP} className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed">
            Kurikulum berbasis industri, mentor profesional, dan fasilitas berstandar internasional.
          </motion.p>

          <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
            <a
              href="#program"
              className="bg-gradient-to-r from-teal-400 to-violet-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-teal-500/25 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              Jelajahi Program
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${phone}`}
              className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Tanya Admin
            </a>
          </motion.div>
        </motion.div>

        {/* Image Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:h-[600px] w-full flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-violet-500/20 rounded-full blur-[80px]" />
          
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
              alt="Students learning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
          </div>

          {/* Floating Badge 1 */}
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-4 md:-right-12 bg-[#18181b]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
          >
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">500+</p>
              <p className="text-xs text-zinc-400">Siswa Aktif</p>
            </div>
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 -left-4 md:-left-12 bg-[#18181b]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
          >
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center text-violet-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">100%</p>
              <p className="text-xs text-zinc-400">Jaminan Magang</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
