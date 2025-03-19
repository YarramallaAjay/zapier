/*
  Warnings:

  - The primary key for the `AvailableAuthMethods` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `appId` on the `AvailableAuthMethods` table. All the data in the column will be lost.
  - The `id` column on the `AvailableAuthMethods` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `auth` to the `AvailableAuthMethods` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AvailableAuthMethods" DROP CONSTRAINT "AvailableAuthMethods_appId_fkey";

-- AlterTable
ALTER TABLE "AvailableAuthMethods" DROP CONSTRAINT "AvailableAuthMethods_pkey",
DROP COLUMN "appId",
ADD COLUMN     "auth" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "AvailableAuthMethods_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "AuthMethods" (
    "id" SERIAL NOT NULL,
    "appId" INTEGER NOT NULL,
    "authId" INTEGER NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "AuthMethods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuthMethods" ADD CONSTRAINT "AuthMethods_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthMethods" ADD CONSTRAINT "AuthMethods_authId_fkey" FOREIGN KEY ("authId") REFERENCES "AvailableAuthMethods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
