// src/sections/rental/RentalStats.jsx
// Statistics counter section with placeholder image area

import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

export function RentalStats() {
  const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "50+", label: "Premium Vehicles" },
    { value: "99%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Active" }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1a1a1f] to-[#0f0f13]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 mb-6">
                <Trophy size={14} className="text-yellow-500" />
                <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Our Achievement</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Trusted by Hundreds of Clients
              </h2>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Our track record speaks for itself. We've been delivering exceptional car rental 
                services with a focus on quality and customer satisfaction.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all"
                  >
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Image Gallery Placeholders */}
          <div className="grid grid-cols-2 gap-4">
            {/* Main large image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2 aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden relative group border border-zinc-800"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Award className="w-16 h-16 text-zinc-700 group-hover:text-zinc-600 transition-colors" />
              </div>
              <span className="absolute bottom-4 left-4 text-zinc-500 text-xs font-medium uppercase tracking-widest">
                Featured Vehicle Collection
              </span>
            </motion.div>

            {/* Two smaller images stacked */}
            {[1, 2].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + num * 0.1 }}
                className={`aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden relative group border border-zinc-800 ${num === 2 ? 'translate-y-8' : ''}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-10 h-10 text-zinc-700 group-hover:text-zinc-600 transition-colors" />
                </div>
                <span className="absolute bottom-3 left-3 text-zinc-500 text-[9px] font-medium uppercase tracking-widest">
                  Sample Image {num}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
