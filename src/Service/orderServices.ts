import { Product } from 'src/types/Product';
import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';
import { ServiceResponse } from '../types/types';
import { Order } from '../types/Order';

const getAllOrders = async ():Promise<ServiceResponse<Order[]>> => {
  const result = await OrderModel.findAll({
    include: [
      { model: ProductModel, as: 'productIds' },
    ],
  });
  const data = result.map(({ dataValues }) => {
    const { id, productIds, userId } = dataValues;
    const productData = (productIds as Product[])?.map((product) => product.id);
    return {
      id,
      userId,
      productIds: productData,
    };
  });

  return { type: 'OK', data };
};

export default {
  getAllOrders,
};