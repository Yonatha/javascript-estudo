import db from "../config/db.js"

db.connect()


  export async function listarProdutos() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM produtos`;
      db.query(query, function(error, produtos) {
        if (error)
        reject(error);
      resolve(produtos);
      })
    })
  }