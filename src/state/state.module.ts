
import { Module } from '@nestjs/common';
import { StateController } from './state.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entity';
import { StateService } from './state.service';


@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  controllers: [StateController],
  providers: [StateService]
})
export class StateModule {}
