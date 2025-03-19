/*
  Warnings:

  - You are about to drop the column `appId` on the `TokenStore` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TokenStore" DROP CONSTRAINT "TokenStore_appId_fkey";

-- AlterTable
ALTER TABLE "TokenStore" DROP COLUMN "appId";

-- CreateTable
CREATE TABLE "AvailableAuthMethods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "appId" INTEGER NOT NULL,

    CONSTRAINT "AvailableAuthMethods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AvailableAuthMethods" ADD CONSTRAINT "AvailableAuthMethods_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
