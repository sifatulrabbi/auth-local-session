import { Request, Response, NextFunction } from 'express';

export function loggerMiddleware(req: Request, res: Response, next: NextFunction): void {
  res.on('close', () => {
    console.log(`[${res.statusCode}] [${req.method}] [${req.path}]`);
  });

  next();
}
