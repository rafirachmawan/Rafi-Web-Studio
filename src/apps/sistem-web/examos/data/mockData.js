export const EXAM_USERS = {
  superadmin: {
    id: "SA001",
    name: "Ahmad Jalaludin",
    role: "Super Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
    school: "Pusat Kendali",
  },
  guru: {
    id: "G001",
    name: "Siti Aminah",
    role: "Guru",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
    school: "SMA Negeri 1 Jakarta",
  },
  siswa: {
    id: "S001",
    name: "Rafi Rachmawan",
    role: "Siswa",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rafi",
    school: "SMA Negeri 1 Jakarta",
  },
};

export const EXAMS = [
  {
    id: "EX001",
    title: "Ujian Akhir Semester Matematika",
    subject: "Matematika",
    duration: 90, // minutes
    questions: 40,
    status: "Active",
    date: "2024-05-16",
    token: "MTK123",
  },
  {
    id: "EX002",
    title: "Try Out Bahasa Indonesia",
    subject: "Bahasa Indonesia",
    duration: 120,
    questions: 50,
    status: "Scheduled",
    date: "2024-05-18",
    token: "IND456",
  },
];

export const QUESTIONS = [
  {
    id: "Q001",
    text: "Berapakah hasil dari 25 x 4 + 10?",
    type: "Pilihan Ganda",
    options: ["100", "110", "120", "90"],
    answer: "110",
    difficulty: "Mudah",
  },
  {
    id: "Q002",
    text: "Jelaskan apa yang dimaksud dengan fotosintesis!",
    type: "Essay",
    difficulty: "Sedang",
  },
  {
    id: "Q003",
    text: "Ibukota Indonesia adalah Jakarta.",
    type: "Benar/Salah",
    answer: "Benar",
    difficulty: "Mudah",
  },
];

export const RESULTS = [
  {
    id: "R001",
    student: "Rafi Rachmawan",
    exam: "Kuis Fisika Dasar",
    score: 85,
    status: "Lulus",
    date: "2024-05-15",
  },
  {
    id: "R002",
    student: "Budi Santoso",
    exam: "Kuis Fisika Dasar",
    score: 60,
    status: "Tidak Lulus",
    date: "2024-05-15",
  },
];

export const SCHOOL_STATS = {
  totalSchools: 124,
  totalUsers: 15420,
  totalExams: 842,
  activeStudents: 12300,
};
