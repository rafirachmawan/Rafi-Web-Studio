import TopBar from "../components/TopBar";
import { DEMO_USERS, SCHOOL_INFO } from "../data/mockData";
import { Building2, Calendar, Mail, Phone, MapPin } from "lucide-react";

export default function AdminSettings() {
  const info = [
    { icon: Building2, label: "Nama Sekolah", value: SCHOOL_INFO.name },
    { icon: MapPin, label: "Alamat", value: SCHOOL_INFO.address },
    { icon: Phone, label: "Telepon", value: SCHOOL_INFO.phone },
    { icon: Mail, label: "Email", value: SCHOOL_INFO.email },
    { icon: Calendar, label: "Tahun Ajaran", value: SCHOOL_INFO.tahunAjaran },
    { icon: Calendar, label: "Semester", value: SCHOOL_INFO.semester },
  ];

  return (
    <>
      <TopBar title="Pengaturan" subtitle="Informasi sekolah" user={DEMO_USERS.admin} />
      <div className="p-6">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 max-w-2xl">
          <h3 className="text-sm font-semibold text-white mb-5">Profil Sekolah</h3>
          <div className="space-y-4">
            {info.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03]">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <item.icon size={14} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-medium">{item.label}</p>
                  <p className="text-xs text-zinc-200 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[10px] text-zinc-600 italic">* Pengaturan bersifat read-only pada mode demo.</p>
        </div>
      </div>
    </>
  );
}
