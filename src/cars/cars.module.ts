import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

// Agrupan y desacoplan un conjunto de funcionalidades por dominio
// Ej: auth.module.ts, se encarga de todo lo relacionado a la autenticación
@Module({
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
