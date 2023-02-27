import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { config } from './config';

@Module({
  imports: [ConfigModule.forRoot(config)]
})
export class AppModule {}
