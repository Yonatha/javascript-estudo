import db from "../config/db.js"

db.connect()

export async function listarCategorias() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM categorias`;
      db.query(query, function (error, categorias) {
        if (error)
          reject(error);
  
        resolve(categorias);
      });
    });
  }

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
export async function deletarCategoria(id) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM categorias WHERE id = ?"
        db.query(query, [id], function (error) {
            if (error)
                reject(error)

            resolve("Categoria excluida com sucesso");
        })
    })
}