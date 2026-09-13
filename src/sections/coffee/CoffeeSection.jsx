// src/sections/coffee/CoffeeSection.jsx
// Placeholder section for coffee products showcase

import { motion } from 'framer-motion';

export function CoffeeSection() {
  return (
    <section id="coffee" className="relative py-24 px-6 bg-[#0B1512]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-4">
            Our Signature Coffee
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
            Explore our meticulously crafted coffee offerings
          </p>
        </motion.div>

        {/* Image Grid - PLACEHOLDER AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image Card 1 - Replace src with actual image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2722] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00704A]/50 transition-all"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
              <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest text-center px-4">
                Image Area - Replace with actual coffee product image
              </span>
              <img 
                src="" 
                alt="Coffee Product 1" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: 'none' }} // Remove this after adding image
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Featured Coffee</h3>
              <p className="text-sm text-zinc-400">Description goes here</p>
            </div>
          </motion.div>

          {/* Image Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1A2722] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00704A]/50 transition-all"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
              <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest text-center px-4">
                Image Area - Replace with actual coffee product image
              </span>
              <img 
                src="" 
                alt="Coffee Product 2" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: 'none' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Featured Coffee</h3>
              <p className="text-sm text-zinc-400">Description goes here</p>
            </div>
          </motion.div>

          {/* Image Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#1A2722] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00704A]/50 transition-all"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
              <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest text-center px-4">
                Image Area - Replace with actual coffee product image
              </span>
              <img 
                src="" 
                alt="Coffee Product 3" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: 'none' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Featured Coffee</h3>
              <p className="text-sm text-zinc-400">Description goes here</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
