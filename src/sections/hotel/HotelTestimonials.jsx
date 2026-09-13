// src/sections/hotel/HotelTestimonials.jsx
// Clean testimonial section

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "James Richardson",
    role: "Business Traveler",
    text: "Pengalaman menginap yang luar biasa! Desain Victorian yang elegan dipadukan dengan layanan modern yang sangat profesional. Lokasi sangat strategis di pusat kota.",
    rating: 5
  },
  {
    name: "Sari Pratama",
    role: "Wedding Organizer",
    text: "Melaksanakan acara wedding di ballroom Victoria Grand. Pelayanan sangat memuaskan, staff responsif, dan fasilitas lengkap. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Tourism Blogger",
    text: "One of the best hotels in East Java. The Victorian architecture is beautifully preserved while offering all modern amenities. Sultan Cafe has excellent cuisine.",
    rating: 5
  }
];

export function HotelTestimonials() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 mb-6">
            <Star className="w-3 h-3 text-amber-500 fill-current" />
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Guest Reviews</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-4 tracking-tight">
            What Guests Say
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Kehidupan nyata dari tamu yang telahExperience Crown Victoria Hotel
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-[#0f0f13] border border-zinc-800 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic group-hover:text-zinc-200 transition-colors">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600/20 to-zinc-800 flex items-center justify-center border border-amber-500/20">
                  <span className="text-amber-500 font-bold text-sm">
                    {item.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </span>
                </div>
                
                <div>
                  <div className="font-bold text-white text-sm">{item.name}</div>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-wider">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
