import { Controller, Get, Param, Res, NotFoundException, StreamableFile, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { PrismaService } from './prisma.service';
import { AgilityResponse, AlignmentResponse, CharismaResponse, ConstitutionRespone, InteligenceResponse, StrenghtResponse, WisdomResponse, ProficiencysToSubclass, ThievingAbilitiesToSubclass, PortraitsRespone, WizardSpellResponse, ClericSpellResponse } from './dto/attributes.dto';
import { join } from 'path';
import { createReadStream, existsSync } from 'fs';

const prisma = new PrismaClient();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly prisma: PrismaService) {}

  @Get('/strength')
  async getStrength(): Promise<StrenghtResponse[]> {
    const Strength = await this.prisma.strength.findMany()
    return Strength
  }

  @Get('/agility')
  async getAgility(): Promise<AgilityResponse[]> {
    const Agility = await this.prisma.agility.findMany()
    return Agility
  }

  @Get('/constitution')
  async getConstitution(): Promise<ConstitutionRespone[]> {
    const Constitution = await this.prisma.constitution.findMany()
    return Constitution
  }

  @Get('/inteligence')
  async getInteligence(): Promise<InteligenceResponse[]> {
    const Inteligence = await this.prisma.intelligence.findMany()
    return Inteligence
  }

  @Get('/wisdom')
  async getWisodom(): Promise<WisdomResponse[]> {
    const Wisdom = await this.prisma.wisdom.findMany()
    return Wisdom
  }

  @Get('/charisma')
  async getCharisma(): Promise<CharismaResponse[]> {
    const Charisma = await this.prisma.charisma.findMany()
    return Charisma
  }

  @Get('/alignment')
  async getAlignment(): Promise<AlignmentResponse[]> {
    const Alignment = await this.prisma.alignment.findMany()
    return Alignment
  }

  @Get('/proficiencystosubclassdata')
  async getProficiencysToSubclass(): Promise<ProficiencysToSubclass[]> {
    const ProficiencysToSubclass = await this.prisma.proficiencysToSubclass.findMany()
    return ProficiencysToSubclass
  }

  @Get('/thievingabilitiestosubclassdata')
  async getThievingAbilitiesToSubclass(): Promise<ThievingAbilitiesToSubclass[]> {
    const ThievingAbilitiesToSubclass = await this.prisma.thievingAbilitiesToSubclass.findMany()
    return ThievingAbilitiesToSubclass
  }

  @Get('/portraitsNamesMale')
  async getPortraitsNamesMale(): Promise<PortraitsRespone[]> {
    const PortraitsNamesMale = await this.prisma.malePortraits.findMany()
    return PortraitsNamesMale;
  }

  @Get('/portraitsNamesFemale')
  async getPortraitsNamesFemale(): Promise<PortraitsRespone[]> {
    const PortraitsNamesFemale = await this.prisma.femalePortraits.findMany()
    return PortraitsNamesFemale
  }

  @Get("/:className/:subclassName")
  getFile(
    @Param('className') className: string,
    @Param('subclassName') subclassName: string,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'upload', className, subclassName));
    return new StreamableFile(file);
  }

  @Get("/OpisyRas/:race")
  getRaceDescription(
    @Param('race') race: string,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'upload', race));
    return new StreamableFile(file);
  }

  @Get("/:OpisyKlas/:className")
  getClassDescription(
    @Param('className') className: string,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'upload', className));
    return new StreamableFile(file);
  }

  @Get("/MalePortraits/:portraitName")
  getMalePortrait(
    @Param('portraitName') portraitName: string,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'upload', 'MalePortraits', portraitName));
    return new StreamableFile(file);
  }

  @Get("/FemalePortraits/:portraitName")
  getFemalePortrait(
    @Param('portraitName') portraitName: string,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'upload', 'FemalePortraits', portraitName));
    return new StreamableFile(file);
  }

  @Get("/WizardSpells/WizardSpellsIcons/:spell")
  getWizardSpellIcon(
    @Param('spell') spell: string,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'upload', 'WizardSpells', 'WizardSpellsIcons', spell));
    return new StreamableFile(file)
  }
  @Get("/wizardSpellData")
  async getWizardSpellData(): Promise<WizardSpellResponse[]> {
    const WizardSpellData = await this.prisma.wizardSpells.findMany()
    return WizardSpellData
  }

  @Get("/ClericSpells/ClericSpellsIcons/:spell")
  getClericSpellIcon(
    @Param('spell') spell: string,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'upload', 'ClericSpells', 'ClericSpellsIcons', spell));
    return new StreamableFile(file)
  }
  @Get("/clericdSpellData")
  async getClericSpellData(): Promise<ClericSpellResponse[]> {
    const ClericSpellData = await this.prisma.clericSpells.findMany()
    return ClericSpellData
  }

  @Post('sendCharacter')
  async createCharacter(@Body() characterData: any) {
    const {
      name,
      gender,
      portrait,
      race,
      classes,
      subclasses,
      attributes,
      skills,
      //skillsThief,
      melleThac0,
      dmgBonus,
      bashing,
      weight,

      rangedThac0,
      AC,
      Kradziez_KieszonkowaBonus, 
      Otwieranie_ZamkowBonus,
      Znajdywanie_PulapekBonus,
      Ciche_PoruszanieBonus,
      Krycie_W_CieniuBonus,
      Rozstawianie_PulapekBonus,

      HPdice,
      HP,

      HPperLvBonus,
      IntoxicationPerDrink,
      fatigue,

      INTmaxSpellLevel,
      INTspellPerLevel,
      scribeSuccessRate,
      INTlore,

      extraSpellSlotlv1,
      extraSpellSlotlv2,
      extraSpellSlotlv3,
      extraSpellSlotlv4,
      WISlore,

      reaction,
      buyDiscount,
    } = characterData;

     const weaponProficiencys = await this.prisma.weaponProficiencys.create({
       data: {...skills},
     })

     //const thievingAbilities = await this.prisma.thievingAbilities.create({
     //  ...skillsThief,
     //})

    const character = await this.prisma.character.create({
      data: {
        name,
        gender,
        portrait,
        race,
        classes,
        subclasses,
        strength: attributes.strength,
        agility: attributes.agility,
        constitution: attributes.constitution,
        intelligence: attributes.intelligence,
        wisdom: attributes.wisdom,
        charisma: attributes.charisma,
        skillsId: weaponProficiencys.id,
        //skillsThiefId: thievingAbilities.id,
        melleThac0,
        dmgBonus,
        bashing,
        weight,

        rangedThac0,
        AC,
        Kradziez_KieszonkowaBonus, 
        Otwieranie_ZamkowBonus,
        Znajdywanie_PulapekBonus,
        Ciche_PoruszanieBonus,
        Krycie_W_CieniuBonus,
        Rozstawianie_PulapekBonus,

        HPdice,
        HP,

        HPperLvBonus,
        IntoxicationPerDrink,
        fatigue,

        INTmaxSpellLevel,
        INTspellPerLevel,
        scribeSuccessRate,
        INTlore,

        extraSpellSlotlv1,
        extraSpellSlotlv2,
        extraSpellSlotlv3,
        extraSpellSlotlv4,
        WISlore,

        reaction,
        buyDiscount,
      },
    });

    return { success: true, character };
  }
}
