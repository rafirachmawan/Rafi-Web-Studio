import { Bed, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function HotelExperienceSection() {
  const features = [
    { icon: Bed, title: "Victorian Class Design", desc: "Setiap kamar didesain dengan detail ornamen elegan khas Victorian, dipadu dengan kenyamanan tidur premium." },
    { icon: Star, title: "4-Star Hospitality", desc: "Layanan ramah staf profesional 24 jam untuk melayani seluruh kebutuhan pemesanan, meeting, dan event." },
    { icon: MapPin, title: "Strategic City Center", desc: "Hanya berjarak 5 menit berkendara dari Stasiun Kereta Api Tulungagung, dikelilingi destinasi kuliner populer." },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xs text-purple-400 uppercase tracking-[0.3em] font-extrabold mb-4">The Experience</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Redefining Tulungagung Comfort</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group p-8 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors duration-500 text-center"
            >
              <div className="w-14 h-14 mx-auto border border-purple-400/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-400 transition-all duration-500">
                <Icon className="w-5 h-5 text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-4">{title}</h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
