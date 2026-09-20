// src/sections/coffee/CoffeeMenu.jsx
// Starbucks Menu Section using centralized data & CleanPlaceholder

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, UtensilsCrossed, ShoppingBag, Package } from "lucide-react";
import {
  getMenuItems,
  formatPrice,
} from "../data/menu";
import { fadeBetween } from "../../../utils/animations";
import CleanPlaceholder from "../../../components/ui/CleanPlaceholder";
import { useLanguage } from "../../../context/LanguageContext";

export function CoffeeMenu() {
  const [activeTab, setActiveTab] = useState("beverages");
  const { t } = useLanguage();
  const menuItems = getMenuItems(activeTab);

  const tabs = [
    {
      id: "beverages",
      label: t("Minuman", "Beverages"),
      icon: <Coffee size={15} />,
      count: getMenuItems("beverages").length,
    },
    {
      id: "food",
      label: t("Makanan & Pastry", "Food & Pastries"),
      icon: <UtensilsCrossed size={15} />,
      count: getMenuItems("food").length,
    },
    {
      id: "wholeBean",
      label: t("Biji Kopi & VIA®", "Whole Bean & VIA®"),
      icon: <Package size={15} />,
      count: getMenuItems("wholeBean").length,
    },
    {
      id: "merchandise",
      label: t("Merchandise", "Merchandise"),
      icon: <ShoppingBag size={15} />,
      count: getMenuItems("merchandise").length,
    },
  ];

  return (
    <section
      id="menu"
      className="py-16 sm:py-28 px-4 sm:px-6 bg-[#09100E] border-y border-white/5 relative overflow-hidden"
      aria-label="Starbucks Menu"
    >
      {/* Ambient Background Glow */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-[#00704A]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-[#CBA258]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00704A]/20 border border-[#00704A]/30 text-[#D4E9E2] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest mb-3">
            {t("Dibuat Sepenuh Hati", "Handcrafted With Passion")}
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white mb-3 sm:mb-4">
            {t("Menu Khas Pilihan", "Our Signature Menu")}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
            {t(
              "Dari espresso racikan barista, cold brew nikmat, sajian pastry hangat, hingga biji kopi utuh sangrai etis Sumatra dan merchandise edisi spesial.",
              "From handcrafted barista espresso and cold brew, warm artisanal pastries, to ethically sourced Sumatra whole beans and limited edition merchandise."
            )}
          </p>
        </div>

        {/* Tab Navigation - Symmetrical 2x2 grid on mobile, flex row on desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 sm:gap-3 mb-8 sm:mb-14 max-w-lg md:max-w-none mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#00704A] text-white border-[#00704A] shadow-lg shadow-[#00704A]/25 scale-[1.02] sm:scale-105"
                  : "bg-[#111C18] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
              aria-pressed={activeTab === tab.id}
            >
              <span className="shrink-0">{tab.icon}</span>
              <span className="truncate">{tab.label}</span>
              <span
                className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-semibold shrink-0 ml-0.5 ${
                  activeTab === tab.id
                    ? "bg-white/20 text-white"
                    : "bg-white/5 text-zinc-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Menu Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="initial"
            animate="active"
            exit="exit"
            variants={fadeBetween}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group border border-white/10 bg-[#0E1815]/90 backdrop-blur-md rounded-3xl p-5 hover:border-[#00704A]/50 hover:shadow-[0_12px_32px_rgba(0,112,74,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                aria-labelledby={`${item.id}-name`}
              >
                {/* Clean Placeholder Mockup */}
                <div className="h-[200px] mb-5 rounded-2xl overflow-hidden relative flex items-center justify-center">
                  <CleanPlaceholder
                    width={600}
                    height={400}
                    ratio="3:2"
                    label={item.name}
                    sublabel={item.notes || item.tag || item.badge || "Signature Item"}
                    badge={item.badge || "Starbucks"}
                    icon={
                      activeTab === "food"
                        ? UtensilsCrossed
                        : activeTab === "merchandise"
                        ? ShoppingBag
                        : activeTab === "wholeBean"
                        ? Package
                        : Coffee
                    }
                    className="h-full w-full !p-3"
                  />

                  {/* Hot/Iced Badge if present */}
                  {item.hotIced && item.hotIced.length > 0 && (
                    <div className="absolute top-2.5 right-2.5 flex gap-1.5 z-10">
                      {item.hotIced.includes("hot") && (
                        <span className="text-[9px] px-2 py-0.5 bg-orange-500/85 backdrop-blur-xs text-white rounded-full font-bold uppercase shadow-sm">
                          Hot
                        </span>
                      )}
                      {item.hotIced.includes("iced") && (
                        <span className="text-[9px] px-2 py-0.5 bg-cyan-600/85 backdrop-blur-xs text-white rounded-full font-bold uppercase shadow-sm">
                          Iced
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Item Info */}
                <div className="mb-4 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3
                        id={`${item.id}-name`}
                        className="text-lg font-bold font-serif text-white group-hover:text-emerald-400 transition-colors line-clamp-1"
                      >
                        {item.name}
                      </h3>
                      <span className="text-[#D4E9E2] font-extrabold text-sm shrink-0 whitespace-nowrap">
                        {formatPrice(item.basePrice)}
                      </span>
                    </div>

                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 mb-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Calories / Weight Specs */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-medium">
                    <span>
                      {item.calories
                        ? `~${item.calories} kcal`
                        : item.weight
                        ? `Netto: ${item.weight}`
                        : "Fresh In-Store"}
                    </span>
                    <span className="text-emerald-400 font-semibold uppercase text-[10px] tracking-wider">
                      {item.badge || "Available"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
