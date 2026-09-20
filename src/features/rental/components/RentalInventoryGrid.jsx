import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ArrowRight, Gauge, Fuel, Zap, MessageCircle, Sparkles, Eye, Calculator } from "lucide-react";
import { rental } from "../data/rental";
import { MotorDetailModal } from "./MotorDetailModal";
import { MotorPlaceholder } from "./MotorPlaceholder";

export function RentalInventoryGrid({ onSelectForCalculator }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedMotor, setSelectedMotor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const inventory = rental.inventory || [];
  const categories = rental.categories || [];

  // Filtering and sorting logic
  const filteredInventory = useMemo(() => {
    return inventory
      .filter((item) => {
        const matchesCategory = activeCategory === "all" || item.category === activeCategory;
        const matchesSearch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tagline?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.engine?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.priceNum - b.priceNum;
        if (sortBy === "price-high") return b.priceNum - a.priceNum;
        // Default popular
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return 0;
      });
  }, [inventory, activeCategory, searchQuery, sortBy]);

  const handleOpenDetail = (motor) => {
    setSelectedMotor(motor);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Katalog Lengkap Yamaha Motor Indonesia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white font-heading tracking-tight mb-4">
            Line-Up Sepeda Motor 2026
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Pilih kategori motor favorit Anda, dari skutik premium MAXi, retro-modern Classy, matic harian serbaguna, hingga motor sport dan off-road tangguh.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-[1.02]"
                  : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-500"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  activeCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                }`}
              >
                {cat.id === "all"
                  ? inventory.length
                  : inventory.filter((i) => i.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Search & Sort Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm mb-10">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input
              type="text"
              placeholder="Cari model motor (e.g. NMAX, Fazzio, R15, WR155)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="text-xs font-semibold text-zinc-400 whitespace-nowrap hidden sm:inline">
              Urutkan:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-2.5 px-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 text-xs font-bold text-zinc-700 dark:text-zinc-300 focus:outline-none cursor-pointer"
            >
              <option value="popular">Paling Populer</option>
              <option value="price-low">Harga Terendah</option>
              <option value="price-high">Harga Tertinggi</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredInventory.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8">
            <p className="text-zinc-500 text-sm">
              Tidak ada model motor yang cocok dengan pencarian "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-blue-600 text-white font-bold text-xs"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredInventory.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-blue-600/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Showcase Box */}
                <div className="relative aspect-[16/10] bg-gradient-to-b from-blue-50/60 to-white dark:from-zinc-800/60 dark:to-zinc-900/80 p-5 flex items-center justify-center overflow-hidden border-b border-zinc-100 dark:border-zinc-800/80">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                      {item.category}
                    </span>
                    {item.tags?.[0] && (
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                        {item.tags[0]}
                      </span>
                    )}
                  </div>

                  {item.popular && (
                    <div className="absolute top-3.5 right-3.5 z-10 px-2 py-0.5 rounded-full bg-amber-400 text-zinc-950 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-xs">
                      <Sparkles size={10} />
                      <span>Best Seller</span>
                    </div>
                  )}

                  {/* Motor Placeholder */}
                  <MotorPlaceholder name={item.name} category={item.category} />
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white font-heading group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Spec Chips */}
                  <div className="space-y-1.5 py-2 border-y border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                      <Gauge size={14} className="text-blue-600 shrink-0" />
                      <span className="truncate">{item.engine}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                      <Zap size={14} className="text-amber-500 shrink-0" />
                      <span className="truncate">{item.specs?.[0]}</span>
                    </div>
                  </div>

                  {/* Price & DP */}
                  <div className="flex items-baseline justify-between pt-1">
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase font-semibold block">
                        Harga OTR Jakarta
                      </span>
                      <span className="text-base sm:text-lg font-black text-blue-600 dark:text-blue-400 font-heading">
                        {item.price}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-zinc-400 block">DP Mulai</span>
                      <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 font-mono">
                        {item.dpStarting}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => handleOpenDetail(item)}
                      className="py-2.5 px-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Eye size={14} />
                      <span>Detail & Spek</span>
                    </button>

                    <a
                      href="#calculator"
                      onClick={() => onSelectForCalculator && onSelectForCalculator(item)}
                      className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                    >
                      <Calculator size={14} />
                      <span>Hitung Kredit</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Specifications Pop-up Modal */}
      <MotorDetailModal
        motor={selectedMotor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectForCalculator={onSelectForCalculator}
      />
    </section>
  );
}
