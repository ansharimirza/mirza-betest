import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() CreateUserDto: User): Promise<User> {
        return this.userService.create(CreateUserDto);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    // @Get(':id')
    // findOne(@Param('id') id: string): Promise<User> {
    //     return this.userService.findOne(id);
    // }

    // @Delete(':id')
    // delete(@Param('id') id: string): Promise<User> {
    //     return this.userService.delete(id);
    // }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateCatDto: Cat): Promise<Cat> {
    //     return this.UserService.update(id, updateCatDto);
    // }
}
