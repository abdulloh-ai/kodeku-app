import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.siswa.deleteMany({
    where: {
      OR: [
        { nama: { contains: 'Budi' } },
        { email: 'siswa@kodemik.com' },
        { email: 'budi@gmail.com' },
      ],
    },
  });

  console.log('✅ Berhasil menghapus siswa contoh (Budi Santoso):', result.count, 'data terhapus.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
