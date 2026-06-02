import { useState } from "react";
import TopBar from "../components/TopBar";
import { useAkademik } from "../context/AkademikContext";
import { Users, GraduationCap, Plus, Edit2, Trash2, X } from "lucide-react";

export default function AdminKelas() {
  const {
    kelasList,
    guruList,
    addKelas,
    updateKelas,
    deleteKelas,
    getSiswaByKelas,
    demoUsers,
  } = useAkademik();

  const [isOpen, setIsOpen] = useState(false);
  const [editingKelas, setEditingKelas] = useState(null);

  // Form State
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("Rekayasa Perangkat Lunak");
  const [waliKelas, setWaliKelas] = useState("");

  const openAddModal = () => {
    setEditingKelas(null);
    setNama("");
    setJurusan("Rekayasa Perangkat Lunak");
    setWaliKelas(guruList[0]?.id || "");
    setIsOpen(true);
  };

  const openEditModal = (kelas) => {
    setEditingKelas(kelas);
    setNama(kelas.nama);
    setJurusan(kelas.jurusan);
    setWaliKelas(kelas.waliKelas || "");
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nama,
      jurusan,
      waliKelas: waliKelas || null,
    };

    if (editingKelas) {
      updateKelas(editingKelas.id, data);
    } else {
      addKelas(data);
    }
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus kelas ini? Ini akan mereset kelas untuk siswa di dalamnya.")) {
      deleteKelas(id);
    }
  };

  return (
    <>
      <TopBar
        title="Manajemen Kelas"
        subtitle={`${kelasList.length} kelas aktif`}
        user={demoUsers.admin}
        action={
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <Plus size={14} />
            Tambah Kelas
          </button>
        }
      />

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {kelasList.map((kelas) => {
            const wali = guruList.find((g) => g.id === kelas.waliKelas);
            const siswaCount = getSiswaByKelas(kelas.id).length;
            const lakilaki = getSiswaByKelas(kelas.id).filter((s) => s.gender === "L").length;
            const perempuan = siswaCount - lakilaki;

            return (
              <div
                key={kelas.id}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all group flex flex-col justify-between min-h-[220px] relative"
              >
                <div>
                  {/* HEADER */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{kelas.nama}</h3>
                      <p className="text-xs text-zinc-500 mt-0.5">{kelas.jurusan}</p>
                    </div>
                    
                    {/* Actions Menu */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => openEditModal(kelas)}
                        className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors"
                        title="Edit Kelas"
                      >
                        <Edit2 size={12} />
                      </button>
                      <button
                        onClick={() => handleDelete(kelas.id)}
                        className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                        title="Hapus Kelas"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>

                  {/* WALI KELAS */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] mb-4">
                    {wali ? (
                      <>
                        <img src={wali.avatar} alt={wali.nama} className="w-8 h-8 rounded-lg object-cover" />
                        <div>
                          <p className="text-xs font-semibold text-white">{wali.nama}</p>
                          <p className="text-[10px] text-zinc-500">Wali Kelas</p>
                        </div>
                      </>
                    ) : (
                      <div>
                        <p className="text-xs font-semibold text-zinc-500">Belum Ditentukan</p>
                        <p className="text-[10px] text-zinc-600">Wali Kelas</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-2 rounded-xl bg-white/[0.03]">
                    <p className="text-lg font-bold text-white">{siswaCount}</p>
                    <p className="text-[10px] text-zinc-500">Total</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-sky-500/5">
                    <p className="text-lg font-bold text-sky-400">{lakilaki}</p>
                    <p className="text-[10px] text-zinc-500">Laki-laki</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-pink-500/5">
                    <p className="text-lg font-bold text-pink-400">{perempuan}</p>
                    <p className="text-[10px] text-zinc-500">Perempuan</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">
                {editingKelas ? "Edit Data Kelas" : "Tambah Kelas Baru"}
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Nama Kelas</label>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  placeholder="Contoh: XI-RPL-3"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Jurusan</label>
                <input
                  type="text"
                  required
                  value={jurusan}
                  onChange={(e) => setJurusan(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  placeholder="Contoh: Rekayasa Perangkat Lunak"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Wali Kelas</label>
                <select
                  value={waliKelas}
                  onChange={(e) => setWaliKelas(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Pilih Wali Kelas (Opsional)</option>
                  {guruList.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.nama}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
                >
                  {editingKelas ? "Simpan Perubahan" : "Simpan Data"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
