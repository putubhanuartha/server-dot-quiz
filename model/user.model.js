import { DataTypes } from "sequelize";
import db from "../config/database.js";
import ScoreBoardModel from "./scoreboard.model.js";
const UserModel = db.define(
	"user",
	{
		id: {
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	},
	{ freezeTableName: true }
);

UserModel.hasMany(ScoreBoardModel, { foreignKey: { allowNull: false } });
ScoreBoardModel.belongsTo(UserModel, { foreignKey: { allowNull: false } });

export default UserModel;
