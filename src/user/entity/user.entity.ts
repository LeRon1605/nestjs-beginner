import { Exclude } from "class-transformer";

export class User {
    id: string;
    email: string;
    name: string;
    age: number;

    @Exclude()
    password: string;

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }
}