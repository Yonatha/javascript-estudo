import express from 'express'

const router = express.Router()

import {
    cadastrarCategoria,
    listarCategorias,
    deletarCategoria,
    exibirCategoria,
    editarCategoria
} from '../services/CategoriaServices.js'

router.post('/cadastrar', async function (request, responce) {
    const categoria = request.body
    const result = await cadastrarCategoria(categoria)
    responce.json(result)
})

router.get('/', async function (request, responce) {
    const categorias = await listarCategorias()
    responce.json(categorias)
})

router.delete('/:id', async function (request, responce) {
    const id = request.params.id
    const result = await deletarCategoria(id)
    responce.send(result)
})

router.get('/:id', async function (request, responce) {
    const id = request.params.id
    const categoria = await exibirCategoria(id)
    responce.send(categoria)
})

router.put('/:id', async function (request, responce) {
    const id = request.params.id
    const categoria = request.body
    const result = await editarCategoria(id, categoria)
    responce.json(result)
})

export default router