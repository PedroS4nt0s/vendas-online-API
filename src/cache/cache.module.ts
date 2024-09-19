import { CacheModule as CacheModuleNest} from '@nestjs/cache-manager';
//esse import pode estar errado e vir do '@nestjs/common'
import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';

@Module({
  imports: [
    CacheModuleNest.register({
      ttl: 900000000000,
      isGlobal: true,
      //tempo up do cache
    }),
  ],
  providers: [CacheService,],
  exports: [CacheService]
})
export class CacheModule { }
