/*
  Warnings:

  - You are about to drop the column `latitude` on the `Canteen` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Canteen` table. All the data in the column will be lost.
  - Added the required column `coordinates` to the `Canteen` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Canteen" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "canteenName" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "coordinates" TEXT NOT NULL,
    "social" BOOLEAN NOT NULL,
    "universityId" TEXT,
    "monday" TEXT,
    "tuesday" TEXT,
    "wednesday" TEXT,
    "thursday" TEXT,
    "friday" TEXT,
    "saturday" TEXT,
    "sunday" TEXT,
    CONSTRAINT "Canteen_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Canteen" ("canteenName", "capacity", "friday", "id", "monday", "saturday", "social", "sunday", "thursday", "tuesday", "universityId", "wednesday") SELECT "canteenName", "capacity", "friday", "id", "monday", "saturday", "social", "sunday", "thursday", "tuesday", "universityId", "wednesday" FROM "Canteen";
DROP TABLE "Canteen";
ALTER TABLE "new_Canteen" RENAME TO "Canteen";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
