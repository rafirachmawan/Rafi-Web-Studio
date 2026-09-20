// src/features/hotel/sections/HotelTestimonials.jsx
// Authentic verified guest reviews for Crown Victoria Hotel Tulungagung (Purple Theme)

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, Award, Sparkles } from "lucide-react";
import { GUEST_REVIEWS } from "../data/hotelData";

export function HotelTestimonials() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-bold uppercase tracking-widest mb-4">
            <Star className="w-3.5 h-3.5 text-purple-700 fill-purple-700" />
            <span>Ulasan & Testimonial Tamu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Pengalaman Berkesan Bersama Kami
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Kepercayaan lebih dari 90+ ulasan terverifikasi membuktikan kenyamanan,
            keramahan layanan, dan cita rasa kuliner terbaik di Tulungagung.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {GUEST_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#FAF9FC] border border-zinc-200 hover:border-purple-500/40 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating score badge & stars */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-purple-600 fill-purple-600" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-purple-900 bg-purple-100 px-2.5 py-1 rounded-full">
                    {review.rating} / 10
                  </span>
                </div>

                <h4 className="text-base font-black text-zinc-950 mb-3 leading-snug">
                  "{review.title}"
                </h4>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900">
                    {review.name}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {review.role}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-purple-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
