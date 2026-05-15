import TopBar from "../components/TopBar";
import StatCard from "../components/StatCard";
import { DEMO_USERS, MAPEL_LIST, JADWAL, KELAS_LIST, getNilaiSiswa, getAbsensiSiswa } from "../data/mockData";
import { ClipboardCheck, BookOpen, CalendarDays, TrendingUp } from "lucide-react";

export default function SiswaDashboard() {
  const user = DEMO_USERS.siswa;
  const nilai = getNilaiSiswa(user.id);
  const absensi = getAbsensiSiswa(user.id);
  const hadir = absensi.filter((a) => a.status === "hadir").length;
  const pctHadir = absensi.length ? Math.round((hadir / absensi.length) * 100) : 100;

  const avgNilai = nilai.length ? Math.round(nilai.reduce((sum, n) => sum + (n.tugas + n.uts + n.uas) / 3, 0) / nilai.length) : 0;

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const today = days[new Date().getDay()];
  const todayJadwal = JADWAL.filter((j) => j.kelasId === user.kelasId && j.hari === today);

  return (
    <>
      <TopBar title="Dashboard" subtitle={`Selamat datang, ${user.nama}`} user={user} />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard icon={TrendingUp} label="Rata-rata Nilai" value={avgNilai} color="violet" />
          <StatCard icon={ClipboardCheck} label="% Kehadiran" value={`${pctHadir}%`} color="emerald" />
          <StatCard icon={BookOpen} label="Mata Pelajaran" value={nilai.length} color="amber" />
          <StatCard icon={CalendarDays} label="Jadwal Hari Ini" value={todayJadwal.length} color="indigo" />
        </div>

        {/* TODAY'S SCHEDULE */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
          <h3 className="text-sm font-semibold text-white mb-4">Jadwal Hari Ini — {today}</h3>
          {todayJadwal.length === 0 ? (
            <p className="text-xs text-zinc-500 py-8 text-center">Tidak ada jadwal hari ini 🎉</p>
          ) : (
            <div className="space-y-2">
              {todayJadwal.map((j, i) => {
                const mapel = MAPEL_LIST.find((m) => m.id === j.mapelId);
                return (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                      <BookOpen size={16} className="text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-white">{mapel?.nama}</p>
                      <p className="text-[10px] text-zinc-500">{user.kelas}</p>
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
