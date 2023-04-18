import { PrismaClient } from '@prisma/client'


export default async function create_user(email, name, password) {

    const db = new PrismaClient()

    db.user.create({
        data: {
            email: email,
            name: name,
            password: password,
        }
    }).catch((e) => { console.log(e); return "ERROR: Can't create user" });

    db.$disconnect();

    return true;
}

