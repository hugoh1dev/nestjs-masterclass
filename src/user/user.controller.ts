import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import User from './user.entity';
import { UserRepository } from './user.repository';

@Controller('user')
export class UserController {
    constructor(private repo: UserRepository) {}

    @Post()
    async create(@Body() user: User) {
        const newUser = await this.repo.create(user);
        return newUser;
    }

    @Get()
    async findAll() {
        const users = await this.repo.findAll();
        return users;
    }

    @Patch(':id')
    async toUpdate(@Param('id') id: string, @Body() user: User) {
        const userToUpdate = await this.repo.toUpdate({
            ...user,
            id: +id,
        });
        return userToUpdate;
    }

    @Get(':id') 
    async findOne(@Param('id') id: string) {
        const user = await this.repo.findOne(+id);
        return user;
    }
    
    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.repo.delete(+id);
    }

}
