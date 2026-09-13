// src/sections/rental/RentalInventory.jsx
// Professional vehicle inventory showcase with clean placeholders

import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';

const vehicles = [
  { id: 1, name: 'BMW 5 Series', category: 'luxury', specs: ['Automatic', '7 Seats', 'Premium Audio'], price: '2500000' },
  { id: 2, name: 'Mercedes E-Class', category: 'luxury', specs: ['Automatic', '7 Seats', 'Nappa Leather'], price: '2800000' },
  { id: 3, name: 'Toyota Fortuner', category: 'suv', specs: ['Automatic', '7 Seats', '4WD'], price: '1800000' },
  { id: 4, name: 'Honda CR-V', category: 'suv', specs: ['Automatic', '5 Seats', 'AWD'], price: '1400000' },
];

export function RentalInventory() {
  return (
    <section id="inventory" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0c] to-[#0f0f13]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 mb-6">
            <Calendar size={14} className="text-zinc-400" />
            <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Our Fleet</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Premium Vehicle Inventory
          </h2>
          
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Each vehicle is meticulously maintained and sanitized for your safety and comfort.
          </p>
        </motion.div>

        {/* Vehicle cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300"
            >
              {/* Image placeholder area */}
              <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-zinc-700/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                
                {/* Center icon/placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-zinc-800 flex items-center justify-center">
                      <CheckCircle2 size={28} className="text-zinc-600" />
                    </div>
                    <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest">
                      Image Placeholder
                    </span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-700">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-300">
                    {vehicle.category}
                  </span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-white text-lg mb-3 line-clamp-1">
                  {vehicle.name}
                </h3>

                {/* Specs grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {vehicle.specs.map((spec, idx) => (
                    <div key={idx} className="text-center p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider">{spec}</div>
                    </div>
                  ))}
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <div className="text-left">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Per Day</div>
                    <div className="text-sm font-bold text-red-500">
                      Rp {parseInt(vehicle.price).toLocaleString('id-ID')}
                    </div>
                  </div>
                  
                  <a
                    href={`https://wa.me/085196221716?text=${encodeURIComponent(`Halo, saya ingin booking: ${vehicle.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-red-500 hover:bg-red-600 text-black font-bold text-xs rounded-lg transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
