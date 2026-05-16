import { motion } from "framer-motion";
import { 
  Package, 
  ArrowUpRight, 
  ArrowDownLeft, 
  History, 
  AlertTriangle,
  PlusCircle,
  MinusCircle,
  Search,
  Filter
} from "lucide-react";
import { PRODUCTS } from "../data/mockData";

export default function Inventory() {
  const stockHistory = [
    { id: 'H001', product: 'Minyak Goreng Bimoli 2L', type: 'IN', qty: 24, date: '2024-05-16 09:00', note: 'Restock Supplier' },
    { id: 'H002', product: 'Indomie Goreng', type: 'OUT', qty: 5, date: '2024-05-16 10:30', note: 'Penjualan #T001' },
    { id: 'H003', product: 'Beras Pandan Wangi 5kg', type: 'OUT', qty: 1, date: '2024-05-16 11:15', note: 'Penjualan #T002' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Stok & Inventory</h1>
          <p className="text-zinc-500 mt-1">Pantau pergerakan barang dan lakukan stok opname.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-900 border border-white/10 text-zinc-300 font-black hover:text-white transition-all">
            <PlusCircle size={20} />
            Barang Masuk
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 text-black font-black hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
            <History size={20} />
            Stok Opname
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* STOCK OVERVIEW */}
        <div className="lg:col-span-2 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                       <ArrowDownLeft size={24} />
                    </div>
                    <div>
                       <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Total Barang Masuk</p>
                       <h3 className="text-2xl font-black text-white">450 <span className="text-xs text-zinc-600">PCS</span></h3>
                    </div>
                 </div>
                 <p className="text-[10px] text-zinc-500 font-medium">Data dihitung dalam 30 hari terakhir</p>
              </div>
              <div className="p-6 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center">
                       <ArrowUpRight size={24} />
                    </div>
                    <div>
                       <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Total Barang Keluar</p>
                       <h3 className="text-2xl font-black text-white">328 <span className="text-xs text-zinc-600">PCS</span></h3>
                    </div>
                 </div>
                 <p className="text-[10px] text-zinc-500 font-medium">Data dihitung dalam 30 hari terakhir</p>
              </div>
           </div>

           <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-6">Histori Pergerakan Stok</h3>
              <div className="space-y-4">
                 {stockHistory.map((h) => (
                   <div key={h.id} className="p-4 rounded-2xl bg-zinc-800/30 border border-white/5 flex items-center justify-between group hover:bg-zinc-800 transition-all">
                      <div className="flex items-center gap-4">
                         <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${h.type === 'IN' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                            {h.type === 'IN' ? <PlusCircle size={20} /> : <MinusCircle size={20} />}
                         </div>
                         <div>
                            <p className="text-sm font-bold text-white">{h.product}</p>
                            <p className="text-[10px] text-zinc-500">{h.date} • {h.note}</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className={`text-sm font-black ${h.type === 'IN' ? 'text-emerald-400' : 'text-red-400'}`}>
                            {h.type === 'IN' ? '+' : '-'}{h.qty}
                         </p>
                      </div>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-6 py-3 rounded-2xl bg-white/5 text-xs font-bold text-zinc-500 hover:text-white transition-all">
                 Muat Lebih Banyak
              </button>
           </div>
        </div>

        {/* LOW STOCK ALERT */}
        <div className="space-y-6">
           <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                 <AlertTriangle className="text-amber-500" size={24} />
                 <h3 className="text-xl font-bold text-white">Restock Dibutuhkan</h3>
              </div>
              <div className="space-y-4">
                 {PRODUCTS.filter(p => p.stock <= 10).map((p) => (
                   <div key={p.id} className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-bold text-white">{p.name}</p>
                        <span className="text-[10px] font-black text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">KRITIS</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-medium text-zinc-500">
                        <span>Sisa Stok: <span className="text-white">{p.stock}</span></span>
                        <span>Min: 10</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-800 rounded-full mt-3 overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: `${(p.stock / 10) * 100}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-6 py-4 rounded-2xl bg-amber-500 text-black font-black text-xs hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
                 BUAT PESANAN SUPPLIER
              </button>
           </div>
           
           <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4">Ringkasan Kategori</h3>
              <div className="space-y-3">
                 {[
                   { label: 'Sembako', count: 124, color: 'bg-blue-500' },
                   { label: 'Minuman', count: 85, color: 'bg-emerald-500' },
                   { label: 'Snack', count: 156, color: 'bg-amber-500' },
                   { label: 'Lainnya', count: 42, color: 'bg-purple-500' },
                 ].map((c) => (
                   <div key={c.label} className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                        <span>{c.label}</span>
                        <span>{c.count} Items</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className={`h-full ${c.color} rounded-full`} style={{ width: `${(c.count / 200) * 100}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
