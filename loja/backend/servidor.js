import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload';

// Controllers
import ClienteController from './/Controller/ClienteController.js'
import FornecedorController from './/Controller/FornecedorController.js'
import ProdutoController from './/Controller/ProdutoController.js'
import CategoriaController from './Controller/CategoriaController.js'
import AutenticacaoController from './Controller/AutenticacaoController.js'
import CarrinhoController from './Controller/CarrinhoController.js'
import CheckoutController from './Controller/CheckoutController.js'

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
app.use('/carrinho', CarrinhoController)
app.use('/checkout', CheckoutController)

app.listen(porta, () => `Servidor UP http://localhost:${porta}`)