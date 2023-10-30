import db from "../config/db.js"

db.connect()

export async function cadastrarCarrinho(carrinho) {
    const { cliente_id } = carrinho
    const carrinhoCadastrado = await findCarrinhoByClienteId(cliente_id)

    if (carrinhoCadastrado)
        return "Carrinho já cadastrado."

    return new Promise((resolve, reject) => {
        const query = `INSERT INTO carrinhos (cliente_id) VALUES (?)`
        db.query(query, [cliente_id], function (error, carrinho) {
            if (error)
                reject(error);

            resolve("Carrinho criado com sucesso");
        });
    });
}

export function findCarrinhoByClienteId(cliente_id) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM carrinhos WHERE cliente_id = ?'
        db.query(query, [cliente_id], function (error, carrinho) {
            if (error) {
                reject(error);
            }

            if (carrinho.length > 0) {
                resolve(carrinho[0]);
            } else {
                resolve(null);
            }
        });
    });
}

export async function listarCarrinhos() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM carrinhos`;
        db.query(query, function (error, carrinhos) {
            if (error)
                reject(error);

            resolve(carrinhos);
        });
    });
}

export async function deletarCarrinho(cliente_id) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM carrinhos WHERE cliente_id = ?"
        db.query(query, [cliente_id], function (error) {
            if (error)
                reject(error)

            resolve("Carrinho excluído com sucesso");
        })
    })
}
