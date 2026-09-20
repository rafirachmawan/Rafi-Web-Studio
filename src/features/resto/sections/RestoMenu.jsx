import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Flame, 
  Search, 
  MessageCircle, 
  UtensilsCrossed, 
  Sparkles, 
  Check, 
  Soup,
  Package,
  IceCream,
  Coffee,
  ShoppingBag,
  Users
} from "lucide-react";
import { menuCategories, menuItems, restoInfo } from "../data/resto";

// Dedicated clean UI placeholder for menu items
function MenuImagePlaceholder({ item, isModal = false }) {
  const getCategoryConfig = (cat) => {
    switch (cat) {
      case "mie":
        return {
          icon: Soup,
          label: "Mie Gacoan",
          gradient: "from-violet-100/90 via-purple-50 to-indigo-100/80",
          iconBg: "bg-violet-600/10 text-violet-700",
          borderColor: "border-violet-200",
        };
      case "dimsum":
        return {
          icon: Package,
          label: "Dimsum Spesial",
          gradient: "from-purple-100/90 via-violet-50 to-pink-50/70",
          iconBg: "bg-purple-600/10 text-purple-700",
          borderColor: "border-purple-200",
        };
      case "es-buah":
        return {
          icon: IceCream,
          label: "Es Buah Segar",
          gradient: "from-indigo-100/90 via-violet-50 to-purple-50/70",
          iconBg: "bg-indigo-600/10 text-indigo-700",
          borderColor: "border-indigo-200",
        };
      case "beverage":
        return {
          icon: Coffee,
          label: "Beverage Dingin / Hangat",
          gradient: "from-violet-50 via-purple-50/70 to-slate-100",
          iconBg: "bg-violet-600/10 text-violet-700",
          borderColor: "border-violet-200",
        };
      case "gacoan-fest":
        return {
          icon: Sparkles,
          label: "Paket Hemat Fest",
          gradient: "from-purple-100 via-indigo-50 to-violet-100",
          iconBg: "bg-purple-700/15 text-purple-800",
          borderColor: "border-purple-300",
        };
      case "gacoan-combat":
        return {
          icon: Users,
          label: "Paket Rame Combat",
          gradient: "from-violet-100 via-purple-100 to-indigo-100",
          iconBg: "bg-violet-700/15 text-violet-800",
          borderColor: "border-violet-300",
        };
      default:
        return {
          icon: UtensilsCrossed,
          label: "Menu Gacoan",
          gradient: "from-violet-100 via-purple-50 to-indigo-100",
          iconBg: "bg-violet-600/10 text-violet-700",
          borderColor: "border-violet-200",
        };
    }
  };

  const config = getCategoryConfig(item.category);
  const IconComponent = config.icon;

  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${config.gradient} flex flex-col items-center justify-center p-4 relative overflow-hidden select-none`}
    >
      {/* Soft decorative background circles */}
      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/50 blur-sm pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-violet-200/40 blur-sm pointer-events-none" />

      {/* Center Icon Badge */}
      <div
        className={`${
          isModal ? "w-16 h-16" : "w-12 h-12 sm:w-14 sm:h-14"
        } rounded-2xl ${config.iconBg} border ${config.borderColor} flex items-center justify-center shadow-sm mb-2 group-hover:scale-110 transition-transform duration-300`}
      >
        <IconComponent className={`${isModal ? "w-8 h-8" : "w-6 h-6 sm:w-7 sm:h-7"}`} />
      </div>

      {/* Category pill label */}
      <span className="text-[11px] font-bold text-violet-900/80 tracking-wide uppercase">
        {config.label}
      </span>

      {/* Item title text */}
      <span className="text-[10px] sm:text-[11px] text-slate-600 font-medium line-clamp-1 text-center max-w-[88%] mt-0.5">
        {item.name}
      </span>
    </div>
  );
}

export function RestoMenu({ phone }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Generate WhatsApp order URL for an individual item
  const getWaItemLink = (item) => {
    const text = `Halo Mie Gacoan Mojokerto, saya ingin memesan:
- Menu: ${item.name} (${item.formattedPrice})
Mohon konfirmasi ketersediaan dan total pembayarannya. Terima kasih!`;
    return `https://wa.me/${restoInfo.phone}?text=${encodeURIComponent(text)}`;
  };

  // Category counts
  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return menuItems.length;
    return menuItems.filter((item) => item.category === categoryId).length;
  };

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5 text-violet-600" />
            <span>Katalog Menu Resmi • 46 Pilihan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Pilihan Menu Mie Gacoan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Mulai dari Mie Gacoan pedas manis, Mie Hompimpa asin gurih, dimsum favorit renyah, es buah tradisional, hingga paket hemat Gacoan Fest & Combat.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari mie, dimsum, es buah, beverage..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-purple-100 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips - Horizontal Scrollable */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar px-1">
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 border ${
                    isActive
                      ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-500/25"
                      : "bg-white text-slate-700 border-purple-100 hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50/50"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-6 px-1">
          <span>Menampilkan <strong className="text-violet-700">{filteredItems.length}</strong> menu</span>
          {activeCategory !== "all" && (
            <button
              onClick={() => setActiveCategory("all")}
              className="text-violet-600 hover:text-violet-800 font-semibold underline"
            >
              Lihat semua kategori
            </button>
          )}
        </div>

        {/* Menu Grid - Clean, Modern Cards with Placeholder */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-purple-200">
            <UtensilsCrossed className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-700 font-bold text-base mb-1">Menu tidak ditemukan</p>
            <p className="text-slate-500 text-xs">Coba kata kunci pencarian lain atau pilih kategori lain.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="group bg-white rounded-xl sm:rounded-2xl border border-purple-100 overflow-hidden shadow-sm hover:shadow-md hover:border-violet-300 transition-all flex flex-col justify-between"
              >
                {/* Image Placeholder Section */}
                <div 
                  className="relative aspect-square sm:aspect-[4/3] bg-slate-50 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <MenuImagePlaceholder item={item} />

                  {/* Level Pedas Badge */}
                  {item.category === "mie" && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                        item.spicyLevel === 0
                          ? "bg-emerald-600 text-white"
                          : item.spicyLevel <= 3
                          ? "bg-violet-600 text-white"
                          : "bg-purple-800 text-white"
                      }`}>
                        <Flame className="w-3 h-3" />
                        {item.spicyLevel === 0 ? "Non-Pedas" : `Lv ${item.spicyLevel}`}
                      </span>
                    </div>
                  )}

                  {/* Paket Badge */}
                  {(item.category === "gacoan-fest" || item.category === "gacoan-combat") && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-violet-700 text-white shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        {item.category === "gacoan-fest" ? "Paket Hemat" : "Paket Rame"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section - Clean & Userfriendly (no AI slop) */}
                <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-2.5">
                  <div>
                    {/* Item Name */}
                    <h3 
                      onClick={() => setSelectedItem(item)}
                      className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1 group-hover:text-violet-700 transition-colors cursor-pointer"
                      title={item.name}
                    >
                      {item.name}
                    </h3>

                    {/* Short Detail if Combo/Paket */}
                    {item.packageDetails && (
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {item.packageDetails.join(", ")}
                      </p>
                    )}
                  </div>

                  {/* Price and Order Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 gap-2">
                    <span className="font-black text-xs sm:text-sm text-violet-700">
                      {item.formattedPrice}
                    </span>

                    <a
                      href={getWaItemLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-violet-50 hover:bg-violet-600 text-violet-700 hover:text-white text-[11px] font-bold transition-all shrink-0"
                      title="Pesan via WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Pesan</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Item Detail Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-purple-100"
              >
                {/* Modal Placeholder Image */}
                <div className="relative aspect-video bg-slate-50">
                  <MenuImagePlaceholder item={selectedItem} isModal={true} />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/60 text-white flex items-center justify-center hover:bg-slate-900 transition-colors z-20"
                  >
                    ✕
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-2.5 py-0.5 rounded-md">
                        {selectedItem.category.replace("-", " ")}
                      </span>
                      <h3 className="text-xl font-black text-slate-900 mt-1">
                        {selectedItem.name}
                      </h3>
                    </div>
                    <span className="text-lg font-black text-violet-700 whitespace-nowrap">
                      {selectedItem.formattedPrice}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {selectedItem.description}
                  </p>

                  {selectedItem.packageDetails && (
                    <div className="mb-6 p-3 bg-violet-50/60 rounded-xl border border-violet-100">
                      <h4 className="text-xs font-bold text-violet-800 uppercase tracking-wide mb-2">
                        Isi Paket:
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-700 font-medium">
                        {selectedItem.packageDetails.map((pkg, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-violet-600" />
                            <span>{pkg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs uppercase hover:bg-slate-50 transition-colors"
                    >
                      Tutup
                    </button>
                    <a
                      href={getWaItemLink(selectedItem)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-violet-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Order WA</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
