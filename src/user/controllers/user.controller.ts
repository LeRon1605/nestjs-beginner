import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { UserCreate } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body() user: UserCreate) {
        return this.userService.add(user);
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
