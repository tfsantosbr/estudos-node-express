import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import AccountController from './app/controllers/AccountController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/account', AccountController.create);
routes.post('/account/login', AccountController.login);

routes.use(authMiddleware);

routes.put('/account', AccountController.update);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
