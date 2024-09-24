import { AddressEntity } from 'src/address/entities/address.entity';
import { ReturnCityDto } from 'src/city/dto/returnCity.dto';

export class ReturnAddressDTO {

    complement: string;
    numberAddress: number;
    cep: string;
    city?: ReturnCityDto;

    constructor(
        address: AddressEntity,) {
        this.cep = address.cep;
        this.complement = address.complement;
        this.numberAddress = address.numberAddress;
        this.city = address.city ? new ReturnCityDto(address.city) : undefined
    }

}