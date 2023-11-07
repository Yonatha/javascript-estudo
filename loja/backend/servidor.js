import express from 'express'
import cors from 'cors'

import { cadastrarCategoria, listarCategorias, deletarCategoria, exibirCategoria, editarCategoria } from './services/CategoriaServices.js'
import { cadastrarCarrinho, deletarCarrinho, listarCarrinhos } from './services/CarrinhoService.js'
import fileUpload from 'express-fileupload';

import ClienteController from './/Controller/ClienteController.js'
import FornecedorController from './/Controller/FornecedorController.js'
import ProdutoController from './/Controller/ProdutoController.js'
import { cadastrarProduto, listarProdutos, deletarProduto } from './services/ProdutoService.js'
import { cadastrarCarrinho, deletarCarrinho, listarCarrinhos } from './services/CarrinhoService.js'
import fileUpload from 'express-fileupload';

const app = express()
const porta = 3000

app.use(fileUpload());
app.use('/uploads', express.static('./uploads'));

app.use(cors())
app.use(express.json())

app.use('/cliente', ClienteController)
app.use('/fornecedor', FornecedorController)
app.use('/produto', ProdutoController)

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