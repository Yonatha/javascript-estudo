import db from "../config/db.js"

db.connect()

export async function adicionarProdutoCarrinho(payload) {
    const { cliente_id, produto_id } = payload
    const carrinho = await findCarrinhoByClienteId(cliente_id)
    if (!carrinho){
        criarNovoCarrinho(cliente_id)
        const carrinhoExistente = await findCarrinhoByClienteId(cliente_id)
        return inserirCarrinhoProduto(produto_id, carrinhoExistente.id)
    } 

    return inserirCarrinhoProduto(produto_id, carrinho.id)
}

async function criarNovoCarrinho(cliente_id) {
    new Promise((resolve, reject) => {
        const query = `INSERT INTO carrinhos (cliente_id) VALUES (?)`
        db.query(query, [cliente_id], function (error) {
            if (error)
                reject(error);

            resolve("Carrinho criado com sucesso");
        });
    });
}

async function inserirCarrinhoProduto(produto_id, carrinho_id) {
    return new Promise((resolve, reject) => {
        const quantidade = 1 // TODO enviar essa quantidade do frontend
        const query = `INSERT INTO carrinho_produtos ( produto_id, carrinho_id, quantidade ) VALUES (?,?,?)`
        db.query(query, [produto_id, carrinho_id, quantidade], function (error) {
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
