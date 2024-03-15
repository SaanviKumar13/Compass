import { validateRequest } from '../../shared/middleware/validator';
import { AuthSchema } from '../../shared/types/auth/auth.schema';
import { Router } from 'express';
import { addNewUser, loginExistingUser } from './auth.controller';

export default (): Router => {
  const app = Router();

  app.post('/signup', validateRequest('body', AuthSchema), addNewUser);
  app.post('/login', validateRequest('body', AuthSchema), loginExistingUser);

  return app;
};
