// src/sections/resto/RestoCTA.jsx
// Call to action section for Mie Gacoan

import { motion } from 'framer-motion';
import { Flame, ShoppingCart, MessageCircle } from 'lucide-react';

export function RestoCTA({ phone }) {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-red-50 via-pink-50 to-red-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Ready for Spicy Adventure?
          </h2>
          
          <p className="text-zinc-700 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Segera rasakan sensasi mie pedas legendaris yang bikin nagih! Order sekarang dan nikmati promo spesial.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#db2777] text-white font-bold rounded-lg transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 border border-[#db2777]"
            >
              Browse Menu
              <ShoppingCart className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent('Halo Mie Gacoan, saya ingin melakukan pemesanan.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#db2777] text-[#db2777] font-bold rounded-lg transition-all hover:bg-[#db2777] hover:text-white"
            >
              <MessageCircle className="w-5 h-5" />
              Chat via WhatsApp
            </a>
          </div>

          {/* Quick info */}
          <div className="mt-12 pt-8 border-t border-stone-200">
            <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-600 text-sm">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-600" />
                <span>Available Level 1-10</span>
              </div>
              <div className="hidden sm:inline text-zinc-400">|</div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-[#db2777]" />
                <span>Fast Delivery Available</span>
              </div>
              <div className="hidden sm:inline text-zinc-400">|</div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Best Quality Ingredients</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Import Star icon at top
const Star = ({ size = 16, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
