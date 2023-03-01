import { Module } from '@nestjs/common';
import { AuthorModule } from 'src/author/author.module';
import { AuthorService } from 'src/author/author.service';
import { PrismaController } from './prisma.controller';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [PrismaController],
  providers: [PrismaService]
})
export class PrismaModule {}
