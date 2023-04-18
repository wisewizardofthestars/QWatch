/*
  Warnings:

  - You are about to drop the column `universityId` on the `CanteenReview` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CanteenReview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "canteenId" TEXT NOT NULL,
    "canteenRating" INTEGER NOT NULL,
    "foodRating" INTEGER NOT NULL,
    "comment" TEXT,
    CONSTRAINT "CanteenReview_canteenId_fkey" FOREIGN KEY ("canteenId") REFERENCES "Canteen" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CanteenReview" ("canteenId", "canteenRating", "comment", "foodRating", "id") SELECT "canteenId", "canteenRating", "comment", "foodRating", "id" FROM "CanteenReview";
DROP TABLE "CanteenReview";
ALTER TABLE "new_CanteenReview" RENAME TO "CanteenReview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
