import axios from 'axios'

const minhaApi = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      'Content-Type': 'application/json'
    }
})


const actions = {
    adicionarProduto: async ({commit, state}, produto) => {
        commit("adicionar", produto)
        const payload = { cliente_id: state.cliente_id, produto_id: produto.id }
        const response = await minhaApi.post("/carrinho/adicionar", payload)
        console.log(response.data);
    },
    removerProduto: ({commit}, id) => {
        console.log("excluindo produto " + id);
        commit("remover", id)
    },
    listar: async ({commit}) => {
        const response = await minhaApi.get("/carrinho/listar")
        commit("listar", response.data)
    },
    finalizarCompra: async () => {
        const response = await minhaApi.post("/carrinho/finalizarCompra")
        console.log(response.data);
    }
}

export default actions