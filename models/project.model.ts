import { Model, DataTypes } from "sequelize";
import sequelize from "../db/db";
import Employee from "./employee.model";

export class Project extends Model {
  public id!: number;
  public employeeId!: number;
  public task!: string;
  public status!: string;
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Employee,
        key: "id",
      },
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Projects",
    modelName: "Project",
    timestamps: false,
  }
);

Employee.hasMany(Project, {
  foreignKey: "employeeId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Project.belongsTo(Employee, {
  foreignKey: "employeeId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
