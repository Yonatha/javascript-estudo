const actions = {
    adicionarProduto: ({commit}, produto) => {
        commit("adicionar", produto)
    },
    removerProduto: ({commit}, id) => {
        console.log("excluindo produto " + id);
        commit("remover", id)
    },
    listarProdutos: () => {
        
    }
}

export default actions