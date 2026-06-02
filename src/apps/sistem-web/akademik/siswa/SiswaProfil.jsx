import TopBar from "../components/TopBar";
import { useAkademik } from "../context/AkademikContext";
import { User, Mail, Phone, MapPin, School, Hash } from "lucide-react";

export default function SiswaProfil() {
  const { schoolInfo, kelasList, demoUsers } = useAkademik();
  const user = demoUsers.siswa;
  const kelas = kelasList.find((k) => k.id === user.kelasId);

  const info = [
    { icon: Hash, label: "NIS", value: user.nis || "—" },
    { icon: User, label: "Nama Lengkap", value: user.nama || "—" },
    { icon: School, label: "Kelas", value: `${user.kelas || "Belum ada kelas"} — ${kelas?.jurusan || ""}` },
    { icon: Mail, label: "Email", value: user.email || "—" },
    { icon: Phone, label: "Telepon", value: user.phone || "—" },
    { icon: MapPin, label: "Alamat", value: user.alamat || "—" },
  ];

  return (
    <>
      <TopBar title="Profil Saya" subtitle={user.kelas || "Profil"} user={user} />
      <div className="p-6">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 max-w-2xl">
          {/* AVATAR */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.06]">
            <img src={user.avatar} alt={user.nama} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-violet-500/20" />
            <div>
              <h3 className="text-lg font-bold text-white">{user.nama}</h3>
              <p className="text-xs text-violet-400 font-medium">{user.kelas} — {schoolInfo.name}</p>
            </div>
          </div>

          {/* INFO */}
          <div className="space-y-3">
            {info.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03]">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                  <item.icon size={14} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-medium">{item.label}</p>
                  <p className="text-xs text-zinc-200 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
