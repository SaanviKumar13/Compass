import { Router } from 'express';
import authRouter from './auth/auth.router';
import usersRouter from './user/user.router';

export default (): Router => {
  const app = Router();

  app.use('/auth', authRouter());
  app.use('/users', usersRouter());

  return app;
};
