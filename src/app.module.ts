import { AuthenticationModule } from './authentication/authentication.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthenticationMiddleware } from './shared/middleware/authentication.middleware';

@Module({
  imports: [AuthenticationModule, UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware)
            .forRoutes('*');
  }
}
