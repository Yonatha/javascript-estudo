import express from 'express'

import { 
    adicionarProdutoCarrinho,
    listarProdutosCarrinho
} from '../services/CarrinhoService.js'

const router = express.Router()

router.post('/adicionar', async function (request, response) {
    const payload = request.body
    const result = await adicionarProdutoCarrinho(payload)
    response.json(result)
})

router.get('/listar', async function (request, response) {
    const result = await listarProdutosCarrinho()
    response.json(result)
})

router.post('/finalizarCompra', async function (request, response) {
    response.json("pong")
})

export default router