/*
  Warnings:

  - You are about to drop the column `Ciche_Poruszanie` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `Kradziez_Kieszonkowa` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `Krycie_W_Cieniu` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `Otwieranie_Zamkow` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `Rozstawianie_Pulapek` on the `agility` table. All the data in the column will be lost.
  - You are about to drop the column `Znajdywanie_Pulapek` on the `agility` table. All the data in the column will be lost.
  - Added the required column `Ciche_PoruszanieBonus` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Kradziez_KieszonkowaBonus` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Krycie_W_CieniuBonus` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Otwieranie_ZamkowBonus` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rozstawianie_PulapekBonus` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Znajdywanie_PulapekBonus` to the `Agility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WISlore` to the `Wisdom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agility` DROP COLUMN `Ciche_Poruszanie`,
    DROP COLUMN `Kradziez_Kieszonkowa`,
    DROP COLUMN `Krycie_W_Cieniu`,
    DROP COLUMN `Otwieranie_Zamkow`,
    DROP COLUMN `Rozstawianie_Pulapek`,
    DROP COLUMN `Znajdywanie_Pulapek`,
    ADD COLUMN `Ciche_PoruszanieBonus` INTEGER NOT NULL,
    ADD COLUMN `Kradziez_KieszonkowaBonus` INTEGER NOT NULL,
    ADD COLUMN `Krycie_W_CieniuBonus` INTEGER NOT NULL,
    ADD COLUMN `Otwieranie_ZamkowBonus` INTEGER NOT NULL,
    ADD COLUMN `Rozstawianie_PulapekBonus` INTEGER NOT NULL,
    ADD COLUMN `Znajdywanie_PulapekBonus` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `wisdom` ADD COLUMN `WISlore` INTEGER NOT NULL;
