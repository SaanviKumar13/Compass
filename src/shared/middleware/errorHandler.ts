import { NextFunction, Request, Response } from 'express';
import LoggerInstance from '../../loaders/logger';
import { ERRORS } from '../errors';

export interface ApiError extends Error {
  message: string;
  statusCode?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error: ApiError, _req: Request, res: Response, _next: NextFunction) => {
  LoggerInstance.error(error.message);
  res.status(error.statusCode ?? ERRORS.SERVER_ERROR.code).json({
    success: false,
    message: error.message ?? ERRORS.SERVER_ERROR.message.error,
  });
};
