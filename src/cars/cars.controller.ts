import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

// Los controladores escuchan peticiones del cliente y emitir una respuesta
@Controller('cars') // http://localhost:3000/cars
export class CarsController {
  // Inyeccion de dependencia
  constructor(private readonly carsService: CarsService) {}

  @Get()
  get() {
    return this.carsService;
  }

  @Get(':id') // http://localhost:3000/cars/:id
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post() // http://localhost:3000/cars/
  createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }

  @Patch() // http://localhost:3000/cars/:id
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {
    return body;
  }

  @Delete() // http://localhost:3000/cars/:id
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return {
      method: 'delete',
      id,
    };
  }
}
