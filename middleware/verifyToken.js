import UserModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
	const { token } = req?.cookies;
	if (!token) return res.sendStatus(401);
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
		if (err) return res.sendStatus(401);
		const user = await UserModel.findByPk(decoded.uid);
		if (!user) return res.sendStatus(401);
		res.locals.data = decoded;
		next();
	});
};
