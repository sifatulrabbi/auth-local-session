import { Request, Response, Router } from 'express';
import { useAuthRouter } from './auth.router';
import { useUsersRouter } from './users.router';

const router = Router();

useUsersRouter(router);
useAuthRouter(router);

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('<h1>Hello!</h1>');
});

export function routers(): Router {
  return router;
}
