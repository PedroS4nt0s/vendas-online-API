export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string; // possivelmente trocar para uuid ou utilizar encriptação 
}