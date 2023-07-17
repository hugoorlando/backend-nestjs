import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './index';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  // Un monton de imagenes puede tener un unico producto
  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
