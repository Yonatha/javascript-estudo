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

  