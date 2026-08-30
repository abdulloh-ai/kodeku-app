import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Prisma Seeding for Kodemik LMS...');

  // Seed Contoh Admin
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
