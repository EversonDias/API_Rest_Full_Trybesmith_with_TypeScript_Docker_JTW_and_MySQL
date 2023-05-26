import express from 'express';
import productsController from './Controller/productsController';

const app = express();

app.use(express.json());

app.post('/products', productsController.createProduct);

export default app;
