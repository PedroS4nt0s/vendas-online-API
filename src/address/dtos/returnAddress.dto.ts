import { AddressEntity } from 'src/address/entities/address.entity';

export class ReturnAddressDTO {

    complement: string;
    numberAddress: number;
    cep: string;
    cityId: number;

    constructor(
       address : AddressEntity,){
        this.cep = address.cep;
        this.complement = address.complement;
        this.numberAddress = address.numberAddress;
        address;
    }

}