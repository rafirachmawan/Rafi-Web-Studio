// src/sections/hotel/HotelGallery.jsx
// Clean photo gallery with placeholders

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const GALLERY_ITEMS = [
  { label: "Grand Lobby", span: "lg:col-span-2 lg:row-span-2" },
  { label: "Superior Room", span: "lg:col-span-1 lg:row-span-1" },
  { label: "Deluxe Balcony View", span: "lg:col-span-1 lg:row-span-1" },
  { label: "Swimming Pool", span: "lg:col-span-1 lg:row-span-1" },
  { label: "Sultan Cafe Interior", span: "lg:col-span-1 lg:row-span-1" },
  { label: "Executive Suite", span: "lg:col-span-1 lg:row-span-1" },
  { label: "Ballroom Setup", span: "lg:col-span-2 lg:row-span-1" },
  { label: "Venezia Bar", span: "lg:col-span-1 lg:row-span-1" },
  { label: "Fitness Center", span: "lg:col-span-1 lg:row-span-1" },
];

export function HotelGallery() {
  return (
    <section
      id="gallery"
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
            <Camera className="w-3 h-3 text-purple-600" />
            <span className="text-purple-600 text-xs font-bold uppercase tracking-widest">
              Visual Tour
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
            Photo Gallery
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Jelajahi keindahan arsitektur Victorian dan fasilitas modern kami
            melalui galeri foto ini.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] flex items-center justify-center p-6 bg-gradient-to-br from-zinc-100 to-zinc-200 group-hover:from-zinc-200 group-hover:to-zinc-300 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Camera className="w-8 h-8 text-purple-600/40 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-zinc-500 text-[10px]">Image placeholder</p>
                </div>
              </div>

              {/* Label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/95 via-white/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-zinc-900 text-sm font-medium">
                  {item.label}
                </p>
              </div>

              {/* Disabled img tag */}
              <img src="" alt={item.label} style={{ display: "none" }} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-500 text-xs sm:text-sm mb-4">
            Want to see more?
          </p>
          <a
            href="https://wa.me/085196221716?text=${encodeURIComponent('Halo Crown Victoria Hotel, saya ingin meminta katalog lengkap foto-foto hotel.')}"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-zinc-300 text-zinc-700 text-sm font-medium rounded-lg transition-all hover:border-purple-600 hover:text-purple-600 hover:shadow-md"
          >
            Request Full Catalog
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
