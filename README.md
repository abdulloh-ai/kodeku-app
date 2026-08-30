# KODEMIK LMS — PROYEK KURSUS IT TERSTRUKTUR

Proyek **Kodemik LMS** dibangun menggunakan **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Prisma ORM (PostgreSQL)**.

---

## 📁 Struktur Folder Proyek (`D:\_kodeku`)

```
D:\_kodeku\
├── prisma/
│   └── schema.prisma         # Setup Prisma ORM PostgreSQL (Tanpa model/tabel di tahap ini)
├── src/
│   ├── app/
│   │   ├── admin/            # 👨‍💼 Halaman Admin (Placeholder Dashboard Admin)
│   │   │   └── page.tsx
│   │   ├── dashboard/        # 🎓 Halaman Siswa (Placeholder Dashboard Siswa)
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── health/       # ⚙️ Next.js API Routes (API Health Check)
│   │   │       └── route.ts
│   │   ├── globals.css       # Tailwind CSS Directives
│   │   ├── layout.tsx        # Root Layout Aplikasi
│   │   └── page.tsx          # 🌐 Halaman Publik (Placeholder Katalog Kursus)
│   ├── components/
│   │   └── ui/               # 🧩 Komponen UI Bersama
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   └── lib/
│       └── prisma.ts         # Singleton Helper Prisma Client
├── .env.example              # Template Environment Variables
├── package.json              # Konfigurasi Dependencies Proyek
├── postcss.config.js         # Konfigurasi PostCSS Tailwind
├── tailwind.config.ts        # Konfigurasi Tailwind CSS
├── tsconfig.json             # Konfigurasi TypeScript Compiler
└── README.md                 # Panduan Menjalankan Proyek Lokal
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

### 1. Prasyarat Sistem
Pastikan laptop Anda telah terinstall **Node.js** (Versi 18 atau 20 disarankan) dan **npm**.

### 2. Install Dependencies
Buka terminal (Command Prompt / PowerShell / VS Code Terminal) di folder `D:\_kodeku`, lalu jalankan perintah:

```bash
npm install
```

### 3. Setup Environment Variables (Opsional untuk Tahap Ini)
Salin file `.env.example` menjadi `.env`:

```bash
copy .env.example .env
```

### 4. Jalankan Server Development Lokal
Jalankan perintah berikut di terminal:

```bash
npm run dev
```

### 5. Buka di Browser Lokal
Buka browser favorit Anda dan akses alamat-alamat berikut:

- **🌐 Halaman Publik (Katalog Kursus):**  
  `http://localhost:3000`
- **🎓 Halaman Siswa (Dashboard Siswa):**  
  `http://localhost:3000/dashboard`
- **👨‍💼 Halaman Admin (Dashboard Admin):**  
  `http://localhost:3000/admin`
- **⚙️ API Health Check:**  
  `http://localhost:3000/api/health`
