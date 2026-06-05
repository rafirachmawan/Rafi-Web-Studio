import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Plus, MoreHorizontal, FileText, Calculator, Globe, FlaskConical, PenTool } from "lucide-react";

export default function Subjects() {
  const [search, setSearch] = useState("");

  const subjectsList = [
    { id: "SUB001", name: "Matematika", code: "MTK", icon: Calculator, color: "text-blue-400", bg: "bg-blue-500/10", questions: 145, classes: 12 },
    { id: "SUB002", name: "Bahasa Indonesia", code: "IND", icon: BookOpen, color: "text-emerald-400", bg: "bg-emerald-500/10", questions: 210, classes: 15 },
    { id: "SUB003", name: "Bahasa Inggris", code: "ENG", icon: Globe, color: "text-indigo-400", bg: "bg-indigo-500/10", questions: 180, classes: 15 },
    { id: "SUB004", name: "Fisika", code: "FIS", icon: FlaskConical, color: "text-amber-400", bg: "bg-amber-500/10", questions: 95, classes: 8 },
    { id: "SUB005", name: "Seni Budaya", code: "SBD", icon: PenTool, color: "text-pink-400", bg: "bg-pink-500/10", questions: 45, classes: 10 },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Mata Pelajaran</h1>
          <p className="text-zinc-500 mt-1">Kelola data mata pelajaran dan silabus ujian.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 text-black font-black hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
          <Plus size={20} />
          Tambah Mapel
        </button>
      </div>

      {/* SEARCH */}
      <div className="flex flex-col md:flex-row gap-4 p-4 rounded-[2rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Cari mata pelajaran..." 
            className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500/50 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* SUBJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectsList.map((subject, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={subject.id}
            className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-emerald-500/20 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform" />
            
            <div className="flex items-start justify-between mb-6 relative z-10">
              <div className={`w-14 h-14 rounded-2xl ${subject.bg} flex items-center justify-center ${subject.color}`}>
                <subject.icon size={28} />
              </div>
              <button className="p-2 rounded-xl text-zinc-500 hover:bg-zinc-800 hover:text-white transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-lg bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">{subject.code}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{subject.name}</h3>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-zinc-400">
                  <FileText size={16} />
                  <span className="text-sm font-medium">{subject.questions} Soal</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <BookOpen size={16} />
                  <span className="text-sm font-medium">{subject.classes} Kelas</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
