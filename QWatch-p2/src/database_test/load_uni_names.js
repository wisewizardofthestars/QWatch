import { PrismaClient } from '@prisma/client'


export default async function load_uni_names() {

    const db = new PrismaClient()

    const universities = await db.university.findMany({
        where: {},
        select: {
            name: true,
            shortName: true,
            imageURL: true,
        }
    }
    ).catch((e) => { console.log(e); return "ERROR: Can't find universities" });

    db.$disconnect();

    return universities;
}

