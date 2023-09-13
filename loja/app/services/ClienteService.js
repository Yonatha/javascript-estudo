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

    findByCpf(cpf, callback) {
        const sql = 'SELECT * FROM clientes WHERE cpf = ?';
      
        db.execute(sql, [cpf], function(error, clientes, fields) {
          if (error) {
            throw error;
          }
      
          if (clientes.length > 0) {
            callback(clientes[0]);
          } else {
            callback(null);
          }
        });
      }

    /* findByEmail(email){
        db.query()
    }*/
}
    



module.exports = ClienteService;