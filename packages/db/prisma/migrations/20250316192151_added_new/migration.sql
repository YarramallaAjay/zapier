/*
  Warnings:

  - The primary key for the `App` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `App` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `teamId` on the `AvailableActions` table. All the data in the column will be lost.
  - You are about to drop the column `accestoken` on the `TokenStore` table. All the data in the column will be lost.
  - You are about to drop the column `refreshtoken` on the `TokenStore` table. All the data in the column will be lost.
  - Added the required column `teamId` to the `App` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `AppId` on the `AvailableActions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `AppId` on the `AvailableTriggers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `appid` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accessToken` to the `TokenStore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appId` to the `TokenStore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshToken` to the `TokenStore` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AvailableActions" DROP CONSTRAINT "AvailableActions_AppId_fkey";

-- DropForeignKey
ALTER TABLE "AvailableActions" DROP CONSTRAINT "AvailableActions_teamId_fkey";

-- DropForeignKey
ALTER TABLE "AvailableTriggers" DROP CONSTRAINT "AvailableTriggers_AppId_fkey";

-- DropForeignKey
ALTER TABLE "AvailableTriggers" DROP CONSTRAINT "AvailableTriggers_teamId_fkey";

-- DropIndex
DROP INDEX "Trigger_zapId_key";

-- AlterTable
ALTER TABLE "App" DROP CONSTRAINT "App_pkey",
ADD COLUMN     "teamId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "App_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "AvailableActions" DROP COLUMN "teamId",
DROP COLUMN "AppId",
ADD COLUMN     "AppId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "AvailableTriggers" DROP COLUMN "AppId",
ADD COLUMN     "AppId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "appid" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TokenStore" DROP COLUMN "accestoken",
DROP COLUMN "refreshtoken",
ADD COLUMN     "accessToken" TEXT NOT NULL,
ADD COLUMN     "appId" INTEGER NOT NULL,
ADD COLUMN     "refreshToken" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "AvailableActions" ADD CONSTRAINT "AvailableActions_AppId_fkey" FOREIGN KEY ("AppId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableTriggers" ADD CONSTRAINT "AvailableTriggers_AppId_fkey" FOREIGN KEY ("AppId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokenStore" ADD CONSTRAINT "TokenStore_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
