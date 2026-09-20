import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export function UmrohCallToAction({ waLink }) {
  return (
    <section className="px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-orange-950" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f')] mix-blend-overlay opacity-5 bg-cover bg-center" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-6"
        >
          Wujudkan Niat Suci Anda Tahun Ini
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-orange-100/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium"
        >
          Jangan tunda panggilan ke Baitullah. Konsultasikan rencana perjalanan ibadah Anda bersama tim kami sekarang juga.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={waLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 text-orange-950 px-10 py-5 rounded-full font-black text-lg hover:bg-amber-400 hover:scale-105 transition-all shadow-xl shadow-amber-500/20"
          >
            <Phone className="w-6 h-6" /> Hubungi Sekarang
          </a>
          <a
            href="#paket"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all"
          >
            Lihat Jadwal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
