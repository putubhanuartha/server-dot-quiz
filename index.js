import express from "express";
import db from "./config/database.js";
import Router from "./routes/user.route.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
const port = process.env.PORT || 5000;
dotenv.config();
const app = express();
app.use(
	cors({
		credentials: true,
		origin: [process.env.CLIENT_ORIGIN_URL_NEXT],
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// router middleware
app.use(Router);

db.authenticate()
	.then(async () => {
		await db.sync();
		app.listen(port, "0.0.0.0", () => {
			console.log("💡 server is running at port : " + port);
		});
	})
	.catch((err) => {
		console.log(err);
	});
