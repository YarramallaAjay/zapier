/*
  Warnings:

  - You are about to drop the column `actionId` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `AppId` on the `AvailableActions` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `AvailableActions` table. All the data in the column will be lost.
  - You are about to drop the column `auth` on the `AvailableAuthMethods` table. All the data in the column will be lost.
  - You are about to drop the column `AppId` on the `AvailableTriggers` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `AvailableTriggers` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `AvailableTriggers` table. All the data in the column will be lost.
  - You are about to drop the column `appid` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `TokenStore` table. All the data in the column will be lost.
  - You are about to drop the column `triggerId` on the `Trigger` table. All the data in the column will be lost.
  - You are about to drop the column `team_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `triggerId` on the `Zap` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[zapId]` on the table `Trigger` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `actionType` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appId` to the `AvailableActions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appId` to the `AvailableTriggers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `TokenStore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `triggerType` to the `Trigger` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_actionId_fkey";

-- DropForeignKey
ALTER TABLE "AvailableActions" DROP CONSTRAINT "AvailableActions_AppId_fkey";

-- DropForeignKey
ALTER TABLE "AvailableTriggers" DROP CONSTRAINT "AvailableTriggers_AppId_fkey";

-- DropForeignKey
ALTER TABLE "TokenStore" DROP CONSTRAINT "TokenStore_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_triggerId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_team_id_fkey";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "actionId",
ADD COLUMN     "actionType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AvailableActions" DROP COLUMN "AppId",
DROP COLUMN "image",
ADD COLUMN     "appId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "AvailableAuthMethods" DROP COLUMN "auth";

-- AlterTable
ALTER TABLE "AvailableTriggers" DROP COLUMN "AppId",
DROP COLUMN "image",
DROP COLUMN "teamId",
ADD COLUMN     "appId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "appid";

-- AlterTable
ALTER TABLE "TokenStore" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "triggerId",
ADD COLUMN     "triggerType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "team_id",
ADD COLUMN     "teamId" INTEGER;

-- AlterTable
ALTER TABLE "Zap" DROP COLUMN "triggerId";

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_zapId_key" ON "Trigger"("zapId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_triggerType_fkey" FOREIGN KEY ("triggerType") REFERENCES "AvailableTriggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_actionType_fkey" FOREIGN KEY ("actionType") REFERENCES "AvailableActions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableTriggers" ADD CONSTRAINT "AvailableTriggers_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableActions" ADD CONSTRAINT "AvailableActions_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokenStore" ADD CONSTRAINT "TokenStore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
