import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ScoreBoardModel from "../model/scoreboard.model.js";
import UserModel from "../model/user.model.js";
const role = "user";

export const registerUser = async (req, res) => {
	const { username, email, password, confirm_password } = req.body;
	if (password != confirm_password)
		return res
			.status(400)
			.json({ message: "password and confirm password not equal" });
	const salt = await bcrypt.genSalt();
	const hashPassword = await bcrypt.hash(password, salt);
	try {
		await UserModel.create({
			username: username,
			password: hashPassword,
			email: email,
		});
		res
			.status(200)
			.json({ message: "data credential user berhasil ditambahkan" });
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
};
export const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await UserModel.findOne({ where: { email } });
		if (!user) return res.sendStatus(404);
		console.log(user.getDataValue("password"));
		const match = bcrypt.compareSync(
			password,
			await user.getDataValue("password")
		);
		if (!match)
			return res.status(401).json({ message: "email atau password salah" });
		const username = await user.getDataValue("username");
		const uid = await user.getDataValue("id");
		const accessToken = jwt.sign(
			{ email, uid, username, role },
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: "1d" }
		);
		res.cookie("token", accessToken, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24,
		});
		res.sendStatus(200);
	} catch (err) {
		res.status(404).json({ message: "email atau password salah" });
	}
};
export const logoutUser = async (req, res) => {
	res.clearCookie("token");
	return res.sendStatus(200);
};

export const getUserScoreboard = async (req, res) => {
	const { uid } = res.locals.data;
	try {
		const data = await ScoreBoardModel.findAll({
			where: { userId: uid },
			attributes: { exclude: ["userId", "updatedAt"] },
		});
		res.status(200).json({ data });
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
};
export const postUserScoreboard = async (req, res) => {
	const { score, wrong_answer, not_answered } = req.body;
	const { uid } = res.locals.data;
	try {
		await ScoreBoardModel.create({
			score,
			wrong_answer,
			userId: uid,
			not_answered,
		});
		res
			.status(200)
			.json({ message: "score successfully added to user scoreboard" });
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
};
