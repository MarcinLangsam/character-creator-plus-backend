/*
  Warnings:

  - You are about to drop the column `level` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `constitution` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `intelligence` table. All the data in the column will be lost.
  - You are about to drop the column `lore` on the `intelligence` table. All the data in the column will be lost.
  - You are about to drop the column `maxSpellLevel` on the `intelligence` table. All the data in the column will be lost.
  - You are about to drop the column `spellPerLevel` on the `intelligence` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `strength` table. All the data in the column will be lost.
  - You are about to drop the column `findHalfWordsBonus` on the `wisdom` table. All the data in the column will be lost.
  - You are about to drop the column `healBonus` on the `wisdom` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `wisdom` table. All the data in the column will be lost.
  - You are about to drop the column `wisdomBonus` on the `wisdom` table. All the data in the column will be lost.
  - Added the required column `value` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Constitution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `INTlore` to the `Intelligence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `INTmaxSpellLevel` to the `Intelligence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `INTspellPerLevel` to the `Intelligence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Intelligence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Strength` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraSpellSlotlv1` to the `Wisdom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraSpellSlotlv2` to the `Wisdom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraSpellSlotlv3` to the `Wisdom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraSpellSlotlv4` to the `Wisdom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Wisdom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agility` DROP COLUMN `level`,
    ADD COLUMN `value` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `constitution` DROP COLUMN `level`,
    ADD COLUMN `value` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `intelligence` DROP COLUMN `level`,
    DROP COLUMN `lore`,
    DROP COLUMN `maxSpellLevel`,
    DROP COLUMN `spellPerLevel`,
    ADD COLUMN `INTlore` INTEGER NOT NULL,
    ADD COLUMN `INTmaxSpellLevel` INTEGER NOT NULL,
    ADD COLUMN `INTspellPerLevel` INTEGER NOT NULL,
    ADD COLUMN `value` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `strength` DROP COLUMN `level`,
    ADD COLUMN `value` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `wisdom` DROP COLUMN `findHalfWordsBonus`,
    DROP COLUMN `healBonus`,
    DROP COLUMN `level`,
    DROP COLUMN `wisdomBonus`,
    ADD COLUMN `extraSpellSlotlv1` INTEGER NOT NULL,
    ADD COLUMN `extraSpellSlotlv2` INTEGER NOT NULL,
    ADD COLUMN `extraSpellSlotlv3` INTEGER NOT NULL,
    ADD COLUMN `extraSpellSlotlv4` INTEGER NOT NULL,
    ADD COLUMN `value` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Charisma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` INTEGER NOT NULL,
    `reaction` INTEGER NOT NULL,
    `buyDiscount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
