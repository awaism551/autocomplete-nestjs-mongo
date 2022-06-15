import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CityDocument = City & Document;

@Schema({
  collection: 'cities',
})
export class City {
  @Prop({
      type: mongoose.Schema.Types.ObjectId
  })
  _id: string;

  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  ascii: string;

  @Prop()
  alt_name: string;

  @Prop()
  lat: string;

  @Prop()
  long: string;

  @Prop()
  feat_class: string;

  @Prop()
  feat_code: string;

  @Prop()
  country: string;

  @Prop()
  admin1: string;

  @Prop()
  admin2: string;

  @Prop()
  population: string;

  @Prop()
  dem: string;

  @Prop()
  tz: string;

  @Prop()
  modified_at: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
