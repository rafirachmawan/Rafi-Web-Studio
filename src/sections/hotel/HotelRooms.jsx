// src/sections/hotel/HotelRooms.jsx
// Professional room showcase with clean placeholders

import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

const ROOMS_DATA = [
  {
    name: "Superior Room",
    size: "32 sqm",
    price: "650.000",
    features: ["City View", "King or Twin Bed", "Complimentary Water"],
    amenities: ["WiFi", "AC", "TV"],
  },
  {
    name: "Deluxe Room",
    size: "36 sqm",
    price: "800.000",
    features: ["Pool View", "King Bed", "Private Balcony"],
    amenities: ["WiFi", "AC", "TV", "Mini Bar"],
  },
  {
    name: "Suite Room",
    size: "48 sqm",
    price: "1.100.000",
    features: ["Living Room Area", "Bathtub", "Premium Toiletries"],
    amenities: ["WiFi", "AC", "TV", "Mini Bar", "Coffee Maker"],
  },
  {
    name: "Victoria Grand Suite",
    size: "120 sqm",
    price: "2.500.000",
    features: ["In-Room Jacuzzi", "Private Dining", "Butler Service"],
    amenities: ["WiFi", "AC", "TV", "Mini Bar", "Jacuzzi", "Dining Area"],
  },
];

export function HotelRooms({ phone }) {
  return (
    <section
      id="rooms"
      className="py-24 px-6 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-purple-600 text-xs font-bold uppercase tracking-widest">
              Accommodations
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
            Signature Rooms
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Desain kamar klasik yang hangat dan menenangkan, disempurnakan
            dengan furnitur kayu mewah dan ornamen Victorian yang menakjubkan.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROOMS_DATA.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/70 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-zinc-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-2">
                      {room.name} Image
                    </p>
                    <p className="text-zinc-400 text-[10px]">
                      Replace with actual room photo
                    </p>
                  </div>
                </div>

                {/* Size Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-zinc-200/50">
                  <span className="text-purple-600 text-xs font-bold uppercase tracking-wider">
                    {room.size}
                  </span>
                </div>

                {/* Disabled img tag for future use */}
                <img src="" alt={room.name} style={{ display: "none" }} />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-zinc-900 font-serif">
                    {room.name}
                  </h3>
                  <div className="text-right">
                    <p className="text-purple-600 text-lg font-bold">
                      Rp {room.price}
                    </p>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-wider">
                      per night
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded bg-zinc-100 border border-zinc-200"
                    >
                      <Check className="w-3 h-3 text-purple-600" />
                      <span className="text-zinc-600 text-[10px]">
                        {feature}
                      </span>
                    </span>
                  ))}
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4 pt-4 border-t border-zinc-200">
                  {room.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="text-zinc-600 text-[10px] bg-zinc-50 px-2 py-1 rounded border border-zinc-200"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(`Halo Crown Victoria Hotel, saya ingin reservasi ${room.name}. Mohon informasikan ketersediaan dan harga.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-purple-600 text-white text-sm font-bold rounded-lg transition-all hover:bg-purple-700 w-full justify-center group/btn"
                >
                  Book Now
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
