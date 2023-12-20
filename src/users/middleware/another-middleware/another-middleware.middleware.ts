import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AnotherMiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('authorized by second middleware');
    
    next();
  }
}
