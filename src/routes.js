import { Router } from 'express';

import AccountController from './app/controllers/AccountController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/account', AccountController.create);
routes.post('/account/login', AccountController.login);

routes.use(authMiddleware);

routes.put('/account', AccountController.update);

export default routes;
