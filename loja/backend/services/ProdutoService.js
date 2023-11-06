import db from "../config/db.js"

db.connect()

export async function cadastrarProduto(produto) {
  const {nome, situacao, fornecedor_id, valor} = produto

  const produtoCadastrado = await findByNome(nome)
  if (produtoCadastrado)
    return "Produto já cadastrado."   

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
      resolve(produtos);
    })
  })
}

export async function deletarProduto(id) {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM produtos WHERE id = ?;'
    db.query(query, [id], function (error) {
      if (error)
        reject(error)
      resolve("Produto excluido com sucesso!");
    });
  });
}
export async function exibirProduto(id) {
  return new Promise((resolve, reject) => {
      const query = "SELECT * FROM produtos WHERE id = ?"
      db.query(query, [id], function (error, produtos) {
          if (error)
              reject(error)

          if (produtos.length > 0) {
            resolve(produtos[0]);
          } else {
            resolve("Produto não localizado");
          }
      })
  })
}
export function findById(id) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM produtos WHERE id = ?';

    db.query(query, [id], function (error, produtos, fields) {
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

export async function editarProduto(id, produto) {
  const {nome, situacao, fornecedor_id, valor, imagem} = produto

  const produtoCadastrado = await findById(id)
  if (!produtoCadastrado)
    return "Produto não localizado"   

  return new Promise((resolve, reject) => {
    const query = `UPDATE produtos SET nome = ?, situacao = ?, fornecedor_id = ?, valor = ?, imagem = ?, WHERE id = ?`;
    db.query(query, [nome, situacao, fornecedor_id, valor, imagem, id], function (error) {
      if (error)
        reject(error);

      resolve("Edição realizda com sucesso");
    });
  });
}