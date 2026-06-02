import { useState } from "react";
import TopBar from "../components/TopBar";
import MapPreview from "../components/MapPreview";
import useGeolocation from "../hooks/useGeolocation";
import { useAkademik } from "../context/AkademikContext";
import { MapPin, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";

const STATUS_OPTIONS = [
  { value: "hadir", label: "Hadir", color: "bg-emerald-500", ring: "ring-emerald-500/30" },
  { value: "izin", label: "Izin", color: "bg-amber-500", ring: "ring-amber-500/30" },
  { value: "sakit", label: "Sakit", color: "bg-violet-500", ring: "ring-violet-500/30" },
  { value: "alpha", label: "Alpha", color: "bg-rose-500", ring: "ring-rose-500/30" },
];

export default function GuruAbsensi() {
  const { schoolInfo, kelasList, getSiswaByKelas, bulkSaveAbsensi, demoUsers } = useAkademik();
  const user = demoUsers.guru;
  const geo = useGeolocation();
  const [selectedKelas, setSelectedKelas] = useState(null);
  const [absensiStarted, setAbsensiStarted] = useState(false);
  const [absensiData, setAbsensiData] = useState({});
  const [saved, setSaved] = useState(false);

  const siswaList = selectedKelas ? getSiswaByKelas(selectedKelas) : [];

  const handleStartAbsensi = () => {
    geo.requestLocation();
    setAbsensiStarted(true);
    setSaved(false);
    const initial = {};
    siswaList.forEach((s) => { initial[s.id] = "hadir"; });
    setAbsensiData(initial);
  };

  const handleSave = () => {
    const records = Object.entries(absensiData).map(([siswaId, status]) => ({
      siswaId,
      status,
      tanggal: new Date().toISOString().split("T")[0],
      waktu: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      lat: geo.location?.lat || null,
      lng: geo.location?.lng || null,
      guruId: user.id,
    }));
    bulkSaveAbsensi(records);
    setSaved(true);
  };

  const activeKelas = kelasList.find((k) => k.id === selectedKelas);

  return (
    <>
      <TopBar title="Absensi Kelas" subtitle="Pilih kelas lalu mulai absensi" user={user} />
      <div className="p-6 space-y-4">
        {/* KELAS SELECTOR */}
        <div className="flex items-center gap-2 flex-wrap">
          {kelasList.map((k) => (
            <button
              key={k.id}
              onClick={() => { setSelectedKelas(k.id); setAbsensiStarted(false); setSaved(false); }}
              className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all ${
                selectedKelas === k.id
                  ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                  : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05]"
              }`}
            >
              {k.nama}
            </button>
          ))}
        </div>

        {selectedKelas && !absensiStarted && (
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
            <MapPin size={32} className="text-emerald-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-2">Mulai Absensi</h3>
            <p className="text-xs text-zinc-500 mb-5 max-w-sm mx-auto">
              Sistem akan mengambil lokasi GPS Anda untuk verifikasi kehadiran. Pastikan GPS aktif.
            </p>
            <button
              onClick={handleStartAbsensi}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              📍 Mulai Absensi + Geolocation
            </button>
          </div>
        )}

        {absensiStarted && (
          <>
            {/* GEOLOCATION STATUS */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="flex items-center gap-3 mb-3">
                {geo.loading ? (
                  <>
                    <Loader2 size={16} className="text-amber-400 animate-spin" />
                    <span className="text-xs text-amber-400">Mengambil lokasi...</span>
                  </>
                ) : geo.error ? (
                  <>
                    <AlertTriangle size={16} className="text-rose-400" />
                    <span className="text-xs text-rose-400">{geo.error}</span>
                  </>
                ) : geo.location ? (
                  <>
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span className="text-xs text-emerald-400">
                      Lokasi terdeteksi — {geo.distance}m dari sekolah {geo.isInRadius ? "✅ Dalam radius" : "⚠️ Di luar radius"}
                    </span>
                  </>
                ) : null}
              </div>
              {geo.location && (
                <MapPreview
                  lat={geo.location.lat}
                  lng={geo.location.lng}
                  label={`Lokasi Anda (${geo.distance}m dari ${schoolInfo.name})`}
                  height={180}
                />
              )}
            </div>

            {/* ABSENSI TABLE */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              <div className="px-4 py-3 border-b border-white/[0.06]">
                <h4 className="text-xs font-semibold text-white">Daftar Siswa — {activeKelas?.nama}</h4>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-4 py-2 text-zinc-500 font-semibold w-8">#</th>
                    <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Siswa</th>
                    <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {siswaList.map((s, i) => (
                    <tr key={s.id} className="border-b border-white/[0.03]">
                      <td className="px-4 py-2.5 text-zinc-500">{i + 1}</td>
                      <td className="px-4 py-2.5 text-zinc-300">
                        <div className="flex items-center gap-2">
                          <img src={s.avatar} alt="" className="w-7 h-7 rounded-lg object-cover" />
                          <div>
                            <p className="font-medium">{s.nama}</p>
                            <p className="text-[10px] text-zinc-600">{s.nis}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex gap-1.5">
                          {STATUS_OPTIONS.map((opt) => (
                            <button
                              key={opt.value}
                              onClick={() => setAbsensiData((prev) => ({ ...prev, [s.id]: opt.value }))}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-all ${
                                absensiData[s.id] === opt.value
                                  ? `${opt.color} text-white ring-2 ${opt.ring}`
                                  : "bg-white/[0.04] text-zinc-500 hover:bg-white/[0.08]"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SAVE */}
            <div className="flex justify-end">
              {saved ? (
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
                  <CheckCircle2 size={16} /> Absensi berhasil disimpan!
                </div>
              ) : (
                <button
                  onClick={handleSave}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  💾 Simpan Absensi
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
