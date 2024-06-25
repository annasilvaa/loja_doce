import CategoriaModel from "../Models/CategoriaModel.js";

class CategoriaController {
    constructor() {
    }
    create(req, res){
        const nome = req.body.nome;
        CategoriaModel.create(nome).then(
            resposta =>{
                console.debug("Inserindo um categoria...");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch()
        resposta =>{
            console.debug("Erro: Inserindo um categoria.");
            res.status(resposta[0]).json(resposta[1])
        }
    }
    read(req, res){
       CategoriaModel.read().then(
        resposta =>{
            console.debug("Mostrando categoria...")
            res.status(resposta[0]).json(resposta[1])
        }
       ).catch(
        resposta =>{
            console.debug("Erro ao mostrar categoria.")
            res.status(resposta[0]).json(resposta[1])
        }
       );
    }

    update(req, res){
        const id_categoria= req.params.id_categoria;
        const nome = req.body.nome;

        CategoriaModel.update(id_categoria,nome).then(
            resposta =>{
                console.debug("Atualizando categoria...")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro atualizando categoria.")
                res.status(resposta[0]).json(resposta[1])
            }
            );
    }
    
    delete(req,res){
        const id_categoria = req.params.id_categoria;

        CategoriaModel.delete(id_categoria).then(
            resposta =>{
                console.debug("Deletando uma categoria...");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao deletar uma categoria.");
                res.status(resposta[0]).json(resposta[1])
            }
        )

    }
}

export default new CategoriaController();