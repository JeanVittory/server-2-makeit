import { user } from '../db/user.db.js';

export const handlerAbout = (req, res) => {
	res.status(200).json(user);
};
