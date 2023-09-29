import express from "express";

import {
	logoutUser,
	postUserScoreboard,
	registerUser,
} from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { getUserScoreboard } from "../controllers/user.controller.js";
import authorizeUser from "../middleware/authorizeUser.js";

const Router = express.Router();
Router.post("/user/auth/register", registerUser);
Router.post("/user/auth/login", loginUser);
Router.delete("/user/auth/logout", logoutUser);
Router.get("/user/auth", verifyToken, authorizeUser, (req, res) => {
	res.sendStatus(200);
});

Router.get("/user/scoreboard", verifyToken, authorizeUser, getUserScoreboard);
Router.post("/user/score", verifyToken, authorizeUser, postUserScoreboard);
export default Router;
