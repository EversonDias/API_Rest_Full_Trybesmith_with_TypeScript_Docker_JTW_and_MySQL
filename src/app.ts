import express from 'express';
import productsController from './Controller/productsController';
import orderControllers from './Controller/orderControllers';
import loginController from './Controller/loginController';

const app = express();

app.use(express.json());

app.post('/products', productsController.createProduct);
app.get('/products', productsController.getAllProducts);
app.get('/orders', orderControllers.getAllOrders);
app.post('/login', loginController.handleLogin);

export default app;
