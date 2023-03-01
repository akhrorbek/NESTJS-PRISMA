import { Controller, Get, Post,Patch, Param, Body, ParseUUIDPipe, Delete } from '@nestjs/common';
import { Books } from '@prisma/client';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/book.dto';
import { UpdateBookDto } from './dto/book.update.dto';

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


    @Patch('/update/:id')
    updateBook (@Param('id', new ParseUUIDPipe()) id:string, @Body() body:UpdateBookDto) {
        this.bookService.updateBook(id,body)
    }

    @Delete('/delete/:id')
    deleteBook (@Param('id', new ParseUUIDPipe()) id:string) {
        this.bookService.deleteBook(id)
    }

}
