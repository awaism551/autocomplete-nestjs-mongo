import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City, CityDocument } from './city.schema';

export enum Sort {
  name,
  distance
}
@Injectable()
export class AppService {
  constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) {}

  async getSuggestions(
    query: string,
    latitude: number,
    longitude: number,
    radius: number,
    sort: Sort
  ) {
    console.log(`query: ${query}, lat: ${latitude}`);
    return this.cityModel
    .find({
      name: { 
        "$regex": `${query}`,
        '$options': 'i'
      },
      ...(latitude && { lat: {
        $lte: latitude
      }}),
      ...(longitude && { long: {
        $lte: longitude
      }}),
      ...(radius && { dem: {
        $lte: radius
      }}),
    })
    .sort(`${sort}`)
    .exec();
  }
}
