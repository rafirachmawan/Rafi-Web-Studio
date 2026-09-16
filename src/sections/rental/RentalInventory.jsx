// src/sections/rental/RentalInventory.jsx
// Professional vehicle inventory showcase with clean placeholders

import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Car, Gauge, Users, Fuel } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: 'BMW 5 Series',
    category: 'luxury',
    description: 'Kelas kemewaban premium dengan kenyamanan maksimal & performa tinggi.',
    specs: {
      seats: '7 Kursi Premium',
      transmission: 'Automatic Sport',
      engine: '2000cc TwinTurbo',
      fuel: 'Premium Petrol'
    },
    price: '2500000'
  },
  {
    id: 2,
    name: 'Mercedes E-Class',
    category: 'luxury',
    description: 'Kemewahan Mercedes dengan interior Nappa Leather & teknologi canggih.',
    specs: {
      seats: '7 Kursi Kulit',
      transmission: 'Automatic 9G-TRONIC',
      engine: '2000cc Turbo',
      fuel: 'Premium Petrol'
    },
    price: '2800000'
  },
  {
    id: 3,
    name: 'Toyota Fortuner',
    category: 'suv',
    description: 'SUV tangguh untuk segala medan dengan ruang lega & mesin bertenaga.',
    specs: {
      seats: '7 Kursi Empuk',
      transmission: 'Automatic/Manual',
      engine: '2400cc Diesel Turbo',
      fuel: 'Diesel Premium'
    },
    price: '1800000'
  },
  {
    id: 4,
    name: 'Honda CR-V',
    category: 'suv',
    description: 'Urban SUV modern dengan desain elegan & efisiensi bahan bakar optimal.',
    specs: {
      seats: '5 Kursi Multifungsi',
      transmission: 'Automatic CVT',
      engine: '1500cc Turbo Direct',
      fuel: 'Premium Petrol'
    },
    price: '1400000'
  },
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
                    {vehicle.category.toUpperCase()}
                  </span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Vehicle Name */}
                <h3 className="font-black text-lg md:text-xl text-white mb-2 line-clamp-1 leading-tight">
                  {vehicle.name}
                </h3>

                {/* Description - New Professional Feature */}
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-5 line-clamp-2">
                  {vehicle.description}
                </p>

                {/* Technical Specs Grid */}
                <div className="space-y-2 mb-6 pb-5 border-b border-zinc-800">
                  {/* Seats */}
                  <div className="flex items-center gap-2 text-xs">
                    <Users size={14} className="text-red-500 shrink-0" />
                    <span className="text-zinc-300">{vehicle.specs.seats}</span>
                  </div>
                  
                  {/* Transmission/Drive */}
                  <div className="flex items-center gap-2 text-xs">
                    <Car size={14} className="text-red-500 shrink-0" />
                    <span className="text-zinc-300">
                      {vehicle.specs.transmission || vehicle.specs.drive}
                    </span>
                  </div>
                  
                  {/* Engine */}
                  <div className="flex items-center gap-2 text-xs">
                    <Gauge size={14} className="text-red-500 shrink-0" />
                    <span className="text-zinc-300">{vehicle.specs.engine}</span>
                  </div>
                  
                  {/* Fuel (if exists) */}
                  {vehicle.specs.fuel && (
                    <div className="flex items-center gap-2 text-xs">
                      <Fuel size={14} className="text-red-500 shrink-0" />
                      <span className="text-zinc-300">{vehicle.specs.fuel}</span>
                    </div>
                  )}
                  
                  {/* Drive Type (if exists and no transmission) */}
                  {vehicle.specs.drive && !vehicle.specs.transmission && (
                    <div className="flex items-center gap-2 text-xs">
                      <Car size={14} className="text-red-500 shrink-0" />
                      <span className="text-zinc-300">{vehicle.specs.drive}</span>
                    </div>
                  )}
                </div>

                {/* Price & Button - Fixed Position Bottom */}
                <div className="flex items-center justify-between pt-5 border-t border-zinc-800 mt-auto">
                  <div className="text-left flex-shrink-0">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Per Day</div>
                    <div className="text-base font-bold text-red-500 leading-tight">
                      Rp {parseInt(vehicle.price).toLocaleString('id-ID')}
                    </div>
                  </div>
                  
                  <a
                    href={`https://wa.me/085196221716?text=${encodeURIComponent(`Halo, saya ingin booking: ${vehicle.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-black font-bold text-xs rounded-lg transition-colors shrink-0 whitespace-nowrap ml-auto"
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
