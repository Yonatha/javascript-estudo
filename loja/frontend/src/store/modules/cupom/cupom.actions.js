import axios from 'axios'

const minhaApi = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      'Content-Type': 'application/json'
    }
})

const actions = {
    aplicarCupom: async (context) => {
        const {cupom, total } = context.rootState.carrinho
        const payload = { total, cupom }
        const response = await minhaApi.post("/cupom", payload)
        context.rootState.carrinho.total = response.data.valorComDesconto
        context.rootState.carrinho.valores = response.data
    }
}

export default actions