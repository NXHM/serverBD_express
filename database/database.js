import {Sequelize } from "sequelize";
//sequelize(nombre base de datos, nombre del usuario, contraseña)
export const sequelize = new Sequelize("ejemplodb","postgres","nico",{
    host: "localhost", //aca iria el ip de la otra maquina,
    dialect: "postgres"
})
