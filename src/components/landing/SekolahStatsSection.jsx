import { motion } from "framer-motion";
import { Users, BookOpen, Briefcase, MonitorPlay } from "lucide-react";

const STATS_DATA = [
  { label: "Siswa Lulus", value: "2.5K+", icon: Users },
  { label: "Guru Expert", value: "45+", icon: BookOpen },
  { label: "Mitra Industri", value: "120+", icon: Briefcase },
  { label: "Fasilitas Lab", value: "15+", icon: MonitorPlay },
];

export function SekolahStatsSection() {
  return (
    <section className="px-6 relative z-20 -mt-10 mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-[#18181b]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/50"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {STATS_DATA.map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="w-10 h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-zinc-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
