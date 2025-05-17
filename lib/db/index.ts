import { PrismaClient } from 'D:/Chai_aur_Code_Project/Me_Drop/medrop/generated/prisma';

const prisma = new PrismaClient()

async function main() {

      const allUsers = await prisma.file.findMany()
  console.log(allUsers)

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })