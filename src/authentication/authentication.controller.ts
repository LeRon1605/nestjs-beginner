import { BadRequestException, Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserLogin } from './dto/user.dto';

@Controller('auth')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService
    ) {}
    
    @Post('login')
    login(@Req() request, @Res({ passthrough: true }) response, @Body() user: UserLogin) {
        if (request.cookies.user) {
            throw new BadRequestException('Login failed.', 'You already logged in.');
        }
        const token = this.authenticationService.login(user);
        response.cookie('user', token);
        return token;
    }

    @Get('logout')
    logout(@Req() request, @Res({ passthrough: true }) response) {
        if (request.cookies.user) {
            response.clearCookie('user');
        }
    }
}
