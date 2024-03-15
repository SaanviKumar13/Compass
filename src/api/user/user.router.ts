import { Router } from 'express';
import { getUserInfo } from './user.controller';

export default (): Router => {
const app = Router();
app.get('/:userId', getUserInfo);
return app;
};
