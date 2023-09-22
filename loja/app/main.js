const db = require("./config/db")
const EnderecoService = require("./services/EnderecoService")
const ClienteService = require("./services/ClienteService")
const FornecedorService = require("./services/FornecedorService")
const CarrinhoProdutoService = require("./services/CarrinhoProdutoService")
const CategoriasService = require("./services/CategoriaService")

const clientId = 1
const enderecoService = new EnderecoService();
// enderecoService.findAddressByClientId(clientId)

const clienteService = new ClienteService();
// clienteService.findAllClients()

const fornecedorService = new FornecedorService();
const carrinhoProdutoService = new CarrinhoProdutoService();
const categoriasService = new CategoriasService();

// 857.272.210-65
// 857.272.210-66

/*
clienteService.findByCpf('857.272.210-65', function (clienteEncontrado) {
    if (clienteEncontrado) {
        console.log('Cliente encontrado:', clienteEncontrado);
    } else {
        console.log('Cliente não encontrado');
    }
});

fornecedorService.findByCnpj('50.057.775/0001-71', function (fornecedorEncontrado){
    if (fornecedorEncontrado) {
        console.log('Fornecedor encontrado: ', fornecedorEncontrado);
    } else {
        console.log('Fornecedor não encontrado.')
    }
})

carrinhoProdutoService.findByQuantidade('5', function (carrinhoProdutoEncontrado) {
    if (carrinhoProdutoEncontrado) {
        console.log ('Produto no carrinho: ', carrinhoProdutoEncontrado)
    } else {
        console.log ('Carrinho vazio.')   
    }
})

*/

CategoriasService.findByNome('Eletrodomestico'), function(categoriaEncontrada) {
    if (categoriaEncontrada) {
        console.log('Categoria encontrada: ', categoriaEncontrada)
    } else {
        console.log('Categoria não encontrada.')
    }
}

db.end()