// src/sections/hotel/HotelTestimonials.jsx
// Clean testimonial section

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "James Richardson",
    role: "Business Traveler",
    text: "Pengalaman menginap yang luar biasa! Desain Victorian yang elegan dipadukan dengan layanan modern yang sangat profesional. Lokasi sangat strategis di pusat kota.",
    rating: 5,
  },
  {
    name: "Sari Pratama",
    role: "Wedding Organizer",
    text: "Melaksanakan acara wedding di ballroom Victoria Grand. Pelayanan sangat memuaskan, staff responsif, dan fasilitas lengkap. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Tourism Blogger",
    text: "One of the best hotels in East Java. The Victorian architecture is beautifully preserved while offering all modern amenities. Sultan Cafe has excellent cuisine.",
    rating: 5,
  },
];

export function HotelTestimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
            <Star className="w-3 h-3 text-purple-600 fill-current" />
            <span className="text-purple-600 text-xs font-bold uppercase tracking-widest">
              Guest Reviews
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
            What Guests Say
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Kehidupan nyata dari tamu yang telah Experience Crown Victoria Hotel
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
              className="group bg-white border border-zinc-200 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-purple-600 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6 italic group-hover:text-zinc-800 transition-colors">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-200">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-zinc-100 flex items-center justify-center border border-purple-200">
                  <span className="text-purple-600 font-bold text-sm">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                </div>

                <div>
                  <div className="font-bold text-zinc-900 text-sm">
                    {item.name}
                  </div>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-wider">
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
