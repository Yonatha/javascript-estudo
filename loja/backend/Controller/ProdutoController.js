import express from 'express'

const router = express.Router()

import {
    cadastrarProduto,
    listarProdutos,
    deletarProduto
} from '../services/ProdutoService.js'


router.post('/cadastrar', async function (request, responce) {
    const produto = request.body
    const result = await cadastrarProduto(produto)
    responce.json(result)
})

router.get('/', async function (request, responce) {
    const produtos = await listarProdutos()
    responce.json(produtos)
})

router.delete('/:id', async function (request, responce) {
    const id = request.params.id
    const result = await deletarProduto(id)
    responce.send(result)
})

export default router