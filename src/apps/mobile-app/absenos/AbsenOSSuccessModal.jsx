import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AbsenOSSuccessModal({ successMessage, phoneTheme }) {
  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0, y: 10, x: "-50%" }}
      animate={{ scale: 1, opacity: 1, y: 0, x: "-50%" }}
      exit={{ scale: 0.95, opacity: 0, y: 10, x: "-50%" }}
      className={`absolute top-[40%] left-1/2 w-[220px] p-5 rounded-[2rem] border z-[300] text-center shadow-[0_15px_40px_rgba(0,0,0,0.5)] ${phoneTheme === 'dark' ? 'bg-[#121213] border-emerald-500/10' : 'bg-white border-zinc-200'}`}
    >
      <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-3">
        <CheckCircle2 size={18} />
      </div>
      <h4 className={`text-xs font-black tracking-tight mb-0.5 ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{successMessage}</h4>
      <p className={`text-[8.5px] font-semibold leading-relaxed ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Database diperbarui seketika.</p>
    </motion.div>
  );
}
