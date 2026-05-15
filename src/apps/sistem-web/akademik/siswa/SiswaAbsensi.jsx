import { useState } from "react";
import TopBar from "../components/TopBar";
import MapPreview from "../components/MapPreview";
import useGeolocation from "../hooks/useGeolocation";
import { DEMO_USERS, SCHOOL_INFO, getAbsensiSiswa } from "../data/mockData";
import { MapPin, CheckCircle2, Loader2, AlertTriangle, Clock } from "lucide-react";

export default function SiswaAbsensi() {
  const user = DEMO_USERS.siswa;
  const geo = useGeolocation();
  const [absenDone, setAbsenDone] = useState(false);
  const [absenTime, setAbsenTime] = useState(null);
  const pastRecords = getAbsensiSiswa(user.id).slice(-10).reverse();

  const sc = { hadir: "bg-emerald-500/10 text-emerald-400", izin: "bg-amber-500/10 text-amber-400", sakit: "bg-violet-500/10 text-violet-400", alpha: "bg-rose-500/10 text-rose-400" };

  const handleAbsen = () => {
    geo.requestLocation();
  };

  const confirmAbsen = () => {
    const now = new Date();
    const record = {
      siswaId: user.id, status: "hadir",
      tanggal: now.toISOString().split("T")[0],
      waktu: now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      lat: geo.location?.lat, lng: geo.location?.lng,
    };
    const existing = JSON.parse(localStorage.getItem("akademik_absensi_siswa") || "[]");
    localStorage.setItem("akademik_absensi_siswa", JSON.stringify([...existing, record]));
    setAbsenDone(true);
    setAbsenTime(record.waktu);
  };

  return (
    <>
      <TopBar title="Absensi Saya" subtitle="Absen kehadiran harian" user={user} />
      <div className="p-6 space-y-4">
        {/* ABSEN CARD */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          {!geo.location && !geo.loading && !absenDone && (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                <MapPin size={28} className="text-violet-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Absen Sekarang</h3>
              <p className="text-xs text-zinc-500 mb-5 max-w-sm mx-auto">
                Klik tombol di bawah untuk absen. Sistem akan mendeteksi lokasi Anda dan memverifikasi apakah Anda berada dalam area {SCHOOL_INFO.name}.
              </p>
              <button onClick={handleAbsen}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                📍 Absen dengan Geolocation
              </button>
            </div>
          )}

          {geo.loading && (
            <div className="text-center py-8">
              <Loader2 size={28} className="text-violet-400 animate-spin mx-auto mb-3" />
              <p className="text-xs text-zinc-400">Mengambil lokasi GPS Anda...</p>
            </div>
          )}

          {geo.error && (
            <div className="text-center py-6">
              <AlertTriangle size={28} className="text-rose-400 mx-auto mb-3" />
              <p className="text-xs text-rose-400 mb-4">{geo.error}</p>
              <button onClick={handleAbsen}
                className="px-5 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-xs text-white font-medium hover:bg-white/[0.08] transition-colors">
                Coba Lagi
              </button>
            </div>
          )}

          {geo.location && !absenDone && (
            <div className="space-y-4">
              <MapPreview lat={geo.location.lat} lng={geo.location.lng} label="Lokasi Anda saat ini" height={200} />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] text-center">
                  <p className="text-[10px] text-zinc-500 mb-1">Latitude</p>
                  <p className="text-xs font-semibold text-white">{geo.location.lat.toFixed(6)}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] text-center">
                  <p className="text-[10px] text-zinc-500 mb-1">Longitude</p>
                  <p className="text-xs font-semibold text-white">{geo.location.lng.toFixed(6)}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] text-center">
                  <p className="text-[10px] text-zinc-500 mb-1">Jarak</p>
                  <p className="text-xs font-semibold text-white">{geo.distance}m</p>
                </div>
                <div className={`p-3 rounded-xl text-center ${geo.isInRadius ? "bg-emerald-500/10" : "bg-amber-500/10"}`}>
                  <p className="text-[10px] text-zinc-500 mb-1">Status</p>
                  <p className={`text-xs font-semibold ${geo.isInRadius ? "text-emerald-400" : "text-amber-400"}`}>
                    {geo.isInRadius ? "Dalam Radius ✅" : "Di Luar Radius ⚠️"}
                  </p>
                </div>
              </div>
              <button onClick={confirmAbsen}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                ✅ Konfirmasi Absensi
              </button>
            </div>
          )}

          {absenDone && (
            <div className="text-center py-6">
              <CheckCircle2 size={40} className="text-emerald-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">Absensi Berhasil!</h3>
              <p className="text-xs text-zinc-500">Tercatat pada pukul {absenTime}</p>
            </div>
          )}
        </div>

        {/* HISTORY */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
          <div className="px-4 py-3 border-b border-white/[0.06]">
            <h4 className="text-xs font-semibold text-white">Riwayat Absensi</h4>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-white/[0.06]">
              <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Tanggal</th>
              <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Status</th>
              <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Waktu</th>
            </tr></thead>
            <tbody>
              {pastRecords.map((r, i) => (
                <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.03]">
                  <td className="px-4 py-2.5 text-zinc-300">{new Date(r.tanggal).toLocaleDateString("id-ID", { weekday: "short", day: "numeric", month: "short" })}</td>
                  <td className="px-4 py-2.5"><span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold capitalize ${sc[r.status]}`}>{r.status}</span></td>
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
