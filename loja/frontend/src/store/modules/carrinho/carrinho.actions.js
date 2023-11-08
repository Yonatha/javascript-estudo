const actions = {
    adicionarProduto: ({commit}, produto) => {
        commit("adicionar", produto)
    },
    removerProduto: (id) => {
        console.log("excluindo produto " + id);
    },
    listarProdutos: () => {
        
    }
}

export default actions