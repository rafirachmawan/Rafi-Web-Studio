import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  History, 
  User, 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowRight,
  Fingerprint,
  Camera,
  CheckCircle2,
  ChevronRight,
  Map,
  ArrowLeft
} from "lucide-react";
import MobileEmulator from "./components/MobileEmulator";

// =============================================
// SUB-PAGES
// =============================================

function HomePage({ onCheckIn }) {
  return (
    <div className="h-full flex flex-col p-5 space-y-5">
       {/* HEADER */}
       <div className="flex items-center justify-between">
          <div>
             <h3 className="text-lg font-bold text-white">Halo, Rafi!</h3>
             <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">Software Engineer</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rafi" alt="avatar" />
          </div>
       </div>

       {/* DATE TIME CARD */}
       <div className="p-5 rounded-[1.5rem] bg-indigo-600 relative overflow-hidden">
          <div className="relative z-10">
             <p className="text-[9px] font-black text-indigo-200 uppercase tracking-widest mb-1">Senin, 16 Mei 2024</p>
             <h4 className="text-2xl font-black text-white">09:41 <span className="text-xs font-medium opacity-60">AM</span></h4>
             <div className="flex items-center gap-2 mt-2 text-[9px] font-bold text-indigo-100">
                <MapPin size={10} />
                SCBD, Jakarta Selatan
             </div>
          </div>
       </div>

       {/* MAIN ACTION */}
       <div className="flex-1 flex flex-col items-center justify-center py-4">
          <button 
            onClick={onCheckIn}
            className="w-40 h-40 rounded-full bg-zinc-900 border-[8px] border-indigo-500/10 flex flex-col items-center justify-center relative z-10 shadow-xl hover:bg-zinc-800 transition-colors group"
          >
             <Fingerprint size={40} className="text-indigo-500 mb-2" />
             <span className="text-xs font-black text-white uppercase tracking-widest">TAP TO ABSEN</span>
             <span className="text-[8px] text-zinc-500 font-bold mt-1 uppercase tracking-tighter">Biometric Scan</span>
          </button>
       </div>

       {/* STATS */}
       <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
             <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Clock size={12} />
                <span className="text-[9px] font-black uppercase">Check In</span>
             </div>
             <p className="text-base font-black text-white">08:00</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
             <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <Clock size={12} />
                <span className="text-[9px] font-black uppercase">Check Out</span>
             </div>
             <p className="text-base font-black text-white">--:--</p>
          </div>
       </div>
    </div>
  );
}

function HistoryPage() {
  const history = [
    { date: "15 Mei 2024", in: "07:58", out: "17:05", status: "On Time" },
    { date: "14 Mei 2024", in: "08:05", out: "17:10", status: "Late" },
    { date: "13 Mei 2024", in: "07:55", out: "17:00", status: "On Time" },
  ];

  return (
    <div className="h-full flex flex-col p-5 space-y-5">
       <h3 className="text-lg font-bold text-white">Riwayat</h3>
       <div className="space-y-3">
          {history.map((h, i) => (
            <div key={i} className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${h.status === 'On Time' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                     <Calendar size={16} />
                  </div>
                  <div>
                     <p className="text-xs font-bold text-white">{h.date}</p>
                     <p className="text-[9px] text-zinc-500 font-bold uppercase">{h.status}</p>
                  </div>
               </div>
               <div className="text-right">
                  <p className="text-xs font-black text-white">{h.in} - {h.out}</p>
               </div>
            </div>
          ))}
       </div>
    </div>
  );
}

// =============================================
// MAIN ENTRY
// =============================================

export default function AbsenOSApp() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCheckIn = () => {
    setIsCheckingIn(true);
    setTimeout(() => {
      setIsCheckingIn(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#050506] flex items-center justify-center p-4 relative overflow-hidden">
      {/* EXIT BUTTON */}
      <button 
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 z-[500] flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md group"
      >
         <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
         <span className="text-sm font-bold">Kembali ke Beranda</span>
      </button>

      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <MobileEmulator>
         <div className="h-full bg-[#0d0d0e] flex flex-col relative">
            
            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
               {activeTab === "home" && <HomePage onCheckIn={handleCheckIn} />}
               {activeTab === "history" && <HistoryPage />}
               {activeTab === "profile" && (
                 <div className="h-full flex flex-col items-center justify-center p-6 text-center opacity-30">
                    <User size={32} className="mb-2" />
                    <p className="font-bold uppercase tracking-widest text-[10px]">Profile</p>
                 </div>
               )}
            </div>

            {/* BOTTOM NAV */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-zinc-950/90 backdrop-blur-md border-t border-white/5 flex items-center justify-around px-6 z-50">
               {[
                 { id: "home", icon: Home, label: "Home" },
                 { id: "history", icon: History, label: "History" },
                 { id: "profile", icon: User, label: "Profile" },
               ].map((tab) => (
                 <button 
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`flex flex-col items-center gap-1 ${activeTab === tab.id ? 'text-indigo-500' : 'text-zinc-500'}`}
                 >
                    <tab.icon size={18} fill={activeTab === tab.id ? "currentColor" : "none"} />
                    <span className="text-[9px] font-bold uppercase tracking-tighter">{tab.label}</span>
                 </button>
               ))}
            </div>

            {/* OVERLAYS */}
            <AnimatePresence>
               {isCheckingIn && (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="absolute inset-0 bg-black/70 backdrop-blur-sm z-[200] flex flex-col items-center justify-center"
                 >
                    <div className="w-16 h-16 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin mb-4" />
                    <p className="text-white font-bold uppercase tracking-widest text-[10px]">Biometric Scan...</p>
                 </motion.div>
               )}

               {success && (
                 <motion.div 
                   initial={{ scale: 0.9, opacity: 0, y: 10, x: "-50%" }}
                   animate={{ scale: 1, opacity: 1, y: 0, x: "-50%" }}
                   exit={{ scale: 0.9, opacity: 0, y: 10, x: "-50%" }}
                   className="absolute top-1/2 left-1/2 w-[260px] p-6 rounded-[2rem] bg-[#161617] border border-emerald-500/30 z-[300] text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                 >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                       <CheckCircle2 size={24} />
                    </div>
                    <h4 className="text-lg font-black text-white mb-1">Berhasil!</h4>
                    <p className="text-zinc-500 text-[10px] leading-relaxed">Absensi Anda telah tercatat ke sistem.</p>
                 </motion.div>
               )}
            </AnimatePresence>

         </div>
      </MobileEmulator>
    </div>
  );
}
