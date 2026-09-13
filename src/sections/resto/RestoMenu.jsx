// src/sections/resto/RestoMenu.jsx
// Clean menu showcase with image placeholders

import { motion } from 'framer-motion';
import { Flame, Star, ShoppingCart } from 'lucide-react';

const MENU_ITEMS = [
  {
    name: "Mie Gacoan Original",
    description: "Mie pedas dengan level kepedasan yang bisa disesuaikan - dari normal sampai super gacoan!",
    price: "10000",
    spicyLevel: 3,
    category: "mie",
    popular: true
  },
  {
    name: "Mie Gacoan Special",
    description: "Paket lengkap dengan telur, sosis, dan topping premium untuk pengalaman terbaik",
    price: "15000",
    spicyLevel: 4,
    category: "mie",
    popular: true
  },
  {
    name: "Dimsum Ayam",
    description: "Dimsum ayam juicy dengan kulit tipis dan lembut, disajikan dengan sambal balado",
    price: "12000",
    spicyLevel: 0,
    category: "dimsum",
    popular: false
  },
  {
    name: "Dimsum Udang",
    description: "Dimsum udang pilihan dengan tekstur kenyal dan rasa authentic Chinese food",
    price: "14000",
    spicyLevel: 0,
    category: "dimsum",
    popular: false
  },
  {
    name: "Es Gacoan Lemon",
    description: "Minuman segar dengan lemon segar, mint, dan es crystal yang menyegarkan",
    price: "8000",
    spicyLevel: 0,
    category: "minuman",
    popular: true
  },
  {
    name: "Es Gacoan Strawberry",
    description: "Strawberry smoothie creamy dengan potongan strawberry asli dan susu segar",
    price: "9000",
    spicyLevel: 0,
    category: "minuman",
    popular: false
  },
  {
    name: "Kerupuk Ceker",
    description: "Kerupuk ceker renyah dengan bumbu bawang putih dan cabai yang gurih",
    price: "6000",
    spicyLevel: 2,
    category: "snack",
    popular: false
  },
  {
    name: "Bakso Sapi",
    description: "Bakso sapi murni dengan isi daging melimpah dan kaldu yang kaya rasa",
    price: "11000",
    spicyLevel: 1,
    category: "snack",
    popular: false
  }
];

export function RestoMenu({ phone }) {
  const getSpicyLevelColor = (level) => {
    if (level === 0) return "bg-green-500/20 text-green-500 border-green-500/30";
    if (level <= 2) return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
    if (level <= 3) return "bg-orange-500/20 text-orange-500 border-orange-500/30";
    return "bg-red-500/20 text-red-500 border-red-500/30";
  };

  return (
    <section id="menu" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
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
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Menu Andalan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Mie Pedas & Favorit
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Pilih tingkat kepedasan sesuai kemampuanmu! Dari level 1-10, kita punya semua.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#1a1a1a] border border-zinc-800 rounded-xl overflow-hidden hover:border-red-500/40 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center">
                    <ShoppingCart className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                      {item.name} Image
                    </p>
                  </div>
                </div>

                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider">
                    Popular
                  </div>
                )}

                {/* Disabled img tag */}
                <img src="" alt={item.name} style={{ display: 'none' }} />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Name & Price */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-bold text-sm leading-snug">{item.name}</h3>
                  <p className="text-red-500 font-bold text-sm ml-2">Rp {item.price}</p>
                </div>

                {/* Description */}
                <p className="text-zinc-500 text-xs leading-relaxed mb-3 line-clamp-2">
                  {item.description}
                </p>

                {/* Spicy Level */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded border ${getSpicyLevelColor(item.spicyLevel)}`}>
                    <Flame className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase">Level {item.spicyLevel}</span>
                  </div>
                  
                  <button className="text-zinc-400 hover:text-red-500 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-500 text-sm mb-4">Ada pertanyaan atau ingin order dalam jumlah besar?</p>
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent('Halo Mie Gacoan, saya ingin menanyakan tentang menu.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-zinc-700 text-zinc-300 text-sm font-medium rounded-lg transition-all hover:border-red-500 hover:text-red-500 hover:bg-red-500/5"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
