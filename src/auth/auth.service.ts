import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';


@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
    ) { }

    async login(loginDto: LoginDto): Promise<UserEntity> {

        const user: UserEntity | undefined = await this.userService.findUserByEmail(loginDto.email).catch(() => undefined);
        const passCheck = await compare(loginDto.password, user?.password || "") 

        if (!user || !passCheck ) {
            throw new NotFoundException(`email ou senha Incorretos`);
        }

        return user;
    }
}