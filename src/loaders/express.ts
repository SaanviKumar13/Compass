import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import routes from '../api';
import config from '../config';
import { errorHandler } from '../shared/middleware/errorHandler';

export default ({ app }: { app: express.Application }): void => {
  app.get('/healthcheck', (req, res) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };
    try {
      return res.json(healthcheck);
    } catch (e) {
      return res.status(503).send();
    }
  });
  // Middleware that helps secure app by setting headers
  app.use(helmet());

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(express.json());

  
  // Load API routes
  app.use(config.api.prefix, routes());

  app.use(errorHandler);

};
