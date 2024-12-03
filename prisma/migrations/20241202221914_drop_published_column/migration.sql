-- CreateTable
CREATE TABLE `ThievingAbilitiesToSubclass` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subclass` VARCHAR(191) NOT NULL,
    `Otwieranie_Zamkow` INTEGER NOT NULL,
    `Kradziez_Kieszonkowa` INTEGER NOT NULL,
    `Ciche_Poruszanie` INTEGER NOT NULL,
    `Krycie_W_Cieniu` INTEGER NOT NULL,
    `Znajdywanie_Pulapek` INTEGER NOT NULL,
    `Wykrywanie_Iluzji` INTEGER NOT NULL,
    `Rozstawianie_Pulapek` INTEGER NOT NULL,
    `skillPointsThief` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
