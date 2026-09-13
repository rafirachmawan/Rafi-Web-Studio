// src/sections/hotel/HotelCTA.jsx
// Call to action section

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export function HotelCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0f0f13] to-[#0a0a0c]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6 tracking-tight">
            Ready for an Unforgettable Experience?
          </h2>
          
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Book your stay at Crown Victoria Hotel and experience the perfect blend of Victorian elegance and modern luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#rooms"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-bold rounded-lg transition-all shadow-lg hover:bg-amber-500 transform hover:-translate-y-0.5"
            >
              View Available Rooms
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://wa.me/085196221716?text=${encodeURIComponent('Halo Crown Victoria Hotel, saya ingin melakukan reservasi. Mohon bantuannya.')}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-zinc-700 text-zinc-300 font-bold rounded-lg transition-all hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/5"
            >
              <Phone className="w-5 h-5" />
              Book via WhatsApp
            </a>
          </div>

          {/* Quick contact info */}
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-500 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+62 851-9622-1716</span>
              </div>
              <div className="hidden sm:inline text-zinc-700">|</div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Open 24 Hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
