/*
  Warnings:

  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropTable
DROP TABLE `post`;

-- DropTable
DROP TABLE `profile`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Strength` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` INTEGER NOT NULL,
    `meleeThac0` INTEGER NOT NULL,
    `dmgBonus` INTEGER NOT NULL,
    `bashing` INTEGER NOT NULL,
    `weight` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agility` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` INTEGER NOT NULL,
    `rangedThac0` INTEGER NOT NULL,
    `ac` INTEGER NOT NULL,
    `stealBonus` INTEGER NOT NULL,
    `lockpickingBonus` INTEGER NOT NULL,
    `trapfindingBonus` INTEGER NOT NULL,
    `moveSilentlyBonus` INTEGER NOT NULL,
    `hideInShadowsBonus` INTEGER NOT NULL,
    `settingTrapsBonus` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Constitution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` INTEGER NOT NULL,
    `hpPerLevelBonus` INTEGER NOT NULL,
    `intoxicationPerDrink` INTEGER NOT NULL,
    `fatigue` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Intelligence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` INTEGER NOT NULL,
    `maxSpellLevel` INTEGER NOT NULL,
    `spellPerLevel` INTEGER NOT NULL,
    `scribeSuccessRate` INTEGER NOT NULL,
    `lore` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Wisdom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` INTEGER NOT NULL,
    `wisdomBonus` INTEGER NOT NULL,
    `findHalfWordsBonus` INTEGER NOT NULL,
    `healBonus` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gender` VARCHAR(191) NULL,
    `portrait` VARCHAR(191) NULL,
    `race` VARCHAR(191) NULL,
    `classes` VARCHAR(191) NULL,
    `subclasses` VARCHAR(191) NULL,
    `characterName` VARCHAR(191) NULL,
    `strength` INTEGER NULL,
    `agility` INTEGER NULL,
    `constitution` INTEGER NULL,
    `intelligence` INTEGER NULL,
    `wisdom` INTEGER NULL,
    `charisma` INTEGER NULL,
    `skillsId` INTEGER NULL,
    `skillsThiefId` INTEGER NULL,
    `melleThac0` INTEGER NULL,
    `dmgBonus` INTEGER NULL,
    `bashing` INTEGER NULL,
    `weight` INTEGER NULL,
    `rangedThac0` INTEGER NULL,
    `AC` INTEGER NULL,
    `Kradziez_KieszonkowaBonus` INTEGER NULL,
    `Otwieranie_ZamkowBonus` INTEGER NULL,
    `Znajdywanie_PulapekBonus` INTEGER NULL,
    `Ciche_PoruszanieBonus` INTEGER NULL,
    `Krycie_W_CieniuBonus` INTEGER NULL,
    `Rozstawianie_Pulapek` INTEGER NULL,
    `HPdice` INTEGER NULL,
    `HP` INTEGER NULL,
    `HPperLvBonus` INTEGER NULL,
    `IntoxicationPerDrink` INTEGER NULL,
    `fatigue` INTEGER NULL,
    `INTmaxSpellLevel` INTEGER NULL,
    `INTspellPerLevel` INTEGER NULL,
    `scribeSuccessRate` INTEGER NULL,
    `INTlore` INTEGER NULL,
    `extraSpellSlotlv1` INTEGER NULL,
    `extraSpellSlotlv2` INTEGER NULL,
    `extraSpellSlotlv3` INTEGER NULL,
    `extraSpellSlotlv4` INTEGER NULL,
    `WISlore` INTEGER NULL,
    `reaction` INTEGER NULL,
    `buyDiscount` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeaponProficiencys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `MieczePoltorareczne` INTEGER NOT NULL,
    `MieczeDlugie` INTEGER NOT NULL,
    `MieczeKrotkie` INTEGER NOT NULL,
    `Topory` INTEGER NOT NULL,
    `MieczeDworeczne` INTEGER NOT NULL,
    `Katana` INTEGER NOT NULL,
    `Scimtar` INTEGER NOT NULL,
    `Sztylety` INTEGER NOT NULL,
    `MlotyWojenne` INTEGER NOT NULL,
    `Maczugi` INTEGER NOT NULL,
    `Wlocznie` INTEGER NOT NULL,
    `Halabarda` INTEGER NOT NULL,
    `Korbacze` INTEGER NOT NULL,
    `Wiekiery` INTEGER NOT NULL,
    `KijeBojowe` INTEGER NOT NULL,
    `Kusze` INTEGER NOT NULL,
    `DlugieLuki` INTEGER NOT NULL,
    `KrotkieLuki` INTEGER NOT NULL,
    `Strzalki` INTEGER NOT NULL,
    `Proce` INTEGER NOT NULL,
    `StylBroniDworecznych` INTEGER NOT NULL,
    `StylMieczaITarczy` INTEGER NOT NULL,
    `StylMieczaJednorecznego` INTEGER NOT NULL,
    `StylDwochBroni` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ThievingAbilities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Otwieranie_Zamkow` INTEGER NOT NULL,
    `Kradziez_Kieszonkowa` INTEGER NOT NULL,
    `Ciche_Poruszanie` INTEGER NOT NULL,
    `Krycie_W_Cieniu` INTEGER NOT NULL,
    `Znajdywanie_Pulapek` INTEGER NOT NULL,
    `Wykrywanie_Iluzji` INTEGER NOT NULL,
    `Rozstawianie_Pulapek` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_skillsId_fkey` FOREIGN KEY (`skillsId`) REFERENCES `WeaponProficiencys`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_skillsThiefId_fkey` FOREIGN KEY (`skillsThiefId`) REFERENCES `ThievingAbilities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
