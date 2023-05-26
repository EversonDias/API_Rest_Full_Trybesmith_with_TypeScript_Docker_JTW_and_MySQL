import { ProductWithoutId, ServiceResponse } from 'src/types/types';
import ProductModel from '../database/models/product.model';
import status from '../utils/HTTP';

const createProduct = async (product: ProductWithoutId): Promise<ServiceResponse> => {
  const response = await ProductModel.create(product);
  return { status: status.CREATED, data: response.dataValues };
};

export default {
  createProduct,
};