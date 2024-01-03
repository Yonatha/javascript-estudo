import db from "../config/db.js"

db.connect()

export async function cadastrarClienteEndereco(cliente_id, logradouro) {
    const {endereco, uf, complemento, principal, cep } = logradouro
    return new Promise((resolve, reject) => {
        const query = `insert into cliente_enderecos ( cliente_id, endereco, uf, complemento, principal, cep ) values ( ?, ?, ?, ?, ?, ? )`;
        db.query(query, [cliente_id, endereco, uf, complemento, principal, cep]);
    });
}
export async function editarClienteEndereco(cliente_id, logradouro) {
        const { endereco, uf, complemento, principal, cep } = logradouro
    
        const ClienteEnderecoCadastrado = await findById(id)
        if (!ClienteEnderecoCadastrado)
            return "Cliente Endereco não localizado."
    
        return new Promise((resolve, reject) => {
            const query = `UPDATE fornecedores SET endereco = ?, uf = ?, complemento = ?, principal = ?, cep = ? WHERE id = ?`;
            db.query(query, [endereco, uf, complemento, principal, cep], function (error) {
                if (error)
                    reject(error);
                resolve("Edição realizada com sucesso.")
            })
        })
}
export async function deletarClienteEndereco(cliente_id) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM cliente_enderecos WHERE cliente_id = ?"
        db.query(query, [cliente_id], function (error) {
            if (error)
                reject(error)

            resolve("Cliente endereço excluído com sucesso");
        })
    })
}