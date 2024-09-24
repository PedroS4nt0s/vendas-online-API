import { CacheService } from 'src/cache/cache.service';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { CacheModule } from './cache/cache.module';
import { AddressModule } from './address/address.module';
import { AuthModule } from './auth/auth.module';

/*conexao ao nest e postgres
utilizando o type orm como interpretador para quando necessario o resultado de nossa pesquisa no banco retornar um obj
fazendo a configuração de banco utilizando o arqv .env podendo criar varias outras conexões nesse arqv*/
@Module({
  imports: [ 
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE ,
      host: process.env.BD_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT), //é necessario fazer essa conversão pois é dado como retorno somente strings 
     //synchronize: true, //enquanto não utilizamos migrations
      entities: [`${__dirname}/**/*.entity{*.js,*.ts}`],
      migrations:[`${__dirname}/migration/{*.ts,*.js}`],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    CityModule,
    CacheModule,
    AddressModule,
    AuthModule,
  ],
  controllers: [],
  providers: [CacheService],
})
export class AppModule {}
