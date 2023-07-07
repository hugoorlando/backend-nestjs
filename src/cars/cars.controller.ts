import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

// Los controladores escuchan peticiones del cliente y emitir una respuesta
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  get() {
    return this.carsService;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.carsService[id];
  }
}
