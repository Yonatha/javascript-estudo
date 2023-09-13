const db = require("./config/db")
const EnderecoService = require("./services/EnderecoService")
const ClienteService = require("./services/ClienteService")

const clientId = 1
const enderecoService = new EnderecoService()
// enderecoService.findAddressByClientId(clientId)

const clienteService = new ClienteService()
// clienteService.findAllClients()

// 857.272.210-65
// 857.272.210-66


clienteService.findByCpf('857.272.210-65', function (clienteEncontrado) {
    if (clienteEncontrado) {
        console.log('Cliente encontrado:', clienteEncontrado);
    } else {
        console.log('Cliente não encontrado');
    }
});

db.end()