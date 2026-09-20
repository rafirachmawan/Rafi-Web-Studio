// src/data/laundry.js
// Laundry Service Data

export const laundry = {
  type: "laundry",
  name: "AioLaundry",
  description: "Cuci Kilat 24 Jam - Bersih, Cepat, Tepat",
  
  hero: {
    title: "Layanan Cuci Profesional & Terpercaya",
    subtitle: "Solusi cuci pakaian praktis untuk Anda yang sibuk. Antar jemput GRATIS Jakarta & Tangerang!",
    ctaText: "Pesan Sekarang"
  },
  
  theme: {
    bg: "bg-white",
    primary: "text-blue-500",
    button: "bg-blue-500",
    accent: "text-zinc-900"
  },
  
  services: [
    {
      id: 1,
      name: "Cuci Kering Rimba",
      price: "Rp 6.000/kg",
      description: "Cuci, kering, dan setrika - baju bersih siap pakai",
      time: "3-4 Hari",
      features: [
        "Sabun premium进口",
        "Desinfektan antibakteri",
        "Setrika uap panas",
        "Kemasan rapi & higienis"
      ]
    },
    {
      id: 2,
      name: "Cuci Komplit Setrika",
      price: "Rp 8.000/kg",
      description: "Cuci komplit dengan setrika halus",
      time: "2 Hari",
      features: [
        "Pemisahan warna (putih/hitam)",
        "Sorting per jenis kain",
        "Bau harum fresh",
        "Free softener premium"
      ]
    },
    {
      id: 3,
      name: "Express Service",
      price: "Rp 12.000/kg",
      description: "Cuci kilat 6 jam selesai",
      time: "6 Jam",
      features: [
        "Prioritas pengerjaan",
        "Antar jemput same day",
        "Packaging premium",
        "Tracking real-time"
      ]
    }
  ],
  
  specialServices: [
    {
      icon: "shirt",
      title: "Dry Cleaning",
      description: "Perawatan baju mahal & bahan delicate",
      price: "Mulai Rp 30.000/piece"
    },
    {
      icon: "quilt",
      title: "Selimut & Bedcover",
      description: "Cuci selimut tebal dengan mesin khusus",
      price: "Mulai Rp 50.000/item"
    },
    {
      icon: "shoe",
      title: "Sepatu",
      description: "Clean sepatu bahan kanvas & kulit",
      price: "Mulai Rp 45.000/pair"
    }
  ],
  
  advantages: [
    {
      icon: "truck",
      title: "Gratis Anter Jemput",
      description: "Area Jakarta Selatan, Pondok Indah, Senayan"
    },
    {
      icon: "clock",
      title: "Progres Real-Time",
      description: "Track pesanan via WhatsApp / App"
    },
    {
      icon: "shield-check",
      title: "Garansi 100%",
      description: "Jika barang hilang/rusak, diganti baru"
    },
    {
      icon: "wallet",
      title: "Harga Murah",
      description: "Terjangkau untuk semua kalangan"
    }
  ],
  
  trackingInfo: {
    placeholder: "Masukkan nomor resi",
    example: "Contoh: AIO-123456"
  },
  
  contact: {
    phone: "08123456789",
    waLink: "https://wa.me/628123456789?text=Halo,%20saya%20mau%20pesan%20cuci%20laundry.",
    address: "Jl. Merdeka No. 45, Jakarta Selatan",
    operatingHours: "Buka Setiap Hari - 24 Jam Online"
  },
  
  faq: [
    {
      question: "Berapa lama pengerjaan?",
      answer: "Tergantung paket: Express 6 jam, Regular 2 hari, Economy 3-4 hari."
    },
    {
      question: "Apakah barang saya aman?",
      answer: "Ya, kami berikan garansi 100%. Jika hilang/rusak, akan kami ganti sesuai harga pasar."
    },
    {
      question: "Bagaimana cara pemesanan?",
      answer: "Via WA/App, kurir akan antar jemput di alamat Anda dalam radius GRATIS."
    }
  ]
};
