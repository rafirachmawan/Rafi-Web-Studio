import TopBar from "../components/TopBar";
import StatCard from "../components/StatCard";
import { DEMO_USERS, KELAS_LIST, JADWAL, MAPEL_LIST, getJadwalByGuru } from "../data/mockData";
import { ClipboardCheck, CalendarDays, Users, BookOpen } from "lucide-react";

export default function GuruDashboard() {
  const user = DEMO_USERS.guru;
  const guruJadwal = getJadwalByGuru(user.id);
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const today = days[new Date().getDay()];
  const todayJadwal = guruJadwal.filter((j) => j.hari === today);
  const kelasIds = [...new Set(guruJadwal.map((j) => j.kelasId))];

  return (
    <>
      <TopBar title="Dashboard" subtitle={`Selamat datang, ${user.nama}`} user={user} />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard icon={Users} label="Kelas Diajar" value={kelasIds.length} color="emerald" />
          <StatCard icon={CalendarDays} label="Jadwal Hari Ini" value={todayJadwal.length} color="amber" />
          <StatCard icon={BookOpen} label="Mata Pelajaran" value={user.mapel} color="violet" />
          <StatCard icon={ClipboardCheck} label="Total Jadwal" value={guruJadwal.length} color="indigo" />
        </div>

        {/* TODAY'S SCHEDULE */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
          <h3 className="text-sm font-semibold text-white mb-4">Jadwal Hari Ini — {today}</h3>
          {todayJadwal.length === 0 ? (
            <p className="text-xs text-zinc-500 py-8 text-center">Tidak ada jadwal hari ini.</p>
          ) : (
            <div className="space-y-2">
              {todayJadwal.map((j, i) => {
                const kelas = KELAS_LIST.find((k) => k.id === j.kelasId);
                const mapel = MAPEL_LIST.find((m) => m.id === j.mapelId);
                return (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <CalendarDays size={16} className="text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-white">{mapel?.nama}</p>
                      <p className="text-[10px] text-zinc-500">{kelas?.nama} • {kelas?.jurusan}</p>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-medium">{j.jam}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
