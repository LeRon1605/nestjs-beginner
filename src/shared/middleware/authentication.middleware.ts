import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(request, response: Response, next: Function) {
    if (request.cookies.user) {
      request.user = JSON.parse(Buffer.from(request.cookies.user, 'base64').toString());
    } 
    next();
  }
}
