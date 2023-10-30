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
        const query = `DELETE FROM categorias WHERE id = ?`
        db.query(query, [id], function (error) {
            if (error)
                reject(error)

            resolve("Categoria excluída com sucesso");
        })
    })
}
export function findById(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM categorias WHERE id = ?';
  
      db.query(query, [id], function (error, categorias, fields) {
        if (error)
          reject(error)
  
        if (categorias.length > 0) {
          resolve(categorias[0]);
        } else {
          resolve(null);
        }
      });
    });
  }

export async function exibirCategoria(id) {
  return new Promise((resolve, reject) => {
      const query = "SELECT * FROM categorias WHERE id = ?"
      db.query(query, [id], function (error, categorias) {
          if (error)
              reject(error)

          if (categorias.length > 0) {
            resolve(categorias[0]);
          } else {
            resolve("Categoria não localizada");
          }
      })
  })
}

export async function editarCategoria(id, categoria) {
  const {nome} = categoria

  const categoriaCadastro = await findById(id)
  if (!categoriaCadastro)
    return "Categoria não localizada"   

  return new Promise((resolve, reject) => {
    const query = `UPDATE categorias SET nome = ? WHERE id = ?`;
    db.query(query, [nome,id], function (error) {
      if (error)
        reject(error);

      resolve("Edição realizda com sucesso");
    });
  });
}
