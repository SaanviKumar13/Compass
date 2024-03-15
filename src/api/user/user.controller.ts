import { Request, Response, NextFunction, Router } from 'express';
import { MESSAGES_TEXT, STATUS } from '../../shared/constants';
import { findUserById } from './user.service';

export const getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  try {
    const user = await findUserById(userId);
    res.status(STATUS.OK).json({
      success: true,
      message: MESSAGES_TEXT.FETCH_USER,
      user,
    });
  } catch (error) {
    next(error);
  }
};
