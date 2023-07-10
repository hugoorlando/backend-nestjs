import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

// Data que voy a transferir
export class CreatePokemonDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  poke_num: number;
}
