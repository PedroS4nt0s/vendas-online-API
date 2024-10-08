import { CityService } from './../city/city.service';
import { UserService } from './../user/user.service';
import { CreateAddressDTO } from './dtos/createAddress.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
        private readonly userService : UserService,
        private readonly cityService : CityService,
    ) { }

    async createAddress(createAddressDTO: CreateAddressDTO, userId: number): Promise<AddressEntity> {
        await this.userService.findUserById(userId);
        await this.cityService.findCityById(createAddressDTO.cityId);
        return this.addressRepository.save({
            ...createAddressDTO,
            userId,
        });
    }
}
