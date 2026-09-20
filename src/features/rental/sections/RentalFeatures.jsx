// src/sections/rental/RentalFeatures.jsx
// Clean feature showcase section

import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle2, Users } from "lucide-react";

const features = [
  { 
    icon: Shield, 
    title: "Premium Vehicles", 
    desc: "Only top-tier cars with less than 3 years age" 
  },
  { 
    icon: Clock, 
    title: "24/7 Support", 
    desc: "Round-the-clock assistance whenever you need it" 
  },
  { 
    icon: CheckCircle2, 
    title: "Easy Booking", 
    desc: "Simple online reservation in under 5 minutes" 
  },
  { 
    icon: Users, 
    title: "Professional Service", 
    desc: "Experienced staff ready to help with your needs" 
  }
];

export function RentalFeatures() {
  return (
    <section className="py-24 px-6 bg-[#0f0f13]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
            We're committed to providing the best car rental experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-red-500" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-white text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.desc}
              </p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
