import { Model } from 'sequelize';
import { Product } from './Product';

export type productWithoutId = Omit<Product, 'id'>
export type BodyProduct = {
  name: string;
  price: string;
  orderId: number;
};
export type productWithoutOrderId = Omit<Product, 'orderId'>;
export type sericeResponse = {
  status: number;
  data: productWithoutOrderId;
};