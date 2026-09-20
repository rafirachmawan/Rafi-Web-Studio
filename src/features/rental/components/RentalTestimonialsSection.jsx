import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function RentalTestimonialsSection() {
  const testimonials = [
    { name: "Budi Santoso", text: "Service rental terbaik! Mobil bersih, driver ramah, harga transparan. Recommended banget!", rating: 5 },
    { name: "Sarah Wijaya", text: "Booking process sangat mudah dan cepat. Driver professional, mobil premium condition. Will book again!", rating: 5 },
    { name: "Michael Chen", text: "Outstanding service untuk trip bisnis saya. Always on time, very reliable. Best rental in town.", rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-[#0e0e12]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs text-red-500 font-bold tracking-[0.3em] uppercase mb-4">Client Reviews</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">What Our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 text-red-500 mb-6 justify-center">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed italic mb-8 text-center">"{item.text}"</p>

              {/* Name */}
              <p className="text-white font-black text-sm text-center tracking-wide">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
