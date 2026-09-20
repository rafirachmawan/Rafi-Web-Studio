import { useState } from "react";
import { rental } from "../data/rental";
import { motion } from "framer-motion";

export function RentalInventoryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Use actual Yamaha inventory data
  const inventoryData = rental?.inventory || [];

  // Extract categories from inventory and navigation
  const categoryIds = [
    "all",
    ...new Set(inventoryData.map((item) => item.category)),
  ];

  const filteredInventory =
    activeCategory === "all"
      ? inventoryData
      : inventoryData.filter((item) => item.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-blue-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Produk Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Yamaha Motor Indonesia
          </h3>
        </div>

        {/* Category Filter - Responsive */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryIds.slice(0, 8).map((catId) => {
            const category = rental.categories?.find((c) => c.id === catId);
            return (
              <button
                key={catId}
                onClick={() => setActiveCategory(catId)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === catId
                    ? "bg-blue-500 text-black"
                    : "bg-white text-zinc-700 hover:bg-gray-100 border border-zinc-200"
                }`}
              >
                {catId === "all" ? "All" : catId}
              </button>
            );
          })}
        </div>

        {/* Inventory Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredInventory.map((item, i) => (
            <motion.div
              key={item.code || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden group hover:shadow-xl transition-all"
            >
              {/* Placeholder Image Area */}
              <div className="aspect-square bg-gradient-to-b from-zinc-50 to-white border-b border-zinc-200 flex items-center justify-center">
                <span className="text-zinc-400 text-2xl font-semibold tracking-wide">
                  Placeholder
                </span>
              </div>

              {/* Badge */}
              <div className="px-4 py-2 bg-blue-50 flex items-center justify-between">
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded z-10 shadow-sm">
                  {item.tags?.[0]}
                </span>
                <span className="text-zinc-400 text-xs font-medium uppercase tracking-wide">
                  YAMAHA MOTOR
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-zinc-900 text-sm mb-2 line-clamp-2">
                  {item.name}
                </h3>

                {/* Year & Price */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-zinc-500">{item.year}</span>
                  <span className="text-xs text-blue-500 font-bold">
                    {item.price}
                  </span>
                </div>

                {/* Specs - Compact */}
                <div className="space-y-1 mb-3">
                  {item.specs?.slice(0, 2).map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 text-xs text-zinc-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500" />
                      {spec}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={`https://wa.me/6281212345678?text=${encodeURIComponent(`Halo, saya tertarik dengan *${item.name}* tahun ${item.year}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 bg-blue-500 hover:bg-blue-600 text-black text-center text-xs font-bold rounded transition-colors"
                >
                  Hubungi Dealer
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredInventory.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500">Tidak ada produk di kategori ini.</p>
          </div>
        )}

        {/* Total count */}
        <div className="text-center mt-8 text-zinc-500 text-sm">
          Menampilkan {filteredInventory.length} dari {inventoryData.length}{" "}
          produk Yamaha
        </div>
      </div>
    </section>
  );
}
