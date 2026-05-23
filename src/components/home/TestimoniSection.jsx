import { motion } from "framer-motion";
import { Quote, TrendingUp, Zap, Star } from "lucide-react";

export default function TestimoniSection() {
  return (
    <div id="testimoni" className="mt-32 mb-24 max-w-6xl mx-auto px-4 md:px-8">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight text-zinc-900 dark:text-white">
          Kisah Sukses{" "}
          <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
            Klien Kami
          </span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-medium">
          Website bukan cuma gaya-gayaan, tapi senjata rahasia untuk bisnis maju.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[220px]">
        {/* CARD 1 (BIG QUOTE) - Spans 2 cols, 2 rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 md:row-span-2 relative bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between overflow-hidden group hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300"
        >
          {/* Decorative blur */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div>
            <Quote className="w-10 h-10 text-amber-500 mb-6 opacity-80" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-zinc-800 dark:text-zinc-200 text-lg md:text-xl font-semibold leading-relaxed mb-8 relative z-10">
              "Website travel agency saya jadi rujukan utama pelanggan. Tampilan di HP sangat smooth dan reservasi online meningkat tajam sejak web baru diluncurkan!"
            </p>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/30">
              <img
                src="https://i.pravatar.cc/100?img=1"
                alt="Lestari Budi"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                Lestari Budi
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                CEO, Lancar Jaya Travel
              </p>
            </div>
          </div>
        </motion.div>

        {/* CARD 2 (METRIC 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1 md:row-span-1 bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center group hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-6 h-6 text-amber-500" />
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">
            +150<span className="text-amber-500">%</span>
          </h3>
          <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            Lonjakan Trafik
          </p>
        </motion.div>

        {/* CARD 3 (METRIC 2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1 md:row-span-1 bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center group hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300"
        >
           <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6 text-amber-500" />
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">
            3<span className="text-amber-500">x</span>
          </h3>
          <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            Lebih Cepat
          </p>
        </motion.div>

        {/* CARD 4 (SECONDARY QUOTE / WIDE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 md:row-span-1 relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 overflow-hidden group hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-center"
        >
          {/* Abstract dark mode glow background */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-[60px] rounded-full group-hover:bg-amber-500/20 transition-colors duration-500"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden border border-zinc-700 shadow-xl">
               <img
                src="https://i.pravatar.cc/100?img=2"
                alt="Budi Kusuma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="flex gap-1 justify-center md:justify-start mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm md:text-base font-medium italic mb-4 leading-relaxed">
                "Custom project e-learning kami dikerjakan dengan sangat detail. Fiturnya kompleks tapi UI/UX-nya tetap elegan dan mudah dimengerti user."
              </p>
              <div>
                <span className="text-white font-bold text-sm">Budi Kusuma</span>
                <span className="text-zinc-500 text-xs ml-2 font-medium uppercase tracking-wider">— E-Learning Platform</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
