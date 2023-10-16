import db from "../../app/config/db.js"

db.connect()

export async function cadastrarProduto(produto) {
  const { nome, situacao, fornecedor_id, valor } = produto

  const produtoCadastrado = await findByNome(nome)
  if (produtoCadastrado)
    return "Produto já cadastrado"

  return new Promise((resolve, reject) => {
    const query = `INSERT INTO produtos (nome, situacao, fornecedor_id, valor) VALUES (?, ?, ?, ?)`;
    db.query(query, [nome, situacao, fornecedor_id, valor], function (error, produtos, fields) {
      if (error)
        reject(error);

      resolve("Produto cadastrado com sucesso");
    });
  });
}

export function findByNome(nome) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM produtos WHERE nome = ?';

    db.query(query, [nome], function (error, produtos, fields) {
      if (error)
        reject(error)

      if (produtos.length > 0) {
        resolve(produtos[0]);
      } else {
        resolve(null);
      }
    });
  });
}

export async function listarProdutos() {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM produtos`;
    db.query(query, function (error, produtos) {
      if (error)
        reject(error);
      resolve(produtos)
    });
  });
}