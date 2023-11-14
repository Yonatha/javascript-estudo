const actions = {
    adicionarFornecedor: ({commit}, fornecedor) => {
        commit("adicionar", fornecedor)
    },
    removerFornecedor: ({commit}, id) => {
        console.log("Excluindo fornecedor " + id)
        commit("remover", id)
    },
    listarFornecedores: () => {
        
    }
}


export default actions