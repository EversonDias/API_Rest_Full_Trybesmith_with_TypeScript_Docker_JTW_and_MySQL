import { Product } from './Product';

export type ProductWithoutId = Omit<Product, 'id'>;
export type BodyProduct = {
  name: string;
  price: string;
  orderId: number;
};
export type ProductWithoutOrderId = Omit<Product, 'orderId'>;
export type ServiceResponse = {
  status: number;
  data: ProductWithoutOrderId;
};