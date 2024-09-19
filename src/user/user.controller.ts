import { createUserDTO } from './dtos/createUser.dto';
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDTO } from './dtos/returnUser.dto';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {} //construtor sendo criado para iniciar o obj gerado pelo userService

    @UsePipes(ValidationPipe)
    @Post()//rota para criação de usuario
    async createUser(@Body() createUser : createUserDTO): Promise<UserEntity>{ //utilizando o createUserDTO como parametro e salvando os dados como createUser.
        return this.userService.createUser(createUser);
    }    
    
    @Get()
    async getAllUsers(): Promise<ReturnUserDTO[]>{
        return (await this.userService.getAllUsers()).map(//pegando o array de usuarios e toda vez que passar pelo map ele converte tdos eles em um novo obj "ReturnUserDTO"
            (userEntity) => new ReturnUserDTO(userEntity),
        );
    }
}
