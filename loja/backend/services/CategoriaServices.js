import db from "../config/db.js"

db.connect()

export async function cadastrarCategoria (categoria) {
    const { nome } = categoria

    const categoriaCadastro = await findByNome(nome)
    if (categoriaCadastro)
        return "Categoria já cadastrado."


        return new Promise((resolve, reject) => {
            const query = `INSERT INTO categorias (nome) VALUES (?)`;
            db.query(query, [nome], function (error, resultado, fields) {
                if (error)
                    reject(error);
    
                resolve("Cadastro de categoria realizado com sucesso");
            });
        });
    }

    export function findByNome(nome) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM categorias WHERE nome = ?'
    
            db.query(query, [nome], function (error, categorias, fields) {
                if (error) {
                    reject(error);
                }
    
                if (categorias.length > 0) {
                    resolve(categorias[0]);
                } else {
                    resolve(null);
                }
            });
        });
}

