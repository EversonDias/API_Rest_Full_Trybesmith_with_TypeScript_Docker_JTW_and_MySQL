import { Request, Response } from 'express';
import status from '../utils/HTTP';
import productsServices from '../Service/productsServices';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const payload = req.body;
  const { data } = await productsServices.createProduct(payload);
  return res.status(status.CREATED).json(data);
};

const getAllProducts = async (_req: Request, res: Response): Promise<Response> => {
  const { data } = await productsServices.getAllProducts();
  return res.status(status.OK).json(data);
};

export default {
  createProduct,
  getAllProducts,
};