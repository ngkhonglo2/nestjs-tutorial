import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {}
}
