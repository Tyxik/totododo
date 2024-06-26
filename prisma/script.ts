const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()


async function main() {
    const user = await prisma.user.create({
        data: {
            firstname:'spíš Alice',
            lastname:'fakt Alice',
        },
    })

    console.log(user)
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
