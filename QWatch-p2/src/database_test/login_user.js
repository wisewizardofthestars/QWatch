import { PrismaClient } from '@prisma/client'


export default async function login_user(_email, _password) {

    const db = new PrismaClient()

    const user_info = await db.user.findFirst({
        where: {
            email: _email,
            password: _password,
        }
    }).catch((e) => { console.log(e); return "ERROR: can't look for user"; });

    if (!user_info) return false;

    db.$disconnect();

    return (user_info.id, user_info.name, user_info.university);
}
