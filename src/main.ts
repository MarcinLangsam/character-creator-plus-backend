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
    { subclass: "Mag_Specjalista",         Sztylety: 1, Kije: 1, Proce: 1, Strzałki: 1, MieczePółtoraręczne: -1, MieczeDługie: -1, MieczeKrótkie: -1, Topory: -1, MieczeOburęczne: -1, Katany: -1, SejmitarWakizashiNinjaTo: -1, MłotyBojowe: -1, Maczugi: -1, Włócznie: -1, Halabarda: -1, CepyBojoweMorgernszterny: -1, Wiekiery: -1, Kusze: -1, DługieŁuki: -1, KrótkieŁuki: -1, StylWalkiBroniąDwuręczną: -1, StylWalkiMieczemITarczą: -1, StylWalkiJednąBronią: -1, StylWalkiDwiemaBrońmi: -1, skillPoints: 1 },
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
}



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);

  //fillDataBase()

}
bootstrap();
