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

    findByCpf(cpf) {
        return new Promise((resolve, reject) => {
          const sql = 'SELECT * FROM clientes WHERE cpf = ?';
      
          db.query(sql, [cpf], function (error, clientes, fields) {
            if (error) {
              reject(error);
            }
      
            if (clientes.length > 0) {
              resolve(clientes[0]);
            } else {
              resolve(null);
            }
          });
        });
      }
      
    /* findByEmail(email){
        db.query()
    }*/
}
    



module.exports = ClienteService;