// src/sections/resto/RestoFeatures.jsx
// Clean feature showcase for Mie Gacoan

import { motion } from 'framer-motion';
import { Flame, Sparkles, Star, Truck } from 'lucide-react';

const FEATURES = [
  {
    icon: Flame,
    title: "Authentic Spicy Taste",
    description: "Resep asli mie pedas dengan bumbu rahasia yang otentik dan menggugah selera"
  },
  {
    icon: Sparkles,
    title: "Fresh Ingredients",
    description: "Bahan-bahan berkualitas tinggi diproses setiap hari untuk menjamin kesegaran"
  },
  {
    icon: Star,
    title: "Custom Spice Level",
    description: "Pilih tingkat kepedasan dari level 1-10 sesuai kemampuan lidahmu"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Pengiriman cepat sampai di tempat dengan packaging aman dan rapi"
  }
];

export function RestoFeatures() {
  return (
    <section className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 mb-6">
            <Flame className="w-3 h-3 text-red-500 fill-current" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            The Gacoan Experience
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Kami berkomitmen memberikan pengalaman makan terbaik dengan kualitas terbaik
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group p-6 bg-[#1a1a1a] border border-zinc-800 rounded-xl hover:border-red-500/40 transition-all duration-300"
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-red-500" />
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
