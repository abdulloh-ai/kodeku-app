const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

// ============================================
// KodeKu.id — Production Course Database
// 33 Kelas Terstruktur (Level 1, 2, 3)
// ============================================
const db = {
  users: [
    { id: 'usr-admin-01', name: 'Hanif Abdulloh (Admin)', email: 'hanifabdullohhanifabdulloh@gmail.com', password: 'hanifabdulloh2007', role: 'admin' },
    { id: 'usr-1', name: 'Rian Pratama', email: 'rian@gmail.com', password: 'user123', role: 'student' },
    { id: 'usr-2', name: 'Budi Santoso', email: 'budi@gmail.com', password: 'user123', role: 'student' }
  ],

  categories: [
    { id: 'cat-level1', name: 'Level 1 — Pemula', slug: 'level-1-pemula', icon: '🟢' },
    { id: 'cat-level2', name: 'Level 2 — Menengah (Fullstack)', slug: 'level-2-menengah', icon: '🟡' },
    { id: 'cat-level3', name: 'Level 3 — Mahir (DevOps & AI)', slug: 'level-3-mahir', icon: '🔴' }
  ],

  courses: [
    // LEVEL 1: PEMULA
    {
      id: 'dasar-komputer',
      slug: 'dasar-komputer',
      title: 'Dasar Komputer & Arsitektur Sistem 💻',
      category: 'Level 1 — Pemula',
      level: 'Pemula',
      price: 99000,
      rating: 4.9,
      students: 4120,
      duration: '6 Jam Belajar',
      badge: 'FONDASI AWAL',
      desc: 'Memahami dasar arsitektur hardware, memori (RAM vs Disk), CPU, operating system, dan eksekusi proses.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'internet-web',
      slug: 'internet-web-protocol',
      title: 'Cara Kerja Internet & Protokol Web 🌐',
      category: 'Level 1 — Pemula',
      level: 'Pemula',
      price: 99000,
      rating: 4.9,
      students: 3890,
      duration: '8 Jam Belajar',
      badge: 'WAJIB PEMULA',
      desc: 'Memahami pengiriman data jaringan, IP Address, DNS, HTTP/HTTPS, request/response, dan SSL encryption.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'linux-cli',
      slug: 'linux-cli-mastery',
      title: 'Linux & Command Line (CLI) Mastery 🐧',
      category: 'Level 1 — Pemula',
      level: 'Pemula',
      price: 119000,
      rating: 4.9,
      students: 2950,
      duration: '10 Jam Belajar',
      badge: 'TERMINAL EXPERT',
      desc: 'Menguasai navigasi terminal Linux, pengelolaan file, izin akses (permissions), dan bash scripting.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'git-github',
      slug: 'git-github-mastery',
      title: 'Git & GitHub Version Control 🐙',
      category: 'Level 1 — Pemula',
      level: 'Pemula',
      price: 119000,
      rating: 5.0,
      students: 5410,
      duration: '8 Jam Belajar',
      badge: 'TERLARIS',
      desc: 'Manajemen versi kode, branching, pull request, resolusi konflik, dan kolaborasi tim di GitHub.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'html5-semantics',
      slug: 'html5-semantics',
      title: 'HTML5 & Web Semantics 📄',
      category: 'Level 1 — Pemula',
      level: 'Pemula',
      price: 99000,
      rating: 4.9,
      students: 6200,
      duration: '8 Jam Belajar',
      badge: 'DASAR WEB',
      desc: 'Membangun struktur web modern dengan HTML5 semantik, form interaktif, SEO dasar, dan aksesibilitas.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'css3-tailwind',
      slug: 'css3-tailwind-mastery',
      title: 'CSS3, Modern Layouts & Tailwind CSS 🎨',
      category: 'Level 1 — Pemula',
      level: 'Pemula',
      price: 149000,
      rating: 4.9,
      students: 4800,
      duration: '16 Jam Belajar',
      badge: 'POPULER',
      desc: 'Styling web modern dari CSS Flexbox, CSS Grid, Responsive Design hingga Tailwind CSS utility framework.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'js-fundamentals',
      slug: 'javascript-fundamentals',
      title: 'Dasar Pemrograman JavaScript (ES6+) ⚡',
      category: 'Level 1 — Pemula',
      level: 'Pemula',
      price: 149000,
      rating: 4.9,
      students: 7100,
      duration: '16 Jam Belajar',
      badge: 'INTI CODING',
      desc: 'Logika pemrograman dasar JavaScript dari variabel, pengkondisian, perulangan, fungsi, hingga ES6+.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'python-fundamentals',
      slug: 'python-fundamentals',
      title: 'Dasar Pemrograman Python 🐍',
      category: 'Level 1 — Pemula',
      level: 'Pemula',
      price: 129000,
      rating: 4.9,
      students: 3900,
      duration: '14 Jam Belajar',
      badge: 'POPULER',
      desc: 'Sintaks dasar Python, struktur data list/dict, fungsi, penanganan file, dan script otomasi.',
      instructor: 'Irvan Pratama, S.Kom'
    },

    // LEVEL 2: MENENGAH (FULL STACK)
    {
      id: 'js-async-dom',
      slug: 'js-async-dom',
      title: 'Advanced JavaScript Asynchronous & DOM 💡',
      category: 'Level 2 — Menengah (Fullstack)',
      level: 'Menengah',
      price: 169000,
      rating: 4.9,
      students: 3200,
      duration: '16 Jam Belajar',
      badge: 'FAVORIT',
      desc: 'Manipulasi DOM web, event handling, asynchronous (Promise, Async/Await), dan Fetch API.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'typescript-mastery',
      slug: 'typescript-mastery',
      title: 'TypeScript Fundamentals & Type Safety 🛡️',
      category: 'Level 2 — Menengah (Fullstack)',
      level: 'Menengah',
      price: 179000,
      rating: 4.9,
      students: 2890,
      duration: '14 Jam Belajar',
      badge: 'STANDAR INDUSTRI',
      desc: 'Type safety statis pada JavaScript, generics, interface, type utilities untuk aplikasi bebas error.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'react-mastery',
      slug: 'react-js-mastery',
      title: 'React.js & Modern Component Patterns ⚛️',
      category: 'Level 2 — Menengah (Fullstack)',
      level: 'Menengah',
      price: 199000,
      rating: 4.9,
      students: 5800,
      duration: '24 Jam Belajar',
      badge: 'TERLARIS',
      desc: 'Single Page Application (SPA), JSX, Components, Hooks, Context API, dan State Management.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'node-express',
      slug: 'node-express-rest-api',
      title: 'Node.js & Express.js RESTful API Architecture 🚀',
      category: 'Level 2 — Menengah (Fullstack)',
      level: 'Menengah',
      price: 199000,
      rating: 4.8,
      students: 4100,
      duration: '18 Jam Belajar',
      badge: 'BACKEND INTI',
      desc: 'Event loop Node.js, Express.js middleware, routing, validasi Zod, dan pembuatan RESTful API.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'postgres-prisma',
      slug: 'postgres-prisma-orm',
      title: 'PostgreSQL Deep Dive & Prisma ORM 🗄️',
      category: 'Level 2 — Menengah (Fullstack)',
      level: 'Menengah',
      price: 189000,
      rating: 4.9,
      students: 3400,
      duration: '20 Jam Belajar',
      badge: 'DATABASE POWER',
      desc: 'Relasi database, normalisasi 3NF, query JOIN, indexing B-Tree, dan Prisma ORM type-safe.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'nextjs-app-router',
      slug: 'nextjs-app-router',
      title: 'Next.js App Router (SSR, SSG, Server Actions) ⚡',
      category: 'Level 2 — Menengah (Fullstack)',
      level: 'Menengah',
      price: 249000,
      rating: 5.0,
      students: 6300,
      duration: '28 Jam Belajar',
      badge: 'FULLSTACK TOP',
      desc: 'Fullstack Next.js 15, Server Components, Server Actions, Dynamic Routes, dan Optimasi SEO.',
      instructor: 'Irvan Pratama, S.Kom'
    },

    // LEVEL 3: MAHIR (DEVOPS & AI ENGINEER)
    {
      id: 'docker-devops',
      slug: 'docker-containerization',
      title: 'Docker & Containerization Architecture 🐳',
      category: 'Level 3 — Mahir (DevOps & AI)',
      level: 'Mahir',
      price: 229000,
      rating: 4.9,
      students: 2100,
      duration: '16 Jam Belajar',
      badge: 'DEVOPS INTI',
      desc: 'Kontainerisasi aplikasi dengan Dockerfile, Docker Compose multi-container, dan GHCR Registry.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'ai-prompt-llm',
      slug: 'prompt-engineering-llm-api',
      title: 'Prompt Engineering & LLM API Integration (OpenAI/Gemini) 🤖',
      category: 'Level 3 — Mahir (DevOps & AI)',
      level: 'Mahir',
      price: 249000,
      rating: 5.0,
      students: 4200,
      duration: '20 Jam Belajar',
      badge: 'AI SPECIALIST',
      desc: 'Zero-shot/Few-shot prompting, JSON output terstruktur, streaming response, dan Function Calling.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'rag-vector-db',
      slug: 'rag-vector-db-pgvector',
      title: 'Retrieval-Augmented Generation (RAG) & Vector DB (PGVector) 🧠',
      category: 'Level 3 — Mahir (DevOps & AI)',
      level: 'Mahir',
      price: 299000,
      rating: 5.0,
      students: 3100,
      duration: '24 Jam Belajar',
      badge: 'AI ADVANCED',
      desc: 'Membangun AI QA Bot bebas halusinasi berbasis dokumen internal dengan Text Embeddings & PGVector.',
      instructor: 'Irvan Pratama, S.Kom'
    },
    {
      id: 'ai-agents-langchain',
      slug: 'autonomous-ai-agents-langchain',
      title: 'Autonomous AI Agents dengan LangChain & Tools ⚙️',
      category: 'Level 3 — Mahir (DevOps & AI)',
      level: 'Mahir',
      price: 349000,
      rating: 5.0,
      students: 2800,
      duration: '28 Jam Belajar',
      badge: 'AI MASTER',
      desc: 'Merancang AI Agent otonom yang bisa merencanakan tugas, mengeksekusi kode, dan riset mandiri.',
      instructor: 'Irvan Pratama, S.Kom'
    }
  ],

  // Real Teks Modul Bacaan & Sandboxes
  lessons: [
    {
      id: 'les-1',
      courseId: 'dasar-komputer',
      step: 1,
      title: '1. Pengenalan Komputer & Sistem Biner',
      summary: 'Memahami bagaimana komputer memproses data 0 dan 1 (biner), transistor, dan sirkuit elektronik.',
      contentMdx: `
## Pengenalan Komputer & Sistem Biner

Selamat datang di kelas **Dasar Komputer & Arsitektur Sistem**! Pada modul pertama ini, Anda akan mempelajari bagaimana komputer sebenarnya memproses data.

Komputer tidak memahami bahasa manusia. Di tingkat paling dasar, komputer hanya memahami dua kondisi listrik:
1. **ADA ARUS (ON)** = Diwakili angka **1**
2. **TIDAK ADA ARUS (OFF)** = Diwakili angka **0**

Kombinasi angka 0 dan 1 ini disebut sebagai **Sistem Biner (Binary System)**.

> [!NOTE]
> **Satuan Data Komputer:**
> - **1 Bit**: 1 digit angka biner (0 atau 1).
> - **1 Byte**: 8 Bit (Cukup untuk menyimpan 1 karakter huruf seperti 'A').
> - **1 Kilobyte (KB)**: 1.024 Byte.
> - **1 Megabyte (MB)**: 1.024 KB.
> - **1 Gigabyte (GB)**: 1.024 MB.

### Uji Coba Konversi Biner Sederhana

Anda dapat menjalankan script konversi angka ke biner berikut di sandbox:
      `,
      codeSnippet: `// Konversi Angka Desimal ke Biner
function desimalKeBiner(angka) {
  return (angka >>> 0).toString(2);
}

console.log("Angka 10 dalam Biner: " + desimalKeBiner(10)); // Output: 1010
console.log("Angka 255 dalam Biner: " + desimalKeBiner(255)); // Output: 11111111`,
      codeLanguage: 'javascript'
    },
    {
      id: 'les-2',
      courseId: 'html5-semantics',
      step: 1,
      title: '1. Struktur Dasar Dokumen HTML5 Semantik',
      summary: 'Mempelajari elemen HTML5 semantik seperti header, main, nav, section, dan footer.',
      contentMdx: `
## Struktur HTML5 Semantik

Di modul ini, kita mempelajari pembuatan struktur web yang ramah SEO dan mudah dibaca oleh screen reader.

> [!TIP]
> **Elemen Semantik Utama:**
> - \`<header>\`: Bagian kepala web / logo & navigasi.
> - \`<nav>\`: Container menu link navigasi.
> - \`<main>\`: Konten utama halaman.
> - \`<article>\`: Blok artikel independen.
> - \`<footer>\`: Hak cipta & link kaki web.
      `,
      codeSnippet: `<!DOCTYPE html>
<html lang="id">
<head>
  <title>Web Semantik KodeKu</title>
</head>
<body>
  <header><h1>Logo KodeKu</h1></header>
  <main><p>Konten utama di sini.</p></main>
</body>
</html>`,
      codeLanguage: 'html'
    }
  ],

  quizzes: [
    {
      id: 'quiz-1',
      courseId: 'dasar-komputer',
      title: 'Kuis Evaluasi Dasar Komputer',
      passScorePct: 80,
      questions: [
        {
          id: 'q1',
          prompt: '1 Byte terdiri dari berapa Bit?',
          options: ['4 Bit', '8 Bit', '16 Bit', '32 Bit'],
          correctIdx: 1,
          explanation: '1 Byte terdiri dari 8 Bit angka biner.'
        },
        {
          id: 'q2',
          prompt: 'Angka biner 1010 mewakili angka desimal...',
          options: ['8', '10', '12', '14'],
          correctIdx: 1,
          explanation: 'Biner 1010 = (1*8) + (0*4) + (1*2) + (0*1) = 10.'
        }
      ]
    }
  ],

  messages: [],
  orders: []
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = parsedUrl.pathname;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // APIs
  if (pathname === '/api/courses' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ success: true, data: db.courses }));
  }

  if (pathname === '/api/auth/register' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const newUser = {
          id: 'usr-' + Date.now(),
          name: data.name || 'Siswa KodeKu',
          email: data.email,
          whatsapp: data.whatsapp || '-',
          role: 'STUDENT'
        };
        db.users.push(newUser);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Registrasi Berhasil!', user: newUser }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Data registrasi tidak valid' }));
      }
    });
    return;
  }

  if (pathname === '/api/auth/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const inputEmail = (data.email || data.username || '').trim();
        const inputPass = (data.password || '').trim();

        // Admin Role Check
        if ((inputEmail === 'hanifabdullohhanifabdulloh@gmail.com' || inputEmail === 'admin') && inputPass === 'hanifabdulloh2007') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({
            success: true,
            message: 'Akses Admin Berhasil Terverifikasi!',
            role: 'admin',
            redirectUrl: '/admin.html',
            user: { name: 'Hanif Abdulloh (Admin)', email: 'hanifabdullohhanifabdulloh@gmail.com', role: 'admin' },
            token: 'token-admin-hanif-2026'
          }));
        }

        // Student Role Check
        const existingUser = db.users.find(u => u.email === inputEmail);
        const userOrders = db.orders.filter(o => o.email === inputEmail);
        const purchasedIds = userOrders.map(o => o.courseId);

        const studentProfile = existingUser || {
          id: 'usr-' + Date.now(),
          name: inputEmail.split('@')[0],
          email: inputEmail,
          role: 'student'
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Login Siswa Berhasil!',
          role: 'student',
          redirectUrl: '/dashboard.html',
          user: studentProfile,
          purchasedCourses: purchasedIds.length ? purchasedIds : ['1', '5'],
          token: 'token-student-' + Date.now()
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Gagal Login: Data tidak valid' }));
      }
    });
    return;
  }

  if (pathname === '/api/admin/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (data.username === 'admin' && data.password === 'admin123') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, message: 'Akses Admin Diterima!', token: 'admin-secret-token-2026' }));
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Username atau Password Admin Salah!' }));
        }
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Invalid Admin Auth Data' }));
      }
    });
    return;
  }

  if (pathname === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const newMsg = {
          id: 'MSG-' + Math.floor(100 + Math.random() * 900),
          name: data.name || 'Pengunjung Web',
          email: data.email || '-',
          whatsapp: data.whatsapp || '-',
          subject: data.subject || 'Pertanyaan Umum',
          message: data.message || 'Pesan dari pengunjung.',
          createdAt: new Date().toLocaleString('id-ID')
        };
        db.messages.unshift(newMsg);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Pesan Anda Berhasil Terkirim ke Admin Studio!' }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Gagal mengirim pesan' }));
      }
    });
    return;
  }

  if (pathname === '/api/courses/content' && req.method === 'GET') {
    const courseId = parsedUrl.searchParams.get('id') || '1';
    let filename = '';
    const fileMap = {
      '1': 'kelas_01_dasar_komputer.md',
      'dasar-komputer': 'kelas_01_dasar_komputer.md',
      '2': 'kelas_02_cara_kerja_internet.md',
      'internet-web': 'kelas_02_cara_kerja_internet.md',
      '3': 'kelas_03_linux_cli_mastery.md',
      'linux-cli': 'kelas_03_linux_cli_mastery.md',
      '4': 'kelas_04_git_github.md',
      'git-github': 'kelas_04_git_github.md',
      '5': 'kelas_05_html5_semantics.md',
      'html5-semantics': 'kelas_05_html5_semantics.md',
      '6': 'kelas_06_css3_tailwind.md',
      'css3-tailwind': 'kelas_06_css3_tailwind.md',
      '7': 'kelas_07_ui_ux_design.md',
      'ui-ux-design': 'kelas_07_ui_ux_design.md',
      '8': 'kelas_08_figma_developer.md',
      'figma-developer': 'kelas_08_figma_developer.md'
    };

    filename = fileMap[courseId] || `kelas_${courseId.toString().padStart(2, '0')}.md`;
    const contentPath = path.join(__dirname, 'content', filename);

    if (fs.existsSync(contentPath)) {
      const markdown = fs.readFileSync(contentPath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: true, filename, markdown }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: false, message: `File ${filename} belum dibuat.` }));
    }
  }

  if (pathname.startsWith('/api/courses/') && req.method === 'GET') {
    const courseId = pathname.replace('/api/courses/', '');
    const course = db.courses.find(c => c.id === courseId || c.slug === courseId);
    const lessons = db.lessons.filter(l => l.courseId === courseId || (course && l.courseId === course.id));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ success: true, course, lessons }));
  }

  if (pathname === '/api/payments/checkout' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const course = db.courses.find(c => c.id === data.courseId);

        const newOrder = {
          id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
          orderNo: 'KODEKU-ORD-' + Math.floor(100000 + Math.random() * 900000),
          name: data.name,
          email: data.email,
          whatsapp: data.whatsapp,
          courseId: data.courseId,
          courseTitle: course ? course.title : data.courseId,
          amount: course ? course.price : 149000,
          paymentMethod: data.paymentMethod || 'QRIS',
          status: 'PAID',
          createdAt: new Date().toLocaleString('id-ID')
        };

        db.orders.unshift(newOrder);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Pembayaran Lunas & Terverifikasi!',
          order: newOrder,
          classroomUrl: `/classroom.html?id=${data.courseId}&user=${encodeURIComponent(data.name)}`
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Invalid Checkout Data' }));
      }
    });
    return;
  }

  if (pathname === '/api/admin/courses' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const newCourse = {
          id: data.id || 'custom-' + Date.now(),
          slug: data.slug || 'custom-' + Date.now(),
          title: data.title,
          category: data.category || 'Level 1 — Pemula',
          level: data.level || 'Pemula',
          price: parseInt(data.price) || 99000,
          rating: 5.0,
          students: 1,
          duration: data.duration || '10 Jam Belajar',
          badge: data.badge || 'KELAS BARU',
          desc: data.desc || 'Deskripsi kelas kustom.',
          instructor: data.instructor || 'Irvan Pratama, S.Kom'
        };

        db.courses.push(newCourse);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Kelas Baru Berhasil Ditambahkan!', course: newCourse }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Data kelas tidak valid' }));
      }
    });
    return;
  }

  if (pathname === '/api/admin/content' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const courseId = data.courseId || '1';
        const fileMap = {
          '1': 'kelas_01_dasar_komputer.md',
          'dasar-komputer': 'kelas_01_dasar_komputer.md',
          '2': 'kelas_02_cara_kerja_internet.md',
          'internet-web': 'kelas_02_cara_kerja_internet.md',
          '3': 'kelas_03_linux_cli_mastery.md',
          'linux-cli': 'kelas_03_linux_cli_mastery.md',
          '4': 'kelas_04_git_github.md',
          'git-github': 'kelas_04_git_github.md',
          '5': 'kelas_05_html5_semantics.md',
          'html5-semantics': 'kelas_05_html5_semantics.md',
          '6': 'kelas_06_css3_tailwind.md',
          'css3-tailwind': 'kelas_06_css3_tailwind.md',
          '7': 'kelas_07_ui_ux_design.md',
          'ui-ux-design': 'kelas_07_ui_ux_design.md',
          '8': 'kelas_08_figma_developer.md',
          'figma-developer': 'kelas_08_figma_developer.md'
        };

        let filename = fileMap[courseId] || `kelas_${courseId.toString().padStart(2, '0')}.md`;
        const contentPath = path.join(__dirname, 'content', filename);

        fs.writeFileSync(contentPath, data.markdown, 'utf-8');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: `Materi ${filename} Berhasil Disimpan & Diterbitkan!`, filename }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Gagal menyimpan materi: ' + err.message }));
      }
    });
    return;
  }

  if (pathname === '/api/admin/stats' && req.method === 'GET') {
    const totalRevenue = db.orders.reduce((sum, o) => sum + (o.amount || 0), 0);
    const uniqueStudents = new Set(db.orders.map(o => o.email)).size;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      success: true,
      stats: {
        totalRevenue: totalRevenue,
        totalStudents: Math.max(uniqueStudents, db.orders.length),
        totalCourses: db.courses.length,
        totalMessages: db.messages.length
      },
      users: db.users,
      orders: db.orders,
      messages: db.messages
    }));
  }

  if (pathname === '/api/certificates/generate' && req.method === 'GET') {
    const name = parsedUrl.searchParams.get('name') || 'Rian Pratama';
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      success: true,
      certificateNo: 'KODEKU-CERT-' + Math.floor(100000 + Math.random() * 900000),
      issuedDate: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      studentName: name,
      courseTitle: 'Dasar Komputer & Arsitektur Sistem 💻',
      instructor: 'Irvan Pratama, S.Kom (Lead Instruktur KodeKu)'
    }));
  }

  // Static File Serving
  if (pathname === '/') pathname = '/index.html';
  let filePath = path.join(PUBLIC_DIR, pathname);
  if (!path.extname(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Halaman Tidak Ditemukan — KodeKu.id Platform</h1>');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'text/html';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 KodeKu.id Server running at http://localhost:${PORT}`);
});
