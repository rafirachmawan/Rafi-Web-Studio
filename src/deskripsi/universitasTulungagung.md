# Analisis Fitur Website — unita.ac.id (Universitas Tulungagung)

**Tanggal analisis:** 4 Agustus 2026

---

## 1. Ringkasan Umum

Website resmi **Universitas Tulungagung (UNITA)**, perguruan tinggi swasta di Jawa Timur di bawah Yayasan Universitas Tulungagung, berdiri sejak 18 Mei 1984, terakreditasi Institusi (AIPT) dengan predikat **B** dari BAN-PT. Situs ini menggunakan domain resmi `.ac.id` (khusus institusi akademik terverifikasi di Indonesia) — indikasi kredibilitas yang baik.

---

## 2. Struktur Navigasi (Menu Utama)

| Menu                 | Isi Sub-menu                                                                                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tentang**          | Sejarah, Visi & Misi, Struktur Organisasi, Makna Lambang, Hymne & Mars, Fakultas, Program Studi, Rekapitulasi Dosen, Kerjasama                                                                          |
| **Akademik**         | Panduan Akademik, Kalender Akademik, Sistem Pembelajaran, Program MBKM, Panduan RPL, SIAKAD, Kurikulum                                                                                                  |
| **Unit dan Lembaga** | Pusat Penjaminan Mutu, Biro Administrasi (Akademik/Umum/Keuangan/Kemahasiswaan), LPPM, Inkubator Bisnis, SPI, UPT Perpustakaan, UPT Komputer & SI, Pusat Bahasa, Sentra HAKI, Pusat Studi Asia Tenggara |
| **E-Service**        | SIAKAD, E-Learning, E-Library, SISTER, PDDIKTI, Repository, Jurnal, OPAC, OCS, Tracer Study, Formulir² digital, CBT, Conference Portal                                                                  |
| **Fasilitas**        | UKM, BEM, Radio R-UNITA FM, Perpustakaan, Laboratorium (per fakultas), Uji Kompetensi, Free Hotspot                                                                                                     |
| **Download**         | Informasi Akademik/Kemahasiswaan, Produk Hukum (SK Rektor, SE, SK Yayasan), Sertifikat Akreditasi, Panduan-panduan                                                                                      |
| **Kontak**           | Halaman kontak & alamat                                                                                                                                                                                 |
| **PMB**              | Penerimaan Mahasiswa Baru (subdomain terpisah)                                                                                                                                                          |

---

## 3. Fitur-Fitur Utama

### 🎓 Akademik & Kelembagaan

- **5 Fakultas**: Ekonomi, Hukum, Teknik, Pertanian, Ilmu Sosial & Politik — masing-masing dengan subdomain sendiri
- **8 Program Studi**: S1 Manajemen, S1 Akuntansi, S1 Hukum, S1 Administrasi Publik, S1 Agribisnis, S1 Teknik Sipil, S1 Teknik Elektro, D3 Kebidanan
- Info akreditasi institusi & prodi (BAN-PT)
- Kurikulum & panduan akademik dapat diunduh

### 💻 Sistem Informasi & E-Service (cukup lengkap)

- **SIAKAD** — Sistem Informasi Akademik (login mahasiswa)
- **E-Learning** (integrasi dengan Edlink) & **SPADA UNITA**
- **E-Library / Repository / OPAC** — akses pustaka digital
- **Jurnal & OCS** (Open Conference System) — publikasi ilmiah kampus
- **CAT** — Computer Based Test online
- Integrasi ke sistem nasional: **PDDIKTI, SISTER Kemdiktisaintek, LLDIKTI 7, SINTA**
- **KarirLink** — portal karir/lowongan kerja untuk alumni
- Berbagai **Google Form** untuk layanan administratif (pengajuan TIK, kendala TIK, kotak saran, akun email institusi, dll)

### 📰 Konten Berita & Informasi

- **Event & Pengumuman** (KRS, wisuda, workshop, dll) dengan tanggal
- **Berita Kampus** terkini dengan kategori (Berita Kampus, Agenda)
- Statistik ringkas: jumlah **Dosen (69)**, **Fakultas (5)**, **Mahasiswa (1596)**, **Prodi (8)**

### 👥 Struktur Manajerial

- Profil pimpinan (Rektor, Wakil Rektor 1–3) lengkap dengan foto

### 💬 Testimoni

- Kumpulan testimoni mahasiswa/alumni dengan avatar otomatis (ui-avatars.com)

### 📍 Kontak & Lokasi

- **Google Maps embed** lokasi kampus
- **Tombol WhatsApp langsung** (wa.me) untuk kontak cepat
- Nomor telepon, email (dilindungi dari scraping via Cloudflare email protection), alamat lengkap
- Tautan media sosial resmi: Facebook, Twitter/X, Instagram, YouTube

### 🌐 Fitur Teknis Lain

- **Multi-bahasa** — tombol ID/EN (EN memakai Google Translate widget)
- Embed **video YouTube** profil kampus
- Footer mencantumkan kredit pengembang web (Wander Computindo)
- Situs versi lama masih diarsipkan di `old.unita.ac.id`

---

## 4. Catatan Kredibilitas

Berbeda dari 2 situs yang dianalisis sebelumnya, situs ini menunjukkan indikasi **legitimasi yang kuat**:

- Domain resmi `.ac.id` (hanya bisa didaftarkan oleh institusi pendidikan terverifikasi di Indonesia)
- Tautan aktif ke sistem resmi pemerintah: **PDDIKTI**, **SISTER Kemdiktisaintek**, **LLDIKTI Wilayah VII**, **SINTA**
- Struktur organisasi, dosen, dan data akademik konsisten dan dapat diverifikasi silang
- Tidak ditemukan tanda-tanda error fatal, plugin mencurigakan, atau jaringan domain duplikat seperti pada situs-situs sebelumnya

**Catatan kecil (bukan masalah keamanan):**

- Beberapa link internal masih diarahkan ke domain lama (`old.unita.ac.id`) — indikasi migrasi situs yang belum 100% tuntas
- Beberapa item menu ("Laboratorium Teknik Sipil", "Laboratorium K3", dll.) masih berupa placeholder (`#`) tanpa halaman tujuan

---

## 5. Kesimpulan

Website `unita.ac.id` adalah situs **resmi dan kredibel** milik Universitas Tulungagung, dengan fitur yang cukup lengkap untuk kebutuhan kampus: informasi akademik, layanan digital mahasiswa (SIAKAD, e-learning, e-library), berita/pengumuman, serta integrasi dengan sistem pendidikan tinggi nasional Indonesia. Dari sisi UX, navigasi cukup kompleks/berlapis (banyak dropdown), namun ini wajar untuk situs institusi dengan banyak unit dan layanan.
