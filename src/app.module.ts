import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { config } from './config';
import { AuthorController } from './author/author.controller';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [ConfigModule.forRoot(config), AuthorModule],
  controllers: [AuthorController]
})
export class AppModule {}
