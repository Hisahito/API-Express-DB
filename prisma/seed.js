const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const missionCommander1 = await prisma.missionCommander.upsert({
      where: { name: 'Carlo' },
      update: {},
      create: {
        name: 'Carlo',
				username: 'Estevez',
				mainStack: 'Backend',
        currentEnrollment: false,
        hasAzureCertification: false
      },
    });

    const missionCommander2 = await prisma.missionCommander.upsert({
      where: { name: 'Fer' },
      update: {},
      create: {
        name: 'Fer',
				username: 'Martinez',
				mainStack: 'onboarding',
        currentEnrollment: true,
        hasAzureCertification: true
      },
    });

    const missionCommander3 = await prisma.missionCommander.upsert({
      where: { name: 'Rodrigo' },
      update: {},
      create: {
        name: 'Rodrigo',
				username: 'Fernandez',
				mainStack: 'Frontend',
        currentEnrollment: true,
        hasAzureCertification: true
      },
    });

    const missionCommander4 = await prisma.missionCommander.upsert({
      where: { name: 'Isai' },
      update: {},
      create: {
        name: 'Isai',
        username: 'Morales',
        mainStack: 'Blockend',
        currentEnrollment: true,
        hasAzureCertification: true
      },
    });

    
    console.log('Create 4 missionsCommanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();