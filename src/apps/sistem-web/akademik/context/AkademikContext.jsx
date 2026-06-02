import { createContext, useContext, useState, useEffect } from "react";
import {
  SCHOOL_INFO,
  GURU_LIST as INITIAL_GURU_LIST,
  SISWA_LIST as INITIAL_SISWA_LIST,
  KELAS_LIST as INITIAL_KELAS_LIST,
  MAPEL_LIST as INITIAL_MAPEL_LIST,
  JADWAL as INITIAL_JADWAL,
  NILAI_LIST as INITIAL_NILAI_LIST,
  ABSENSI_RECORDS as INITIAL_ABSENSI_RECORDS,
} from "../data/mockData";

const AkademikContext = createContext(null);

export function AkademikProvider({ children }) {
  // Load initial states from LocalStorage or fallback to mockData
  const [guruList, setGuruList] = useState(() => {
    const data = localStorage.getItem("akademik_guru");
    return data ? JSON.parse(data) : INITIAL_GURU_LIST;
  });

  const [siswaList, setSiswaList] = useState(() => {
    const data = localStorage.getItem("akademik_siswa");
    return data ? JSON.parse(data) : INITIAL_SISWA_LIST;
  });

  const [kelasList, setKelasList] = useState(() => {
    const data = localStorage.getItem("akademik_kelas");
    return data ? JSON.parse(data) : INITIAL_KELAS_LIST;
  });

  const [mapelList, setMapelList] = useState(() => {
    const data = localStorage.getItem("akademik_mapel");
    return data ? JSON.parse(data) : INITIAL_MAPEL_LIST;
  });

  const [jadwal, setJadwal] = useState(() => {
    const data = localStorage.getItem("akademik_jadwal");
    return data ? JSON.parse(data) : INITIAL_JADWAL;
  });

  const [nilaiList, setNilaiList] = useState(() => {
    const data = localStorage.getItem("akademik_nilai");
    return data ? JSON.parse(data) : INITIAL_NILAI_LIST;
  });

  const [absensiRecords, setAbsensiRecords] = useState(() => {
    const data = localStorage.getItem("akademik_absensi");
    return data ? JSON.parse(data) : INITIAL_ABSENSI_RECORDS;
  });

  const [activeGuruId, setActiveGuruId] = useState(() => {
    return localStorage.getItem("akademik_active_guru_id") || "G001";
  });

  const [activeSiswaId, setActiveSiswaId] = useState(() => {
    return localStorage.getItem("akademik_active_siswa_id") || "S001";
  });

  const [schoolInfo] = useState(SCHOOL_INFO);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem("akademik_guru", JSON.stringify(guruList));
  }, [guruList]);

  useEffect(() => {
    localStorage.setItem("akademik_siswa", JSON.stringify(siswaList));
  }, [siswaList]);

  useEffect(() => {
    localStorage.setItem("akademik_kelas", JSON.stringify(kelasList));
  }, [kelasList]);

  useEffect(() => {
    localStorage.setItem("akademik_mapel", JSON.stringify(mapelList));
  }, [mapelList]);

  useEffect(() => {
    localStorage.setItem("akademik_jadwal", JSON.stringify(jadwal));
  }, [jadwal]);

  useEffect(() => {
    localStorage.setItem("akademik_nilai", JSON.stringify(nilaiList));
  }, [nilaiList]);

  useEffect(() => {
    localStorage.setItem("akademik_absensi", JSON.stringify(absensiRecords));
  }, [absensiRecords]);

  useEffect(() => {
    localStorage.setItem("akademik_active_guru_id", activeGuruId);
  }, [activeGuruId]);

  useEffect(() => {
    localStorage.setItem("akademik_active_siswa_id", activeSiswaId);
  }, [activeSiswaId]);

  // =============================================
  // MUTATIONS: GURU
  // =============================================
  const addGuru = (newGuru) => {
    const nextId = "G" + String(guruList.length + 1).padStart(3, "0");
    const guru = {
      id: nextId,
      status: "Aktif",
      avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.floor(Math.random() * 80)}.jpg`,
      ...newGuru,
    };
    setGuruList((prev) => [...prev, guru]);
  };

  const updateGuru = (id, updatedData) => {
    setGuruList((prev) =>
      prev.map((g) => (g.id === id ? { ...g, ...updatedData } : g))
    );
  };

  const deleteGuru = (id) => {
    setGuruList((prev) => prev.filter((g) => g.id !== id));
    // Clean up waliKelas mapping in KELAS_LIST if this guru was a wali kelas
    setKelasList((prev) =>
      prev.map((k) => (k.waliKelas === id ? { ...k, waliKelas: null } : k))
    );
  };

  // =============================================
  // MUTATIONS: SISWA
  // =============================================
  const addSiswa = (newSiswa) => {
    const nextId = "S" + String(siswaList.length + 1).padStart(3, "0");
    const nextNis = "2025" + String(siswaList.length + 1).padStart(4, "0");
    const kelasObj = kelasList.find((k) => k.id === newSiswa.kelasId);
    const siswa = {
      id: nextId,
      nis: nextNis,
      status: "Aktif",
      kelas: kelasObj ? kelasObj.nama : "",
      avatar: newSiswa.gender === "L"
        ? `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 80)}.jpg`
        : `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 80)}.jpg`,
      ...newSiswa,
    };
    setSiswaList((prev) => [...prev, siswa]);

    // Initialize blank grades for the new student for all subjects
    const newGrades = mapelList.map((m) => ({
      siswaId: nextId,
      mapelId: m.id,
      tugas: 0,
      uts: 0,
      uas: 0,
    }));
    setNilaiList((prev) => [...prev, ...newGrades]);
  };

  const updateSiswa = (id, updatedData) => {
    const kelasObj = updatedData.kelasId ? kelasList.find((k) => k.id === updatedData.kelasId) : null;
    setSiswaList((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              ...updatedData,
              kelas: kelasObj ? kelasObj.nama : s.kelas,
            }
          : s
      )
    );
  };

  const deleteSiswa = (id) => {
    setSiswaList((prev) => prev.filter((s) => s.id !== id));
    // Clean up grades and attendance records
    setNilaiList((prev) => prev.filter((n) => n.siswaId !== id));
    setAbsensiRecords((prev) => prev.filter((a) => a.siswaId !== id));
  };

  // =============================================
  // MUTATIONS: KELAS
  // =============================================
  const addKelas = (newKelas) => {
    const nextId = "K" + String(kelasList.length + 1).padStart(3, "0");
    const kelas = {
      id: nextId,
      jumlahSiswa: 0,
      ...newKelas,
    };
    setKelasList((prev) => [...prev, kelas]);
  };

  const updateKelas = (id, updatedData) => {
    setKelasList((prev) =>
      prev.map((k) => (k.id === id ? { ...k, ...updatedData } : k))
    );
  };

  const deleteKelas = (id) => {
    setKelasList((prev) => prev.filter((k) => k.id !== id));
    // Set class to null/empty for students inside this class
    setSiswaList((prev) =>
      prev.map((s) => (s.kelasId === id ? { ...s, kelasId: "", kelas: "" } : s))
    );
  };

  // =============================================
  // MUTATIONS: ABSENSI
  // =============================================
  const saveAbsensiRecord = (record) => {
    setAbsensiRecords((prev) => {
      // Check if a record exists for this student on this date
      const existsIdx = prev.findIndex(
        (a) => a.siswaId === record.siswaId && a.tanggal === record.tanggal
      );
      if (existsIdx > -1) {
        const copy = [...prev];
        copy[existsIdx] = { ...copy[existsIdx], ...record };
        return copy;
      }
      return [...prev, record];
    });
  };

  const bulkSaveAbsensi = (records) => {
    setAbsensiRecords((prev) => {
      const copy = [...prev];
      records.forEach((rec) => {
        const idx = copy.findIndex(
          (a) => a.siswaId === rec.siswaId && a.tanggal === rec.tanggal
        );
        if (idx > -1) {
          copy[idx] = { ...copy[idx], ...rec };
        } else {
          copy.push(rec);
        }
      });
      return copy;
    });
  };

  // =============================================
  // MUTATIONS: NILAI
  // =============================================
  const saveNilaiRecord = (record) => {
    setNilaiList((prev) => {
      const idx = prev.findIndex(
        (n) => n.siswaId === record.siswaId && n.mapelId === record.mapelId
      );
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], ...record };
        return copy;
      }
      return [...prev, record];
    });
  };

  // =============================================
  // DYNAMIC LOOKUP HELPERS
  // =============================================
  const getGuruById = (id) => guruList.find((g) => g.id === id);
  const getSiswaById = (id) => siswaList.find((s) => s.id === id);
  const getKelasById = (id) => kelasList.find((k) => k.id === id);
  const getMapelById = (id) => mapelList.find((m) => m.id === id);
  const getSiswaByKelas = (kelasId) => siswaList.filter((s) => s.kelasId === kelasId);
  const getJadwalByKelas = (kelasId) => jadwal.filter((j) => j.kelasId === kelasId);
  const getJadwalByGuru = (guruId) => jadwal.filter((j) => j.guruId === guruId);
  const getNilaiSiswa = (siswaId) => nilaiList.filter((n) => n.siswaId === siswaId);
  const getAbsensiSiswa = (siswaId) => absensiRecords.filter((a) => a.siswaId === siswaId);

  // Demo users mapping
  const demoUsers = {
    admin: {
      nama: "Administrator",
      role: "Super Admin",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      email: "admin@smknd.sch.id",
    },
    guru: {
      ...(guruList.find((g) => g.id === activeGuruId) || guruList[0] || {}),
      role: "Guru",
    },
    siswa: {
      ...(siswaList.find((s) => s.id === activeSiswaId) || siswaList[0] || {}),
      role: "Siswa",
    },
  };

  return (
    <AkademikContext.Provider
      value={{
        schoolInfo,
        guruList,
        siswaList,
        kelasList,
        mapelList,
        jadwal,
        nilaiList,
        absensiRecords,
        demoUsers,
        activeGuruId,
        setActiveGuruId,
        activeSiswaId,
        setActiveSiswaId,

        addGuru,
        updateGuru,
        deleteGuru,
        addSiswa,
        updateSiswa,
        deleteSiswa,
        addKelas,
        updateKelas,
        deleteKelas,
        saveAbsensiRecord,
        bulkSaveAbsensi,
        saveNilaiRecord,

        getGuruById,
        getSiswaById,
        getKelasById,
        getMapelById,
        getSiswaByKelas,
        getJadwalByKelas,
        getJadwalByGuru,
        getNilaiSiswa,
        getAbsensiSiswa,
      }}
    >
      {children}
    </AkademikContext.Provider>
  );
}

export function useAkademik() {
  const context = useContext(AkademikContext);
  if (!context) {
    throw new Error("useAkademik must be used within an AkademikProvider");
  }
  return context;
}
