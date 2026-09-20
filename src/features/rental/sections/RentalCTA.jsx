// src/sections/rental/RentalCTA.jsx
// Call to action section

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function RentalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-red-600 to-orange-600">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to Drive Your Dream Car?
          </h2>
          
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Book now and experience premium car rental service with professional support
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#inventory"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-lg transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              Browse Vehicles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://wa.me/085196221716"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg transition-all hover:bg-white/10"
            >
              Contact via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
