import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product, ProductImage } from './entities/index';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  // Asociar nuestra entity con el TypeORM de Postgres
  imports: [TypeOrmModule.forFeature([Product, ProductImage])],
})
export class ProductsModule {}
