import { IsEmail, IsNotEmpty, Length, IsNumber } from "class-validator";

export class UserCreate {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Length(6)
    name: string;

    @IsNumber()
    age: number;

    @IsNotEmpty()
    @Length(8)
    password: string;
}