import { useState } from "react";
import TopBar from "../components/TopBar";
import { DonutChart } from "../components/MiniChart";
import { useAkademik } from "../context/AkademikContext";

export default function AdminAbsensi() {
  const { kelasList, siswaList, absensiRecords, getSiswaByKelas, demoUsers } = useAkademik();
  const [selectedKelas, setSelectedKelas] = useState(kelasList[0]?.id || "");
  
  const siswaKelas = getSiswaByKelas(selectedKelas);
  const siswaIds = siswaKelas.map((s) => s.id);
  const kelasRecords = absensiRecords.filter((a) => siswaIds.includes(a.siswaId));
  const dates = [...new Set(kelasRecords.map((r) => r.tanggal))].sort().reverse();

  const hadir = kelasRecords.filter((r) => r.status === "hadir").length;
  const izin = kelasRecords.filter((r) => r.status === "izin").length;
  const sakit = kelasRecords.filter((r) => r.status === "sakit").length;
  const alpha = kelasRecords.filter((r) => r.status === "alpha").length;
  const total = kelasRecords.length || 1;

  const sc = {
    hadir: "bg-emerald-500/10 text-emerald-400",
    izin: "bg-amber-500/10 text-amber-400",
    sakit: "bg-violet-500/10 text-violet-400",
    alpha: "bg-rose-500/10 text-rose-400",
  };

  return (
    <>
      <TopBar title="Rekap Absensi" subtitle="Semua kelas" user={demoUsers.admin} />
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-2 flex-wrap">
          {kelasList.map((k) => (
            <button
              key={k.id}
              onClick={() => setSelectedKelas(k.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                selectedKelas === k.id
                  ? "bg-indigo-500/15 border-indigo-500/30 text-indigo-400"
                  : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05]"
              }`}
            >
              {k.nama}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <DonutChart value={hadir} total={total} color="emerald" label="Hadir" size={70} />
          <DonutChart value={izin} total={total} color="amber" label="Izin" size={70} />
          <DonutChart value={sakit} total={total} color="violet" label="Sakit" size={70} />
          <DonutChart value={alpha} total={total} color="rose" label="Alpha" size={70} />
        </div>

        {dates.length === 0 ? (
          <div className="text-center py-10 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <p className="text-xs text-zinc-500 font-semibold">Tidak ada riwayat absensi untuk kelas ini.</p>
          </div>
        ) : (
          dates.slice(0, 5).map((date) => {
            const dayRecords = kelasRecords.filter((r) => r.tanggal === date);
            return (
              <div key={date} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
                <div className="px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                  <h4 className="text-xs font-semibold text-white">
                    {new Date(date).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h4>
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Siswa</th>
                      <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Status</th>
                      <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Waktu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dayRecords.map((r, i) => {
                      const siswa = siswaList.find((s) => s.id === r.siswaId);
                      return (
                        <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.03]">
                          <td className="px-4 py-2 text-zinc-300">
                            <div className="flex items-center gap-2">
                              <img src={siswa?.avatar} alt="" className="w-6 h-6 rounded-md object-cover" />
                              {siswa?.nama}
                            </div>
                          </td>
                          <td className="px-4 py-2">
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold capitalize ${sc[r.status]}`}>
                              {r.status}
                            </span>
                          </td>
                          <td className="px-4 py-2 text-zinc-500">{r.waktu}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
