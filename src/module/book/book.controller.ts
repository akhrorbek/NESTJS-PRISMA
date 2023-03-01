import { Controller, Get, Post, Body } from '@nestjs/common';
import { Books } from '@prisma/client';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/book.dto';

@Controller('book')
export class BookController{

    constructor(
        private readonly bookService: BookService
    ) {}

    @Get('/all')
    getBooks ():Promise<Books[]> {
        return this.bookService.getBooks()
    }

    @Post('/create')
    createBook (@Body() body:CreateBookDto):Promise<void> {
        return this.bookService.createBook(body)
    }


}
