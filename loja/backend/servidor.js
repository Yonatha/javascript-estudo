import express from 'express'
import cors from 'cors'
import {
  cadastrarCliente, 
  listarClientes
} from './services/ClienteService.js'
import {cadastrarFornecedor} from "./services/FornecedorService.js"

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

app.post('/categoria/cadastrar', async function (request, responce) {
  const id = request.body
  const result = await cadastrarCategoria(id)
  responce.json(result)
})

console.log(`Servidor UP http://localhost:${porta}`);
app.listen(porta)