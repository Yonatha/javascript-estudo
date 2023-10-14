import db from "../config/db.js"

db.connect()

export async function cadastrarCliente(cliente) {
  const {cpf, nome, email, situacao} = cliente

  const clienteCadastrado = await findByCpf(cpf)
  if (clienteCadastrado)
    return "CPF já esta cadastrado"   

  return new Promise((resolve, reject) => {
    const query = `INSERT INTO clientes (cpf, nome, sobrenome ,email, situacao) VALUES (?, ?, ?, ?)`;
    db.query(query, [cpf, nome, email, situacao], function (error, resultado, fields) {
      if (error)
        reject(error);

      resolve("Cadastro realizdo com sucesso");
    });
  });
}

export function findByCpf(cpf) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM clientes WHERE cpf = ?';

    db.query(query, [cpf], function (error, clientes, fields) {
      if (error)
        reject(error)

      if (clientes.length > 0) {
        resolve(clientes[0]);
      } else {
        resolve(null);
      }
    });
  });
}

export async function listarClientes() {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM clientes`;
    db.query(query, function (error, clientes) {
      if (error)
        reject(error);

      resolve(clientes);
    });
  });
}

export async function deletarCliente(id) {
  return new Promise((resolve, reject) => {
      const query = "DELETE FROM clientes WHERE id = ?"
      db.query(query, [id], function (error, clientes) {
          if (error)
              reject(error)

          resolve("Cliente excluído com sucesso");
      })
  })
}