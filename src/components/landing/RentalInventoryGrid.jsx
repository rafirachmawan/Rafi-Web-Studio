import { useState } from "react";
import { rental } from "../../data/rental";
import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

export function RentalInventoryGrid({ phone }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const data = rental || { 
    hero: { title: "Premium Car Rental", subtitle: "" }, 
    inventory: [],
    categories: [{id: "luxury", name: "Luxury"}, {id: "suv", name: "SUV"}]
  };

  const categories = [
    { id: "all", name: "Semua Kategori" },
    ...(data.categories || [])
  ];

  const filteredInventory = activeCategory === "all"
    ? (data.inventory || [])
    : (data.inventory || []).filter(item => 
        item.name.includes(activeCategory) || item.specs?.some(s => s.toLowerCase().includes(activeCategory.toLowerCase()))
      );

  return (
    <section id="inventory" className="py-24 px-6 bg-[#0e0e12]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs text-red-500 font-bold tracking-[0.3em] uppercase mb-4">Our Fleet</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Premium Vehicle Inventory</h3>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Pilih kendaraan premium Anda dengan harga kompetitif dan layanan profesional!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? "bg-red-500 text-black shadow-lg shadow-red-500/30"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInventory.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-red-500/50 transition-all"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-red-500/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-4xl font-black text-white/20">{item.name.substring(0, 2)}</span>
              </div>

              <div className="p-6">
                <h3 className="font-black text-lg text-white mb-3">{item.name}</h3>
                
                {/* Specs */}
                <div className="space-y-2 mb-4">
                  {item.specs.slice(0, 3).map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                      <div className="w-1 h-1 rounded-full bg-red-500" />
                      {spec}
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Start From</p>
                    <p className="text-sm text-white font-bold">Rp {item.price}</p>
                  </div>
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(`Halo Rental Jaya, saya ingin booking: *${item.name}* (Rp ${item.price}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-600 text-black font-black text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-1"
                  >
                    Book <ChevronRight className="w-4 h-4" />
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
