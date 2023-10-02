import express from 'express'
import cors from 'cors'
import {cadastrarCliente} from './services/ClienteService.js'

const app = express()
const porta = 3000

app.use(cors())
app.use(express.json())

app.get('/cliente', function (request, responce) {
  const clientes = [
    {nome: "Fulano"},
    {nome: "Cicrano"},
    {nome: "Beutrano"}
  ]
  responce.json(clientes)
})

app.post('/cliente/cadastrar', async function (request, responce) {
  const cliente = request.body
  const result = await cadastrarCliente(cliente)
  responce.json(result)
})

console.log(`Servidor UP http://localhost:${porta}`);
app.listen(porta)