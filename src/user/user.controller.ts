import { createUserDTO } from './dtos/createUserDTO';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user.interface';

//Service -> Controller -> "Service"
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {} //construtor sendo criado para iniciar o obj gerado pelo userService

    @Post()//rota para criação de usuario
    async createUser(@Body() createUser : createUserDTO){ //utilizando o createUserDTO como parametro e salvando os dados como createUser.
        return this.userService.createUser(createUser);
    }    
    
    @Get()
    async getAllUsers(): Promise<User[]>{
        return this.userService.getAllUsers();
    }
}
