/*
  Warnings:

  - The primary key for the `App` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AuthMethods` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AvailableAuthMethods` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TokenStore` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[createdById]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "App" DROP CONSTRAINT "App_teamId_fkey";

-- DropForeignKey
ALTER TABLE "AuthMethods" DROP CONSTRAINT "AuthMethods_appId_fkey";

-- DropForeignKey
ALTER TABLE "AuthMethods" DROP CONSTRAINT "AuthMethods_authId_fkey";

-- DropForeignKey
ALTER TABLE "AvailableActions" DROP CONSTRAINT "AvailableActions_appId_fkey";

-- DropForeignKey
ALTER TABLE "AvailableTriggers" DROP CONSTRAINT "AvailableTriggers_appId_fkey";

-- DropForeignKey
ALTER TABLE "TokenStore" DROP CONSTRAINT "TokenStore_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Zap" DROP CONSTRAINT "Zap_userId_fkey";

-- AlterTable
ALTER TABLE "App" DROP CONSTRAINT "App_pkey",
ALTER COLUMN "teamId" SET DATA TYPE TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "App_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "App_id_seq";

-- AlterTable
ALTER TABLE "AuthMethods" DROP CONSTRAINT "AuthMethods_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "appId" SET DATA TYPE TEXT,
ALTER COLUMN "authId" SET DATA TYPE TEXT,
ADD CONSTRAINT "AuthMethods_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "AuthMethods_id_seq";

-- AlterTable
ALTER TABLE "AvailableActions" ALTER COLUMN "appId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "AvailableAuthMethods" DROP CONSTRAINT "AvailableAuthMethods_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "AvailableAuthMethods_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "AvailableAuthMethods_id_seq";

-- AlterTable
ALTER TABLE "AvailableTriggers" ALTER COLUMN "appId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Team_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Team_id_seq";

-- AlterTable
ALTER TABLE "TokenStore" DROP CONSTRAINT "TokenStore_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "TokenStore_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TokenStore_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "teamId" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "Zap" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Team_createdById_key" ON "Team"("createdById");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthMethods" ADD CONSTRAINT "AuthMethods_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthMethods" ADD CONSTRAINT "AuthMethods_authId_fkey" FOREIGN KEY ("authId") REFERENCES "AvailableAuthMethods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableTriggers" ADD CONSTRAINT "AvailableTriggers_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableActions" ADD CONSTRAINT "AvailableActions_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokenStore" ADD CONSTRAINT "TokenStore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
