// src/sections/coffee/CoffeeMenu.jsx
// Starbucks Menu Section using centralized data

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Heart, ShoppingBag, Sparkles } from "lucide-react";
import {
  getMenuItems,
  getCategories,
  formatPrice,
} from "../../data/coffee/menu";
import { fadeBetween } from "../../utils/animations";

export function CoffeeMenu() {
  const categories = ["beverages", "food", "merchandise"];
  const [activeTab, setActiveTab] = useState("beverages");

  const menuItems = getMenuItems(activeTab);

  return (
    <section
      id="menu"
      className="py-32 px-6 bg-[#09100E] border-y border-white/5 relative overflow-hidden"
      aria-label="Starbucks Menu"
    >
      {/* Ambient Background */}
      <div className="absolute right-0 top-1/4 w-[250px] h-[250px] bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] text-[#00704A] font-extrabold uppercase mb-3">
            Crafted Drinks & Treats
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white mb-4">
            Our Signature Offerings
          </h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
            Discover our complete collection of beverages, food items, and
            merchandise - all crafted with passion and quality ingredients.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {[
            {
              id: "beverages",
              label: "Beverages",
              icon: <Coffee size={16} />,
              count: getMenuItems("beverages").length,
            },
            {
              id: "food",
              label: "Food",
              icon: <Heart size={16} />,
              count: getMenuItems("food").length,
            },
            {
              id: "merchandise",
              label: "Merchandise",
              icon: <ShoppingBag size={16} />,
              count: getMenuItems("merchandise").length,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                activeTab === tab.id
                  ? "bg-[#00704A] text-white border-transparent"
                  : "bg-transparent text-zinc-400 border-white/20 hover:border-white/50 hover:text-white"
              }`}
              aria-pressed={activeTab === tab.id}
            >
              {tab.icon}
              {tab.label}
              <span className="text-xs opacity-80 ml-1">({tab.count})</span>
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
            className="grid md:grid-cols-3 gap-8"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="group border border-white/5 bg-[#0B1512]/60 backdrop-blur-md rounded-3xl p-6 hover:border-[#00704A]/40 hover:shadow-[0_10px_30px_rgba(0,112,74,0.1)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
                aria-labelledby={`${item.id}-name`}
              >
                <div className="absolute inset-0 bg-[#00704A]/5 group-hover:bg-[#00704A]/10 transition-colors z-10 pointer-events-none" />

                {/* Badge & Tag */}
                <div className="flex justify-between items-center mb-4 relative z-20">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full">
                    {item.badge || "Premium"}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase">
                    {item.tag || "Standard"}
                  </span>
                </div>

                {/* Item Image Placeholder */}
                <div className="h-[220px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 mb-6 rounded-2xl relative overflow-hidden relative z-20 flex items-center justify-center">
                  <div className="text-center px-4">
                    {item.categories?.includes("specialty") ||
                    item.categories?.includes("cold_brew") ? (
                      <Sparkles className="w-12 h-12 text-emerald-400/40 mx-auto mb-3" />
                    ) : (
                      <Coffee className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
                    )}
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">
                      High-Quality Drink
                    </p>
                    <p className="text-zinc-600 text-[10px]">
                      Crafted with Premium Ingredients
                    </p>
                  </div>

                  {/* Hot/Iced Indicator */}
                  {item.hotIced && item.hotIced.length > 0 && (
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {item.hotIced.includes("hot") && (
                        <span className="text-[9px] px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded-full font-bold uppercase">
                          Hot
                        </span>
                      )}
                      {item.hotIced.includes("iced") && (
                        <span className="text-[9px] px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded-full font-bold uppercase">
                          Iced
                        </span>
                      )}
                      {item.hotIced.includes("cold") && (
                        <span className="text-[9px] px-2 py-0.5 bg-sky-500/20 text-sky-400 rounded-full font-bold uppercase">
                          Cold
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Item Info */}
                <div className="mb-4 relative z-20">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3
                      id={`${item.id}-name`}
                      className="text-xl font-bold font-serif text-white line-clamp-1"
                    >
                      {item.name}
                    </h3>
                    <span className="text-[#D4E9E2] font-black text-sm shrink-0 whitespace-nowrap">
                      {formatPrice(item.basePrice)}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Calories */}
                  {item.calories && (
                    <p className="text-[10px] text-zinc-600 mt-2">
                      ~{item.calories} calories per serving
                    </p>
                  )}
                </div>

                {/* Footer Meta */}
                <div className="border-t border-white/5 pt-4 mt-2 flex items-center justify-between text-[10px] text-zinc-500 font-semibold uppercase tracking-wider relative z-20">
                  <span>
                    {item.calories ? `${item.calories} kcal` : "Freshly Made"}
                  </span>
                  <span className="text-[#00704A] font-bold">
                    {item.badge || "Starbucks Original"}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
