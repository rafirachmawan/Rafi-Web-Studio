import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  History, 
  Settings,
  ShieldCheck,
  Users,
  FileText,
  Fingerprint,
  CheckCircle2,
  ArrowLeft,
  LogOut
} from "lucide-react";
import MobileEmulator from "./components/MobileEmulator";

// ============================================================================
// MAIN APPLICATION ENGINE
// ============================================================================

export default function AbsenOSApp() {
  const navigate = useNavigate();
  
  // Dynamic Real-time Clock
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit', hour12: false });
  };
  const formatDate = (date) => {
    return date.toLocaleDateString("id-ID", { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
  };

  // State 1: Active Logged In User
  const [currentUser, setCurrentUser] = useState(null);
  
  // State 2: masterLogs (Database of Check-ins)
  const [logs, setLogs] = useState([
    { id: "log-1", date: "15 Mei 2024", name: "Ahmad Dani", role: "murid", in: "07:15 AM", out: "04:30 PM", status: "Hadir" },
    { id: "log-2", date: "14 Mei 2024", name: "Ahmad Dani", role: "murid", in: "07:42 AM", out: "04:35 PM", status: "Terlambat" },
    { id: "log-3", date: "13 Mei 2024", name: "Ahmad Dani", role: "murid", in: "07:20 AM", out: "04:30 PM", status: "Hadir" },
    { id: "log-4", date: "15 Mei 2024", name: "Bu Retno", role: "guru", in: "06:55 AM", out: "04:45 PM", status: "Hadir" },
  ]);

  // State 3: masterLeaves (Leave Permits Requests)
  const [leaveRequests, setLeaveRequests] = useState([
    { id: "leave-1", name: "Ahmad Dani", type: "Sakit", date: "16 Mei 2024", reason: "Demam tinggi & flu berat, istirahat dokter.", status: "Disetujui" },
    { id: "leave-2", name: "Siti Rahma", type: "Cuti", date: "17 Mei 2024", reason: "Acara pernikahan keluarga.", status: "Pending" },
  ]);

  // State 4: classStudents (Guru Homeroom view data)
  const [classStudents, setClassStudents] = useState([
    { id: "stud-1", name: "Ahmad Dani", role: "murid", status: "Alpa", time: "--:--" },
    { id: "stud-2", name: "Lestari Budi", role: "murid", status: "Hadir", time: "07:12 AM" },
    { id: "stud-3", name: "Agus Salim", role: "murid", status: "Hadir", time: "07:25 AM" },
    { id: "stud-4", name: "Budi Kusuma", role: "murid", status: "Hadir", time: "07:28 AM" },
    { id: "stud-5", name: "Siti Rahma", role: "murid", status: "Izin", time: "--:--" },
  ]);

  // UI state overlays
  const [activeTab, setActiveTab] = useState("home");
  const [isScanning, setIsScanning] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Settings State
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [faceScanOnly, setFaceScanOnly] = useState(true);
  const [phoneTheme, setPhoneTheme] = useState("dark");

  // Handles fast login
  const handleLogin = (role) => {
    if (role === "murid") {
      setCurrentUser({ id: "murid-1", name: "Ahmad Dani", role: "murid", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dani", subtitle: "Siswa Kelas XII" });
    } else if (role === "guru") {
      setCurrentUser({ id: "guru-1", name: "Bu Retno", role: "guru", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Retno", subtitle: "Wali Kelas XII" });
    } else if (role === "admin") {
      setCurrentUser({ id: "admin-1", name: "Mas Rafi", role: "admin", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rafi", subtitle: "Superadmin Sekolah" });
    }
    setActiveTab("home");
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Handles check-in / check-out biometric click (Murid & Guru)
  const handleCheckIn = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      
      const todayStr = new Date().toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' });
      const currentHour = formatTime(currentTime);

      // Check if already clocked in today
      const alreadyCheckedIn = logs.find(
        (l) => l.date === todayStr && l.name === currentUser.name && l.role === currentUser.role
      );

      if (!alreadyCheckedIn) {
        // Clock In Flow
        const isLate = currentUser.role === "murid" && currentTime.getHours() >= 7 && currentTime.getMinutes() > 30;
        const newStatus = isLate ? "Terlambat" : "Hadir";

        setLogs([
          {
            id: `log-${Date.now()}`,
            date: todayStr,
            name: currentUser.name,
            role: currentUser.role,
            in: `${currentHour} ${currentTime.getHours() >= 12 ? 'PM' : 'AM'}`,
            out: "--:--",
            status: newStatus
          },
          ...logs
        ]);

        // Sync with class students list if it's Murid
        if (currentUser.role === "murid") {
          setClassStudents(prev => prev.map(student => 
            student.name === currentUser.name 
              ? { ...student, status: "Hadir", time: `${currentHour} AM` }
              : student
          ));
        }

        setSuccessMessage("Check-In Berhasil!");
        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 1800);
      } else if (alreadyCheckedIn.out === "--:--") {
        // Clock Out Flow
        setLogs(prev => prev.map(log => 
          (log.date === todayStr && log.name === currentUser.name && log.role === currentUser.role)
            ? { ...log, out: `${currentHour} PM` }
            : log
        ));

        setSuccessMessage("Check-Out Berhasil!");
        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 1800);
      }
    }, 1200);
  };

  // Handles leave permit submission (Murid)
  const handleLeaveSubmit = (leaveType, dateStr, leaveReason) => {
    const newLeave = {
      id: `leave-${Date.now()}`,
      name: currentUser.name,
      type: leaveType,
      date: dateStr,
      reason: leaveReason,
      status: "Pending"
    };

    setLeaveRequests([newLeave, ...leaveRequests]);
    
    // Sync class status for homeroom teacher instantly to Sick/Permit
    setClassStudents(prev => prev.map(student => 
      student.name === currentUser.name 
        ? { ...student, status: leaveType === "Sakit" ? "Sakit" : "Izin" }
        : student
    ));

    setSuccessMessage("Permohonan Terkirim!");
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 1800);
  };

  // Handles leave request approval (Superadmin)
  const handleLeaveApproval = (leaveId, decision) => {
    setLeaveRequests(prev => prev.map(req => 
      req.id === leaveId ? { ...req, status: decision ? "Disetujui" : "Ditolak" } : req
    ));

    const req = leaveRequests.find(r => r.id === leaveId);
    if (req && decision) {
      setClassStudents(prev => prev.map(student => 
        student.name === req.name 
          ? { ...student, status: req.type === "Sakit" ? "Sakit" : "Izin" }
          : student
      ));
    } else if (req && !decision) {
      setClassStudents(prev => prev.map(student => 
        student.name === req.name 
          ? { ...student, status: "Alpa" }
          : student
      ));
    }
  };

  return (
    <div className="min-h-screen bg-[#050506] flex items-center justify-center p-2 sm:p-4 relative overflow-hidden transition-colors duration-300">
      
      {/* EXIT BUTTON */}
      <button 
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 sm:top-8 sm:left-8 z-[500] flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md group"
      >
         <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
         <span className="text-xs sm:text-sm font-bold">Kembali ke Showcase</span>
      </button>

      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <MobileEmulator>
         <div className={`h-full flex flex-col relative transition-colors duration-300 ${phoneTheme === 'dark' ? 'bg-[#0d0d0e]' : 'bg-[#fafafa]'}`}>
            
            {/* RENDER LOGIN OR DASHBOARD */}
            {!currentUser ? (
              <LoginScreen onLogin={handleLogin} phoneTheme={phoneTheme} setPhoneTheme={setPhoneTheme} />
            ) : (
              <>
                {/* APP HEADER */}
                <div className={`px-5 pt-5 pb-3.5 flex items-center justify-between border-b ${phoneTheme === 'dark' ? 'border-white/5 bg-zinc-950/20' : 'border-zinc-200/60 bg-white/60'} backdrop-blur-md z-40`}>
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg overflow-hidden border ${phoneTheme === 'dark' ? 'border-white/10' : 'border-zinc-200'}`}>
                      <img src={currentUser.avatar} alt="avatar" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-black tracking-tight leading-tight ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{currentUser.name}</h4>
                      <p className={`text-[8px] font-bold uppercase tracking-wider ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>{currentUser.subtitle}</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className={`px-2.5 py-1 text-[8px] font-black uppercase tracking-wider rounded-lg border ${phoneTheme === 'dark' ? 'bg-zinc-900/60 border-white/5 text-zinc-400 hover:text-white' : 'bg-zinc-100 border-zinc-200 text-zinc-500 hover:text-zinc-900'} transition-all`}
                  >
                    Keluar
                  </button>
                </div>

                {/* SCROLLABLE MAIN CONTENT */}
                <div className="flex-1 overflow-y-auto no-scrollbar pb-20 px-4 pt-4">
                  {/* ROLE: SISWA (MURID) VIEWS */}
                  {currentUser.role === "murid" && (
                    <>
                      {activeTab === "home" && (
                        <MuridHome 
                          currentTime={currentTime} 
                          formatTime={formatTime} 
                          formatDate={formatDate}
                          onCheckIn={handleCheckIn}
                          logs={logs}
                          currentUser={currentUser}
                          phoneTheme={phoneTheme}
                        />
                      )}
                      {activeTab === "leave" && (
                        <MuridLeave onSubmit={handleLeaveSubmit} phoneTheme={phoneTheme} />
                      )}
                      {activeTab === "history" && (
                        <MuridHistory logs={logs} leaveRequests={leaveRequests} currentUser={currentUser} phoneTheme={phoneTheme} />
                      )}
                      {activeTab === "settings" && (
                        <AppSettings 
                          sound={soundEnabled} 
                          setSound={setSoundEnabled} 
                          faceScan={faceScanOnly} 
                          setFaceScan={setFaceScanOnly}
                          theme={phoneTheme}
                          setTheme={setPhoneTheme}
                        />
                      )}
                    </>
                  )}

                  {/* ROLE: GURU VIEWS */}
                  {currentUser.role === "guru" && (
                    <>
                      {activeTab === "home" && (
                        <GuruClassMonitor classStudents={classStudents} phoneTheme={phoneTheme} />
                      )}
                      {activeTab === "my_absen" && (
                        <MuridHome 
                          currentTime={currentTime} 
                          formatTime={formatTime} 
                          formatDate={formatDate}
                          onCheckIn={handleCheckIn}
                          logs={logs}
                          currentUser={currentUser}
                          phoneTheme={phoneTheme}
                        />
                      )}
                      {activeTab === "history" && (
                        <GuruHistory logs={logs} currentUser={currentUser} phoneTheme={phoneTheme} />
                      )}
                    </>
                  )}

                  {/* ROLE: SUPERADMIN VIEWS */}
                  {currentUser.role === "admin" && (
                    <>
                      {activeTab === "home" && (
                        <AdminOverview logs={logs} leaveRequests={leaveRequests} classStudents={classStudents} phoneTheme={phoneTheme} />
                      )}
                      {activeTab === "approvals" && (
                        <AdminApprovals queue={leaveRequests} onApproval={handleLeaveApproval} phoneTheme={phoneTheme} />
                      )}
                      {activeTab === "settings" && (
                        <AppSettings 
                          sound={soundEnabled} 
                          setSound={setSoundEnabled} 
                          faceScan={faceScanOnly} 
                          setFaceScan={setFaceScanOnly}
                          theme={phoneTheme}
                          setTheme={setPhoneTheme}
                        />
                      )}
                    </>
                  )}
                </div>

                {/* DYNAMIC NAVIGATION BAR */}
                <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex items-center justify-around px-4 z-50 transition-colors ${phoneTheme === 'dark' ? 'bg-zinc-950/90 border-white/5 text-zinc-500' : 'bg-white/95 border-zinc-200 text-zinc-400'}`}>
                  {/* Murid Navigation */}
                  {currentUser.role === "murid" && [
                    { id: "home", icon: Home, label: "Absen" },
                    { id: "leave", icon: FileText, label: "Izin" },
                    { id: "history", icon: History, label: "Riwayat" },
                    { id: "settings", icon: Settings, label: "Setelan" },
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === tab.id ? 'text-indigo-500 font-bold' : 'hover:text-indigo-400'}`}
                    >
                      <tab.icon size={15} fill={activeTab === tab.id ? "currentColor" : "none"} className="transition-transform duration-200" />
                      <span className="text-[7.5px] font-black uppercase tracking-tight">{tab.label}</span>
                    </button>
                  ))}

                  {/* Guru Navigation */}
                  {currentUser.role === "guru" && [
                    { id: "home", icon: Users, label: "Monitor" },
                    { id: "my_absen", icon: Home, label: "Absen" },
                    { id: "history", icon: History, label: "Riwayat" },
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === tab.id ? 'text-emerald-500 font-bold' : 'hover:text-emerald-400'}`}
                    >
                      <tab.icon size={15} fill={activeTab === tab.id ? "currentColor" : "none"} />
                      <span className="text-[7.5px] font-black uppercase tracking-tight">{tab.label}</span>
                    </button>
                  ))}

                  {/* Admin Navigation */}
                  {currentUser.role === "admin" && [
                    { id: "home", icon: Home, label: "Overview" },
                    { id: "approvals", icon: ShieldCheck, label: "Persetujuan" },
                    { id: "settings", icon: Settings, label: "Setelan" },
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === tab.id ? 'text-amber-500 font-bold' : 'hover:text-amber-400'}`}
                    >
                      <tab.icon size={15} fill={activeTab === tab.id ? "currentColor" : "none"} />
                      <span className="text-[7.5px] font-black uppercase tracking-tight">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* LIVE OVERLAYS */}
            <AnimatePresence>
               {/* Biometric Scan Overlay */}
               {isScanning && (
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
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
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
               )}

               {/* Success Banner Overlay */}
               {showSuccessModal && (
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
               )}
            </AnimatePresence>
         </div>
      </MobileEmulator>
    </div>
  );
}

// ============================================================================
// SUB-SCREENS AND ROLES COMPONENT MODULES
// ============================================================================

// --- SCREEN: UNIFIED SMART LOGIN ---
function LoginScreen({ onLogin, phoneTheme, setPhoneTheme }) {
  return (
    <div className="h-full flex flex-col justify-between p-6">
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <h3 className={`text-[10px] font-black tracking-[0.2em] uppercase ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
          ABSEN<span className="text-indigo-500">.OS</span>
        </h3>
        <button 
          onClick={() => setPhoneTheme(phoneTheme === 'dark' ? 'light' : 'dark')}
          className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider border ${phoneTheme === 'dark' ? 'bg-white/5 border-white/10 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-700'}`}
        >
          {phoneTheme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>

      {/* Lockscreen minimalist status ring */}
      <div className="flex flex-col items-center justify-center my-6">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 border ${phoneTheme === 'dark' ? 'bg-zinc-950 border-white/5 text-zinc-600 shadow-inner' : 'bg-white border-zinc-200/80 text-zinc-400 shadow-sm'}`}>
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
        </div>
        <h4 className={`text-xs font-black tracking-wider uppercase ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>Sistem Terkunci</h4>
        <p className={`text-[8px] font-bold uppercase tracking-wider mt-0.5 ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Pilih akun di bawah</p>
      </div>

      {/* Sleek Role Selectors */}
      <div className="space-y-2">
        <button
          onClick={() => onLogin("murid")}
          className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-between text-[9px] font-black uppercase tracking-widest transition-all duration-200 active:scale-[0.98]"
        >
          <span>Siswa</span>
          <span className="text-[7.5px] opacity-60 font-black tracking-tight">XII IPA 1</span>
        </button>

        <button
          onClick={() => onLogin("guru")}
          className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-between text-[9px] font-black uppercase tracking-widest transition-all duration-200 active:scale-[0.98]"
        >
          <span>Guru</span>
          <span className="text-[7.5px] opacity-60 font-black tracking-tight">Wali Kelas</span>
        </button>

        <button
          onClick={() => onLogin("admin")}
          className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-between text-[9px] font-black uppercase tracking-widest transition-all duration-200 active:scale-[0.98]"
        >
          <span>Superadmin</span>
          <span className="text-[7.5px] opacity-60 font-black tracking-tight">Full Akses</span>
        </button>
      </div>

      {/* Lockscreen footnote */}
      <p className={`text-[7px] font-black text-center mt-4 uppercase tracking-[0.2em] ${phoneTheme === 'dark' ? 'text-zinc-700' : 'text-zinc-450'}`}>
        GapaiDigital Portal Security
      </p>
    </div>
  );
}

// --- TAB SUB-VIEW: MURID HOME (CHECK-IN) ---
function MuridHome({ currentTime, formatTime, formatDate, onCheckIn, logs, currentUser, phoneTheme }) {
  const todayStr = new Date().toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' });
  const todayLog = logs.find(l => l.date === todayStr && l.name === currentUser.name && l.role === currentUser.role);

  return (
    <div className="flex flex-col space-y-4 text-left">
      {/* Date & Time Widget */}
      <div className={`p-4 rounded-2xl relative overflow-hidden border ${phoneTheme === 'dark' ? 'bg-[#121214] border-white/5' : 'bg-white border-zinc-200 shadow-sm'}`}>
        <p className="text-[8px] font-black uppercase tracking-widest text-indigo-500">{formatDate(currentTime)}</p>
        <h2 className={`text-2xl font-black mt-1 ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
          {formatTime(currentTime)} <span className="text-xs font-bold opacity-45">AM</span>
        </h2>
        <p className="text-[7.5px] font-black uppercase tracking-widest text-zinc-500 mt-2">
          SCBD OFFICE • JAKARTA
        </p>
      </div>

      {/* Minimal Fingerprint/Biometric Button */}
      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <button
          onClick={onCheckIn}
          className={`w-28 h-28 rounded-full border flex flex-col items-center justify-center relative z-10 transition-all duration-300 ${
            phoneTheme === 'dark'
              ? 'bg-zinc-950 border-white/5 hover:bg-zinc-900 active:border-indigo-500'
              : 'bg-white border-zinc-200/80 hover:bg-zinc-50 active:border-indigo-500'
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping mb-2" />
          <span className={`text-[8.5px] font-black tracking-[0.15em] uppercase ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
            {!todayLog ? "ABSEN MASUK" : todayLog.out === "--:--" ? "ABSEN KELUAR" : "SELESAI"}
          </span>
          <span className="text-[6.5px] text-zinc-500 font-bold mt-0.5 uppercase tracking-wider">TAP SENSOR</span>
        </button>
      </div>

      {/* Attendance Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`p-3 rounded-xl border text-left ${phoneTheme === 'dark' ? 'bg-zinc-950/60 border-white/5' : 'bg-white border-zinc-200 shadow-sm'}`}>
          <span className="text-[7.5px] font-black uppercase tracking-wider text-emerald-500 block mb-0.5">JAM MASUK</span>
          <p className={`text-xs font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-850'}`}>
            {todayLog ? todayLog.in : "--:--"}
          </p>
        </div>
        
        <div className={`p-3 rounded-xl border text-left ${phoneTheme === 'dark' ? 'bg-zinc-950/60 border-white/5' : 'bg-white border-zinc-200 shadow-sm'}`}>
          <span className="text-[7.5px] font-black uppercase tracking-wider text-rose-500 block mb-0.5">JAM KELUAR</span>
          <p className={`text-xs font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-850'}`}>
            {todayLog ? todayLog.out : "--:--"}
          </p>
        </div>
      </div>
    </div>
  );
}

// --- TAB SUB-VIEW: MURID LEAVE SUBMISSION FORM ---
function MuridLeave({ onSubmit, phoneTheme }) {
  const [leaveType, setLeaveType] = useState("Sakit");
  const [leaveDate, setLeaveDate] = useState("18 Mei 2024");
  const [leaveReason, setLeaveReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leaveReason.trim()) return;
    onSubmit(leaveType, leaveDate, leaveReason);
    setLeaveReason("");
  };

  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Pengajuan Cuti & Izin
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Type selector */}
        <div>
          <label className={`text-[7.5px] font-black uppercase tracking-wider block mb-1.5 ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Kategori</label>
          <div className="grid grid-cols-3 gap-2">
            {["Sakit", "Izin", "Cuti"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setLeaveType(type)}
                className={`py-2 rounded-xl text-[9px] font-black border text-center transition-all ${
                  leaveType === type
                    ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-500"
                    : phoneTheme === 'dark'
                      ? "bg-zinc-950/40 border-white/5 text-zinc-400 hover:bg-zinc-900"
                      : "bg-white border-zinc-200 text-zinc-500 hover:bg-zinc-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Date Input */}
        <div>
          <label className={`text-[7.5px] font-black uppercase tracking-wider block mb-1.5 ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Tanggal</label>
          <input
            type="text"
            value={leaveDate}
            onChange={(e) => setLeaveDate(e.target.value)}
            className={`w-full p-2.5 rounded-xl text-[9.5px] font-bold border focus:outline-none focus:border-indigo-500 ${
              phoneTheme === 'dark'
                ? 'bg-zinc-950/40 border-white/5 text-white'
                : 'bg-white border-zinc-200 text-zinc-800'
            }`}
          />
        </div>

        {/* Reason area */}
        <div>
          <label className={`text-[7.5px] font-black uppercase tracking-wider block mb-1.5 ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Keterangan Alasan</label>
          <textarea
            rows="3"
            value={leaveReason}
            onChange={(e) => setLeaveReason(e.target.value)}
            placeholder="Tulis alasan tidak hadir secara terperinci..."
            className={`w-full p-2.5 rounded-xl text-[9.5px] font-bold border focus:outline-none focus:border-indigo-500 ${
              phoneTheme === 'dark'
                ? 'bg-zinc-950/40 border-white/5 text-white placeholder-zinc-650'
                : 'bg-white border-zinc-200 text-zinc-800 placeholder-zinc-400'
            }`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[9px] font-black uppercase tracking-widest shadow-md transition-transform"
        >
          Kirim Pengajuan
        </button>
      </form>
    </div>
  );
}

// --- TAB SUB-VIEW: MURID HISTORY LOGS ---
function MuridHistory({ logs, leaveRequests, currentUser, phoneTheme }) {
  const myLogs = logs.filter(l => l.name === currentUser.name && l.role === currentUser.role);
  const myLeaves = leaveRequests.filter(l => l.name === currentUser.name);

  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Riwayat Kehadiran
      </h3>

      {/* Leave Requests Logs section */}
      {myLeaves.length > 0 && (
        <div className="space-y-2">
          <p className={`text-[7.5px] font-black uppercase tracking-wider ${phoneTheme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>Pengajuan Cuti / Izin</p>
          
          <div className={`border rounded-xl divide-y ${phoneTheme === 'dark' ? 'border-white/5 divide-white/5 bg-zinc-950/30' : 'border-zinc-200/80 divide-zinc-150 bg-white'}`}>
            {myLeaves.map((leave) => (
              <div key={leave.id} className="p-3 flex items-center justify-between">
                <div>
                  <h4 className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                    {leave.type} ({leave.date})
                  </h4>
                  <p className={`text-[8px] max-w-[150px] truncate ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>{leave.reason}</p>
                </div>
                <span className={`text-[7.5px] font-black px-2 py-0.5 rounded-full uppercase tracking-tight ${
                  leave.status === "Disetujui" 
                    ? 'bg-emerald-500/10 text-emerald-500' 
                    : leave.status === "Ditolak"
                      ? 'bg-rose-500/10 text-rose-500'
                      : 'bg-zinc-500/10 text-zinc-500'
                }`}>
                  {leave.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Daily Check-In Logs Section */}
      <div className="space-y-2">
        <p className={`text-[7.5px] font-black uppercase tracking-wider ${phoneTheme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>Absensi Harian</p>
        
        {myLogs.length === 0 ? (
          <p className="text-[9px] text-zinc-500 italic text-center py-4">Belum ada riwayat absensi.</p>
        ) : (
          <div className={`border rounded-xl divide-y ${phoneTheme === 'dark' ? 'border-white/5 divide-white/5 bg-zinc-950/30' : 'border-zinc-200/80 divide-zinc-150 bg-white'}`}>
            {myLogs.map((h) => (
              <div key={h.id} className="p-3 flex items-center justify-between">
                <div>
                  <p className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-850'}`}>{h.date}</p>
                  <p className={`text-[7.5px] font-black uppercase mt-0.5 ${
                    h.status === 'Hadir' ? 'text-emerald-500' : 'text-amber-500'
                  }`}>{h.status}</p>
                </div>
                <p className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {h.in} - {h.out}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// --- GURU CLASSROOM MONITOR ---
function GuruClassMonitor({ classStudents, phoneTheme }) {
  return (
    <div className="flex flex-col space-y-4 text-left">
      <div className="flex items-center justify-between">
        <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
          Monitoring Kelas
        </h3>
        <span className="text-[7.5px] bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 px-2 py-0.5 rounded-full font-black uppercase">XII IPA 1</span>
      </div>

      <div className={`border rounded-xl divide-y ${phoneTheme === 'dark' ? 'border-white/5 divide-white/5 bg-zinc-950/30' : 'border-zinc-200/80 divide-zinc-150 bg-white'}`}>
        {classStudents.map((student) => (
          <div key={student.id} className="p-3 flex items-center justify-between">
            <div>
              <h4 className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-850'}`}>{student.name}</h4>
              <p className={`text-[7.5px] font-bold text-zinc-500 mt-0.5`}>MASUK: {student.time}</p>
            </div>
            
            <span className={`text-[7.5px] font-black px-2 py-0.5 rounded-full uppercase tracking-tight ${
              student.status === "Hadir" 
                ? 'bg-emerald-500/10 text-emerald-500' 
                : student.status === "Sakit" || student.status === "Izin"
                  ? 'bg-amber-500/10 text-amber-500'
                  : 'bg-rose-500/10 text-rose-500'
            }`}>
              {student.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- GURU WORK LOG HISTORY ---
function GuruHistory({ logs, currentUser, phoneTheme }) {
  const myLogs = logs.filter(l => l.name === currentUser.name && l.role === currentUser.role);

  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Riwayat Kehadiran
      </h3>

      {myLogs.length === 0 ? (
        <p className="text-[9px] text-zinc-500 italic text-center py-4">Belum ada riwayat absensi.</p>
      ) : (
        <div className={`border rounded-xl divide-y ${phoneTheme === 'dark' ? 'border-white/5 divide-white/5 bg-zinc-950/30' : 'border-zinc-200/80 divide-zinc-150 bg-white'}`}>
          {myLogs.map((h) => (
            <div key={h.id} className="p-3 flex items-center justify-between">
              <div>
                <p className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-850'}`}>{h.date}</p>
                <p className="text-[7.5px] font-black uppercase mt-0.5 text-emerald-500">{h.status}</p>
              </div>
              <p className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {h.in} - {h.out}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- SUPERADMIN GLOBAL OVERVIEW ---
function AdminOverview({ logs, leaveRequests, classStudents, phoneTheme }) {
  const pendingRequests = leaveRequests.filter(r => r.status === "Pending");
  const presentSiswaCount = classStudents.filter(s => s.status === "Hadir").length;
  const attendanceRate = Math.round((presentSiswaCount / classStudents.length) * 100);

  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Dashboard Admin
      </h3>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`p-4 rounded-xl border text-left ${phoneTheme === 'dark' ? 'bg-[#121214] border-white/5' : 'bg-white border-zinc-200/80 shadow-sm'}`}>
          <span className="text-[7.5px] font-black uppercase tracking-wider text-emerald-500 block mb-0.5">HADIR SISWA</span>
          <h2 className={`text-xl font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
            {attendanceRate}%
          </h2>
          <p className="text-[7px] text-zinc-500 font-bold uppercase mt-1">{presentSiswaCount}/{classStudents.length} HADIR</p>
        </div>

        <div className={`p-4 rounded-xl border text-left ${phoneTheme === 'dark' ? 'bg-[#121214] border-white/5' : 'bg-white border-zinc-200/80 shadow-sm'}`}>
          <span className="text-[7.5px] font-black uppercase tracking-wider text-amber-500 block mb-0.5">IZIN & CUTI</span>
          <h2 className={`text-xl font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
            {pendingRequests.length}
          </h2>
          <p className="text-[7px] text-zinc-500 font-bold uppercase mt-1">BELUM DISETUJUI</p>
        </div>
      </div>

      {/* System Status logs */}
      <div className="space-y-2">
        <p className={`text-[7.5px] font-black uppercase tracking-wider ${phoneTheme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>Kehadiran Staf Pengajar</p>
        
        <div className={`border rounded-xl divide-y ${phoneTheme === 'dark' ? 'border-white/5 divide-white/5 bg-zinc-950/30' : 'border-zinc-200/80 divide-zinc-150 bg-white'}`}>
          <div className="p-3 flex items-center justify-between">
            <span className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-805'}`}>Bu Retno (Matematika)</span>
            <span className="text-[7.5px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-black uppercase">06:55</span>
          </div>
          <div className="p-3 flex items-center justify-between">
            <span className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-805'}`}>Pak Roni (Sejarah)</span>
            <span className="text-[7.5px] bg-rose-500/10 text-rose-500 px-2 py-0.5 rounded-full font-black uppercase">ALPA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUPERADMIN APPROVALS QUEUE ---
function AdminApprovals({ queue, onApproval, phoneTheme }) {
  const pendings = queue.filter(r => r.status === "Pending");

  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Antrean Izin & Cuti
      </h3>

      {pendings.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-[9.5px] text-zinc-500 font-bold uppercase tracking-wider">Antrean Kosong</p>
          <p className="text-[8px] text-zinc-500 mt-1">Semua permohonan telah selesai diproses.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {pendings.map((req) => (
            <div 
              key={req.id}
              className={`p-4 rounded-xl border relative overflow-hidden ${
                phoneTheme === 'dark' ? 'bg-[#121214] border-white/5' : 'bg-white border-zinc-200/80 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <h4 className={`text-[10px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>{req.name}</h4>
                  <p className="text-[7px] text-zinc-500 font-black uppercase tracking-widest mt-0.5">Siswa Kelas XII</p>
                </div>
                <span className="text-[7.5px] bg-indigo-500/10 text-indigo-500 px-2 py-0.5 rounded-full font-black uppercase">
                  {req.type}
                </span>
              </div>

              <div className={`p-3 rounded-xl text-[9px] leading-relaxed mb-3 ${
                phoneTheme === 'dark' ? 'bg-zinc-900/60 text-zinc-400' : 'bg-zinc-50 text-zinc-600'
              }`}>
                <p className={`font-black mb-1 ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>TANGGAL: {req.date}</p>
                <p className="font-semibold italic">"{req.reason}"</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onApproval(req.id, false)}
                  className="py-2 rounded-lg border border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10 text-rose-500 text-[8px] font-black uppercase tracking-wider active:scale-[0.98]"
                >
                  Tolak
                </button>
                <button
                  onClick={() => onApproval(req.id, true)}
                  className="py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-[8px] font-black uppercase tracking-wider active:scale-[0.98]"
                >
                  Setujui
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- GENERAL PAGE MODULE: SETTINGS VIEW ---
function AppSettings({ sound, setSound, faceScan, setFaceScan, theme, setTheme }) {
  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Pengaturan Aplikasi
      </h3>

      <div className={`rounded-xl border divide-y ${theme === 'dark' ? 'bg-zinc-950/40 border-white/5 divide-white/5' : 'bg-white border-zinc-200/80 divide-zinc-100 shadow-sm'}`}>
        
        {/* Toggle 1 */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <h4 className={`text-[10px] font-black ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>Notifikasi Suara</h4>
            <p className="text-[7px] text-zinc-500 font-bold uppercase mt-0.5">Bunyi penanda absensi</p>
          </div>
          <button 
            onClick={() => setSound(!sound)}
            className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-300 ${sound ? 'bg-indigo-500' : 'bg-zinc-700'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${sound ? 'translate-x-4' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Toggle 2 */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <h4 className={`text-[10px] font-black ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>Pemindai Wajib</h4>
            <p className="text-[7px] text-zinc-500 font-bold uppercase mt-0.5 font-sans">Wajib verifikasi biometrik</p>
          </div>
          <button 
            onClick={() => setFaceScan(!faceScan)}
            className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-300 ${faceScan ? 'bg-indigo-500' : 'bg-zinc-700'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${faceScan ? 'translate-x-4' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Toggle 3 */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <h4 className={`text-[10px] font-black ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>Tema Emulator</h4>
            <p className="text-[7px] text-zinc-500 font-bold uppercase mt-0.5">Ubah kontras warna HP</p>
          </div>
          <div className="flex gap-1 bg-zinc-900 p-0.5 rounded-lg border border-white/5">
            <button 
              onClick={() => setTheme("dark")}
              className={`px-2.5 py-1 text-[7.5px] font-black uppercase rounded-md transition-colors ${theme === 'dark' ? 'bg-indigo-500 text-white' : 'text-zinc-500'}`}
            >
              Dark
            </button>
            <button 
              onClick={() => setTheme("light")}
              className={`px-2.5 py-1 text-[7.5px] font-black uppercase rounded-md transition-colors ${theme === 'light' ? 'bg-indigo-500 text-white' : 'text-zinc-500'}`}
            >
              Light
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
