import { createUserDTO } from './dtos/createUserDTO';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';


@Injectable()
export class UserService {
    //criando contrutor para ser possivel usar o repositorio no retorno dos serviços
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}
    

    //criando usuario apartir das responses que o usuario informou
    async createUser(createUserDTO : createUserDTO): Promise <UserEntity>{
        const rounds = 10;
        const passwordHashed = await hash(createUserDTO.password, rounds);
    
        return this.userRepository.save({
            ...createUserDTO, 
            password: passwordHashed,
            typeUser: 1
        });//setando com a senha incriptada por isso utilizando o save como obj
    }

    async getAllUsers(): Promise <UserEntity[]>{
        return this.userRepository.find();
    }
}
