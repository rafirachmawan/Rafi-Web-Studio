// src/sections/hotel/HotelCTA.jsx
// Call to action section

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export function HotelCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)"
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
            Ready for an Unforgettable Experience?
          </h2>
          
          <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Book your stay at Crown Victoria Hotel and experience the perfect blend of Victorian elegance and modern luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#rooms"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Available Rooms
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://wa.me/085196221716?text=${encodeURIComponent('Halo Crown Victoria Hotel, saya ingin melakukan reservasi. Mohon bantuannya.')}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-zinc-300 hover:border-purple-600 text-zinc-800 hover:text-purple-600 font-bold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5 text-purple-600" />
              Book via WhatsApp
            </a>
          </div>

          {/* Quick contact info */}
          <div className="mt-12 pt-8 border-t border-zinc-200">
            <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-600 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-600" />
                <span>+62 851-9622-1716</span>
              </div>
              <div className="hidden sm:inline text-zinc-400">|</div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
