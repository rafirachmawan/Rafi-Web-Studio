import { motion } from "framer-motion";
import { MonitorPlay, Calculator, Briefcase, ArrowRight } from "lucide-react";

const PROGRAMS = [
  {
    name: "Teknik Informatika",
    desc: "Pelajari software engineering, AI, dan cloud computing dengan kurikulum standar industri tech.",
    icon: MonitorPlay,
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Akuntansi Modern",
    desc: "Kuasai manajemen keuangan korporat menggunakan software akuntansi modern dan analisis data.",
    icon: Calculator,
    color: "from-teal-500 to-emerald-400"
  },
  {
    name: "Bisnis Digital",
    desc: "Pelajari digital marketing, e-commerce, dan strategi pengembangan startup teknologi.",
    icon: Briefcase,
    color: "from-violet-500 to-fuchsia-400"
  },
];

export function SekolahProgramSection() {
  return (
    <section id="program" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-teal-400 font-bold tracking-widest uppercase mb-3">Fakultas</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Program Unggulan</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROGRAMS.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-[#18181b] border border-white/5 hover:border-white/20 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10"
            >
              <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.name}</h3>
              <p className="text-zinc-400 leading-relaxed font-medium mb-8">{item.desc}</p>
              
              <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Pelajari Detail <ArrowRight className="w-4 h-4 text-teal-400" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
