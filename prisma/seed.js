const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const missionCommander1 = await prisma.newTable.upsert({
      where: { name: 'Carlo' },
      update: {},
      create: {
        name: 'Carlo',
				lang: 'Estevez',
				missionCommander: 'Backend',
        enrollments: 1
      },
    });

    const missionCommander2 = await prisma.newTable.upsert({
      where: { name: 'Fer' },
      update: {},
      create: {
        name: 'Fer',
				lang: 'Martinez',
				missionCommander: 'onboarding',
        enrollments: 2
      },
    });

    const missionCommander3 = await prisma.newTable.upsert({
      where: { name: 'Rodrigo' },
      update: {},
      create: {
        name: 'Rodrigo',
				lang: 'Fernandez',
				missionCommander: 'Frontend',
        enrollments: 3
      },
    });

    
    console.log('Create 3 missionsCommanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();