import { Controller, Get, HttpException, HttpStatus, Param, Query } from '@nestjs/common';
import { AppService, Sort } from './app.service';
import { City } from './city.schema';
// import { City } from './city.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/suggestions')
  getSuggestions(
    @Query('q') query: string,
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
    @Query('radius') radius: number,
    @Query('sort') sort: Sort,
  ) {
      console.log(`sort ${sort}`);
      if (sort && !Object.values(Sort).includes(sort)) {
        throw new HttpException('`Sort` parameter must be name or distance', HttpStatus.BAD_REQUEST);
      }
      return this.appService.getSuggestions(
        query,
        latitude,
        longitude,
        radius,
        sort,
      );
  }
}
