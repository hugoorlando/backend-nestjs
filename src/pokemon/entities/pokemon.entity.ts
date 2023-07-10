import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Colección en MongoDB
@Schema()
export class Pokemon extends Document {
  @Prop({ unique: true, indexed: true })
  name: string;

  @Prop({ unique: true, indexed: true })
  poke_num: number; // numero de pokemon
}

// exportar un Schema
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
