import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {
    //Criando um repositorio para conseguir manipular dados
    constructor( 
    @InjectRepository(StateEntity)
    private readonly stateRepository : Repository<StateEntity>
    ){}

    async getAllState(): Promise<StateEntity[]>{
    return await this.stateRepository.find()
    }
}
