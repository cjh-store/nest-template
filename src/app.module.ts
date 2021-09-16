import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    // 路由模块
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
