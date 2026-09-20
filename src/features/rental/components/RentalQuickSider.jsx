import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, MapPin, Calculator, Wrench, MessageCircle, ChevronRight, ChevronLeft } from "lucide-react";

export function RentalQuickSider() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle quick menu"
        className="w-6 h-12 rounded-l-xl bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isOpen ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Floating Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-l border-y border-zinc-200 dark:border-zinc-800 rounded-l-2xl shadow-2xl p-2.5 flex flex-col gap-2"
        >
          <a
            href="#products"
            className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
          >
            <Compass size={18} className="group-hover:scale-110 transition-transform mb-1 text-blue-600" />
            <span className="text-[10px] font-bold tracking-tight">Katalog</span>
          </a>

          <a
            href="#calculator"
            className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
          >
            <Calculator size={18} className="group-hover:scale-110 transition-transform mb-1 text-amber-500" />
            <span className="text-[10px] font-bold tracking-tight">Kredit</span>
          </a>

          <a
            href="#service"
            className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
          >
            <Wrench size={18} className="group-hover:scale-110 transition-transform mb-1 text-blue-600" />
            <span className="text-[10px] font-bold tracking-tight">Servis</span>
          </a>

          <a
            href="#dealers"
            className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
          >
            <MapPin size={18} className="group-hover:scale-110 transition-transform mb-1 text-emerald-500" />
            <span className="text-[10px] font-bold tracking-tight">Dealer</span>
          </a>

          <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-0.5" />

          <a
            href="https://wa.me/6285196221716?text=Halo%20Yamaha%20Motor%20Indonesia%2C%20saya%20ingin%20mendapatkan%20bantuan%20dan%20informasi%20produk."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/25 transition-all group"
          >
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform mb-1" />
            <span className="text-[9px] font-bold text-center leading-tight">Bantuan WA</span>
          </a>
        </motion.div>
      )}
    </div>
  );
}
