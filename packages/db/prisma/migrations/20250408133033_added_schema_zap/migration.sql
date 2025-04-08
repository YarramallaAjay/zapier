/*
  Warnings:

  - Added the required column `triggId` to the `Zap` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_zapId_fkey";

-- AlterTable
ALTER TABLE "Zap" ADD COLUMN     "triggId" TEXT NOT NULL;
