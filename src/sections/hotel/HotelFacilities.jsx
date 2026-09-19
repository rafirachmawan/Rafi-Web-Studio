// src/sections/hotel/HotelFacilities.jsx
// Clean facilities showcase with image placeholders

import { motion } from "framer-motion";
import {
  Waves,
  Utensils,
  Coffee,
  Wifi,
  Dumbbell,
  Clock,
  Car,
  Calendar,
} from "lucide-react";

const FACILITIES = [
  {
    icon: Waves,
    title: "Swimming Pool",
    desc: "Outdoor infinity pool with city view",
    color: "blue",
  },
  {
    icon: Utensils,
    title: "Sultan Cafe & Resto",
    desc: "Fine dining with international cuisine",
    color: "amber",
  },
  {
    icon: Coffee,
    title: "Venezia Bar",
    desc: "Premium cocktails and live music",
    color: "purple",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    desc: "Complimentary fiber optic internet",
    color: "green",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    desc: "Modern equipment and personal training",
    color: "red",
  },
  {
    icon: Clock,
    title: "24-Hour Room Service",
    desc: "Round-the-clock in-room dining",
    color: "orange",
  },
  {
    icon: Car,
    title: "Airport Transfer",
    desc: "Luxury shuttle service available",
    color: "blue",
  },
  {
    icon: Calendar,
    title: "Event Spaces",
    desc: "Ballroom for weddings and conferences",
    color: "amber",
  },
];

export function HotelFacilities() {
  return (
    <section
      id="facilities"
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
              Amenities
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
            Hotel Facilities
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Kami menyediakan fasilitas lengkap kelas atas untuk mengoptimalkan
            pengalaman Anda selama di Tulungagung.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Image Placeholder Area */}
              <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center relative group-hover:bg-gradient-to-br from-zinc-200 to-zinc-300 transition-all">
                <div className="text-center px-4">
                  <facility.icon
                    className={`w-12 h-12 mx-auto mb-3 opacity-40 text-purple-600 group-hover:opacity-100 transition-opacity`}
                  />
                  <p className="text-zinc-400 text-[10px] font-medium uppercase tracking-widest">
                    Facility Image
                  </p>
                </div>

                {/* Disabled img tag */}
                <img src="" alt={facility.title} style={{ display: "none" }} />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-zinc-900 font-bold text-sm mb-2 group-hover:text-purple-600 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-white border border-zinc-200 rounded-xl shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-zinc-900 font-bold text-sm sm:text-base mb-1">
                Need More Information?
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                Our concierge team is available 24/7
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-zinc-600 text-xs">
                <Clock className="w-4 h-4 text-purple-600" />
                <span>Open 24 hours</span>
              </div>
              <div className="h-4 w-px bg-zinc-300" />
              <a
                href="#contact"
                className="text-purple-600 text-xs sm:text-sm font-bold hover:text-purple-700 transition-colors"
              >
                Contact Concierge →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
