import { Inject, Injectable} from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';


@Injectable()
export class CityService {

    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) { }

    async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {

        const citiesCache: CityEntity[] = await this.cacheManager.get(`${stateId}`); //utilizando cache para busca de cidade utilizando o estado

        if(citiesCache){ //se alguma vez ja buscou essas cidades do stateId passado ele só recupera
            return citiesCache;
        }

        const cities = await this.cityRepository.find({//busca as cidades de acordo com o stateId passado
            where: {
                stateId : stateId  //primeira coluna a ser referente e depois o valor de acordo com a variavel
            },
        })
        
        await this.cacheManager.set(`${stateId}`, cities);

        return cities;
    }
}
