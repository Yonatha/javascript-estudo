import express from 'express'
import cors from 'cors'
import {cadastrarCliente, listarClientes} from './services/ClienteService.js'
import {cadastrarFornecedor} from "./services/FornecedorService.js"
import {listarProdutos} from "./services/ProdutoService.js"

const app = express()
const porta = 3000

app.use(cors())
app.use(express.json())

app.get('/cliente', async function (request, responce) {
  const clientes = await listarClientes()
  responce.json(clientes)
})

app.post('/cliente/cadastrar', async function (request, responce) {
  const cliente = request.body
  const result = await cadastrarCliente(cliente)
  responce.json(result)
})

app.post('/fornecedor/cadastrar', async function (request, responce) {
  const fornecedor = request.body
  const result = await cadastrarFornecedor(fornecedor)
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

console.log(`Servidor UP http://localhost:${porta}`);
app.listen(porta)