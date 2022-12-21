import { AuthenticationModule } from './authentication/authentication.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthenticationMiddleware } from './shared/middleware/authentication.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionConfig } from './database/config/connection-config';

@Module({
  imports: [AuthenticationModule, UserModule, TypeOrmModule.forRoot(connectionConfig)],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware)
            .forRoutes('*');
  }
}
