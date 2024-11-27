/*
  Warnings:

  - You are about to drop the column `hideInShadowsBonus` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `lockpickingBonus` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `moveSilentlyBonus` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `settingTrapsBonus` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `stealBonus` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `trapfindingBonus` on the `agility` table. All the data in the column will be lost.
  - Added the required column `Ciche_Poruszanie` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Kradziez_Kieszonkowa` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Krycie_W_Cieniu` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Otwieranie_Zamkow` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rozstawianie_Pulapek` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Znajdywanie_Pulapek` to the `Agility` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agility` DROP COLUMN `hideInShadowsBonus`,
    DROP COLUMN `lockpickingBonus`,
    DROP COLUMN `moveSilentlyBonus`,
    DROP COLUMN `settingTrapsBonus`,
    DROP COLUMN `stealBonus`,
    DROP COLUMN `trapfindingBonus`,
    ADD COLUMN `Ciche_Poruszanie` INTEGER NOT NULL,
    ADD COLUMN `Kradziez_Kieszonkowa` INTEGER NOT NULL,
    ADD COLUMN `Krycie_W_Cieniu` INTEGER NOT NULL,
    ADD COLUMN `Otwieranie_Zamkow` INTEGER NOT NULL,
    ADD COLUMN `Rozstawianie_Pulapek` INTEGER NOT NULL,
    ADD COLUMN `Znajdywanie_Pulapek` INTEGER NOT NULL;
