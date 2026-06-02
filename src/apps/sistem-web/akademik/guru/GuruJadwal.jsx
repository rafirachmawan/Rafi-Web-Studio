import TopBar from "../components/TopBar";
import { useAkademik } from "../context/AkademikContext";
import { CalendarDays } from "lucide-react";

const DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

export default function GuruJadwal() {
  const { kelasList, mapelList, getJadwalByGuru, demoUsers } = useAkademik();
  const user = demoUsers.guru;
  const jadwal = getJadwalByGuru(user.id);

  return (
    <>
      <TopBar title="Jadwal Mengajar" subtitle={user.mapel || "Mata Pelajaran"} user={user} />
      <div className="p-6">
        <div className="space-y-4">
          {DAYS.map((day) => {
            const dayJadwal = jadwal.filter((j) => j.hari === day);
            if (dayJadwal.length === 0) return null;
            return (
              <div key={day} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
                <div className="px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                  <h4 className="text-xs font-semibold text-white flex items-center gap-2">
                    <CalendarDays size={14} className="text-emerald-400" />
                    {day}
                  </h4>
                </div>
                <div className="divide-y divide-white/[0.03]">
                  {dayJadwal.map((j, i) => {
                    const kelas = kelasList.find((k) => k.id === j.kelasId);
                    const mapel = mapelList.find((m) => m.id === j.mapelId);
                    return (
                      <div key={i} className="flex items-center gap-4 px-4 py-3 hover:bg-white/[0.03] transition-colors">
                        <span className="text-xs text-zinc-400 font-medium w-28">{j.jam}</span>
                        <div>
                          <p className="text-xs font-semibold text-white">{mapel?.nama}</p>
                          <p className="text-[10px] text-zinc-500">{kelas?.nama || "Tidak ada kelas"}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
