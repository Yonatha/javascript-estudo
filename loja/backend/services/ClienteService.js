import db from "../config/db.js"

db.connect()

export async function cadastrarCliente(cliente) {
  const { cpf, nome, email, situacao } = cliente

  if (!validarCpf(cpf)) {
    return 'CPF inválido! O cadastro não pode ser concluído.';
  }

  const clienteCadastrado = await findByCpf(cpf)
  if (clienteCadastrado)
    return "CPF já esta cadastrado"

  return new Promise((resolve, reject) => {
    const query = `INSERT INTO clientes (cpf, nome, sobrenome ,email, situacao) VALUES (?, ?, ?, ?)`;
    db.query(query, [cpf, nome, email, situacao], function (error, resultado, fields) {
      if (error)
        reject(error);

      resolve("Cadastro realizado com sucesso");
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
    const query = 'DELETE FROM clientes WHERE id = ?'
    db.query(query, [id], function (error, clientes) {
      if (error)
        reject(error)

      resolve("Cliente excluído com sucesso");
    })
  })
}

export function validarCpf(cpf) {
  let soma = 0;
  soma += cpf[0] * 10;
  soma += cpf[1] * 9;
  soma += cpf[2] * 8;
  soma += cpf[3] * 7;
  soma += cpf[4] * 6;
  soma += cpf[5] * 5;
  soma += cpf[6] * 4;
  soma += cpf[7] * 3;
  soma += cpf[8] * 2;
  soma = (soma * 10) % 11;


  if (soma == 10 || soma == 11)
    soma = 0;

  if (soma != cpf[9])
    return false;

  soma = 0;
  soma += cpf[0] * 11;
  soma += cpf[1] * 10;
  soma += cpf[2] * 9;
  soma += cpf[3] * 8;
  soma += cpf[4] * 7;
  soma += cpf[5] * 6;
  soma += cpf[6] * 5;
  soma += cpf[7] * 4;
  soma += cpf[8] * 3;
  soma += cpf[9] * 2;
  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 11)
    soma = 0;

  if (soma != cpf[10])
    return 'CPF inválido!';

  return 'CPF válido!'

}


