import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('/strength')
  async getStrength(req: Request, res: Response) {
    try {
      const data = await prisma.strength.findMany();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch strength data.' });
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
