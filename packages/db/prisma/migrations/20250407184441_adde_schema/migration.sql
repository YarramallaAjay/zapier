/*
  Warnings:

  - Made the column `createdById` on table `Team` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "createdById" SET NOT NULL,
ALTER COLUMN "createdById" SET DATA TYPE TEXT;
