import { Injectable } from '@nestjs/common';
import { UserCreate } from '../dto/user.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
    private users: User[];
    constructor() {
        this.users = [
            {
                id: '1',
                email: 'ronle9519@gmail.com',
                name: 'Le Ron',
                age: 18
            },
            {
                id: '2',
                email: 'merry@gmail.com',
                name: 'Ai Nhi',
                age: 20
            }
        ];
    }

    findAll() : User[] {
        return this.users;
    }

    findById(id: string) : User {
        return this.users.find(user => user.id === id);
    }

    add(newUser: UserCreate) : boolean {
        const user = this.users.find(user => user.email === newUser.email);
        if (user)
            return false;
        this.users.push({
            id: this.users.length.toString(),
            name: newUser.name,
            email: newUser.email,
            age: newUser.age
        });
        return true;
    }
}
