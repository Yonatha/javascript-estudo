import express from 'express'
import cors from 'cors'
import { cadastrarCarrinho, deletarCarrinho, listarCarrinhos } from './services/CarrinhoService.js'
import fileUpload from 'express-fileupload';

// Controllers
import ClienteController from './/Controller/ClienteController.js'
import FornecedorController from './/Controller/FornecedorController.js'
import ProdutoController from './/Controller/ProdutoController.js'
import CategoriaController from './Controller/CategoriaController.js'
import AutenticacaoController from './Controller/AutenticacaoController.js'

const app = express()
const porta = 3000

app.use(fileUpload());
app.use('/uploads', express.static('./uploads'));

app.use(cors())
app.use(express.json())

app.use('/cliente', ClienteController)
app.use('/fornecedor', FornecedorController)
app.use('/categoria', CategoriaController)
app.use('/produto', ProdutoController)
app.use('/login', AutenticacaoController)

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

app.listen(porta, () => `Servidor UP http://localhost:${porta}`)