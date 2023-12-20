import { Module, MiddlewareConsumer, NestModule,RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middleware/example/example.middleware';
import { AnotherMiddlewareMiddleware } from './middleware/another-middleware/another-middleware.middleware';
import path from 'path';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    
    consumer.apply(ExampleMiddleware).forRoutes(
      // 'users'
      UsersController
      ).apply(AnotherMiddlewareMiddleware).forRoutes(
        {
          path:'users',
          method:RequestMethod.GET
        }
      )
      // console.log('this is middleware');
  }
}
 