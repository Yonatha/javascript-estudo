const db = require("../config/db")
db.connect()

class CarrinhoProdutoService {
    findAllcarrinho_produtos() {
        db.query(`select * from carrinho_produtos`, function (error, carrinho_produtos, fields) {
            if (error) throw error

            carrinho_produtos.forEach(carrinho_produtos => {
                console.log(carrinho_produtos.quantidade)
            });
        });
    }
    findByQuantidade(quantidade, callback) {
        const sql = 'SELECT * FROM carrinho_produtos WHERE quantidade = ?';

        db.execute(sql, [quantidade], function (error, carrinho_produtos, fields) {
            if (error) {
                throw error;
            } if (carrinho_produtos.length > 0) {
                callback(carrinho_produtos[0]);
            } else {
                callback(null);
            }
        })
    }
}


module.exports = CarrinhoProdutoService;