import { Home, FileText, History, Settings } from "lucide-react";

export function AbsenosBottomNav({ activeTab, setActiveTab, currentUser }) {
  // Murid Navigation
  if (currentUser.role === "murid") {
    return (
      <div className="absolute bottom-0 left-0 w-full h-14 border-t flex items-center justify-around px-4 z-50">
        {[
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
      </div>
    );
  }

  // Guru Navigation
  if (currentUser.role === "guru") {
    return (
      <div className="absolute bottom-0 left-0 w-full h-14 border-t flex items-center justify-around px-4 z-50">
        {[
          { id: "home", icon: Home, label: "Monitor" },
          { id: "my_absen", icon: FileText, label: "Absen" },
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
      </div>
    );
  }

  // Admin Navigation
  if (currentUser.role === "admin") {
    return (
      <div className="absolute bottom-0 left-0 w-full h-14 border-t flex items-center justify-around px-4 z-50">
        {[
          { id: "home", icon: Home, label: "Overview" },
          { id: "approvals", icon: FileText, label: "Persetujuan" },
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
    );
  }

  return null;
}
