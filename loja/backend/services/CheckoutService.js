import db from "../config/db.js"

db.connect()

export async function exibirCliente(id) {
    return new Promise((resolve, reject) => {
        const query = "select c.id, c.nome, ce.endereco, ce.complemento, ce.cep, ce.uf from clientes c join cliente_enderecos ce on ce.cliente_id = c.id where c.id = ? and ce.principal = true"
        db.query(query, [id], function (error, clientes) {
            if (error)
                reject(error)
  
            if (clientes != undefined && clientes.length > 0) {
              resolve(clientes[0]);
            } else {
              resolve("Cliente não localizado");
            }
        })
    })
  }
  