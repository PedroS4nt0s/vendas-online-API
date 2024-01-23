import { createUserDTO } from './dtos/createUserDTO';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    async getAllUsers() {
       return JSON.stringify({ test: 'abc' });
    }

    @Post()
    async createUser(@Body() createUser : createUserDTO){
        return {
            ...createUser,
            password: undefined,
        };
    }    
    
}
