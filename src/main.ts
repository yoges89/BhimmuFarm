import { NestFactory } from '@nestjs/core';
import { DogsModule } from './dogs/dogs.module';

async function bootstrap() {
  const app = await NestFactory.create(DogsModule);
  await app.listen(3000);
}
bootstrap();
