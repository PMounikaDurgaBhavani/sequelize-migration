import { Model, DataTypes } from "sequelize";
import sequelize from "../db/db";

export class Employee extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public salary!: number;
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Active",
    },
  },
  {
    sequelize,
    tableName: "Employees",
    modelName: "Employee",
    timestamps: false,
  }
);

export default Employee;
