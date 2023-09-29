import { DataTypes } from "sequelize";
import db from "../config/database.js";
const ScoreBoardModel = db.define(
	"score_board",
	{
		id: {
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		score: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		wrong_answer: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		not_answered: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{ freezeTableName: true }
);

export default ScoreBoardModel;
