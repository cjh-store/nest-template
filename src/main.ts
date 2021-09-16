import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 表示使用 Nest 的工厂函数创建了 AppModule
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3001);
  console.log('http://127.0.0.1:3001');
}
bootstrap();
