/*
  Warnings:

  - You are about to drop the column `HP` on the `character` table. All the data in the column will be lost.
  - You are about to drop the column `characterName` on the `character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `character` DROP COLUMN `HP`,
    DROP COLUMN `characterName`,
    ADD COLUMN `baseAC` INTEGER NULL,
    ADD COLUMN `baseThac0` INTEGER NULL,
    ADD COLUMN `bonuses` INTEGER NULL,
    ADD COLUMN `character` VARCHAR(191) NULL,
    ADD COLUMN `classBonusAC` INTEGER NULL,
    ADD COLUMN `classBonusThac0` INTEGER NULL,
    ADD COLUMN `level` INTEGER NULL;
