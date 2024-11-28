export interface StrenghtResponse {
    id: number;
    value: number;
    meleeThac0: number;
    dmgBonus: number;
    bashing: number;
    weight: number;
}

export interface AgilityResponse {
  id: number;
  value: number;
  rangedThac0: number;
  ac: number;
  Otwieranie_ZamkowBonus: number;
  Kradziez_KieszonkowaBonus: number;
  Ciche_PoruszanieBonus: number;
  Krycie_W_CieniuBonus: number;
  Znajdywanie_PulapekBonus: number;
  Rozstawianie_PulapekBonus: number;
}

export interface ConstitutionRespone {
  id: number;
  value: number;
  hpPerLevelBonus: number;
  intoxicationPerDrink: number;
  fatigue: number;
}

export interface InteligenceResponse {
  id: number;
  value: number;
  INTmaxSpellLevel: number;
  INTspellPerLevel: number;
  scribeSuccessRate: number;
  INTlore: number;
}

export interface WisdomResponse {
  id: number;
  value: number;
  extraSpellSlotlv1: number;
  extraSpellSlotlv2: number;
  extraSpellSlotlv3: number;
  extraSpellSlotlv4: number;
  WISlore: number;
}

export interface CharismaResponse {
  id: number;
  value: number;
  reaction: number;
  buyDiscount: number;
}