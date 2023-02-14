import { products } from '../db/products.db.js';

export const handlerProducts = (req, res) => {
	res.status(200).json(products);
};
