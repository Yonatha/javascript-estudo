import express from 'express'

const router = express.Router()

import {
    cadastrarFornecedor,
    listarFornecedores,
    listarFornecedoresHabilitados,
    deletarFornecedor,
    editarFornecedor,
    exibirFornecedor
} from "../services/FornecedorService.js"

router.get('/', async function (request, responce) {
    const fornecedores = await listarFornecedores()
    responce.json(fornecedores)
})

router.get('/:id', async function (request, responce) {
    const id = request.params.id
    let fornecedor = await exibirFornecedor(id)
    fornecedor.situacao = fornecedor.situacao ? true : false
    responce.send(fornecedor)
})

router.put(`/:id`, async function (request, responce) {
    const id = request.params.id
    const fornecedor = request.body
    const result = await editarFornecedor(id, fornecedor)
    responce.json(result)
})

router.post('/cadastrar', async function (request, responce) {
    const fornecedor = request.body
    const result = await cadastrarFornecedor(fornecedor)
    responce.json(result)
})

router.get('/habilitados', async function (request, responce) {
    const fornecedores = await listarFornecedoresHabilitados()
    responce.json(fornecedores)
})

router.delete('/:id', async function (request, responce) {
    const id = request.params.id
    const result = await deletarFornecedor(id)
    responce.send(result)
})

router.get('/', async function (request, responce) {
    const cnpj = request.body
    const resultado = validaCNPJ(cnpj)
    responce.json(resultado)
})

export default router