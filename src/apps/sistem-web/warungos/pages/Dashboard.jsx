import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Package, 
  ShoppingCart, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  MoreVertical,
  Calendar
} from "lucide-react";
import { TRANSACTIONS, PRODUCTS } from "../data/mockData";

const StatsCard = ({ title, value, change, icon: Icon, color, trend }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-6 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.08] transition-opacity`} />
    
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl bg-white/5 ${trend === 'up' ? 'text-emerald-400' : 'text-amber-400'}`}>
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
        {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
      </div>
    </div>
    
    <p className="text-zinc-500 text-sm font-medium mb-1">{title}</p>
    <h3 className="text-3xl font-black text-white tracking-tight">{value}</h3>
  </motion.div>
);

export default function Dashboard() {
  const recentSales = TRANSACTIONS;
  const topProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-8 pb-10">
      {/* WELCOME BANNER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Selamat Datang, Rafi! </h1>
          <p className="text-zinc-500 mt-1">Berikut adalah ringkasan performa toko Anda hari ini.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-sm font-bold text-zinc-300 hover:text-white transition-all flex items-center gap-2">
            <Calendar size={16} />
            Mei 16, 2024
          </button>
          <button className="px-4 py-2 rounded-xl bg-amber-500 text-sm font-black text-black hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
            Export Laporan
          </button>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Penjualan" 
          value="Rp 4.250.000" 
          change="+12.5%" 
          icon={ShoppingCart} 
          color="from-emerald-500 to-teal-600" 
          trend="up"
        />
        <StatsCard 
          title="Total Transaksi" 
          value="128" 
          change="+8.2%" 
          icon={TrendingUp} 
          color="from-blue-500 to-indigo-600" 
          trend="up"
        />
        <StatsCard 
          title="Pelanggan Baru" 
          value="12" 
          change="-2.4%" 
          icon={Users} 
          color="from-purple-500 to-pink-600" 
          trend="down"
        />
        <StatsCard 
          title="Stok Menipis" 
          value="5 Produk" 
          change="Sgera Restock" 
          icon={Package} 
          color="from-amber-500 to-orange-600" 
          trend="down"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* SALES CHART (Visual Only) */}
        <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">Grafik Penjualan</h3>
              <p className="text-sm text-zinc-500">Statistik penjualan 7 hari terakhir</p>
            </div>
            <select className="bg-zinc-800 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-300 focus:outline-none">
              <option>Minggu Ini</option>
              <option>Bulan Ini</option>
            </select>
          </div>
          
          <div className="h-[300px] flex items-stretch justify-between gap-4 pt-10">
            {[40, 70, 45, 90, 65, 80, 55].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="relative w-full flex-1 flex justify-center items-end">
                   <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                    className="w-full max-w-[40px] rounded-t-2xl bg-gradient-to-t from-amber-500/20 to-amber-500 relative group-hover:from-amber-500/40 group-hover:to-amber-400 transition-all duration-300"
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Rp {height * 10}k
                    </div>
                  </motion.div>
                </div>
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                  {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">Aktivitas Terbaru</h3>
            <button className="text-zinc-500 hover:text-white transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
          
          <div className="space-y-6">
            {recentSales.map((sale, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={sale.id} 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-amber-500/10 transition-colors">
                  <Clock size={20} className="text-zinc-500 group-hover:text-amber-500 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">Penjualan #{sale.id}</p>
                  <p className="text-xs text-zinc-500">{sale.customer} • {sale.payment}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-amber-500">Rp {sale.total.toLocaleString()}</p>
                  <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">SUCCESS</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button className="w-full mt-8 py-3 rounded-2xl bg-white/5 text-xs font-bold text-zinc-400 hover:bg-white/10 hover:text-white transition-all">
            Lihat Semua Aktivitas
          </button>
        </div>
      </div>

      {/* TOP PRODUCTS & INVENTORY ALERT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6">Produk Terlaris</h3>
            <div className="space-y-4">
              {topProducts.map((product, i) => (
                <div key={product.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all group">
                   <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/5">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <div className="flex-1">
                      <p className="text-sm font-bold text-white">{product.name}</p>
                      <p className="text-xs text-zinc-500">{product.category}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-sm font-black text-white">{product.stock} Tersisa</p>
                      <div className="w-24 h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden">
                         <div className="h-full bg-amber-500 rounded-full" style={{ width: `${(product.stock / 50) * 100}%` }} />
                      </div>
                   </div>
                </div>
              ))}
            </div>
         </div>

         <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden group">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black/20 flex items-center justify-center text-white mb-6">
                  <Package size={24} />
                </div>
                <h3 className="text-2xl font-black text-black leading-tight mb-2">Peringatan Stok <br />Hampir Habis!</h3>
                <p className="text-black/60 text-sm font-medium max-w-[200px]">Ada 5 produk yang stoknya di bawah batas minimum. Segera lakukan pemesanan ke supplier.</p>
              </div>
              <button className="w-fit px-6 py-3 rounded-2xl bg-black text-white text-sm font-black hover:bg-zinc-900 transition-all mt-8">
                Kelola Stok Sekarang
              </button>
            </div>
         </div>
      </div>
    </div>
  );
}
