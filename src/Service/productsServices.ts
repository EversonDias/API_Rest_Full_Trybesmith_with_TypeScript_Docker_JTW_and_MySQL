import { productWithoutId, sericeResponse } from 'src/types/types';
import ProductModel from '../database/models/product.model';
import status from '../utils/HTTP';


const createProduct = async (product: productWithoutId): Promise<sericeResponse> => {
  const response = await ProductModel.create(product);
  return { status: status.CREATED, data: response.dataValues };
};

export default {
  createProduct,
};