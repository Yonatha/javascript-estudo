var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Fabio052',
  database: 'loja'
});

module.exports = connection