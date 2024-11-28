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

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);

  //await insertStrengthData();
  //await insertAgilityData();
  //await insertConstitutionData();
  //await insertIntelligenceData();
  //await insertWisdomData();
  //await insertCharismaData();

}
bootstrap();
