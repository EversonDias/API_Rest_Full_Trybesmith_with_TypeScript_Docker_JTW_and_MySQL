import { Request, Response } from 'express';
import productsServices from '../Service/productsServices';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const payload = req.body;
  const response = await productsServices.createProduct(payload);
  return res.status(response.status).json(response.data);
};

export default {
  createProduct,
};