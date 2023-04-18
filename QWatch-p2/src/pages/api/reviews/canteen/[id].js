import { PrismaClient } from '@prisma/client'


export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const id = req.query.id

    // get data JSON enconded
    const data = JSON.parse(req.body);
    const canteenRating = parseInt(data.canteenRating);
    const foodRating = parseInt(data.foodRating);


    const user = await prisma.canteenReview.create({
        data: { canteenId: id,
                canteenRating: canteenRating,
                foodRating: foodRating,
            },
    });
    res.status(200).json({ status: "success" })

    prisma.$disconnect();

}

