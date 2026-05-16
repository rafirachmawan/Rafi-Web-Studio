export const WARUNG_USERS = {
  owner: {
    id: "U001",
    name: "Rafi Rachmawan",
    role: "Owner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rafi",
    branch: "Pusat",
  },
  admin: {
    id: "U002",
    name: "Sefia Amalia",
    role: "Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sefia",
    branch: "Cabang 1",
  },
  kasir: {
    id: "U003",
    name: "Budi Santoso",
    role: "Kasir",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
    branch: "Cabang 1",
  },
};

export const CATEGORIES = [
  "Sembako",
  "Minuman",
  "Makanan Ringan",
  "Kebutuhan Rumah Tangga",
  "Alat Tulis",
  "Lainnya",
];

export const PRODUCTS = [
  {
    id: "P001",
    sku: "WOS-001",
    name: "Minyak Goreng Bimoli 2L",
    category: "Sembako",
    price: 38000,
    cost: 35000,
    stock: 24,
    unit: "Pouch",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=200&fit=crop",
  },
  {
    id: "P002",
    sku: "WOS-002",
    name: "Beras Pandan Wangi 5kg",
    category: "Sembako",
    price: 75000,
    cost: 68000,
    stock: 15,
    unit: "Karung",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop",
  },
  {
    id: "P003",
    sku: "WOS-003",
    name: "Gula Pasir Gulaku 1kg",
    category: "Sembako",
    price: 16500,
    cost: 15000,
    stock: 45,
    unit: "Bungkus",
    image: "https://images.unsplash.com/photo-1581447109200-bf2769116351?w=200&h=200&fit=crop",
  },
  {
    id: "P004",
    sku: "WOS-004",
    name: "Indomie Goreng Original",
    category: "Makanan Ringan",
    price: 3100,
    cost: 2800,
    stock: 120,
    unit: "Pcs",
    image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=200&h=200&fit=crop",
  },
  {
    id: "P005",
    sku: "WOS-005",
    name: "Le Minerale 600ml",
    category: "Minuman",
    price: 3500,
    cost: 2500,
    stock: 5,
    unit: "Botol",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=200&h=200&fit=crop",
  },
];

export const CUSTOMERS = [
  {
    id: "C001",
    name: "Ibu Siti",
    phone: "081234567890",
    debt: 150000,
    status: "Belum Lunas",
  },
  {
    id: "C002",
    name: "Pak Bambang",
    phone: "089876543210",
    debt: 0,
    status: "Lunas",
  },
  {
    id: "C003",
    name: "Mas Doni",
    phone: "085211223344",
    debt: 45000,
    status: "Belum Lunas",
  },
];

export const SUPPLIERS = [
  {
    id: "S001",
    name: "PT Sumber Alfaria",
    phone: "021-555666",
    debt: 2000000,
  },
  {
    id: "S002",
    name: "Grosir Sembako Jaya",
    phone: "081122334455",
    debt: 0,
  },
];

export const TRANSACTIONS = [
  {
    id: "T001",
    date: "2024-05-16T10:30:00Z",
    customer: "Ibu Siti",
    total: 85000,
    payment: "Cash",
    items: 4,
  },
  {
    id: "T002",
    date: "2024-05-16T11:15:00Z",
    customer: "Umum",
    total: 3500,
    payment: "QRIS",
    items: 1,
  },
  {
    id: "T003",
    date: "2024-05-16T13:45:00Z",
    customer: "Mas Doni",
    total: 45000,
    payment: "Hutang",
    items: 2,
  },
];
