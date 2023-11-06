import express from 'express'
import cors from 'cors'

import { cadastrarCategoria, listarCategorias, deletarCategoria, exibirCategoria, editarCategoria } from './services/CategoriaServices.js'
import { cadastrarProduto, listarProdutos, deletarProduto } from './services/ProdutoService.js'
import { cadastrarFornecedor, listarFornecedores, listarFornecedoresHabilitados, deletarFornecedor, editarFornecedor, exibirFornecedor } from "./services/FornecedorService.js"
import { cadastrarCarrinho, deletarCarrinho, listarCarrinhos } from './services/CarrinhoService.js'
import fileUpload from 'express-fileupload';

import ClienteController from './/Controller/ClienteController.js'

const app = express()
const porta = 3000

app.use(fileUpload());
app.use('/uploads', express.static('./uploads'));

app.use(cors())
app.use(express.json())

app.use('/cliente', ClienteController)

app.get('/fornecedor/', async function (request, responce) {
  const fornecedores = await listarFornecedores()
  responce.json(fornecedores)
})

app.get('/fornecedor/:id', async function (request, responce) {
  const id = request.params.id
  let fornecedor = await exibirFornecedor(id)
  fornecedor.situacao = fornecedor.situacao ? true : false
  responce.send(fornecedor)
})

app.put(`/fornecedor/:id`, async function(request, responce) {
  const id = request.params.id
  const fornecedor = request.body
  const result = await editarFornecedor (id, fornecedor)
  responce.json(result)
})

app.post('/fornecedor/cadastrar', async function (request, responce) {
  const fornecedor = request.body
  const result = await cadastrarFornecedor(fornecedor)
  responce.json(result)
})

app.get('/fornecedor/habilitados', async function (request, responce) {
  const fornecedores = await listarFornecedoresHabilitados()
  responce.json(fornecedores)
})

app.delete('/fornecedor/:id', async function (request, responce) {
  const id = request.params.id
  const result = await deletarFornecedor(id)
  responce.send(result)
})

app.get('/fornecedor', async function (request, responce) {
  const cnpj = request.body
  const resultado = validaCNPJ(cnpj)
  responce.json(resultado)
})

app.post('/categoria/cadastrar', async function (request, responce) {
  const categoria = request.body
  const result = await cadastrarCategoria(categoria)
  responce.json(result)
})

app.get('/categoria', async function (request, responce) {
  const categorias = await listarCategorias()
  responce.json(categorias)
})

app.delete('/categoria/:id', async function (request, responce) {
  const id = request.params.id
  const result = await deletarCategoria(id)
  responce.send(result)
})

app.get('/categoria/:id', async function (request, responce) {
  const id = request.params.id
  const categoria = await exibirCategoria(id)
  responce.send(categoria)
})

app.put('/categoria/:id', async function (request, responce) {
  const id = request.params.id
  const categoria = request.body
  const result = await editarCategoria(id, categoria)
  responce.json(result)
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

app.post('/carrinho/cadastrar', async function (request, responce) {
  const carrinhos = request.body
  const result = await cadastrarCarrinho(carrinhos)
  responce.json(result)
})

app.get('/carrinho', async function (request, responce) {
  const carrinhos = await listarCarrinhos()
  responce.json(carrinhos)
})

app.delete('/carrinho/:id', async function (request, responce) {
  const id = request.params.id
  const result = await deletarCarrinho(id)
  responce.send(result)
})

console.log(`Servidor UP http://localhost:${porta}`);
app.listen(porta)