import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const university1 = await db.university.findFirst(
    {
        where: {
            name: "Universidade de Coimbra"
        },
        include: {
            canteens: true
        }


    }
).catch((e) => { console.log(e) });

db.$disconnect();

