import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    console.log(req.headers.keys);
    next();
    //if (res.headers.get('authorization')) next();
  }
}
