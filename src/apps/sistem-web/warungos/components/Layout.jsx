import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Bell, Search, UserCircle, Settings, ChevronRight, Menu } from "lucide-react";

function Header({ setMobileOpen }) {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("warung_user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const getPageTitle = () => {
    const path = location.pathname.split("/").pop();
    switch (path) {
      case "dashboard": return "Overview";
      case "products": return "Manajemen Produk";
      case "pos": return "Point of Sale";
      case "debt": return "Hutang & Piutang";
      case "inventory": return "Stok & Inventory";
      case "reports": return "Laporan Keuangan";
      case "suppliers": return "Data Supplier";
      case "settings": return "Pengaturan Sistem";
      default: return "WarungOS";
    }
  };

  return (
    <header className="h-20 flex items-center justify-between px-4 md:px-8 border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400"
        >
          <Menu size={20} />
        </button>
        <div className="flex flex-col">
          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 font-medium uppercase tracking-widest">
            <span>WarungOS</span>
            <ChevronRight size={12} />
            <span className="text-amber-500/80">{getPageTitle()}</span>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">{getPageTitle()}</h2>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-[11px] font-bold text-emerald-400">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          SYSTEM ONLINE
        </div>
        
        <div className="flex items-center gap-1 md:gap-3 pr-2 md:pr-4 border-r border-white/10">
          <button className="p-2 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border-2 border-[#0a0a0b]" />
          </button>
          <button className="hidden sm:block p-2 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white transition-all">
            <Settings size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden xl:block">
            <p className="text-sm font-bold text-white leading-none mb-1">{user?.name || "Guest"}</p>
            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">{user?.role || "User"}</p>
          </div>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
             {user ? <img src={user.avatar} alt="user" /> : <UserCircle className="text-zinc-500" size={24} />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white flex overflow-x-hidden">
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
      />
      
      <main className={`flex-1 transition-all duration-300 ${collapsed ? "lg:ml-[80px]" : "lg:ml-[280px]"} ml-0 w-full`}>
        <Header setMobileOpen={setMobileOpen} />
        <div className="p-4 md:p-8 max-w-[1600px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
