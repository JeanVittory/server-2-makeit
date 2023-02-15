import { user } from '../db/user.db.js';
import { products } from '../db/products.db.js';
import { idGenerator } from '../utils/idgenerator.js';

let myProducts = products;

export const handlerProducts = (req, res) => {
	res.status(200).json(myProducts);
};

export const handlerProductsById = (req, res) => {
	const { id } = req.params;
	const product = myProducts.find((product) => product.id === +id && product);
	if (!product) return res.status(404).json({ error: "The product doesn't exist" });
	res.status(200).json(product);
};

export const handlerProductsDeleteById = (req, res) => {
	const { id } = req.params;
	const dataFiltered = myProducts.filter((product) => product.id !== +id);
	myProducts = [...dataFiltered];
	res.status(200).json({ message: 'Product deleted succesfully' });
};

export const handlerProductsPost = (req, res) => {
	const { title, price } = req.body;
	if (!title || !price)
		return res.status(400).json({ error: 'You must provide a title and price to post a product' });
	const isTitle = myProducts.find((product) => product.title === title);
	if (isTitle) res.status(400).json({ error: 'The title provided already exist' });
	const newProduct = {
		...req.body,
		id: idGenerator(),
	};
	myProducts.push(newProduct);
	res.status(200).json({ message: 'Product added' });
};

export const handlerInfo = (req, res) => {
	const date = new Date();
	res.status(200).send(`
  <p>Our store has info for ${products.length} products</p>
  <p>${date}</p>
  `);
};

export const handlerAbout = (req, res) => {
	res.status(200).json(user);
};
