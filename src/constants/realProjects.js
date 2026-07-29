import sppCover from "../assets/sppShiningsun/Login.png";
import absensiCover from "../assets/absensiShiningsun/absensiShiningsun.jpg";
import jadwalBookingCover from "../assets/jadwalBookingClassShiningsun/bookingClassShiningsun.jpg";
import antrianBriCover from "../assets/sistemAntrianBank/sistem antrian bank bri.jpg";
import tamiyaCover from "../assets/softwareBalapanTamiya/Dashboard Tamiya.jpeg";

export const realProjects = [
  {
    id: "jadwal-booking-shiningsun",
    name: {
      id: "Aplikasi Jadwal & Booking Class Shining Sun",
      en: "Shining Sun Class Scheduling & Booking App"
    },
    path: "#",
    desc: {
      id: "Sistem PWA Multi-Tenant untuk Manajemen Jadwal, Booking, dan Administrasi Kelas",
      en: "Multi-Tenant PWA for Class Schedule Management, Booking, and Administration"
    },
    icon: "📅",
    category: "sistem berbasis web",
    image: jadwalBookingCover,
    client: "Yayasan Shining Sun School",
    isReal: true,
    fullDescription: {
      id: "Sistem web berbasis PWA (Progressive Web App) multi-tenant yang dikembangkan khusus untuk Yayasan Shining Sun School guna mengotomatisasi dan menyederhanakan proses manajemen jadwal kelas dan booking siswa. Aplikasi ini memungkinkan admin cabang mengelola slot kelas, mendaftarkan siswa secara auto-booking berdasarkan jadwal berulang bulanan, serta memantau kehadiran dan status pembayaran siswa dalam satu dashboard terpadu. Dilengkapi dengan sistem notifikasi aktivitas, kontrol multi-cabang untuk Superadmin, serta mekanisme kunci slot (slot lock) untuk mencegah overbooking.",
      en: "A multi-tenant Progressive Web App (PWA) developed specifically for Yayasan Shining Sun School to automate and simplify the class scheduling and student booking management process. The application allows branch admins to manage class slots, register students via auto-booking based on monthly recurring schedules, and monitor student attendance and payment status in a unified dashboard. Equipped with activity notification system, multi-branch control for Superadmin, and a slot-lock mechanism to prevent overbooking."
    },
    techStack: ["Next.js", "React JS", "Supabase", "PostgreSQL", "PWA", "Tailwind CSS", "Vercel"],
    features: [
      {
        id: "Sistem Jadwal & Booking Kelas Multi-Cabang",
        en: "Multi-Branch Class Scheduling & Booking System"
      },
      {
        id: "Auto-Booking Berulang Bulanan untuk Siswa Reguler",
        en: "Monthly Recurring Auto-Booking for Regular Students"
      },
      {
        id: "Dashboard Multi-Tenant (Superadmin & Admin Cabang)",
        en: "Multi-Tenant Dashboard (Superadmin & Branch Admin)"
      },
      {
        id: "Manajemen Siswa Reguler & Coba Gratis (CG)",
        en: "Regular & Free-Trial Student Management"
      },
      {
        id: "Slot Lock untuk Pencegahan Overbooking",
        en: "Slot Lock for Overbooking Prevention"
      },
      {
        id: "Notifikasi Aktivitas Feed Real-Time",
        en: "Real-Time Activity Feed Notifications"
      }
    ]
  },
  {
    id: "absensi-shiningsun",
    name: {
      id: "Aplikasi Absensi Shining Sun",
      en: "Shining Sun Attendance App"
    },
    path: "#",
    desc: {
      id: "Aplikasi Mobile Android Presensi Guru & Staf dengan Sync Otomatis Google Spreadsheet",
      en: "Android Mobile App for Teacher & Staff Attendance with Automatic Google Spreadsheet Sync"
    },
    icon: "📱",
    category: "mobile app",
    image: absensiCover,
    client: "Yayasan Shining Sun School",
    isReal: true,
    fullDescription: {
      id: "Aplikasi presensi kehadiran berbasis mobile Android yang dikembangkan khusus untuk mempermudah pencatatan kehadiran guru dan staf di Shining Sun School. Aplikasi ini terintegrasi secara langsung dengan Google Sheets API untuk mengirimkan data absen secara real-time ke Google Spreadsheet sekolah secara otomatis tanpa perlu perantara server khusus, lengkap dengan verifikasi lokasi GPS untuk menjamin kevalidan absensi.",
      en: "An Android mobile attendance application developed specifically to simplify attendance logging for teachers and staff at Shining Sun School. This app integrates directly with Google Sheets API to automatically send attendance data in real-time without the need for a dedicated backend server, complete with GPS location verification to ensure attendance validity."
    },
    techStack: ["Android SDK", "Kotlin", "Google Sheets API", "Firebase Services"],
    features: [
      {
        id: "Aplikasi Mobile Android (APK)",
        en: "Android Mobile Application (APK)"
      },
      {
        id: "Sinkronisasi Data Otomatis & Real-Time ke Google Spreadsheet",
        en: "Automatic & Real-Time Data Sync to Google Spreadsheet"
      },
      {
        id: "Verifikasi Lokasi Presensi berbasis GPS",
        en: "GPS-based Attendance Location Verification"
      },
      {
        id: "Perekaman Waktu Kehadiran Masuk/Pulang Instan",
        en: "Instant Clock-In/Clock-Out Recording"
      }
    ]
  },
  {
    id: "antrian-bri",
    name: {
      id: "Sistem Antrian BRI Surabaya",
      en: "BRI Surabaya Queue System"
    },
    path: "#",
    desc: {
      id: "Software Antrean Digital Bank BRI dengan Sistem Pemanggilan Suara Otomatis",
      en: "BRI Bank Digital Queue Software with Automatic Voice Call System"
    },
    icon: "🏦",
    category: "software",
    image: antrianBriCover,
    client: "Bank BRI Kantor Cabang Surabaya",
    isReal: true,
    fullDescription: {
      id: "Software aplikasi antrean digital desktop yang dirancang khusus untuk memperlancar antrean nasabah di kantor cabang Bank BRI Surabaya. Software ini secara otomatis mengelola nomor antrean teller dan customer service, serta terintegrasi dengan modul suara otomatis (Text-to-Speech) untuk melakukan pemanggilan nomor antrean nasabah secara real-time.",
      en: "A desktop digital queue application software designed specifically to streamline customer queues at the Bank BRI Surabaya branch office. The software automatically manages teller and customer service queue numbers, and integrates with an automatic Text-to-Speech voice module to perform real-time customer calls."
    },
    techStack: ["Electron.js", "React JS", "Node.js", "WebSockets", "Text-to-Speech API"],
    features: [
      {
        id: "Software Aplikasi Desktop Standalone",
        en: "Standalone Desktop Application Software"
      },
      {
        id: "Sistem Pemanggilan Suara Otomatis (Automatic Voice Call)",
        en: "Automatic Voice Call System (Text-to-Speech)"
      },
      {
        id: "Sinkronisasi Antrean Loket Real-Time",
        en: "Real-Time Counter Queue Sync"
      },
      {
        id: "Integrasi Cetak Tiket Nomor Antrean Kios",
        en: "Kiosk Queue Ticket Printing Integration"
      }
    ]
  },
  {
    id: "spp-shiningsun",
    name: {
      id: "Aplikasi SPP Shining Sun",
      en: "Shining Sun SPP App"
    },
    path: "#",
    desc: {
      id: "Aplikasi Mobile Android Pembayaran SPP Sekolah dengan Sync Otomatis Google Spreadsheet",
      en: "Android Mobile App for School Tuition Payment with Automatic Google Spreadsheet Sync"
    },
    icon: "☀️",
    category: "mobile app",
    image: sppCover,
    client: "Yayasan Shining Sun School",
    isReal: true,
    fullDescription: {
      id: "Aplikasi mobile Android yang dikembangkan khusus untuk mempermudah administrasi pembayaran SPP siswa di Shining Sun School. Aplikasi ini menghubungkan pencatatan data transaksi secara real-time dan otomatis ke Google Spreadsheet sekolah menggunakan Google Sheets API, menyederhanakan pelacakan status pembayaran bulanan, serta menghilangkan proses rekapitulasi manual.",
      en: "An Android mobile application developed specifically to simplify the school tuition payment administration at Shining Sun School. This app connects transaction logging in real-time and automatically to the school's Google Spreadsheet using Google Sheets API, simplifying monthly payment status tracking and eliminating manual recapitulation."
    },
    techStack: ["Android SDK", "Kotlin", "Google Sheets API", "Firebase Services"],
    features: [
      {
        id: "Aplikasi Mobile Android (APK)",
        en: "Android Mobile Application (APK)"
      },
      {
        id: "Pencatatan Tagihan & Histori SPP Real-Time",
        en: "Real-Time Bills & Tuition History Logging"
      },
      {
        id: "Sinkronisasi Otomatis ke Google Spreadsheet Sekolah",
        en: "Automatic Sync to School's Google Spreadsheet"
      },
      {
        id: "Generasi Bukti Kwitansi Slip Pembayaran Digital",
        en: "Digital Receipt Slip Generation"
      }
    ]
  },
  {
    id: "tamiya-race-tracker",
    name: {
      id: "Software Balapan Tamiya Jakarta",
      en: "Jakarta Tamiya Race Software"
    },
    path: "#",
    desc: {
      id: "Software Turnamen Tamiya dengan Sistem Bracket Double-Elimination & Print ID Card",
      en: "Tamiya Tournament Software with Double-Elimination Bracket System & ID Card Print"
    },
    icon: "🏎️",
    category: "software",
    image: tamiyaCover,
    client: "Komunitas Tamiya Indonesia Jakarta",
    isReal: true,
    fullDescription: {
      id: "Software aplikasi desktop manajemen turnamen balap Tamiya (Mini 4WD) di Jakarta. Sistem ini mengotomatisasi bagan pertandingan menggunakan format Double-Elimination (pemenang melaju ke babak berikutnya, sementara yang kalah turun ke lower bracket). Saat pendaftaran peserta, sistem secara otomatis mencetak ID Card pengenal lengkap dengan barcode, serta memproyeksikan bagan turnamen (bracket) secara real-time ke layar monitor besar penonton.",
      en: "A desktop application software for managing Tamiya (Mini 4WD) racing tournaments in Jakarta. This system automates the match tree using a Double-Elimination format (winners advance, while losers drop to lower bracket). Upon registration, the system automatically prints an ID Card with barcode and projects the live bracket to a large screen."
    },
    techStack: ["Electron.js", "React JS", "Node.js", "SQLite", "Thermal Printer API"],
    features: [
      {
        id: "Manajemen Bracket Turnamen Double-Elimination",
        en: "Double-Elimination Tournament Bracket Management"
      },
      {
        id: "Pendaftaran Peserta & Print ID Card Barcode Otomatis",
        en: "Participant Registration & Automatic Barcode ID Card Print"
      },
      {
        id: "Proyeksi Bagan Bracket Real-Time Layar Lebar",
        en: "Real-Time Large Screen Bracket Projection"
      },
      {
        id: "Penyimpanan Database offline-first (SQLite)",
        en: "Offline-first Database Storage (SQLite)"
      }
    ]
  }
];
