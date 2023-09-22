const db = require("../config/db")
db.connect()

class FornecedorService {
    findAllFornecedores() {
        db.query(`SELECT * FROM fornecedores`, function (error, fornecedores, fields) {
            if (error) throw error

            fornecedores.forEach(fornecedor => {
                console.log(fornecedor.nome)
            });
        });
    }

    findByCnpj(cnpj, callback) {
        const sql = 'SELECT * FROM fornecedores WHERE cnpj = ?';

        db.execute(sql, [cnpj], function (error, fornecedores, fields) {
            if (error) {
                throw error;
            } if (fornecedores.length > 0) {
                callback(fornecedores[0]);
            } else {
                callback(null);
            }
        });
    }
}

module.exports = FornecedorService;