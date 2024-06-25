import express from 'express'; // Importando o express
import DoceController from './Controllers/DoceController.js';
import CategoriaController from './Controllers/CategoriaController.js';


const server = express(); // Iniciando o express

server.use(express.json()); // Configurando o json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando");

});

server.get('/doce',DoceController.read);
server.post('/doce',DoceController.create);
server.put('/doce/:id_doce',DoceController.update);
server.delete('/doce/:id_doce',DoceController.delete);



server.get('/categoria',CategoriaController.read);
server.post('/categoria',CategoriaController.create);
server.put('/categoria/:id_categoria',CategoriaController.update);
server.delete('/categoria/:id_categoria',CategoriaController.delete);
server.listen(5000);