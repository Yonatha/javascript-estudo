import db from "../config/db.js"

db.connect()

export async function cadastrarClienteEndereco(cliente_id, logradouro) {
    const {endereco, uf, complemento, principal, cep } = logradouro
    return new Promise((resolve, reject) => {
        const query = `insert into cliente_enderecos ( cliente_id, endereco, uf, complemento, principal, cep ) values ( ?, ?, ?, ?, ?, ? )`;
        db.query(query, [cliente_id, endereco, uf, complemento, principal, cep]);
    });
}