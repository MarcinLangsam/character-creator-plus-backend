-- CreateTable
CREATE TABLE `ClericSpells` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `school` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,
    `descriptionFile` VARCHAR(191) NOT NULL,
    `iconFile` VARCHAR(191) NOT NULL,
    `hexData` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
