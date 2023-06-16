import { sequelize } from './database/database.js';
//const express = require('express')
import express from "express";
import { Usuario } from './models/Usuario.js';
const app = express()
const port = 3001;

async function verificarConexion(){
    try{
        await sequelize.authenticate() 
        console.log("Conexion a BD exitosa");   
        await sequelize.sync()
    }
    catch(error){
        console.error("Conexion no se logro", error);
    }
    
}
app.get("/insertar-usuario", async function(req,res){
    const nuevoUsuario= await Usuario.create({
        nombre: "Juan",
        codigo: "1234",
        edad: 20
    })
    res.send("Usuario creado");
})
app.get("/", function(req,res){
    res.send("Programacion web");
})

app.listen(port,function(){
    console.log("El servidor esta escuchando, puerto: " + port)
    verificarConexion();
})