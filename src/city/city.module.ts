import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { CityController } from './city.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
    ttl:900000000000,
}),
  TypeOrmModule.forFeature([CityEntity])],
  providers: [CityService],
  controllers: [CityController]
})
export class CityModule { }
