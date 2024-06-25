import express from 'express'; // Importando o express
import DoceController from './Controllers/DoceController.js';


const server = express(); // Iniciando o express

server.use(express.json()); // Configurando o json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando");

});

server.get('/doce',DoceController.read);
server.post('/doce',DoceController.create);
server.put('/doce/:id_doce',DoceController.update);
server.delete('/doce/:id_doce',DoceController.delete);

server.listen(5000);