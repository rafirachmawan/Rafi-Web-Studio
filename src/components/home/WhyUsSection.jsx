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
    <section id="why-us" className="relative py-20 overflow-hidden border-t border-black/5 dark:border-white/5 bg-zinc-50/50 dark:bg-transparent">
      {/* GLOW DECORATIVE */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT & STATS */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-5"
              >
                ⚡ Mitra Digital Anda
              </motion.div>

              {/* TITLE */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
                className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-[1.15] text-zinc-900 dark:text-white"
              >
                Bukan Sekadar <br className="hidden md:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Website Biasa</span>
              </motion.h2>

              {/* DESC */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="mt-3 text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                Kami membantu bisnis lokal dan UMKM naik tingkat melalui digitalisasi yang dirancang secara matang, responsif, dan fokus pada peningkatan penjualan.
              </motion.p>
            </div>

            {/* STATS BLOCK */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 border-t border-black/5 dark:border-white/5">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                    {item.value}
                  </h3>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wide mt-1">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: PILLAR FEATURES */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex gap-4 md:gap-5 p-5 md:p-6 rounded-[24px] border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-900/40 hover:border-amber-500/20 dark:hover:border-amber-500/10 hover:bg-white dark:hover:bg-zinc-900/60 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300"
                >
                  {/* ICON HOLDER */}
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={20} className="stroke-[2.5]" />
                  </div>
                  
                  {/* DETAILS */}
                  <div className="space-y-1">
                    <h4 className="text-sm md:text-base font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] md:text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
