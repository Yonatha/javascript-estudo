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

(async () => {
    try {
      const clienteEncontrado = await clienteService.findByCpf('857.272.210-65');
      console.log(clienteEncontrado);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      // Encerre a conexão com o banco de dados ou realize outras operações necessárias aqui
    }
  })();
  
db.end()