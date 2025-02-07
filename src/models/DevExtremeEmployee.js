import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const DevExtremeEmployee = sequelize.define(
  "DevExtremeEmployee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    prefix: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    hireDate: {
      type: DataTypes.DATE,
    },
    notes: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    stateId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "devextreme_employees",
    timestamps: false,
  }
);

export default DevExtremeEmployee;
