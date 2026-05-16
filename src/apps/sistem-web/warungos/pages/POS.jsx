import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  CreditCard, 
  Banknote, 
  QrCode,
  Zap,
  Printer,
  X,
  Keyboard
} from "lucide-react";
import { PRODUCTS } from "../data/mockData";

export default function POS() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [paymentModal, setPaymentModal] = useState(false);
  const [activePayment, setActivePayment] = useState("Cash");
  const searchInputRef = useRef(null);

  // Filter products based on search
  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.sku.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setSearch("");
    searchInputRef.current?.focus();
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.01; // 1% tax simulation
  const total = subtotal + tax;

  return (
    <div className="h-full flex flex-col lg:flex-row gap-8 pb-10">
      {/* PRODUCTS SECTION */}
      <div className="flex-1 flex flex-col gap-6 overflow-hidden min-h-[500px] lg:min-h-0">
        {/* SEARCH BAR */}
        <div className="relative group shrink-0">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Search className="text-zinc-500 group-focus-within:text-amber-500 transition-colors" size={20} />
          </div>
          <input 
            ref={searchInputRef}
            type="text" 
            placeholder="Scan Barcode / Cari Produk..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900/50 border border-white/5 rounded-[2rem] py-4 md:py-5 pl-14 md:pl-16 pr-6 text-sm md:text-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/5 transition-all"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 text-[10px] font-black text-zinc-600 uppercase tracking-widest border border-white/5 px-2 py-1 rounded-lg">
            <Keyboard size={12} />
            SCANNER READY
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 pb-10">
            {filteredProducts.map((product, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                key={product.id}
                onClick={() => addToCart(product)}
                className="group relative bg-zinc-900/40 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-4 cursor-pointer hover:bg-amber-500/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-zinc-800 mb-3 md:mb-4 border border-white/5">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-400 truncate transition-colors">{product.name}</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{product.category}</p>
                  <div className="flex items-center justify-between mt-1 md:mt-2 pt-1 md:pt-2 border-t border-white/5">
                    <p className="text-xs md:text-sm font-black text-white">Rp {product.price.toLocaleString()}</p>
                    <p className={`text-[9px] md:text-[10px] font-bold ${product.stock > 10 ? 'text-emerald-500' : 'text-amber-500'}`}>{product.stock}</p>
                  </div>
                </div>
                
                {/* QUICK ADD ICON */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 rounded-full bg-amber-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-lg shadow-amber-500/40">
                  <Plus size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CART SECTION */}
      <div className="w-full lg:w-[420px] bg-zinc-900/40 border border-white/5 rounded-[2rem] md:rounded-[3rem] flex flex-col overflow-hidden backdrop-blur-xl relative shrink-0">
        <div className="p-6 md:p-8 pb-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <ShoppingCart size={18} />
             </div>
             <h3 className="text-lg md:text-xl font-black text-white">Keranjang</h3>
          </div>
          <button 
            onClick={() => setCart([])}
            className="text-zinc-500 hover:text-red-400 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>

        {/* CART ITEMS */}
        <div className="max-h-[300px] lg:max-h-none lg:flex-1 overflow-y-auto p-6 md:p-8 space-y-4 md:space-y-6 no-scrollbar">
          {cart.length === 0 ? (
            <div className="py-10 flex flex-col items-center justify-center text-center opacity-20">
               <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 md:border-4 border-dashed border-zinc-500 flex items-center justify-center mb-4">
                  <ShoppingCart size={32} />
               </div>
               <p className="font-black uppercase tracking-widest text-xs">Kosong</p>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  key={item.id} 
                  className="flex items-center gap-3 md:gap-4 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border border-white/5 shrink-0 bg-zinc-800">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-bold text-white truncate">{item.name}</p>
                    <p className="text-[10px] md:text-xs text-amber-500 font-black mt-0.5">Rp {(item.price * item.qty).toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 bg-zinc-800/50 p-1 rounded-xl border border-white/5">
                    <button 
                      onClick={() => updateQty(item.id, -1)}
                      className="w-5 h-5 md:w-6 md:h-6 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-[10px] md:text-xs font-black text-white w-4 md:w-6 text-center">{item.qty}</span>
                    <button 
                      onClick={() => updateQty(item.id, 1)}
                      className="w-5 h-5 md:w-6 md:h-6 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* SUMMARY */}
        <div className="p-6 md:p-8 bg-zinc-950/50 border-t border-white/5 space-y-4 mt-auto">
           <div className="space-y-2">
              <div className="flex justify-between text-[10px] md:text-xs text-zinc-500 font-bold">
                 <span>Subtotal</span>
                 <span className="text-zinc-300">Rp {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[10px] md:text-xs text-zinc-500 font-bold">
                 <span>Pajak (1%)</span>
                 <span className="text-zinc-300">Rp {tax.toLocaleString()}</span>
              </div>
           </div>
           
           <div className="pt-3 md:pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest">Total Bayar</span>
              <span className="text-xl md:text-3xl font-black text-amber-500 tracking-tighter">Rp {total.toLocaleString()}</span>
           </div>

           <button 
            disabled={cart.length === 0}
            onClick={() => setPaymentModal(true)}
            className="w-full py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] bg-amber-500 text-black font-black text-sm md:text-lg hover:bg-amber-400 disabled:opacity-30 disabled:hover:bg-amber-500 transition-all flex items-center justify-center gap-2 md:gap-3 shadow-xl shadow-amber-500/10 mt-2 md:mt-4 group"
           >
              <Zap size={18} className="fill-black group-hover:scale-125 transition-transform" />
              PROSES BAYAR
           </button>
        </div>
      </div>

      {/* PAYMENT MODAL (Simplified) */}
      <AnimatePresence>
        {paymentModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
              onClick={() => setPaymentModal(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className="p-8 flex items-center justify-between border-b border-white/5">
                 <h3 className="text-2xl font-black text-white">Metode Pembayaran</h3>
                 <button onClick={() => setPaymentModal(false)} className="p-2 rounded-xl hover:bg-white/5 text-zinc-500 transition-colors">
                    <X size={24} />
                 </button>
              </div>

              <div className="p-8 grid grid-cols-2 gap-4">
                {[
                  { id: "Cash", icon: Banknote, color: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { id: "QRIS", icon: QrCode, color: "text-amber-400", bg: "bg-amber-500/10" },
                  { id: "Transfer", icon: CreditCard, color: "text-blue-400", bg: "bg-blue-500/10" },
                  { id: "Hutang", icon: ShoppingCart, color: "text-red-400", bg: "bg-red-500/10" },
                ].map((method) => (
                  <button 
                    key={method.id}
                    onClick={() => setActivePayment(method.id)}
                    className={`flex flex-col items-center gap-4 p-6 rounded-[2rem] border transition-all duration-300 ${
                      activePayment === method.id 
                      ? "bg-amber-500/10 border-amber-500 shadow-lg shadow-amber-500/5 scale-[1.02]" 
                      : "bg-zinc-800/30 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl ${method.bg} ${method.color} flex items-center justify-center`}>
                      <method.icon size={24} />
                    </div>
                    <span className="font-bold text-white uppercase tracking-widest text-xs">{method.id}</span>
                  </button>
                ))}
              </div>

              <div className="p-8 bg-zinc-950/50 border-t border-white/5 flex gap-4">
                 <button className="flex-1 py-4 rounded-2xl bg-zinc-800 text-white font-bold text-sm hover:bg-zinc-700 transition-all flex items-center justify-center gap-2">
                    <Printer size={18} />
                    Simpan & Cetak
                 </button>
                 <button 
                  onClick={() => {
                    setCart([]);
                    setPaymentModal(false);
                  }}
                  className="flex-[1.5] py-4 rounded-2xl bg-amber-500 text-black font-black text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
                 >
                    KONFIRMASI LUNAS
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
