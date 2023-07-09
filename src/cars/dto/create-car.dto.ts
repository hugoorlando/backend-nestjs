// Objeto que me sirve para transferir datos a diferentes partes de mi app

import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({message: `The brand most be a cool string`})
  @MinLength(3)
  readonly brand: string;

  @IsString()
  @MinLength(3)
  readonly model: string;
}
