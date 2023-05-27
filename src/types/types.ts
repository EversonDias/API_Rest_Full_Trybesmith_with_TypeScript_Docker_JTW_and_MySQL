import { Product } from './Product';

export type ProductWithoutId = Omit<Product, 'id'>;
export type BodyProduct = {
  name: string;
  price: string;
  orderId: number;
};
export type ProductWithoutOrderId = Omit<Product, 'orderId'>;

export type ServiceResponseError = {
  type: 'UNAUTHORIZED' | 'NOT_FOUND' | 'INVALID_DATA',
  data: {
    message: string;
  }
};

export type ServiceResponseSuccess<T> = {
  type: 'OK' | 'CREATED',
  data: T;
};

export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseError;

export type GetAllProductResponse = {
  status: number;
  data: Product[];
};

export type Order = {
  id: number;
  userId: number;
  productId: Array<number>;
};
