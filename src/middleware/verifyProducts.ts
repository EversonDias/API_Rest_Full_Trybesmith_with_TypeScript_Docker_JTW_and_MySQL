import { NextFunction, Request, Response } from 'express';
import status from '../utils/HTTP';

const hasKey = (req: Request, res: Response, next: NextFunction): Response | void => {
  const payload = req.body;  
  if (!['name'].every((key) => key in payload)) {
    return res.status(status.BAD_REQUEST).json({ message: '"name" is required' });
  }
  if (!['price'].every((key) => key in payload)) {
    return res.status(status.BAD_REQUEST).json({ message: '"price" is required' });
  }
  next();
};

const isString = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name, price } = req.body;
  if (typeof name !== 'string') {
    return res.status(status.UNPROCESSABLE_ENTITY).json({ message: '"name" must be a string' });
  }
  if (typeof price !== 'string') {
    return res.status(status.UNPROCESSABLE_ENTITY).json({ message: '"price" must be a string' });
  }
  next();
};

const hasMinLength = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name, price } = req.body;
  if (name.length < 3) {
    return res
      .status(status.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  if (price.length < 3) {
    return res
      .status(status.UNPROCESSABLE_ENTITY)
      .json({ message: '"price" length must be at least 3 characters long' });
  }
  next();
};

export {
  hasKey,
  isString,
  hasMinLength,
};