import { useState } from "react";
import TopBar from "../components/TopBar";
import { useAkademik } from "../context/AkademikContext";
import { MapPin, CheckCircle2, Loader2 } from "lucide-react";

export default function SiswaAbsensi() {
  const { schoolInfo, getAbsensiSiswa, saveAbsensiRecord, demoUsers } = useAkademik();
  const user = demoUsers.siswa;
  
  const [absenDone, setAbsenDone] = useState(false);
  const [absenTime, setAbsenTime] = useState(null);
  const [loading, setLoading] = useState(false);

  const pastRecords = getAbsensiSiswa(user.id).slice(-10).reverse();

  // Check if already checked in today
  const todayStr = new Date().toISOString().split("T")[0];
  const isAlreadyAbsenToday = getAbsensiSiswa(user.id).some((a) => a.tanggal === todayStr);

  const sc = {
    hadir: "bg-emerald-500/10 text-emerald-400",
    izin: "bg-amber-500/10 text-amber-400",
    sakit: "bg-violet-500/10 text-violet-400",
    alpha: "bg-rose-500/10 text-rose-400",
  };

  const handleAbsen = () => {
    setLoading(true);
    
    // Simulate verification for 1 second for a premium system feel
    setTimeout(() => {
      const now = new Date();
      const record = {
        siswaId: user.id,
        status: "hadir",
        tanggal: now.toISOString().split("T")[0],
        waktu: now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
        lat: -6.2088,
        lng: 106.8456,
      };
      saveAbsensiRecord(record);
      setLoading(false);
      setAbsenDone(true);
      setAbsenTime(record.waktu);
    }, 1000);
  };

  return (
    <>
      <TopBar title="Absensi Saya" subtitle="Absen kehadiran harian" user={user} />
      <div className="p-6 space-y-4">
        {/* ABSEN CARD */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          {!loading && !absenDone && !isAlreadyAbsenToday && (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                <MapPin size={28} className="text-violet-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Absen Sekarang</h3>
              <p className="text-xs text-zinc-500 mb-5 max-w-sm mx-auto">
                Klik tombol di bawah untuk melakukan absensi kehadiran. Sistem akan memverifikasi lokasi kehadiran Anda secara otomatis di area {schoolInfo.name}.
              </p>
              <button
                onClick={handleAbsen}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-violet-500/20"
              >
                📍 Absen Sekarang (Verifikasi Lokasi)
              </button>
            </div>
          )}

          {loading && (
            <div className="text-center py-8">
              <Loader2 size={28} className="text-violet-400 animate-spin mx-auto mb-3" />
              <p className="text-xs text-zinc-400">Memverifikasi geolocation radius...</p>
            </div>
          )}

          {(absenDone || isAlreadyAbsenToday) && (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Absensi Hari Ini Berhasil!</h3>
              <p className="text-xs text-zinc-500">
                Tercatat pada pukul {absenTime || getAbsensiSiswa(user.id).find((a) => a.tanggal === todayStr)?.waktu}
              </p>
            </div>
          )}
        </div>

        {/* HISTORY */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
          <div className="px-4 py-3 border-b border-white/[0.06]">
            <h4 className="text-xs font-semibold text-white">Riwayat Absensi</h4>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Tanggal</th>
                <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Status</th>
                <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Waktu</th>
              </tr>
            </thead>
            <tbody>
              {pastRecords.map((r, i) => (
                <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.03]">
                  <td className="px-4 py-2.5 text-zinc-300">
                    {new Date(r.tanggal).toLocaleDateString("id-ID", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold capitalize ${sc[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-zinc-500">{r.waktu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
