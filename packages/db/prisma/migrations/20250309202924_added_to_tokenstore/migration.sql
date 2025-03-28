/*
  Warnings:

  - Added the required column `provider` to the `TokenStore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TokenStore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TokenStore" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "provider" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
