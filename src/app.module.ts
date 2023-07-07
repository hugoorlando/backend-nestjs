import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

// Agrupan y desacoplan un conjunto de funcionalidades por dominio
// Ej: auth.module.ts, se encarga de todo lo relacionado a la autenticación
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
