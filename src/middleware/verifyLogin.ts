import { NextFunction, Request, Response } from 'express';
import status from '../utils/HTTP';

const hasPayload = (req: Request, res: Response, next: NextFunction): Response | void => {
  const payload = req.body;  
  if (!['username', 'password'].every((key) => key in payload)) {
    return res
      .status(status.BAD_REQUEST)
      .json({ message: '"username" and "password" are required' });
  }
  next();
};

export default {
  hasPayload,
};