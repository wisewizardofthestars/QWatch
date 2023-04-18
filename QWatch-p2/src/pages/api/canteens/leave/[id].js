import { PrismaClient } from '@prisma/client'


export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const id = req.query.id

    const user = await prisma.canteen.update({
        where: { id: id },
        data: { pplPresent: { decrement: 1 }, },
    });
    res.status(200).json({ status: "success" })
    prisma.$disconnect();
}

