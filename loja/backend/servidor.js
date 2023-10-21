import express from 'express'
import cors from 'cors'
import { cadastrarCliente, listarClientes, deletarCliente, editarCliente, exibirCliente } from './services/ClienteService.js'
import { cadastrarCategoria, listarCategorias, deletarCategoria } from './services/CategoriaServices.js'
import { cadastrarProduto, listarProdutos, deletarProduto } from './services/ProdutoService.js'
import { cadastrarFornecedor, listarFornecedores, deletarFornecedor } from "./services/FornecedorService.js"

const app = express()
const porta = 3000

app.use(cors())
app.use(express.json())

app.post('/cliente/cadastrar', async function (request, responce) {
  const cliente = request.body
  const result = await cadastrarCliente(cliente)
  responce.json(result)
})

app.get('/cliente', async function (request, responce) {
  const clientes = await listarClientes()
  responce.json(clientes)
})

app.delete('/cliente/:id', async function (request, responce) {
  const id = request.params.id
  const clientes = await deletarCliente(id)
  responce.send(clientes)
})

app.put('/cliente/:id', async function (request, response) {
  const id = request.params.id
  const cliente = request.body;
  const result = await editarCliente(id, cliente);
  response.json(result);
});

app.get('/cliente/:id', async function (request, response) {
  const id = request.params.id
  const cliente = await exibirCliente(id);
  response.json(cliente);
});

app.post('/fornecedor/cadastrar', async function (request, responce) {
  const fornecedor = request.body
  const result = await cadastrarFornecedor(fornecedor)
  responce.json(result)
})

app.get('/fornecedor', async function (request, responce) {
  const fornecedores = await listarFornecedores()
  responce.json(fornecedores)
})

app.delete('/fornecedor/:id', async function (request, responce) {
  const id = request.params.id
  const result = await deletarFornecedor(id)
  responce.send(result)
})

app.post('/categoria/cadastrar', async function (request, responce) {
  const id = request.body
  const result = await cadastrarCategoria(id)
  responce.json(result)
})

app.get('/categoria', async function (request, responce) {
  const categorias = await listarCategorias()
  responce.json(categorias)
})

app.post('/produto/cadastrar', async function (request, responce) {
  const produto = request.body
  const result = await cadastrarProduto(produto)
  responce.json(result)
})

app.get('/produto', async function (request, responce) {
  const produtos = await listarProdutos()
  responce.json (produtos)
})

app.delete('/produto/:id', async function (request, responce) {
  const id = request.params.id
  const result = await deletarProduto(id)
  responce.send(result)
})

console.log(`Servidor UP http://localhost:${porta}`);
app.listen(porta)