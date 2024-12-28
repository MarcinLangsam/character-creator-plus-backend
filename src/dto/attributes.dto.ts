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

export interface AlignmentResponse {
  id: number;
  alignment: String;
  number: String;
}

export interface ProficiencysToSubclass {
  id: number;
  subclass: string;
  MieczePoltorareczne: number;
  MieczeDlugie: number;
  MieczeKrotkie: number;
  Topory: number;
  MieczeObureczne: number;
  Katany: number;
  SejmitarWakizashiNinjaTo: number;
  Sztylety: number;
  MlotyBojowe: number;
  Maczugi: number;
  Wlocznie: number;
  Halabarda: number;
  CepyBojoweMorgernszterny: number;
  Wiekiery: number;
  Kije: number;
  Kusze: number;
  DlugieLuki: number;
  KrotkieLuki: number;
  Strzalki: number;
  Proce: number;
  StylWalkiBroniaDwureczna: number;
  StylWalkiMieczemITarcza: number;
  StylWalkiJednaBronia: number;
  StylWalkiDwiemaBronmi: number;
  skillPoints: number,
}

export interface ThievingAbilitiesToSubclass {
  id: number;
  subclass: String;
  Otwieranie_Zamkow: number;
  Kradziez_Kieszonkowa: number;
  Ciche_Poruszanie: number;
  Krycie_W_Cieniu: number;
  Znajdywanie_Pulapek: number;
  Wykrywanie_Iluzji: number;
  Rozstawianie_Pulapek: number;
  skillPointsThief: number;
}

export interface PortraitsRespone {
  fileName: string;
}

export interface WizardSpellResponse {
  name: string;
  school: string;
  level: number;
  descriptionFile: string;
  iconFile: string;
  hexData: string;
}