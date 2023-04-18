import { PrismaClient } from '@prisma/client'


export default async function canteens_by_university(university_name) {

    const db = new PrismaClient();


    const university = await db.university.findFirst({
        where: {
            OR: 
                [{ name: university_name }, { shortName: university_name }],
            
        },
        include: {
            canteens: {
                select: {
                    id: true,
                    capacity: true,
                    canteenName: true,
                    coordinates: true,
                    monday: true,
                    pplPresent: true,
                    totalPpl: true,
                }
            },
        }
    }).catch((e) => { console.log(e); return "ERROR: Can't create user" });
    

    if (university === null) {
        return "ERROR: University not found";
    }
    db.$disconnect();
    return university.canteens;
}

