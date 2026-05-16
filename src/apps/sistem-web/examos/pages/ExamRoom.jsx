import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Flag,
  Monitor,
  ShieldAlert,
  ArrowLeft
} from "lucide-react";
import { QUESTIONS } from "../data/mockData";
import { useNavigate, useParams } from "react-router-dom";

export default function ExamRoom() {
  const navigate = useNavigate();
  const { examId } = useParams();
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5400); // 90 minutes
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState({});
  const [isSubmitModal, setIsSubmitModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (option) => {
    setAnswers({ ...answers, [currentQ]: option });
  };

  const toggleFlag = () => {
    setFlagged({ ...flagged, [currentQ]: !flagged[currentQ] });
  };

  return (
    <div className="min-h-screen bg-[#020504] text-white flex flex-col font-sans">
      {/* EXAM TOP BAR */}
      <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
         <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 text-zinc-500 hover:text-white transition-colors">
               <ArrowLeft size={20} />
            </button>
            <div className="flex flex-col">
               <h2 className="text-sm font-bold text-white leading-none">UAS Matematika</h2>
               <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1">Kelas XII - MIPA 1</p>
            </div>
         </div>

         <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-zinc-800/50 border border-white/10">
               <Clock size={18} className={timeLeft < 600 ? 'text-red-500 animate-pulse' : 'text-emerald-500'} />
               <span className={`text-sm font-black tracking-widest ${timeLeft < 600 ? 'text-red-400' : 'text-white'}`}>
                  {formatTime(timeLeft)}
               </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400">
               <ShieldAlert size={14} />
               SAFE MODE ACTIVE
            </div>
         </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row p-4 md:p-8 gap-8 overflow-hidden">
        {/* MAIN QUESTION AREA */}
        <div className="flex-1 flex flex-col gap-6 max-w-4xl mx-auto w-full">
           <div className="p-8 md:p-12 rounded-[3rem] bg-zinc-900/40 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
                 <div className="h-full bg-emerald-500 transition-all" style={{ width: `${((currentQ + 1) / QUESTIONS.length) * 100}%` }} />
              </div>

              <div className="flex items-center justify-between mb-8">
                 <span className="px-4 py-2 rounded-2xl bg-white/5 border border-white/5 text-xs font-black text-zinc-400 uppercase tracking-widest">
                    Pertanyaan {currentQ + 1} <span className="text-zinc-600">dari {QUESTIONS.length}</span>
                 </span>
                 <button 
                  onClick={toggleFlag}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl border transition-all text-xs font-bold ${flagged[currentQ] ? 'bg-amber-500 text-black border-amber-500' : 'bg-white/5 border-white/10 text-zinc-500 hover:text-white'}`}
                 >
                    <Flag size={14} />
                    {flagged[currentQ] ? 'Ditandai Ragu' : 'Tandai Ragu'}
                 </button>
              </div>

              <h3 className="text-xl md:text-2xl font-bold leading-relaxed mb-10">
                {QUESTIONS[currentQ]?.text}
              </h3>

              {QUESTIONS[currentQ]?.type === "Pilihan Ganda" && (
                <div className="grid grid-cols-1 gap-4">
                  {QUESTIONS[currentQ].options.map((opt, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSelectOption(opt)}
                      className={`group flex items-center gap-4 p-5 rounded-3xl border transition-all duration-300 text-left ${
                        answers[currentQ] === opt 
                        ? 'bg-emerald-500/10 border-emerald-500 shadow-lg shadow-emerald-500/5' 
                        : 'bg-zinc-800/20 border-white/5 hover:border-white/20 hover:bg-zinc-800/40'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black transition-colors ${
                        answers[currentQ] === opt ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-zinc-500 group-hover:text-white'
                      }`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className={`font-medium ${answers[currentQ] === opt ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>{opt}</span>
                    </button>
                  ))}
                </div>
              )}

              {QUESTIONS[currentQ]?.type === "Essay" && (
                <textarea 
                  placeholder="Tulis jawaban Anda di sini..."
                  className="w-full h-48 bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 text-white placeholder:text-zinc-700 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all"
                />
              )}
           </div>

           {/* NAVIGATION BUTTONS */}
           <div className="flex items-center justify-between pb-10">
              <button 
                disabled={currentQ === 0}
                onClick={() => setCurrentQ(prev => prev - 1)}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 border border-white/10 text-zinc-500 font-bold hover:text-white disabled:opacity-20 transition-all"
              >
                <ChevronLeft size={20} />
                Sebelumnya
              </button>
              <div className="hidden md:flex gap-2">
                 {QUESTIONS.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i === currentQ ? 'bg-emerald-500' : answers[i] ? 'bg-emerald-500/30' : 'bg-zinc-800'}`} />
                 ))}
              </div>
              <button 
                onClick={() => {
                  if (currentQ < QUESTIONS.length - 1) {
                    setCurrentQ(prev => prev + 1);
                  } else {
                    setIsSubmitModal(true);
                  }
                }}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black transition-all ${
                  currentQ === QUESTIONS.length - 1 
                  ? 'bg-emerald-500 text-black hover:bg-emerald-400' 
                  : 'bg-zinc-900 border border-white/10 text-white hover:border-emerald-500/50'
                }`}
              >
                {currentQ === QUESTIONS.length - 1 ? 'Selesai Ujian' : 'Selanjutnya'}
                <ChevronRight size={20} />
              </button>
           </div>
        </div>

        {/* SIDEBAR NAVIGATION GRID */}
        <div className="w-full lg:w-[320px] shrink-0 space-y-6">
           <div className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-white/5">
              <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-6 flex items-center justify-between">
                 Navigasi Soal
                 <Monitor size={14} />
              </h4>
              <div className="grid grid-cols-5 gap-3">
                 {QUESTIONS.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentQ(i)}
                      className={`h-10 rounded-xl text-xs font-bold transition-all ${
                        currentQ === i 
                        ? 'bg-emerald-500 text-black' 
                        : flagged[i]
                        ? 'bg-amber-500 text-black'
                        : answers[i]
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-zinc-800 text-zinc-500 hover:bg-zinc-700 hover:text-white'
                      }`}
                    >
                       {i + 1}
                    </button>
                 ))}
              </div>
           </div>

           <div className="p-6 rounded-[2.5rem] bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                 <CheckCircle2 size={20} />
                 <h4 className="text-sm font-bold">Progress Pengerjaan</h4>
              </div>
              <div className="flex items-center justify-between text-xs mb-2">
                 <span className="text-zinc-500">Terjawab</span>
                 <span className="text-white font-bold">{Object.keys(answers).length} / {QUESTIONS.length}</span>
              </div>
              <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                 <div className="h-full bg-emerald-500 transition-all" style={{ width: `${(Object.keys(answers).length / QUESTIONS.length) * 100}%` }} />
              </div>
           </div>
        </div>
      </div>

      {/* SUBMIT CONFIRMATION MODAL */}
      <AnimatePresence>
        {isSubmitModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md p-10 bg-zinc-900 border border-white/10 rounded-[3rem] text-center"
            >
               <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-8">
                  <ClipboardCheck size={40} />
               </div>
               <h3 className="text-2xl font-black text-white mb-4">Selesai Ujian?</h3>
               <p className="text-zinc-500 text-sm leading-relaxed mb-10">
                  Anda telah menjawab {Object.keys(answers).length} soal. Pastikan semua jawaban sudah benar sebelum mengirimkan hasil ujian Anda.
               </p>
               <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => navigate("/examos/student-dashboard")}
                    className="w-full py-4 rounded-2xl bg-emerald-500 text-black font-black hover:bg-emerald-400 transition-all"
                  >
                    YA, KIRIM SEKARANG
                  </button>
                  <button 
                    onClick={() => setIsSubmitModal(false)}
                    className="w-full py-4 rounded-2xl bg-zinc-800 text-white font-bold hover:bg-zinc-700 transition-all"
                  >
                    BELUM, LANJUTKAN
                  </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
