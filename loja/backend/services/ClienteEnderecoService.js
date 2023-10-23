import db from "../config/db.js"

db.connect()

export async function cadastrarClienteEndereco(cliente_endereco){
    const {cliente_id, endereco, uf, complemento, principal} = cliente_endereco
  
   const clienteEnderecoCadastrado = await findByEndereco(endereco)
   if (clienteEnderecoCadastrado)
    return "Endereco ja esta Cadastrado"
  
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO cliente_enderecos (cliente_id, endereco, uf, complemento, principal) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [cliente_id, endereco, uf, complemento, principal], function (error, resultado, fields) {
      if (error)
        reject(error);
  
      resolve("Cadastro realizado com sucesso")
    });
  });
  }