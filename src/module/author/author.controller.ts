import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { Author } from '@prisma/client';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/author.dto';

@Controller('author')
export class AuthorController {
    constructor(
        private readonly authorService: AuthorService
    ){}

    @Get('/all')
    getAuthor ():Promise<any> {
        return this.authorService.getAuthor()
    }

    @Post('/create')
    createAuthor (@Body() body: CreateAuthorDto) {
        return this.authorService.createAuthor(body)
    }
}
