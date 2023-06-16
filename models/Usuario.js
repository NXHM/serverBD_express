import { sequelize } from "../database/database.js";
import { DataTypes} from "sequelize";
export const Usuario = sequelize.define(
    "Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: {
            type: DataTypes.STRING
        },
        nombre: {
            type: DataTypes.STRING
        },
        edad: {
            type: DataTypes.INTEGER
        }
    },{
        freezeTableName: true
    }
)