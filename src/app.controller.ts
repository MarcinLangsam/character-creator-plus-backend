import { Controller, Get, Param, Res, NotFoundException, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { PrismaService } from './prisma.service';
import { AgilityResponse, AlignmentResponse, CharismaResponse, ConstitutionRespone, InteligenceResponse, StrenghtResponse, WisdomResponse, ProficiencysToSubclass, ThievingAbilitiesToSubclass } from './dto/attributes.dto';
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

  @Get('test') // Endpoint na sztywno
  async getTestFile(@Res() res: Response) {
    // Ścieżka do pliku na sztywno
    const filePath = join(__dirname, '..', '..', 'uploads', 'wojownik', 'test.txt');

    // Sprawdź, czy plik istnieje
    if (!existsSync(filePath)) {
      throw new NotFoundException('File not found');
    }

    // Otwórz strumień pliku i zwróć go w odpowiedzi
    const fileStream = createReadStream(filePath);
    res.setHeader('Content-Disposition', `attachment; filename=test.txt`);
    return fileStream.pipe(res);
  }

  @Get("/:className/:subclassName")
  getFile(
    @Param('className') className: string,
    @Param('subclassName') subclassName: string,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'upload', className, subclassName));
    return new StreamableFile(file);
  }
}
