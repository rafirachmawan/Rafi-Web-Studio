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
  BookOpen,
  Image as ImageIcon,
  Tag,
  HelpCircle,
  FileSpreadsheet
} from "lucide-react";
import { QUESTIONS } from "../data/mockData";

export default function QuestionBank() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      {/* HEADER ACTIONS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Bank Soal</h1>
          <p className="text-zinc-500 mt-1">Kelola perbendaharaan soal ujian Anda.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-all">
            <FileSpreadsheet size={20} />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 text-black font-black hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
            <Plus size={20} />
            Tambah Soal
          </button>
        </div>
      </div>

      {/* SEARCH & FILTERS */}
      <div className="flex flex-col md:flex-row gap-4 p-4 rounded-[2rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Cari soal..." 
            className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-3">
           <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <select className="bg-zinc-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-8 text-xs md:text-sm text-zinc-300 focus:outline-none appearance-none cursor-pointer hover:bg-zinc-800 transition-colors">
                <option>Semua Mapel</option>
                <option>Matematika</option>
                <option>Fisika</option>
                <option>Bahasa Indonesia</option>
              </select>
           </div>
           <div className="relative">
              <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <select className="bg-zinc-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-8 text-xs md:text-sm text-zinc-300 focus:outline-none appearance-none cursor-pointer hover:bg-zinc-800 transition-colors">
                <option>Kesulitan</option>
                <option>Mudah</option>
                <option>Sedang</option>
                <option>Sulit</option>
              </select>
           </div>
        </div>
      </div>

      {/* QUESTIONS LIST */}
      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          [1, 2, 3].map(i => <div key={i} className="h-24 bg-zinc-900/40 rounded-3xl animate-pulse" />)
        ) : (
          QUESTIONS.map((q, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={q.id} 
              className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-emerald-500/20 transition-all group"
            >
               <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                     <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest">{q.type}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${q.difficulty === 'Mudah' ? 'text-emerald-400' : 'text-amber-400'}`}>
                           Level: {q.difficulty}
                        </span>
                     </div>
                     <h4 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">{q.text}</h4>
                     {q.options && (
                       <div className="flex flex-wrap gap-2 mt-4">
                          {q.options.map((opt, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-lg bg-zinc-800/50 border border-white/5 text-[10px] text-zinc-400 font-medium">
                               {String.fromCharCode(65 + idx)}. {opt}
                            </span>
                          ))}
                       </div>
                     )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <div className="flex items-center gap-2">
                        <button className="p-2 rounded-xl text-zinc-500 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all"><Edit2 size={16} /></button>
                        <button className="p-2 rounded-xl text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all"><Trash2 size={16} /></button>
                     </div>
                     <button className="text-[10px] font-black text-zinc-600 uppercase tracking-tighter hover:text-emerald-500 transition-colors">Lihat Pembahasan</button>
                  </div>
               </div>
            </motion.div>
          ))
        )}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-between p-6 rounded-[2rem] bg-zinc-900/30 border border-white/5">
        <p className="text-xs text-zinc-500 font-medium">Total <span className="text-white font-bold">150</span> Soal Tersimpan</p>
        <div className="flex items-center gap-2">
           <button className="w-10 h-10 rounded-xl bg-zinc-800 text-zinc-500 text-xs font-bold hover:text-white transition-all">{"<"}</button>
           <button className="w-10 h-10 rounded-xl bg-emerald-500 text-black text-xs font-black">1</button>
           <button className="w-10 h-10 rounded-xl bg-zinc-800 text-zinc-400 text-xs font-bold hover:text-white transition-all">2</button>
           <button className="w-10 h-10 rounded-xl bg-zinc-800 text-zinc-500 text-xs font-bold hover:text-white transition-all">{">"}</button>
        </div>
      </div>
    </div>
  );
}
