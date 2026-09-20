import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function SekolahCTASection({ phone }) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-violet-600" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] mix-blend-overlay opacity-10 bg-cover bg-center" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-6"
        >
          Ambil Langkah Pertama
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-teal-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Bergabunglah dengan ribuan siswa sukses lainnya. Kuota terbatas untuk periode penerimaan bulan ini!
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={`https://wa.me/${phone}`}
            className="inline-flex items-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-2xl"
          >
            <CheckCircle2 className="w-6 h-6 text-teal-500" />
            Daftar Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}
