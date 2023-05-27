import express from 'express';
import productsController from './Controller/productsController';
import orderControllers from './Controller/orderControllers';

const app = express();

app.use(express.json());

app.post('/products', productsController.createProduct);
app.get('/products', productsController.getAllProducts);
app.get('/orders', orderControllers.getAllOrders);

export default app;
