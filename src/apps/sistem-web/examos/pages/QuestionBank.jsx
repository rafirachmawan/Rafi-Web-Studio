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
  FileSpreadsheet,
  X
} from "lucide-react";
import { QUESTIONS } from "../data/mockData";

export default function QuestionBank() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [questions, setQuestions] = useState(QUESTIONS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // Form State
  const [newQuestion, setNewQuestion] = useState({
    text: "",
    type: "Pilihan Ganda",
    difficulty: "Mudah",
    options: ["", "", "", ""],
    answer: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const newId = `Q${String(questions.length + 1).padStart(3, '0')}`;
    const questionToAdd = {
      id: newId,
      text: newQuestion.text,
      type: newQuestion.type,
      difficulty: newQuestion.difficulty,
      ...(newQuestion.type === "Pilihan Ganda" && {
        options: newQuestion.options.filter(opt => opt.trim() !== ""),
        answer: newQuestion.answer
      }),
      ...(newQuestion.type === "Benar/Salah" && {
        answer: newQuestion.answer
      })
    };
    
    setQuestions([questionToAdd, ...questions]);
    setIsAddModalOpen(false);
    setNewQuestion({ text: "", type: "Pilihan Ganda", difficulty: "Mudah", options: ["", "", "", ""], answer: "" });
  };

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
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 text-black font-black hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
          >
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
          questions.map((q, i) => (
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
      {/* ADD QUESTION MODAL */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={() => setIsAddModalOpen(false)} 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-white">
                  Tambah Soal Baru
                </h3>
                <button onClick={() => setIsAddModalOpen(false)} className="p-2 rounded-xl text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleAddQuestion} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Tipe Soal</label>
                  <select
                    value={newQuestion.type}
                    onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
                    className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="Pilihan Ganda">Pilihan Ganda</option>
                    <option value="Essay">Essay</option>
                    <option value="Benar/Salah">Benar / Salah</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Tingkat Kesulitan</label>
                  <div className="flex gap-3">
                    {["Mudah", "Sedang", "Sulit"].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setNewQuestion({ ...newQuestion, difficulty: level })}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-colors ${
                          newQuestion.difficulty === level 
                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" 
                            : "bg-zinc-950 border-white/5 text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Pertanyaan</label>
                  <textarea
                    required
                    rows="3"
                    value={newQuestion.text}
                    onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
                    className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Tulis pertanyaan di sini..."
                  />
                </div>

                {newQuestion.type === "Pilihan Ganda" && (
                  <div className="space-y-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Pilihan Jawaban</label>
                    {newQuestion.options.map((opt, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800 text-zinc-400 font-bold text-sm">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <input
                          type="text"
                          required
                          value={opt}
                          onChange={(e) => {
                            const newOpts = [...newQuestion.options];
                            newOpts[idx] = e.target.value;
                            setNewQuestion({ ...newQuestion, options: newOpts });
                          }}
                          className="flex-1 bg-zinc-950 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                          placeholder={`Pilihan ${String.fromCharCode(65 + idx)}`}
                        />
                      </div>
                    ))}
                    <div className="pt-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Kunci Jawaban</label>
                      <select
                        required
                        value={newQuestion.answer}
                        onChange={(e) => setNewQuestion({ ...newQuestion, answer: e.target.value })}
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="">Pilih Kunci Jawaban</option>
                        {newQuestion.options.map((opt, idx) => (
                          opt && <option key={idx} value={opt}>Pilihan {String.fromCharCode(65 + idx)}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {newQuestion.type === "Benar/Salah" && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Kunci Jawaban</label>
                    <div className="flex gap-3">
                      {["Benar", "Salah"].map((ans) => (
                        <button
                          key={ans}
                          type="button"
                          onClick={() => setNewQuestion({ ...newQuestion, answer: ans })}
                          className={`flex-1 py-3 rounded-xl text-sm font-bold border transition-colors ${
                            newQuestion.answer === ans 
                              ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" 
                              : "bg-zinc-950 border-white/5 text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          {ans}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 flex justify-end gap-3 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-6 py-3 rounded-xl text-sm font-bold border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-sm font-black bg-emerald-500 text-black hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
                  >
                    Simpan Soal
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
