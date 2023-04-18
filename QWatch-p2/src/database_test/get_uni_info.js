import { PrismaClient } from '@prisma/client'


export default async function get_uni_info(name) {

    const db = new PrismaClient()


    const university = await db.university.findFirst({
        where: {
            OR: [{name: name}, {shortName: name}],
        },
        select: {
            name: true,
            shortName: true,
            imageURL: true,
        }
    }
    ).catch((e) => { console.log(e); return "ERROR: Can't find universities" });

    db.$disconnect();

    return university;
}

