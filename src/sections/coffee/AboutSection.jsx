// src/sections/coffee/AboutSection.jsx
// Starbucks About Us / Our Story Placeholder

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-[#0B1512] to-[#0F1F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">
                Our Story & Heritage
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                Since 1971, we've been committed to inspiring and nurturing the human spirit 
                through the power of connection and coffee. Our journey began in Seattle's 
                Pike Place Market, and we've grown into a global community of over 350 million 
                members worldwide.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                We source, roast, and retail premium-quality coffee with an unwavering dedication 
                to sustainability, social responsibility, and the pursuit of excellence.
              </p>
            </motion.div>

            {/* Stats - PLACEHOLDER AREA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {[
                { value: "30+", label: "Countries" },
                { value: "35K+", label: "Stores" },
                { value: "350M+", label: "Members" }
              ].map((stat, index) => (
                <div key={index} className="bg-[#1A2722] p-4 rounded-xl border border-white/5">
                  <div className="text-2xl md:text-3xl font-black text-emerald-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Image Gallery - PLACEHOLDER AREAS */}
          <div className="grid grid-cols-2 gap-4">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="aspect-[3/4] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden border border-white/5 group relative"
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
                  <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-2">
                    Heritage Image
                  </p>
                  <p className="text-zinc-600 text-xs">Historical story photo</p>
                </div>
              </div>
              
              {/* Disabled img tag */}
              <img 
                src="" 
                alt="Our Story" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: 'none' }}
              />
            </motion.div>

            {/* Secondary Images Stack */}
            {[1, 2].map((num) => (
              <motion.div 
                key={num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + num * 0.1 }}
                className={`aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden border border-white/5 group relative ${num === 2 ? 'translate-y-8' : ''}`}
              >
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <BookOpen className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">
                      Story Image {num + 1}
                    </p>
                    <p className="text-zinc-600 text-[10px]">Coffee culture photo</p>
                  </div>
                </div>
                
                {/* Disabled img tag */}
                <img 
                  src="" 
                  alt={`Story Image ${num + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ display: 'none' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
