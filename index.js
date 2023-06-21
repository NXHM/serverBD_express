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
app.get("/consultar-usuario", async function(req, res){
   // const usuarios = await Usuario.findAll(); //select *
   const {nombre } = req.query;
   let usuarios;
   if (nombre==='-1'){
     usuarios = await Usuario.findAll();
   }else{
     usuarios = await Usuario.findAll({
        where: {
            nombre
            
        }
    });//select * where

   }
    
    
    res.send(usuarios);
    //es como un select
})
app.get("/modificar-usuario", async function(req, res){
    // const usuarios = await Usuario.findAll(); //select *
    const { edad, nombre } = req.query;
    await Usuario.update({
         edad             
         },{
            where:{
                nombre
            }
         })
    res.send("Se modifico el usuario")
     //DELETE FROM "Usuario" WHERE "id" = 1
 })
 app.get("/eliminar-usuario", async function(req, res){
    // const usuarios = await Usuario.findAll(); //select *
    const { codigo } = req.query;
     await Usuario.destroy({
         where: {
             codigo             
         }
     });
     res.send("Se elimino el usuario")
 })
app.get("/insertar-usuario", async function(req,res){
    const { edad, nombre, codigo } = req.query;
    //como he nombrado igual la propiedad y el valor, no es necesario que coloque el nombre:nombre...
    const nuevoUsuario= await Usuario.create({
        nombre,
        codigo,
        edad
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