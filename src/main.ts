import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Se ejecuta al inicio del proyecto
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
