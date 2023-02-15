import express from 'express';
import {
	handlerProducts,
	handlerProductsById,
	handlerProductsDeleteById,
	handlerAbout,
	handlerInfo,
	handlerProductsPost,
} from './handlers/handlersProducts.js';
import morgan from 'morgan';

const app = express();
app.use(morgan('tiny'));
app.use(express.json());

app.get('/api/products', handlerProducts);
app.get('/api/products/:id', handlerProductsById);
app.post('/api/products', handlerProductsPost);
app.delete('/api/products/:id', handlerProductsDeleteById);
app.get('/info', handlerInfo);
app.get('/about', handlerAbout);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
