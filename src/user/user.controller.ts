import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, Post, UseInterceptors } from '@nestjs/common';
import { CurrentUser } from 'src/authentication/decorators/current-user.decoratos';
import { Claim } from 'src/authentication/dto/claim.dto';
import { UserCreate } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    getUsers() {
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body() user: UserCreate) {
        return this.userService.add(user);
    }

    @Get('me')
    getProfile(@CurrentUser() user) {
        return this.userService.findById(user.id);
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        const user = this.userService.findById(id);
        if (user) 
            return user;
        else
            throw new NotFoundException('User not found.');
    }
}
