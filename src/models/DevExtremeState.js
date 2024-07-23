import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const DevExtremeState = sequelize.define(
  "DevExtremeState",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "devextreme_states",
    timestamps: false,
  }
);

export default DevExtremeState;
