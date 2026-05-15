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
  admin: { accent: "indigo", text: "text-indigo-400", bg: "bg-indigo-500/10" },
  guru: { accent: "cyan", text: "text-cyan-400", bg: "bg-cyan-500/10" },
  siswa: { accent: "fuchsia", text: "text-fuchsia-400", bg: "bg-fuchsia-500/10" },
};

const MENUS = {
  admin: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/akademik/admin" },
    { label: "Data Guru", icon: Users, path: "/akademik/admin/guru" },
    { label: "Data Siswa", icon: GraduationCap, path: "/akademik/admin/siswa" },
    { label: "Data Kelas", icon: School, path: "/akademik/admin/kelas" },
    { label: "Data Absensi", icon: ClipboardCheck, path: "/akademik/admin/absensi" },
    { label: "Settings", icon: Settings, path: "/akademik/admin/settings" },
  ],
  guru: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/akademik/guru" },
    { label: "Absensi Siswa", icon: ClipboardCheck, path: "/akademik/guru/absensi" },
    { label: "Input Nilai", icon: FileBarChart, path: "/akademik/guru/nilai" },
    { label: "Jadwal Mengajar", icon: CalendarDays, path: "/akademik/guru/jadwal" },
    { label: "Rekap Absensi", icon: BookOpen, path: "/akademik/guru/rekap" },
  ],
  siswa: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/akademik/siswa" },
    { label: "Absensi Saya", icon: ClipboardCheck, path: "/akademik/siswa/absensi" },
    { label: "Nilai Saya", icon: FileBarChart, path: "/akademik/siswa/nilai" },
    { label: "Jadwal Pelajaran", icon: CalendarDays, path: "/akademik/siswa/jadwal" },
    { label: "Profil Saya", icon: UserCircle, path: "/akademik/siswa/profil" },
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
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-zinc-900 border-b border-white/5 z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg bg-${colors.accent}-500 flex items-center justify-center`}>
            <GraduationCap size={20} className="text-white" />
          </div>
          <span className="font-bold text-white">Akademik</span>
        </div>
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg bg-white/5 text-zinc-400"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen z-40 flex flex-col transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          bg-zinc-900 border-r border-white/5`}
      >
        {/* LOGO */}
        <div className="hidden lg:flex items-center gap-3 px-6 h-20 border-b border-white/5 shrink-0">
          <div className={`p-2 rounded-xl bg-${colors.accent}-500 flex items-center justify-center shrink-0`}>
            <GraduationCap size={24} className="text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <h1 className="font-bold text-white truncate">Akademik</h1>
              <p className="text-[10px] text-zinc-500 font-medium">Digital School OS</p>
            </div>
          )}
        </div>

        <div className="lg:hidden h-16" />

        {/* MENUS */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {menus.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${isActive
                    ? `${colors.bg} ${colors.text}`
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                  }
                  ${collapsed ? "justify-center px-0" : ""}
                `}
              >
                <Icon size={20} className={isActive ? colors.text : "text-zinc-500"} />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* USER PROFILE */}
        <div className="p-4 border-t border-white/5">
          {!collapsed && (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 mb-3">
              <img src={user?.avatar} alt="" className="w-10 h-10 rounded-lg object-cover" />
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">{user?.nama}</p>
                <p className={`text-[10px] font-bold ${colors.text} uppercase`}>{user?.role}</p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <button onClick={() => navigate("/akademik")} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-zinc-500 hover:text-white hover:bg-white/5 transition-all">
              <LogOut size={18} />
              {!collapsed && <span>Sign Out</span>}
            </button>
            {!mobileOpen && (
              <button onClick={() => setCollapsed(!collapsed)} className="hidden lg:flex p-3 rounded-xl bg-white/5 text-zinc-500 hover:text-white transition-all">
                {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
