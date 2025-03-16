/*
  Warnings:

  - You are about to drop the column `token` on the `TokenStore` table. All the data in the column will be lost.
  - Added the required column `accestoken` to the `TokenStore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshtoken` to the `TokenStore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TokenStore" DROP COLUMN "token",
ADD COLUMN     "accestoken" TEXT NOT NULL,
ADD COLUMN     "refreshtoken" TEXT NOT NULL;
