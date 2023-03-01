import { ConfigService } from '@nestjs/config/dist';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './filter/custom.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters( new CustomExceptionFilter())


  const config = app.get(ConfigService)

  const host = config.getOrThrow<string>('app.host')
  const port = config.getOrThrow<number>('app.port')
  await app.listen(port, host);
}
bootstrap();
