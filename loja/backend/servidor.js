import express from 'express'
import cors from 'cors'

import { cadastrarProduto, listarProdutos, deletarProduto } from './services/ProdutoService.js'
import { cadastrarCarrinho, deletarCarrinho, listarCarrinhos } from './services/CarrinhoService.js'
import fileUpload from 'express-fileupload';
import ClienteController from './Controller/ClienteController.js'
import FornecedorController from './Controller/FornecedorController.js'
import CategoriaController from './Controller/CategoriaController.js'

const app = express()
const porta = 3000

app.use(fileUpload());
app.use('/uploads', express.static('./uploads'));

app.use(cors())
app.use(express.json())

app.use('/cliente', ClienteController)
app.use('/fornecedor', FornecedorController)
app.use('/categoria', CategoriaController)

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