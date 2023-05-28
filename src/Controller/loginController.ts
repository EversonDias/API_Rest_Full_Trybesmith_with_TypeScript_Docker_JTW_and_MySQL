import { Request, Response } from 'express';
import loginService from '../Service/loginService';
import status from '../utils/HTTP';

const handleLogin = async (req: Request, res: Response): Promise<Response> => {
  const payload = req.body;
  const { type, data } = await loginService.handleLogin(payload);
  if (type === 'OK') {
    return res.status(status.OK).json(data);
  }
  return res.status(status.UNAUTHORIZED).json(data);
};

export default {
  handleLogin,
};