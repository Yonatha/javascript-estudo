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

            resolve("Carrinho Produtocriado com sucesso");
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

export async function listarProdutosCarrinho() {
    const cliente_id = 1
    return new Promise((resolve, reject) => {
        const query = `select
        p.id,
        p.nome,
        p.valor,
        p.imagem
    from
        carrinho_produtos cp
    join carrinhos c on
        c.id = cp.carrinho_id
    join produtos p on
        p.id = cp.produto_id
    where
        c.cliente_id = ?
    order by
        p.valor desc`;
        db.query(query, [cliente_id], function (error, carrinhos) {
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

export async function deletarCarrinhoProduto(produto_id, carrinho_id) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM carrinho_produtos JOIN carrinhos on carrinhos.id = carrinho_produtos.carrinho_id WHERE carrinhos.cliente_id = ?`;
        db.query(query, [produto_id, carrinho_id], function (error) {
            if (error)
                reject(error);

            resolve("Carrinho Produto deletado com sucesso");
        });
    });
}