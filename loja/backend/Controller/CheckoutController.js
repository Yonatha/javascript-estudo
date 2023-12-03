import express from 'express'

const router = express.Router()

import {
    exibirCliente
  } from '../services/CheckoutService.js'

router.get('/:id', async function (request, responce) {
    const id = request.params.id
    const cliente = await exibirCliente(id)
    responce.send(cliente)
  })

  export default router