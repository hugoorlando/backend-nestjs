import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto/index';

// Service maneja la logica del negocio
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Kia',
      model: 'Sorento',
    },
    {
      id: uuid(),
      brand: 'Fiat',
      model: 'Mobi',
    },
    {
      id: uuid(),
      brand: 'Volkswagen',
      model: 'Gol',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((c) => c.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars = [...this.cars, newCar];
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = {
          ...carDb,
          ...updateCarDto,
          id,
        };
      }
      return car;
    });

    return carDb;
  }

  delete(id: string) {
    const car = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
