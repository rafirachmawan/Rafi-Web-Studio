import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function LaundryCallToAction({ waLink }) {
  return (
    <section className="px-6 text-center">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60')] mix-blend-overlay opacity-10 bg-cover bg-center" />
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10"
        >
          Tumpukan Baju Kotor Bikin Stres?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto font-medium"
        >
          Biar kami yang urus. Duduk santai, hubungi kami via WhatsApp, dan kurir kami akan segera meluncur ke lokasi Anda.
        </motion.p>
        
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          href={waLink}
          className="inline-flex items-center gap-2 bg-blue-500 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-400 hover:scale-105 transition-all shadow-lg shadow-blue-500/30 relative z-10"
        >
          Order via WhatsApp <ArrowRight className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  );
}
