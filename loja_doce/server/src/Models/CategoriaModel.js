import mysql from "mysql2"
import config from "../Config.js";

class CategoriaModel {
    constructor() {
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome) {
        let sql = `INSERT INTO categoria (nome) VALUES("${nome}");`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                }
                resolve([201, "Categoria Adicionada com Sucesso!"])
            })
        });
    }

    read() {
        let sql = `SELECT * FROM categoria;`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        });
    }

    update(id_categoria, nome) {
        let sql = `UPDATE categoria SET nome="${nome}" WHERE id_categoria="${id_categoria}"`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                } else if (retorno.affectedRows > 0) {
                    resolve([200, "Categoria Atualizada com Sucesso!"])
                } else {
                    resolve([404, "Categoria não encontrada!"])
                }
            })
        });
    }

    delete(id_categoria) {
        let sql = `DELETE from categoria WHERE id_categoria="${id_categoria}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                } else if (retorno.affectedRows > 0) {
                    resolve([200, retorno])
                } else {
                    resolve([404, "Categoria não encontrada!"])
                }
            })
        })
    };
}

export default new CategoriaModel();