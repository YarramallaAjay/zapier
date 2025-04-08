/*
  Warnings:

  - You are about to drop the column `triggId` on the `Zap` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Zap" DROP COLUMN "triggId";

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
