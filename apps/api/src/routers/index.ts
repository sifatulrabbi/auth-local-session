import { Router } from 'express';
import { useAuthRouter } from './auth.router';
import { useUsersRouter } from './users.router';

const router = Router();

useUsersRouter(router);
useAuthRouter(router);

export function routers(): Router {
  return router;
}
