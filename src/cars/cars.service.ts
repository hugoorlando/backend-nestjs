import { Injectable } from '@nestjs/common';

// Service manejal la logica del negocio
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
}
