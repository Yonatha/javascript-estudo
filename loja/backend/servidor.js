import express from 'express'
import cors from 'cors'
import {
  cadastrarCliente,
  listarClientes
} from './services/ClienteService.js'
import {cadastrarFornecedor} from "./services/FornecedorService.js"
import { 
  cadastrarCategoria,
  listarCategorias,
  deletarCategoria } from './services/CategoriaServices.js'
// import {cadastrarProduto} from './services/ProdutoService.js'
import { listarCategorias } from './services/CategoriaServices.js'
import {
  cadastrarFornecedor,
  listarFornecedores,
  deletarFornecedor
} from "./services/FornecedorService.js"

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
/*
app.post('/produto/cadastrar', async function (request, responce) {
  const produto = request.body
  const result = await cadastrarProduto(produto)
  responce.json(produtos)
})
app.post('/produto/cadastrar', async function (request, responce) {
  const produto = request.body
  const result = await cadastrarProduto(produto)
  responce.json(produtos)
})*/

app.delete('/categoria/:id', async function (request, responce) {
  const id = request.params.id
  const result = await deletarCategoria(id)
  responce.send(result)
})

console.log(`Servidor UP http://localhost:${porta}`);
app.listen(porta)