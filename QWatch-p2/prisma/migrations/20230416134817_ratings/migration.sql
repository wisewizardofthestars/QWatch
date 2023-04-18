-- CreateTable
CREATE TABLE "CanteenReview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "canteenId" TEXT NOT NULL,
    "canteenRating" INTEGER NOT NULL,
    "foodRating" INTEGER NOT NULL,
    "comment" TEXT,
    "universityId" TEXT,
    CONSTRAINT "CanteenReview_canteenId_fkey" FOREIGN KEY ("canteenId") REFERENCES "Canteen" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CanteenReview_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
