import express from 'express';
import productsController from './Controller/productsController';
import orderControllers from './Controller/orderControllers';
import loginController from './Controller/loginController';
import { hasMinLength, hasKey, isString } from './middleware/verifyProducts';
import verifyLogin from './middleware/verifyLogin';

const app = express();

app.use(express.json());

app.post('/products', hasKey, isString, hasMinLength, productsController.createProduct);
app.get('/products', productsController.getAllProducts);
app.get('/orders', orderControllers.getAllOrders);
app.post('/login', verifyLogin.hasPayload, loginController.handleLogin);

export default app;
