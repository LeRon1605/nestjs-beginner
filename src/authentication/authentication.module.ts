import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { Base64Generator } from './implements/base64-generator';

@Module({
    imports: [UserModule],
    controllers: [AuthenticationController],
    providers: [
        AuthenticationService,
        {
            provide: 'TOKEN_GENERATOR',
            useClass: Base64Generator
        }
    ],
    exports: [AuthenticationService]
})
export class AuthenticationModule {}
