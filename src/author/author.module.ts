import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthorService } from './author.service';

@Module({
  providers: [AuthorService, PrismaService]
})
export class AuthorModule {}
