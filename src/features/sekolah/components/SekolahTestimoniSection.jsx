import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { text: "Kurikulumnya sangat up-to-date. Sebelum lulus saya sudah mendapat tawaran kerja di perusahaan startup impian.", author: "Dimas A.", role: "Software Engineer" },
  { text: "Mentor-mentornya luar biasa, tidak hanya mengajarkan teori tapi juga best practices di industri.", author: "Sari P.", role: "Data Analyst" },
  { text: "Fasilitas lengkap dan suasana belajar yang sangat mendukung produktivitas. Highly recommended!", author: "Kevin W.", role: "Digital Marketer" }
];

export function SekolahTestimoniSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-16">Kisah Sukses Alumni</h3>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {TESTIMONIALS.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#18181b] p-8 rounded-3xl border border-white/5 relative"
            >
              <div className="text-teal-500/20 text-6xl font-serif absolute top-4 right-6">"</div>
              <div className="flex gap-1 text-teal-400 mb-6 relative z-10">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-300 leading-relaxed mb-8 relative z-10">"{item.text}"</p>
              <div className="relative z-10">
                <p className="font-bold text-white">{item.author}</p>
                <p className="text-sm text-teal-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
