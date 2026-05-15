import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  School,
  ClipboardCheck,
  Settings,
  BookOpen,
  CalendarDays,
  FileBarChart,
  UserCircle,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const ROLE_COLORS = {
  admin: { 
    accent: "from-cyan-500 to-blue-600", 
    text: "text-cyan-400", 
    bg: "bg-cyan-500/10", 
    activeBg: "bg-cyan-500/15", 
    hoverBg: "hover:bg-cyan-500/10" 
  },
  guru: { 
    accent: "from-emerald-400 to-teal-500", 
    text: "text-emerald-400", 
    bg: "bg-emerald-500/10", 
    activeBg: "bg-emerald-500/15", 
    hoverBg: "hover:bg-emerald-500/10" 
  },
  siswa: { 
    accent: "from-fuchsia-500 to-purple-600", 
    text: "text-fuchsia-400", 
    bg: "bg-fuchsia-500/10", 
    activeBg: "bg-fuchsia-500/15", 
    hoverBg: "hover:bg-fuchsia-500/10" 
  },
};

const MENUS = {
  admin: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/akademik/admin" },
    { label: "Data Guru", icon: Users, path: "/akademik/admin/guru" },
    { label: "Data Siswa", icon: GraduationCap, path: "/akademik/admin/siswa" },
    { label: "Manajemen Kelas", icon: School, path: "/akademik/admin/kelas" },
    { label: "Rekap Absensi", icon: ClipboardCheck, path: "/akademik/admin/absensi" },
    { label: "Pengaturan", icon: Settings, path: "/akademik/admin/settings" },
  ],
  guru: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/akademik/guru" },
    { label: "Absensi Kelas", icon: ClipboardCheck, path: "/akademik/guru/absensi" },
    { label: "Input Nilai", icon: FileBarChart, path: "/akademik/guru/nilai" },
    { label: "Jadwal Mengajar", icon: CalendarDays, path: "/akademik/guru/jadwal" },
    { label: "Rekap Absensi", icon: BookOpen, path: "/akademik/guru/rekap" },
  ],
  siswa: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/akademik/siswa" },
    { label: "Absensi Saya", icon: ClipboardCheck, path: "/akademik/siswa/absensi" },
    { label: "Nilai Saya", icon: FileBarChart, path: "/akademik/siswa/nilai" },
    { label: "Jadwal", icon: CalendarDays, path: "/akademik/siswa/jadwal" },
    { label: "Profil", icon: UserCircle, path: "/akademik/siswa/profil" },
  ],
};

export default function Sidebar({ role, user }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menus = MENUS[role] || [];
  const colors = ROLE_COLORS[role] || ROLE_COLORS.admin;

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0c0c14]/80 backdrop-blur-xl border-b border-white/[0.06] z-[50] flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
           <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.accent} flex items-center justify-center`}>
            <GraduationCap size={16} className="text-white" />
          </div>
          <span className="text-sm font-bold text-white uppercase tracking-tight">Akademik</span>
        </div>
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl bg-white/5 text-zinc-400"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[45]" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen z-[48] flex flex-col transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${collapsed ? "w-[72px]" : "w-[260px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          bg-[#0c0c14]/98 backdrop-blur-3xl border-r border-white/[0.06] shadow-2xl lg:shadow-none`}
      >
        <div className="hidden lg:flex items-center gap-3 px-4 h-20 border-b border-white/[0.06] shrink-0">
          <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${colors.accent} flex items-center justify-center shrink-0 shadow-lg`}>
            <GraduationCap size={20} className="text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <h1 className="text-sm font-black text-white tracking-tight truncate uppercase">SMK NUSANTARA</h1>
              <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Digital Campus</p>
            </div>
          )}
        </div>

        <div className="lg:hidden h-16" />

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1.5">
          {menus.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-sm font-semibold transition-all duration-300
                  ${isActive
                    ? `${colors.activeBg} ${colors.text} shadow-sm translate-x-1`
                    : `text-zinc-500 ${colors.hoverBg} hover:text-zinc-200 hover:translate-x-1`
                  }
                  ${collapsed ? "justify-center" : ""}
                `}
              >
                <Icon size={19} className={isActive ? colors.text : "text-inherit"} />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/[0.06]">
          {!collapsed && (
            <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-3">
              <img src={user?.avatar} alt="" className="w-10 h-10 rounded-xl object-cover ring-2 ring-white/10" />
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-white truncate">{user?.nama}</p>
                <p className={`text-[10px] font-black uppercase tracking-tighter ${colors.text}`}>{user?.role}</p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <button onClick={() => navigate("/akademik")} className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all">
              <LogOut size={16} />
              {!collapsed && <span>Keluar</span>}
            </button>
            {!mobileOpen && (
              <button onClick={() => setCollapsed(!collapsed)} className="hidden lg:flex p-2.5 rounded-xl bg-white/5 text-zinc-500 hover:text-white transition-all">
                {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
