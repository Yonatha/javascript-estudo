const db = require("../config/db")
db.connect()

class EnderecoService {
    findAddressByClientId(clientId) {
        db.query(`select * from cliente_enderecos where cliente_id  = ${clientId};`, function (error, enderecos, fields) {
            enderecos.forEach(endereco => {
                console.log(endereco.endereco)
            });
        });
    }
}

module.exports = EnderecoService;

