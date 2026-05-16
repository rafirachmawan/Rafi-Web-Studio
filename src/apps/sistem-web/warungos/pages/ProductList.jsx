import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Plus, 
  Filter, 
  MoreHorizontal, 
  Edit2, 
  Trash2, 
  Download, 
  Upload,
  ArrowUpDown,
  Image as ImageIcon
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data/mockData";

const TableSkeleton = () => (
  <div className="space-y-4 animate-pulse">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="h-20 bg-zinc-900/50 rounded-2xl border border-white/5" />
    ))}
  </div>
);

export default function ProductList() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Semua Kategori");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "Semua Kategori" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* HEADER ACTIONS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Katalog Produk</h1>
          <p className="text-xs md:text-sm text-zinc-500 mt-1">Kelola data barang, harga, dan stok realtime.</p>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <button className="hidden sm:flex p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-all">
            <Download size={20} />
          </button>
          <button className="hidden sm:flex p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-all">
            <Upload size={20} />
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-2xl bg-amber-500 text-black font-black text-sm md:text-base hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
            <Plus size={18} />
            Tambah Produk
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col lg:flex-row gap-4 p-4 rounded-[2rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Cari produk..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-amber-500/50 transition-all"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 sm:flex-none relative min-w-[150px]">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-8 text-xs md:text-sm text-zinc-300 focus:outline-none appearance-none cursor-pointer hover:bg-zinc-800 transition-colors"
            >
              <option>Semua Kategori</option>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-zinc-800/50 border border-white/5 text-xs font-bold text-zinc-300 hover:text-white transition-all">
            <ArrowUpDown size={16} />
            Urutkan
          </button>
        </div>
      </div>

      {/* TABLE */}
      {loading ? <TableSkeleton /> : (
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em] px-4">
                <th className="text-left py-4 pl-6">Produk</th>
                <th className="text-left py-4">Kategori</th>
                <th className="text-left py-4">Harga Jual</th>
                <th className="text-left py-4">Stok</th>
                <th className="text-left py-4">Status</th>
                <th className="text-right py-4 pr-6">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, i) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05 }}
                    key={product.id} 
                    className="group bg-zinc-900/40 hover:bg-zinc-800/60 border border-white/5 rounded-[2rem] transition-all duration-300 backdrop-blur-sm shadow-lg shadow-black/10"
                  >
                    <td className="py-4 pl-6 rounded-l-[1.5rem]">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-800 border border-white/5 shrink-0">
                          {product.image ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-zinc-600"><ImageIcon size={20} /></div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{product.name}</p>
                          <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">{product.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 rounded-lg bg-zinc-800 border border-white/5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        {product.category}
                      </span>
                    </td>
                    <td className="py-4">
                      <p className="text-sm font-black text-white">Rp {product.price.toLocaleString()}</p>
                      <p className="text-[10px] text-zinc-500">Modal: Rp {product.cost.toLocaleString()}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm font-black text-white">{product.stock} <span className="text-zinc-500 font-medium">{product.unit}</span></p>
                    </td>
                    <td className="py-4">
                      <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${product.stock > 10 ? 'text-emerald-400' : 'text-amber-400'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${product.stock > 10 ? 'bg-emerald-500' : 'bg-amber-500'} shadow-[0_0_8px_rgba(0,0,0,0.5)]`} />
                        {product.stock > 10 ? 'Aman' : 'Stok Menipis'}
                      </div>
                    </td>
                    <td className="py-4 pr-6 rounded-r-[1.5rem] text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-xl text-zinc-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2 rounded-xl text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all">
                          <Trash2 size={16} />
                        </button>
                        <button className="p-2 rounded-xl text-zinc-500 hover:bg-white/5 hover:text-white transition-all">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center mx-auto mb-4 text-zinc-700">
                <Search size={32} />
              </div>
              <h3 className="text-lg font-bold text-white">Produk tidak ditemukan</h3>
              <p className="text-zinc-500 text-sm mt-1">Coba kata kunci lain atau filter kategori yang berbeda.</p>
            </div>
          )}
        </div>
      )}
      
      {/* PAGINATION */}
      <div className="flex items-center justify-between p-6 rounded-[2rem] bg-zinc-900/30 border border-white/5">
        <p className="text-xs text-zinc-500 font-medium">Menampilkan <span className="text-white font-bold">{filteredProducts.length}</span> dari <span className="text-white font-bold">{PRODUCTS.length}</span> produk</p>
        <div className="flex items-center gap-2">
           <button className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-500 text-xs font-bold hover:text-white transition-all">Sebelumnya</button>
           <button className="w-10 h-10 rounded-xl bg-amber-500 text-black text-xs font-black">1</button>
           <button className="w-10 h-10 rounded-xl bg-zinc-800 text-zinc-400 text-xs font-bold hover:bg-zinc-700 hover:text-white transition-all">2</button>
           <button className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-500 text-xs font-bold hover:text-white transition-all">Selanjutnya</button>
        </div>
      </div>
    </div>
  );
}
