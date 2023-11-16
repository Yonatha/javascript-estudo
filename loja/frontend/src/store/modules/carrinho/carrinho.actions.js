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
    listarProdutos: () => {
        
    }
}

export default actions