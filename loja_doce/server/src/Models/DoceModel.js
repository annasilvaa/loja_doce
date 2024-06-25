import mysql from "mysql2"
import config from "../Config.js";

class DoceModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome, id_categoria){
        let sql = `INSERT INTO doce (nome) VALUES("${nome}","${id_categoria}");`;

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro, retorno)=>{
                if (erro){
                    reject([400, erro])
                }
                resolve([201, "Doce Adicionado com Sucesso"])
            })
        });
    }

    read(){
        let sql = `SELECT * FROM doce;`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, (erro, retorno)=>{
                if (erro){
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        });
    }

    update(id_doce, nome){
        let sql = `UPDATE doce SET nome="${nome}" WHERE id_doce="${id_doce}"`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, (erro, retorno)=>{
                if (erro){
                    console.debug(erro)
                    reject([400, erro])
                } else if (retorno.affectedRows > 0){
                    resolve([200, "Doce Atualizado com Sucesso"])
                } else{
                    resolve([404, "Doce não encontrado!"])
                }
            })
        });
    }

    delete(id_doce){
        let sql = `DELETE from doce WHERE id_doce="${id_doce}";`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, (erro, retorno)=>{
                if (erro){
                    reject([400, erro])
                } else if (retorno.affectedRows > 0){
                    resolve([200, retorno])
                } else{
                    resolve([404, "Doce não encontrado"])
                }
            })
        })
    };
}

export default new DoceModel();