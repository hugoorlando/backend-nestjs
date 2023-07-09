import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


// Se ejecuta al inicio del proyecto
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // me ayuda a trabajar con los DTO y con los class validator (realiza una validacion automatica)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
