import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { City, CitySchema } from './city.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/admin'),
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
