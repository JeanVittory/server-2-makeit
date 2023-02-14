import { products } from '../db/products.db.js';

export const handlerInfo = (req, res) => {
	const date = new Date();
	res.status(200).send(`
      <p>Our store has info for ${products.length} products</p>
      <p>${date}</p>
    `);
};
