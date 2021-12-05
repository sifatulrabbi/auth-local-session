import { Request, Response, NextFunction, Router } from 'express';
import { useAuthRouter } from './auth.router';
import { useUsersRouter } from './users.router';

const router = Router();

useUsersRouter(router);
useAuthRouter(router);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'hello world' });
});

export function routers(): Router {
  return router;
}
