import {  
  ProductWithoutId, 
  ProductWithoutOrderId, 
  ServiceResponse,
} from 'src/types/types';
import { Product } from 'src/types/Product';
import ProductModel from '../database/models/product.model';

const createProduct = async (
  product: ProductWithoutId,
): Promise<ServiceResponse<ProductWithoutOrderId>> => {
  const response = await ProductModel.create(product);
  const responseWithoutOrderId = response.dataValues;
  Reflect.deleteProperty(responseWithoutOrderId, 'orderId');
  return { type: 'CREATED', data: responseWithoutOrderId };
};

const getAllProducts = async (): Promise<ServiceResponse<Array<Product>>> => {
  const response = await ProductModel.findAll();
  const data = response.map((product) => product.dataValues);
  return { type: 'OK', data };
};

export default {
  createProduct,
  getAllProducts,
};