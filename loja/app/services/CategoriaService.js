const db = require("../config/db")
db.connect()

class CategoriasService {
    findAllcategorias() {
        db.query(`SELECT * FROM categorias`, function (error, categorias, fields) {
            if (error) throw error

            categorias.forEach(categorias => {
                console.log(categorias.nome)
            });
        });
    }
    findByNome(nome, callback) {
        const sql = 'SELECT * FROM categorias WHERE nome = ?';

        db.execute(sql, [nome], function (error, categorias, fields) {
            if (error) {
                throw error;
            } if (categorias.length > 0) {
                callback(categorias[0]);
            } else {
                callback(null);
            }
        });
    }
}

module.exports = CategoriasService