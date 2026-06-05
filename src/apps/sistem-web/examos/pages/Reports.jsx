import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Download, Search, Filter, CheckCircle2, XCircle, Clock } from "lucide-react";
import { RESULTS, EXAMS } from "../data/mockData";

export default function Reports() {
  const [search, setSearch] = useState("");

  const combinedResults = [
    ...RESULTS,
    { id: "R003", student: "Andi Saputra", exam: "Try Out Bahasa Indonesia", score: 92, status: "Lulus", date: "2024-05-18" },
    { id: "R004", student: "Siti Aminah", exam: "Try Out Bahasa Indonesia", score: 78, status: "Lulus", date: "2024-05-18" },
    { id: "R005", student: "Rafi Rachmawan", exam: "Ujian Akhir Semester Matematika", score: 45, status: "Tidak Lulus", date: "2024-05-16" },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Laporan & Nilai</h1>
          <p className="text-zinc-500 mt-1">Pantau hasil ujian, nilai siswa, dan unduh laporan.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex p-3 rounded-2xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-all">
            <Filter size={20} />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 text-black font-black hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
            <Download size={20} />
            Export Data
          </button>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500 to-transparent rounded-bl-full opacity-10" />
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Rata-rata Kelulusan</p>
              <h3 className="text-3xl font-black text-white">85.4%</h3>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500 to-transparent rounded-bl-full opacity-10" />
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
              <BarChart3 size={24} />
            </div>
            <div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Rata-rata Nilai</p>
              <h3 className="text-3xl font-black text-white">78.2</h3>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500 to-transparent rounded-bl-full opacity-10" />
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Total Ujian</p>
              <h3 className="text-3xl font-black text-white">1,240</h3>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH & FILTERS */}
      <div className="flex flex-col md:flex-row gap-4 p-4 rounded-[2rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Cari nama siswa atau ujian..." 
            className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500/50 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
           <div className="relative">
              <select className="bg-zinc-800/50 border border-white/5 rounded-2xl py-3 px-4 text-xs md:text-sm text-zinc-300 focus:outline-none appearance-none cursor-pointer hover:bg-zinc-800 transition-colors">
                <option>Pilih Ujian</option>
                {EXAMS.map(exam => <option key={exam.id}>{exam.title}</option>)}
              </select>
           </div>
        </div>
      </div>

      {/* RESULTS TABLE */}
      <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-zinc-800/20">
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">Siswa</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">Ujian</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">Tanggal</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">Nilai</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-zinc-500 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {combinedResults.map((r, i) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={r.id}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{r.student}</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{r.id}</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-300">{r.exam}</td>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-400">{r.date}</td>
                  <td className="px-6 py-4">
                    <span className="text-xl font-black text-white">{r.score}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-widest ${
                      r.status === "Lulus" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                    }`}>
                      {r.status === "Lulus" ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                      {r.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
