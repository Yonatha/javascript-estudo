import express from 'express'

const router = express.Router()

router.post('/', function (request, response) {
    const payload = request.body
    console.log(payload);
    const valorSemDesconto = (payload.total)
    const desconto = ((10 / 100) * valorSemDesconto).toFixed(2)
    const valorComDesconto = (valorSemDesconto - desconto)
    
    response.json({
        valorSemDesconto,
        desconto,
        valorComDesconto
    })
})

export default router