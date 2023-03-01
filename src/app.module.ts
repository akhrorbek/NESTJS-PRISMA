import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { config } from './config';
import { AuthorModule } from './module/author/author.module';
import { BookModule } from './module/book/book.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(config),PrismaModule, AuthorModule, BookModule],
})
export class AppModule {}
