import { CityModule } from './../city/city.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { UserModule } from 'src/user/user.module';


@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity]), UserModule, CityModule],
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule { }
