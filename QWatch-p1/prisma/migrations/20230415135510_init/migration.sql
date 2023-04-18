-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Canteen" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "canteenName" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "social" BOOLEAN NOT NULL,
    "universityId" TEXT,
    CONSTRAINT "Canteen_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "University" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UniversityToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_UniversityToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "University" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_UniversityToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "University_name_key" ON "University"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_UniversityToUser_AB_unique" ON "_UniversityToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_UniversityToUser_B_index" ON "_UniversityToUser"("B");
