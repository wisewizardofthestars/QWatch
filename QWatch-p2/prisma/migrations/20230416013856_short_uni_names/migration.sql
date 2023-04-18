/*
  Warnings:

  - A unique constraint covering the columns `[shortName]` on the table `University` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "University" ADD COLUMN "shortName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "University_shortName_key" ON "University"("shortName");
