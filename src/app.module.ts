import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { config } from './config';
import { AuthorController } from './author/author.controller';
import { AuthorModule } from './author/author.module';
import { AuthorService } from './author/author.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(config), AuthorModule],
  providers:[AuthorService,PrismaService],
  controllers: [AuthorController]
})
export class AppModule {}
