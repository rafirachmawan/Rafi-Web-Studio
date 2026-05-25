import { motion } from "framer-motion";
import { Star, Zap, Cpu, Compass } from "lucide-react";

export default function WhyUsSection() {
  const stats = [
    { value: "50+", label: "Project Delivered" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "24/7", label: "Technical Support" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Desain Premium & Modern",
      desc: "Tampilan website yang mewah, bersih, dan dinamis, dirancang khusus untuk meningkatkan kredibilitas brand Anda.",
    },
    {
      icon: Cpu,
      title: "Kinerja & Kecepatan Tinggi",
      desc: "Menggunakan teknologi modern untuk memastikan website Anda memiliki kecepatan loading super kilat dan ramah SEO.",
    },
    {
      icon: Compass,
      title: "Solusi Terintegrasi Penuh",
      desc: "Menghubungkan landing page promosi, dashboard manajemen berbasis web, dan aplikasi mobile dalam satu ekosistem.",
    },
  ];

  return (
    <section id="why-us" className="relative py-24 overflow-hidden bg-white dark:bg-[#050508]">
      {/* GLOW DECORATIVE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION - CENTERED */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-6"
          >
            ⚡ Mitra Digital Anda
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-zinc-900 dark:text-white mb-6"
          >
            Bukan Sekadar <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Website Biasa
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            Kami membantu bisnis lokal dan UMKM naik tingkat melalui digitalisasi yang dirancang secara matang, responsif, dan fokus pada peningkatan penjualan.
          </motion.p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900 shadow-sm hover:shadow-xl dark:shadow-none hover:border-amber-500/30 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Icon size={28} className="stroke-[2]" />
                </div>
                
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors">
                  {feat.title}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* STATS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 divide-x divide-black/10 dark:divide-white/10 p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-amber-500/5 dark:bg-amber-500/5"
        >
          {stats.map((item, index) => (
            <div key={index} className="text-center px-2 md:px-4">
              <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-2">
                {item.value}
              </h3>
              <p className="text-[10px] md:text-xs text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
