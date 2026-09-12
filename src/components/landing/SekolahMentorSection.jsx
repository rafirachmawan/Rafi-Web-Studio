import { motion } from "framer-motion";
import { Star } from "lucide-react";

const MENTORS = [
  { name: "Pak Budi", role: "Lead Programmer", img: "https://randomuser.me/api/portraits/men/32.jpg", exp: "10+ Tahun di Tech Startup" },
  { name: "Bu Rina", role: "Senior Financial Analyst", img: "https://randomuser.me/api/portraits/women/44.jpg", exp: "Mantan Auditor di Big 4" },
  { name: "Pak Andi", role: "Head of Digital Marketing", img: "https://randomuser.me/api/portraits/men/65.jpg", exp: "Certified Google Expert" }
];

export function SekolahMentorSection() {
  return (
    <section id="mentor" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-violet-400 font-bold tracking-widest uppercase mb-3">Tim Ahli</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Mentor Profesional</h3>
          <p className="text-zinc-400 max-w-xl mx-auto">Belajar langsung dari praktisi industri dengan pengalaman bertahun-tahun di bidangnya.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MENTORS.map((teacher, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#18181b] border border-white/5 rounded-3xl p-8 text-center hover:border-violet-500/30 transition-colors group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-violet-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity" />
                <img src={teacher.img} alt={teacher.name} className="relative w-full h-full rounded-full object-cover border-4 border-[#18181b]" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-1">{teacher.name}</h4>
              <p className="text-teal-400 font-medium mb-4">{teacher.role}</p>
              <p className="text-sm text-zinc-400 px-4">{teacher.exp}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
