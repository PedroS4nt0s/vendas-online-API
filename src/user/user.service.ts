import { CreateUserDTO } from './dtos/createUser.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
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
    ) { }


    //criando usuario apartir das responses que o usuario informou
    async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
        const rounds = 10;
        const passwordHashed = await hash(createUserDTO.password, rounds);

        return this.userRepository.save({
            ...createUserDTO,
            password: passwordHashed,
            typeUser: 1
        });//setando com a senha incriptada por isso utilizando o save como obj
    }

    async getUserByIdUsingRelations(userId: number): Promise<UserEntity> {
        return this.userRepository.findOne({
            where: {
                id: userId,
            },
            relations: ['addresses'],
        })
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    async findUserById(userId: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: {
                id: userId
            }
        });

        if (!user) {
            throw new NotFoundException("User not found");
        }

        return user;
    }
}
