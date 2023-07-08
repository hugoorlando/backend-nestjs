import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';

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
}
