import { Injectable, Get, Post } from '@nestjs/common';
import { Author, Books } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthorDto } from './dto/author.dto';

@Injectable()
export class AuthorService {
    constructor(
        private readonly prisma: PrismaService
    ){}


    @Get()
    async getAuthor():Promise<any> {
        const author = this.prisma.author.findMany({
            select: {
                id:true,
                name:true,
                age:true,
                books:true
            }
        })
        return author
    }

    @Post()
    async createAuthor(payload:CreateAuthorDto):Promise<void> {
        await this.prisma.author.create({
            data: {
                name: payload.auth_name,
                age:  payload.auth_age
            }
        })
    }

}
