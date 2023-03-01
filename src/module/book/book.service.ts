import { Injectable, Get, Post, NotFoundException } from '@nestjs/common';
import { Books } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/book.dto';

@Injectable()
export class BookService {
    constructor(
        private readonly prismaService:PrismaService
    ){}

    @Get()
    async getBooks():Promise<Books[]> {
        const books = await this.prismaService.books.findMany()
        return books
    }


    @Post()
    async createBook(payload:CreateBookDto):Promise<void> {

        const foundAuthor = await this.prismaService.author.findFirst({
            where: {
                id: payload.authorId
            }
        })

        if(!foundAuthor) {
            throw new NotFoundException()
        }

        await this.prismaService.books.create({
            data: {
                titlae: payload.book_title,
                authorId: payload.authorId
            }
        })
    }


}
