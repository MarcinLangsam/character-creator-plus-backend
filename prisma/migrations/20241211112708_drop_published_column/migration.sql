/*
  Warnings:

  - You are about to drop the column `Katana` on the `weaponproficiencys` table. All the data in the column will be lost.
  - You are about to drop the column `KijeBojowe` on the `weaponproficiencys` table. All the data in the column will be lost.
  - You are about to drop the column `Korbacze` on the `weaponproficiencys` table. All the data in the column will be lost.
  - You are about to drop the column `MieczeDworeczne` on the `weaponproficiencys` table. All the data in the column will be lost.
  - You are about to drop the column `MlotyWojenne` on the `weaponproficiencys` table. All the data in the column will be lost.
  - You are about to drop the column `Scimtar` on the `weaponproficiencys` table. All the data in the column will be lost.
  - You are about to drop the column `StylBroniDworecznych` on the `weaponproficiencys` table. All the data in the column will be lost.
  - You are about to drop the column `StylDwochBroni` on the `weaponproficiencys` table. All the data in the column will be lost.
  - You are about to drop the column `StylMieczaITarczy` on the `weaponproficiencys` table. All the data in the column will be lost.
  - You are about to drop the column `StylMieczaJednorecznego` on the `weaponproficiencys` table. All the data in the column will be lost.
  - Added the required column `CepyBojoweMorgernszterny` to the `WeaponProficiencys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Katany` to the `WeaponProficiencys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Kije` to the `WeaponProficiencys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MieczeObureczne` to the `WeaponProficiencys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MlotyBojowe` to the `WeaponProficiencys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SejmitarWakizashiNinjaTo` to the `WeaponProficiencys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StylWalkiBroniaDwureczna` to the `WeaponProficiencys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StylWalkiDwiemaBronmi` to the `WeaponProficiencys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StylWalkiJednaBronia` to the `WeaponProficiencys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StylWalkiMieczemITarcza` to the `WeaponProficiencys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `weaponproficiencys` DROP COLUMN `Katana`,
    DROP COLUMN `KijeBojowe`,
    DROP COLUMN `Korbacze`,
    DROP COLUMN `MieczeDworeczne`,
    DROP COLUMN `MlotyWojenne`,
    DROP COLUMN `Scimtar`,
    DROP COLUMN `StylBroniDworecznych`,
    DROP COLUMN `StylDwochBroni`,
    DROP COLUMN `StylMieczaITarczy`,
    DROP COLUMN `StylMieczaJednorecznego`,
    ADD COLUMN `CepyBojoweMorgernszterny` INTEGER NOT NULL,
    ADD COLUMN `Katany` INTEGER NOT NULL,
    ADD COLUMN `Kije` INTEGER NOT NULL,
    ADD COLUMN `MieczeObureczne` INTEGER NOT NULL,
    ADD COLUMN `MlotyBojowe` INTEGER NOT NULL,
    ADD COLUMN `SejmitarWakizashiNinjaTo` INTEGER NOT NULL,
    ADD COLUMN `StylWalkiBroniaDwureczna` INTEGER NOT NULL,
    ADD COLUMN `StylWalkiDwiemaBronmi` INTEGER NOT NULL,
    ADD COLUMN `StylWalkiJednaBronia` INTEGER NOT NULL,
    ADD COLUMN `StylWalkiMieczemITarcza` INTEGER NOT NULL;
