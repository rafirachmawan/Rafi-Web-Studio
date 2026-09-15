# 🚀 QUICK FIX - RUN THIS FIRST!

**Jika ada error saat jalankan `npm run dev`, ikuti langkah ini:**

---

## ⚡ CAR TERCEPAT (PILIH SALAH SATU):

### Option 1: Double-Click File ⭐ RECOMMENDED!
```
Langkah 1: Buka folder coffee-demo
          ↓
Langkah 2: Klik 2x pada file "quick-fix.bat"
          ↓
Langkah 3: Tunggu sampai selesai
          ↓
Selesai! Server otomatis nyala ✅
```

### Option 2: Pakai Command Prompt
```bash
cd d:\Rafi\Project\GapaiDigital\coffee-demo

# Hapus node_modules lama
rmdir /s /q node_modules

# Install ulang
npm install

# Jalankan
npm run dev
```

---

## ❓ MASIH ERROR?

Coba command ini satu per satu:

```bash
npm cache clean --force
rmdir /s /q node_modules
del package-lock.json
npm install
npm run dev
```

---

## ✅ HARAPNYA BEGINI:

Setelah jalani fix di atas, kamu harus lihat:

```
VITE v5.0.0 ready in XXXms

➜ Local:   http://localhost:5173/
➜ Network: use --host to expose
```

Lalu buka browser: **http://localhost:5173/coffee**

---

## 🔍 KALAU MASIH ADA ERROR...

Screenshot error yang muncul, lalu share ke saya!

**File yang sudah diperbaiki:**
- ✅ vite.config.js (hapus import path)
- ✅ package.json (perbaiki versi)
- ✅ quick-fix.bat (script otomatis)

---

**Created for:** Coffee Demo Error Fix  
**Date:** September 15, 2026
