import { motion } from "framer-motion";
import { Star, ShieldCheck, Phone, ArrowRight } from "lucide-react";

export function UmrohHeroSection({ phone }) {
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent("Assalamu'alaikum, saya tertarik dengan program umroh dari Jabal Noor.official.")}`;

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center px-6 pt-32 pb-12 overflow-hidden bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Star className="w-4 h-4 fill-current" />
            Terakreditasi A Kemenag RI
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-orange-950 tracking-tight"
          >
            Menuju Baitullah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Dengan Penuh Berkah
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 mb-10 max-w-lg leading-relaxed font-medium"
          >
            Nikmati kenyamanan dan kekhusyukan ibadah Umroh bersama pembimbing berpengalaman, fasilitas premium, dan pelayanan sepenuh hati dari Jabal Noor.official.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#paket"
              className="bg-amber-500 text-orange-950 px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              Lihat Jadwal & Paket
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={waLink}
              className="bg-white border border-orange-200 text-orange-900 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Konsultasi Gratis
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:h-[600px] w-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[90%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=800"
              alt="Umroh Pilgrims"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay"></div>
          </div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-6 md:-left-12 bg-white/90 backdrop-blur-md border border-stone-100 p-4 rounded-2xl flex items-center gap-4 shadow-xl z-20"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-orange-950 font-black">Izin Resmi</p>
              <p className="text-xs text-stone-500 font-bold">Kemenag RI</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
