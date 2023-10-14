import db from "../config/db.js"

export async function cadastrarCarrinho(carrinho) {
    const { cliente_id } = carrinho
    const carrinhoCadastrado = await findCarrinhoByClientId(cliente_id)
    if (carrinhoCadastrado)
        return "PRODUTOS ADICIONADOS AO CARRINHO EXISTENTE"

    return new Promise((resolve, reject) => {
        const query = "INSERT INTO carrinhos (cliente_id) values (?)"
        db.query(query, [cliente_id], function (error, carrinho) {
            if (error)
                reject(error)

            resolve("Carrinho criado com sucesso")
        })
    });
}
async function findCarrinhoByClientId(cliente_id) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM carrinhos WHERE cliente_id = ?"
        db.query(query, [cliente_id], function (error, carrinho) {
            if (error)
                reject(error)

            if (carrinho.length > 0)
                resolve(carrinho[0])

            resolve(null);
        })
    })
}

export async function listarCarrinhos() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM carrinhos"
        db.query(query, function (error, carrinhos) {
            if (error)
                reject(error)

            resolve(carrinhos)

        })
    })
}

