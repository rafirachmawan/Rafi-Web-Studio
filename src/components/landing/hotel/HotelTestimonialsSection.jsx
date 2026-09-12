import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function HotelTestimonialsSection() {
  const testimonials = [
    { name: "Sarah Jenkins", text: "Atmosfer hotel klasik Victorian yang mewah. Kolam renang indoor-nya besar dan bersih sekali, anak-anak sangat menikmatinya." },
    { name: "Michael Chen", text: "Menginap di tipe Executive Suite dan pelayanannya luar biasa. Menu sarapan di Sultan Café sangat lezat dengan pilihan yang beragam." },
    { name: "Amanda Putri", text: "Lokasinya strategis, hanya 5 menit dari stasiun. Ballroom-nya sangat megah, cocok sekali untuk perayaan pernikahan." }
  ];

  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-950/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-black mb-16 text-white">Guest Reflections</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#050505] p-10 rounded-2xl border border-white/5 text-left"
            >
              <div className="flex gap-1 text-purple-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm font-light italic leading-relaxed mb-8">"{item.text}"</p>
              <p className="text-white tracking-wider uppercase text-xs font-black">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
