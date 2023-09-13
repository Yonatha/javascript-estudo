const db = require("../config/db")
db.connect()

class ClienteService {
    findAllClients() {
        db.query(`select * from clientes`, function (error, clientes, fields) {

            if(error) throw error

            clientes.forEach(cliente => {
                console.log(cliente.nome)
            });
        });
    }

    findByCpf(cpf){
        db.query(`select * from clientes where cpf = "${cpf}";`, function(
            error, clientes, fields) {

            if(error) 
                throw error

            console.log(clientes[0]);
        });
    }

    /* findByEmail(email){
        db.query()
    }*/
}
    



module.exports = ClienteService;