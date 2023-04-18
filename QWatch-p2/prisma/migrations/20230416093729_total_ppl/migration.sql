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
    "pplPresent" INTEGER NOT NULL DEFAULT 0,
    "totalPpl" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Canteen_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Canteen" ("canteenName", "capacity", "coordinates", "friday", "id", "monday", "pplPresent", "saturday", "social", "sunday", "thursday", "tuesday", "universityId", "wednesday") SELECT "canteenName", "capacity", "coordinates", "friday", "id", "monday", "pplPresent", "saturday", "social", "sunday", "thursday", "tuesday", "universityId", "wednesday" FROM "Canteen";
DROP TABLE "Canteen";
ALTER TABLE "new_Canteen" RENAME TO "Canteen";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
