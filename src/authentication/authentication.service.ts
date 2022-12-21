import { Inject, Injectable } from "@nestjs/common";
import { EntityNotFoundException } from "src/shared/exceptions/entity-not-found.exception";
import { User } from "src/user/entity/user.entity";
import { UserService } from "src/user/user.service";
import { UserLogin } from "./dto/user.dto";
import { InvalidPasswordException } from "./exceptions/invalid-password.exception";
import { TokenGenerator } from "./interfaces/token-generator.interface";

@Injectable()
export class AuthenticationService {
    constructor(
        @Inject('TOKEN_GENERATOR')
        private readonly tokenGenerator: TokenGenerator,
        private readonly userService: UserService
    ) {}

    login(userLogin: UserLogin) : string {
        const user: User = this.userService.findByEmail(userLogin.email);
        
        if (!user) {
            throw new EntityNotFoundException('User');
        }

        if (user.password === userLogin.password) 
        {
            return this.tokenGenerator.generate({
                id: user.id,
                email: user.email
            });
        }
        
        throw new InvalidPasswordException();
    }
}