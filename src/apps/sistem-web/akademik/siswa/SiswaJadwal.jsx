import TopBar from "../components/TopBar";
import { useAkademik } from "../context/AkademikContext";
import { CalendarDays } from "lucide-react";

const DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

export default function SiswaJadwal() {
  const { guruList, mapelList, jadwal, demoUsers } = useAkademik();
  const user = demoUsers.siswa;
  const userJadwal = jadwal.filter((j) => j.kelasId === user.kelasId);

  return (
    <>
      <TopBar title="Jadwal Pelajaran" subtitle={user.kelas || "Jadwal Pelajaran"} user={user} />
      <div className="p-6 space-y-4">
        {DAYS.map((day) => {
          const dayJadwal = userJadwal.filter((j) => j.hari === day);
          if (dayJadwal.length === 0) return null;
          return (
            <div key={day} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              <div className="px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <h4 className="text-xs font-semibold text-white flex items-center gap-2">
                  <CalendarDays size={14} className="text-violet-400" /> {day}
                </h4>
              </div>
              <div className="divide-y divide-white/[0.03]">
                {dayJadwal.map((j, i) => {
                  const mapel = mapelList.find((m) => m.id === j.mapelId);
                  const guru = guruList.find((g) => g.id === j.guruId);
                  return (
                    <div key={i} className="flex items-center gap-4 px-4 py-3 hover:bg-white/[0.03] transition-colors">
                      <span className="text-xs text-zinc-400 font-medium w-28">{j.jam}</span>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-white">{mapel?.nama}</p>
                        <p className="text-[10px] text-zinc-500">{guru?.nama || "Guru Pengampu"}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
