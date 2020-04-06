import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AccountController from './app/controllers/AccountController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/account', AccountController.store);

routes.use(authMiddleware);

routes.put('/account', AccountController.update);

export default routes;
