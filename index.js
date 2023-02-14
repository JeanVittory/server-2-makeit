import express from 'express';
import { handlerProducts } from './handlers/handlerProducts.handler.js';
import { handlerInfo } from './handlers/handlerInfo.handler.js';
import { handlerAbout } from './handlers/handlerAbout.handlers.js';

const app = express();

app.get('/api/products', handlerProducts);
app.get('/info', handlerInfo);
app.get('/about', handlerAbout);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
