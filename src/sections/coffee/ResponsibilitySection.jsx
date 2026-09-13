// src/sections/coffee/ResponsibilitySection.jsx
// Starbucks Sustainability & Social Responsibility Placeholder

import { motion } from 'framer-motion';
import { Leaf, Globe, Heart } from 'lucide-react';

export function ResponsibilitySection() {
  return (
    <section id="responsibility" className="relative py-24 px-6 bg-[#0B1512]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-4">
            Our Commitment to the World
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
            Building a sustainable future through coffee
          </p>
        </motion.div>

        {/* Responsibility Cards - PLACEHOLDER IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "Environmental Stewardship", desc: "Protecting our planet for future generations" },
            { icon: Heart, title: "Community Support", desc: "Empowering communities around the world" },
            { icon: Leaf, title: "Ethical Sourcing", desc: "Sourcing coffee with integrity and respect" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#1A2722] rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/50 transition-all group"
            >
              {/* Image Area Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative group-hover:bg-gradient-to-br from-emerald-900/20 to-zinc-900 transition-all">
                <item.icon size={64} className="text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                <span className="absolute bottom-4 left-4 text-zinc-500 text-xs font-medium uppercase tracking-widest">
                  Responsibility Image {index + 1}
                </span>
                <img 
                  src="" 
                  alt={`Responsibility ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ display: 'none' }}
                />
              </div>
              
              <div className="p-6">
                <item.icon className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
