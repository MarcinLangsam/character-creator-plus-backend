import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Funkcja do dodania danych dla tabeli Strength
async function insertStrengthData() {
  const strengthData = [
    { value: 1, melleThac0: 5, dmgBonus: -4, bashing: 1, weight: 1 },
    { value: 2, melleThac0: 3, dmgBonus: -2, bashing: 2, weight: 3 },
    { value: 3, melleThac0: 3, dmgBonus: -1, bashing: 3, weight: 5 },
    { value: 4, melleThac0: 2, dmgBonus: -1, bashing: 4, weight: 15 },
    { value: 5, melleThac0: 2, dmgBonus: -1, bashing: 5, weight: 15 },
    { value: 6, melleThac0: 1, dmgBonus: 0, bashing: 6, weight: 30 },
    { value: 7, melleThac0: 1, dmgBonus: 0, bashing: 7, weight: 30 },
    { value: 8, melleThac0: 0, dmgBonus: 0, bashing: 8, weight: 50 },
    { value: 9, melleThac0: 0, dmgBonus: 0, bashing: 9, weight: 50 },
    { value: 10, melleThac0: 0, dmgBonus: 0, bashing: 10, weight: 70 },
    { value: 11, melleThac0: 0, dmgBonus: 0, bashing: 11, weight: 70 },
    { value: 12, melleThac0: 0, dmgBonus: 0, bashing: 12, weight: 90 },
    { value: 13, melleThac0: 0, dmgBonus: 0, bashing: 13, weight: 90 },
    { value: 14, melleThac0: 0, dmgBonus: 0, bashing: 14, weight: 120 },
    { value: 15, melleThac0: 0, dmgBonus: 0, bashing: 15, weight: 120 },
    { value: 16, melleThac0: 0, dmgBonus: 1, bashing: 16, weight: 150 },
    { value: 17, melleThac0: -1, dmgBonus: 1, bashing: 18, weight: 170 },
    { value: 18, melleThac0: -1, dmgBonus: 2, bashing: 20, weight: 200 },
    { value: 19, melleThac0: -3, dmgBonus: 7, bashing: 50, weight: 500 },
  ];

  for (const data of strengthData) {
    await prisma.strength.create({
      data: {
        value: data.value,
        meleeThac0: data.melleThac0,
        dmgBonus: data.dmgBonus,
        bashing: data.bashing,
        weight: data.weight,
      }
    });
  }
}


// Funkcja do dodania danych dla tabeli Agility
async function insertAgilityData() {
  const agilityData = [
    { value: 1, rangedThac0: 6, AC: 5, Kradzież_KieszonkowaBonus: -15, Otwieranie_ZamkówBonus: -10, Znajdywanie_PułapekBonus: -10, Ciche_PoruszanieBonus: -20, Krycie_W_CieniuBonus: -10, Rozstawianie_Pułapek: -10 },
    { value: 2, rangedThac0: 4, AC: 4, Kradzież_KieszonkowaBonus: -15, Otwieranie_ZamkówBonus: -10, Znajdywanie_PułapekBonus: -10, Ciche_PoruszanieBonus: -20, Krycie_W_CieniuBonus: -10, Rozstawianie_Pułapek: -10, },
    { value: 3, rangedThac0: 3, AC: 3, Kradzież_KieszonkowaBonus: -15, Otwieranie_ZamkówBonus: -10, Znajdywanie_PułapekBonus: -10, Ciche_PoruszanieBonus: -20, Krycie_W_CieniuBonus: -10, Rozstawianie_Pułapek: -10 },
    { value: 4, rangedThac0: 2, AC: 2, Kradzież_KieszonkowaBonus: -15, Otwieranie_ZamkówBonus: -10, Znajdywanie_PułapekBonus: -10, Ciche_PoruszanieBonus: -20, Krycie_W_CieniuBonus: -10, Rozstawianie_Pułapek: -10 },
    { value: 5, rangedThac0: 1, AC: 1, Kradzież_KieszonkowaBonus: -15, Otwieranie_ZamkówBonus: -10, Znajdywanie_PułapekBonus: -10, Ciche_PoruszanieBonus: -20, Krycie_W_CieniuBonus: -10, Rozstawianie_Pułapek: -10 },
    { value: 6, rangedThac0: 0, AC: 0, Kradzież_KieszonkowaBonus: -15, Otwieranie_ZamkówBonus: -10, Znajdywanie_PułapekBonus: -10, Ciche_PoruszanieBonus: -20, Krycie_W_CieniuBonus: -10, Rozstawianie_Pułapek: -10 },
    { value: 7, rangedThac0: 0, AC: 0, Kradzież_KieszonkowaBonus: -15, Otwieranie_ZamkówBonus: -10, Znajdywanie_PułapekBonus: -10, Ciche_PoruszanieBonus: -20, Krycie_W_CieniuBonus: -10, Rozstawianie_Pułapek: -10 },
    { value: 8, rangedThac0: 0, AC: 0, Kradzież_KieszonkowaBonus: -15, Otwieranie_ZamkówBonus: -10, Znajdywanie_PułapekBonus: -10, Ciche_PoruszanieBonus: -20, Krycie_W_CieniuBonus: -10, Rozstawianie_Pułapek: -10 },
    { value: 9, rangedThac0: 0, AC: 0, Kradzież_KieszonkowaBonus: -15, Otwieranie_ZamkówBonus: -10, Znajdywanie_PułapekBonus: -10, Ciche_PoruszanieBonus: -20, Krycie_W_CieniuBonus: -10, Rozstawianie_Pułapek: -10 },
    { value: 10, rangedThac0: 0, AC: 0, Kradzież_KieszonkowaBonus: -10, Otwieranie_ZamkówBonus: -5, Znajdywanie_PułapekBonus: -10, Ciche_PoruszanieBonus: -15, Krycie_W_CieniuBonus: -5, Rozstawianie_Pułapek: -10 },
    { value: 11, rangedThac0: 0, AC: 0, Kradzież_KieszonkowaBonus: -5, Otwieranie_ZamkówBonus: 0, Znajdywanie_PułapekBonus: -5, Ciche_PoruszanieBonus: -10, Krycie_W_CieniuBonus: 0, Rozstawianie_Pułapek: -5 },
    { value: 12, rangedThac0: 0, AC: 0, Kradzież_KieszonkowaBonus: 0, Otwieranie_ZamkówBonus: 0, Znajdywanie_PułapekBonus: 0, Ciche_PoruszanieBonus: -5, Krycie_W_CieniuBonus: 0, Rozstawianie_Pułapek: 0 },
    { value: 13, rangedThac0: 0, AC: 0, Kradzież_KieszonkowaBonus: 0, Otwieranie_ZamkówBonus: 0, Znajdywanie_PułapekBonus: 0, Ciche_PoruszanieBonus: 0, Krycie_W_CieniuBonus: 0, Rozstawianie_Pułapek: 0 },
    { value: 14, rangedThac0: 0, AC: 0, Kradzież_KieszonkowaBonus: 0, Otwieranie_ZamkówBonus: 0, Znajdywanie_PułapekBonus: 0, Ciche_PoruszanieBonus: 0, Krycie_W_CieniuBonus: 0, Rozstawianie_Pułapek: 0 },
    { value: 15, rangedThac0: 0, AC: -1, Kradzież_KieszonkowaBonus: 0, Otwieranie_ZamkówBonus: 0, Znajdywanie_PułapekBonus: 0, Ciche_PoruszanieBonus: 0, Krycie_W_CieniuBonus: 0, Rozstawianie_Pułapek: 0 },
    { value: 16, rangedThac0: -1, AC: -2, Kradzież_KieszonkowaBonus: 0, Otwieranie_ZamkówBonus: 5, Znajdywanie_PułapekBonus: 0, Ciche_PoruszanieBonus: 0, Krycie_W_CieniuBonus: 0, Rozstawianie_Pułapek: 0 },
    { value: 17, rangedThac0: -2, AC: -3, Kradzież_KieszonkowaBonus: 5, Otwieranie_ZamkówBonus: 10, Znajdywanie_PułapekBonus: 0, Ciche_PoruszanieBonus: 5, Krycie_W_CieniuBonus: 5, Rozstawianie_Pułapek: 0 },
    { value: 18, rangedThac0: -2, AC: -4, Kradzież_KieszonkowaBonus: 10, Otwieranie_ZamkówBonus: 15, Znajdywanie_PułapekBonus: 5, Ciche_PoruszanieBonus: 10, Krycie_W_CieniuBonus: 10, Rozstawianie_Pułapek: 5 },
    { value: 19, rangedThac0: -3, AC: -4, Kradzież_KieszonkowaBonus: 15, Otwieranie_ZamkówBonus: 20, Znajdywanie_PułapekBonus: 10, Ciche_PoruszanieBonus: 15, Krycie_W_CieniuBonus: 15, Rozstawianie_Pułapek: 10 },
  ];

  for (const data of agilityData) {
    await prisma.agility.create({
      data: {
        value: data.value,
        rangedThac0: data.rangedThac0,
        ac: data.AC,
        Kradziez_KieszonkowaBonus: data.Kradzież_KieszonkowaBonus,
        Otwieranie_ZamkowBonus: data.Otwieranie_ZamkówBonus,
        Znajdywanie_PulapekBonus: data.Znajdywanie_PułapekBonus,
        Ciche_PoruszanieBonus: data.Ciche_PoruszanieBonus,
        Krycie_W_CieniuBonus: data.Krycie_W_CieniuBonus,
        Rozstawianie_PulapekBonus: data.Rozstawianie_Pułapek,
      }
    });
  }
}

// Funkcja do dodania danych dla tabeli Constitution
async function insertConstitutionData() {
  const constitutionData = [
    { value: 1, HPperLvBonus: -3, IntoxicationPerDrink: 100, fatigue: 4 },
    { value: 2, HPperLvBonus: -2, IntoxicationPerDrink: 88, fatigue: 3 },
    { value: 3, HPperLvBonus: -2, IntoxicationPerDrink: 66, fatigue: 3 },
    { value: 4, HPperLvBonus: -1, IntoxicationPerDrink: 50, fatigue: 2 },
    { value: 5, HPperLvBonus: -1, IntoxicationPerDrink: 40, fatigue: 2 },
    { value: 6, HPperLvBonus: -1, IntoxicationPerDrink: 30, fatigue: 1 },
    { value: 7, HPperLvBonus: 0, IntoxicationPerDrink: 20, fatigue: 1 },
    { value: 8, HPperLvBonus: 0, IntoxicationPerDrink: 15, fatigue: 0 },
    { value: 9, HPperLvBonus: 0, IntoxicationPerDrink: 13, fatigue: 0 },
    { value: 10, HPperLvBonus: 0, IntoxicationPerDrink: 13, fatigue: 0 },
    { value: 11, HPperLvBonus: 0, IntoxicationPerDrink: 13, fatigue: 0 },
    { value: 12, HPperLvBonus: 0, IntoxicationPerDrink: 13, fatigue: 0 },
    { value: 13, HPperLvBonus: 0, IntoxicationPerDrink: 12, fatigue: 0 },
    { value: 14, HPperLvBonus: 0, IntoxicationPerDrink: 11, fatigue: 0 },
    { value: 15, HPperLvBonus: 1, IntoxicationPerDrink: 10, fatigue: 0 },
    { value: 16, HPperLvBonus: 2, IntoxicationPerDrink: 9, fatigue: -1 },
    { value: 17, HPperLvBonus: 3, IntoxicationPerDrink: 8, fatigue: -1 },
    { value: 18, HPperLvBonus: 4, IntoxicationPerDrink: 7, fatigue: -2 },
    { value: 19, HPperLvBonus: 5, IntoxicationPerDrink: 5, fatigue: -2 },
  ];

  for (const data of constitutionData) {
    await prisma.constitution.create({
      data: {
        value: data.value,
        hpPerLevelBonus: data.HPperLvBonus,
        intoxicationPerDrink: data.IntoxicationPerDrink,
        fatigue: data.fatigue
      }
    });
  }
}

// Funkcja do dodania danych dla tabeli Intelligence
async function insertIntelligenceData() {
  const intelligenceData = [
    { value: 1, INTmaxSpellLevel: 0, INTspellPerLevel: 0, scribeSuccessRate: 0, INTlore: -20 },
    { value: 2, INTmaxSpellLevel: 0, INTspellPerLevel: 0, scribeSuccessRate: 0, INTlore: -20 },
    { value: 3, INTmaxSpellLevel: 0, INTspellPerLevel: 0, scribeSuccessRate: 0, INTlore: -20 },
    { value: 4, INTmaxSpellLevel: 0, INTspellPerLevel: 0, scribeSuccessRate: 0, INTlore: -20 },
    { value: 5, INTmaxSpellLevel: 0, INTspellPerLevel: 0, scribeSuccessRate: 0, INTlore: -20 },
    { value: 6, INTmaxSpellLevel: 0, INTspellPerLevel: 0, scribeSuccessRate: 0, INTlore: -20 },
    { value: 7, INTmaxSpellLevel: 0, INTspellPerLevel: 0, scribeSuccessRate: 0, INTlore: -10 },
    { value: 8, INTmaxSpellLevel: 0, INTspellPerLevel: 0, scribeSuccessRate: 0, INTlore: -10 },
    { value: 9, INTmaxSpellLevel: 4, INTspellPerLevel: 6, scribeSuccessRate: 35, INTlore: -10 },
    { value: 10, INTmaxSpellLevel: 5, INTspellPerLevel: 7, scribeSuccessRate: 40, INTlore: 0 },
    { value: 11, INTmaxSpellLevel: 5, INTspellPerLevel: 7, scribeSuccessRate: 45, INTlore: 0 },
    { value: 12, INTmaxSpellLevel: 6, INTspellPerLevel: 7, scribeSuccessRate: 50, INTlore: 0 },
    { value: 13, INTmaxSpellLevel: 6, INTspellPerLevel: 9, scribeSuccessRate: 55, INTlore: 0 },
    { value: 14, INTmaxSpellLevel: 7, INTspellPerLevel: 9, scribeSuccessRate: 60, INTlore: 0 },
    { value: 15, INTmaxSpellLevel: 7, INTspellPerLevel: 11, scribeSuccessRate: 65, INTlore: 3 },
    { value: 16, INTmaxSpellLevel: 8, INTspellPerLevel: 11, scribeSuccessRate: 70, INTlore: 5 },
    { value: 17, INTmaxSpellLevel: 8, INTspellPerLevel: 14, scribeSuccessRate: 75, INTlore: 7 },
    { value: 18, INTmaxSpellLevel: 9, INTspellPerLevel: 18, scribeSuccessRate: 85, INTlore: 10 },
    { value: 19, INTmaxSpellLevel: 9, INTspellPerLevel: 99, scribeSuccessRate: 95, INTlore: 12 },
    
  ];

  for (const data of intelligenceData) {
    await prisma.intelligence.create({
      data: {
        value: data.value,
        INTmaxSpellLevel: data.INTmaxSpellLevel,
        INTspellPerLevel: data.INTspellPerLevel,
        scribeSuccessRate: data.scribeSuccessRate,
        INTlore: data.INTlore,
      }
    });
  }
}

// Funkcja do dodania danych dla tabeli Wisdom
async function insertWisdomData() {
  const wisdomData = [
    { value: 1, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: -20},
    { value: 2, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: -20 },
    { value: 3, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: -20 },
    { value: 4, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: -20 },
    { value: 5, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: -20 },
    { value: 6, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: -20 },
    { value: 7, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: -10 },
    { value: 8, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: -10 },
    { value: 9, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: -10 },
    { value: 10, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: 0 },
    { value: 11, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: 0 },
    { value: 12, extraSpellSlotlv1: 0, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: 0 },
    { value: 13, extraSpellSlotlv1: 1, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: 0 },
    { value: 14, extraSpellSlotlv1: 2, extraSpellSlotlv2: 0, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: 0 },
    { value: 15, extraSpellSlotlv1: 2, extraSpellSlotlv2: 1, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: 3 },
    { value: 16, extraSpellSlotlv1: 2, extraSpellSlotlv2: 2, extraSpellSlotlv3: 0, extraSpellSlotlv4: 0, WISlore: 5 },
    { value: 17, extraSpellSlotlv1: 2, extraSpellSlotlv2: 2, extraSpellSlotlv3: 1, extraSpellSlotlv4: 0, WISlore: 7 },
    { value: 18, extraSpellSlotlv1: 2, extraSpellSlotlv2: 2, extraSpellSlotlv3: 1, extraSpellSlotlv4: 1, WISlore: 10 },
    { value: 19, extraSpellSlotlv1: 3, extraSpellSlotlv2: 2, extraSpellSlotlv3: 1, extraSpellSlotlv4: 2, WISlore: 12 },
  ];

  for (const data of wisdomData) {
    await prisma.wisdom.create({
      data: {
        value: data.value,
        extraSpellSlotlv1: data.extraSpellSlotlv1,
        extraSpellSlotlv2: data.extraSpellSlotlv2,
        extraSpellSlotlv3: data.extraSpellSlotlv3,
        extraSpellSlotlv4: data.extraSpellSlotlv4,
        WISlore: data.WISlore,
      }
    });
  }
}

async function insertCharismaData() {
  const charismaData = [
    { value: 1, reaction: -10, buyDiscount: 0 },
    { value: 2, reaction: -9, buyDiscount: 0 },
    { value: 3, reaction: -8, buyDiscount: 0 },
    { value: 4, reaction: -7, buyDiscount: 0 },
    { value: 5, reaction: -6, buyDiscount: 0 },
    { value: 6, reaction: -5, buyDiscount: 0 },
    { value: 7, reaction: -4, buyDiscount: 0 },
    { value: 8, reaction: -2, buyDiscount: 0 },
    { value: 9, reaction: -1, buyDiscount: 0 },
    { value: 10, reaction: 0, buyDiscount: 0 },
    { value: 11, reaction: 0, buyDiscount: 0 },
    { value: 12, reaction: 0, buyDiscount: 0 },
    { value: 13, reaction: 1, buyDiscount: 0 },
    { value: 14, reaction: 2, buyDiscount: 0 },
    { value: 15, reaction: 3, buyDiscount: 0 },
    { value: 16, reaction: 4, buyDiscount: -5 },
    { value: 17, reaction: 4, buyDiscount: -10 },
    { value: 18, reaction: 5, buyDiscount: -15 },
    { value: 19, reaction: 8, buyDiscount: -20 },
  ];

  for (const data of charismaData) {
    await prisma.charisma.create({
      data: {
        value: data.value,
        reaction: data.reaction,
        buyDiscount: data.buyDiscount,
      }
    });
  }
}


async function insertAlignmentData() {
  const alignmentData = [
    { alignment: "Praworządny Dobry", number: "0x11" },
    { alignment: "Praworządny Neutralny", number: "0x12" },
    { alignment: "Praworządny Zły", number: "0x13" },
    { alignment: "Neutralny Dobry", number: "0x21" },
    { alignment: "Neutralny", number: "0x22" },
    { alignment: "Neutralny Zły", number: "0x23" },
    { alignment: "Chaotyczny Dobry", number: "0x31" },
    { alignment: "Chaotyczny Neutralny", number: "0x32" },
    { alignment: "Chaotyczny Zły", number: "0x33" },
  ];

  for (const data of alignmentData) {
    await prisma.alignment.create({
      data: {
        alignment: data.alignment,
        number: data.number,
      }
    });
  }
}


async function insertProficiencysToSubclassData() {
  const proficiencysToSubclassData = [
    { subclass: "Wojownik",                MieczePółtoraręczne: 5, MieczeDługie: 5, MieczeKrótkie: 5, Topory: 5, MieczeOburęczne: 5, Katany: 5, SejmitarWakizashiNinjaTo: 5, Sztylety: 5, MłotyBojowe: 5, Maczugi: 5, Włócznie: 5, Halabarda: 5, CepyBojoweMorgernszterny: 5, Wiekiery: 5, Kije: 5, Kusze: 5, DługieŁuki: 5, KrótkieŁuki: 5, Strzałki: 5, Proce: 5, StylWalkiBroniąDwuręczną: 5, StylWalkiMieczemITarczą: 5, StylWalkiJednąBronią: 5, StylWalkiDwiemaBrońmi: 5, skillPoints: 6 },
    { subclass: "Berserker",               MieczePółtoraręczne: 5, MieczeDługie: 5, MieczeKrótkie: 5, Topory: 5, MieczeOburęczne: 5, Katany: 5, SejmitarWakizashiNinjaTo: 5, Sztylety: 5, MłotyBojowe: 5, Maczugi: 5, Włócznie: 5, Halabarda: 5, CepyBojoweMorgernszterny: 5, Wiekiery: 5, Kije: 5, Kusze: 1, DługieŁuki: 1, KrótkieŁuki: 1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 5, StylWalkiMieczemITarczą: 5, StylWalkiJednąBronią: 5, StylWalkiDwiemaBrońmi: 5, skillPoints: 6 },
    { subclass: "Zabójca_Magów",           MieczePółtoraręczne: 5, MieczeDługie: 5, MieczeKrótkie: 5, Topory: 5, MieczeOburęczne: 5, Katany: 5, SejmitarWakizashiNinjaTo: 5, Sztylety: 5, MłotyBojowe: 5, Maczugi: 5, Włócznie: 5, Halabarda: 5, CepyBojoweMorgernszterny: 5, Wiekiery: 5, Kije: 5, Kusze: 5, DługieŁuki: 5, KrótkieŁuki: 5, Strzałki: 5, Proce: 5, StylWalkiBroniąDwuręczną: 5, StylWalkiMieczemITarczą: 5, StylWalkiJednąBronią: 5, StylWalkiDwiemaBrońmi: 5, skillPoints: 6 },
    { subclass: "Kensai",                  MieczePółtoraręczne: 5, MieczeDługie: 5, MieczeKrótkie: 5, Topory: 5, MieczeOburęczne: 5, Katany: 5, SejmitarWakizashiNinjaTo: 5, Sztylety: 5, MłotyBojowe: 5, Maczugi: 5, Włócznie: 5, Halabarda: 5, CepyBojoweMorgernszterny: 5, Wiekiery: 5, Kije: 5, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: -1, Proce: -1, StylWalkiBroniąDwuręczną: 5, StylWalkiMieczemITarczą: 5, StylWalkiJednąBronią: 5, StylWalkiDwiemaBrońmi: 5, skillPoints: 6 },
    { subclass: "Krasnoludzki_Obrońca",    MieczePółtoraręczne: 2, MieczeDługie: 2, MieczeKrótkie: 2, Topory: 4, MieczeOburęczne: 2, Katany: 2, SejmitarWakizashiNinjaTo: 2, Sztylety: 2, MłotyBojowe: 4, Maczugi: 2, Włócznie: 2, Halabarda: 2, CepyBojoweMorgernszterny: 2, Wiekiery: 2, Kije: 2, Kusze: 2, DługieŁuki: 2, KrótkieŁuki: 2, Strzałki: 2, Proce: 2, StylWalkiBroniąDwuręczną: 2, StylWalkiMieczemITarczą: 2, StylWalkiJednąBronią: 2, StylWalkiDwiemaBrońmi: 2, skillPoints: 6 },
    { subclass: "Barbarzyńca",             MieczePółtoraręczne: 2, MieczeDługie: 2, MieczeKrótkie: 2, Topory: 2, MieczeOburęczne: 2, Katany: 2, SejmitarWakizashiNinjaTo: 2, Sztylety: 2, MłotyBojowe: 2, Maczugi: 2, Włócznie: 2, Halabarda: 2, CepyBojoweMorgernszterny: 2, Wiekiery: 2, Kije: 2, Kusze: 2, DługieŁuki: 2, KrótkieŁuki: 2, Strzałki: 2, Proce: 2, StylWalkiBroniąDwuręczną: 2, StylWalkiMieczemITarczą: 2, StylWalkiJednąBronią: 2, StylWalkiDwiemaBrońmi: 2, skillPoints: 6 },
    { subclass: "Łowca",                   MieczePółtoraręczne: 2, MieczeDługie: 2, MieczeKrótkie: 2, Topory: 2, MieczeOburęczne: 2, Katany: 2, SejmitarWakizashiNinjaTo: 2, Sztylety: 2, MłotyBojowe: 2, Maczugi: 2, Włócznie: 2, Halabarda: 2, CepyBojoweMorgernszterny: 2, Wiekiery: 2, Kije: 2, Kusze: 2, DługieŁuki: 2, KrótkieŁuki: 2, Strzałki: 2, Proce: 2, StylWalkiBroniąDwuręczną: 2, StylWalkiMieczemITarczą: 2, StylWalkiJednąBronią: 2, StylWalkiDwiemaBrońmi: 2, skillPoints: 4 },
    { subclass: "Łucznik",                 MieczePółtoraręczne: 1, MieczeDługie: 1, MieczeKrótkie: 1, Topory: 1, MieczeOburęczne: 1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, MłotyBojowe: 1, Maczugi: 1, Włócznie: 1, Halabarda: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Kusze: 5, DługieŁuki: 5, KrótkieŁuki: 5, Strzałki: 2, Proce: 2, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 3, skillPoints: 4 },
    { subclass: "Tropiciel",               MieczePółtoraręczne: 2, MieczeDługie: 2, MieczeKrótkie: 2, Topory: 2, MieczeOburęczne: 2, Katany: 2, SejmitarWakizashiNinjaTo: 2, Sztylety: 2, MłotyBojowe: 2, Maczugi: 2, Włócznie: 2, Halabarda: 2, CepyBojoweMorgernszterny: 2, Wiekiery: 2, Kije: 2, Kusze: 2, DługieŁuki: 2, KrótkieŁuki: 2, Strzałki: 2, Proce: 2, StylWalkiBroniąDwuręczną: 2, StylWalkiMieczemITarczą: 2, StylWalkiJednąBronią: 2, StylWalkiDwiemaBrońmi: 3, skillPoints: 4 },
    { subclass: "Władca_Zwierząt",         MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, Sztylety: -1, MłotyBojowe: -1, Maczugi: 2, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kije: 2, Kusze: 2, DługieŁuki: 2, KrótkieŁuki: 2, Strzałki: 2, Proce: 2, StylWalkiBroniąDwuręczną: 2, StylWalkiMieczemITarczą: 2, StylWalkiJednąBronią: 2, StylWalkiDwiemaBrońmi: 2, skillPoints: 4 },
    { subclass: "Paladyn",                 MieczePółtoraręczne: 2, MieczeDługie: 2, MieczeKrótkie: 2, Topory: 2, MieczeOburęczne: 2, Katany: 2, SejmitarWakizashiNinjaTo: 2, Sztylety: 2, MłotyBojowe: 2, Maczugi: 2, Włócznie: 2, Halabarda: 2, CepyBojoweMorgernszterny: 2, Wiekiery: 2, Kije: 2, Kusze: 2, DługieŁuki: 2, KrótkieŁuki: 2, Strzałki: 2, Proce: 2, StylWalkiBroniąDwuręczną: 2, StylWalkiMieczemITarczą: 2, StylWalkiJednąBronią: 2, StylWalkiDwiemaBrońmi: 2, skillPoints: 4 },
    { subclass: "Kawalerzysta",            MieczePółtoraręczne: 2, MieczeDługie: 2, MieczeKrótkie: 2, Topory: 2, MieczeOburęczne: 2, Katany: 2, SejmitarWakizashiNinjaTo: 2, Sztylety: 2, MłotyBojowe: 2, Maczugi: 2, Włócznie: 2, Halabarda: 2, CepyBojoweMorgernszterny: 2, Wiekiery: 2, Kije: 2, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: -1, Proce: -1, StylWalkiBroniąDwuręczną: 2, StylWalkiMieczemITarczą: 2, StylWalkiJednąBronią: 2, StylWalkiDwiemaBrońmi: 2, skillPoints: 4 },
    { subclass: "Inkwizytor",              MieczePółtoraręczne: 2, MieczeDługie: 2, MieczeKrótkie: 2, Topory: 2, MieczeOburęczne: 2, Katany: 2, SejmitarWakizashiNinjaTo: 2, Sztylety: 2, MłotyBojowe: 2, Maczugi: 2, Włócznie: 2, Halabarda: 2, CepyBojoweMorgernszterny: 2, Wiekiery: 2, Kije: 2, Kusze: 2, DługieŁuki: 2, KrótkieŁuki: 2, Strzałki: 2, Proce: 2, StylWalkiBroniąDwuręczną: 2, StylWalkiMieczemITarczą: 2, StylWalkiJednąBronią: 2, StylWalkiDwiemaBrońmi: 2, skillPoints: 4 },
    { subclass: "Łowca_Nieumarłych",       MieczePółtoraręczne: 2, MieczeDługie: 2, MieczeKrótkie: 2, Topory: 2, MieczeOburęczne: 2, Katany: 2, SejmitarWakizashiNinjaTo: 2, Sztylety: 2, MłotyBojowe: 2, Maczugi: 2, Włócznie: 2, Halabarda: 2, CepyBojoweMorgernszterny: 2, Wiekiery: 2, Kije: 2, Kusze: 2, DługieŁuki: 2, KrótkieŁuki: 2, Strzałki: 2, Proce: 2, StylWalkiBroniąDwuręczną: 2, StylWalkiMieczemITarczą: 2, StylWalkiJednąBronią: 2, StylWalkiDwiemaBrońmi: 2, skillPoints: 4 },
    { subclass: "Czarny_Strażnik",         MieczePółtoraręczne: 2, MieczeDługie: 2, MieczeKrótkie: 2, Topory: 2, MieczeOburęczne: 2, Katany: 2, SejmitarWakizashiNinjaTo: 2, Sztylety: 2, MłotyBojowe: 2, Maczugi: 2, Włócznie: 2, Halabarda: 2, CepyBojoweMorgernszterny: 2, Wiekiery: 2, Kije: 2, Kusze: 2, DługieŁuki: 2, KrótkieŁuki: 2, Strzałki: 2, Proce: 2, StylWalkiBroniąDwuręczną: 2, StylWalkiMieczemITarczą: 2, StylWalkiJednąBronią: 2, StylWalkiDwiemaBrońmi: 2, skillPoints: 4 },
    { subclass: "Kapłan",                  MłotyBojowe: 1, Maczugi: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, Sztylety: -1, Włócznie: -1, Halabarda: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: -1, skillPoints: 2 },
    { subclass: "Kapłan_Talosa",           MłotyBojowe: 1, Maczugi: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, Sztylety: -1, Włócznie: -1, Halabarda: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: -1, skillPoints: 2 },
    { subclass: "Kapłan_Helma",            MłotyBojowe: 1, Maczugi: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, Sztylety: -1, Włócznie: -1, Halabarda: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: -1, skillPoints: 2 },
    { subclass: "Kapłan_Lathandera",       MłotyBojowe: 1, Maczugi: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, Sztylety: -1, Włócznie: -1, Halabarda: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: -1, skillPoints: 2 },
    { subclass: "Kapłan_Tyra",             MłotyBojowe: 1, Maczugi: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, Sztylety: -1, Włócznie: -1, Halabarda: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: -1, skillPoints: 2 },
    { subclass: "Kapłan_Tempusa",          MłotyBojowe: 1, Maczugi: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, Sztylety: -1, Włócznie: -1, Halabarda: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: -1, skillPoints: 2 },
    { subclass: "Druid",                   SejmitarWakizashiNinjaTo: 1, Sztylety: 1, Włócznie: 1, Maczugi: 1, Strzałki: 1, Kije: 1, Proce: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, MłotyBojowe: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 2 },
    { subclass: "Totemiczny_Druid",        SejmitarWakizashiNinjaTo: 1, Sztylety: 1, Włócznie: 1, Maczugi: 1, Strzałki: 1, Kije: 1, Proce: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, MłotyBojowe: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 2 },
    { subclass: "Zmiennokształtny",        SejmitarWakizashiNinjaTo: 1, Sztylety: 1, Włócznie: 1, Maczugi: 1, Strzałki: 1, Kije: 1, Proce: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, MłotyBojowe: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 2 },
    { subclass: "Mściciel",                SejmitarWakizashiNinjaTo: 1, Sztylety: 1, Włócznie: 1, Maczugi: 1, Strzałki: 1, Kije: 1, Proce: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, MłotyBojowe: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 2 },
    { subclass: "Mag",                     Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
    { subclass: "Mistrz_Odrzucania",         Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
    { subclass: "Mistrz_Przywołań",         Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
    { subclass: "Mistrz_Pozanania",         Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
    { subclass: "Mistrz_Zauroczeń",         Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
    { subclass: "Ilizjonista",         Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
    { subclass: "Mistrz_Inwokacji",         Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
    { subclass: "Nekromanta",         Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
    { subclass: "Mistrz_Przemian",         Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
    { subclass: "Dziki_Mag",               Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
    { subclass: "Złodziej",                MieczeDługie: 1, MieczeKrótkie: 1, Topory: -1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, Maczugi: 1, Włócznie: -1, Kije: 1, Kusze: 1, KrótkieŁuki: 1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeOburęczne: -1, MłotyBojowe: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, DługieŁuki: -1,  skillPoints: 2 },
    { subclass: "Zabójca",                 MieczeDługie: 1, MieczeKrótkie: 1, Topory: -1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, Maczugi: 1, Włócznie: -1, Kije: 1, Kusze: 1, KrótkieŁuki: 1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeOburęczne: -1, MłotyBojowe: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, DługieŁuki: -1,  skillPoints: 2 },
    { subclass: "Łowca_Nagród",            MieczeDługie: 1, MieczeKrótkie: 1, Topory: -1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, Maczugi: 1, Włócznie: -1, Kije: 1, Kusze: 1, KrótkieŁuki: 1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeOburęczne: -1, MłotyBojowe: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, DługieŁuki: -1,  skillPoints: 2 },
    { subclass: "Zawadiaka",               MieczeDługie: 1, MieczeKrótkie: 1, Topory: -1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, Maczugi: 1, Włócznie: -1, Kije: 1, Kusze: 1, KrótkieŁuki: 1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeOburęczne: -1, MłotyBojowe: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, DługieŁuki: -1,  skillPoints: 2 },
    { subclass: "Tancerz_Cieni",           MieczeDługie: 1, MieczeKrótkie: 1, Topory: -1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, Maczugi: 1, Włócznie: -1, Kije: 1, Kusze: 1, KrótkieŁuki: 1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, MieczePółtoraręczne: -1, MieczeOburęczne: -1, MłotyBojowe: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, DługieŁuki: -1, skillPoints: 2 },
    { subclass: "Bard",                    MieczePółtoraręczne: 1, MieczeDługie: 1, MieczeKrótkie: 1, Topory: 1, MieczeOburęczne: 1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, MłotyBojowe: 1, Maczugi: 1, Włócznie: 1, Halabarda: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Kusze: 1, DługieŁuki: -1, KrótkieŁuki: 1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, skillPoints: 2 },
    { subclass: "Fechmistrz",              MieczePółtoraręczne: 1, MieczeDługie: 1, MieczeKrótkie: 1, Topory: 1, MieczeOburęczne: 1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, MłotyBojowe: 1, Maczugi: 1, Włócznie: 1, Halabarda: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Kusze: 1, DługieŁuki: -1, KrótkieŁuki: 1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, skillPoints: 2 },
    { subclass: "Błazen",                  MieczePółtoraręczne: 1, MieczeDługie: 1, MieczeKrótkie: 1, Topory: 1, MieczeOburęczne: 1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, MłotyBojowe: 1, Maczugi: 1, Włócznie: 1, Halabarda: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Kusze: 1, DługieŁuki: -1, KrótkieŁuki: 1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, skillPoints: 2 },
    { subclass: "Skald",                   MieczePółtoraręczne: 1, MieczeDługie: 1, MieczeKrótkie: 1, Topory: 1, MieczeOburęczne: 1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, MłotyBojowe: 1, Maczugi: 1, Włócznie: 1, Halabarda: 1, CepyBojoweMorgernszterny: 1, Wiekiery: 1, Kije: 1, Kusze: 1, DługieŁuki: -1, KrótkieŁuki: 1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, skillPoints: 2 },
    { subclass: "Czarownik",               MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, Sztylety: 1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: 1, Proce: 1, Kije: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, skillPoints: 1 },
    { subclass: "Uczeń_Smoka",             MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, Sztylety: 1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: 1, Proce: 1, Kije: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, skillPoints: 1 },
    { subclass: "Mnich",                   MieczePółtoraręczne: -1, MieczeDługie: 1, MieczeKrótkie: 1, Topory: -1, MieczeOburęczne: -1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, MłotyBojowe: -1, Maczugi: 1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kije: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, skillPoints: 3 },
    { subclass: "Mnich_Ciemnego_Księżyca", MieczePółtoraręczne: -1, MieczeDługie: 1, MieczeKrótkie: 1, Topory: -1, MieczeOburęczne: -1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, MłotyBojowe: -1, Maczugi: 1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kije: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, skillPoints: 3 },
    { subclass: "Mnich_Słonecznej_Duszy",  MieczePółtoraręczne: -1, MieczeDługie: 1, MieczeKrótkie: 1, Topory: -1, MieczeOburęczne: -1, Katany: 1, SejmitarWakizashiNinjaTo: 1, Sztylety: 1, MłotyBojowe: -1, Maczugi: 1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kije: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, Strzałki: 1, Proce: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, skillPoints: 3 },
    { subclass: "Szaman",                  MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, Sztylety: 1, MłotyBojowe: -1, Maczugi: 1, Włócznie: 1, Topory: 1, Kije: 1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, Strzałki: 1, Proce: 1, KrótkieŁuki: 1, StylWalkiBroniąDwuręczną: 1, StylWalkiMieczemITarczą: 1, StylWalkiJednąBronią: 1, StylWalkiDwiemaBrońmi: 1, skillPoints: 3 },
  ];

  for (const data of proficiencysToSubclassData) {
    await prisma.proficiencysToSubclass.create({
      data: {
        subclass: data.subclass,
        MieczePoltorareczne: data.MieczePółtoraręczne,
        MieczeDlugie: data.MieczeDługie,
        MieczeKrotkie: data.MieczeKrótkie,
        Topory: data.Topory,
        MieczeObureczne: data.MieczeOburęczne,
        Katany: data.Katany,
        SejmitarWakizashiNinjaTo: data.SejmitarWakizashiNinjaTo,
        Sztylety: data.Sztylety,
        MlotyBojowe: data.MłotyBojowe,
        Maczugi: data.Maczugi,
        Wlocznie: data.Włócznie,
        Halabarda: data.Halabarda,
        CepyBojoweMorgernszterny: data.CepyBojoweMorgernszterny,
        Wiekiery: data.Wiekiery,
        Kije: data.Kije,
        Kusze: data.Kusze,
        DlugieLuki: data.DługieŁuki,
        KrotkieLuki: data.KrótkieŁuki,
        Strzalki: data.Strzałki,
        Proce: data.Proce,
        StylWalkiBroniaDwureczna: data.StylWalkiBroniąDwuręczną,
        StylWalkiMieczemITarcza: data.StylWalkiMieczemITarczą,
        StylWalkiJednaBronia: data.StylWalkiJednąBronią,
        StylWalkiDwiemaBronmi: data.StylWalkiDwiemaBrońmi,
        skillPoints: data.skillPoints
      }
    });
  }
}

async function insertThievingAbilitiesToSubclassData() {
  const thievingAbilitiesToSubclassData = [
    { subclass: "Łowca",                   Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: -1, Ciche_Poruszanie: 55, Krycie_W_Cieniu: 55, Znajdywanie_Pułapek: -1, Wykrywanie_Iluzji: -1, Rozstawianie_Pułapek: -1, skillPointsThief: 0 },
    { subclass: "Łucznik",                 Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: -1, Ciche_Poruszanie: 55, Krycie_W_Cieniu: 55, Znajdywanie_Pułapek: -1, Wykrywanie_Iluzji: -1, Rozstawianie_Pułapek: -1, skillPointsThief: 0 },
    { subclass: "Tropiciel",               Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: -1, Ciche_Poruszanie: 55, Krycie_W_Cieniu: 55, Znajdywanie_Pułapek: -1, Wykrywanie_Iluzji: -1, Rozstawianie_Pułapek: -1, skillPointsThief: 0 },
    { subclass: "Władca_Zwierząt",         Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: -1, Ciche_Poruszanie: 55, Krycie_W_Cieniu: 55, Znajdywanie_Pułapek: -1, Wykrywanie_Iluzji: -1, Rozstawianie_Pułapek: -1, skillPointsThief: 0 },
    { subclass: "Złodziej",                Otwieranie_Zamków: 0, Kradzież_Kieszonkowa: 0, Ciche_Poruszanie: 0, Krycie_W_Cieniu: 0, Znajdywanie_Pułapek: 0, Wykrywanie_Iluzji: 0, Rozstawianie_Pułapek: 0, skillPointsThief: 215 },
    { subclass: "Zabójca",                 Otwieranie_Zamków: 0, Kradzież_Kieszonkowa: 0, Ciche_Poruszanie: 0, Krycie_W_Cieniu: 0, Znajdywanie_Pułapek: 0, Wykrywanie_Iluzji: 0, Rozstawianie_Pułapek: 0, skillPointsThief: 215 },
    { subclass: "Łowca_Nagród",            Otwieranie_Zamków: 0, Kradzież_Kieszonkowa: 0, Ciche_Poruszanie: 0, Krycie_W_Cieniu: 0, Znajdywanie_Pułapek: 0, Wykrywanie_Iluzji: 0, Rozstawianie_Pułapek: 0, skillPointsThief: 215 },
    { subclass: "Zawadiaka",               Otwieranie_Zamków: 0, Kradzież_Kieszonkowa: 0, Ciche_Poruszanie: 0, Krycie_W_Cieniu: 0, Znajdywanie_Pułapek: 0, Wykrywanie_Iluzji: 0, Rozstawianie_Pułapek: 0, skillPointsThief: 215 },
    { subclass: "Tancerz_Cieni",           Otwieranie_Zamków: 0, Kradzież_Kieszonkowa: 0, Ciche_Poruszanie: 0, Krycie_W_Cieniu: 0, Znajdywanie_Pułapek: 0, Wykrywanie_Iluzji: 0, Rozstawianie_Pułapek: 0, skillPointsThief: 215 },
    { subclass: "Bard",                    Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: 60, Ciche_Poruszanie: -1, Krycie_W_Cieniu: -1, Znajdywanie_Pułapek: -1, Wykrywanie_Iluzji: -1, Rozstawianie_Pułapek: -1, skillPointsThief: 0 },
    { subclass: "Fechmistrz",              Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: 60, Ciche_Poruszanie: -1, Krycie_W_Cieniu: -1, Znajdywanie_Pułapek: -1, Wykrywanie_Iluzji: -1, Rozstawianie_Pułapek: -1, skillPointsThief: 0 },
    { subclass: "Błazen",                  Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: 60, Ciche_Poruszanie: -1, Krycie_W_Cieniu: -1, Znajdywanie_Pułapek: -1, Wykrywanie_Iluzji: -1, Rozstawianie_Pułapek: -1, skillPointsThief: 0 },
    { subclass: "Skald",                   Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: 60, Ciche_Poruszanie: -1, Krycie_W_Cieniu: -1, Znajdywanie_Pułapek: -1, Wykrywanie_Iluzji: -1, Rozstawianie_Pułapek: -1, skillPointsThief: 0 },
    { subclass: "Mnich",                   Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: -1, Ciche_Poruszanie: -1, Krycie_W_Cieniu: 0, Znajdywanie_Pułapek: 0, Wykrywanie_Iluzji: -1, Rozstawianie_Pułapek: -1, skillPointsThief: 60 },
    { subclass: "Mnich_Ciemnego_Księżyca", Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: -1, Ciche_Poruszanie: 0, Krycie_W_Cieniu: 0, Znajdywanie_Pułapek: 0, Wykrywanie_Iluzji: 0, Rozstawianie_Pułapek: -1, skillPointsThief: 60 },
    { subclass: "Mnich_Słonecznej_Duszy",  Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: -1, Ciche_Poruszanie: 0, Krycie_W_Cieniu: 0, Znajdywanie_Pułapek: 0, Wykrywanie_Iluzji: -1, Rozstawianie_Pułapek: -1, skillPointsThief: 60 },
    { subclass: "Szaman",                  Otwieranie_Zamków: -1, Kradzież_Kieszonkowa: -1, Ciche_Poruszanie: -1, Krycie_W_Cieniu: -1, Znajdywanie_Pułapek: -1, Wykrywanie_Iluzji: 48, Rozstawianie_Pułapek: -1, skillPointsThief: 0 },
    
    ];

  for (const data of thievingAbilitiesToSubclassData) {
    await prisma.thievingAbilitiesToSubclass.create({
      data: {
        subclass: data.subclass,
        Otwieranie_Zamkow: data.Otwieranie_Zamków,
        Kradziez_Kieszonkowa: data.Kradzież_Kieszonkowa,
        Ciche_Poruszanie: data.Ciche_Poruszanie,
        Krycie_W_Cieniu: data.Krycie_W_Cieniu,
        Znajdywanie_Pulapek: data.Znajdywanie_Pułapek,
        Wykrywanie_Iluzji: data.Wykrywanie_Iluzji,
        Rozstawianie_Pulapek: data.Rozstawianie_Pułapek,
        skillPointsThief: data.skillPointsThief,
      }
    });
  }
}

async function insertMalePortraitsData() {
  const malePortraitsData = [
      {name: "AJANTISM.png"},
      {name: "ASAADM.png"},
      {name: "BDORCM1M.png"},
      {name: "BDSHAM1M.png"},
      {name: "BDTMAM.png"},
      {name: "BDTMCM.png"},
      {name: "BDTMDM.png"},
      {name: "BDTMGM.png"},
      {name: "BDTMHM.png"},
      {name: "BDTMIM.png"},
      {name: "BDTMKM.png"},
      {name: "CORANM.png"},
      {name: "DORNLM.png"},
      {name: "EDWINM.png"},
      {name: "ELDOTHM.png"},
      {name: "GARRICKM.png"},
      {name: "GENDWRFM.png"},
      {name: "GENMELFM.png"},
      {name: "GENMHLFM.png"},
      {name: "HELMM.png"},
      {name: "HVLNM.png"},
      {name: "KAGAINM.png"},
      {name: "KHALIDM.png"},
      {name: "KIVANM.png"},
      {name: "MAN1M.png"},
      {name: "MAN2M.png"},
      {name: "MANLEY3M.png"},
      {name: "MANLEY7M.png"},
      {name: "MANLEY8M.png"},
      {name: "MANLEY9M.png"},
      {name: "MINSCM.png"},
      {name: "MONTARM.png"},
      {name: "NANOMENM.png"},
      {name: "NCERNDM.png"},
      {name: "NEDWINM.png"},
      {name: "NHAERM.png"},
      {name: "NHORCM.png"},
      {name: "NJANM.png"},
      {name: "NKELDORM.png"},
      {name: "NKORGANM.png"},
      {name: "NMINSCM.png"},
      {name: "NVALYGAM.png"},
      {name: "NYOSHIMM.png"},
      {name: "RASAADM.png"},
      {name: "QUAYLEM.png"},
      {name: "TIAXM.png"},
      {name: "XANM.png"},
      {name: "XZARM.png"},
      {name: "YANNER4M.png"},
      {name: "YANNER5M.png"},
      {name: "YANNER6M.png"},
      {name: "YESLICKM.png"},
    ];

  for (const data of malePortraitsData) {
    await prisma.malePortraits.create({
      data: {
        fileName: data.name,
      }
    });
  }
}

async function insertFemalePortraitsData() {
  const femalePortraitsData = [
      {name: "ALORAM.png"},
      {name: "BDORCF1M.png"},
      {name: "BDSHAF1M.png"},
      {name: "BDTMBM.png"},
      {name: "BDTMEM.png"},
      {name: "BDTMFM.png"},
      {name: "BDTMJM.png"},
      {name: "BRANWEM.png"},
      {name: "DYNAHEIM.png"},
      {name: "FALDORNM.png"},
      {name: "IMOENM.png"},
      {name: "JAHEIRAM.png"},
      {name: "MANLEY1M.png"},
      {name: "MANLEY2M.png"},
      {name: "MANLEY4M.png"},
      {name: "MANLEY5M.png"},
      {name: "MANLEYXM.png"},
      {name: "NAERIEM.png"},
      {name: "NEERAM.png"},
      {name: "NIMOENM.png"},
      {name: "NJAHEIRM.png"},
      {name: "NMAZZYM.png"},
      {name: "NNALIAM.png"},
      {name: "NVICONM.png"},
      {name: "OHHEXM.png"},
      {name: "SAFANAM.png"},
      {name: "SHARTELM.png"},
      {name: "SKANM.png"},
      {name: "SKIEM.png"},
      {name: "VICONIAM.png"},
      {name: "WOMAN1M.png"},
      {name: "WOMAN2M.png"},
      {name: "YANNER1M.png"},
      {name: "YANNER2M.png"},
      {name: "YANNER3M.png"},
    ];

  for (const data of femalePortraitsData) {
    await prisma.femalePortraits.create({
      data: {
        fileName: data.name,
      }
    });
  }
}

async function insertWizardSpellData() {
  const wizardSpellData = [
    //level 1 spells
    {name: "Identyfikacja", school: "Poznanie", level: 1, descriptionFile: "Identyfikacja.txt", iconFile: "SPWI110.png", hexData: "SPWI110"},
    {name: "Infrawizja", school: "Poznanie", level: 1, descriptionFile: "Infrawizja.txt", iconFile: "SPWI111.png", hexData: "SPWI111"},
    {name: "Magiczny Pocisk", school: "Wywoływanie", level: 1, descriptionFile: "Magiczny Pocisk.txt", iconFile: "SPWI112.png", hexData: "SPWI112"},
    {name: "Migoczące Barwy", school: "Przemiany", level: 1, descriptionFile: "Migoczące Barwy.txt", iconFile: "SPWI105.png", hexData: "SPWI105"},
    {name: "Ochrona Przed Petryfikacją", school: "Odrzucanie", level: 1, descriptionFile: "Ochrona Przed Petryfikacją.txt", iconFile: "SPWI108.png", hexData: "SPWI108"},
    {name: "Ochrona Przed Złem", school: "Odrzucanie", level: 1, descriptionFile: "Ochrona Przed Złem.txt", iconFile: "SPWI113.png", hexData: "SPWI113"},
    {name: "Ociemniałość", school: "Iluzje/Urojenia", level: 1, descriptionFile: "Ociemniałość.txt", iconFile: "SPWI106.png", hexData: "SPWI106"},
    {name: "Odbity Obraz", school: "Iluzje/Urojenia", level: 1, descriptionFile: "Odbity Obraz.txt", iconFile: "SPWI120.png", hexData: "SPWI120"},
    {name: "Pomniejsze drążnie Larlocha", school: "Nekromancja", level: 1, descriptionFile: "Pomniejsze drążnie Larlocha.txt", iconFile: "SPWI119.png", hexData: "SPWI119"},
    {name: "Porażający uścisk", school: "Przemiany", level: 1, descriptionFile: "Porażający uścisk.txt", iconFile: "SPWI115.png", hexData: "SPWI115"},
    {name: "Przerażenie", school: "Iluzje/Urojenia", level: 1, descriptionFile: "Przerażenie.txt", iconFile: "SPWI125.png", hexData: "SPWI125"},
    {name: "Przyjaciele", school: "Zaczarowania/Zauroczenia", level: 1, descriptionFile: "Przyjaciele.txt", iconFile: "SPWI107.png", hexData: "SPWI107"},
    {name: "Przywołanie Chowańca", school: "Sprowadzanie/Przywoływanie", level: 1, descriptionFile: "Przywołanie Chowańca.txt", iconFile: "SPWI123.png", hexData: "SPWI123"},
    {name: "Płonące Dłonie", school: "Przemiany", level: 1, descriptionFile: "Płonące Dłonie.txt", iconFile: "SPWI103.png", hexData: "SPWI103"},
    {name: "Tarcza", school: "Wywoływanie", level: 1, descriptionFile: "Tarcza.txt", iconFile: "SPWI114.png", hexData: "SPWI114"},
    {name: "Uśpeine", school: "Zaczarowania/Zauroczenia", level: 1, descriptionFile: "Uśpeine.txt", iconFile: "SPWI116.png", hexData: "SPWI116"},
    {name: "Zauroczenie Osoby", school: "Zaczarowania/Zauroczenia", level: 1, descriptionFile: "Zauroczenie Osoby.txt", iconFile: "SPWI104.png", hexData: "SPWI104"},
    {name: "Zbroja", school: "Sprowadzanie", level: 1, descriptionFile: "Zbroja.txt", iconFile: "SPWI102.png", hexData: "SPWI102"}, //TERAZ TURAJ
    {name: "Zmiennobarwna Kula", school: "Wywoływanie", level: 1, descriptionFile: "Zmiennobarwna kula.txt", iconFile: "SPWI118.png", hexData: "SPWI118"},
    {name: "Zamrażający Dotyk", school: "Nekromancja", level: 1, descriptionFile: "Zamrażający Dotyk.txt", iconFile: "SPWI117.png", hexData: "SPWI117"},
    {name: "Śliskość", school: "Sprowadzanie/Przywoływanie", level: 1, descriptionFile: "Śliskość.txt", iconFile: "SPWI101.png", hexData: "SPWI101"},
    //level 2 spells
    {name: "Błyszczący Pył", school: "Sprowadzanie/Przywoływanie", level: 2, descriptionFile: "Błyszczący Pył.txt", iconFile: "SPWI224.png", hexData: "SPWI224"},
    {name: "Dotyk Ghula", school: "Nekroancja", level: 2, descriptionFile: "Dotyk Ghula.txt", iconFile: "SPWI218.png", hexData: "SPWI218"},
    {name: "Groza", school: "Nekroancja", level: 2, descriptionFile: "Groza.txt", iconFile: "SPWI205.png", hexData: "SPWI205"},
    {name: "Głuchota", school: "Iluzje/Urojenia", level: 2, descriptionFile: "Głuchota.txt", iconFile: "SPWI223.png", hexData: "SPWI223"},
    {name: "Kwasowa Strzała Melfa", school: "Sprowadzanie/Przywoływanie", level: 2, descriptionFile: "Kwasowa Strzała Melfa.txt", iconFile: "SPWI211.png", hexData: "SPWI211"},
    {name: "Lustrzane Odbicie", school: "Iluzje/Urojenia", level: 2, descriptionFile: "Lustrzane Odbicie.txt", iconFile: "SPWI212.png", hexData: "SPWI212"},
    {name: "Niewidzialność", school: "Iluzje/Urojenia", level: 2, descriptionFile: "Niewidzialność.txt", iconFile: "SPWI206.png", hexData: "SPWI206"},
    {name: "Odporność na Strach", school: "Odrzucanie", level: 2, descriptionFile: "Odporność na Strach.txt", iconFile: "SPWI210.png", hexData: "SPWI210"},
    {name: "Otwarcie", school: "Przemiany", level: 2, descriptionFile: "Otwarcie.txt", iconFile: "SPWI207.png", hexData: "SPWI207"},
    {name: "Pajęczyna", school: "Wywoływanie", level: 2, descriptionFile: "Pajęczyna.txt", iconFile: "SPWI215.png", hexData: "SPWI215"},
    {name: "Poznanie Charakteru", school: "Poznanie", level: 2, descriptionFile: "Poznanie Charakteru.txt", iconFile: "SPWI208.png", hexData: "SPWI208"},
    {name: "Promień Osłabienia", school: "Zaczarowania/Zauroczenia", level: 2, descriptionFile: "Promień Osłabienia.txt", iconFile: "SPWI221.png", hexData: "221"},
    {name: "Płomienie Agannazara", school: "Wywoływanie", level: 2, descriptionFile: "Płomienie Agannazara.txt", iconFile: "SPWI217.png", hexData: "SPWI217"},
    {name: "Rozmycie", school: "Iluzje/Urojenia", level: 2, descriptionFile: "Rozmycie.txt", iconFile: "SPWI201.png", hexData: "SPWI201"},
    {name: "Szczęście", school: "Zaczarowania/Zauroczenia", level: 2, descriptionFile: "Szczęscie.txt", iconFile: "SPWI209.png", hexData: "SPWI209"},
    {name: "Słowo Mocy: Uśpienie", school: "Sprowadzanie/Przywoływanie", level: 2, descriptionFile: "Słowo Mocy: Uśpienie.txt", iconFile: "SPWI220.png", hexData: "SPWI220"},
    {name: "Ugłosowienie", school: "Przemiany", level: 2, descriptionFile: "Ugłosowienie.txt", iconFile: "SPWI219.png", hexData: "SPWI219"},
    {name: "Wykrycie Niewidzialnego", school: "Poznanie", level: 2, descriptionFile: "Wykrycie Niewidzialnego.txt", iconFile: "SPWI203.png", hexData: "SPWI203"},
    {name: "Wykrycie Zła", school: "Poznanie", level: 2, descriptionFile: "Wykrycie Zła.txt", iconFile: "SPWI202.png", hexData: "SPWI202"},
    {name: "Wzmocnienie Siły", school: "Przemiany", level: 2, descriptionFile: "Wzmocnienie Siły.txt", iconFile: "SPWI214.png", hexData: "SPWI214"},
    {name: "Śmierdząca Chmura", school: "Wywoływanie", level: 2, descriptionFile: "Śmierdząca Chmura.txt", iconFile: "SPWI213.png", hexData: "SPWI213"},
    //level 3 spells
    {name: "Błyskawica", school: "Wywoływanie", level: 3, descriptionFile: "Błyskawica.txt", iconFile: "SPWI308.png", hexData: "SPWI308"},
    {name: "Duchowy Pancerz", school: "Sprowadzanie/Przywoływanie", level: 3, descriptionFile: "Duchowy Pancerz.txt", iconFile: "SPWI317.png", hexData: "SPWI317"},
    {name: "Eksplodująca Czaszka", school: "Nekromancja", level: 3, descriptionFile: "Eksplodująca Czaszka.txt", iconFile: "SPWI313.png", hexData: "SPWI313"},
    {name: "Jasnowidzenie", school: "Poznanie", level: 3, descriptionFile: "Jasnowidzenie.txt", iconFile: "SPWI301.png", hexData: "SPWI301"},
    {name: "Miniaturowe Meteory Melfa", school: "Wywoływanie", level: 3, descriptionFile: "Miniaturowe Meteory Melfa.txt", iconFile: "SPWI325.png", hexData: "SPWI325"},
    {name: "Mniejsze Odchylenie Czaru", school: "Odrzucanie", level: 3, descriptionFile: "Mniejsze Odchylenie Czaru.txt", iconFile: "SPWI318.png", hexData: "SPWI318"},
    {name: "Niewidzialność, promień 3 metry", school: "Iluzje/Urojenia", level: 3, descriptionFile: "Niewidzialność, promień 3 metry.txt", iconFile: "SPWI307.png", hexData: "SPWI307"},
    {name: "Niewykrywalność", school: "Odrzucanie", level: 3, descriptionFile: "Niewykrywalność.txt", iconFile: "SPWI310.png", hexData: "SPWI310"},
    {name: "Ochrona Przed Ogniem", school: "Odrzucanie", level: 3, descriptionFile: "Ochrona Przed Ogniem.txt", iconFile: "SPWI319.png", hexData: "SPWI319"},
    {name: "Ochrona Przed Zimnem", school: "Odrzucanie", level: 3, descriptionFile: "Ochrona Przed Zimnem.txt", iconFile: "SPWI320.png", hexData: "SPWI320"},
    {name: "Ochrona Przed Zwykłymi Pociskami", school: "Odrzucanie", level: 3, descriptionFile: "Ochrona Przed Zwykłymi Pociskami.txt", iconFile: "SPWI311.png", hexData: "SPWI311"},
    {name: "Ognista Kula", school: "Wywoływanie", level: 3, descriptionFile: "Ognista Kula.txt", iconFile: "SPWI304.png", hexData: "SPWI304"},
    {name: "Ognista Strzała", school: "Sprowadzanie/Przywoływanie", level: 3, descriptionFile: "Ognista Strzała.txt", iconFile: "SPWI303.png", hexData: "SPWI303"},
    {name: "Okropne Zauroczenie", school: "Zaczarowania/Zauroczenia", level: 3, descriptionFile: "Okropne Zauroczenie.txt", iconFile: "SPWI316.png", hexData: "SPWI316"},
    {name: "Przyspieszenie Ruchów", school: "Przemiany", level: 3, descriptionFile: "Przyspieszenie Ruchów.txt", iconFile: "SPWI305.png", hexData: "SPWI305"},
    {name: "Przywołanie Potwora I", school: "Sprowadzanie/Przywoływanie", level: 3, descriptionFile: "Przywołanie Potwora I.txt", iconFile: "SPWI309.png", hexData: "SPWI309"},
    {name: "Półmaterialność", school: "Przemiany, Iluzje", level: 3, descriptionFile: "Półmaterialność.txt", iconFile: "SPWI315.png", hexData: "SPWI315"},
    {name: "Rozproszenie Magii", school: "Odrzucanie", level: 3, descriptionFile: "Rozproszenie Magii.txt", iconFile: "SPWI326.png", hexData: "SPWI326"},
    {name: "Spowolnienie", school: "Przemiany", level: 3, descriptionFile: "Spowolnienie.txt", iconFile: "SPWI312.png", hexData: "SPWI312"},
    {name: "Unieruchomienie nieumarłego", school: "Nekromancja", level: 3, descriptionFile: "Unieruchomienie nieumarłego.txt", iconFile: "SPWI324.png", hexData: "SPWI324"},
    {name: "Unieruchomienie osoby", school: "Zaczarowania/Zauroczenia", level: 3, descriptionFile: "Unieruchomienie osoby.txt", iconFile: "SPWI306.png", hexData: "SPWI306"},
    {name: "Usunięcie Magii", school: "Odrzucanie", level: 3, descriptionFile: "Usunięcie Magii.txt", iconFile: "SPWI302.png", hexData: "SPWI302"},
    {name: "Wampiryczne dotknięcie", school: "Nekromancja", level: 3, descriptionFile: "Wampiryczne dotknięcie.txt", iconFile: "SPWI314.png", hexData: "SPWI314"},
    {name: "Wykrycie Ilizji", school: "Poznanie", level: 3, descriptionFile: "Wykrycie Ilizji.txt", iconFile: "SPWI322.png", hexData: "SPWI322"},
    {name: "Zbicie Czaru", school: "Odrzucanie", level: 3, descriptionFile: "Zbicie Czaru.txt", iconFile: "SPWI321.png", hexData: "SPWI321"},
    //level 4 spells
    {name: "Czarodziejskie Oko", school: "Poznanie, Przemiany", level: 4, descriptionFile: "Czarodziejskie Oko.txt", iconFile: "SPWI425.png", hexData: "SPWI425"},
    {name: "Dalekowzroczność", school: "Poznanie", level: 4, descriptionFile: "Dalekowzroczność.txt", iconFile: "SPWI424.png", hexData: "SPWI424"},
    {name: "Emocje: Beznadziejność", school: "Zaczarowania/Zauroczenia", level: 4, descriptionFile: "Emocje: Beznadziejność.txt", iconFile: "SPWI411.png", hexData: "SPWI411"},
    {name: "Kamienna Skóra", school: "Przemiany", level: 4, descriptionFile: "Kamienna Skóra.txt", iconFile: "SPWI408.png", hexData: "SPWI408"},
    {name: "Klosz Niewrażliwosci Mniejszej", school: "Odrzucanie", level: 4, descriptionFile: "Klosz Niewrażliwosci Mniejszej.txt", iconFile: "SPWI406.png", hexData: "SPWI406"},
    {name: "Lodowa Nawałnica", school: "Wywoływanie", level: 4, descriptionFile: "Lodowa Nawałnica.txt", iconFile: "SPWI404.png", hexData: "SPWI404"},
    {name: "Mniejszy sekwencer", school: "Inwokacje/Wywoływanie", level: 4, descriptionFile: "Mniejszy sekwencer.txt", iconFile: "SPWI420.png", hexData: "SPWI420"},
    {name: "Nienaruszalna Sfera Otiluka", school: "Przemiany", level: 4, descriptionFile: "Nienaruszalna Sfera Otiluka.txt", iconFile: "SPWI413.png", hexData: "SPWI413"},
    {name: "Ognista Taracza (błękitna)", school: "Wywoływanie", level: 4, descriptionFile: "Ognista Taracza (błękitna).txt", iconFile: "SPWI403.png", hexData: "SPWI403"},
    {name: "Ognista Taracza (czerwona)", school: "Wywoływanie", level: 4, descriptionFile: "Ognista Taracza (czerwona).txt", iconFile: "SPWI418.png", hexData: "SPWI418"},
    {name: "Pajęczy Pomiot", school: "Sprowadzanie/Przywoływanie", level: 4, descriptionFile: "Pajęczy Pomiot.txt", iconFile: "SPWI423.png", hexData: "SPWI423"},
    {name: "Pancerz Eteralny", school: "Nekromancja", level: 4, descriptionFile: "Pancerz Eteralny.txt", iconFile: "SPWI414.png", hexData: "SPWI414"},
    {name: "Pole Teleportacyjne", school: "Przemiany", level: 4, descriptionFile: "Pole Teleportacyjne.txt", iconFile: "SPWI421.png", hexData: "SPWI421"},
    {name: "Polimorfowanie Innego", school: "Przemiany", level: 4, descriptionFile: "Polimorfowanie Innego.txt", iconFile: "SPWI415.png", hexData: "SPWI415"},
    {name: "Polimorfowanie Siebie", school: "Przemiany", level: 4, descriptionFile: "Polimorfowanie Siebie.txt", iconFile: "SPWI416.png", hexData: "SPWI416"},
    {name: "Przywołanie Potwora II", school: "Sprowadzanie/Przywoływanie", level: 4, descriptionFile: "Przywołanie Potwora II.txt", iconFile: "SPWI407.png", hexData: "SPWI407"},
    {name: "Tajemne Słowo", school: "Odrzucanie", level: 4, descriptionFile: "Tajemne Słowo.txt", iconFile: "SPWI419.png", hexData: "SPWI419"},
    {name: "Ulepszona Niewidzialność", school: "Iluzje/Urojenia", level: 4, descriptionFile: "Ulepszona Niewidzialność.txt", iconFile: "SPWI405.png", hexData: "SPWI405"},
    {name: "Wielkie Osłabienie", school: "Zaczarowania/Zauroczenia", level: 4, descriptionFile: "Wielkie Osłabienie.txt", iconFile: "SPWI412.png", hexData: "412"},
    {name: "Zaklęta Broń", school: "Zaczarowania/Zauroczenia", level: 4, descriptionFile: "Zaklęta Broń.txt", iconFile: "SPWI417.png", hexData: "SPWI417"},
    {name: "Zamęt", school: "Zaczarowania/Zauroczenia", level: 4, descriptionFile: "Zamęt.txt", iconFile: "SPWI401.png", hexData: "SPWI401"},
    {name: "Zaraza", school: "Nekromancja", level: 4, descriptionFile: "Zaraza.txt", iconFile: "SPWI409.png", hexData: "SPWI409"},
    {name: "Zdjęcie Klątwy", school: "Odrzucanie", level: 4, descriptionFile: "Zdjęcie Klątwy.txt", iconFile: "SPWI410.png", hexData: "SPWI410"},
    //Wild magic
    {name: "Lekkomyślne zaklęcie Nahala", school: "Inwokacje/Wywoływaniem, Dzika", level: 1, descriptionFile: "Lekkomyślne zaklęcie Nahala.txt", iconFile: "SPWI124.png", hexData: "SPWI124"},
    {name: "Tarcza Chaosu", school: "Odrzucanie, Dzika", level: 3, descriptionFile: "Tarcza Chaosu.txt", iconFile: "SPWI222.png", hexData: "SPWI222"},
    

  ]

  for (const data of wizardSpellData) {
    await prisma.wizardSpells.create({
      data: {
        name: data.name,
        school: data.school,
        level: data.level,
        descriptionFile: data.descriptionFile,
        iconFile: data.iconFile,
        hexData: data.hexData
      }
    })
  }
}


async function insertClericSpellData() {
  const clericSpellData = [
    //level 1 spells
    {name: "Błogosławieństwo", school: "Sprowadzanie/Przywoływanie", level: 1, descriptionFile: "Błogosławieństwo.txt", iconFile: "SPPR101.png", hexData: "SPPR101"},
    {name: "Leczenie Lekkich Ran", school: "Nekroancja", level: 1, descriptionFile: "Leczenie Lekkich Ran.txt", iconFile: "SPPR103.png", hexData: "SPPR103"},
    {name: "Magiczny Kamień", school: "Zaczarowania", level: 1, descriptionFile: "Magiczny Kamień.txt", iconFile: "SPPR106.png", hexData: "SPPR106"},
    {name: "Metamorfoza Laski W Broń", school: "Przemiany", level: 1, descriptionFile: "Metamorfoza Laski W Broń.txt", iconFile: "SPPR110.png", hexData: "SPPR110"},
    {name: "Ochrona Przed Złem", school: "Odrzucanie", level: 1, descriptionFile: "Ochrona Przed Złem.txt", iconFile: "SPPR107.png", hexData: "SPPR107"},
    {name: "Przełamanie Strachu", school: "Odrzucanie", level: 1, descriptionFile: "Przełamanie Strachu.txt", iconFile: "SPPR108.png", hexData: "SPPR108"},
    {name: "Rozkaz", school: "Zaczarowania/Zauroczenia", level: 1, descriptionFile: "Rozkaz.txt", iconFile: "SPPR102.png", hexData: "SPPR102"},
    {name: "Sanktuarium", school: "Odrzucanie", level: 1, descriptionFile: "Sanktuarium.txt", iconFile: "SPPR109.png", hexData: "SPPR109"},
    {name: "Wykrycie Zła", school: "Poznanie", level: 1, descriptionFile: "Wykrycie Zła.txt", iconFile: "SPPR104.png", hexData: "SPPR104"},
    {name: "Zagłada", school: "Przemiany", level: 1, descriptionFile: "Zagłada.txt", iconFile: "SPPR113.png", hexData: "SPPR113"},
    {name: "Zabroja Wiary", school: "Odrzucanie", level: 1, descriptionFile: "Zabroja Wiary.txt", iconFile: "SPPR111.png", hexData: "SPPR111"},
    //level 2 spells
    {name: "Cisza, promień 5 metrów", school: "Przemiany", level: 2, descriptionFile: "Cisza, promień 5 metrów.txt", iconFile: "SPPR211.png", hexData: "SPPR211"},
    {name: "Korowa Skóra", school: "Przemiany", level: 2, descriptionFile: "Korowa Skóra.txt", iconFile: "SPPR202.png", hexData: "SPPR202"},
    {name: "Młot Duchowy", school: "Inwokacje", level: 2, descriptionFile: "Młot Duchowy.txt", iconFile: "SPPR213.png", hexData: "SPPR213"},
    {name: "Odorność na Ogień/Zimno", school: "Przemiany", level: 2, descriptionFile: "Odorność na Ogień/Zimno.txt", iconFile: "SPPR210.png", hexData: "SPPR210"},
    {name: "Pomoc", school: "Nekromancja, Sprowadzanie", level: 2, descriptionFile: "Pomoc.txt", iconFile: "SPPR201.png", hexData: "SPPR201"},
    {name: "Poznanie Charakteru", school: "Poznanie", level: 2, descriptionFile: "Poznanie Charakteru.txt", iconFile: "SPPR209.png", hexData: "SPPR209"},
    {name: "Przywołanie Boskiej Mocy", school: "Inwokacje", level: 2, descriptionFile: "Przywołanie Boskiej Mocy.txt", iconFile: "SPPR214.png", hexData: "SPPR214"},
    {name: "Psalm", school: "Sprowadzanie/Przywoływanie", level: 2, descriptionFile: "Psalm.txt", iconFile: "SPPR203.png", hexData: "SPPR203"},
    {name: "Płomienne ostrze", school: "Wywoływanie", level: 2, descriptionFile: "Płomienne ostrze.txt", iconFile: "SPPR206.png", hexData: "SPPR206"},
    {name: "Spowlonienie Trucizny", school: "Nekromancja", level: 2, descriptionFile: "Spowlonienie Trucizny.txt", iconFile: "SPPR212.png", hexData: "SPPR212"},
    {name: "Unieruchomienie Osoby", school: "Zaczarowania/Zauroczenia", level: 2, descriptionFile: "Unieruchomienie Osoby.txt", iconFile: "SPPR208.png", hexData: "SPPR208"},
    {name: "Znajdowanie Pułapek", school: "Poznanie", level: 2, descriptionFile: "Znajdowanie Pułapek.txt", iconFile: "SPPR205.png", hexData: "SPPR205"},
    //level 3 spells
    {name: "Animacja Martwego", school: "Nekromancja", level: 3, descriptionFile: "Animacja Martwego.txt", iconFile: "SPPR301.png", hexData: "SPPR301"},
    {name: "Bezmyślność", school: "Zaczarowania/Zauroczenia", level: 3, descriptionFile: "Bezmyślność.txt", iconFile: "SPPR311.png", hexData: "SPPR311"},
    {name: "Glif Strażnicy", school: "Odrzucanie, Wywoływanie", level: 3, descriptionFile: "Glif Strażnicy.txt", iconFile: "SPPR204.png", hexData: "SPPR204"},
    {name: "Leczenie Chorób", school: "Odrzucanie", level: 3, descriptionFile: "Leczenie Chorób.txt", iconFile: "SPPR317.png", hexData: "SPPR317"},
    {name: "Leczenie Średnich Ran", school: "Nekromancja", level: 3, descriptionFile: "Leczenie Średnich Ran.txt", iconFile: "SPPR315.png", hexData: "SPPR315"},
    {name: "Ochrona Przed Ogniem", school: "Odrzucanie", level: 3, descriptionFile: "Ochrona Przed Ogniem.txt", iconFile: "SPPR306.png", hexData: "SPPR306"},
    {name: "Pozbawienie Magi", school: "Zaczarowania/Zauroczenia", level: 3, descriptionFile: "Pozbawienie Magi.txt", iconFile: "SPPR310.png", hexData: "SPPR310"},
    {name: "Przeklęta Strefa", school: "Nekromancja", level: 3, descriptionFile: "Przeklęta Srefa.txt", iconFile: "SPPR314.png", hexData: "SPPR314"},
    {name: "Rozproszenie Magii", school: "Przemiany", level: 3, descriptionFile: "Rozproszenie Magii.txt", iconFile: "SPPR303.png", hexData: "SPPR303"},
    {name: "Siła Jedności", school: "Przemiany", level: 3, descriptionFile: "Siła Jedności.txt", iconFile: "SPPR313.png", hexData: "SPPR313"},
    {name: "Strefa Czystergo Powietrza", school: "Odrzucanie", level: 3, descriptionFile: "Strefa Czystergo Powietrza.txt", iconFile: "SPPR318.png", hexData: "SPPR318"},
    {name: "Ujawnienie Niewidzialnego", school: "Poznanie", level: 3, descriptionFile: "Ujawnienie Niewidzialnego.txt", iconFile: "SPPR309.png", hexData: "SPPR309"},
    {name: "Zdjęcie Klątwy", school: "Odrzucanie", level: 3, descriptionFile: "Zdjęcie Klątwy.txt", iconFile: "SPPR307.png", hexData: "SPPR307"},
    {name: "Zdjęcie Paraliżu", school: "Odrzucanie", level: 3, descriptionFile: "Zdjęcie Paraliżu.txt", iconFile: "SPPR308.png", hexData: "SPPR308"},
    {name: "Święte Uderzenie", school: "Nekromancja", level: 3, descriptionFile: "Święte Uderzenie.txt", iconFile: "SPPR313.png", hexData: "SPPR313"},
    //level 4 spells
    {name: "Dalekowzroczność", school: "Poznanie", level: 4, descriptionFile: "Dalekowzroczność.txt", iconFile: "SPPR415.png", hexData: "SPPR415"},
    {name: "Dominacja Umysłowa", school: "Zaczarowania/Zauroczenia", level: 4, descriptionFile: "Dominacja Umysłowa.txt", iconFile: "SPPR405.png", hexData: "SPPR405"},
    {name: "Jedność Obronna", school: "Zaczarowania/Zauroczenia", level: 4, descriptionFile: "Jedność Obronna.txt", iconFile: "SPPR406.png", hexData: "SPPR406"},
    {name: "Leczenie Poważnych Ran", school: "Nekromancja", level: 4, descriptionFile: "Leczenie Poważnych Ran.txt", iconFile: "SPPR401.png", hexData: "SPPR401"},
    {name: "Neutralizacja Trucizny", school: "Nekromancja", level: 4, descriptionFile: "Neutralizacja Trucizny.txt", iconFile: "SPPR404.png", hexData: "SPPR404"},
    {name: "Ochrona Przed Błyskawicami", school: "Odrzucanie", level: 4, descriptionFile: "Ochrona Przed Błyskawicami.txt", iconFile: "SPPR407.png", hexData: "SPPR407"},
    {name: "Ochrona Przed Negatywną Energią", school: "Odrzucanie", level: 4, descriptionFile: "Ochrona Przed Negatywną Energią.txt", iconFile: "SPPR413.png", hexData: "SPPR413"},
    {name: "Ochrona Przed Złem, promień 3 metry", school: "Odrzucanie", level: 4, descriptionFile: "Ochrona Przed Złem, promień 3 metry.txt", iconFile: "SPPR408.png", hexData: "SPPR408"},
    {name: "Osłona Przed Śmiercią", school: "Nekromancja", level: 4, descriptionFile: "Osłona Przed Śmiercią.txt", iconFile: "SPPR409.png", hexData: "SPPR409"},
    {name: "Pomniejsze Przywrócenie", school: "Nekromancja", level: 4, descriptionFile: "Pomniejsze Przywrócenie.txt", iconFile: "SPPR417.png", hexData: "SPPR417"},
    {name: "Przywołanie Zwierząt I", school: "Sprowadzanie/Przywoływanie", level: 4, descriptionFile: "Przywołanie Zwierząt I.txt", iconFile: "SPPR402.png", hexData: "SPPR402"},
    {name: "Płaszcz Strachu", school: "Sprowadzanie", level: 4, descriptionFile: "Płaszcz Strachu.txt", iconFile: "SPPR416.png", hexData: "SPPR416"},
    {name: "Swoboda Działania", school: "Odrzucanie", level: 4, descriptionFile: "Swoboda Działania.txt", iconFile: "SPPR403.png", hexData: "SPPR403"},
    {name: "Trucizna", school: "Nekromancja", level: 4, descriptionFile: "Trucizna.txt", iconFile: "SPPR411.png", hexData: "SPPR411"},
    {name: "Zadawanie Poważnych Ran", school: "Nekromancja", level: 4, descriptionFile: "Zadawanie Poważnych Ran.txt", iconFile: "SPPR414.png", hexData: "SPPR414"},
    {name: "Święta Moc", school: "Wywoływanie", level: 4, descriptionFile: "Święta Moc.txt", iconFile: "SPPR412.png", hexData: "SPPR412"},
    //special skills for subclasses
    {name: "Prawdziwe Widzenie", school: "SPECJALNE", level: 1, descriptionFile: "Prawdziwe Widzenie.txt", iconFile: "SPCL732.png", hexData: "SPCL732"},
    {name: "Przeszywający Miecz", school: "SPECJALNE", level: 1, descriptionFile: "Przeszywający Miecz.txt", iconFile: "SPCL731.png", hexData: "SPCL731"},
    {name: "Burzowa Tarcza", school: "SPECJALNE", level: 1, descriptionFile: "Burzowa Tarcza.txt", iconFile: "SPCL721.png", hexData: "SPCL721"},
    {name: "Błyskawica", school: "SPECJALNE", level: 1, descriptionFile: "Błyskawica.txt", iconFile: "SPCL722.png", hexData: "SPCL722"},
    {name: "Dar Lathandera", school: "SPECJALNE", level: 1, descriptionFile: "Dar Lathandera.txt", iconFile: "SPCL741.png", hexData: "SPCL741"},
    {name: "Unieruchomienie nieumarłego", school: "SPECJALNE", level: 1, descriptionFile: "Unieruchomienie nieumarłego.txt", iconFile: "SPCL742.png", hexData: "SPCL742"},
    {name: "Boskie Względy", school: "SPECJALNE", level: 1, descriptionFile: "Boskie Względy.txt", iconFile: "OHTYR2.png", hexData: "OHTYR2"},
    {name: "Egzaltacja", school: "SPECJALNE", level: 1, descriptionFile: "Egzaltacja.txt", iconFile: "OHTYR1.png", hexData: "OHTYR1"},
    {name: "Bitewny Chaos", school: "SPECJALNE", level: 1, descriptionFile: "Bitewny Chaos.txt", iconFile: "OHTMPS2.png", hexData: "OHTMPS2"},
    {name: "Święta Moc", school: "SPECJALNE", level: 1, descriptionFile: "Święta Moc.txt", iconFile: "OHTMPS21.png", hexData: "OHTMPS21"},
    
  ]

  for (const data of clericSpellData) {
    await prisma.clericSpells.create({
      data: {
        name: data.name,
        school: data.school,
        level: data.level,
        descriptionFile: data.descriptionFile,
        iconFile: data.iconFile,
        hexData: data.hexData
      }
    })
  }
}


async function insertBhaallspawnAbilitesData() {
  const bhaalspawnAbilitiesData = [

    {name: "Leczenie Lekkich Ran", school: "Nekroancja", level: 1, descriptionFile: "Leczenie Lekkich Ran.txt", iconFile: "SPPR103.png"},
    {name: "Spowlonienie Trucizny", school: "Nekromancja", level: 2, descriptionFile: "Spowlonienie Trucizny.txt", iconFile: "SPPR212.png"},
    {name: "Przywołanie Boskiej Mocy", school: "Inwokacje", level: 2, descriptionFile: "Przywołanie Boskiej Mocy.txt", iconFile: "SPPR214.png"},
    {name: "Pomniejsze drążnie Larlocha", school: "Nekromancja", level: 1, descriptionFile: "Pomniejsze drążnie Larlocha.txt", iconFile: "SPWI119.png"},
    {name: "Wampiryczne dotknięcie", school: "Nekromancja", level: 3, descriptionFile: "Wampiryczne dotknięcie.txt", iconFile: "SPWI314.png"},
    {name: "Groza", school: "Nekroancja", level: 2, descriptionFile: "Groza.txt", iconFile: "SPWI205.png"},
  ]

  for (const data of bhaalspawnAbilitiesData) {
    await prisma.bhaalspawnAbilites.create({
      data: {
        name: data.name,
        school: data.school,
        level: data.level,
        descriptionFile: data.descriptionFile,
        iconFile: data.iconFile,
      }
    })
  }
}

async function fillDataBase() {
  await insertStrengthData();
  await insertAgilityData();
  await insertConstitutionData();
  await insertIntelligenceData();
  await insertWisdomData();
  await insertCharismaData();
  await insertAlignmentData();
  await insertProficiencysToSubclassData();
  await insertThievingAbilitiesToSubclassData();
  await insertMalePortraitsData();
  await insertFemalePortraitsData();
  await insertWizardSpellData();
  await insertClericSpellData();
  await insertBhaallspawnAbilitesData();
}



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);

  //fillDataBase() //use only at first lunch after migration

}
bootstrap();
