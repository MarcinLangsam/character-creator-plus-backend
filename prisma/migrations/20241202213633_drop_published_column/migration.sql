-- CreateTable
CREATE TABLE `ProficiencysToSubclass` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subclass` VARCHAR(191) NOT NULL,
    `MieczePoltorareczne` INTEGER NOT NULL,
    `MieczeDlugie` INTEGER NOT NULL,
    `MieczeKrotkie` INTEGER NOT NULL,
    `Topory` INTEGER NOT NULL,
    `MieczeObureczne` INTEGER NOT NULL,
    `Katany` INTEGER NOT NULL,
    `SejmitarWakizashiNinjaTo` INTEGER NOT NULL,
    `Sztylety` INTEGER NOT NULL,
    `MlotyBojowe` INTEGER NOT NULL,
    `Maczugi` INTEGER NOT NULL,
    `Wlocznie` INTEGER NOT NULL,
    `Halabarda` INTEGER NOT NULL,
    `CepyBojoweMorgernszterny` INTEGER NOT NULL,
    `Wiekiery` INTEGER NOT NULL,
    `Kije` INTEGER NOT NULL,
    `Kusze` INTEGER NOT NULL,
    `DlugieLuki` INTEGER NOT NULL,
    `KrotkieLuki` INTEGER NOT NULL,
    `Strzalki` INTEGER NOT NULL,
    `Proce` INTEGER NOT NULL,
    `StylWalkiBroniaDwureczna` INTEGER NOT NULL,
    `StylWalkiMieczemITarcza` INTEGER NOT NULL,
    `StylWalkiJednaBronia` INTEGER NOT NULL,
    `StylWalkiDwiemaBronmi` INTEGER NOT NULL,
    `skillPoints` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;