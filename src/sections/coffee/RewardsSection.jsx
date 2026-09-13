// src/sections/coffee/RewardsSection.jsx
// Starbucks Rewards Program Placeholder

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function RewardsSection() {
  return (
    <section id="rewards" className="relative py-24 px-6 bg-gradient-to-b from-[#0B1512] to-[#0F1F1A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
            <Star size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Starbucks Rewards</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
            Earn stars and unlock rewards with every purchase
          </p>
        </motion.div>

        {/* Rewards Cards - PLACEHOLDER IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1A2722] rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/50 transition-all group"
            >
              {/* Image Area Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative group-hover:bg-gradient-to-br from-emerald-900/20 to-zinc-900 transition-all">
                <div className="text-center px-4">
                  <Star size={48} className="mx-auto mb-4 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                  <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest">
                    Reward Image {index}
                  </span>
                </div>
                <img 
                  src="" 
                  alt={`Reward ${index}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ display: 'none' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-md font-bold text-white mb-2">Exclusive Benefit</h3>
                <p className="text-sm text-zinc-400">Benefit description goes here</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
