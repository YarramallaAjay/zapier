/*
  Warnings:

  - Added the required column `teamId` to the `AvailableActions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `AvailableActions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `AvailableTriggers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `AvailableTriggers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableActions" ADD COLUMN     "configMetadata" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "teamId" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AvailableTriggers" ADD COLUMN     "configMetadata" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "teamId" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "team_id" INTEGER;

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableActions" ADD CONSTRAINT "AvailableActions_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableTriggers" ADD CONSTRAINT "AvailableTriggers_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
