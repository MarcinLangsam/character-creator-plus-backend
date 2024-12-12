/*
  Warnings:

  - You are about to drop the column `Rozstawianie_Pulapek` on the `character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `character` DROP COLUMN `Rozstawianie_Pulapek`,
    ADD COLUMN `Rozstawianie_PulapekBonus` INTEGER NULL;
