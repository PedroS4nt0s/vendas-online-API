import { AuthService } from './auth.service';
import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReturnUserDTO } from 'src/user/dtos/returnUser.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ){}

    @UsePipes(ValidationPipe)
    @Post()
    async login(@Body() loginDto: LoginDto): Promise<ReturnUserDTO> {
        return new ReturnUserDTO(await this.authService.login(loginDto));
    }
}