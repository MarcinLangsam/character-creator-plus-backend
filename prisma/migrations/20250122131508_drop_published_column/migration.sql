/*
  Warnings:

  - You are about to drop the column `character` on the `character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `character` DROP COLUMN `character`,
    ADD COLUMN `aligment` VARCHAR(191) NULL;
