import { Injectable, NotFoundException } from '@nestjs/common';

// Service maneja la logica del negocio
@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Kia',
    },
    {
      id: 2,
      brand: 'Fiat',
    },
    {
      id: 3,
      brand: 'Ford',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find(c => c.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }
}
