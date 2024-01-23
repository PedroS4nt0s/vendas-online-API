import { createUserDTO } from './dtos/createUserDTO';
import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    //criando usuarios "staticos" somente para esse service
    private users: User[] = [];

    //criando usuario apartir das responses que o usuario informou
    async createUser(createUserDTO : createUserDTO): Promise <User>{
        const rounds = 10;
        const passwordHashed = await hash(createUserDTO.password, rounds);
        console.log('passwordHashed', passwordHashed);

        const user: User = {
            ...createUserDTO, // Dessa forma é utilizado o modelo do createUserDTO sem sujeira ou alterações externas de outras classes "Modelo Novo"
            id: this.users.length + 1,
            password: passwordHashed,
        };

        this.users.push(user);

    return user;
    }

    async getAllUsers(): Promise <User[]>{
        return this.users;
    }
}
