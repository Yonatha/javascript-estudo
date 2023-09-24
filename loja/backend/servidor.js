import express from 'express'
import cors from 'cors'

const app = express()
const porta = 3000

app.use(cors())

app.get('/', function (request, responce) {
  res.send('Hello World')
})

app.post('/cliente/cadastrar', function (request, responce) {
  responce.json('Cliente cadastrado com sucesso')
})

console.log(`Servidor UP http://localhost:${porta}`);
app.listen(porta)