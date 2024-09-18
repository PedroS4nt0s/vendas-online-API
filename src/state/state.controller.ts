import { StateEntity } from './entities/state.entity';
import { StateService } from './state.service';
import { Controller, Get } from '@nestjs/common';

@Controller('state')
export class StateController {
    //construtor para receber o service
    constructor(
        private readonly stateService: StateService
    ) { }

    @Get()
    async getAllState(): Promise<StateEntity[]> {
        return this.stateService.getAllState();
    }

}
