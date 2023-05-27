import { Request, Response } from 'express';
import orderServices from '../Service/orderServices';
import status from '../utils/HTTP';

const getAllOrders = async (_req: Request, res: Response): Promise<Response> => {
  const { type, data } = await orderServices.getAllOrders();
  if (type === 'OK') {
    return res.status(status.OK).json(data);
  }
  return res.status(status.BAD_REQUEST).json(data); 
};

export default {
  getAllOrders,
};