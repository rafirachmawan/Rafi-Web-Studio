import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MobileEmulator from "./components/MobileEmulator";
import { AbsenOSLoginScreen } from "./AbsenOSLoginScreen";
import { AbsenOSHeader } from "./AbsenOSHeader";
import { AbsenosBottomNav } from "./AbsenosBottomNav";
import { AbsenOSSuccessModal } from "./AbsenOSSuccessModal";
import { AbsenOSBiometricOverlay } from "./AbsenOSBiometricOverlay";
import { MuridHome } from "./MuridHome";
import { MuridLeave } from "./MuridLeave";
import { MuridHistory } from "./MuridHistory";
import { GuruClassMonitor } from "./GuruClassMonitor";
import { GuruHistory } from "./GuruHistory";
import { AdminOverview } from "./AdminOverview";
import { AdminApprovals } from "./AdminApprovals";
import { AppSettings } from "./AppSettings";

export default function AbsenOSApp() {
  const navigate = useNavigate();
  
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

  const [currentUser, setCurrentUser] = useState(null);
  const [logs, setLogs] = useState([
    { id: "log-1", date: "15 Mei 2024", name: "Ahmad Dani", role: "murid", in: "07:15 AM", out: "04:30 PM", status: "Hadir" },
    { id: "log-2", date: "14 Mei 2024", name: "Ahmad Dani", role: "murid", in: "07:42 AM", out: "04:35 PM", status: "Terlambat" },
    { id: "log-3", date: "13 Mei 2024", name: "Ahmad Dani", role: "murid", in: "07:20 AM", out: "04:30 PM", status: "Hadir" },
    { id: "log-4", date: "15 Mei 2024", name: "Bu Retno", role: "guru", in: "06:55 AM", out: "04:45 PM", status: "Hadir" },
  ]);

  const [leaveRequests, setLeaveRequests] = useState([
    { id: "leave-1", name: "Ahmad Dani", type: "Sakit", date: "16 Mei 2024", reason: "Demam tinggi & flu berat.", status: "Disetujui" },
    { id: "leave-2", name: "Siti Rahma", type: "Cuti", date: "17 Mei 2024", reason: "Acara pernikahan keluarga.", status: "Pending" },
  ]);

  const [classStudents, setClassStudents] = useState([
    { id: "stud-1", name: "Ahmad Dani", role: "murid", status: "Alpa", time: "--:--" },
    { id: "stud-2", name: "Lestari Budi", role: "murid", status: "Hadir", time: "07:12 AM" },
    { id: "stud-3", name: "Agus Salim", role: "murid", status: "Hadir", time: "07:25 AM" },
    { id: "stud-4", name: "Budi Kusuma", role: "murid", status: "Hadir", time: "07:28 AM" },
    { id: "stud-5", name: "Siti Rahma", role: "murid", status: "Izin", time: "--:--" },
  ]);

  const [activeTab, setActiveTab] = useState("home");
  const [isScanning, setIsScanning] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [faceScanOnly, setFaceScanOnly] = useState(true);
  const [phoneTheme, setPhoneTheme] = useState("dark");

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

  const handleLogout = () => setCurrentUser(null);

  const handleCheckIn = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      const todayStr = new Date().toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' });
      const currentHour = formatTime(currentTime);
      const alreadyCheckedIn = logs.find((l) => l.date === todayStr && l.name === currentUser.name && l.role === currentUser.role);

      if (!alreadyCheckedIn) {
        const isLate = currentUser.role === "murid" && currentTime.getHours() >= 7 && currentTime.getMinutes() > 30;
        const newStatus = isLate ? "Terlambat" : "Hadir";
        setLogs([{ id: `log-${Date.now()}`, date: todayStr, name: currentUser.name, role: currentUser.role, in: `${currentHour} ${currentTime.getHours() >= 12 ? 'PM' : 'AM'}`, out: "--:--", status: newStatus }, ...logs]);
        if (currentUser.role === "murid") {
          setClassStudents(prev => prev.map(student => student.name === currentUser.name ? { ...student, status: "Hadir", time: `${currentHour} AM` } : student));
        }
        setSuccessMessage("Check-In Berhasil!");
        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 1800);
      } else if (alreadyCheckedIn.out === "--:--") {
        setLogs(prev => prev.map(log => (log.date === todayStr && log.name === currentUser.name && log.role === currentUser.role) ? { ...log, out: `${currentHour} PM` } : log));
        setSuccessMessage("Check-Out Berhasil!");
        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 1800);
      }
    }, 1200);
  };

  const handleLeaveSubmit = (leaveType, dateStr, leaveReason) => {
    const newLeave = { id: `leave-${Date.now()}`, name: currentUser.name, type: leaveType, date: dateStr, reason: leaveReason, status: "Pending" };
    setLeaveRequests([newLeave, ...leaveRequests]);
    setClassStudents(prev => prev.map(student => student.name === currentUser.name ? { ...student, status: leaveType === "Sakit" ? "Sakit" : "Izin" } : student));
    setSuccessMessage("Permohonan Terkirim!");
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 1800);
  };

  const handleLeaveApproval = (leaveId, decision) => {
    setLeaveRequests(prev => prev.map(req => req.id === leaveId ? { ...req, status: decision ? "Disetujui" : "Ditolak" } : req));
    const req = leaveRequests.find(r => r.id === leaveId);
    if (req) {
      setClassStudents(prev => prev.map(student => student.name === req.name ? { ...student, status: req.type === "Sakit" ? "Sakit" : req.type === "Izin" ? "Izin" : "Alpa" } : student));
    }
  };

  const todayStr = new Date().toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' });
  const todayLog = logs.find(l => l.date === todayStr && l.name === currentUser?.name && l.role === currentUser?.role);

  return (
    <div className="min-h-screen bg-[#050506] flex items-center justify-center p-2 sm:p-4 relative overflow-hidden transition-colors duration-300">
      <button onClick={() => navigate("/")} className="absolute top-4 left-4 sm:top-8 sm:left-8 z-[500] flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md group">
        ← <span className="text-xs sm:text-sm font-bold">Kembali ke Showcase</span>
      </button>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <MobileEmulator>
        <div className={`h-full flex flex-col relative transition-colors duration-300 ${phoneTheme === 'dark' ? 'bg-[#0d0d0e]' : 'bg-[#fafafa]'}`}>
          {!currentUser ? (
            <AbsenOSLoginScreen onLogin={handleLogin} phoneTheme={phoneTheme} setPhoneTheme={setPhoneTheme} />
          ) : (
            <>
              <AbsenOSHeader currentUser={currentUser} onLogout={handleLogout} phoneTheme={phoneTheme} />
              
              <div className="flex-1 overflow-y-auto no-scrollbar pb-20 px-4 pt-4">
                {currentUser.role === "murid" && (
                  <>
                    {activeTab === "home" && <MuridHome currentTime={currentTime} onCheckIn={handleCheckIn} todayLog={todayLog} phoneTheme={phoneTheme} />}
                    {activeTab === "leave" && <MuridLeave onSubmit={handleLeaveSubmit} phoneTheme={phoneTheme} />}
                    {activeTab === "history" && <MuridHistory logs={logs} leaveRequests={leaveRequests} currentUser={currentUser} phoneTheme={phoneTheme} />}
                    {activeTab === "settings" && <AppSettings sound={soundEnabled} setSound={setSoundEnabled} faceScan={faceScanOnly} setFaceScan={setFaceScanOnly} theme={phoneTheme} setTheme={setPhoneTheme} />}
                  </>
                )}
                {currentUser.role === "guru" && (
                  <>
                    {activeTab === "home" && <GuruClassMonitor classStudents={classStudents} phoneTheme={phoneTheme} />}
                    {activeTab === "my_absen" && <MuridHome currentTime={currentTime} onCheckIn={handleCheckIn} todayLog={todayLog} phoneTheme={phoneTheme} />}
                    {activeTab === "history" && <GuruHistory logs={logs} currentUser={currentUser} phoneTheme={phoneTheme} />}
                  </>
                )}
                {currentUser.role === "admin" && (
                  <>
                    {activeTab === "home" && <AdminOverview logs={logs} leaveRequests={leaveRequests} classStudents={classStudents} phoneTheme={phoneTheme} />}
                    {activeTab === "approvals" && <AdminApprovals queue={leaveRequests} onApproval={handleLeaveApproval} phoneTheme={phoneTheme} />}
                    {activeTab === "settings" && <AppSettings sound={soundEnabled} setSound={setSoundEnabled} faceScan={faceScanOnly} setFaceScan={setFaceScanOnly} theme={phoneTheme} setTheme={setPhoneTheme} />}
                  </>
                )}
              </div>

              <AbsenosBottomNav activeTab={activeTab} setActiveTab={setActiveTab} currentUser={currentUser} />
            </>
          )}

          <AbsenOSBiometricOverlay isScanning={isScanning} />
          {showSuccessModal && <AbsenOSSuccessModal successMessage={successMessage} phoneTheme={phoneTheme} />}
        </div>
      </MobileEmulator>
    </div>
  );
}
