import { Request, Response } from 'express';
import status from '../utils/HTTP';
import productsServices from '../Service/productsServices';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const payload = req.body;
  const { type, data } = await productsServices.createProduct(payload);
  if (type === 'CREATED') {
    return res.status(status.CREATED).json(data);
  }
  return res.status(status.BAD_REQUEST).json(data);
};

const getAllProducts = async (_req: Request, res: Response): Promise<Response> => {
  const { type, data } = await productsServices.getAllProducts();
  if (type === 'OK') {
    return res.status(status.OK).json(data);
  }
  return res.status(status.BAD_REQUEST).json(data);
};

export default {
  createProduct,
  getAllProducts,
};