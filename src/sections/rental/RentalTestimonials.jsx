// src/sections/rental/RentalTestimonials.jsx
// Clean testimonial section

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Business Consultant",
    text: "Sangat puas dengan layanan mobilnya. Mobil bersih, kondisi prima, dan staff sangat profesional.",
    rating: 5
  },
  {
    name: "Sarah Wijaya",
    role: "Marketing Director",
    text: "Booking sangat mudah dan cepat. Mobil BMW yang saya sewa dalam kondisi mewah dan wangi. Recommended!",
    rating: 5
  },
  {
    name: "Budi Santoso",
    role: "Event Organizer",
    text: "Menyewa untuk acara company gathering. Semua mobil perfect condition. Terima kasih RentalJaya!",
    rating: 5
  }
];

export function RentalTestimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0f0f13] to-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6">
            <Star size={14} className="text-yellow-500 fill-current" />
            <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Customer Reviews</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Real feedback from real customers who trust us for their vehicle needs
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div>
                  <div className="font-bold text-white text-sm">{item.name}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
