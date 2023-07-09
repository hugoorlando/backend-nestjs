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
import { CreateCarDto, UpdateCarDto } from './dto/index';

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
    return this.carsService.create(createCarDto);
  }

  @Patch(':id') // http://localhost:3000/cars/:id
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id') // http://localhost:3000/cars/:id
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
