import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Prisma Seeding for Kodemik LMS...');

  // 1. Seed Contoh Admin
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@kodemik.com' },
    update: {},
    create: {
      email: 'admin@kodemik.com',
      passwordHash: '$2b$10$e8w67wK8y8hJ7K...sampleAdminHash',
      nama: 'Hanif Abdulloh (Owner/Admin)',
    },
  });
  console.log('✅ Admin Seeded:', admin.email);

  // 2. Seed Contoh Siswa
  const siswa = await prisma.siswa.upsert({
    where: { email: 'siswa@kodemik.com' },
    update: {},
    create: {
      email: 'siswa@kodemik.com',
      passwordHash: '$2b$10$s9w78xL9z9iK8L...sampleSiswaHash',
      nama: 'Budi Santoso (Siswa)',
    },
  });
  console.log('✅ Siswa Seeded:', siswa.email);

  // 3. Seed 1 LearningPath dengan 2 Kelas, tiap Kelas 2 Modul, & 1 Quiz
  const pathWeb = await prisma.learningPath.create({
    data: {
      nama: 'Learning Path 1: Full-Stack Web Development',
      deskripsi: 'Menguasai pembuatan web modern dari nol: HTML5, CSS3, JavaScript, React, Node.js, hingga deployment.',
      harga: 499000,
      thumbnail: 'https://kodemik.com/images/fullstack-path.png',
      kelas: {
        create: [
          {
            nama: 'Kelas 1 — Fondasi Web Development & Version Control',
            deskripsi: 'Membangun pemahaman cara kerja web dan halaman statis HTML/CSS.',
            urutan: 1,
            level: 'BEGINNER',
            modul: {
              create: [
                {
                  judul: 'Modul 1.1 — Cara Kerja Internet & Web',
                  kontenMateri: '# Cara Kerja Internet & Web\n\nInternet adalah jaringan global komputer. Komunikasi menggunakan model Client-Server via protokol HTTP/HTTPS.',
                  urutan: 1,
                  quiz: {
                    create: {
                      pertanyaan: 'Protokol apakah yang digunakan browser untuk meminta file HTML secara terenkripsi aman?',
                      pilihanJawaban: JSON.stringify(['HTTP', 'HTTPS', 'FTP', 'SSH']),
                      jawabanBenar: 1, // Index 1 -> HTTPS
                    },
                  },
                },
                {
                  judul: 'Modul 1.2 — HTML5 Fundamentals & Semantik',
                  kontenMateri: '# HTML5 Fundamentals\n\nMemahami tag semantik HTML5 seperti `<header>`, `<nav>`, `<main>`, `<article>`, dan `<footer>`.',
                  urutan: 2,
                },
              ],
            },
          },
          {
            nama: 'Kelas 2 — JavaScript Fundamentals',
            deskripsi: 'Logika pemrograman dasar, manipulasi DOM interaktif, dan Asynchronous JavaScript.',
            urutan: 2,
            level: 'BEGINNER',
            modul: {
              create: [
                {
                  judul: 'Modul 2.1 — Dasar Pemrograman JavaScript',
                  kontenMateri: '# Dasar Pemrograman JS\n\nMemahami variabel `let` / `const`, tipe data, operator, dan struktur kontrol `if-else` & `loop`.',
                  urutan: 1,
                },
                {
                  judul: 'Modul 2.2 — DOM Manipulation & Event Handling',
                  kontenMateri: '# DOM Manipulation\n\nMenseleksi elemen DOM dan menangani interaksi user melalui event listener `addEventListener`.',
                  urutan: 2,
                },
              ],
            },
          },
        ],
      },
    },
  });
  console.log('✅ LearningPath & Kelas/Modul/Quiz Seeded:', pathWeb.nama);

  // 4. Seed Pendaftaran (Enrollment) Siswa ke LearningPath
  const pendaftaran = await prisma.pendaftaran.create({
    data: {
      siswaId: siswa.id,
      learningPathId: pathWeb.id,
      statusPembayaran: 'LUNAS',
    },
  });
  console.log('✅ Pendaftaran Seeded: ID', pendaftaran.id);

  console.log('🎉 Seeding Completed Successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
