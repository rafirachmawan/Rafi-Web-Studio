import { motion } from "framer-motion";
import { 
  Users, 
  CircleDollarSign, 
  ChevronRight, 
  Search, 
  Filter, 
  Clock, 
  AlertCircle,
  Truck,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react";
import { CUSTOMERS, SUPPLIERS } from "../data/mockData";

export default function DebtManagement() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Hutang & Piutang</h1>
          <p className="text-zinc-500 mt-1">Kelola hutang pelanggan dan kewajiban ke supplier.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 text-black font-black hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
            <CircleDollarSign size={20} />
            Catat Hutang Baru
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CUSTOMER DEBT */}
        <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
           <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                   <Users size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Hutang Pelanggan (Piutang)</h3>
              </div>
              <p className="text-sm font-black text-purple-400">Rp 195.000</p>
           </div>

           <div className="space-y-4">
              {CUSTOMERS.map((c) => (
                <div key={c.id} className="p-4 rounded-2xl bg-zinc-800/30 border border-white/5 flex items-center justify-between group hover:bg-zinc-800 transition-all">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-black text-zinc-500">
                         {c.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                         <p className="text-sm font-bold text-white">{c.name}</p>
                         <p className="text-[10px] text-zinc-500">{c.phone}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className={`text-sm font-black ${c.debt > 0 ? 'text-red-400' : 'text-emerald-400'}`}>Rp {c.debt.toLocaleString()}</p>
                      <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter">{c.status}</p>
                   </div>
                   <button className="p-2 rounded-xl text-zinc-600 hover:text-white transition-colors">
                      <ChevronRight size={18} />
                   </button>
                </div>
              ))}
           </div>
        </div>

        {/* SUPPLIER DEBT */}
        <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
           <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                   <Truck size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Hutang ke Supplier</h3>
              </div>
              <p className="text-sm font-black text-orange-400">Rp 2.000.000</p>
           </div>

           <div className="space-y-4">
              {SUPPLIERS.map((s) => (
                <div key={s.id} className="p-4 rounded-2xl bg-zinc-800/30 border border-white/5 flex items-center justify-between group hover:bg-zinc-800 transition-all">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                         <Truck size={18} className="text-zinc-600" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-white">{s.name}</p>
                         <p className="text-[10px] text-zinc-500">{s.phone}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className={`text-sm font-black ${s.debt > 0 ? 'text-orange-400' : 'text-emerald-400'}`}>Rp {s.debt.toLocaleString()}</p>
                      <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter">{s.debt > 0 ? 'BELUM LUNAS' : 'LUNAS'}</p>
                   </div>
                   <button className="p-2 rounded-xl text-zinc-600 hover:text-white transition-colors">
                      <ChevronRight size={18} />
                   </button>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* RECENT DEBT HISTORY */}
      <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
         <h3 className="text-xl font-bold text-white mb-6">Histori Pembayaran Hutang</h3>
         <div className="overflow-x-auto">
            <table className="w-full">
               <thead>
                  <tr className="text-[10px] font-black text-zinc-500 uppercase tracking-widest border-b border-white/5">
                     <th className="text-left pb-4">Tanggal</th>
                     <th className="text-left pb-4">Entitas</th>
                     <th className="text-left pb-4">Tipe</th>
                     <th className="text-left pb-4">Nominal</th>
                     <th className="text-right pb-4">Metode</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {[
                    { date: '15 Mei 2024', entity: 'Ibu Siti', type: 'Angsuran', amount: 50000, method: 'Cash' },
                    { date: '14 Mei 2024', entity: 'PT Sumber Alfaria', type: 'Pelunasan', amount: 500000, method: 'Transfer' },
                    { date: '12 Mei 2024', entity: 'Mas Doni', type: 'Hutang Baru', amount: 45000, method: 'Hutang' },
                  ].map((h, i) => (
                    <tr key={i} className="group">
                       <td className="py-4 text-sm text-zinc-400">{h.date}</td>
                       <td className="py-4 text-sm font-bold text-white">{h.entity}</td>
                       <td className="py-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${h.type === 'Hutang Baru' ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                             {h.type}
                          </span>
                       </td>
                       <td className="py-4 text-sm font-black text-white">Rp {h.amount.toLocaleString()}</td>
                       <td className="py-4 text-right text-xs text-zinc-500">{h.method}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
