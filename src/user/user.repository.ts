import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import User from './user.entity';

@Injectable()
export class UserRepository {
    constructor(private prismaService: PrismaService) {}

    async findAll() {
        return this.prismaService.user.findMany();
    }

    async findOne(id: number) {
        return this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
    }

    async create(user: User) {
        return this.prismaService.user.create({
            data: user as any,
        });
    }

    async toUpdate(user: User) {
        if(!user) throw new Error('User without id')
        return this.prismaService.user.update({
            where: {
                id: user.id,
            },
            data: user as any,
        });
    }

    async delete(id: number) {
        return this.prismaService.user.delete({
            where: {
                id, 
            }
        });
    }
}
