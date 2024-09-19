import { CACHE_MANAGER } from "@nestjs/cache-manager"; 
import { Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";

@Injectable()
export class CacheService {

    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) { }
    async getCache<T>(
        key: string,
        functionRequest: () => Promise<T>,
    ): Promise<T> {

        const allData: T = await this.cacheManager.get(key); //utilizando cache para busca de cidade utilizando o estado

        if (allData) { //se alguma vez ja buscou essas cidades do stateId passado ele só recupera
            return allData;
        }

        const cities: T = await functionRequest();

        await this.cacheManager.set(key, cities);

        return cities;
    }

}
