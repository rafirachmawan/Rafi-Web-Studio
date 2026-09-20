import { resto } from "../data/resto";
import { useState } from "react";
import { motion } from "framer-motion";

export function RestoMenuGrid({ phone }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const data = resto || { name: "Mie Gacoan", categories: [], menus: [] };

  const filteredMenus = activeCategory === "all" 
    ? (data.menus || []) 
    : (data.menus || []).filter(menu => menu.category === activeCategory);

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xs text-pink-500 font-bold tracking-[0.3em] uppercase mb-4">Our Menu</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Explore the Flavor</h3>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Pilih dari berbagai varian mie pedas, dimsum, hingga minuman segar!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", ...(data.categories || [])].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-[#db2777] text-white shadow-md shadow-pink-500/20"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
              }`}
            >
              {cat === "all" ? "All Menu" : cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMenus.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-white border border-slate-200/80 hover:border-pink-300 rounded-2xl overflow-hidden flex flex-col justify-between p-4 transition-all shadow-md shadow-slate-200/40 hover:shadow-xl group"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-3 relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 bg-[#db2777] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#db2777] transition-colors mb-1">{item.name}</h3>
                <p className="text-[#db2777] font-black font-serif text-sm mb-3">Rp {item.price}</p>
              </div>

              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(`Halo Mie Gacoan Tulungagung, saya mau pesan: *${item.name}* (Rp ${item.price}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#db2777] hover:bg-[#be185d] text-white text-xs font-black py-2.5 rounded-xl uppercase tracking-wider text-center transition-all shadow-sm shadow-pink-500/20"
              >
                Pesan Menu
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
