export const realProjects = [
  {
    id: "spp-shiningsun",
    name: "Aplikasi SPP Shining Sun",
    path: "#",
    desc: "Aplikasi Mobile Android Pembayaran SPP Sekolah dengan Sync Otomatis Google Spreadsheet",
    icon: "☀️",
    category: "mobile app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    client: "Yayasan Shining Sun School",
    isReal: true,
    fullDescription: "Aplikasi mobile Android yang dikembangkan khusus untuk mempermudah administrasi pembayaran SPP siswa di Shining Sun School. Aplikasi ini menghubungkan pencatatan data transaksi secara real-time dan otomatis ke Google Spreadsheet sekolah menggunakan Google Sheets API, menyederhanakan pelacakan status pembayaran bulanan, serta menghilangkan proses rekapitulasi manual.",
    techStack: ["Android SDK", "Kotlin", "Google Sheets API", "Firebase Services"],
    features: [
      "Aplikasi Mobile Android (APK)",
      "Pencatatan Tagihan & Histori SPP Real-Time",
      "Sinkronisasi Otomatis ke Google Spreadsheet Sekolah",
      "Generasi Bukti Kwitansi Slip Pembayaran Digital"
    ]
  },
  {
    id: "absensi-shiningsun",
    name: "Aplikasi Absensi Shining Sun",
    path: "#",
    desc: "Aplikasi Mobile Android Presensi Guru & Staf dengan Sync Otomatis Google Spreadsheet",
    icon: "📱",
    category: "mobile app",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    client: "Yayasan Shining Sun School",
    isReal: true,
    fullDescription: "Aplikasi presensi kehadiran berbasis mobile Android yang dikembangkan khusus untuk mempermudah pencatatan kehadiran guru dan staf di Shining Sun School. Aplikasi ini terintegrasi secara langsung dengan Google Sheets API untuk mengirimkan data absen secara real-time ke Google Spreadsheet sekolah secara otomatis tanpa perlu perantara server khusus, lengkap dengan verifikasi lokasi GPS untuk menjamin kevalidan absensi.",
    techStack: ["Android SDK", "Kotlin", "Google Sheets API", "Firebase Services"],
    features: [
      "Aplikasi Mobile Android (APK)",
      "Sinkronisasi Data Otomatis & Real-Time ke Google Spreadsheet",
      "Verifikasi Lokasi Presensi berbasis GPS",
      "Perekaman Waktu Kehadiran Masuk/Pulang Instan"
    ]
  },
  {
    id: "antrian-bri",
    name: "Sistem Antrian BRI Surabaya",
    path: "#",
    desc: "Software Antrean Digital Bank BRI dengan Sistem Pemanggilan Suara Otomatis",
    icon: "🏦",
    category: "software",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80",
    client: "Bank BRI Kantor Cabang Surabaya",
    isReal: true,
    fullDescription: "Software aplikasi antrean digital desktop yang dirancang khusus untuk memperlancar antrean nasabah di kantor cabang Bank BRI Surabaya. Software ini secara otomatis mengelola nomor antrean teller dan customer service, serta terintegrasi dengan modul suara otomatis (Text-to-Speech) untuk melakukan pemanggilan nomor antrean nasabah secara real-time.",
    techStack: ["Electron.js", "React JS", "Node.js", "WebSockets", "Text-to-Speech API"],
    features: [
      "Software Aplikasi Desktop Standalone",
      "Sistem Pemanggilan Suara Otomatis (Automatic Voice Call)",
      "Sinkronisasi Antrean Loket Real-Time",
      "Integrasi Cetak Tiket Nomor Antrean Kios"
    ]
  },
  {
    id: "tamiya-race-tracker",
    name: "Software Balapan Tamiya Jakarta",
    path: "#",
    desc: "Software Turnamen Tamiya dengan Sistem Bracket Double-Elimination & Print ID Card",
    icon: "🏎️",
    category: "software",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    client: "Komunitas Tamiya Indonesia Jakarta",
    isReal: true,
    fullDescription: "Software aplikasi desktop manajemen turnamen balap Tamiya (Mini 4WD) di Jakarta. Sistem ini mengotomatisasi bagan pertandingan menggunakan format Double-Elimination (pemenang melaju ke babak berikutnya, sementara yang kalah turun ke lower bracket). Saat pendaftaran peserta, sistem secara otomatis mencetak ID Card pengenal lengkap dengan barcode, serta memproyeksikan bagan turnamen (bracket) secara real-time ke layar monitor besar penonton.",
    techStack: ["Electron.js", "React JS", "Node.js", "SQLite", "Thermal Printer API"],
    features: [
      "Manajemen Bracket Turnamen Double-Elimination",
      "Pendaftaran Peserta & Print ID Card Barcode Otomatis",
      "Proyeksi Bagan Bracket Real-Time Layar Lebar",
      "Penyimpanan Database offline-first (SQLite)"
    ]
  }
];
