/*
  Warnings:

  - Added the required column `AppId` to the `AvailableActions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `AppId` to the `AvailableTriggers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableActions" ADD COLUMN     "AppId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AvailableTriggers" ADD COLUMN     "AppId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "App" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "App_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TokenStore" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "TokenStore_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AvailableActions" ADD CONSTRAINT "AvailableActions_AppId_fkey" FOREIGN KEY ("AppId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableTriggers" ADD CONSTRAINT "AvailableTriggers_AppId_fkey" FOREIGN KEY ("AppId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokenStore" ADD CONSTRAINT "TokenStore_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
