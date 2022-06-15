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

  // getSuggestions(query: string): Promise<City[]> {
  //   console.log('in fun, query', query);
  //   // return this.citiesRepository.findBy({
  //   //   name: Like(`%${query}%`)
  //   // });
  //   return this.citiesRepository.find({
  //     where: {
  //       // "name": { "$regex": ".*a.*"}
  //       // name: Like(`%${query}%`)
  //       // name: Like('a')
  //       // name: new RegExp(`^${query}`)
  //       // name: Raw(alias => `${alias} ILIKE '%${query}%'`),
  //       // name: "Alma" <= this works
  //       // name: new RegExp(query, 'i').toString()
  //       // $or: [{ name: new RegExp(query, 'i').toString() }],
  //       // name: {pattern: '.*a.*',options: ''}
  //       // name: { $eq: "Alma" }
  //     }
  //   });
  //   // not assignable to type 'string | FindOperator<string>'.ts(2322)

  // }
}
