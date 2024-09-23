import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    name: string;


    @IsString()
    @IsDefined()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    cpf: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    password: string;
}