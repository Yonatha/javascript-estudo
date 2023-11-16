import express from 'express'

import { 
    adicionarProdutoCarrinho
} from '../services/CarrinhoService.js'

const router = express.Router()

router.post('/adicionar', async function (request, responce) {
    const payload = request.body
    const result = await adicionarProdutoCarrinho(payload)
    responce.json(result)
})

export default router