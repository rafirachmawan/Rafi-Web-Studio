import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";

export function AbsenOSBiometricOverlay({ isScanning }) {
  if (!isScanning) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black/90 backdrop-blur-sm z-[200] flex flex-col items-center justify-center p-6 text-center"
    >
      {/* Pulsing visual scan area */}
      <div className="relative w-36 h-36 rounded-full border border-white/10 flex items-center justify-center mb-6 overflow-hidden">
        <div className="absolute inset-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.02]" />
        <div className="w-10 h-10 rounded-full border border-indigo-500/30 flex items-center justify-center z-10">
          <Fingerprint className="text-indigo-500 animate-pulse" size={24} />
        </div>
        
        {/* Precise minimal scanning guide beam */}
        <motion.div 
          animate={{ y: [-60, 60, -60] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[1px] bg-indigo-500/60 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
        />
      </div>
      <p className="text-white font-black uppercase tracking-widest text-[8px] mb-1">Verifikasi Biometrik</p>
      <p className="text-zinc-500 text-[7px] tracking-tight uppercase font-bold">Harap luruskan wajah Anda</p>
    </motion.div>
  );
}
